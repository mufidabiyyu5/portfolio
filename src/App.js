import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import Landing from "./scenes/LandingPage";
import Projects from './scenes/Projects'

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="Projects/:id" element={<Projects/>} />
        </Routes>
      
    </div>
  );
}

export default App;
