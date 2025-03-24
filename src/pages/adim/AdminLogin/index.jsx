import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

function AdminLogin() {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  const [show, setShow] = useState(true)
if(!show) return null
  return (
    <div  className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="d-flex justify-content-between">
                <p className="fs-4">Admin</p>
            <CloseIcon className='text-danger' onClick={() => setShow(false)} style={{ cursor: "pointer" }} />

            </div>

      <form onSubmit={handleSubmit(onSubmit)} className="shadow p-4 rounded">
        <div className="mb-3">
          <label className="form-label fw-bold">E-mail</label>
          <input
            {...register("email")}
            className="form-control p-2"
            placeholder="Enter your email"
          />
          {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label p-2">Password</label>
          <input
            type="password"
            {...register("password")}
            className="form-control fw-bold"
            placeholder="Enter password"
          />
          {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
        </div>

        <div className="text-end">
            <Link to="/forgotpassword" className="text-decoration-none text-primary fw-bold">
              Forgot Password?
            </Link>
          </div>

        <Link to={"/admin/dashboard"}><button type="submit" className="btn btn-success w-100 mt-3 p-2">
            Login
          </button>
          </Link>
      </form>
    </div>
    </div>
  );
}

export default AdminLogin
;


