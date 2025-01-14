import React, {useState} from 'react';

const Resume = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-fun-teal">Dylan Swanson</h1>
        <p className="text-xl">Daswanson22@gmail.com | (805)-551-9345</p>
        <div className="mt-4 space-x-2">
          <a href="https://www.linkedin.com/in/dylan-swanson-018223211/" className="text-teal-400 border-solid border border-teal-400 p-2 hover:bg-purp duration-300 ease-in">LinkedIn</a> 
          <a href="https://www.github.com/Daswanson22" className="text-teal-400 border-solid border border-teal-400 p-2 hover:bg-purp duration-300 ease-in">GitHub</a>
          <a
            href="./me/Swanson-Resume.pdf"
            download="dylan_swanson_resume.pdf"
            className="text-fun-teal border-solid border border-fun-teal p-2 hover:bg-purp duration-300 ease-in"
          >
            Download
          </a>
        </div>
      </div>
  
      <section className="mb-8">
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
  
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-teal-400">Skills</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Project Management Skills</h3>
          <p className="text-lg">Project Coordination, Task Prioritization, Risk Management, Client Communication, Team Leadership, Time Management, Documentation Management</p>
  
          <h3 className="text-xl font-semibold mt-4">Languages</h3>
          <p className="text-lg">JavaScript, Python (pandas, beautifulsoup), Java, C#, C++</p>
  
          <h3 className="text-xl font-semibold mt-4">Technologies</h3>
          <p className="text-lg">React, Tailwind, JQuery, Express.js, Git, NGINX, MongoDB</p>
  
          <h3 className="text-xl font-semibold mt-4">Tools</h3>
          <p className="text-lg">AWS (EC2, S3, Cloudfront, IAM), Firebase, Postman, Unity</p>
        </div>
      </section>
  
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-teal-400">Experience</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Project Manager & Lead Developer | Capstone Project</h3>
          <p className="text-lg">January 2024 - May 2024</p>
          <p className="mt-2">
            Led a team of five in the development of a sports and entertainment platform, ensuring project goals were met on time and within scope.
            Managed project documentation, coordinated weekly team meetings, and maintained communication with the client to ensure alignment with their vision.
            Implemented project management methodologies, including task division, risk assessment, and progress tracking, resulting in a successful project delivery.
            Served as the lead developer, driving the technical execution of the project, and integrating innovative features to enhance user experience.
          </p>
        </div>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Full Stack Engineer Internship | TORQ Sports (Startup)</h3>
          <p className="text-lg">April 2024 - August 2024</p>
          <p className="mt-2">
            Collaborated with a team to launch the company's full-stack application using AWS from inception to launch, including frontend UI (React), backend REST API (Express.js), and database integration (Firebase, AWS S3). 
            Developed a SaaS tool that gives high school athletes an efficient way to connect with any NCAA coach across the US.
          </p>
        </div>
      </section>
  
      <section>
        <h2 className="text-2xl font-bold text-teal-400">Projects</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">2D Procedural Generation Game | C#</h3>
          <p className="text-lg">Features a procedurally generated map through the implementation of a robust Random Walk Algorithm. Optimized multiple enemy AI behaviors, enabling strategic attacks on the player for an enhanced gaming experience.</p>
  
          <h3 className="text-xl font-semibold mt-4">Recursive Descent Parser Program | Java</h3>
          <p className="text-lg">Developed a Java program to validate syntax for a custom assembly language, ensuring code adherence to language specifications.</p>
  
          <h3 className="text-xl font-semibold mt-4">Fintech Banking Website | PHP, CodeIgniter, CSS, HTML</h3>
          <p className="text-lg">Features secure user authentication with session tokens and SHA1 encryption. Implemented fund transfer functionality via a RESTful API.</p>
        </div>
      </section>
  
      <section>
        <h2 className="text-2xl font-bold text-teal-400">Activities</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Phi Kappa Tau Fraternity - Vice President of Recruitment</h3>
          <p className="text-lg">Organized recruitment events and led strategic planning to increase membership, enhancing the organization's campus presence.</p>
  
          <h3 className="text-xl font-semibold mt-4">Collegiate Baseball - Moorpark College</h3>
          <p className="text-lg">Led the baseball team as captain, demonstrating strong leadership and teamwork, while balancing academic and athletic commitments.</p>
        </div>
      </section>
    </div>
  );  
};

export default Resume;
