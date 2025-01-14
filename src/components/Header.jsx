import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useAnimation } from '../contexts/AnimationProvider'
function Header() {
    const { color } = useAnimation();
  return (
    <div style={{ borderColor: color }} className='border-solid border-2 border-t-0 rounded-tr-none rounded-tl-none rounded-lg transition-colors duration-1000 p-2 flex justify-between'>
            <h1 className='text-7xl font-semibold text-fun-teal'>DS</h1>
            <div className='flex flex-col lg:flex-row items-end gap-4 text-light-white'>
                <div className='flex gap-2'>
                    <Link to="https://github.com/Daswanson22?tab=repositories">
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/dylan-swanson-018223211/">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </Link>
                </div>
                <div className='flex flex-col justify-end gap-1'>
                    <a href="tel:+18055519345" className='text-end'>+1 (805) 551 9345</a>
                    <a href="mailto:daswanson22@gmail.com">daswanson22@gmail.com</a>
                </div>
            </div>
        </div>
  )
}

export default Header