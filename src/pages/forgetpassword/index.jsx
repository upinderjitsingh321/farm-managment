import React from 'react'

function ForgotPassword() {
  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center p-4">
        <div className="p-4 shadow-lg" style={{ width:"750px",height:"450px" }}>
        <form style={{width:"400px",margin:"auto",marginTop:"30px",paddingTop:"50px"}}>
        <h2 className="text-center mb-5">Forgot your password?</h2>
      <p>Enter the email you registered with and we'll send a link to reset the password</p>
      <input className="form-control"  type='text' placeholder='Email'/>
      <button type="submit" className="btn btn-success w-100 mt-4">Send a Link</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword
