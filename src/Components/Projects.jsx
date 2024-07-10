import React, { useEffect } from 'react'
import Card from './Card'
import Footer from './Footer';

import routier from '../Assets/projects/routier.png'
import inotes from '../Assets/projects/inotes.png'
import snakegame from '../Assets/projects/snakegame.png'
import payment_app from '../Assets/projects/payment_app.png'
import amazon_clone from '../Assets/projects/amazon_clone.png'
import portfolio from '../Assets/projects/portfolio.png'
import diamond from '../Assets/projects/diamond.png'
import electronic_database from '../Assets/projects/electronic_database.png'


const projects = [
    {
        'title': 'Routier- a trip advisor website',
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
        'title': 'User perception and experience of using payment apps',
        'img': payment_app,
        'description': 'Our study aims to understand users perceptions and experiences regarding e-banking apps. We seek to identify challenges users face, gauge satisfaction levels, and pinpoint areas for improvement in existing e-banking platforms. Additionally, we aim to investigate users preferences for online transactions, their app usage patterns, preferred features, types of businesses they engage with using these apps, and the problems they encounter while using them.',
        'tags': ['UI/UX', 'Prototype'],
        'github_link': 'https://github.com/hetpatel25/payment_app_prototype',
        'published_link': 'https://www.figma.com/design/rDXzljo6bVdXSdzgEvQiWT/HCI_Wireframe?node-id=0-1&t=jy7jPXhOXswcDRz0-0',
        'features': ['Conducted user interviews and survey to measure usability and identify pinpoints for improvement',
            'Created a paper and Figma prototype based on research findings and HCI principles',
            'Enhanced with new features and improvements over current payment apps',
            'Simple User interface',
            'Easy navigation for frequently used features',
        ]
    },
    {
        'title': 'Predicting Diamond Price',
        'img': diamond,
        'description': 'The primary objective is to predict the total sales price of a diamond based on its characteristics. This prediction is crucial for buyers, sellers, and investors to make informed decisions, set competitive prices, and assess the potential return on investment.',
        'tags': ['ML', 'Scikit-learn'],
        'github_link': 'https://github.com/hetpatel25/PredictingDiamondPrice',
        'published_link': '',
        'features': ['Detailed Exploratory Data Analysis (EDA) using various visualization techniques',
            'data preprocessing and transformation for optimal model performance',
            'Implementation of multiple regression models including Linear Regression, Polynomial Regression, Decision Tree, and Random Forest',
            'Hyperparameter tuning using grid search to enhance model accuracy',
            'Evaluation of model performance with metrics like MAE, MSE, and RMSE',
            'Achieved 84% accuracy in predicting diamond prices'
        ]
    },
    {
        'title': 'My Portfolio Website',
        'img': portfolio,
        'description': 'This project is a personal portfolio website, designed to showcase my professional journey and accomplishments. The website is designed to be user-friendly and responsive, ensuring an excellent browsing experience across all devices.',
        'tags': ['React', 'TailwindCSS', 'Figma', 'Frontend'],
        'github_link': 'https://github.com/hetpatel25/portfolio',
        'published_link': 'https://het-patel.vercel.app/',
        'features': ['Easily navigate through all sections essential for any portfolio viewer',
            'Clean and intuitive user interface (UI)',
            'Responsive design',
            'Provides an excellent browsing experience',
        ]
    },
    {
        'title': 'Amazon Clone - Home Page',
        'img': amazon_clone,
        'description': "This project is a clone of the 'amazon.com' website created using HTML and CSS. It aims to replicate the look and feel of the original Amazon website, showcasing my skills in front-end web development.",
        'tags': ['HTML', 'CSS', 'Frontend'],
        'github_link': 'https://github.com/hetpatel25/amazonClone',
        'published_link': 'https://hetpatel25.github.io/amazonClone/',
        'features': ['Accurate replication of the Amazon homepage layout',
            'Responsive design for various screen sizes',
            'Clean and well-organized code structure',
        ]
    },

    {
        'title': 'Electronic Shop - Database',
        'img': electronic_database,
        'description': "The database stores all information on electronic items, orders, and employees of a specific electronic shop. A shop can have multiple branches. This project encompasses the design and implementation of the database, including the creation of an ER diagram, relational schema, and various SQL scripts for data definition and manipulation.",
        'tags': ['SQL', 'Relational-Model'],
        'github_link': 'https://github.com/hetpatel25/Electronic-Shop-Database',
        'published_link': '',
        'features': ['Captures detailed information on electronic items, orders, and employees, ensuring systematic organization',
            'Includes an ER diagram for a clear overview of the database structure',
            'Implemented a relational schema that ensures data integrity and normalization, adhering to BCNF',
            'Provides DDL-DML scripts for creating, modifying, and querying the database',
            'SQL queries for diverse business operations and decision-making processes'
        ]
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


function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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
