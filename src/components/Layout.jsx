import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { useAnimation } from '../contexts/AnimationProvider'
function Layout({ children }) {
  const { color } = useAnimation(); 
  return (
    <div className="min-h-screen text-light-white flex flex-col gap-4 px-0 relative bg-black lg:px-[10%]">
      <Header />
      <main className='flex flex-col md:flex-row text-light-white'>
        <Navbar />
        <div className='p-4 md:p-8 border-solid'>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
