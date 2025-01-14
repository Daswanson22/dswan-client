import React from 'react';

const skillData = [
  {
    title: 'Project Management',
    skills: ['Project Coordination', 'Task Prioritization', 'Risk Management', 'Client Communication', 'Team Leadership', 'Time Management', 'Documentation Management']
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C#', 'C++']
  },
  {
    title: 'Frameworks/Technologies',
    skills: ['React.js', 'Node.js', 'Express.js', 'JQuery', 'Flask', 'Keras', ]
  },
  {
    title: 'Styling',
    skills: ['CSS', 'Bootstrap', 'Material UI', 'Tailwind CSS']
  },
  {
    title: 'Networking',
    skills: ['NGINX', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Firewalls', 'VPN', 'Load Balancers']
  },
  {
    title: 'Development',
    skills: ['Web Development', 'Game Development', 'API Development', 'Database Management', 'Server Management']
  },
  {
    title: 'Database\'s',
    skills: ['Google Firebase', 'MySQL', 'MongoDB']
  },
  {
    title: 'Tools',
    skills: ['AWS (EC2, S3, Cloudfront, IAM)', 'GCP (Compute Engine, VPC, IAM)', 'Postman', 'Unity', 'Git', 'GitHub', 'Docker']
  }
]

const Skills = () => {
  return (
    <div className="space-y-2 flex flex-col items-start justify-center text-white bg-opacity-25 rounded-md">
      <h2 className="text-4xl font-semibold text-start w-full border-b pb-2">SKILLS</h2>

      <div className='flex justify-between items-start flex-wrap '>
        {skillData.map((skill, index) => (
          <div key={index} className=" p-2">
            <h3 className="text-2xl text-gray-light italic">{skill.title}</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {skill.skills.map((item, index) => (
                <span key={index} className="text-md font-light rounded-full bg-gray-dark border-solid border border-fun-teal p-2 hover:scale-110 duration-200 ease-in">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
