import React from 'react';
import swantechImg from '../images/swantech.png';
import torqImg from '../images/torqsports.png';
import mlbImg from '../images/mlbweeklyai.png';
import hkrzImg from '../images/hkrzgolf.png';

const TAG_COLORS = {
  'Software Dev': 'text-teal-400',
  Consulting:     'text-teal-400',
  SaaS:           'text-orange-400',
  Sports:         'text-orange-400',
  AI:             'text-purple-400',
  Blog:           'text-purple-400',
  eCommerce:      'text-rose-400',
};

const projects = [
  {
    name: 'SwanTech',
    url: 'https://www.swantech.org',
    image: swantechImg,
    date: 'Aug 2024',
    tags: ['Software Dev', 'Consulting'],
    description:
      'Software development and consulting business offering custom web apps, data privacy systems, and automation solutions for growing companies.',
    tech: ['React', 'Django', 'Python', 'AWS'],
  },
  {
    name: 'TORQ Sports',
    url: 'https://www.torqsports.com',
    image: torqImg,
    date: 'Apr 2024',
    tags: ['SaaS', 'Sports'],
    description:
      'A recruiting SaaS platform connecting high school athletes with NCAA coaches across the US — built from inception to production.',
    tech: ['React', 'Node.js', 'AWS', 'Tailwind CSS'],
  },
  {
    name: 'MLB Weekly AI',
    url: 'https://www.mlbweeklyai.com',
    image: mlbImg,
    date: '2025',
    tags: ['AI', 'Blog'],
    description:
      'AI-powered blog system that automatically generates live MLB game recaps, standings, and weekly news delivered fresh each week.',
    tech: ['Python', 'Django', 'OpenAI', 'PostgreSQL'],
  },
  {
    name: 'HKRz Golf',
    url: 'https://www.hkrzgolf.com',
    image: hkrzImg,
    date: '2024',
    tags: ['eCommerce'],
    description:
      'eCommerce store selling handcrafted watches — one-of-a-kind timepieces designed with individuality, craftsmanship, and timeless style.',
    tech: ['Shopify', 'Liquid', 'CSS'],
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-fun-teal transition-all duration-300 hover:shadow-xl hover:shadow-fun-teal/10 hover:-translate-y-1"
    >
      {/* Screenshot preview */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Date + tags */}
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">{project.date}</span>
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className={`font-medium ${TAG_COLORS[tag] ?? 'text-teal-400'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-fun-teal transition-colors duration-200">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1 text-fun-teal text-sm font-semibold pt-1">
          <span>Visit Site</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </a>
  );
}

function Clients() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">My Work</h2>
        <p className="text-gray-400 mt-3 text-lg">Businesses and products I've built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Clients;
