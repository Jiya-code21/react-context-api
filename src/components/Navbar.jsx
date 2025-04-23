import React from 'react'
import {NavLink} from "react-router-dom"
function Navbar() {
  return (
    <nav className=" text-white">
      <div className="container mx-auto px-4 py-4">
    <ul className="flex space-x-6 justify-center">
  <li> <NavLink to="/"  className="text-lg hover:text-gray-300 transition-colors duration-300">Home</NavLink></li>
  <li> <NavLink to="/about"  className="text-lg hover:text-gray-300 transition-colors duration-300">About</NavLink></li>
  <li> <NavLink to="/service"  className="text-lg hover:text-gray-300 transition-colors duration-300">Services</NavLink></li>
  <li> <NavLink to="/contact"  className="text-lg hover:text-gray-300 transition-colors duration-300">Contact</NavLink></li>

</ul>

    </div>
   </nav>
  )
}

export default Navbar
