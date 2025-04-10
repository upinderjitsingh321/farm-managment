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

function ModelFieldForm() {
  const [show, setShow] = useState(false);
  const [farmList, setFarmList] = useState([]);

  const schema = yup.object().shape({
    farmid: yup.string().required("Farm is required"),
    fieldno: yup.string().required("Field no. is required"),
    acre: yup.string().required("Acre is required"),
    khasra: yup.string().required("Khasra no.  is required"),
    landownership: yup.string().required("Ownership  is required"),
    farmpractices: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let access_token = localStorage.getItem("access_token");

  const fetchFarms = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FARM_LIST}`, {
        headers: {
          access_token,
        },
      });
      if (res.status === 200) {
        if (res.data?.data?.list.length > 0) {
          setFarmList(res.data.data?.list);
        }
      }
      // expecting array of farms with id and name
      console.log("farmList:", farmList);
    } catch (err) {
      console.error("Failed to fetch farms:", err);
    }
  };

  const handleSubmitForm = async (data) => {
    console.log(data, "checkdatahere");

    const payload = {
      landownership: data.landownership,
      khasra: data.khasra,
      farmpractices: data.farmpractices,
      acre: data.acre,
      farm_no: data.farmid,
      field_no: data.fieldno,
      farm_name: data.farmid, 
        };
    console.log(payload, "data");

    try {
      const res = await axios.post(`${USER.FIELD_LIST}`, payload, {
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

  useEffect(() => {
    console.log(show,"showww")
    if (show) {
      fetchFarms();
    }
  }, [show]);

  console.log(farmList, "farm");

  return (
    <>
      <button className="add-button" onClick={() => setShow(true)}>
        <AddCircleIcon /> Add New Field
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
            Feild Detail
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
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Farm</label>
                <select {...register("farmid")} className="form-select">
                  <option value="">Select Farm</option>
                  {farmList.map((farm) => (
                    <option key={farm.id} value={farm.id}>
                      {farm.farm_name}
                    </option>
                  ))}
                </select>

                {errors.farmid?.message && (
                  <p className="text-danger">{errors.farmid?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Feild No.</label>
                <input
                  {...register("fieldno")}
                  className="form-control"
                  placeholder=" Field no."
                />
                {errors.fieldno?.message && (
                  <p className="text-danger">{errors.fieldno?.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label"> Area (in Acre.)</label>
                <input {...register("acre")} className="form-control" />
                {errors.acre?.message && (
                  <p className="text-danger">{errors.acre?.message}</p>
                )}
              </div>
              <div class="col-md-6">
                <label className="form-label">Land Ownership</label>
                <select {...register("landownership")} className="form-select ">
                  <option>Select</option>
                  <option value="Owned">Owned</option>
                  <option value="Leased">Leased</option>
                  <option value="Leased">Contract</option>
                </select>
                {errors.landownership?.message && (
                  <p className="text-danger">{errors.landownership?.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Khasra NO.</label>
                <input
                  {...register("khasra")}
                  className="form-control"
                  placeholder=" Khasra No."
                />
                {errors.khasra?.message && (
                  <p className="text-danger">{errors.khasra?.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Farm Practices</label>
                <input
                  {...register("farmpractices")}
                  type="text"
                  className="form-control"
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

export default ModelFieldForm;
