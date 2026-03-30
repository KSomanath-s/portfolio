import React from 'react'
import DummyCardImage from "../assets/dummy-card-image.png";
const MyProject = () => {
    return (
        <>
            <div className='bg-black py-16 px-5'>
                <div className='pb-20'>
                    <h1 className='text-3xl pb-3 font-bold text-center '>My <span className='text-purple-400'>Projects</span></h1>
                    <p className='text-center'>A selection of my recent work</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {/* First Card */}
                    <div className='bg-gray-600 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='pb-3'>
                            <img src={DummyCardImage} className='w-full rounded-lg' alt="" />
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <h3 className='text-xl font-semibold'>Frontend Development</h3>
                        </div>
                        <p className='text-gray-400 mb-4'>Building responsive and interactive user interfaces with modern frameworks.</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>HTML</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>CSS</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>JS</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>REACT</span>
                        </div>
                        <div className='flex gap-2 py-3'>
                            <a href="#" className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition-colors'>View Demo</a>
                            <a href="#" className='flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition-colors'>Code</a>
                        </div>
                    </div>
                    {/* Second Card */}
                    <div className='bg-gray-600 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='pb-3'>
                            <img src={DummyCardImage} className='w-full rounded-lg' alt="" />
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <h3 className='text-xl font-semibold'>Backend Development</h3>
                        </div>
                        <p className='text-gray-400 mb-4'>Creating robust server-side applications and RESTful APIs.</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>NODE</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>EXPRESS</span>
                        </div>
                        <div className='flex gap-2 py-3'>
                            <a href="#" className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition-colors'>View Demo</a>
                            <a href="#" className='flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition-colors'>Code</a>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className='bg-gray-600 rounded-2xl p-6 skill-card hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='pb-3'>
                            <img src={DummyCardImage} className='w-full rounded-lg' alt="" />
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <h3 className='text-xl font-semibold'>Database Development</h3>
                        </div>
                        <p className='text-gray-400 mb-4'>Designing and optimizing databases for performance and scalability.</p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>MongoDB</span>
                            <span className='px-3 py-1 bg-gray-800 rounded-full text-sm'>MySQL</span>
                        </div>
                        <div className='flex gap-2 py-3'>
                            <a href="#" className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition-colors'>View Demo</a>
                            <a href="#" className='flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition-colors'>Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProject