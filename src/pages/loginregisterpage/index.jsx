import React from 'react'
import { Link, Links } from 'react-router-dom'
import "./style.css"
import { Button} from '@mui/material'
function LoginRegister() {
    return (
        <>
           
            <hr style={{ margin: "30px 97px" }} className='border-success'></hr>

            <div className='container logoregister-bgcolor'>
                <div className='row logoregister-padding '>
                    <div className='col-md-4 logoregister-height height1'>
                        <h1>Farmer </h1>
                        <h1>LOGIN/REGISTER </h1>
                        <hr className='btn-success w-25 border-3'></hr>
                        <p>Online Platform for farmer to store their crop information and analyse data for better production </p>
                    </div>

                    <div className="col-md-4 text-center bg-white logoregister-height">
                        <img className='logoregister-image' src='img/padlock.png' />
                        <h3>Existing Farmer</h3>
                        <button className="btn btn-success px-4 py-2 rounded-pill" style={{ width: "250px" }}><Link className='text-white' to={"/alredyaccount"}> Sign In & Get Started</Link> </button>
                    </div>
                    <div className="col-md-4 text-center bg-white logoregister-height">
                        <img className='logoregister-image' src='img/registry.png' />
                        <h3>New User</h3>
                        <button className="btn btn-success px-4 py-2 rounded-pill" style={{ width: "250px" }}><Link className='text-white' to={"/register"} >Sign Up</Link> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegister
