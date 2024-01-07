import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from './Footer';
import me from '../Assets/me.jpeg'
import linkdn from '../Assets/linkdn.svg'
import github from '../Assets/github.svg'
import competitive_programming from '../Assets/competitive_programming.svg'
import dsa from '../Assets/dsa.svg'
import web_development from '../Assets/web_development.svg'
import graphic_design from '../Assets/graphic_design.svg'


function About() {
    return (
        <>
        <div className='font-Rubik text-black text-[19px] w-full max-w-[2000px] px-20'>


            {/* first section */}
            <div className="flex h-[600px]  items-center">

                <div className='w-1/3 flex justify-start 2xl:w-1/2'>
                    {/* <img src={me} className='w-[400px] h-[400px] border-[1.6px] border-black rounded-2xl xl:h-[350px] xl:w-[350px]' alt="" /> */}
                </div>
                <div className='flex flex-col w-10/12 pl-12'>

                    <h2 className='text-[48px] text-brown mb-0'>Hi, I'am Het Patel</h2>
                    <h3 className='text-[32px]'>A Developer</h3>

                    <p>
                        Currently pursuing my Bachelors at DA-IICT, Gandhinagar, specializing in Information and Communication Technology (ICT).
                        Primarily interested in Web Development and Data Structures & Algorithms (DSA).
                        <br />
                        <br />
                        I enjoy learning new skills and implementing them in real life!
                    </p>

                    <p className='flex mt-4'>
                        <Link to='/'><img src={linkdn} className='mr-4' alt="" /></Link>
                        <Link to='/'><img src={github} alt="" /></Link>
                    </p>
                </div>

            </div>

            {/* second section */}
            <h2 className='text-brown text-[50px] flex'>ABOUT ME <span className='block w-1/2 border-b-4 relative bottom-9 left-6'></span></h2>
            <div className='max-w-6xl mb-7'>
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
            <div className='flex w-full justify-start flex-wrap gap-x-32 gap-y-9 mb-6'>
                <div className='w-[320px] h-[70px] bg-shadow flex justify-start items-center px-4'>
                    <img src={competitive_programming}  alt="" />
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
                 <p>Here are a few of the other activities that I love to do!</p>
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
