import React from 'react'

const WorkExperience = () => {
    return (
        <>
            <div id='experience' className='bg-black py-16 px-5'>
                <div className='pb-16'>
                    <h1 className='text-3xl pb-3 font-bold text-center '>Work <span className='text-purple-400'>Experience</span></h1>
                    <p className='text-center'>My professional journey so far</p>
                </div>
                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'>
                        <div className='timeline-item relative pl-12 before:content-[""] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                            <div className='timeline-dot absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple-500'></div>
                            <div className='bg-gray-600 rounded-2xl p-6 card-hover mb-6'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-xl font-semibold'>Freelancer</h3>
                                    <span className='px-3 py-1 bg-purple-400 text-white rounded-full text-xs md:text-sm '>2025 - Current</span>
                                </div>
                                <p className='text-gray-400 mb-2'>Freelancing</p>
                                <p className='text-gray-300'>Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-12'>
                        <div className='timeline-item relative pl-12 before:content-[""] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                            <div className='timeline-dot absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple-500'></div>
                            <div className='bg-gray-600 rounded-2xl p-6 card-hover mb-6'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-xl font-semibold'>Web Developer</h3>
                                    <span className='px-3 py-1 bg-purple-400 text-white rounded-full text-xs md:text-sm '>2022 - 2025</span>
                                </div>
                                <p className='text-gray-400 mb-2'>Qodequay Technologies Pvt.Ltd</p>
                                <p className='text-gray-300'>Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WorkExperience