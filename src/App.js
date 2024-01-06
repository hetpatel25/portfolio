import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <div className='bg-cream mx-auto font-Rubik text-black text-[19px]'> 

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<About/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
