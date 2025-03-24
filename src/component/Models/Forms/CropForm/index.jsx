import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



function ModelCropForm() {
    const [show, setShow] = useState(false);

    const schema = yup.object().shape({
        fieldno: yup.string().required("Field is required"),
        acre: yup.string().required("Acre is required"),
        cropname: yup.string().required("Crop name is required"),
        variety: yup.string().required("variety name is required"),
        previouscrop: yup.string().required("Crop name is required"),
        snowingexpense: yup.string().required("Crop name is required"),
        harvestexpense: yup.string().required("Crop name is required"),
        sowingdate: yup.string().required("Crop name is required"),
        harvestdate: yup.string().required("Crop name is required"),
        labourcost: yup.string().required("Crop name is required"),
        production: yup.string().required("Crop name is required"),
        price: yup.string().required("Crop name is required"),
        irrigationmeth: yup.string().required("Crop name is required"),
        snowingmth: yup.string().required("Crop name is required"),
        seasonyear: yup.string().required("Crop name is required"),
        season: yup.string().required("Crop name is required"),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });



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

                    <form onSubmit={handleSubmit()} className=" shadow p-4 bg-white rounded farm-padding">

                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="feild_no" class="form-label">Field No.</label>
                                <input {...register("fieldno")} className="form-control" placeholder=" Field No."
                                />
                                {
                                    errors.fieldno?.message &&
                                    <p className="text-danger">{errors.fieldno?.message}</p>
                                }
                            </div>
                            <div class="col-md-6">
                                <label for="farm_area" class="form-label">Area in(Arce.)</label>
                                <input {...register("acre")} className="form-control" placeholder=" Acre"
                                />
                                {
                                    errors.acre?.message &&
                                    <p className="text-danger">{errors.acre?.message}</p>
                                }
                            </div>


                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Season Year</label>
                                <select  {...register("seasonyear")} type="text" className="form-control" placeholder="2024-2025" onChange={(e) => setSeasonYear(e.target.value)} >
                                    <option selected>Select</option>
                                    <option value="2024-2025">2024-2025</option>
                                    <option value="2023-2024">2023-2024</option>
                                    <option value="2022-2023">2022-2023</option>
                                </select>
                                {
                                    errors.seasonyear?.message &&
                                    <p className="text-danger">{errors.seasonyear?.message}</p>
                                }
                            </div>
                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">Crop Name</label>
                                <input {...register("cropname")} className="form-control" placeholder=" Crop Name"
                                />
                                {
                                    errors.cropname?.message &&
                                    <p className="text-danger">{errors.cropname?.message}</p>
                                }
                            </div>

                        </div>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="select_season" class="form-label common_select">Season</label>
                                <select {...register("season")}  class="form-select " onChange={(e) => setSeason(e.target.value)}>
                                    <option selected>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                {
                                    errors.season?.message &&
                                    <p className="text-danger">{errors.season?.message}</p>
                                }
                            </div>
                            <div class="col-md-6">
                                <label for="select_variety" class="form-label">Variety</label>
                                <input {...register("variety")} className="form-control" placeholder=" Variety"
                                />
                                {
                                    errors.variety?.message &&
                                    <p className="text-danger">{errors.variety?.message}</p>
                                }
                            </div>

                        </div>
                        <div class="row mb-3">

                            <div className="col-md-6">
                                <label className="form-label">Sowing Method</label>
                                <select  {...register("snowingmth")} className="form-select" onChange={(e) => setSowingMethod(e.target.value)}>
                                    <option>Select</option>
                                    <option value="BroadCasting">BroadCasting</option>
                                    <option value="NO Til Drill">NO Til Drill</option>
                                    <option value="Happy Seeder">Happy Seeder</option>
                                    <option value="Super Seeder">Super Seeder</option>
                                    <option value="Surface Seeder">Surface Seeder</option>
                                </select>
                                {
                                    errors.snowingmth?.message &&
                                    <p className="text-danger">{errors.snowingmth?.message}</p>
                                }
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Crop Rotation</label>
                                <input {...register("previouscrop")} className="form-control" placeholder=" Previous Crop"
                                />
                                {
                                    errors.previouscrop?.message &&
                                    <p className="text-danger">{errors.previouscrop?.message}</p>
                                }
                            </div>
                        </div>


                        <div class="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label"> Sowing Expense</label>
                                <input {...register("snowingexpense")} className="form-control" placeholder=" Snowing Cost"
                                />
                                {
                                    errors.snowingexpense?.message &&
                                    <p className="text-danger">{errors.snowingexpense?.message}</p>
                                }             
                                               </div>
                            <div className="col-md-6">
                                <label className="form-label"> Harvest Expense</label>
                                <input {...register("harvestexpense")} className="form-control" placeholder=" Harvest Cost"
                                />
                                {
                                    errors.harvestexpense?.message &&
                                    <p className="text-danger">{errors.harvestexpense?.message}</p>
                                }               
                                                </div>
                        </div>
                        <div class="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Expected Sowing Date</label>
                                <input {...register("sowingdate")} className="form-control" placeholder=" Date"
                                />
                                {
                                    errors.sowingdate?.message &&
                                    <p className="text-danger">{errors.sowingdate?.message}</p>
                                }                
                                               </div>
                            <div className="col-md-6">
                                <label className="form-label">Expected Harvest Date</label>
                                <input {...register("harvestdate")} className="form-control" placeholder=" Date"
                                />
                                {
                                    errors.harvestdate?.message &&
                                    <p className="text-danger">{errors.harvestdate?.message}</p>
                                }                     
                                          </div>
                        </div>
                        <div className="row mb-3">
                            <div class="col-md-6">
                                <label for="labourcost" class="form-label">Labour Cost</label>
                                <input {...register("labourcost")} className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.labourcost?.message &&
                                    <p className="text-danger">{errors.labourcost?.message}</p>
                                }                     
                                          </div>
                            <div className="col-md-6">
                                <label className="form-label">Irrigation Method</label>
                                <select {...register("irrigationmeth")}  className="form-select" >
                                    <option>Select</option>
                                    <option value="Drip">Drip/Sprinkler</option>
                                    <option value="Sprinkler">Tubewell</option>
                                    <option value="Flood">Canal</option>
                                </select>
                                {
                                    errors.irrigationmeth?.message &&
                                    <p className="text-danger">{errors.irrigationmeth?.message}</p>
                                }  
                            </div>

                        </div>
                        <div className="row md-3">
                            <div class="col-md-6">
                                <label for="production" class="form-label">Expected Production(Quintal)</label>
                                <input {...register("production")} className="form-control" placeholder=" Likely Production"
                                />
                                {
                                    errors.production?.message &&
                                    <p className="text-danger">{errors.production?.message}</p>
                                }                    
                                           </div>
                            <div class="col-md-6">
                                <label for="price" class="form-label">Expected Price</label>
                                <input {...register("price")} className="form-control" placeholder=" Price"
                                />
                                {
                                    errors.price?.message &&
                                    <p className="text-danger">{errors.price?.message}</p>
                                }   
                                                            </div>

                        </div>

                        <div className="row">
                            <div class="col-md-12">
                                <label for="remarks" class="form-label">Remarks</label>
                                <input type="type" class="form-control" id="remarks" onChange={(e) => setRemark(e.target.value)} />
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

export default ModelCropForm;