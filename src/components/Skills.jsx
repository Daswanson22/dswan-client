import React from 'react';

const skillData = [
  {
    title: 'Project Management Skills',
    skills: ['Project Coordination', 'Task Prioritization', 'Risk Management', 'Client Communication', 'Team Leadership', 'Time Management', 'Documentation Management']
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C#', 'C++']
  },
  {
    title: 'Frameworks/Technologies',
    skills: ['React', 'Tailwind', 'JQuery', 'Express.js', 'Git', 'NGINX']
  },
  {
    title: 'Database\'s',
    skills: ['Google Firebase', 'SQL', 'MongoDB']
  },
  {
    title: 'Tools',
    skills: ['AWS (EC2, S3, Cloudfront, IAM)', 'GCP (Compute Engine, VPC, IAM)', 'Postman', 'Unity']
  }
]

const Skills = () => {
  return (
    <div className="space-y-4 flex flex-col items-start justify-center text-white bg-opacity-25 rounded-md">
      <h2 className="text-4xl text-center bg-light-black py-2 px-8 border-solid border-b-2 border-fun-teal font-medium text-fun-teal">Skills</h2>

      <div className='flex justify-between items-start flex-wrap'>
        {skillData.map((skill, index) => (
          <div key={index} className="w-[300px] h-[300px] border p-2">
            <h3 className="text-2xl text-fun-teal">{skill.title}</h3>
            <ul className="list-disc list-inside">
              {skill.skills.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
