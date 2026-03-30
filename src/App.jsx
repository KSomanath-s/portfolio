import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import MyProject from './components/MyProject'
import WorkExperience from './components/WorkExperience'
import GetInTouch from './components/GetInTouch'

const App = () => {
  return (
    <>
      <div className='max-w-full mx-auto text-white'>
        <div className='w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
          <Header />
        </div>
        <About />
        <AboutMe />
        <Skills />
        <MyProject/>
        <WorkExperience/>
        <GetInTouch/>
        <Footer />
        {/* <div className='w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
          <Header />
        </div>
        <div className=''>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/' element={<AboutMe />} />
          </Routes>
          <Footer />
        </div> */}
      </div>
    </>
  )
}

export default App