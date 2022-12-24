import React from 'react'
import { Navbar, Footer, Sidebar, GodownListTab } from '../../components'
import './GodownList.css'

const GodownList = () => {
  return (
    <div>
     <Navbar />
     <div className='flex'>
      <Sidebar />
      <GodownListTab />
     </div>
     <Footer />
    </div>
  )
}

export default GodownList