import React from 'react'
import './Navbar.css'
import menuimage from '../../images/menu-top-xs.png'
import logo from '../../images/ironhack-logo-xs.png'

function Navbar() {
  return (
    <nav >
            <img src={logo} alt="logo" />
            <img src={menuimage} alt="menu" />
    </nav>
  )
}
export default Navbar