import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
function FarmForm() {
  const [farmersName, setFarmersName] = useState("")
  const [address, setAddress] = useState("")
  const [aadharnumber, setAadharNumber] = useState("")
  const [mobilenumber, setMobileNumber] = useState("")
  const [type, setType] = useState("")
  const [farmname, setFarmName] = useState("")
  const [farmername, setFarmerName] = useState("")
  const [farmid, setFarmId] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
 
  const [fathername, setFatherName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(farmersName, address, aadharnumber, mobilenumber, farmid, farmername, fathername, farmname, type)
  }
  return (
    <>
      <section className="container mt-5 p-4 ">
        <form onSubmit={handleSubmit} className=" shadow p-4 bg-white rounded farm-padding">
          <h2 className="text-center mb-4 text-dark">Add Farm </h2>
          <div className=" mb-3 fw-bold">Farmer Information</div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Farmer Name</label>
              <input className="form-control" type="text" placeholder="Full Name" onChange={(e) => setFarmersName(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Email ID</label>
              <input className="form-control" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Father/Husband Name</label>
              <input className="form-control" type="text" placeholder="Full Name" onChange={(e) => setFatherName(e.target.valueAsNumber)} />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Id Proof No.</label>
              <input type="text" className="form-control" onChange={(e) => setAadharNumber(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile no.</label>
              <input className="form-control" type="number" placeholder="0000000000" onChange={(e) => setMobileNumber(e.target.value)} />
            </div>
          </div>

          <div className="ident_info mb-3 fw-bold">Land Information</div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Farm Id</label>
              <input type="text" className="form-control" placeholder="#01" onChange={(e) => setFarmId(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Farm Name</label>
              <input type="text" className="form-control" placeholder="Name" onChange={(e) => setFarmName(e.target.value)} />
            </div>
          </div>

          <div className="row mb-3">
            <div class="col-md-6">
              <label className="form-label">Type</label>
              <select  type="select" className="form-select " onChange={(e) => setType(e.target.value)}>
               
                <option>Crop  </option>
                <option>Garden  </option>
                <option>Orchard Farm </option>
                
              </select>
                
            </div>
            <div className="col-md-6">
              <label className="form-label">Owner</label>
              <input type="text" className="form-control" onChange={(e) => setOwner(e.target.value)} />
            </div>

          </div>

          <div className="ident_info mb-3 fw-bold">Farm Location</div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label className="form-label common_padd">Latitude</label>
              <input type="text" className="form-control common_1" onChange={(e) => setLatitude(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label common_padd">Longitude</label>
              <input type="text" className="form-control common_1" onChange={(e) => setLongitude(e.target.value)} />
            </div>
          </div>

          <div className=" text-center gap">
            <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Submit</button>
            


          </div>
        </form>
      </section>
    </>
  );
}

export default FarmForm
