import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import github from '../Assets/github_project.svg'
import external_link from '../Assets/external_link.svg'
import info from '../Assets/info.svg'
import close from '../Assets/close-light.svg'

function Card(props) {

  const { title, description, img, tags, features, github_link, published_link } = props;

  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className='h-[450px] w-[380px] rounded-2xl overflow-hidden shadow-s z-0'>

        {/* box-1 */}
        <div className='flex flex-col justify-between h-[450px] rounded-[35px] bg-shadow'>
          <div className='h-56 md:h-auto'>
            <img src={img} className='h-full' alt="" />
          </div>
          <div className='h-1/3'>
            <p className='px-4 pt-4 text-xl text-brown font-semibold md:px-3 md:pt-0'>{title}</p>
            <p className='px-4 py-1 leading-5 font-light text-[16px] md:px-3 md:py-0'>{description.slice(0, 190)}...</p>
          </div>
          <p className='px-4 py-2 flex text-base text-brown gap-x-3 font-semibold'>{tags?.map((value, index) => {

            return (
              <p>{value}</p>
            );
          })}</p>

          <div className='flex gap-x-1 items-center justify-center h-10 bg-brown text-xl text-cream  cursor-pointer' onClick={handleButton}>
            <img src={info} alt="" />
            <p onClick={handleButton}>More Info</p>
          </div>
        </div>

        {/* box-2 */}
        <div className={`transition-all duration-500 ease-out leading-snug relative ${toggle ? 'top-[-100%]' : 'top-0'} bg-shadow h-[450px] flex flex-col justify-between p-6 overflow-x-hidden overflow-auto rounded-2xl md:px-3`}>
          <img src={close} className='w-6 sticky right-0 cursor-pointer' onClick={handleButton} alt="" />
          <div className='text-black text-[16px]'>
            <p><span className='text-base text-black font-semibold'>Tools: </span>{tags?.map((value, index) => {

              return (
                <span className='mr-2'>{value}</span>
              );
            })}</p>
            <ul className=''>
              <p className='text-base text-black font-semibold'>Features:</p>
              {features?.map((feature, index) => {

                return (
                  <li className='list-decimal list-inside mt-2'>{feature}</li>
                );
              })}
            </ul>
          </div>
          <div className='sticky bottom-0 flex '>
            <a className='mr-2 filter transition-all duration-300 hover:brightness-90' href={github_link} target='_blank'><img src={github} alt="" /></a>
            <a className='filter transition-all duration-300 hover:brightness-90' href={published_link} target='_blank'><img src={external_link} alt="" /></a>
          </div>
        </div>

      </div>


    </>
  )
}

export default Card
