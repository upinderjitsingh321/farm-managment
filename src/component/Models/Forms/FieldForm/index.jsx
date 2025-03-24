import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


function ModelFieldForm() {
  const [show, setShow] = useState(false);


 
 const schema = yup.object().shape({
         farmid: yup.string().required("Farm is required"),
         fieldno: yup.string().required("Field no. is required"),
         acre: yup.string().required("Acre is required"),
         khasra: yup.string().required("Khasra no.  is required"),
         ownership: yup.string().required("Ownership  is required"),
     
   });
   const { register, handleSubmit, formState: { errors } } = useForm({
       resolver: yupResolver(schema),
     });
 
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
          <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }}/>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit()} className=" shadow p-4 bg-white rounded farm-padding">
          

          <div className="row mb-3">
          <div className="col-md-6">
              <label className="form-label">Farm Id</label>
              <input {...register("farmid")} className="form-control" placeholder=" Farm"
                />
                {
                  errors.farmid?.message &&
                  <p className="text-danger">{errors.farmid?.message}</p>
                }       
                        </div>
            <div className="col-md-6">
              <label className="form-label">Feild No.</label>
              <input {...register("fieldno")} className="form-control" placeholder=" Field no."
                />
                {
                  errors.fieldno?.message &&
                  <p className="text-danger">{errors.fieldno?.message}</p>
                }               
                   </div>
           
          </div>

          <div className="row mb-3">
          <div className="col-md-6">
              <label className="form-label"> Area (in Acre.)</label>
              <input {...register("acre")} className="form-control"
                />
                {
                  errors.acre?.message &&
                  <p className="text-danger">{errors.acre?.message}</p>
                }    
                            </div>
            <div class="col-md-6">
              <label className="form-label">Land Ownership</label>
              <select {...register("ownership")} className="form-select ">
                <option>Select</option>
                <option value="Owned">Owned</option>
                <option value="Leased">Leased</option>
                <option value="Leased">Contract</option>
              </select>
              {
                  errors.ownership?.message &&
                  <p className="text-danger">{errors.ownership?.message}</p>
                } 
            </div>
            
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Khasra NO.</label>
              <input {...register("khasra")} className="form-control" placeholder=" Khasra No."
                />
                {
                  errors.khasra?.message &&
                  <p className="text-danger">{errors.khasra?.message}</p>
                }       
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