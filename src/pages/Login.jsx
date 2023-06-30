import React, { useContext, useRef, useState } from "react";
// import "../App.css";
import "./login.css";
import Upperfooter from "../component/Upperfooter";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { loginCall } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import Burger from "../component/Burger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {message } from  'antd'
import Sidebar from "../component/Sidebar";
// import { useDispatch } from 'react-redux';
import Userboard from "../admin/Userboard";

function Login() {

  // const disptach = useDispatch()
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);



  const handleClick = async (e) => {
    e.preventDefault();
    

    try {
      await loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      )
       toast.success('Login Successful');
    } catch (error) {
      toast.warn('Login Failed');
    }
   
     navigate('/admin')

  };

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <Sidebar />
      <Burger />
      <div className="register">
        <form class="form" onSubmit={handleClick}>
          <h2>Login</h2>
          <div class="form-details">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              ref={email}
            />
            <input
              type="password"
              minLength="9"
              placeholder="password"
              required
              name="password"
              ref={password}
            />
            <div>
              <button class="button-50" role="button" type="submit" disabled={isFetching}>
                {isFetching ? <CircularProgress size="20px" /> : "Login"}
              </button>
           
            </div>

            <p className="para1" style={{ textAlign: "center", color: "black", fontSize: "12px" }}>
              Don't have an account, yet?{" "}
              <span onClick={navigateRegister} style={{ color: "blue", cursor: "pointer" }}>
                Register
              </span>
            </p>
          </div>
        </form>
        <Upperfooter />
        <Footer />
        {/* <ToastContainer/> */}
      </div>
    
    </div>
  );
}

export default Login;
