import React from 'react';
import resumeData from '../me/resume-data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faDatabase,
  faPalette,
  faNetworkWired,
  faServer,
  faCode,
  faLayerGroup,
  faSitemap,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

const CATEGORY_META = {
  'Cloud Services':        { icon: faCloud,       color: 'text-sky-400',    bg: 'bg-sky-400/10',    border: 'hover:border-sky-400/50' },
  'Databases':             { icon: faDatabase,    color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'hover:border-emerald-400/50' },
  'Frontend':              { icon: faPalette,     color: 'text-pink-400',   bg: 'bg-pink-400/10',   border: 'hover:border-pink-400/50' },
  'Networking':            { icon: faNetworkWired,color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'hover:border-orange-400/50' },
  'Operating Systems':     { icon: faServer,      color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'hover:border-purple-400/50' },
  'Programming Languages': { icon: faCode,        color: 'text-fun-teal',   bg: 'bg-fun-teal/10',   border: 'hover:border-fun-teal/50' },
  'Libraries & Frameworks':{ icon: faLayerGroup,  color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'hover:border-yellow-400/50' },
  'Software Architecture': { icon: faSitemap,     color: 'text-rose-400',   bg: 'bg-rose-400/10',   border: 'hover:border-rose-400/50' },
  'Tools & Applications':  { icon: faWrench,      color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'hover:border-indigo-400/50' },
};

const Skills = () => {
  const skillEntries = Object.entries(resumeData.skills);

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Skills</h2>
        <p className="text-gray-400 mt-3 text-lg">Technologies and tools I work with.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillEntries.map(([category, skills]) => {
          const meta = CATEGORY_META[category] ?? { icon: faCode, color: 'text-fun-teal', bg: 'bg-fun-teal/10', border: 'hover:border-fun-teal/50' };
          return (
            <div
              key={category}
              className={`flex flex-col gap-4 p-5 rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300 ${meta.border} hover:-translate-y-0.5`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg ${meta.bg} flex items-center justify-center shrink-0`}>
                  <FontAwesomeIcon icon={meta.icon} className={`${meta.color} text-sm`} />
                </div>
                <h3 className="font-semibold text-white text-sm">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
