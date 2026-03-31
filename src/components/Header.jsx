import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo1 from "../assets/logo1.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="">
        <div className="max-w-9xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <NavLink>
              <img src={logo1} className='h-8 w-auto' alt="" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href='#' to='/' className="relative text-white hover:text-blue-600 group">Home
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href='#about' className="text-white hover:text-blue-600 relative group">About
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href='#skill' className="text-white hover:text-blue-600 relative group">Skill
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href='#project' className="text-white hover:text-blue-600 relative group">Projects
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href='#experience' className="text-white hover:text-blue-600 relative group">Experienc
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href='#contact' className="text-white hover:text-blue-600 relative group">Contact
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <a href='#' className="block py-2 text-white">Home</a>
            <a href='#about' className="block py-2 text-white">About</a>
            <a href='#skill' className="block py-2 text-white">Skill</a>
            <a href='#project' className="block py-2 text-white">Projects</a>
            <a href='#experience' className="block py-2 text-white">Experience</a>
            <a href='#contact' className="block py-2 text-white">Contact</a>
          </div>
        )}
      </header>
    </>
  )
}

export default Header