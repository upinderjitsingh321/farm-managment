import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./style.css"
function NewUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }
    const navigate = useNavigate()

    const handleNavigateSignup = () => {
        navigate("/register")
    }
    return (


        
            <div className="container mt-5 p-4 register-bgcolor">
                <div className="row gap-5">
                <div className=" col-md-8 p-4 setwidth1 shadow-lg">

                    <form onSubmit={handleSubmit} style={{width:"400px",margin:"auto",marginTop:"30px"}}>
                        <h4 className="text-center mb-3">LOG IN</h4>
                        
                        <div className='d-flex loginacc-bg justify-content-center py-2 mb-2 '><img className='loginacc-logo' src='img/facebooklogo.png' /><p style={{ color: "#2b88bfc9", marginBottom: "0" }}>CONTINUE WITH FACEBOOK</p></div>
                        <div className=' d-flex loginacc-bg justify-content-center py-2 mb-2 '><img className='loginacc-logo' src='img/googlelogo.png' /><p style={{ marginBottom: "0" }}>CONTINUE WITH GOOGLE</p></div>
                        <div className="mb-3">
                        <label className="form-label">Email ID</label>

                            <input
                                type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" maxLength="10" required />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Password</label>

                            <input type="tel" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </div>
                        <p><Link className='text-black' to={"/forgotpassword"}>Forgot your password?</Link></p>

                        <button type="submit" className="btn btn-success w-100">LOG IN</button>
                    </form>
                </div>

                <div className="col-md-4 shadow text-center p-4 bg-white rounded">
          <div style={{paddingTop:"20px"}}><h2>New User</h2></div>
          
          <img style={{marginTop:"20px"}} className='logoregister-image' src='img/registry.png' /><br></br>
          <button onClick={handleNavigateSignup}  type="submit" className=" btn btn-success text-dark w-50 newuser-button">Sign Up</button>

          </div>
        </div>
            </div>
        


    )
}

export default NewUser
