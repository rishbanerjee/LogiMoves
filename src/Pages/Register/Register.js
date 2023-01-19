import React, {useState} from 'react'
import './Register.css'
import {default as Exporter} from '../../assets/exporter.jpg'
import {default as Owner} from '../../assets/owner.jpg'
import {ExporterForm, GodownOwnerForm, Navbar} from '../../components'

const Register = () => {
  
  return (
    <React.Fragment>
     <Navbar />
     <div className='register'>
      <div className='exporter'>
       <button className='register_btn'>Register As Exporter</button>
      </div>
      <div className='warehouse_owner'>
      <button className='register_btn'>Register As Warehouse Owner</button>
      </div>
     </div>
    </React.Fragment>
  )
}

export default Register