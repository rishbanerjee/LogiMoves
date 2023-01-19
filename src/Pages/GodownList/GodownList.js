import React from 'react'
import { Navbar, Footer, Sidebar, GodownListTab, GodownHeader } from '../../components'
import './GodownList.css'

const GodownList = () => {
  return (
    <div>
     <Navbar />
     <GodownHeader />
     <div className='flex'>
      <GodownListTab />
     </div>
     <Footer />
    </div>
  )
}

export default GodownList