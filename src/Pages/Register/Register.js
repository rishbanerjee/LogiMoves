import React, {useState} from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import {ExporterForm, GodownOwnerForm} from '../../components'

const Register = () => {
  const [toggle, setToggle] = useState(true)
  const reverseToggle = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <React.Fragment>
    <Link to='/' className="linkHome">Home Page</Link>
    <div className='form'>
      <button className='toggle' onClick={reverseToggle} >{toggle ? "Are you a Exporter ? Click Here": "Are you a Godown Owner ? Click Here"}</button>
      <div>{toggle ? <GodownOwnerForm /> : <ExporterForm />}</div>
    </div>
    </React.Fragment>
  )
}

export default Register