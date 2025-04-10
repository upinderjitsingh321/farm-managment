import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { USER } from "../../config/endpoints";
import axios from "axios";

function Myaccount() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    dob: "",
    state: "",
    district: "",
    city: "",
    pin: "",
    block: "",
  });

  const getUserDetails = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const res = await axios.get(USER.USER_DETAILS, {
        headers: { access_token },
      });

      if (res.status === 200) {
        const user = res?.data?.data;
        const userDetails = user?.users_detail || user?.users_detail || {};
        
        console.log("User details:", user);
        console.log("Userdetails:", userDetails);

        setData({
          name: userDetails?.name || "",
          email: user?.email || "",
          number: userDetails?.number || "",
          dob: userDetails?.dob || "",
          state: userDetails?.state || "",
          district: userDetails?.district || "",
          city: userDetails?.city || "",
          block: userDetails?.block || "",
          pin: userDetails?.pin || "",
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

  return (
    <div style={{ backgroundColor: "#ede9e9", paddingBottom: "30px" }}>
      <div className="container d-flex align-items-center mb-2">
        <h3 className="line">My Profile</h3>
        <div className="borderBottom"></div>
      </div>

      <div className="container container-right-one container-gap mb-4">
        <div className="profile_photo1">
          <img className="profile_photo" src="img/profile-picture.png" alt="Profile" />
          <input id="image" type="file" className="d-none" />
          <label className="camera-icon" htmlFor="image">
            <i className="fa-solid fa-camera fs-5" role="button"></i>
          </label>
        </div>
        <div>
          <p style={{ paddingTop: "20px" }}>{data.name}</p>
        </div>
      </div>

      <div className="container container-gap">
        <div className="row my-4">
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <h3>Personal Information</h3>
            <Link to={"/edit-personal"}>
              <button className="edit-button">Edit</button>
            </Link>
          </div>
          <div className="bottom-line"></div>

          <div className="col-md-4">
            <p>First Name</p>
            <p>{data.name}</p>
          </div>

          <div className="col-md-4">
            <p>Phone Number</p>
            <p>{data.number}</p>
          </div>

          <div className="col-md-4">
            <p>Date of Birth</p>
            <p>{data.dob}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>Id Proof</p>
            <p>--</p>
          </div>

          <div className="col-md-4 btn-pass">
            <p>Email</p>
            <span>{data.email}</span>
          </div>

          <div className="col-md-4 btn-pass">
            <p>Password</p>
            <span>********</span>
            <Button className="ms-3 button-pos" variant="outlined" color="error">
              <EditIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="container container-gap address-padd">
        <div className="row mt-4">
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", paddingRight: "30px" }}>
            <h3>Address</h3>
            {/* <button className="edit-button">Edit</button> */}
          </div>
          <div className="bottom-line"></div>

          <div className="col-md-4">
            <p>State</p>
            <p>{data.state}</p>
          </div>

          <div className="col-md-4">
            <p>District</p>
            <p>{data.district}</p>
          </div>

          <div className="col-md-4">
            <p>City</p>
            <p>{data.city}</p>
          </div>

          <div className="col-md-4 mt-3">
            <p>Block</p>
            <p>{data.block}</p>
          </div>

          <div className="col-md-4 mt-3">
            <p>Pin Code</p>
            <p>{data.pin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
