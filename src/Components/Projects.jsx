import React, {useEffect} from 'react'
import Card from './Card'
import Footer from './Footer';

import routier from '../Assets/projects/routier.png'
import inotes from '../Assets/projects/inotes.png'
import snakegame from '../Assets/projects/snakegame.png'
function Projects() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const projects = [
        {
            'title': 'Routier- A travel advisor website',
            'img': routier,
            'description': 'Routier is a Software to make your trip planning much better and tailored to your taste. By getting to know you and where you want to go, we will suggest you places for you to visit that you are most likely to enjoy. And the more you use Routier, the better our recommendations will become.',
            'tags': ['ReactJS', 'NodeJS', 'MongoDB'],
            'github_link': 'https://github.com/anujcontractor/routier',
            'published_link': 'https://routier.vercel.app/home',
            'features': ['Easily create your account to personalize your experience.',
                'Explore and discover new places with our user-friendly search functionality.',
                'Add your cherished locations to your favorites list for quick access and a personalized touch.',
                'Check out reviews from other users to make informed decisions about your next destination.',
                'Share your experiences by writing and posting your own reviews.']
        },
        {
            'title': 'iNotes',
            'img': inotes,
            'description': 'Experience the freedom to express yourself in a form of text with iNotes. what are the features? create your account, add/delete/edit your notes.',
            'tags': ['ReactJS', 'NodeJS', 'Bootsrap'],
            'github_link': 'https://github.com/hetpatel25/iNotes',
            'published_link': 'https://write-inotes.vercel.app/',
            'features': [
                'Easily create your account to personalize your experience.',
                'Your notes are private and secure—ensuring that others cannot access them',
                'Effortlessly add, edit, or delete your notes at any time, putting you in complete control of your personal space.'
            ]
        },
        {
            'title': 'Snake Game',
            'img': snakegame,
            'description': 'Surely, you have played this childhood classic! Creating this game feels truly amazing.',
            'tags': ['JavaScript', 'HTML', 'CSS'],
            'github_link': 'https://github.com/hetpatel25/snakeGame',
            'published_link': 'https://hetpatel25.github.io/snakeGame/',
            'features':
                [
                    'Enhance your Snake game experience with a colorfull user interface with sound effects.',
                    'Enjoy the flexibility to pause the game at your convenience',
                    'Your score are tracked and reflected'
                ]
        }
    ];


    return (

        <>
            <div className='w-full max-w-[2000px] px-20  md:px-4'>
                <h1 className='text-brown text-[50px] mt-9 flex md:text-[40px] md:leading-none md:overflow-hidden'>Some Things I've Built <span className='block w-1/2 border-b-4 relative bottom-9 left-6 md:hidden'></span></h1>
                <div className='max-w-6xl mb-7 md:mt-5'>
                    <p className='mt-2'>Welcome to my Projects Showcase!</p>
                    <p className='mt-2'>Here, you'll find the cool stuff I've created with my tech tools.
                        Take a look at the different projects that show off my creativity and skills.</p>

                </div>

                {/* card container */}
                <div className='flex gap-16 flex-wrap'>
                    {projects?.map((project, index) => {

                        return (
                            <Card
                                key={index}
                                title={project.title}
                                img={project.img}
                                description={project.description}
                                tags={project.tags}
                                github_link={project.github_link}
                                published_link={project.published_link}
                                features={project.features}
                            />
                        );
                    })}
                    {/* <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags} />
                    <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags} />
                    <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags} />
                    <Card title={projects[0].title} img={projects[0].img} description={projects[0].description} tags={projects[0].tags} /> */}
                </div>
            </div>
        </>
    )
}

export default Projects
