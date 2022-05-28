import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import './css/style.css'

import Landing from "./scenes/LandingPage";
import Projects from './scenes/Projects'

function App() {
  return <>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="Projects/:id" element={<Projects/>} />
        </Routes>
      
    </>;
}

export default App;
