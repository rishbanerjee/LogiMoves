import React from 'react'
import './About.css'
import {default as warehouse} from '../../assets/warehouse.png'

const AboutUs = () => {
  return (
    <div className='about_container'>
    <h1>Who we are?</h1>
     <div className='about_content'>
       <img src={warehouse} alt="Warehouse" />
      <p>We are a logistic platform connecting exporters and warehouse owners. Our goal is to make the process 
      of exporting goods as seamless and efficient as possible. By connecting exporters with warehouse owners, 
      we provide a one-stop solution for all logistics needs. Our platform allows exporters to book warehouse 
      space, track their shipments, and manage their inventory all in one place.
      <br />
      Our platform allows exporters to easily find and book warehouses, saving them time and effort. We only work with
       reputable warehouse owners who have been vetted for quality and safety.We offer a secure online payment
        system, so exporters can book warehouses with confidence.
      <br/>
       We believe that by streamlining the logistics process, we can help businesses grow and succeed on a 
       global scale. Be worry free about your logistics, choose warehouse according to your product features
       and get it delivered with much less delay. Our user-friendly interface makes it easy for exporters
       to quickly find and book the warehouse space they need, and our real-time tracking feature ensures that 
       you always know where your goods are.
       <br />
       Say goodbye to the hassle of coordinating multiple logistics providers
       and hello to a streamlined, stress-free exporting experience. Sign up with us today and take control of your
       logistics!</p>
     </div>
    </div>
  )
}

export default AboutUs