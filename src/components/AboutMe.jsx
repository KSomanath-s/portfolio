import React from 'react'
// import AboutMeImage from "../assets/about-me.jpg";
import { Brush, Code, Lightbulb } from 'lucide-react';
import BigImage from "../assets/new-img.jpeg"

const AboutMe = () => {
    return (
        <>
            <div id='about' className='bg-black py-16 px-5'>
                <div className='pb-20'>
                    <h1 className='text-3xl pb-3 font-bold text-center '>About <span className='text-purple-400'>Me</span></h1>
                    <p className='text-center'>Get to know more about my background and passion</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <div className='h-[47rem]'>
                            <img src={BigImage} alt="" className='rounded-lg w-full h-full' />
                        </div>
                    </div>
                    <div className='p-5'>
                       <div>
                         <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6'>
                            I'm a passionate full-stack developer with over 3 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.
                        </p>
                        <p className='text-gray-300 mb-6'>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                        </p>
                       </div>
                        {/* Grid for card */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-4'>
                        <div className='bg-gray-600 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                            <div>
                                <div className='pb-4'>
                                    <Lightbulb className='text-blue-500' size={35} />
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>Innovative</h3>
                                <p className='text-gray-400'>I love creating unique solutions to complex problems with cutting-edge technologies.</p>
                            </div>
                        </div>
                        <div className='bg-gray-600 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                            <div>
                                <div className='pb-4'>
                                    <Brush className='text-blue-500' size={35} />
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>Design Oriented</h3>
                                <p className='text-gray-400'>Beautiful design and user experience are at the heart of everything I create.</p>
                            </div>
                        </div>
                        <div className='bg-gray-600 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                            <div>
                                <div className='pb-4'>
                                    <Code className='text-blue-500' size={35} />
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>Clean Code</h3>
                                <p className='text-gray-400'>I write maintainable, efficient code following best practices and modern patterns.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AboutMe