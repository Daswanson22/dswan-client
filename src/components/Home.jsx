import React from 'react';
import tropicalHero from '../images/tropical_hero.mp4';
import Skills from './Skills';
import Contact from './Contact';
import Clients from './Clients';
import Experience from './Experience';
import Education from './Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="hero" className="relative h-screen -mt-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={tropicalHero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-8xl lg:text-9xl font-bold tracking-tight drop-shadow-lg">
            Welcome
          </h1>
          <p className="text-xl lg:text-2xl mt-6 max-w-2xl text-gray-200 leading-relaxed drop-shadow">
            Hey there, I'm Dylan.{' '}
            <span className="text-fun-teal">Software Engineer.</span>{' '}
            Marketing Guru. Golf Advocate. AI Enthusiast.
          </p>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 flex flex-col items-center text-center bg-black">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border border-fun-teal/40 bg-fun-teal/10 shadow-lg shadow-fun-teal/20">
            <FontAwesomeIcon icon={faCode} className="text-fun-teal text-2xl" />
          </div>
          <h2 className="text-5xl font-bold text-white tracking-tight">About</h2>
          <p className="text-gray-300 text-lg leading-loose tracking-wide">
            I'm Dylan, a software engineer based in California with a passion for building
            things that make a real impact — from full-stack web applications and cloud infrastructure
            to data automation pipelines and SaaS products. I graduated from California State
            University, Long Beach with a Bachelor's in Computer Science in December 2024, and have
            since worked at companies like AEG Worldwide, TORQ Sports, and Giant Partners while running
            my own software consulting business, SwanTech. I thrive at the intersection of engineering
            and business, whether that means architecting scalable systems, automating a client's most
            time-consuming workflows, or shipping a product from zero to production. Outside the
            keyboard, you'll find me on the golf course, in the gym, or locked in on whatever sport is
            in season. I believe the best software is built by people who care as much about the
            outcome as the code.
          </p>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────────── */}
      <div className="flex flex-col gap-20 px-6 py-16 lg:px-[10%]">

        <div id="work">
          <Clients />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="resume">
          <Experience />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="contact">
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default Home;
