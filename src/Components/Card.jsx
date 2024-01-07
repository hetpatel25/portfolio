import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import github from '../Assets/github_project.svg'
import external_link from '../Assets/external_link.svg'
import info from '../Assets/info.svg'
import close from '../Assets/close-light.svg'

function Card(props) {

  const { title, description, img, tags } = props;

  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className='h-[450px] w-[380px] rounded-2xl overflow-hidden shadow-s z-0'>

        {/* box-1 */}
        <div className='flex flex-col justify-between h-[450px] rounded-[35px] bg-shadow'>
          <div className='h-56'>
            <img src={img} alt="" />
          </div>

          <p className='px-4 pt-4 text-xl text-brown font-semibold'>{title}</p>
          <p className='px-4 py-1 leading-5 font-light text-[15px]'>{description.slice(0, 200)}...</p>
          <div className='flex gap-x-1 items-center justify-center h-10 bg-brown text-xl text-cream  cursor-pointer' onClick={handleButton}>
            <img src={info} alt="" />
            <p onClick={handleButton}>More Info</p>
          </div>
        </div>

        {/* box-2 */}
        <div className={`transition-all duration-500 ease-out relative ${toggle? 'top-[-100%]' : 'top-0'} bg-shadow h-[450px] flex flex-col justify-between p-6 overflow-x-hidden overflow-auto rounded-2xl`}>
        <img src={close} className='w-6 sticky right-0 cursor-pointer'  onClick={handleButton} alt="" />
        <ul className='text-black text-[15px]'>
          <li>Tools: NodeJS, ReactJS</li>
          <li>You can login or register</li>
          <li>It will show the places based on your history</li>
          <li>You can add the place in your favroute list</li>
          <li>You can write a review</li>
          <li>You can read the other's review</li>
          <li>You can search hotels, thing to dos using search bar</li>
          <li>Tools: NodeJS, ReactJS</li>
          
          
        </ul>
        <div className='sticky bottom-0 flex '>
          <Link className='mr-2' to=''><img src={github} alt="" /></Link>
          <Link to=''><img src={external_link} alt="" /></Link>  
        </div>
        </div>

      </div>


    </>
  )
}

export default Card
