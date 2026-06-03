import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
}

export default App;
