import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { USER } from "../../../../config/endpoints";
import { toast } from "react-toastify";

function ModelUpperSoilForm() {
  const [show, setShow] = useState(false);
  const schema = yup.object().shape({
    field_no: yup.string().required("Field number is required"),
    soiltype: yup.string().required("Soil Type is required"),
    soilcondtion: yup.string().required("Soil condition is required"),
    issue: yup.string().required("Issue is required"),
    s_ph: yup.string().required("pH level is required"),
    s_texture: yup.string().required("Texture is required"),
    o_matter: yup.string().required("Organic matter is required"),
    moistureValue: yup.string().required("Organic matter is required"),
    e_conductivity: yup
      .string()
      .required("Electrical conductivity is required"),
    s_salinity: yup.string().required("Soil salinity is required"),
  });

  const [fieldList, setFieldlist] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const access_token = localStorage.getItem("access_token");

  const fetchFields = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FIELD_LIST}`, {
        headers: {
          access_token,
        },
      });

      console.log("API Response:", res.data);

      if (res.status === 200) {
        console.log(res.data, "res.data.data?.list?.field_l");
        console.log(res.data?.data?.list, "res.data.data?.list?.field_lists");

        if (res.data?.data?.list.length > 0) {
          setFieldlist(res.data.data?.list);
        }
        return "No field found";
      }
      // expecting array of farms with id and name
    } catch (err) {
      console.error("Failed to fetch farms:", err);
    }
  };

  const CreateSoil = async (data) => {
    console.log(data, "checkdatahere");
    console.log(fieldList, "datahere");

    console.log(data.id, "dcccata");

    const payload = {
      soil_id: data.field_no,
      field_no: data.field_no,
      soiltype: data.soiltype,
      issue: data.issue,
      active_ing: data.active_ing,
      o_matter: data.o_matter,
      e_conductivity: data.e_conductivity,
      s_salinity: data.s_salinity,
      s_texture: data.s_texture,
      s_ph: data.s_ph,
      moistureValue: data.moistureValue,
    };
    console.log(payload, "data");

    try {
      const res = await axios.post(`${USER.CREATE_SOIL}`, payload, {
        headers: {
          access_token: access_token,
        },
      });
      console.log("Response:", res.data);
      toast.success(` Succesfully`);
      setShow(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add soil data");    }
  };

  useEffect(() => {
    console.log(show, "showww");
    if (show) {
      fetchFields();
    }
  }, [show]);

  return (
    <>
      <button
        style={{ marginLeft: "523px" }}
        className="add-button"
        onClick={() => setShow(true)}
      >
        <AddCircleIcon /> Add Soil Detail
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
            Soil Detail
          </Modal.Title>
          <CloseIcon
            className="text-danger"
            onClick={() => setShow(false)}
            style={{ cursor: "pointer" }}
          />
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(CreateSoil)}
            className="registration_form shadow p-4 bg-white rounded reg-padding"
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="fieldno" className="form-label">
                  Field No.
                </label>
                <select {...register("field_no")} className="form-select">
                  <option value="">Select Field</option>
                  {fieldList.map((field) => (
                    <option key={field.id} value={field.id}>
                      {`${field.users_farm?.farm_id}>${field.field_no}`}
                    </option>
                  ))}
                </select>
                {errors.field_no && (
                  <p className="text-danger">{errors.field_no.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="issue" className="form-label">
                  Issues Faced:
                </label>
                <select {...register("issue")} className="form-select">
                  <option value="">Select</option>
                  <option value="low_fertility">Low Fertility</option>
                  <option value="erosion">Erosion</option>
                  <option value="pests">Pests</option>
                  <option value="weeds">Weeds</option>
                  <option value="salinity">Salinity</option>
                </select>
                {errors.issue && (
                  <p className="text-danger">{errors.issue.message}</p>
                )}
              </div>
              {/* <div className="col-md-6">
                <label htmlFor="location" className="form-label">
                  Soil Location:
                </label>
                <input
                  {...register("location")}
                  className="form-control"
                  placeholder="Enter location or GPS coordinates"
                />
                {errors.location && (
                  <p className="text-danger">{errors.location.message}</p>
                )}
              </div> */}
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="soilcondtion" className="form-label">
                  Soil Condition:
                </label>
                <select {...register("soilcondtion")} className="form-select">
                  <option value="">Select Condition</option>
                  <option value="dry">Dry</option>
                  <option value="moist">Moist</option>
                  <option value="wet">Wet</option>
                </select>
                {errors.soilcondtion && (
                  <p className="text-danger">{errors.soilcondtion.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="soiltype" className="form-label">
                  Soil Type:
                </label>
                <select {...register("soiltype")} className="form-select">
                  <option value="">Select Soil Type</option>
                  <option value="sandy">Sandy</option>
                  <option value="clay">Clay</option>
                  <option value="loamy">Loamy</option>
                  <option value="silt">Silt</option>
                </select>
                {errors.soiltype && (
                  <p className="text-danger">{errors.soiltype.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phlevel" className="form-label">
                  Soil pH Level
                </label>
                <input
                  {...register("s_ph")}
                  className="form-control"
                  placeholder="Ph level"
                />
                {errors.s_ph && (
                  <p className="text-danger">{errors.s_ph.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="moistureValue" className="form-label">
                  Soil Moisture:
                </label>
                <div className="soil_moisture row">
                  <div className="col-md-6">
                    <input
                      {...register("moistureValue")}
                      className="form-control"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Enter value"
                    />
                    {errors.moistureValue && (
                      <p className="text-danger">
                        {errors.moistureValue.message}
                      </p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <select
                      {...register("moistureUnit")}
                      className="form-select"
                    >
                      <option value="">Select Unit</option>
                      <option value="fc">FC(%)</option>
                      <option value="pwp">PWP(%)</option>
                      <option value="taw">TAW(%)</option>
                    </select>
                    {errors.moistureUnit && (
                      <p className="text-danger">
                        {errors.moistureUnit.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="texture" className="form-label">
                  Soil Texture
                </label>
                <select {...register("s_texture")} className="form-select">
                  <option value="">Select</option>
                  <option>Sand</option>
                  <option>Loam</option>
                  <option>Silt</option>
                  <option>Clay</option>
                  <option>Sandy Loam</option>
                  <option>Sandy Clay</option>
                  <option>Loamy Sand</option>
                  <option>Clay Loam</option>
                  <option>Silt Loam</option>
                  <option>Silty Clay</option>
                  <option>Silty Clay Loam</option>
                  <option>Sandy Clay Loam</option>
                </select>
                {errors.s_texture && (
                  <p className="text-danger">{errors.s_texture.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="organic" className="form-label">
                  Organic Matter
                </label>
                <select {...register("o_matter")} className="form-select">
                  <option value="">Select</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                {errors.o_matter && (
                  <p className="text-danger">{errors.o_matter.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="ec" className="form-label">
                  Electrical Conductivity (dS/m)
                </label>
                <input
                  {...register("e_conductivity")}
                  className="form-control"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter conductivity value"
                />
                {errors.e_conductivity && (
                  <p className="text-danger">{errors.e_conductivity.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="salinity" className="form-label">
                  Soil Salinity
                </label>
                <input
                  {...register("s_salinity")}
                  className="form-control"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter salinity (e.g., 2.5)"
                />
                {errors.s_salinity && (
                  <p className="text-danger">{errors.s_salinity.message}</p>
                )}
              </div>
            </div>
{/* 
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="issue" className="form-label">
                  Issues Faced:
                </label>
                <select {...register("issue")} className="form-select">
                  <option value="">Select</option>
                  <option value="low_fertility">Low Fertility</option>
                  <option value="erosion">Erosion</option>
                  <option value="pests">Pests</option>
                  <option value="weeds">Weeds</option>
                  <option value="salinity">Salinity</option>
                </select>
                {errors.issue && (
                  <p className="text-danger">{errors.issue.message}</p>
                )}
              </div>
            </div> */}

            <div className="comman_div_button text-center">
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

export default ModelUpperSoilForm;
