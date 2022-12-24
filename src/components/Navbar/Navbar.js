import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
     <div>
      <img className='logo' src='../images/logo.png' alt='logo' />
     </div>
     <ul className='nav_content'>
      <Link className='link' to='Register'><li>Register</li></Link>
      <Link className='link' to='/GodownList'><li>Godown List</li></Link>
      <Link className='link' to='/Login'><li>Login</li></Link>
     </ul>
    </div>
  )
}

export default Navbar