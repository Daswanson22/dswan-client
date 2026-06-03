import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-light-white">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}

export default Layout;
