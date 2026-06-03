import React from 'react';
import resumeData from '../me/resume-data.json';
import resumePDF from '../me/Swanson-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faDownload, faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';

const COMPANY_DISPLAY = {
  'GIANT PARTNERS':              'Giant Partners',
  'SWANTECH':                    'SwanTech',
  'AEG WORLDWIDE, GLOBAL TECHNOLOGY': 'AEG Worldwide',
  'TORQ SPORTS':                 'TORQ Sports',
};

const Experience = () => {
  const { experience } = resumeData;

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Experience</h2>
        <p className="text-gray-400 mt-3 text-lg">Where I've worked and what I've built.</p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-6">
        {/* Vertical line — desktop only */}
        <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gray-700 hidden sm:block" />

        {experience.map((job, i) => (
          <div key={i} className="relative sm:pl-14">
            {/* Timeline dot */}
            <div className="absolute left-0 top-5 w-9 h-9 rounded-full bg-gray-950 border-2 border-fun-teal items-center justify-center hidden sm:flex shrink-0">
              <FontAwesomeIcon icon={faBriefcase} className="text-fun-teal text-xs" />
            </div>

            {/* Card */}
            <div className="flex flex-col gap-4 p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-fun-teal/40 transition-all duration-300 hover:-translate-y-0.5">
              {/* Top row: company + dates/location */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xl font-bold text-white">
                    {COMPANY_DISPLAY[job.company] ?? job.company}
                  </h3>
                  <p className="text-fun-teal font-semibold">{job.title}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="flex items-center gap-1.5 text-sm text-gray-400">
                    <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                    {job.dates}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xs" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              {job.description && (
                <p className="text-gray-400 italic text-sm border-l-2 border-gray-700 pl-3">
                  {job.description}
                </p>
              )}

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="text-fun-teal mt-1 shrink-0 text-xs">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Download CTA */}
      <div className="flex justify-center pt-2">
        <a
          href={resumePDF}
          download="Dylan_Swanson_Resume.pdf"
          className="flex items-center gap-3 px-8 py-3 border-2 border-fun-teal text-fun-teal font-semibold rounded-lg hover:bg-fun-teal hover:text-black transition-all duration-300 text-base group"
        >
          <FontAwesomeIcon icon={faDownload} className="group-hover:animate-bounce" />
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
