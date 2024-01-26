import './App.css';
import "./index.css"
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Resume from './Components/Resume';

function App() {
  
  return (
    <>
    <div className='bg-cream flex flex-col items-center font-Rubik font-light text-black text-[19px] md:leading-tight md:text-lg'> 

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<About/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/resume" element={<Resume/>} />
    

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
