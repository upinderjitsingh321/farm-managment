import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';



function ModelFieldForm() {
  const [show, setShow] = useState(false);

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
      <button className='add-button' onClick={() => setShow(true)}>
       <AddCircleIcon/> Add New Field
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
            Feild Detail 
          </Modal.Title>
          <CloseIcon className='text-danger'/>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit} className=" shadow p-4 bg-white rounded farm-padding">
          

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
          <button type="submit" className="btn px-4 py-2 text-white" style={{backgroundColor:"rgb(108, 146, 108)"}}>Save</button>
            
          </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelFieldForm;