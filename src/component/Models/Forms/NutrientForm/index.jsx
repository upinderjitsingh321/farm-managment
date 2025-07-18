import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { USER } from '../../../../config/endpoints';
import { toast } from 'react-toastify';

// Validation Schema
const schema = yup.object().shape({
  field_no: yup.string().required("Field is required"),
  n: yup.number().typeError("Must be a number").nullable(),
  p: yup.number().typeError("Must be a number").nullable(),
  k: yup.number().typeError("Must be a number").nullable(),
  s: yup.number().typeError("Must be a number").nullable(),
  cl: yup.number().typeError("Must be a number").nullable(),
  cu: yup.number().typeError("Must be a number").nullable(),
  b: yup.number().typeError("Must be a number").nullable(),
  ca: yup.number().typeError("Must be a number").nullable(),
  mg: yup.number().typeError("Must be a number").nullable(),
  fe: yup.number().typeError("Must be a number").nullable(),
  zn: yup.number().typeError("Must be a number").nullable(),
  mn: yup.number().typeError("Must be a number").nullable(),
});

function ModelNutrientForm() {
  const [show, setShow] = useState(false);
  const [fieldList, setFieldlist] = useState([]);

  const access_token = localStorage.getItem("access_token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

 

  const fetchFields = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FIELD_LIST}`, {
        headers: {
          access_token,
        },
      });

      if (res.status === 200 && res.data?.data?.list?.length > 0) {
        setFieldlist(res.data.data.list);
      }
    } catch (err) {
      console.error("Failed to fetch fields:", err);
    }
  };




  const nutreintcreate = async (data) => {
    console.log(data, "checkdatahere");
    console.log(fieldList, "datahere");

    console.log(data.id, "dcccata");

    const payload = {
      nutrient_id: data.field_no,
      field_no:data.field_no,
      n: data.n,
      p: data.p,
      k: data.k,
      s: data.s,
      cl: data.cl,
      cu: data.cu,
      b: data.b,
      ca: data.ca,
      mg: data.mg,
      fe: data.fe,
      zn: data.zn,
      mn: data.mn
    };
    console.log(payload, "data");

    try {
      const res = await axios.post(`${USER.CREATE_NUTRIENT}`, payload, {
        headers: {
          access_token: access_token,
        },
      });
      console.log(res, "check resoonseeee");
      toast.success(` Succesfully`);
      setShow(false);
    } catch (error) {
      console.log(error);
      // toast.error(`${erro r.response.data.message}`)
    }
  };
  
  useEffect(() => {
    console.log(show, "showww");
    if (show) {
      fetchFields();
    }
  }, [show]);
  return (
    <>
      <button  style={{marginLeft:"510px"}}  className='add-button' onClick={() => setShow(true)}>
        <AddCircleIcon /> Add Nutrient Detail
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='lg'
      >
        <Modal.Header style={{ backgroundColor: "rgb(108, 146, 108)", padding: "0px 10px", color: "white", display: "flex", justifyContent: "space-between" }}>
          <Modal.Title>Soil Detail</Modal.Title>
          <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }} />
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(nutreintcreate)} className="registration_form shadow p-4 bg-white rounded reg-padding">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Field No.</label>
                <select {...register("field_no")} className="form-select">
                <option value="">Select Field</option>
                  {fieldList.map((field) => (
                    <option key={field.id} value={field.id}>
                      {`${field.users_farm?.farm_id}>${field.field_no}`}
                    </option>
                  ))}
                </select>
                <p className="text-danger">{errors.field_no?.message}</p>
              </div>

              {/* <div className="col-md-6">
                <label className="form-label">Area (Acre)</label>
                <input type="text" className="form-control" {...register("area")} />
                <p className="text-danger">{errors.area?.message}</p>
              </div> */}
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label">Nutrient Analysis</label>
              </div>
              <div className="row nutrient_border">
                {["n", "p", "k", "s", "cl", "cu", "b", "ca", "mg", "fe", "zn", "mn"].map((nutrient) => (
                  <div className="col-md-2 nutrient_padding" key={nutrient}>
                    <label>{nutrient.toUpperCase()}</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-100"
                      {...register(nutrient)}
                    />
                    <p className="text-danger">{errors[nutrient]?.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="comman_div_button text-center">
              <button type="submit" className="btn px-4 py-2 text-white" style={{ backgroundColor: "rgb(108, 146, 108)" }}>
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelNutrientForm;
