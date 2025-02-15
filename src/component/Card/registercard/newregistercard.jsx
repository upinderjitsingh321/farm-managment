import React from 'react'
import "./style.css"
function Newregister() {
  return (
    <section className='d-flex justify-content-center'>
    <div className='text-center shadow'>
      <h3 className='pt-4' >Farmer</h3>
      <div><img className='register-page-logo' src='img/registerlogo1.png' alt='leaf photo'/></div>
      <p className='para-padding px-3'>Online site where yoy can store crop details for long time & analyse production</p>
      <p className='fw-semibold'>Login/Register</p>
      <div className='pb-4'><button className='btn btn-success px-4 py-2 rounded-pill'>Click Here</button></div>
    </div>
    </section>
  )
}

export default Newregister
