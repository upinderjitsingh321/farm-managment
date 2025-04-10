import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


function ModelUpperSoilForm() {
  const [show, setShow] = useState(false);
 const schema = yup.object().shape({
    fieldno: yup.string().required("Field is required"),
    acre: yup.string().required("Acre is required"),
    soiltype: yup.string().required("Soil Type is required"),
    soilcondtion: yup.string().required("Select soil condtion "),
    issue: yup.string().required("Select a Issue"),
    phlevel: yup.string().required("Ph level is required"),
    texture: yup.string().required("Texture is required"),
    organic: yup.string().required("Select organic matter"),
    })
      const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });
    
  return (
    <>
      <button className='add-button' onClick={() => setShow(true)}>
       <AddCircleIcon/> Add Soil Detail
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
            Soil Detail 
          </Modal.Title>
          <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }}/>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit()} className="registration_form shadow p-4 bg-white rounded reg-padding">

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label for="farmer_name" className="form-label">Feild No.</label>
                            <input {...register("fieldno")} className="form-control" placeholder=" Field No."
                                />
                                {
                                    errors.fieldno?.message &&
                                    <p className="text-danger">{errors.fieldno?.message}</p>
                                }                       
                                  </div>
                        <div className="col-md-6">
                            <label for="contact" className="form-label">Area(Acre)</label>
                            <input {...register("acre")} className="form-control" placeholder=" Field No."
                                />
                                {
                                    errors.acre?.message &&
                                    <p className="text-danger">{errors.acre?.message}</p>
                                }  
                                                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-md-6">
                            <label for="location" className="form-label">Soil Location:</label>
                            <input type="text" className="form-control" id="location" name="location"
                                placeholder="Enter location or GPS coordinates" required  onChange={(e) => setSoilLocation(e.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" for="soilType">Soil Type:</label>
                            <select {...register("soiltype")}  className="form-select" id="soilType" name="soilType" required  onChange={(e) => setSoilType(e.target.value)}>
                                <option value="">Select Soil Type</option>
                                <option value="sandy">Sandy</option>
                                <option value="clay">Clay</option>
                                <option value="loamy">Loamy</option>
                                <option value="silt">Silt</option>
                            </select>
                            {
                                    errors.soiltype?.message &&
                                    <p className="text-danger">{errors.soiltype?.message}</p>
                                }  
                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-md-6">
                            <label className="form-label" for="condition">Soil Condition:</label>
                            <select  {...register("soilcondtion")} className="form-select" id="condition" name="condition" required  onChange={(e) => setSoilCondition(e.target.value)}>
                                <option value="">Select Condition</option>
                                <option value="dry">Dry</option>
                                <option value="moist">Moist</option>
                                <option value="wet">Wet</option>
                                {
                                    errors.soilcondtion?.message &&
                                    <p className="text-danger">{errors.soilcondtion?.message}</p>
                                }  
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" for="ph">Soil pH Level</label>
                            <input {...register("phlevel")} className="form-control" placeholder=" Ph level"
                                />
                                {
                                    errors.phlevel?.message &&
                                    <p className="text-danger">{errors.phlevel?.message}</p>
                                }                         </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-md-6">
                            <label className="form-label" for="issues">Issues Faced:</label>
                            <select {...register("issue")} className="form-select" id="issues" name="issues" required  onChange={(e) => setIssuesFaced(e.target.value)}>
                                <option value="">Select</option>
                                <option value="low_fertility">Low Fertility</option>
                                <option value="erosion">Erosion</option>
                                <option value="pests">Pests</option>
                                <option value="weeds">Weeds</option>
                                <option value="salinity">Salinity</option>
                                {
                                    errors.issue?.message &&
                                    <p className="text-danger">{errors.issue?.message}</p>
                                }  
                            </select>
                        </div>


                        <div className="col-md-6">
                            <label className="form-label" for="moisture">Soil Moisture :</label>
                            <div className="soil_moisture row">
                                <div className="col-md-6">
                                    <input className="form-control " type="number" id="moisture" name="moisture" min="0" step="0.01"
                                        placeholder="Enter value"  onChange={(e) => setSoilMoisture(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <select className="form-select" id="moisture" name="moisture" required  onChange={(e) => setMoistureUnit(e.target.value)}>
                                        <option value="">Select Unit</option>
                                        <option value="fc">FC(%)</option>
                                        <option value="pwp">PWP(%)</option>
                                        <option value="taw">TAW(%)</option>
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-md-6">
                            <label className="form-label" for="texture"> Soil Texture</label>
                            <select {...register("texture")} className="form-select" id="texture" name="texture"  onChange={(e) => setSoilTexture(e.target.value)}>
                                <option>Select</option>
                                <option>Sand</option>
                                <option>Loam</option>
                                <option>Silt</option>
                                <option>Clay</option>
                                <option>Sandy Loam</option>
                                <option>Sandy Clay</option>
                                <option>Loamy Sand </option>
                                <option>Clay Loam</option>
                                <option>Silt Loam</option>
                                <option>Silty Clay</option>
                                <option>Silty Clay Loam</option>
                                <option>Sandy Clay Loam</option>

                            </select>
                            {
                                    errors.texture?.message &&
                                    <p className="text-danger">{errors.texture?.message}</p>
                                }  
                        </div>
                        <div className="col-md-6">
                            <label className="form-label" for="ec">Electrical Conductivity (dS/m):</label>
                            <input className="form-control" type="number" id="ec" name="ec" min="0" step="0.01"
                                placeholder="Enter EC value"  onChange={(e) => setElectricalConductivity(e.target.value)}/>

                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-md-6">
                            <label className="form-label" for="organic_level">Organic Matter</label>
                            <select {...register("organic")} className="form-select" id="organic_level" name="organic_level"  onChange={(e) => setOrganicLevel(e.target.value)}>
                                <option>Select</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                                {
                                    errors.organic?.message &&
                                    <p className="text-danger">{errors.organic?.message}</p>
                                }  
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" for="salinity">Soil Salinity</label>
                            <input className="form-control" type="number" id="salinity" name="salinity" min="0" step="0.01"
                                placeholder="Enter Salinity (e.g., 2.5)" onChange={(e) => setSoilSalinity(e.target.value)} />
                        </div>
                    </div>

                    <div className="comman_div_button text-center">
                    <button type="submit" className="btn px-4 py-2 text-white" style={{backgroundColor:"rgb(108, 146, 108)"}}>Save</button>

                    </div>
                </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelUpperSoilForm;