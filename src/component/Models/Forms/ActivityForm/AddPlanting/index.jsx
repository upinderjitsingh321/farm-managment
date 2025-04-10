import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { USER } from '../../../../../config/endpoints';
import axios from 'axios';

function ModelPlantingForm({ show, onclose }) {

    const schema = yup.object().shape({
        farm_id: yup.string().required("Farm is required"),
        field_no: yup.string().required("Field is required"),
        activity_name: yup.string().required("Activity is required"),
        rate: yup.string().required("Please enter cost"),
        end_date: yup.string().required("Ending Date is required"),
        start_date: yup.string().required("Starting Date is required"),
        note: yup.string()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    let access_token = localStorage.getItem("access_token");

    const handleSubmitForm = async (data) => {
      console.log(data, "checkdatahere");
  
      const payload = {
        farm_id: data.farm_id,
        field_no: data.field_no,
        activity_name: data.activity_name,
        end_date: data.end_date,
        start_date: data.start_date,
        rate: data.rate,
        note: data.note,
      };
      console.log(payload, "data");
  
      try {
        const res = await axios.post(`${USER.CREATE_ACTIVITY}`,payload, {
          headers: {
            access_token: access_token,
          },
        });
        console.log(res, "check resoonseeee");
        // toast.success(`Enter Succesfully`);
        setShow(false)
      } catch (error) {
        console.log(error);
        // toast.error(`${erro r.response.data.message}`)
      }
    };

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

                    <form onSubmit={handleSubmit(handleSubmitForm)} className=" shadow p-4 bg-white rounded farm-padding">
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="farm-no" class="form-label">Farm Id</label>
                                <input {...register("farm_id")} className="form-control" placeholder=" Farm Id."
                                />
                                {
                                    errors.farm_id?.message &&
                                    <p className="text-danger">{errors.farm_id?.message}</p>
                                }                                  </div>
                            <div class="col-md-6">
                                <label for="fieldno" class="form-label">Field No.</label>
                                <input {...register("field_no")} className="form-control" placeholder=" Field No"
                                />
                                {
                                    errors.field_no?.message &&
                                    <p className="text-danger">{errors.field_no?.message}</p>
                                }
                            </div>


                        </div>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="feild_no" class="form-label">Activity</label>
                                <input {...register("activity_name")} className="form-control" placeholder="Activity"
                                />
                                {
                                    errors.activity_name?.message &&
                                    <p className="text-danger">{errors.activity_name?.message}</p>
                                }                                  </div>
                            <div class="col-md-6">
                                <label for="farm_area" class="form-label">Planting  Rate (per Acre)</label>
                                <input {...register("rate")} className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.rate?.message &&
                                    <p className="text-danger">{errors.rate?.message}</p>
                                }
                            </div>


                        </div>
                        <div className="row mb-3">


                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">Starting Date</label>
                                <input {...register("start_date")} type='date' className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.start_date?.message &&
                                    <p className="text-danger">{errors.start_date?.message}</p>
                                }                                </div>
                            <div class="col-md-6">
                                <label for="crop_name" class="form-label">End Date</label>
                                <input {...register("end_date")} type='date' className="form-control" placeholder=" Cost"
                                />
                                {
                                    errors.end_date?.message &&
                                    <p className="text-danger">{errors.end_date?.message}</p>
                                }                               </div>

                        </div>
                        <div class="row mb-3">



                            <div class="col-md-6">
                                <label for="select_variety" class="form-label">Note</label>
                                <input {...register("note")} type='text' class="form-control " placeholder='Give Note' onChange={(e) => setNote(e.target.value)} />

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