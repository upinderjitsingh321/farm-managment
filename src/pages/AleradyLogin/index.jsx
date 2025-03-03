import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string()
        .matches(passwordRegex, "Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character")
        .required("Password is required"),
});

function AlreadyAccount() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = (e) => {
        console.log(e, "checkfirlds")
    }

    const navigate = useNavigate()

    const handleNavigateSignup = (data) => {
        navigate("/register")
    }
    return (


        <div>
            <div className="container d-flex justify-content-center align-items-center p-4">
                <div className="p-4 shadow-lg" style={{ width: "900px", height: "500px" }}>

                    <form onSubmit={handleSubmit(handleSubmitForm)} style={{ width: "400px", margin: "auto", marginTop: "30px" }}>
                        <h4 className="text-center mb-3">LOG IN</h4>
                        <div className='d-flex justify-content-center'><p>Don't have an account?</p>
                            <button onClick={handleNavigateSignup} style={{ height: "26px", width: "70px", backgroundColor: "#247c5491", color: "black" }}>Sign Up</button>
                        </div>
                        <div className='d-flex loginacc-bg justify-content-center py-2 mb-2 '><img className='loginacc-logo' src='img/facebooklogo.png' /><p style={{ color: "#2b88bfc9", marginBottom: "0" }}>CONTINUE WITH FACEBOOK</p></div>
                        <div className=' d-flex loginacc-bg justify-content-center py-2 mb-2 '><img className='loginacc-logo' src='img/googlelogo.png' /><p style={{ marginBottom: "0" }}>CONTINUE WITH GOOGLE</p></div>
                        <div className="mb-3">
                            <input
                                {...register("email")}  className="form-control" placeholder="Email" />
                            {
                                errors.email?.message &&
                                <p className="text-danger">{errors.email?.message}</p>
                            }
                        </div>
                        
                        <div className="mb-3">

                            <input  {...register("password")}  className="form-control" placeholder="Password" />
                            {
                                errors.password?.message &&
                                <p className="text-danger">{errors.password?.message}</p>
                            }
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
