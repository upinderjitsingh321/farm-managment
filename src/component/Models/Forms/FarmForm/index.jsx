import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";
import { toast } from "react-toastify";
import axios from "axios";
import { USER } from "../../../../config/endpoints";

function ModelFarmForm() {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate()
  // navigate("/userfield")
  const isValidID = /^#[A-Z]?\d{2,}$/i.test("#01"); 

  const schema = yup.object().shape({
    farmid: yup.string().required("Farm is required").matches(isValidID, "Name must be #01 format"),
    name: yup.string().required("Farm is required"),
    type: yup.string().required("Type is required"),
    owner: yup.string().required("Owner name is required"),
    latitude: yup.string(),
    longitude: yup.string()  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let access_token = localStorage.getItem("access_token");

  const handleSubmitForm = async (data) => {
    console.log(data, "checkdatahere");

    const payload = {
      farm_id: data.farmid,
      farm_name: data.name,
      type: data.type,
      owner: data.owner,
      latitude: data.latitude,
      longitude: data.longitude,
    };
    console.log(payload, "data");

    try {
      const res = await axios.post(`${USER.FARMS_LIST}`,payload, {
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
      <button className="add-button" onClick={() => setShow(true)}>
        <AddCircleIcon /> Add New Farm
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header
          style={{
            backgroundColor: "rgb(108, 146, 108)",
            padding: "0px 10px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Modal.Title id="example-custom-modal-styling-title">
            Farm Detail
          </Modal.Title>
          <CloseIcon
            className="text-danger"
            onClick={() => setShow(false)}
            style={{ cursor: "pointer" }}
          />
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className=" shadow p-4 bg-white rounded farm-padding"
          >
            <div className="ident_info mb-3 fs-5">Land Information</div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Farm</label>
                <input
                  {...register("farmid")}
                  className="form-control"
                  placeholder="Name must be #01 format"
                />
                {errors.farmid?.message && (
                  <p className="text-danger">{errors.farmid?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Farm Name</label>
                <input
                  {...register("name")}
                  className="form-control"
                  placeholder=" Farm Name"
                />
                {errors.name?.message && (
                  <p className="text-danger">{errors.name?.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div class="col-md-6">
                <label className="form-label fw-bold">Type</label>
                <input
                  {...register("type")}
                  className="form-control"
                  placeholder="Crop"
                />
                {errors.type?.message && (
                  <p className="text-danger">{errors.type?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Owner</label>
                <input
                  {...register("owner")}
                  className="form-control"
                  placeholder="Name"
                />
                {errors.owner?.message && (
                  <p className="text-danger">{errors.owner?.message}</p>
                )}
              </div>
            </div>

            <div className="ident_info mb-3 fs-5">Farm Location</div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Latitude</label>
                <input
                  {...register("latitude")}
                  type="text"
                  className="form-control common_1"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label  fw-bold">Longitude</label>
                <input
                  {...register("longitude")}
                  type="text"
                  className="form-control common_1"
                />
              </div>
            </div>

            <div className=" text-center gap">
              <button
                type="submit"
                className="btn px-4 py-2 text-white"
                style={{ backgroundColor: "rgb(108, 146, 108)" }}
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelFarmForm;
