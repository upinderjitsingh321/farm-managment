import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
const UserPersonalDetails = () => {
  const [farmersName, setFarmersName] = useState("")
  const [dateOfBirth, setDateBirth] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [fatherName, setfatherName] = useState("")
  const [farmerAddress, setfarmerAddress] = useState("")
  const [state, setstate] = useState("")
  const [male, setmale] = useState("")
  const [female, setfemale] = useState("")
  const [idProof, setidProof] = useState("")
  const [proofType, setproofType] = useState("")
  const [show, setShow] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(farmersName, dateOfBirth, fatherName, MobileNumber, farmerAddress, state, male, female, idProof, proofType)
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setShow(true)}>
         Add Farmer

      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='lg'

      >
        <Modal.Header style={{ backgroundColor: "rgb(108, 146, 108)", padding: "0px 10px", color: "white", display: "flex", justifyContent: "space-between" }}>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Farmer
          </Modal.Title>
          <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }} />
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {/* <div className='d-flex align-items-center '>

            <h3 className='edit-line'>My Profile</h3>

            <div className='borderBottom'></div>
          </div> */}

            <div className="col-md-12">
              <form onSubmit={handleSubmit} className="registration_form shadow p-4 bg-white rounded m-2">
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
                    <input className="form-control" type="number" placeholder="0000000000" onChange={(e) => setMobileNumber(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Father/Husband Name</label>
                    <input className="form-control" type="text" placeholder="Full Name" onChange={(e) => setfatherName(e.target.valueAsNumber)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Farmer Address</label>
                    <input className="form-control" type="text" placeholder="Village" onClick={(e) => setfarmerAddress(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input className="form-control" type="text" value="Punjab" readOnly onChange={(e) => setstate(e.target.value)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Gender</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="Male" id="male" onChange={(e) => setmale(e.target.value)} />
                        <label className="form-check-label" htmlFor="male">Male</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="Female" id="female" onChange={(e) => setfemale(e.target.value)} />
                        <label className="form-check-label" htmlFor="female">Female</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ident_info mb-3 fw-bold">Identification Information</div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">ID Proof Type</label>
                    <select className="form-control" onChange={(e) => setproofType(e.target.value)}>
                      <option value="adhar">Adhar card</option>
                      <option value="pan">Pan card</option>
                      <option value="voter">Voter card</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Scanned ID Proof</label>
                    <input className="form-control" type="file" onChange={(e) => setidProof(e.target.value)} />
                  </div>
                </div>

                <div className="comman_div_button text-center">
                  <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Add</button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserPersonalDetails;


