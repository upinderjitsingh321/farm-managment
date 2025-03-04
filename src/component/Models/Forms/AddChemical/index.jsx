import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';



function ModelChemicalForm() {
    const [show, setShow] = useState(false);

    const [product, setProductNmae] = useState("")
    const [ingredient, setActiveIngredient] = useState("")
    const [dosage, setDosageperAcre] = useState("")
    const [application, setApplicationDate] = useState("")
    const [manufacture, SetManufacturer] = useState("")
    const [expiredate, SetExpiryDate] = useState("")
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product, ingredient, dosage, application, expiredate, manufacture, type, price)

    }
    return (
        <>
            <button className='add-button' onClick={() => setShow(true)}>
                <AddCircleIcon /> Add New Chemical
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
                        Chemical Detail
                    </Modal.Title>
                    <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }}/>
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
                                <label for="name" class="form-label">Product Name</label>
                                <input type="type" class="form-control" id="name" placeholder='#01' onChange={(e) => setProductNmae(e.target.value)} />
                            </div>
                            <div class="col-md-6">
                                <label for="ingredient" class="form-label">Active Ingredient</label>
                                <input type="type" class="form-control" id="ingredient" placeholder="0" onChange={(e) => setActiveIngredient(e.target.value)} />
                            </div>


                        </div>
                        <div className="row mb-3">

                            <div className="col-md-6">
                                <label className="form-label">Type</label>
                                <select className="form-control" placeholder="Type"  onChange={(e) => setType(e.target.value)} >
                                    <option value="">Select Type </option>
                                    <option value="dry">Pesticide</option>
                                    <option value="dry">Herbicide</option>
                                    <option value="moist">Fertilizer</option>
                                    <option value="wet">Fungicide</option>
                                    <option value="wet">Manure</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="dosage" class="form-label">Dosage per Acre</label>
                                <input type="type" class="form-control" id="dosage" placeholder='Crop  Name' onChange={(e) => setDosageperAcre(e.target.value)} />
                            </div>


                        </div>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="application" class="form-label">Application Date</label>
                                <input type="type" class="form-control" id="application" placeholder='Crop  Name' onChange={(e) => setApplicationDate(e.target.value)} />
                            </div>

                            <div class="col-md-6">
                                <label for="select_variety" class="form-label">Expiry Date</label>
                                <input type='text' class="form-control " placeholder='Crop Variety Name' onChange={(e) => SetExpiryDate(e.target.value)} />

                            </div>

                        </div>
                        <div class="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Manufacturer</label>
                                <input type="text" className="form-control" placeholder="Previous crops grown" onChange={(e) => SetManufacturer(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Price</label>
                                <input type="text" className="form-control" placeholder="Previous crops grown" onChange={(e) => setPrice(e.target.value)} />
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

export default ModelChemicalForm;