import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">My Website</h1>
          <div className="flex gap-6 items-center">
            <NavLink to="/" className={({isActive}) => `text-white font-medium px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-yellow-400 text-gray-800 shadow-md font-bold' : 'hover:bg-white hover:bg-opacity-20'}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `text-white font-medium px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-yellow-400 text-gray-800 shadow-md font-bold' : 'hover:bg-white hover:bg-opacity-20'}`} end>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `text-white font-medium px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-yellow-400 text-gray-800 shadow-md font-bold' : 'hover:bg-white hover:bg-opacity-20'}`} end>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav