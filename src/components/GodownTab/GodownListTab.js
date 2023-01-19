import React from 'react'
import './GodownListTab.css'

const GodownListTab = () => {
  return (
    <div className='godown_list'>
     <div className='godown_card'>
      <div className='godown_card_content'>
       <h1>Shreejee Warehouse</h1>
       <p>Plot No - 3,4 &5 H.K.Ind.Zone, Satada 
       Road opp. Kuvadava GIDC, Rajkot GUJARAT PINCODE-360005</p>
       <p>Capacity: 9000</p>
       <p>Type of goods</p>
       <ul>
        <li>Loading Facilities</li>
        <li>Security</li>
        <li>Temperature Control</li>
       </ul>
       <div>
        <button>More Info</button>
        <button>Book</button>
       </div>
      </div>
     </div>
     <div className='godown_card'>
      <div className='godown_card_content'>
       <h1>Central Warehousing Corporation</h1>
       <p>Hardoi Lucknow Road, 
       Opp. 132 KV Power Station, Hardoi UTTAR PRADESH 
       PINCODE-226016</p>
       <p>Capacity: 3800</p>
       <p>Type of goods</p>
       <ul>
        <li>Loading Facilities</li>
        <li>Security</li>
        <li>Temperature Control</li>
       </ul>
       <div>
        <button>More Info</button>
        <button>Book</button>
       </div>
      </div>
     </div>
     <div className='godown_card'>
      <div className='godown_card_content'>
       <h1>CW Ongole Central Warehouse</h1>
       <p> Throvagunta P.O. Ongole Prakasam ANDHRA PRADESH PINCODE-523262</p>
       <p>Capacity:  10000</p>
       <p>Type of goods</p>
       <ul>
        <li>Loading Facilities</li>
        <li>Security</li>
        <li>Temperature Control</li>
       </ul>
       <div>
        <button>More Info</button>
        <button>Book</button>
       </div>
      </div>
     </div>
    </div>
  )
}

export default GodownListTab