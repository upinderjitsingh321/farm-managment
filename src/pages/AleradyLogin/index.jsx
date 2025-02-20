import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AlreadyAccount() {
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


        <div>
            <div className="container d-flex justify-content-center align-items-center p-4">
                <div className="p-4 shadow-lg" style={{ width:"900px",height:"450px" }}>

                    <form onSubmit={handleSubmit} style={{width:"400px",margin:"auto",marginTop:"30px"}}>
                        <h4 className="text-center mb-3">LOG IN</h4>
                        <div className='d-flex justify-content-center'><p>Don't have an account?</p>
                            <button onClick={handleNavigateSignup} style={{ height: "26px", width: "70px", backgroundColor: "#247c5491", color: "black" }}>Sign Up</button>
                        </div>
                        <div className='d-flex loginacc-bg justify-content-center py-2 mb-2 '><img className='loginacc-logo' src='img/facebooklogo.png' /><p style={{ color: "#2b88bfc9", marginBottom: "0" }}>CONTINUE WITH FACEBOOK</p></div>
                        <div className=' d-flex loginacc-bg justify-content-center py-2 mb-2 '><img className='loginacc-logo' src='img/googlelogo.png' /><p style={{ marginBottom: "0" }}>CONTINUE WITH GOOGLE</p></div>
                        <div className="mb-3">
                            <input
                                type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" maxLength="10" required />
                        </div>
                        <div className="mb-3">

                            <input type="tel" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </div>
                        <p><Link className='text-black' to={"/forgotpassword"}>Forgot your password?</Link></p>

                        <button type="submit" className="btn btn-success w-100">LOG IN</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AlreadyAccount
