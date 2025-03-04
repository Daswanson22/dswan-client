import React from 'react';

const skillData = [
  {
    title: 'Project Management',
    skills: ['Project Coordination', 'Task Prioritization', 'Risk Management', 'Client Communication', 'Team Leadership', 'Time Management', 'Documentation Management']
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'TypeScript', 'C#', 'C++']
  },
  {
    title: 'Frameworks/Technologies',
    skills: ['React.js', 'Node.js', 'Express.js', 'JQuery', 'Next.js', 'Flask', 'Keras', ]
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
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Tools',
    skills: ['AWS (EC2, S3, Cloudfront, IAM)', 'GCP (Compute Engine, VPC, IAM)', 'Postman', 'Unity', 'Git', 'GitHub', 'Docker']
  },
  {
    title: 'Architecture',
    skills: ['Microservices', 'Three Tier', 'Client-Server', 'MVC', "Pub-Sub"]
  }
]

const Skills = () => {
  return (
    <div className="space-y-2 flex flex-col items-start justify-center text-white bg-opacity-25 rounded-md">
      <h2 className="text-4xl font-semibold text-start w-full border-b pb-2">SKILLS</h2>
      <table className='bg-black text-white border-solid border border-gray-800 table-auto'>
        <thead className='bg-gray-800'>
          <tr className='text-white'>
            <th>Category</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody className=''>
          {skillData.map((skill, index) => (
            <tr key={index} className='border-b border-solid border-gray-800 even:bg-blue-400 even:bg-opacity-20'>
              <td className='px-4'>{skill.title}</td>
              <td className='p-1 border-l border-solid border-gray-800'>
                <ul>
                  {skill.skills.join(", ")}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
