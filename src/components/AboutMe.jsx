import React from 'react'
import AboutMeImage from "../assets/about-me.jpg";
const AboutMe = () => {
  return (
    <>
        <div className='bg-black py-10'>
            <h1 className='text-2xl font-bold text-center'>About <span className='text-purple-400'>Me</span></h1>
            <p className='text-center'>Get to know more about my background and passion</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <div>
                    <img src={AboutMeImage} alt="" className='' />
                </div>
            </div>
            <div></div>
        </div>
        </div>
    </>
  )
}

export default AboutMe