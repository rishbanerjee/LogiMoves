import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <img className='logo' src='../images/logo.png' alt='logo' />
     <p>Logistic platform where we connect exporters with warehouse owners to make exporting goods easy and efficient.</p>
     <ul className='nav_content_footer'>
      <li>Register Yourself</li>
      <li>Godown List</li>
      <li>Login</li>
     </ul>
    </div>
  )
}

export default Footer