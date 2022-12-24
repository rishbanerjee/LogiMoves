import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {Asterisk, Blob, Truck, GateOfIndia, Taj} from '../../assets'

const Header = () => {
  return (
    <React.Fragment>
    <Asterisk className="asterisk" fill={"#ffcb42"} width={40} height={40} />
    <Blob className="blob" fill={"#ffcb42"} width={40} height={40}  />
    <Truck className="truck" fill={"#ffcb42"} width={50} height={50}  />
    <GateOfIndia className="gateofindia" fill={"#ffcb42"} width={50} height={50}  />
    <Taj className="taj" fill={"#ffcb42"} width={50} height={50}  />
    <div className='header'>
     <h1 className='heading'>We make your logistic delivery and storage hassle-free</h1>
     <p className='subtitle'>Be worry free about your logistics, choose warehouse according to your product features and get it delivered with much less delay.</p>
     <Link to='/Register' className='link'><button className='btn'>Register Yourself</button></Link>
    </div>
    </React.Fragment>
  )
}

export default Header