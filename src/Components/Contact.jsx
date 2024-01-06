import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from './Footer';
import location1 from '../Assets/location1.svg'
import insta from '../Assets/Instagram.svg'
import phone from '../Assets/phone.svg'
import email from '../Assets/email.svg'
import twitter from '../Assets/twitter.svg'
import github1 from '../Assets/github1.svg'
import linkdn1 from '../Assets/linkdn1.svg'

function Contact() {
  return (

    <>
    <div className='font-Rubik text-black text-[19px] w-full max-w-[2000px] px-20'>
       <h1 className='text-brown text-[50px] mt-9 flex'>GET IN TOUCH <span className='block w-1/2 border-b-4 relative bottom-9 left-6'></span></h1>
    
       <div className='max-w-3xl mb-7'>
            <p className='mt-2'>Feel free to reach out at any time - whether you have 
            a question or just want to say hello, I'm always here and open to connecting.</p>
            <p className='w-full flex mt-4'><img className='mt-0.5 mr-3' src={location1} alt="" />Juna Borbhatha Bet, 393001 - TA- Ankleshwar, DIST-Bharuch, Gujarat</p>
            <p className='w-full flex mt-4'><img className='mt-0.5 mr-3' src={email} alt="" />hetpatel3245@gmail.com</p>
            <p className='w-full flex mt-4'><img className='mt-0.5 mr-3' src={phone} alt="" />+91 7046783821</p>

        </div>
        <h3 className='text-[20px] font-semibold text-brown mt-16 mb-2'>Follow my Social Footprints</h3>
        <div className='flex w-56 justify-between flex-wrap'>
          <Link className='flex' to='/'><img src={linkdn1} className='' alt="" /></Link>
          <Link className='flex' to='/'><img src={insta} alt="" /></Link>
          <Link className='flex' to='/'><img src={twitter} alt="" /></Link>
          <Link className='flex' to='/'><img src={github1} alt="" /></Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
