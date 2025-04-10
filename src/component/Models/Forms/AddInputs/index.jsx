import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ModelInputForm() {
  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    farmid: yup.string().required("Farm is required"),
    fieldno: yup.string().required("Field is required"),
    inputs: yup.string().required("Input is required"),
    date: yup.date().required("Date is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <button className="add-button" onClick={() => setShow(true)}>
        <AddCircleIcon /> Add Inputs
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
            onSubmit={handleSubmit()}
            className=" shadow p-4 bg-white rounded farm-padding"
          >
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="farm-no" class="form-label">
                  Farm Id
                </label>
                <input
                  {...register("farmid")}
                  className="form-control"
                  placeholder=" Farm Id."
                />
                {errors.farmid?.message && (
                  <p className="text-danger">{errors.farmid?.message}</p>
                )}{" "}
              </div>
              <div class="col-md-6">
                <label for="fieldno" class="form-label">
                  Field No.
                </label>
                <input
                  {...register("fieldno")}
                  className="form-control"
                  placeholder=" Field No"
                />
                {errors.fieldno?.message && (
                  <p className="text-danger">{errors.fieldno?.message}</p>
                )}{" "}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="name" class="form-label">
                  Product Name
                </label>
                <select
                  type="type"
                 className="form-select"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => setProductNmae(e.target.value)}
                >
                  <option value="">Select Type </option>
                  <option value="urea">Urea</option>
                  <option value="dap">DAP</option>
                  <option value="ssp">SSP</option>
                  <option value="dsp">DSP</option>
                  <option value="potash">Potash</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="ingredient" class="form-label">
                  Active Ingredient
                </label>
                <input
                  type="type"
                  class="form-control"
                  id="ingredient"
                  placeholder="Name of ingredient"
                  onChange={(e) => setActiveIngredient(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Inputs</label>
                <select
                  {...register("inputs")}
                  type=""
                  className="form-select"
                  placeholder="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select Type </option>
                  <option value="dry">Insecticide</option>
                  <option value="dry">Fungicide</option>
                  <option value="dry">Herbicide</option>
                  <option value="moist">Fertilizer</option>
                  <option value="wet">Organic</option>
                </select>
                {errors.inputs?.message && (
                  <p className="text-danger">{errors.inputs?.message}</p>
                )}
              </div>
              <div class="col-md-6">
                <label for="dosage" class="form-label">
                  Dosage/Acre
                </label>
                <input
                  type="type"
                  class="form-control"
                  id="dosage"
                  placeholder="Dosage"
                  onChange={(e) => setDosageperAcre(e.target.value)}
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="application" class="form-label">
                  Application Date
                </label>
                <input
                  {...register("date")}
                  type="date"
                  className="form-control"
                  placeholder=" Field No"
                />
                {errors.date?.message && (
                  <p className="text-danger">{errors.date?.message}</p>
                )}{" "}
              </div>

              <div class="col-md-6">
                <label for="select_variety" class="form-label">
                  Period
                </label>
                <select
                  className="form-select"
                  placeholder="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select Type </option>
                  <option value="dry">Aut.</option>
                  <option value="dry">Spring</option>
                  <option value="moist">Summer</option>
                  <option value="wet">Winter</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Manufacturer</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  onChange={(e) => SetManufacturer(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Price/Acre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
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

export default ModelInputForm;
