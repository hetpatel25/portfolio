import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<About/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
