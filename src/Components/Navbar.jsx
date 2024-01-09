import React, { useState, useContext} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

import close from '../Assets/close.svg';
import './Navbar.css'
import menu from '../Assets/menu.svg'

function Navbar() {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  const showSettings = (event) => {
    event.preventDefault();
    // Handle settings visibility or any other logic here
    setSettingsVisible(!settingsVisible);
  };

  const handleMenu = ()=>{
     setMenuOpenState(!menuOpenState);
  }

  return (
    <>

    <nav className='h-[60px] w-full bg-brown flex text-cream items-center justify-between px-3 sticky top-0 max-w-[2000px] z-10 md:h-[50px]' >
      <div className='flex items-center'>
         <Link className='text-[34px] font-extrabold md:text-[25px] md:font-bold' to='/'>HET PATEL</Link>
         <Link className='text-[22px] ml-9 md:hidden' to='/'>About</Link>
         <Link className='text-[22px] ml-9 md:hidden' to='/skills'>Skills</Link>
         <Link className='text-[22px] ml-9 md:hidden' to='/projects'>Projects</Link>
         <Link className='text-[22px] ml-9 md:hidden' to='/'>Resume</Link>
      </div>

      <div className='md:hidden'>
        <Link className='text-[22px] mr-8'  to='/contact'>Contact</Link>
      </div>
    </nav>


    {/* For mobile view */}
    <div className='hidden md:block'>
    <Menu right pageWrapId={ "page-wrap" } customBurgerIcon={ <img src={menu} /> } isOpen={menuOpenState} onOpen={ handleMenu } onClose={handleMenu}>
     
      <Link id="home" className="menu-item  text-[22px] text-cream mb-9 mt-10" to="/"  onClick={handleMenu}>
        About
      </Link>
      <Link id="about" className="menu-item text-[22px] text-cream mb-9 " to="/skills"  onClick={handleMenu}>
        Skills
      </Link>
      <Link id="contact" className="menu-item text-[22px] text-cream mb-9 " to="/projects"  onClick={handleMenu}>
        Projects
      </Link>
      <Link className="menu-item text-[22px] text-cream mb-9" to="/ " >Resume</Link>
      <Link className="menu-item text-[22px] text-cream mb-9" to="/contact "  onClick={handleMenu}>Contact</Link>

       {/* <a
        onClick={showSettings}
        className="menu-item--small"
        href=""
      >
        Settings
      </a>  */}
    </Menu>
    </div>
    </>
  );
}

export default Navbar;
