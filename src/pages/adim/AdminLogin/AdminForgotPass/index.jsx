import React, { useState } from "react";

function AdminForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Forgot Password?</h2>
      <p>Enter your email, and we will send you a link to reset your password.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default AdminForgotPassword;
