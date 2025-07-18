import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { USER } from "../../../config/endpoints";
import axios from "axios";

function AdminLogin() {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

    const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    console.log(payload, "payloasdasd");
    try {
      //api hit
      const res = await axios.post(`${USER.LOGIN}`, payload);
      console.log(res, "wait");

      if (res.status === 200) {
        console.log(res.data, "data");
        localStorage.setItem("access_token", res?.data?.data?.token);
        localStorage.setItem(
          "user_details",
          JSON.stringify(res?.data?.data?.userDetails)
        );

        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const onSubmit = (data) => {
  //   console.log("Form Submitted:", data);
  // };
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4 rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="d-flex justify-content-between">
          <p className="fs-4">Admin</p>
          <CloseIcon
            className="text-danger"
            onClick={() => setShow(false)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="shadow p-4 rounded"
        >
          <div className="mb-3">
            <label className="form-label fw-bold">E-mail</label>
            <input
              {...register("email")}
              className="form-control p-2"
              placeholder="Enter your email"
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label p-2">Password</label>
            <input
              type="password"
              {...register("password")}
              className="form-control fw-bold"
              placeholder="Enter password"
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
          </div>

          {/* <div className="text-end">
            <Link
              to="/forgotpassword"
              className="text-decoration-none text-primary fw-bold"
            >
              Forgot Password?
            </Link>
          </div> */}
          <button type="submit" className="btn btn-success w-100 mt-3 p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
