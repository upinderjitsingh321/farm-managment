import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
function FeildForm() {

  const [fielldno, setFieldNo] = useState("")
  const [farmarea, setFarmArea] = useState("")
  
  const [khasranumber, setKhasraNumber] = useState("")
  const [landownership, setLandOwnership] = useState("")
  const [farmpractices, setFarmPractices] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fielldno, landownership, fathername, farmarea, khasranumber, farmpractices)
  }
  return (
    <>
      <section className="container mt-5 p-4 ">
        <form onSubmit={handleSubmit} className=" shadow p-4 bg-white rounded farm-padding">
          <h2 className="text-center mb-4 text-dark">Add Feild </h2>
          

          <div className="row mb-3">
          <div className="col-md-6">
              <label className="form-label">Farm Id</label>
              <input type="text" className="form-control" placeholder="#01" onChange={(e) => setFarmId(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Feild No.</label>
              <input type="text" className="form-control" placeholder="#01" onChange={(e) => setFieldNo(e.target.value)} />
            </div>
           
          </div>

          <div className="row mb-3">
          <div className="col-md-6">
              <label className="form-label"> Area (in Arce.)</label>
              <input type="text" className="form-control" placeholder="0" onChange={(e) => setFarmArea(e.target.value)} />
            </div>
            <div class="col-md-6">
              <label className="form-label">Land Ownership</label>
              <select className="form-select " onChange={(e) => setLandOwnership(e.target.value)}>
                <option>Select</option>
                <option value="Owned">Owned</option>
                <option value="Leased">Leased</option>
                <option value="Leased">Contract</option>
              </select>
            </div>
            
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Khasra NO.</label>
              <input type="text" className="form-control" onChange={(e) => setKhasraNumber(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Farm Practices</label>
              <input type="text" className="form-control" onChange={(e) => setFarmPractices(e.target.value)} />
            </div>
          </div>

          

          <div className=" text-center gap">
            <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Submit</button>
            <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Submit and Proceed to Add Products</button>
            <button type="reset" className="btn btn-success px-4 py-2 rounded-pill">Reset</button>


          </div>
        </form>
      </section>
    </>
  );
}

export default FeildForm
