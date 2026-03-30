import { Code } from 'lucide-react';
import React from 'react'

const Skills = () => {
    return (
        <>
            <div className='bg-black py-16 px-5'>
                <div className='pb-20'>
                    <h1 className='text-3xl pb-3 font-bold text-center '>My <span className='text-purple-400'>Skills</span></h1>
                    <p className='text-center'>Technologies I work with to bring ideas to life</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    <div className='bg-gray-600 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Code />
                            <h3 className='text-xl font-semibold'>Frontend Development</h3>
                        </div>
                        <p className='text-gray-400 mb-4'>Building responsive and interactive user interfaces with modern frameworks.</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>HTML</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>CSS</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>JS</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>REACT</span>
                        </div>
                    </div>
                    <div className='bg-gray-600 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Code />
                            <h3 className='text-xl font-semibold'>Backend Development</h3>
                        </div>
                        <p className='text-gray-400 mb-4'>Creating robust server-side applications and RESTful APIs.</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>NODE</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>EXPRESS</span>
                        </div>
                    </div>
                    <div className='bg-gray-600 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Code />
                            <h3 className='text-xl font-semibold'>Database Development</h3>
                        </div>
                        <p className='text-gray-400 mb-4'>Designing and optimizing databases for performance and scalability.</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>MongoDB</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;


