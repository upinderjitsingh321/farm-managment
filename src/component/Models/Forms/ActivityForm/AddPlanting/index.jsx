import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ModelPlantingForm({ show, onclose }) {

    const schema = yup.object().shape({
        farmid: yup.string().required("Farm is required"),
        fieldno: yup.string().required("Field is required"),
        activity: yup.string().required("Activity is required"),
        planting: yup.string().required("Please enter cost"),
        enddate: yup.string().required("Ending Date is required"),
        quantity: yup.string().required("Quantity is required"),
        startdate: yup.string().required("Starting Date is required"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    return (
        <>

            <Modal
                show={show}
                onHide={onclose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size='lg'

            >
                <Modal.Header style={{ backgroundColor: "rgb(108, 146, 108)", padding: "0px 10px", color: "white", display: "flex", justifyContent: "space-between" }}>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Activity
                    </Modal.Title>
                    <CloseIcon className='text-danger' onClick={onclose} style={{ cursor: "pointer" }} />
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmit()} className=" shadow p-4 bg-white rounded farm-padding">
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="farm-no" class="form-label">Farm Id</label>
                                <input {...register("farmid")} className="form-control" placeholder=" Farm Id."
                                />
                                {
                                    errors.farmid?.message &&
                                    <p className="text-danger">{errors.farmid?.message}</p>
                                }                                  </div>
                            <div class="col-md-6">
                                <label for="fieldno" class="form-label">Field No.</label>
                                <input {...register("fieldno")} className="form-control" placeholder=" Field No"
                                />
                                {
                                    errors.fieldno?.message &&
                                    <p className="text-danger">{errors.fieldno?.message}</p>
                                }
                            </div>


                        </div>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="feild_no" class="form-label">Activity</label>
                                <input {...register("activity")} className="form-control" placeholder="Activity"
                                />
                                {
                                    errors.activity?.message &&
                                    <p className="text-danger">{errors.activity?.message}</p>
                                }                                  </div>
                            <div class="col-md-6">
                                <label for="farm_area" class="form-label">Planting  Rate (per Acre)</label>
                                <input {...register("planting")} className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.planting?.message &&
                                    <p className="text-danger">{errors.planting?.message}</p>
                                }
                            </div>


                        </div>
                        <div className="row mb-3">


                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">Starting Date</label>
                                <input {...register("startdate")} className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.startdate?.message &&
                                    <p className="text-danger">{errors.startdate?.message}</p>
                                }                                </div>
                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">End Date</label>
                                <input {...register("enddate")} className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.enddate?.message &&
                                    <p className="text-danger">{errors.enddate?.message}</p>
                                }                               </div>

                        </div>
                        <div class="row mb-3">



                            <div class="col-md-6">
                                <label for="select_variety" class="form-label">Note</label>
                                <input type='text' class="form-control " placeholder='Give Note' onChange={(e) => setNote(e.target.value)} />

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