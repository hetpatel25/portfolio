import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <>
    <div className='bg-cream mx-auto font-Rubik text-black text-[19px]'> 

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<About/>} />

    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
