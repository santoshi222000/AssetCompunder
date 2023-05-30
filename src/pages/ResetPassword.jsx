import React, { useContext, useRef, useState } from "react";
import "../App.css";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from 'axios'
import {changePassword } from "../services/api";

function Login() {
  const email = useRef();


  const changePassword = async () => {
    // try {
    //   let url = "http://localhost:5001/api/otp/emailSend";
    //   let options = {
    //     method: "POST",
    //     url: url,
    //     data: { email: email.current.value },
    //   };

    //   console.log(options);

    //   let response = await axios(options);
    //   let record = response.data;
    //   console.log(record);
    //   if (record.statusText == "Success") {
    //     console.log(record.message);
    //   } else {
    //     console.log(record.message);

    //   }
    // } catch (error) {
    //   console.log("error while getting the course", error);
    // }

    
    await changePassword();
  }
  

  return (
    <div>
      <div className="register">
        <form
          
          class="form"
          style={{ minHeight: "280px", marginTop: "300px" }}
        >
          <h2>Reset Password</h2>
          <div class="form-details">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              ref={email}
            />
            <div>
              <button className="login" onClick={changePassword}>
                Send OTP
              </button>
              <Link to="/login">
                {" "}
                <button className="login">Back</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
