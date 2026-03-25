import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import aboutImage from "../assets/about.png"
const About = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-40 px-5'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='pb-5 md:pb-0'>
                        <h1 className='text-4xl md:text-6xl font-bold pb-5'>Hi,I'm <span className='text-purple-400'>Somanath</span></h1>
                        <h2 className='text-2xl md:text-4xl font-semibold pb-5'>
                            <span className='pe-2'>I am a</span>  
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'React Developer',
                                    2000,
                                    'Node.js Developer',
                                    2000,
                                    'Web Developer',
                                    2000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className='pb-3 text-lg pb-5'>I create stunning web experiences with modern technologies and innovative design.</p>
                        <div className='flex gap-5'>
                            <button className='py-2 px-4 rounded text-white bg-purple-800 hover:bg-purple-700'>View Work</button>
                            <button className='py-2 px-4 rounded border-2 border-purple-400 hover:bg-purple-700'>Contact</button>
                        </div>
                    </div>
                    <div className='pt-10 md:pt-0'>
                        <div className='flex justify-center '>
                            <img
                                src={aboutImage}
                                alt=""
                                className="rounded-lg animate-bounce [animation-duration:5s] shadow-xl hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About