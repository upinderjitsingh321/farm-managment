import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registration.css"
import { useNavigate } from "react-router";
const FarmerRegistration = () => {
  const [farmersName, setFarmersName] = useState("")  
  const  [email, setEmail] =useState("")
  const  [password, setPassword] =useState("")
  const  [confirmpassword, setConfirmPassword] =useState("")
  const  [MobileNumber, setMobileNumber] =useState("")
  const [fatherName, setfatherName] =useState("")
  const[farmerAddress, setfarmerAddress] =useState("")
  const[state, setstate] =useState("")
  const[male, setmale] =useState("")
  const[female, setfemale] =useState("")
  const[idProof, setidProof] =useState("")
  const[proofType, setproofType] =useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(farmersName, email,password,confirmpassword ,fatherName,MobileNumber, farmerAddress,state,male,female,idProof,proofType )  
  }
  const navigate = useNavigate()
  const handleNavigateSignup = () => {
    navigate("/newuser")
}
  return (
    <section className="container mt-5 p-4 register-bgcolor">
      <div className="row">
        <div className="col-md-4 shadow text-center p-4 bg-white rounded reg-padding1">
          <div style={{paddingTop:"20px"}}><h2>Register as</h2></div>
          <h2>Farmer</h2>
          <img style={{paddingTop:"20px"}} src="img/farm.png"/>
        </div>
        <div className="col-md-8 setwidth shadow p-4 bg-white rounded reg-padding1">
        <form onSubmit={handleSubmit} className="registration_form  ">
        <h2 className="text-center mb-4 text-dark">Farmer Registration</h2>
        <div className=" mb-3 fw-bold">Personal Information</div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Farmer Name</label>
            <input className="form-control" type="text" placeholder="Full Name"
              onChange={(e) => setFarmersName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email ID</label>
            <input className="form-control" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input className="form-control" type="text" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Confirm Password</label>
            <input className="form-control" type="text" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Mobile no.</label>
            <input className="form-control" type="number" placeholder="0000000000" onChange={(e) => setMobileNumber(e.target.value)}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Father/Husband Name</label>
            <input className="form-control" type="text" placeholder="Full Name" onChange={(e)=> setfatherName(e.target.valueAsNumber)}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Farmer Address</label>
            <input className="form-control" type="text" placeholder="Village" onClick={(e)=> setfarmerAddress(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">State</label>
            <input className="form-control" type="text" value="Punjab" readOnly onChange={(e)=> setstate(e.target.value)} />
          </div>
        </div>

       

        <div className="ident_info mb-3 fw-bold">Identification Information</div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">ID Proof Type</label>
            <select className="form-control" onChange={(e)=> setproofType(e.target.value)}>
              <option value="adhar">Adhar card</option>
              <option value="pan">Pan card</option>
              <option value="voter">Voter card</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Scanned ID Proof</label>
            <input className="form-control" type="file" onChange={(e)=> setidProof(e.target.value)} />
          </div>
        </div>

        <div className="comman_div_button text-center">
          <button onClick={handleNavigateSignup} type="submit" className="btn btn-success px-4 py-2 rounded-pill">Click here to Register</button>
        </div>
      </form>
      </div>
      </div>
      
    </section>
  );
};

export default FarmerRegistration;


