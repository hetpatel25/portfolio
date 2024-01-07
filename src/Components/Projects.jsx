import React from 'react'
import Card from './Card'
import Footer from './Footer';

import routier from '../Assets/projects/routier.png'
function Projects() {

    const projects = [
        {
            'title' : 'Routier- A travel advisor website',
            'img': routier,
            'description': 'Routier is a Software to make your trip planning much better and tailored to your taste. By getting to know you and where you want to go, we will suggest you places for you to visit that you are most likely to enjoy. And the more you use Routier, the better our recommendations will become.',
            'tags': ['ReactJS', 'NodeJS']
        }
    ];

    
  return (

    <>
    <div className='font-Rubik text-black text-[19px] w-full max-w-[2000px] px-20'>
        <h1 className='text-brown text-[50px] mt-9 flex'>Some Things I've Built <span className='block w-1/2 border-b-4 relative bottom-9 left-6'></span></h1>
        <div className='max-w-6xl mb-7'>
            <p className='mt-2'>Welcome to my Projects Showcase!</p>
            <p className='mt-2'>Here, you'll find the cool stuff I've created with my tech tools. 
            Take a look at the different projects that show off my creativity and skills.</p>

        </div>

        {/* card container */}
        <div className='flex gap-16 flex-wrap'>
        <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags}/>
        <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags}/>
        <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags}/>
        <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags}/>
        </div>
    </div>
    </>
  )
}

export default Projects
