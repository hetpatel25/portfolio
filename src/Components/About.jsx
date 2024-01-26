import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

import me from '../Assets/me.jpeg'
import me1 from '../Assets/myphoto.jpg'
import me2 from '../Assets/me2.jpg'
import linkdn from '../Assets/linkdn.svg'
import github from '../Assets/github.svg'
import competitive_programming from '../Assets/competitive_programming.svg'
import dsa from '../Assets/dsa.svg'
import web_development from '../Assets/web_development.svg'
import graphic_design from '../Assets/graphic_design.svg'


function About() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='w-full max-w-[2000px] px-20 md:px-4'>


                {/* first section */}
                <div className="flex h-[600px]  items-center md:flex-col md:items-start md:h-auto">

                    <div className='w-1/3 flex justify-center 2xl:w-1/2 md:w-full md:my-6 md:justify-start'>
                        <img src={me1} className='h-[400px] object-contain  border-black md:m-5 xl:h-[350px]' style={{ boxShadow: '12px 15px 1px 0px #D6D6D6, -12px -15px 1px 0px #D6D6D6' }} alt="" />
                    </div>
                    <div className='flex flex-col w-10/12 pl-12 md:w-full md:items-start md:p-0'>

                        <h2 className='text-[48px] text-brown mb-0 md:text-4xl md:my-1'>Hi, I'am Het Patel</h2>
                        <h3 className='text-[32px] mb-2 md:text-[28px]'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Web Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Competitive programmer',
                                    1000,
                                    'Graphic Designer',
                                    1000
                                    // 'Chinchillas',
                                    // 1000
                                ]}
                                wrapper="span"
                                speed={50}
                                className='text-[32px] md:text-[28px] md:mb-2 font-Rubik'
                                repeat={Infinity}
                            /></h3>

                        <div>
                            <p>Currently pursuing my Bachelors at DA-IICT, Gandhinagar, specializing in Information and Communication Technology (ICT).
                                Primarily interested in Web Development and Data Structures & Algorithms (DSA).</p>

                            <p className='mt-2'>I enjoy learning new skills and implementing them in real life!</p>
                        </div>

                        <p className='flex mt-4'>
                            <a href='https://www.linkedin.com/in/het-patel-532877257/' target='_blank' rel='noreferrer'><img src={linkdn} className='mr-4 filter transition-all duration-300 hover:brightness-75' alt="" /></a>
                            <a href='https://github.com/hetpatel25' target='_blank' rel='noreferrer'><img src={github} alt="" className='filter transition-all duration-300 hover:brightness-75' /></a>
                        </p>
                    </div>

                </div>

                {/* second section */}
                <h2 className='text-brown text-[50px] flex md:text-[40px] md:mt-10 md:leading-none md:overflow-hidden'>ABOUT ME <span className='block w-1/2 border-b-4 relative bottom-9 left-6 md:left-2 md:w-3/4'></span></h2>
                <div className='max-w-6xl mb-7 md:mt-3'>
                    <p className='mt-2'>Hello! I’m Het from, Bharuch.</p>
                    <p className='mt-2'>I am a pre final year student at DA-IICT(Dhirubhai Ambani Institute of
                        Information and Communication Technology), Gandhinagar. My current CPI is 7.66 out of 10.</p>
                    <p className='mt-2'>I am passionate on problem-solving and web development. Apart from this I like to do the Graphic design.</p>
                    <p className='mt-2'>I am dedicated to delivering my best in every task I undertake, always striving to bring 100% commitment to my work.</p>

                    <div className='mt-2 flex gap-x-44 flex-wrap'>
                        <p className='w-80'><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> Birthday:</span> 31 March 2004</p>
                        <p className='w-80'><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> City:</span> Bharuch, Gujarat</p>
                        <p className='w-80'><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> Email:</span> hetpatel3245@gmail.com</p>
                    </div>
                </div>

                <h3 className='text-2xl font-semibold mb-5'>INTERESTS</h3>
                <div className='flex w-full justify-start flex-wrap gap-x-32 gap-y-9 mb-6 md:gap-y-5'>
                    <div className='w-[320px] h-[70px] bg-shadow flex justify-start items-center px-4'>
                        <img src={competitive_programming} alt="" />
                        <span className='text-xl m-4'>Competitive Programming</span>
                    </div>
                    <div className='w-[320px] h-[70px] bg-shadow flex justify-start items-center px-4'>
                        <img src={dsa} alt="" />
                        <span className='text-xl m-4'>DSA</span>
                    </div>
                    <div className='w-[320px] h-[70px] bg-shadow flex justify-start items-center px-4'>
                        <img src={graphic_design} alt="" />
                        <span className='text-xl m-4'>Graphic Design</span>
                    </div>
                    <div className='w-[320px] h-[70px] bg-shadow flex justify-start items-center px-4'>
                        <img src={web_development} alt="" />
                        <span className='text-xl m-4'>Web Development</span>
                    </div>

                </div>


                <div className='max-w-6xl mb-7'>
                    <p className='md:mb-2'>Here are a few of the other activities that I love to do!</p>
                    <p><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> Crafting</span></p>
                    <p><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> Painting</span></p>
                    <p><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> Chess</span></p>
                    <p><span className='text-brown font-extrabold'>&gt; </span><span className='font-semibold'> Video editing</span></p>
                </div>

            </div>
        </>
    )
}

export default About
