import React from 'react'
import './WhyUs.css'
import {Communication, Convenience, Cost, Reliable, Transparency, Selection} from '../../assets'

const WhyUs = () => {
  return (
    <div className='why_container'>
     <h2 className='why_heading'>Why Choose Us</h2>
     <h1 className='why_sub'>Our goal is to make exporting goods as seamless and efficient as possible.</h1>
     <div className='why_cards_container'>
      <div className='why_card_container'>
      <div className='why_card'>
       <Reliable fill="#3d2723" width={89} height={89} />
       <h3>Reliability</h3>
       <p>We only work with reputable warehouse owners who have been vetted for quality and safety</p>
      </div>
      <div className='why_card'>
      <Transparency fill="#3d2723" width={89} height={89} />
      <h3>Transparency</h3>
      <p>Our platform provides detailed information about each warehouse, including photos, location, and amenities, so exporters can make informed decisions</p>
      </div>
      <div className='why_card'>
      <Communication fill="#3d2723" width={89} height={89} />
       <h3>Easy communication</h3>
       <p>The platform provides a simple and efficient communication channel between the exporter and warehouse owner.</p>
      </div>
      <div className='why_card'>
      <Convenience fill="#3d2723" width={89} height={89} />
       <h3>Convenience</h3>
       <p>Our platform allows exporters to easily find and book warehouses, saving them time and effort.</p>
      </div>
      <div className='why_card'>
      <Cost fill="#3d2723" width={89} height={89} />
       <h3>Cost-Effective</h3>
       <p>Our platform connects exporters with warehouses at competitive rates, helping them save money.</p>
      </div>
      <div className='why_card'>
      <Selection fill="#3d2723" width={89} height={89} />
       <h3>Wide selection</h3>
       <p>We have a wide range of warehouses to choose from, allowing exporters to find the perfect fit for their needs.</p>
      </div>
      </div>
     </div>
    </div>
  )
}

export default WhyUs