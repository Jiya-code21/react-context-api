import React from 'react'
import logo from '../assets/images/logo.png'
import {NavLink} from "react-router-dom"
import Navbar from "./Navbar"
function Header() {
  return (
    <div>
<header className="flex items-center justify-between p-4 bg-indigo-400">
  <NavLink to="/" >
  <img src={logo} alt="Logo" className="h-16 w-16 rounded-full object-cover" />
  </NavLink>
  <Navbar/>
</header>
    </div>
  )
}

export default Header

