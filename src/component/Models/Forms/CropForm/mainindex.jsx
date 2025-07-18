import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { USER } from "../../../../config/endpoints";
import axios from "axios";
import { toast } from "react-toastify";

function ModelMainCropForm() {
  const [show, setShow] = useState(false);
  const [fieldList, setFieldlist] = useState([]);
  const [fieldid, setFieldId] = useState();
  const [fieldNo, setFieldNo] = useState();
  const [maxacre, setMaxacre] = useState();

  const schema = yup.object().shape({
    field: yup.string().required("Field is required"),
    acre: yup
    .number()
    .typeError("Acre must be a number")
    .required("Acre is required")
    .positive("Acre must be greater than 0")
    .test(
      "max-acre",
      () => `Acre cannot exceed the field size of ${maxacre}`,
      (value) => !maxacre || value <= maxacre
    ),    crop: yup.string().required("Crop name is required"),
    variety: yup.string().required("variety name is required"),
    previous_crop: yup.string().required("Crop name is required"),
    // planting_price: yup.string().required("Price required"),
    // harvest_price: yup.string().required("Price Required"),
    // planting: yup.date().required("Planting Date is required"),
    // harvest: yup.date().required("Harvest Date is required"),
    labour: yup.string().required("Labour Cost is required"),
    production: yup.string().required("Production is required"),
    price: yup.string().required("Price is required"),
    irrigation_mth: yup.string().required("Method name is required"),
    snowing_mth: yup.string().required("Method name is required"),
    season_year: yup.string().required("Season Year name is required"),
    season: yup.string().required("Season name is required"),
    remark: yup.string(),
  });
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let access_token = localStorage.getItem("access_token");

  const fetchFields = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FIELD_LIST}`, {
        headers: {
          access_token,
        },
      });

      console.log("API Response:", res);
      // const farmIds = res.data.list.map(item => item.users_farm.farm_id);
      // setFarmIds(farmIds);

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
  
  console.log("farmList:", fieldList);

  const handleSubmitForm = async (data) => {
    console.log(data, "checkdatahere");
    console.log(fieldList, "datahere");

    console.log(data.id, "dcccata");

    const payload = {
      field: fieldNo,
      crop: data.crop,
      acre: data.acre,
      variety: data.variety,
      snowing_mth: data.snowing_mth,
      irrigation_mth: data.irrigation_mth,
      planting: data.planting,
      harvest: data.harvest,
      note: data.note,
      price: data.price,
      // fertilizer: data.fertilizer,
      // herbicide: data.herbicide,
      // organic: data.organic,
      // insecticide: data.insecticide,
      // fungicide: data.fungicide,
      season: data.season,
      season_year: data.season_year,
      planting_price: data.planting_price,
      harvest_price: data.harvest_price,
      labour: data.labour,
      remark: data.remark,
      previous_crop: data.previous_crop,
      production: data.production,
      field_id: fieldid,
    };
    console.log(payload, "data");

    try {
      const res = await axios.post(`${USER.CREATE_CROP}`, payload, {
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
  console.log(errors, "checkerrorr");

  const handleSelectField = (e) => {
    const value = e.target.value; // this is a JSON string
    const obj = JSON.parse(value); // convert it to object

    setFieldId(obj.id);
    setFieldNo(obj.field_no);
    setMaxacre(obj.acre);

    setValue("field", obj.id);
    trigger("field");
    trigger("acre");

    // Debug logs
    console.log(obj.id, "Field ID");
    console.log(obj.field_no, "Field No");
    console.log(obj.acre, " acre");
    console.log(value, "Raw selected value (JSON string)");
  };

  useEffect(() => {
    console.log(show, "showww");
    if (show) {
      fetchFields();
    }
  }, [show]);

  console.log(fieldList, "fieldlList");

  return (
    <>
      <button
        className="add-button"
        style={{ marginLeft: "243px" }}
        onClick={() => setShow(true)}
      >
        <AddCircleIcon /> Add New Crop
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
            Crop Detail
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
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="feild" class="form-label">
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
                        acre: field.acre,
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
                <label for="farm_area" class="form-label">
                  Area in(Arce.)
                </label>
                <input
                  {...register("acre")}
                  
                  className="form-control"
                  placeholder=" Acre"
                />
                {errors.acre?.message && (
                  <p className="text-danger">{errors.acre?.message}</p>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Season Year</label>
                <select
                  {...register("season_year")}
                  className="form-select"
                  placeholder="2024-2025"
                >
                  <option value="">Select</option>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2022-2023">2022-2023</option>
                </select>
                {errors.season_year?.message && (
                  <p className="text-danger">{errors.season_year?.message}</p>
                )}
              </div>
              <div class="col-md-6">
                <label for="crop_name" class="form-label">
                  Crop Name
                </label>
                <input
                  {...register("crop")}
                  className="form-control"
                  placeholder=" Crop Name"
                />
                {errors.crop?.message && (
                  <p className="text-danger">{errors.crop?.message}</p>
                )}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="select_season" class="form-label common_select">
                  Season
                </label>
                <select {...register("season")} class="form-select ">
                  <option value="">Select</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring </option>
                  <option value="Autumn">Autumn </option>
                </select>
                {errors.season?.message && (
                  <p className="text-danger">{errors.season?.message}</p>
                )}
              </div>
              <div class="col-md-6">
                <label for="select_variety" class="form-label">
                  Variety
                </label>
                <input
                  {...register("variety")}
                  className="form-control"
                  placeholder=" Variety"
                />
                {errors.variety?.message && (
                  <p className="text-danger">{errors.variety?.message}</p>
                )}
              </div>
            </div>
            <div class="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Sowing Method</label>
                <select {...register("snowing_mth")} className="form-select">
                  <option>Select</option>
                  <option value="BroadCasting">BroadCasting</option>
                  <option value="NO Til Drill">NO Til Drill</option>
                  <option value="Happy Seeder">Happy Seeder</option>
                  <option value="Super Seeder">Super Seeder</option>
                  <option value="Surface Seeder">Surface Seeder</option>
                </select>
                {errors.snowing_mth?.message && (
                  <p className="text-danger">{errors.snowing_mth?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Crop Rotation</label>
                <input
                  {...register("previous_crop")}
                  className="form-control"
                  placeholder=" Previous Crop"
                />
                {errors.previous_crop?.message && (
                  <p className="text-danger">{errors.previous_crop?.message}</p>
                )}
              </div>
            </div>

            {/* <div class="row mb-3">
              <div className="col-md-6">
                <label className="form-label"> Sowing Expense</label>
                <input
                  {...register("planting_price")}
                  className="form-control"
                  placeholder=" Snowing Cost"
                />
                {errors.planting_price?.message && (
                  <p className="text-danger">
                    {errors.planting_price?.message}
                  </p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label"> Harvest Expense</label>
                <input
                  {...register("harvest_price")}
                  className="form-control"
                  placeholder=" Harvest Cost"
                />
                {errors.harvest_price?.message && (
                  <p className="text-danger">{errors.harvest_price?.message}</p>
                )}
              </div>
            </div> */}
            {/* <div class="row mb-3">
              <div className="col-md-6">
                <label className="form-label"> Sowing Date</label>
                <input
                  {...register("planting")}
                  type="date"
                  className="form-control"
                  placeholder=" Date"
                />
                {errors.planting?.message && (
                  <p className="text-danger">{errors.planting?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Expected Harvest Date</label>
                <input
                  {...register("harvest")}
                  type="date"
                  className="form-control"
                  placeholder=" Date"
                />
                {errors.harvest?.message && (
                  <p className="text-danger">{errors.harvest?.message}</p>
                )}
              </div>
            </div> */}
            <div className="row mb-3">
              <div class="col-md-6">
                <label for="labourcost" class="form-label">
                  Labour Cost
                </label>
                <input
                  {...register("labour")}
                  className="form-control"
                  placeholder=" Cost"
                />
                {errors.labour?.message && (
                  <p className="text-danger">{errors.labour?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Irrigation Method</label>
                <select {...register("irrigation_mth")} className="form-select">
                  <option>Select</option>
                  <option value="Drip">Drip/Sprinkler</option>
                  <option value="Sprinkler">Tubewell</option>
                  <option value="Flood">Canal</option>
                </select>
                {errors.irrigation_mth?.message && (
                  <p className="text-danger">
                    {errors.irrigation_mth?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="row md-3">
              <div class="col-md-6">
                <label for="production" class="form-label">
                  Expected Production(Quintal)
                </label>
                <input
                  {...register("production")}
                  className="form-control"
                  placeholder=" Likely Production"
                />
                {errors.production?.message && (
                  <p className="text-danger">{errors.production?.message}</p>
                )}
              </div>
              <div class="col-md-6">
                <label for="price" class="form-label">
                  Total Revenue
                </label>
                <input
                  {...register("price")}
                  className="form-control"
                  placeholder=" Price"
                />
                {errors.price?.message && (
                  <p className="text-danger">{errors.price?.message}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div class="col-md-12">
                <label for="remarks" class="form-label">
                  Remarks
                </label>
                <input
                  {...register("remark")}
                  type="type"
                  class="form-control"
                  id="remarks"
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

export default ModelMainCropForm;
