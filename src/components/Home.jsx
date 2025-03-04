import React, { useState, useEffect } from 'react';
import MyImage from '../me/self.jpeg';
import Skills from './Skills';
import Contact from './Contact';
import Clients from './Clients';
import { useAnimation } from '../contexts/AnimationProvider'

function Home() {
  const { color } = useAnimation();

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col lg:flex-row text-white'>
        <div className='flex animate-fade-in text-wrap'>
          <div className='w-full'>
            <h1 className="text-5xl lg:text-6xl font-bold">Hi, I'm Dylan Swanson</h1>
            <span className="text-2xl lg:text-3xl font-semibold animate-fade-in">Full-Stack Developer & IT Specialist</span>
            <p style={{ borderColor: color }} className='text-xl font-thin mt-4 border-solid border-l-4 pl-4 transition-colors duration-1000'>
              Welcome to my personal website! As you navigate through the pages, you'll find information about me, my skills, and my education. Feel free to reach out to me if you have any questions or are looking for Web Development or MVP services.
            </p>
          </div>
        </div>
      </div>
      <Skills />
      <Clients/>
      <Contact />
    </div>
  );
}

export default Home;

