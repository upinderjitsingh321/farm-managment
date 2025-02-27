import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

import "./style.css"


function ModelFarmForm() {
  const [show, setShow] = useState(false);

  const [type, setType] = useState("")
  const [farmname, setFarmName] = useState("")
  const [farmername, setFarmerName] = useState("")
  const [farmid, setFarmId] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( farmid, farmername, farmname,longitude,latitude, type)
  }

  return (
    <>
      <button className='add-button' onClick={() => setShow(true)}>
       <AddCircleIcon/> Add New Farm
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='lg'
        
      >
        <Modal.Header  style={{backgroundColor:"rgb(108, 146, 108)",padding:"0px 10px",color:"white",display:"flex",justifyContent:"space-between"}}>
          <Modal.Title id="example-custom-modal-styling-title">
            Farm Detail 
          </Modal.Title>
          <CloseIcon className='text-danger'/>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit} className=" shadow p-4 bg-white rounded farm-padding">
          
        

          <div className="ident_info mb-3 fs-5">Land Information</div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-bold">Farm Id</label>
              <input type="text" className="form-control" placeholder="#01" onChange={(e) => setFarmId(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Farm Name</label>
              <input type="text" className="form-control" placeholder="Name" onChange={(e) => setFarmName(e.target.value)} />
            </div>
          </div>

          <div className="row mb-3">
            <div class="col-md-6">
              <label className="form-label fw-bold">Type</label>
              <select  type="select" className="form-select " onChange={(e) => setType(e.target.value)}>
               
                <option>Crop  </option>
                <option>Garden  </option>
                <option>Orchard Farm </option>
                
              </select>
                
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Owner</label>
              <input type="text" className="form-control" onChange={(e) => setOwner(e.target.value)} />
            </div>

          </div>

          <div className="ident_info mb-3 fs-5">Farm Location</div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Latitude</label>
              <input type="text" className="form-control common_1" onChange={(e) => setLatitude(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label  fw-bold">Longitude</label>
              <input type="text" className="form-control common_1" onChange={(e) => setLongitude(e.target.value)} />
            </div>
          </div>

          <div className=" text-center gap">
            <button type="submit" className="btn px-4 py-2 text-white" style={{backgroundColor:"rgb(108, 146, 108)"}}>Save</button>
            


          </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelFarmForm;