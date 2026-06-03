#!/usr/bin/env node
'use strict';

const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const PDF_PATH = path.join(__dirname, '../src/me/Swanson-Resume.pdf');
const OUT_PATH = path.join(__dirname, '../src/me/resume-data.json');

const clean = (s) => s.replace(/\s+/g, ' ').trim();

function extractSections(text) {
  const HEADERS = [
    'TECHNICAL SKILLS',
    'EDUCATION',
    'PROFESSIONAL EXPERIENCE',
    'DIGITAL PORTFOLIO',
  ];
  const positions = HEADERS
    .map((h) => ({ h, idx: text.indexOf(h) }))
    .filter((p) => p.idx >= 0)
    .sort((a, b) => a.idx - b.idx);

  const out = { HEADER: text.slice(0, positions[0]?.idx ?? text.length) };
  positions.forEach(({ h, idx }, i) => {
    out[h] = text.slice(idx + h.length, positions[i + 1]?.idx ?? text.length);
  });
  return out;
}

function parseContact(header) {
  const grab = (re) => (header.match(re) || [])[0] ?? '';

  // Some PDFs extract letter-spaced headings as "D Y L A N  S W A N S O N"
  // Detect single-char tokens and collapse, using double-space as word boundary
  let rawName = (header.match(/^([A-Z][A-Z ]+)\n/m) || [])[1]?.trim() ?? '';
  const tokens = rawName.split(' ');
  if (tokens.length > 2 && tokens.every((t) => t.length === 1)) {
    // Try double-space word boundaries from original
    const dsMatch = header.match(/^((?:[A-Z] ?)+)\n/m);
    if (dsMatch) {
      rawName = dsMatch[1].replace(/  +/g, '|').replace(/ /g, '').split('|')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
    }
  }

  return {
    name:     rawName || 'Dylan Swanson',
    email:    grab(/[\w.+-]+@[\w.-]+\.\w+/),
    phone:    grab(/\+1[\s(]*\d{3}[).\s-]*\d{3}[.\s-]\d{4}/),
    linkedin: grab(/https?:\/\/(?:www\.)?linkedin\.com\/in\/[^\s\n••]+/),
    github:   grab(/https?:\/\/github\.com\/[^\s\n••]+/),
    website:  grab(/https?:\/\/(?:www\.)?dswan\.[^\s\n••]+/),
  };
}

function parseSummary(header) {
  const lines = header.split('\n').map(clean).filter(Boolean);
  const urlIdx = lines.findIndex((l) => l.includes('linkedin.com'));
  return urlIdx >= 0 ? lines.slice(urlIdx + 1).join(' ') : '';
}

function parseSkills(section) {
  const skills = {};
  for (const line of section.split('\n')) {
    const m = line.match(/[▪•▸▪]\s*([^:]+):\s*(.+)/);
    if (!m) continue;
    skills[m[1].trim()] = m[2].split(',').map(clean).filter(Boolean);
  }
  return skills;
}

function parseEducation(section) {
  const entries = [];
  const lines = section.split('\n').map(clean).filter(Boolean);
  let cur = null;
  let courseworkLines = [];
  let inCoursework = false;

  for (const line of lines) {
    // School line: has pipe between school name and location
    if (line.includes('|') && /[A-Z]{2,}/.test(line.split('|')[0])) {
      if (cur) {
        cur.coursework = courseworkLines.join(' ').split(',').map(clean).filter(Boolean);
        entries.push(cur);
      }
      const [school, loc] = line.split('|').map(clean);
      cur = { school, location: loc, degree: '', graduated: '', coursework: [] };
      courseworkLines = [];
      inCoursework = false;
    } else if (cur) {
      if (/Bachelor|Master|Associate|B\.S\.|M\.S\./i.test(line)) {
        cur.degree = line;
      } else if (/Graduated|Graduating/i.test(line)) {
        cur.graduated = line.replace(/Graduated\s*/i, '').trim();
      } else if (/Relevant Coursework/i.test(line)) {
        courseworkLines = [line.replace(/Relevant Coursework:?\s*/i, '')];
        inCoursework = true;
      } else if (inCoursework && !/\|/.test(line)) {
        // Continue collecting wrapped coursework lines
        courseworkLines.push(line);
      }
    }
  }
  if (cur) {
    cur.coursework = courseworkLines.join(' ').split(',').map(clean).filter(Boolean);
    entries.push(cur);
  }
  return entries;
}

