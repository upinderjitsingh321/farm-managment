import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';



function ModelCropRotaionForm() {
    const [show, setShow] = useState(false);

    const [cropname, setCropName] = useState("")
    const [fieldno, setFieldNo] = useState("")
    const [variety, setVariety] = useState("")
    const [seasonyear, setFarmId] = useState("")
    const [farmarea, setFarmArea] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fieldno, cropname, variety, seasonyear, farmarea)

    }
    
    return (
        <>
            <button className='add-button' onClick={() => setShow(true)}>
                <AddCircleIcon /> Add New Crop
            </button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size='lg'

            >
                <Modal.Header style={{ backgroundColor: "rgb(108, 146, 108)", padding: "0px 10px", color: "white", display: "flex", justifyContent: "space-between" }}>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Crop Detail
                    </Modal.Title>
                    <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }} />
                </Modal.Header>
                <Modal.Body>

                <form onSubmit={handleSubmit} className=" shadow p-4 bg-white rounded farm-padding">

                    <div class="row mb-3">

                        <div class="col-md-6">
                            <label for="farm" class="form-label">Farm Id.</label>
                            <input type="type" class="form-control" id="farm" placeholder='#01' onChange={(e) => setFarmId(e.target.value)} />
                        </div>
                        <div class="col-md-6">
                            <label for="feild_no" class="form-label">Field No.</label>
                            <input type="type" class="form-control" id="field_no" placeholder='#01' onChange={(e) => setFieldNo(e.target.value)} />
                        </div>
                        


                    </div>
                    <div className="row mb-3">
                    <div class="col-md-6">
                            <label for="farm_area" class="form-label">Area in(Arce.)</label>
                            <input type="type" class="form-control" id="farm_area" placeholder="0" onChange={(e) => setFarmArea(e.target.value)} />
                        </div>
                        <div class="col-md-6">
                            <label for="crop_name" class="form-label">Crop Name</label>
                            <input type="type" class="form-control" id="crop_name" placeholder='Crop  Name' onChange={(e) => setCropName(e.target.value)} />
                        </div>

                    </div>
                    <div className="row mb-3">
                    <div class="col-md-6">
                            <label for="variety" class="form-label">Variety</label>
                            <input type="type" class="form-control" id="variety" placeholder="0" onChange={(e) => setVariety(e.target.value)} />
                        </div>
                       

                    </div>
                 
                    <div className="comman_div_button text-center mt-3">
                    <button type="submit" className="btn px-4 py-2 text-white" style={{backgroundColor:"rgb(108, 146, 108)"}}>Save</button>
                    </div>
                </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModelCropRotaionForm;