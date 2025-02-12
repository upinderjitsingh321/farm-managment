import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./editinfo.css"
const EditPersonalInfo = () => {
  const [farmersName, setFarmersName] = useState("")  
  const  [dateOfBirth, setDateBirth] =useState("")
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
    console.log(farmersName, dateOfBirth, fatherName,MobileNumber, farmerAddress,state,male,female,idProof,proofType )  
  }
  
  return (
    <div className="conatiner" style={{ backgroundColor: "#ede9e9"}}>
    <div className="row">
    <div className='d-flex align-items-center '>

<h3 className='edit-line'>My Profile</h3>

<div className='borderBottom'></div>
</div>
      <div style={{display:"grid"}} className="col-md-5 ms-3">
            <div className=' container-right-one edit-con-height'>
                <div className='edit-profile-photo1' >
                    <img className='edit-profile-photo' src='img/back1.jpg' />

                </div>
                <div className="edit-position">
                    <p style={{paddingTop:"20px"}}>Upinderjit Singh</p>
                    <p>India,Punajb,Gurdaspur</p>
                </div>
            </div>
            <ul className=' container-right-one edit-con2-height'>
                <p style={{fontSize:"30px",fontWeight:"600"}}>About</p>
                <div style={{display:"flex"}}>
                  
                    <div><img className="edit-logo" src="img/profile-user.png"/></div>
                    <div style={{display:"flex"}}>
                      <p>Full Name:</p>
                      <p style={{paddingLeft:"5px"}}>Upinderjit Singh</p>
                      </div>
                  
                </div>
                <div style={{display:"flex"}}>
                  
                    <div> <img className="edit-logo" src="img/status.png"/></div>
                    <div style={{display:"flex"}}>
                      <p>Status:</p>
                      <p style={{paddingLeft:"5px"}}>Active</p>
                      </div>
                  
                </div>
                <div style={{display:"flex"}}>
                  
                    <div><img className="edit-logo" src="img/flag.png"/></div>
                    <div style={{display:"flex"}}>
                      <p>Country:</p>
                      <p style={{paddingLeft:"5px"}}>India</p>
                      </div>
                  
                </div>
                <div style={{display:"flex"}}>
                  <div >
                    <img className="edit-logo" src="img/phone.png"/></div>
                    <div style={{display:"flex"}}>
                      <p>Phone Number:</p>
                      <p style={{paddingLeft:"5px"}}>9781617288</p>
                      </div>
                  
                </div>
                <div style={{display:"flex"}}>
                  <div >
                    <img className="edit-logo" src="img/idproof.png"/></div>
                    <div style={{display:"flex"}}>
                      <p>Id Proof:</p>
                      <p style={{paddingLeft:"5px"}}>Aadhar Card</p>
                      </div>
                  
                </div>
            </ul>
            </div>
            <div style={{width: "calc(58% - 25px)",marginBottom:"40px"}} className="col-md-7">
      <form onSubmit={handleSubmit} className="registration_form shadow p-4 bg-white rounded">
        <h2 className="text-center mb-4 text-dark">Farmer Registration</h2>
        <div className=" mb-3 fw-bold">Personal Information</div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Farmer Name</label>
            <input className="form-control" type="text" placeholder="Full Name"
              onChange={(e) => setFarmersName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date Of Birth</label>
            <input className="form-control" type="date" onChange={(e) => setDateBirth(e.target.value)} />
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

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="Male" id="male"  onChange={(e)=> setmale(e.target.value)} />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="Female" id="female" onChange={(e)=> setfemale(e.target.value)} />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>
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
          <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Submit</button>
        </div>
      </form>
    </div>
    </div>
   
    </div>
  );
};

export default EditPersonalInfo;


