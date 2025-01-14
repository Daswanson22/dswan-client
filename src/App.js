import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Education from './components/Education';
import Contact from './components/Contact';
import Layout from './components/Layout';
import AnimationProvider from './contexts/AnimationProvider'
import "./index.css"

function App() {
  return (
    <Router>
      <AnimationProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="education" element={<Education/>} />
          <Route path="contact" element={<Contact/>} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
      </AnimationProvider>
    </Router>

  );
}

export default App;
