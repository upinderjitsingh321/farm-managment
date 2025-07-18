import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function ContactUsForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/contact", data);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="form-control"
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              className="form-control"
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="form-control"
              rows="4"
            ></textarea>
            {errors.message && <small className="text-danger">{errors.message.message}</small>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
