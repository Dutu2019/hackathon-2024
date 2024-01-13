import React from 'react'
import Logo from './Logo'
import Login from './Login'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='Navbar'>
      <Logo/>
      <Login/>
    </div>
  )
}
