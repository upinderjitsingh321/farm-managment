import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./editinfo.css";
import axios from "axios";
import { toast } from "react-toastify";
import { USER } from "../../../config/endpoints";
import { useNavigate } from "react-router";
const EditPersonalInfo = () => {
  const [farmersName, setFarmersName] = useState("");
  const [dateOfBirth, setDateBirth] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [farmerAddress, setfarmerAddress] = useState("");
  const [state, setstate] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [idProof, setidProof] = useState("");
  const [proofType, setproofType] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate()


  const getUserDetails = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const res = await axios.get(USER.USER_DETAILS, {
        headers: { access_token },
      });

      if (res.status === 200) {
        const user = res?.data?.data;
        const userDetails = user?.users_detail || user?.users_detail || {};
        const userAddress = user?.useraddress || user?.useraddress || {};
        const idproof = user?.id_proofs || user?.id_proofs || {};
        
        console.log("User details:", user);
        console.log("Userdetails:", userDetails);

        setData({
          name: userDetails?.name || "",
          email: user?.email || "",
          number: userDetails?.number || "",
          dob: userDetails?.dob || "",
          state: userAddress?.state || "",
          district: userAddress?.district || "",
          city: userAddress?.city || "",
          block: userAddress?.block || "",
          pin: userAddress?.pin || "",
          address: userAddress?.address || "",
          id_proof_type: idproof?.id_proof_type || "",
        });
      } else if (res.status === 401) {
        localStorage.removeItem("access_token");
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("access_token");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", farmersName);
    formData.append("dob", dateOfBirth);
    formData.append("number", MobileNumber);
    formData.append("relative_name", fatherName);
    formData.append("address", farmerAddress);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pin", pincode);
    formData.append("id_proof_type", proofType);
  
    // Append the actual file object, not the file path string
    if (idProof) {
      formData.append("id_proof", idProof);
    }
  
    try {
      const res = await axios.post(`${USER.EDIT_DETAILS}`, formData);
      console.log(res, "check responseeee");
      toast.success("Updated Successful");
  
      // Handle navigation after successful update
      navigate("/account");
    } catch (error) {
      console.error("Error occurred during form submission:", error);
      toast.error("An error occurred");
    }
  };
  

  return (
    <div className="conatiner" style={{ backgroundColor: "#ede9e9" }}>
      <div className="row">
        <div className="d-flex align-items-center ">
          <h3 className="edit-line">My Profile</h3>

          <div className="borderBottom"></div>
        </div>
        <div style={{ display: "grid" }} className="col-md-5 ms-3">
          <div className=" container-right-one edit-con-height">
            <div className="edit-profile-photo1">
              <img className="profile_photo" src="img/profile-picture.png" />
              <input id="image" type="file" className="d-none" />
              <label className="edit-camera-icon" htmlFor="image">
                <i class="fa-solid fa-camera fs-5" role="button"></i>
              </label>
            </div>
            <div className="edit-position">
              <p style={{ paddingTop: "20px", fontSize:"30px", textTransform: "uppercase" }}>{data.name}</p>
              {/* <p>{data.district}</p> */}
            </div>
          </div>
          <ul className=" container-right-one edit-con2-height">
            <p style={{ fontSize: "30px", fontWeight: "600" }}>About</p>
            <div style={{ display: "flex" }}>
              <div>
                <img className="edit-logo" src="img/profile-user.png" />
              </div>
              <div style={{ display: "flex" }}>
                <p>Full Name:</p>
                <p style={{ paddingLeft: "5px" }}> {data.name}</p>
              </div>
            </div>
            {/* <div style={{ display: "flex" }}>
              <div>
                {" "}
                <img className="edit-logo" src="img/status.png" />
              </div>
              <div style={{ display: "flex" }}>
                <p>Status:</p>
                <p style={{ paddingLeft: "5px" }}>{data.number }</p>
              </div>
            </div> */}
            <div style={{ display: "flex" }}>
              <div>
                <img className="edit-logo" src="img/flag.png" />
              </div>
              <div style={{ display: "flex" }}>
                <p>State:</p>
                <p style={{ paddingLeft: "5px" }}>{data.state}</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img className="edit-logo" src="img/phone.png" />
              </div>
              <div style={{ display: "flex" }}>
                <p>Phone Number:</p>
                <p style={{ paddingLeft: "5px" }}>{data.number}</p>
              </div>
            </div>
            {/* <div style={{ display: "flex" }}>
              <div>
                <img className="edit-logo" src="img/idproof.png" />
              </div>
              <div style={{ display: "flex" }}>
                <p>Id Proof:</p>
                <p style={{ paddingLeft: "5px" }}> {data.name}</p>
              </div>
            </div> */}
          </ul>
        </div>
        <div
          style={{ width: "calc(58% - 25px)", marginBottom: "40px" }}
          className="col-md-7"
        >
          <form
            onSubmit={handleSubmit}
            className="registration_form shadow p-4 bg-white rounded"
          >
            <h2 className="text-center mb-4 text-dark">Your Details</h2>
            <div className=" mb-3 fw-bold">Personal Information</div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Farmer Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFarmersName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Date Of Birth</label>
                <input
                  className="form-control"
                  type="date"
                  onChange={(e) => setDateBirth(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Mobile no.</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="0000000000"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Father/Husband Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setfatherName(e.target.valueAsNumber)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Village"
                  onClick={(e) => setfarmerAddress(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">State</label>
                <input
                  className="form-control"
                  type="text"
                  value="Punjab"
                  readOnly
                  onChange={(e) => setstate(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Pin Code</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>

            <div className="ident_info mb-3 fw-bold">
              Identification Information
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">ID Proof Type</label>
                <select
                  className="form-control"
                  onChange={(e) => setproofType(e.target.value)}
                >
                  <option value="adhar">Adhar card</option>
                  <option value="pan">Pan card</option>
                  <option value="voter">Voter card</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Scanned ID Proof</label>
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) => setidProof(e.target.files[0])} // Change to use the file object

                />
              </div>
            </div>

            <div className="comman_div_button text-center">
              <button
                type="submit"
                className="btn btn-success px-4 py-2 rounded-pill"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfo;
