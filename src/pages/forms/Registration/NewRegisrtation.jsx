import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./registration.css"
import { useNavigate } from "react-router";
const FarmerRegistration = () => {
  const farmername = /^[A-Za-z\s]+$/i
  const phoneno = /^[0-9]+$/;
  const schema = yup.object().shape({
    name: yup.string().required("Name is required").matches(farmername, "Name must be letters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phone: yup.string().min(10, "Number must be at least 10 Digit").required("Number is required").matches(phoneno, "Phone number must contain only digits"),
    address: yup.string().required("Address is required"),
    district: yup.string().required("District is required"),
    block: yup.string().required("Block is required"),

    file: yup.mixed()
      .test("fileRequired", "File is required", (value) => value && value.length > 0)
      .test("fileSize", "File size must be less than 2MB", (value) => value && value[0]?.size <= 2 * 1024 * 1024)
      .test("fileType", "Only JPG, PNG, and PDF files are allowed", (value) =>
        value && ["image/jpeg", "image/png", "application/pdf"].includes(value[0]?.type)),
    confirmPassword: yup.string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),

  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate()

  const handleSubmitForm = (e) => {
    navigate("/alredyaccount")

  }

  return (
    <section className="container mt-5 p-4 register-bgcolor">
      <div className="row">
        <div className="col-md-4 shadow text-center p-4 bg-white rounded reg-padding1">
          <div style={{ paddingTop: "20px" }}><h2>Register as</h2></div>
          <h2>Farmer</h2>
          <img style={{ paddingTop: "20px" }} src="img/farm.png" />
        </div>
        <div className="col-md-8 setwidth shadow p-4 bg-white rounded reg-padding1">
          <form onSubmit={handleSubmit(handleSubmitForm)} className="registration_form  ">
            <h2 className="text-center mb-4 text-dark">Farmer Registration</h2>
            <div className=" mb-3 fw-bold">Personal Information</div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Farmer Name</label>
                <input {...register("name")} className="form-control" placeholder="Full Name"
                />
                {
                  errors.name?.message &&
                  <p className="text-danger">{errors.name?.message}</p>
                }
              </div>
              <div className="col-md-6">
                <label className="form-label">Email ID</label>
                <input {...register("email")} className="form-control" placeholder="Email" />
                {
                  errors.email?.message &&
                  <p className="text-danger">{errors.email?.message}</p>
                }
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input {...register("password")} className="form-control" type="text" placeholder="Password"
                />
                {
                  errors.password?.message &&
                  <p className="text-danger">{errors.password?.message}</p>
                }
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input {...register("confirmPassword")} className="form-control" type="text" placeholder="Confirm Password" />
                {
                  errors.confirmPassword?.message &&
                  <p className="text-danger">{errors.confirmPassword?.message}</p>
                }
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Mobile no.</label>
                <input {...register("phone")} className="form-control" placeholder="0000000000" />
                {
                  errors.phone?.message &&
                  <p className="text-danger">{errors.phone?.message}</p>
                }
              </div>
              <div className="col-md-6">
                <label className="form-label">Father/Husband Name</label>
                <input className="form-control" type="text" placeholder="Full Name" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">State</label>
                <input className="form-control" type="text" value="Punjab" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">District</label>
                <input {...register("district")} className="form-control" type="text" placeholder="District" />
                {
                  errors.district?.message &&
                  <p className="text-danger">{errors.block?.message}</p>
                }
              </div>


            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Farmer Address</label>
                <input {...register("address")} className="form-control" type="text" placeholder="village" />
                {
                  errors.address?.message &&
                  <p className="text-danger">{errors.address?.message}</p>
                }
              </div>
              <div className="col-md-6">
                <label className="form-label">Block</label>
                <input {...register("address")} className="form-control" type="text" placeholder="Block" />
                {
                  errors.block?.message &&
                  <p className="text-danger">{errors.block?.message}</p>
                }
              </div>
            </div>



            <div className="ident_info mb-3 fw-bold">Identification Information</div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">ID Proof Type</label>
                <select className="form-control" >
                  <option value="adhar">Adhar card</option>
                  <option value="pan">Pan card</option>
                  <option value="voter">Voter card</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Scanned ID Proof</label>
                <input {...register("file")} className="form-control" type="file" />
                {
                  errors.file?.message &&
                  <p className="text-danger">{errors.file?.message}</p>
                }
              </div>
            </div>

            <div className="comman_div_button text-center">
              <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">Click here to Register</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default FarmerRegistration;


