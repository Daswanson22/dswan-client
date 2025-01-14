import React from 'react';

const Education = () => {
  return (
    <div className=" p-6">

      <section>
        <h2 className="text-2xl font-bold text-teal-400">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">California State University Long Beach</h3>
          <p className="text-lg">GPA: 3.4 | Graduating December 2024</p>
          <p className="mt-2 font-medium">Computer Science Undergraduate</p>
          <ul className="list-disc list-inside mt-2">
            <li>Algorithms</li>
            <li>Web Development</li>
            <li>Software Engineering</li>
            <li>UI/UX Design</li>
            <li>Computer Systems</li>
            <li>Cybersecurity</li>
            <li>Statistics and Probability</li>
            <li>Unity Game Development</li>
            <li>Systems Programming</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Study Abroad | University of Kent</h3>
          <p className="text-lg">GPA: 4.0</p>
          <p className="mt-2">Study Abroad in the United Kingdom with a Computer Science emphasis.</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Moorpark College</h3>
          <p className="text-lg">GPA: 3.5 | August 2019 - May 2022</p>
          <p className="mt-2">Associates in Computer Science, Mathematics, and Natural Sciences</p>
        </div>
      </section>
    </div>
  );
};

export default Education;
