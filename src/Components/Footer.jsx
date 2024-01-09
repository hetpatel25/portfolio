import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import location from '../Assets/location.svg'
function Footer() {
  return (
    <div className='w-full bg-beige flex justify-between px-8 py-3 mt-36 gap-x-28 border-t-2 text-lg leading-snug lg:flex-wrap lg:items-baseline lg:gap-x-2 sm:flex-col sm:items-center sm:gap-y-3 sm:leading-tight sm:mt-20'>
      <div className='flex flex-col w-1/3  lg:pl-9 sm:w-full sm:items-center sm:pl-0'>
        <Link to='/contact'>Contact me</Link>
        <Link to='/'>Home page</Link>
    
      </div>
      <div className='flex flex-col w-1/3 justify-start items-center text-center sm:w-full sm:order-3'>
        <p>Designed & Developed by Het Patel</p>
        <p><span>&copy; </span>Het Portfolio 2024. All rights reserved.</p>
      </div>
      <div className='flex flex-col w-1/3 sm:w-full sm:items-center'>

        <p className='w-full flex sm:text-center sm:justify-center'><img className='w-[25px] h-[25px] mt-0.5 mr-2 sm:m-0' src={location} alt="" />Juna Borbhatha Bet, 393001 - TA- Ankleshwar, DIST-Bharuch, Gujarat</p>
      </div>
    </div>
  )
}

export default Footer
