import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
function Myaccount() {
    const data = {
        name: "Upinderjit Singh",
        personalInfo: {
            firstname: "upinderjit",
            secondname: "singh",
            dateofbirth: "05-05-2001",
            mobileno: "9781617288",
            idproof: "Aadhar Card"
        },
        address: {
            country: "India",
            city: "Gurdaspur",
            pincode: "143528"
        }
    }
    return (

        <div style={{ backgroundColor: "#ede9e9", paddingBottom: "30px" }}>


            <div className='container d-flex align-items-center mb-2'>

                <h3 className='line'>My Profile</h3>

                <div className='borderBottom'></div>
            </div>
            <div className='container container-right-one container-gap mb-4'>
                <div className='profile_photo1' >
                    <img className='profile_photo' src='img/profile-picture.png' />
                    <input id='image' type='file' className='d-none' />
                    <label className='camera-icon' htmlFor='image'><i class="fa-solid fa-camera fs-5" role='button'></i></label>

                </div>
                <div>
                    <p style={{ paddingTop: "20px" }}>{data.name}</p>
                </div>
            </div>
            <div className='container container-gap '>
                <div className='row my-4'>
                    <div style={{ display: "flex" }}>
                        <h3>Personal Information</h3>
                        <div style={{ width: "78%", textAlign: "end" }}>
                            <Link to={"/edit-personal"}><button className='edit-button'>Edit</button></Link></div>
                    </div>
                    <div className='bottom-line'></div>

                    <div className='col-md-4'>
                        <p>First Name</p>
                        <p>{data.personalInfo.firstname}</p>
                    </div>
                    <div className='col-md-4'>
                        <p>Second Name</p>
                        <p>{data.personalInfo.secondname}</p>
                    </div>
                    <div className='col-md-4'>
                        <p>Date-of-Birth</p>
                        <p>{data.personalInfo.dateofbirth}</p>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <p>Phone Number</p>
                        <p>{data.personalInfo.mobileno}</p>
                    </div>

                    <div className='col-md-4'>
                        <p>Id Proof</p>
                        <p>{data.personalInfo.idproof}</p>
                    </div>
                    <div className='col-md-4 btn-pass'>
                        <p>Password</p>
                        <span>********</span>
                        <Button className='ms-3 button-pos' variant="outlined" color="error">
                            <EditIcon/>
                        </Button>
                    </div>


                </div>
            </div>
            <div className=' container container-gap address-padd '>
                <div className='row mt-4'>
                    <div style={{ display: "flex" }}>
                        <h3>Address</h3>
                        <div style={{ width: "100%", textAlign: "end", paddingRight: "30px" }}>
                            {/* <button className='edit-button'>Edit</button> */}
                        </div>
                    </div>


                    <div className='bottom-line'></div>
                    <div className='col-md-4'>
                        <p>Country</p>
                        <p>{data.address.country}</p>
                    </div>

                    <div className='col-md-4'>
                        <p>City</p>
                        <p>{data.address.city} </p>
                    </div>
                    <div className='col-md-4'>
                        <p>Pin Code</p>
                        <p>{data.address.pincode} </p>
                    </div>
                </div>


            </div>


        </div>





    )
}

export default Myaccount
