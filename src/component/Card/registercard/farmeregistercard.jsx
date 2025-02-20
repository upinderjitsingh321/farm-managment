import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function Newregister() {
  return (
    <div className='container '>
    <div className='row justify-content-center reg-page-gap '>
    <div className='col-md-6 reg-page-width text-center shadow'>
      <h3 className='pt-4' >Farmer</h3>
      <div><img className='register-page-logo' src='img/registerlogo1.png' alt='leaf photo'/></div>
      <p className='para-padding px-3'>Online site where yoy can store crop details for long time & analyse production</p>
      <p className='fw-semibold'>Login/Register</p>
      <div className='pb-4'><button  className='btn btn-success px-4 py-2 rounded-pill'><Link className='text-white ' to={"/farmerlogin"}>Click Here</Link></button></div>
    </div>
    <div className='col-md-6 reg-page-width text-center shadow'>
      <h3 className='pt-4'>Admin</h3>
      <div><img className='register-page-logo' src='img/registerlogo1.png' alt='leaf photo'/></div>
      <p className='para-padding px-3'>Admin can see details of farmer and have access of all things.</p>
      <p className='fw-semibold'>Login/Register</p>
      <div className='pb-4'><button className='btn btn-success px-4 py-2 rounded-pill'>Click Here</button></div>
    </div>
    </div>
   
    
    </div>
    
  )
}

export default Newregister
