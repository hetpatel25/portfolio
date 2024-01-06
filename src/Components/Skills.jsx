import React from 'react'
import Footer from './Footer';
const importAll = (r) => r.keys().map(r);


const importAllWithPrefix = (prefix) => {
    return require.context('../Assets/', false, new RegExp(`^${prefix}`, 'i')).keys().map((key) => key.slice(2));
};


function Skills() {

    const lang_imgs = importAll(require.context('../Assets/lang', false, /\.(jpeg|svg)$/));
    const framework_imgs = importAll(require.context('../Assets/framework', false, /\.(jpeg|svg)$/));
    const tools_imgs = importAll(require.context('../Assets/tools', false, /\.(jpeg|svg)$/));


    return (

        <>
            <div className='w-full max-w-[2000px] px-20'>
                <h1 className='text-brown text-[50px] mt-9 flex'>SKILLS <span className='block w-1/2 border-b-4 relative bottom-9 left-6'></span></h1>
                <div className='max-w-6xl mb-7'>
                    <p className='mt-2'>Welcome to the technological palette that powers my creative journey!</p>
                    <p className='mt-2'>I use a bunch of cool tools to bring my creative ideas to life in the digital
                        world. Let me give you a peek into my tech lineup - the tools that make everything possible!</p>

                </div>

                <div className='flex flex-col w-full gap-y-9'>
                    <div className='w-full bg-shadow p-6 pt-5'>
                        <h3 className='text-2xl font-semibold'>Languages & Databases</h3>
                        <div className='flex gap-x-10 gap-y-5 py-10 flex-wrap sm:justify-between'>
                            {lang_imgs.map((img, index) => (
                                <img src={img} alt={`Language Image ${index + 1}`} className='mr-4' />
                            ))}
                        </div>
                    </div>

                    <div className='w-full bg-shadow p-6 pt-5'>
                        <h3 className='text-2xl font-semibold'>Frameworks & Libraries</h3>
                        <div className='flex gap-x-10 gap-y-5 py-10 flex-wrap sm:justify-between'>
                            {framework_imgs.map((img, index) => (
                                <img src={img} alt={`Language Image ${index + 1}`} className='mr-4' />
                            ))}
                        </div>
                    </div>
                    <div className='w-full bg-shadow p-6 pt-5'>
                        <h3 className='text-2xl font-semibold'>Tools</h3>
                        <div className='flex gap-x-10 gap-y-5 py-10 flex-wrap sm:justify-between'>
                            {tools_imgs.map((img, index) => (
                                <img src={img} alt={`Language Image ${index + 1}`} className='mr-4' />
                            ))}
                        </div>
                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Skills
