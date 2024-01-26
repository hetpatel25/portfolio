import React, {useEffect} from 'react'
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

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>
    <div className='w-full max-w-[2000px] px-20 md:px-4'>
       <h1 className='text-brown text-[50px] mt-9 flex md:text-[40px] md:leading-none md:overflow-hidden'>GET IN TOUCH <span className='block w-1/2 border-b-4 relative bottom-9 left-6 md:left-2 md:bottom-6 md:w-3/4'></span></h1>
    
       <div className='max-w-3xl mb-7 md:mt-7'>
            <p className='mt-2'>Feel free to reach out at any time - whether you have 
            a question or just want to say hello, I'm always here and open to connecting.</p>
            <p className='w-full flex mt-4'><img className='mt-0.5 mr-3 md:mt-0' src={location1} alt="" />Juna Borbhatha Bet, 393001 - TA- Ankleshwar, DIST-Bharuch, Gujarat</p>
            <p className='w-full flex mt-4'><img className='mt-0.5 mr-3 md:mt-0' src={email} alt="" />hetpatel3245@gmail.com</p>
            <p className='w-full flex mt-4'><img className='mt-0.5 mr-3 md:mt-0' src={phone} alt="" />+91 7046783821</p>

        </div>
        <h3 className='text-[20px] font-semibold text-brown mt-16 mb-2'>Follow my Social Footprints</h3>
        <div className='flex gap-x-2 flex-wrap w-fit'>
          <a className='flex filter transition-all duration-300 hover:brightness-75' href='https://www.linkedin.com/in/het-patel-532877257/' target='_blank' rel='noreferrer'><img src={linkdn1} className='' alt="" /></a>
          <a className='flex filter transition-all duration-300 hover:brightness-75' href='https://www.instagram.com/hetpatel9.9/' target='_blank' rel='noreferrer'><img src={insta} alt="" /></a>
          <a className='flex filter transition-all duration-300 hover:brightness-75' href='https://twitter.com/hetpatel3245' target='_blank' rel='noreferrer'><img src={twitter} alt="" /></a>
          <a className='flex filter transition-all duration-300 hover:brightness-75' href='https://github.com/hetpatel25' target='_blank' rel='noreferrer'><img src={github1} alt="" /></a>
        </div>
    </div>

    </>
  )
}

export default Contact
