import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { USER } from "../../../../config/endpoints";

function ModelInputForm({ croplist }) {
  const [show, setShow] = useState(false);
  const [fieldList, setFieldlist] = useState([]);
  const [fieldid, setFieldId] = useState();
  const [productOptions, setProductOptions] = useState([]); // State for product options

  const schema = yup.object().shape({
    field: yup.string().required("Field is required"),
    cropId: yup.string().required("Crop is required"),
    inputname: yup.string().required("Input is required"),
    date: yup.date().required("Date is required"),
    name: yup.string(),
    active_ing: yup.string(),
    dosage: yup.string().required("Dosage is required"),
    period: yup.string().required("Period is required"),
    manufacture_com: yup.string(),
    rate: yup.string().required("Price is required"),
  });

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
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
        if (res.data?.data?.list.length > 0) {
          setFieldlist(res.data.data?.list);
        }
      }
    } catch (err) {
      console.error("Failed to fetch farms:", err);
    }
  };

  // This function is triggered when input type is selected
  const handleInputTypeChange = (e) => {
    const inputType = e.target.value;

    // Dynamically update product options based on selected input type
    if (inputType === "fertilizer") {
      setProductOptions(["Urea", "DAP", "SSP", "DSP", "Potash"]);
    } else if (inputType === "herbicide") {
      setProductOptions(["24d", "vardav", "Metri", "Sempra", "Sencor"]);
    } else if (inputType === "insecticide") {
      setProductOptions(["Coragen", "Taltstar", "Actra", "Fame", "Mono"]);
    } else if (inputType === "fungicide") {
      setProductOptions(["Tilt", "Nativo", "Ridomil Gold", "M45", "Avtar", "Acrobat"]);
    } else {
      setProductOptions([]); // Clear options if no valid input type is selected
    }
  };

  const handleSubmitForm = async (data) => {
    const payload = {
      field_id: fieldid,
      cropId: data?.cropId,
      inputname: data.inputname,
      name: data.name,
      active_ing: data.active_ing,
      rate: data.rate,
      period: data.period,
      dosage: data.dosage,
      date: data.date,
      manufacture_com: data.manufacture_com,
    };

    try {
      const res = await axios.post(`${USER.CREATE_INPUT}`, payload, {
        headers: {
          access_token: access_token,
        },
      });
      console.log(res, "Response");
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectField = (e) => {
    const value = e.target.value; // this is a JSON string
    const obj = JSON.parse(value); // convert it to object

    setFieldId(obj.id);

    setValue("field", obj.id);
    trigger("field");

    console.log(obj.id, "Field ID");
    console.log(value, "Raw selected value (JSON string)");
  };

  useEffect(() => {
    if (show) {
      fetchFields();
    }
  }, [show]);

  return (
    <>
      <button className="add-button" onClick={() => setShow(true)}>
        <AddCircleIcon /> Add Inputs
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
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
            Inputs
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
            className="shadow p-4 bg-white rounded"
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <label for="field" className="form-label">
                  Field No.
                </label>
                <select onChange={handleSelectField} className="form-select">
                  <option value="">Select Field</option>
                  {fieldList.map((field) => (
                    <option
                      key={field.id}
                      value={JSON.stringify({
                        id: field.id,
                        field_no: field.field_no,
                        farm_id: field.users_farm?.farm_id,
                      })}
                    >
                      {`${field.users_farm?.farm_id} > ${field.field_no}`}
                    </option>
                  ))}
                </select>
                {errors.field && (
                  <p className="text-danger">{errors.field.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label for="cropId" className="form-label">
                  Crop
                </label>
                <select
                  {...register("cropId")}
                  name="cropId"
                  className="form-select"
                >
                  <option value="">Select Crop</option>
                  {croplist.map((crop, index) => (
                    <option key={index} value={crop?.id}>
                      {crop?.crop}
                    </option>
                  ))}
                </select>
                {errors.cropId?.message && (
                  <p className="text-danger">{errors.cropId?.message}</p>
                )}
              </div>
              <div className="col-md-6 mb-3 mt-3">
                <label className="form-label">Name of Inputs</label>
                <select
                  {...register("inputname")}
                  className="form-select"
                  onChange={handleInputTypeChange} // Update options based on input type
                >
                  <option value="">Select Type</option>
                  <option value="insecticide">Insecticide</option>
                  <option value="fungicide">Fungicide</option>
                  <option value="herbicide">Herbicide</option>
                  <option value="fertilizer">Fertilizer</option>
                  <option value="organic">Organic</option>
                </select>
                {errors.inputname && (
                  <p className="text-danger">{errors.inputname.message}</p>
                )}
              </div>
              <div className="col-md-6 mb-3 mt-3">
                <label className="form-label">Product Name</label>
                <select {...register("name")} className="form-select">
                  <option value="">Select Product</option>
                  {productOptions.map((product, index) => (
                    <option key={index} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Active Ingredient</label>
                <input
                  {...register("active_ing")}
                  className="form-control"
                  placeholder="If Knows"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Price</label>
                <input
                  {...register("rate")}
                  className="form-control"
                  placeholder="Price"
                />
                {errors.rate && (
                  <p className="text-danger">{errors.rate.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Dosage/Acre</label>
                <input
                  {...register("dosage")}
                  className="form-control"
                />
                {errors.dosage && (
                  <p className="text-danger">{errors.dosage.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Application Date</label>
                <input
                  {...register("date")}
                  type="date"
                  className="form-control"
                />
                {errors.date && (
                  <p className="text-danger">{errors.date.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Period</label>
                <select {...register("period")} className="form-select">
                  <option value="">Select Period</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                </select>
                {errors.period && (
                  <p className="text-danger">{errors.period.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Manufacturer</label>
                <input
                  {...register("manufacture_com")}
                  className="form-control"
                  placeholder="Company Name"
                />
                {errors.manufacture_com && (
                  <p className="text-danger">
                    {errors.manufacture_com.message}
                  </p>
                )}
              </div>
            </div>

            <div className="text-center mt-3">
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

export default ModelInputForm;
