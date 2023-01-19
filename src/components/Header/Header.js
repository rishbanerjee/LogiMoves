import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { default as truck } from '../../assets/truck.png'

const Header = () => {
  return (
    <React.Fragment>
    <div className='header'>
    <p className="header_subline">Our platform allows exporter to book warehouses according to their needs.</p>
     <div className='header_image'>
     </div>
     <div className='header_content'>
     <h1 className='heading'>Simplifying Logistics and Streamlining Warehouse Booking</h1>
     <p className='subtitle'>Say goodbye to the hassle of coordinating multiple logistics providers and hello to a streamlined, stress-free exporting experience.</p>
     <Link to='/Register' className='link'><button className='btn'>Register Yourself</button></Link>
     </div>
    </div>
    </React.Fragment>
  )
}

export default Header