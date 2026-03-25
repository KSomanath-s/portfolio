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
            <NavLink to='/' className="text-white hover:text-blue-600">Home</NavLink>
            <NavLink to="/" className="text-white hover:text-blue-600">About</NavLink>
            <NavLink to="/" className="text-white hover:text-blue-600">Skill</NavLink>
            <NavLink to="/" className="text-white hover:text-blue-600">Projects</NavLink>
            <NavLink to="/" className="text-white hover:text-blue-600">Experienc</NavLink>
            <NavLink to="/" className="text-white hover:text-blue-600">Contact</NavLink>
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
            <NavLink to="/" className="block py-2 text-white">Home</NavLink>
            <NavLink to="/" className="block py-2 text-white">About</NavLink>
            <NavLink to="/" className="block py-2 text-white">Skill</NavLink>
            <NavLink to="/" className="block py-2 text-white">Projects</NavLink>
            <NavLink to="/" className="block py-2 text-white">Experience</NavLink>
            <NavLink to="/" className="block py-2 text-white">Contact</NavLink>
          </div>
        )}
      </header>
    </>
  )
}

export default Header