const MONTH = 'January|February|March|April|May|June|July|August|September|October|November|December';
const DATE_FULL_RE = new RegExp(`(${MONTH})\\s+\\d{4}\\s*[–-]\\s*(Present|${MONTH}\\s*\\d{0,4})?`);
const DATE_SIMPLE_RE = new RegExp(`^(${MONTH})\\s+\\d{4}$`);

function parseExperience(section) {
  const entries = [];
  const lines = section.split('\n').map(clean).filter(Boolean);
  let cur = null;
  let phase = 0; // 0=expect title, 1=expect description, 2=in bullets

  const isBullet = (l) => /^[▪•▸▪]/.test(l);
  const isDateContinuation = (l) =>
    l === 'Present' ||
    DATE_SIMPLE_RE.test(l) ||
    (cur?.dates?.match(/[–-]\s*$/) && DATE_SIMPLE_RE.test(l));

  for (const line of lines) {
    // Company line: "COMPANY NAME | Location ..."
    if (line.includes('|') && /[A-Z]{2,}/.test(line.split('|')[0])) {
      if (cur) entries.push(cur);
      const pipeIdx = line.indexOf('|');
      const company = line.slice(0, pipeIdx).trim();
      let rest = line.slice(pipeIdx + 1).trim();

      // Extract dates from end of the location string
      const dateM = rest.match(DATE_FULL_RE);
      let location = rest;
      let dates = '';
      if (dateM) {
        dates = dateM[0].trim();
        location = rest.slice(0, rest.indexOf(dateM[0])).trim();
      }

      cur = { company, location, dates, title: '', description: '', bullets: [] };
      phase = 0;
    } else if (cur) {
      if (isBullet(line)) {
        cur.bullets.push(line.replace(/^[▪•▸▪]\s*/, '').trim());
        phase = 2;
      } else if (phase === 2 && cur.bullets.length > 0 && !DATE_FULL_RE.test(line) && !isBullet(line)) {
        // Continuation of previous bullet (line wrap)
        cur.bullets[cur.bullets.length - 1] += ' ' + line;
      } else if (isDateContinuation(line) && phase === 0) {
        // Multi-line date: "June 2025 –\nPresent" or "April 2024 –\nAugust 2024"
        cur.dates = (cur.dates + ' ' + line).trim();
      } else if (phase === 0 && !DATE_FULL_RE.test(line) && !DATE_SIMPLE_RE.test(line) && line !== 'Present') {
        cur.title = line;
        phase = 1;
      } else if (phase === 1) {
        cur.description = line;
        phase = 2;
      }
    }
  }
  if (cur) entries.push(cur);
  return entries;
}

function parsePortfolio(section) {
  return (section.match(/https?:\/\/[^\s]+/g) || []).map(clean);
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error('PDF not found:', PDF_PATH);
    process.exit(1);
  }

  const { text } = await pdfParse(fs.readFileSync(PDF_PATH));
  const sec = extractSections(text);

  const data = {
    generatedAt: new Date().toISOString().split('T')[0],
    contact:    parseContact(sec.HEADER),
    summary:    parseSummary(sec.HEADER),
    skills:     parseSkills(sec['TECHNICAL SKILLS'] ?? ''),
    education:  parseEducation(sec.EDUCATION ?? ''),
    experience: parseExperience(sec['PROFESSIONAL EXPERIENCE'] ?? ''),
    portfolio:  parsePortfolio(sec['DIGITAL PORTFOLIO'] ?? ''),
  };

  // Normalize spaced-letter name that PDFs sometimes produce for styled headings
  const nameTokens = data.contact.name.split(' ');
  const isSpacedLetters = nameTokens.length > 2 && nameTokens.every((t) => t.length <= 1);
  const isMangledSingleWord = nameTokens.length === 1 && nameTokens[0].length > 8 && nameTokens[0] === nameTokens[0].toLowerCase().replace(/^./, c => c.toUpperCase());
  if (!data.contact.name || isSpacedLetters || isMangledSingleWord) {
    data.contact.name = 'Dylan Swanson';
    console.warn('  ⚠ Name could not be extracted cleanly from PDF heading — defaulted to "Dylan Swanson".');
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify(data, null, 2));

  console.log('✓ Parsed →', OUT_PATH);
  console.log(`  Contact:    ${data.contact.name} <${data.contact.email}>`);
  console.log(`  Skills:     ${Object.keys(data.skills).length} categories`);
  console.log(`  Experience: ${data.experience.length} positions`);
  console.log(`  Education:  ${data.education.length} entries`);
  console.log(`  Portfolio:  ${data.portfolio.length} links`);
}

main().catch((err) => {
  console.error('Parse failed:', err.message);
  process.exit(1);
});
