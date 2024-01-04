import React from 'react'
import me from '../Assets/me.jpeg'


function About() {
    return (
        <div className='bg-cream h-screen font-Rubik text-black text-[19px] pt-[60px]'>

            <div className="flex h-[600px]  items-center">

                <div className='w-1/2 flex justify-center'>
                    {/* <img src={me} className='w-[400px] h-[400px]' alt="" /> */}
                </div>
                <div className='flex flex-col w-1/2'>
                    <h2 className='text-[48px] text-brown mb-0'>Hi, I'am Het Patel</h2>
                    <h3 className='text-[32px]'>A Developer</h3>

                    <p>
                        Currently pursuing my Bachelors at DA-IICT, Gandhinagar, specializing in Information and Communication Technology (ICT). 
                        Primarily interested in Web Development and Data Structures & Algorithms (DSA).
                        <br />
                        <br />
                        I enjoy learning new skills and implementing them in real life!
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About
