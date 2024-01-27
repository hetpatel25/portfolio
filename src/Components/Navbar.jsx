import React, { useState, useContext} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import classNames from 'classnames';


import close from '../Assets/close.svg';
import './Navbar.css'
import menu from '../Assets/menu.svg'

function Navbar() {

  const location = useLocation();
  const { hash, pathname, search } = location;
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
         <Link className={`text-[22px] ml-9 md:hidden after:block after:content-[''] after:w-full after:border-b-2 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100 ${pathname == "/" ? "after:scale-x-100" : ""}`} to='/'>About</Link>
         <Link className={`text-[22px] ml-9 md:hidden  after:block after:content-[''] after:w-full after:border-b-2 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:origin-left ${pathname == "/skills" ? "after:scale-x-100" : ""}`} to='/skills'>Skills</Link>
         <Link className={`text-[22px] ml-9 md:hidden after:block after:content-[''] after:w-full after:border-b-2 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:origin-left ${pathname == "/projects" ? "after:scale-x-100" : ""}`} to='/projects'>Projects</Link>
         <Link className={`text-[22px] ml-9 md:hidden after:block after:content-[''] after:w-full after:border-b-2 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:origin-left ${pathname == "/resume" ? "after:scale-x-100" : ""}`} to='/resume'>Resume</Link>
      </div>

      <div className='md:hidden'>
        <Link className='text-[22px] mr-8'  to='/contact'>Contact</Link>
      </div>
    </nav>


    {/* For mobile view */}
    <div className='hidden md:block'>
    <Menu right pageWrapId={ "page-wrap" } customBurgerIcon={ <img src={menu} /> } isOpen={menuOpenState} onOpen={ handleMenu } onClose={handleMenu}>
     
      <Link id="home" className={`menu-item  text-[22px] text-cream mb-9 mt-10 after:block after:content-[''] after:w-16 after:border-b-2 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-center ${pathname == "/" ? "after:scale-x-100" : ""}`} to="/"  onClick={handleMenu}>
        About
      </Link>
      <Link id="about" className={`menu-item text-[22px] text-cream mb-9 after:block after:content-[''] after:w-12 after:border-b-2 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-center ${pathname == "/skills" ? "after:scale-x-100" : ""}`} to="/skills"  onClick={handleMenu}>
        Skills
      </Link>
      <Link id="contact" className={`menu-item text-[22px] text-cream mb-9 after:block after:content-[''] after:w-20 after:border-b-2 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-center ${pathname == "/projects" ? "after:scale-x-100" : ""}`} to="/projects"  onClick={handleMenu}>
        Projects
      </Link>
      <Link className={`menu-item text-[22px] text-cream mb-9 after:block after:content-[''] after:w-20 after:border-b-2 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-center ${pathname == "/resume" ? "after:scale-x-100" : ""}`} to="/resume" onClick={handleMenu} >Resume</Link>
      <Link className={`menu-item text-[22px] text-cream mb-9 after:block after:content-[''] after:w-20 after:border-b-2 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 after:origin-center ${pathname == "/contact" ? "after:scale-x-100" : ""}`} to="/contact"  onClick={handleMenu}>Contact</Link>

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
