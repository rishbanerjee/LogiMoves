import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div>
      <h2>Structure</h2>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Electrical Lighting</p>
       </div>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>RCC/ACC Roofing</p>
       </div>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Metal Insulation</p>
       </div>
     </div>
     <div>
      <h2>Safety</h2>
      <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Fire Extinguisher</p>
       </div>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Sprinkler System</p>
       </div>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Fire Hydrant</p>
       </div>
     </div>
     <div>
      <h2>External Facilities</h2>
      <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Water Sources</p>
       </div>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Ramp</p>
       </div>
       <div className='checkbox'>
       <input type='checkbox' id="Structure" name="Structure" value="Structure" />
       <p>Factory Hybrid Building</p>
       </div>
     </div>
    </div>
  )
}

export default Sidebar