import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import AnimationProvider from './contexts/AnimationProvider';
import "./index.css";

function App() {
  return (
    <Router>
      <AnimationProvider>
        <Layout>
          <Home />
        </Layout>
      </AnimationProvider>
    </Router>
  );
}

export default App;
