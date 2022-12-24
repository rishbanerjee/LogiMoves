import React from 'react'
import './GodownListTab.css'

const GodownListTab = () => {
  return (
    <div className='godown_list'>
     <div className='godown_card'>
      <div className='godown_card_image'>
       <img src='../images/warehouse1.jpeg' alt='godown' />
       <p>Kolkata</p>
      </div>
      <div className='godown_card_content'>
       <h1>Central RailSide Warehouse</h1>
       <p className='verify'>Verified and Certified</p>
       <h3>Facilities</h3>
       <ul>
        <li>Pest Free</li>
        <li>24/7 electricity</li>
        <li>Industry level clean</li>
        <li>Security Management</li>
       </ul>
       
      </div>
     </div>
     <div className='godown_card'>
      <div className='godown_card_image'>
       <img src='../images/warehouse2.jpeg' alt='godown' />
       <p>Mumbai</p>
      </div>
      <div className='godown_card_content'>
       <h1>Capital Godown</h1>
       <p className='verify'>Verified and Certified</p>
       <h3>Facilities</h3>
       <ul>
        <li>Pest Free</li>
        <li>24/7 electricity</li>
        <li>Industry level clean</li>
        <li>Security Management</li>
       </ul>
       
      </div>
     </div>
     <div className='godown_card'>
      <div className='godown_card_image'>
       <img src='../images/warehouse3.jpeg' alt='godown' />
       <p>Delhi</p>
      </div>
      <div className='godown_card_content'>
       <h1>Shalimar Warehouse</h1>
       <p className='verify'>Verified and Certified</p>
       <h3>Facilities</h3>
       <ul>
        <li>Pest Free</li>
        <li>24/7 electricity</li>
        <li>Industry level clean</li>
        <li>Security Management</li>
       </ul>
       
      </div>
     </div>
    </div>
  )
}

export default GodownListTab