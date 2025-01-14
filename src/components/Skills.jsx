import React from 'react';

const Skills = () => {
  return (
    <div className="space-y-4 flex flex-col items-start justify-center text-white bg-opacity-25 rounded-md">
      <h2 className="text-4xl text-center bg-light-black w-full py-2 font-medium text-fun-teal border-solid border-x-8 border-fun-teal">Skills</h2>

      <div className='bg-light-black flex justify-center items-center'>
        <div className="py-4 px-8 rounded-md border-solid border border-white w-fit">
          <h3 className="text-xl font-semibold text-fun-teal italic">Project Management Skills</h3>
          <p className="text-lg font-light">Project Coordination, Task Prioritization, Risk Management, Client Communication, Team Leadership, Time Management, Documentation Management</p>
          <h3 className="text-xl font-semibold text-fun-teal italic">Languages</h3>
          <p className="text-lg font-light">JavaScript, Python, Java, C#, C++</p>
          <h3 className="text-xl font-semibold mt-4 text-fun-teal italic">Frameworks/Technologies</h3>
          <p className="text-lg font-light">React, Tailwind, JQuery, Express.js, Git, NGINX</p>
          <h3 className="text-xl font-semibold mt-4 text-fun-teal italic">Database's</h3>
          <p className="text-lg font-light">Google Firebase, SQL, MongoDB</p>
          <h3 className="text-xl font-semibold mt-4 text-fun-teal italic">Tools</h3>
          <p className="text-lg font-light">AWS (EC2, S3, Cloudfront, IAM), Firebase, MongoDB,  Postman, Unity</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
