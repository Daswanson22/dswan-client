import React from 'react';
import resumeData from '../me/resume-data.json';

const Resume = () => {
  const { contact, summary, skills, education, experience } = resumeData;

  return (
    <div className="p-6 space-y-8">
      <p className="text-center text-gray-400 underline pb-2">Last updated: {resumeData.generatedAt}</p>

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-fun-teal">{contact.name}</h1>
        <p className="text-lg">{contact.email} | {contact.phone}</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-teal-400 border border-teal-400 px-3 py-1 hover:bg-teal-400 hover:text-black transition-colors duration-200">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="text-teal-400 border border-teal-400 px-3 py-1 hover:bg-teal-400 hover:text-black transition-colors duration-200">GitHub</a>
          <a href="/me/Swanson-Resume.pdf" download="dylan_swanson_resume.pdf" className="text-fun-teal border border-fun-teal px-3 py-1 hover:bg-fun-teal hover:text-black transition-colors duration-200">Download PDF</a>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section>
          <h2 className="text-2xl font-bold text-teal-400">Summary</h2>
          <p className="mt-2 text-gray-300 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold text-teal-400">Experience</h2>
        {experience.map((job, i) => (
          <div key={i} className="mt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <span className="text-gray-400 text-sm">{job.dates}</span>
            </div>
            <p className="text-teal-300 font-medium">{job.title}</p>
            <p className="text-gray-400 text-sm">{job.location}</p>
            {job.description && <p className="mt-1 text-gray-300 italic">{job.description}</p>}
            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-300">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-teal-400">Education</h2>
        {education.map((entry, i) => (
          <div key={i} className="mt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="text-xl font-semibold">{entry.school}</h3>
              <span className="text-gray-400 text-sm">{entry.location}</span>
            </div>
            <p className="font-medium">{entry.degree}</p>
            <p className="text-gray-400">Graduated {entry.graduated}</p>
            {entry.coursework.length > 0 && (
              <p className="mt-1 text-gray-300 text-sm">
                <span className="font-medium">Coursework: </span>{entry.coursework.join(', ')}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold text-teal-400">Skills</h2>
        <div className="mt-4 space-y-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <span className="font-semibold text-gray-200">{category}: </span>
              <span className="text-gray-300">{items.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
