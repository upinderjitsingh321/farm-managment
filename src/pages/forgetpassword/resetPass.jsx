import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginRegister from '../loginregisterpage';
import { USER } from '../../config/endpoints';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Define the validation schema with password and confirmation validation
const schema = yup.object().shape({
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must have at least 12 characters, one uppercase, one lowercase, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match') // Ensures the passwords match
    .required("Confirm password is required"),
});

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const { password } = data;
      await axios.post(USER.RESETPASSWORD, { token, password });
      toast.success("Password reset successfully!");

      // After successful reset, show the Login/Register modal
      setOpen(true);

      // Optionally redirect to login page after a short delay
      // setTimeout(() => navigate('/login'), 2000); // Uncomment this line if you want auto redirect
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Reset Your Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">New Password</label>
              <input
                type="password"
                id="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Enter your new password"
                {...register('password')}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Confirm your new password"
                {...register('confirmPassword')}
              />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Reset Password
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
      {open && <LoginRegister open={open} setOpen={setOpen} />}
    </>
  );
};

export default ResetPassword;
