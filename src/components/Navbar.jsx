import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFileAlt, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useAnimation } from '../contexts/AnimationProvider'

function Navbar() {
  const { color } = useAnimation();
  return (
    <header style={{ borderColor: color }} className='bg-slate-900 bg-opacity-45 border-solid border-2 rounded-lg transition-colors duration-1000 h-fit w-full md:w-fit p-2'>
      <nav className='flex md:flex-col'>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full p-2 px-4  rounded-md text-center text-xl duration-300 ease-in ${isActive ? 'bg-teal-400 bg-opacity-80 text-white' : 'hover:bg-teal-400'}`
          }
        >
          <span className='block md:hidden'>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span className='hidden md:block'>
            Home
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `w-full p-2 px-4 rounded-md text-center text-xl duration-300 ease-in ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-teal-400'}`
          }
        >
          <span className='block md:hidden'>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className='hidden md:block'>
            About
          </span>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `w-full p-2 px-4 rounded-md text-center text-xl duration-300 ease-in ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-teal-400'}`
          }
        >
          <span className='block md:hidden'>
            <FontAwesomeIcon icon={faCode} />
          </span>
          <span className='hidden md:block'>
            Skills
          </span>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `w-full p-2 px-4 rounded-md text-center text-xl duration-300 ease-in ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-teal-400'}`
          }
        >
          <span className='block md:hidden'>
            <FontAwesomeIcon icon={faFileAlt} />
          </span>
          <span className='hidden md:block'>
            Resume
          </span>
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            `w-full p-2 px-4 rounded-md text-center text-xl duration-300 ease-in ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-teal-400'}`
          }
        >
          <span className='block md:hidden'>
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          <span className='hidden md:block'>
            Education
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `w-full p-2 px-4 rounded-md text-center text-xl duration-300 ease-in ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-teal-400'}`
          }
        >
          <span className='block md:hidden'>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className='hidden md:block'>
            Contact
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
