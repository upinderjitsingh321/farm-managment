import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { USER } from "../../../../../config/endpoints";
import axios from "axios";

function ModelPlantingForm({ show, onclose, croplist }) {
  const schema = yup.object().shape({
    // farm_id: yup.string().required("Farm is required"),
    field: yup.string().required("Field is required"),
    cropId: yup.string().required("Crop is required"),
    activity_name: yup.string().required("Activity is required"),
    rate: yup.string().required("Please enter cost"),
    end_date: yup.string().required("Ending Date is required"),
    start_date: yup.string().required("Starting Date is required"),
    note: yup.string(),
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
  const [fieldList, setFieldlist] = useState([]);
  const [fieldid, setFieldId] = useState();
  const [fieldNo, setFieldNo] = useState();

  let access_token = localStorage.getItem("access_token");

  const fetchFields = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FIELD_LIST}`, {
        headers: {
          access_token,
        },
      });

      console.log("API Response:", res.data);

      if (res.status === 200) {
        console.log(res.data, "res.data.data?.list?.field_lists");
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

  const handleSubmitForm = async (data) => {
    console.log(data, "checkdatahere");

    const payload = {
      //   farm_id: data.farm_id,
      field_id: fieldid,
      field_no: fieldNo,
      cropId: data?.cropId,
      activity_name: data.activity_name,
      end_date: data.end_date,
      start_date: data.start_date,
      rate: data.rate,
      note: data.note,
    };
    console.log(payload, "data");

    try {
      const res = await axios.post(`${USER.CREATE_ACTIVITY}`, payload, {
        headers: {
          access_token: access_token,
        },
      });
      console.log(res, "check resoonseeee");
      // toast.success(`Enter Succesfully`);
      onclose();
    } catch (error) {
      console.log(error);
      // toast.error(`${erro r.response.data.message}`)
    }
  };

  const handleSelectField = (e) => {
    const value = e.target.value; // this is a JSON string
    const obj = JSON.parse(value); // convert it to object

    setFieldId(obj.id);
    setFieldNo(obj.field_no);

    setValue("field", obj.id);
    trigger("field");

    // Debug logs
    console.log(obj.id, "Field ID");
    console.log(obj.field_no, "Field No");
    console.log(value, "Raw selected value (JSON string)");
  };

  useEffect(() => {
    console.log(show, "showww");
    if (show) {
      fetchFields();
    }
  }, [show]);
  return (
    <>
      <Modal
        show={show}
        onHide={onclose}
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
            Activity
          </Modal.Title>
          <CloseIcon
            className="text-danger"
            onClick={onclose}
            style={{ cursor: "pointer" }}
          />
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className=" shadow p-4 bg-white rounded farm-padding"
          >
            <div class="row mb-3">
              {/* <div class="col-md-6">
                                <label for="farm-no" class="form-label">Farm Id</label>
                                <input {...register("farm_id")} className="form-control" placeholder=" Farm Id."
                                />
                                {
                                    errors.farm_id?.message &&
                                    <p className="text-danger">{errors.farm_id?.message}</p>
                                }                                  </div> */}
              <div class="col-md-6">
                <label for="field" class="form-label">
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
                      {`${field.users_farm?.farm_id}>${field.field_no}`}
                    </option>
                  ))}
                </select>
                {errors.field?.message && (
                  <p className="text-danger">{errors.field?.message}</p>
                )}
              </div>

              <div class="col-md-6">
                <label for="cropId" class="form-label">
                  Crop No.
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

              <div class="col-md-6 mb-3 mt-3">
                <label for="feild_no" class="form-label">
                  Activity
                </label>
                <input
                  {...register("activity_name")}
                  className="form-control"
                  placeholder="Activity"
                />
                {errors.activity_name?.message && (
                  <p className="text-danger">{errors.activity_name?.message}</p>
                )}{" "}
              </div>
            </div>
            <div className="row mb-3">
              <div class="col-md-6">
                <label for="crop_name" class="form-label">
                  Starting Date
                </label>
                <input
                  {...register("start_date")}
                  type="date"
                  className="form-control"
                  placeholder=" Cost"
                />
                {errors.start_date?.message && (
                  <p className="text-danger">{errors.start_date?.message}</p>
                )}{" "}
              </div>
              <div class="col-md-6">
                <label for="crop_name" class="form-label">
                  End Date
                </label>
                <input
                  {...register("end_date")}
                  type="date"
                  className="form-control"
                  placeholder=" Cost"
                />
                {errors.end_date?.message && (
                  <p className="text-danger">{errors.end_date?.message}</p>
                )}{" "}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="farm_area" class="form-label">
                  Planting Rate 
                </label>
                <input
                  {...register("rate")}
                  className="form-control"
                  placeholder=" Cost"
                />
                {errors.rate?.message && (
                  <p className="text-danger">{errors.rate?.message}</p>
                )}
              </div>
              <div class="col-md-6">
                <label for="select_variety" class="form-label">
                  Note
                </label>
                <input
                  {...register("note")}
                  type="text"
                  class="form-control "
                  placeholder="Give Note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>

            <div className="comman_div_button text-center mt-3">
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

export default ModelPlantingForm;
