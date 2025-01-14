import React from 'react'
import MyImage from '../me/self.jpeg';
import Hitting from '../me/hitting.jpeg'
import SabreDogs from '../me/sabre-dogs.jpeg'
import ICPC from '../me/icpc.png'
import OKT from '../me/okt.png'
import GOLF from '../me/golf.jpeg'

import { useAnimation } from '../contexts/AnimationProvider';
function About() {
  const { applySpinAnimation } = useAnimation();
  return (
    <div className='flex flex-col gap-8 '>

      <div className='flex flex-col items-center justify-center'>
        <div 
          id="photo" 
          onClick={applySpinAnimation} 
          className="flex lg:w-80 lg:h-80 w-48 h-48 rounded-full cursor-pointer"
        >
          <img
            src={MyImage} 
            alt="" 
            className="w-full h-full object-cover rounded-full spin-image" 
          />
        </div>
        <h2 className='text-5xl font-bold '>Dylan Swanson</h2>
        <h3 className='text-3xl font-normal'>23 years old</h3>
      </div>

      <div className='flex flex-col justify-center items-centergap-8'>
        <section>
          <h1 className='bg-light-blue text-3xl font-semibold pl-4 py-2 italic text-black'>Hobbies</h1>
          <div className='flex flex-col xl:justify-between gap-4 xl:gap-0 xl:flex-row p-2'>
            <p className='block text-xl w-full xl:w-[50%]'>
                When I'm not at the computer, I enjoy staying active, socializing, and hitting the golf course. I follow a strict workout routine, going to the gym at least five times a week and fitting in 2-3 runs as well. You can often find me at happy hour spots around Long Beach, enjoying time with friends. While my baseball skills didn't fully translate to golf—I'm still working on hitting the ball straight—I take pride in my short to mid-range game and am always up for a round.
            </p>
            <div className=''>
              <img src={GOLF} className="w-80 h-80 object-contain" alt="" />
            </div>
          </div>
        </section>
        <section>
          <h1 className='bg-light-blue text-3xl font-semibold pl-4 py-2 italic text-black'>Activities</h1>
          <div className='flex flex-col xl:flex-row justify-between'>
            <p className='block p-2 text-xl w-full xl:w-[50%]'>
                I am actively involved in two clubs at CSULB: the Programming Team, where I compete in coding challenges in a team of 3 amongst other Southern California Universities and collaborate on challenging problems as practice,  and Phi Kappa Tau, my fraternity, where I contribute to our community and building lifelong friendships.
            </p>
            <div className='flex flex-col-reverse md:flex-row p-2'>
              <img src={OKT} className='w-[200px] h-[200px]' alt="" />
              <img src={ICPC} className='w-[200px] h-[200px]' alt="" />

            </div>
          </div>
        </section>
        <section >
          <h1 className='bg-light-blue text-3xl font-semibold pl-4 py-2 italic text-black'>Sports</h1>
          <div className='flex flex-col xl:flex-row'>
            <p className='w-full xl:w-[50%] block p-2 text-xl'>Sports have had a huge impact on who I am today. They instilled core values such as work ethic, leadership, adapability, and persistence. In my youth I was an avid basketball and baseball player. I would play in every season until I reach high school. In high school I decided to focus soley on baseball and becoming the best athlete on the field. My main positions were outfield and pitcher. As a left handed pitcher I learned how to deal with adversity through failure. My talents took me to the community college level where I started for Moorpark College all three years I attended. </p>
            <div className='flex flex-col xl:flex-row p-2'>
              <img src={Hitting} className='w-80 h-80' alt="" />
              <img src={SabreDogs} className='w-80 h-92 xl:h-80 object-fill' alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About