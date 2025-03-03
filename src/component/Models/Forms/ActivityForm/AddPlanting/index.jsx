import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';



function ModelPlantingForm() {
    const [show, setShow] = useState(false);

    const [farm, setFarm] = useState("")
    const [fieldno, setFieldNo] = useState("")
    const [activity, setActivity] = useState("")
    const [plantingrate, setPlantingRate] = useState("")
    const [date, setDate] = useState("")
    const [enddate, SetEndDate] = useState("")
    const [user, setUser] = useState("")
    const [note, setNote] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(farm,fieldno, activity, plantingrate, date, enddate, user, note)

    }
    return (
        <>
            {/* <button className='add-button' onClick={() => setShow(true)}>
                <AddCircleIcon /> Add Activities
            </button> */}

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size='lg'

            >
                <Modal.Header style={{ backgroundColor: "rgb(108, 146, 108)", padding: "0px 10px", color: "white", display: "flex", justifyContent: "space-between" }}>
                    <Modal.Title id="example-custom-modal-styling-title">
                       Activity
                    </Modal.Title>
                    <CloseIcon className='text-danger' />
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmit} className=" shadow p-4 bg-white rounded farm-padding">
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="farm-no" class="form-label">Farm Id</label>
                                <input type="type" class="form-control" id="farm-no" placeholder='#01' onChange={(e) => setFarm(e.target.value)} />
                            </div>
                            <div class="col-md-6">
                                <label for="fieldno" class="form-label">Field No.</label>
                                <input type="type" class="form-control" id="fieldno" placeholder="0" onChange={(e) => setFieldNo(e.target.value)} />
                            </div>


                        </div>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="feild_no" class="form-label">Activity</label>
                                <input type="type" class="form-control" id="feild_no" placeholder='#01' onChange={(e) => setActivity(e.target.value)} />
                            </div>
                            <div class="col-md-6">
                                <label for="farm_area" class="form-label">Planting  Rate</label>
                                <input type="type" class="form-control" id="farm_area" placeholder="0" onChange={(e) => setPlantingRate(e.target.value)} />
                            </div>


                        </div>
                        <div className="row mb-3">


                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">Date</label>
                                <input type="type" class="form-control" id="crop_name" placeholder='Crop  Name' onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">End Date</label>
                                <input type="type" class="form-control" id="crop_name" placeholder='Crop  Name' onChange={(e) => SetEndDate(e.target.value)} />
                            </div>

                        </div>
                        <div class="row mb-3">


                            <div class="col-md-6">
                                <label for="select_variety" class="form-label">User</label>
                                <input type='text' class="form-control " placeholder='Crop Variety Name' onChange={(e) => setUser(e.target.value)} />

                            </div>
                            <div class="col-md-6">
                                <label for="select_variety" class="form-label">Note</label>
                                <input type='text' class="form-control " placeholder='Crop Variety Name' onChange={(e) => setNote(e.target.value)} />

                            </div>

                        </div>
                       

                        <div className="comman_div_button text-center mt-3">
                            <button type="submit" className="btn px-4 py-2 text-white" style={{ backgroundColor: "rgb(108, 146, 108)" }}>Save</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModelPlantingForm;