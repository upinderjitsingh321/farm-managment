import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { USER } from "../../config/endpoints";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const { token } = useParams();
  const VerifyUserEmail = async (token) => {
    try {
      let payload = {
        token: token,
      };
      const res = await axios.post(`${USER.VERIFY_EMAIL}`, payload);
      console.log(res, "wait");
      if (res.status == "200") {
        navigate("/alredyaccount");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    VerifyUserEmail(token);
  }, [token]);

  console.log(token, "tokenenen");
  return (
    <div className="h-500">
      <p>Email verification</p>
      {/*       
      <button type='submit'>Click here to verify </button> */}
    </div>
  );
};

export default VerifyEmail;
