import React from 'react';
import "./index.css";
import HomePage from './routes/HomePage';
import Projects from './routes/Projects';
import AboutMe from './routes/AboutMe';
import Contact from './routes/Contact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
