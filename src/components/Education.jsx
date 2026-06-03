import React from 'react';
import resumeData from '../me/resume-data.json';

const Education = () => {
  const { education } = resumeData;

  return (
    <div className="text-left p-6 space-y-8">
      <p className="underline text-gray-400">Last updated: {resumeData.generatedAt}</p>

      <section>
        <h2 className="text-2xl font-bold text-teal-400">Education</h2>
        {education.map((entry, i) => (
          <div key={i} className="mt-4">
            <h3 className="text-xl font-semibold">{entry.school}</h3>
            <p className="text-gray-300">{entry.location}</p>
            <p className="mt-1 font-medium">{entry.degree}</p>
            <p className="text-gray-400">Graduated {entry.graduated}</p>
            {entry.coursework.length > 0 && (
              <div className="mt-2">
                <p className="font-medium">Relevant Coursework:</p>
                <p className="text-gray-300">{entry.coursework.join(', ')}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-teal-400">Certifications</h2>
        <div className="mt-4 space-y-1">
          <h3 className="text-xl font-semibold">CompTIA Network+</h3>
          <h3 className="text-xl font-semibold">Microsoft AZ-900, Azure Fundamentals</h3>
        </div>
      </section>
    </div>
  );
};

export default Education;
