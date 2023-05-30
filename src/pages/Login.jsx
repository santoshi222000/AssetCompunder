import React, { useContext, useRef, useState } from "react";
import "../App.css";
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

function Login() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const [admin, setAdmin] = useState(false);



  const handleClick = async (e) => {
    e.preventDefault();
    
    await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
    console.log(user);
    navigate('/admin/${user.user_id}')

  };

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div>
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
            <Link to="/resetpassword">
              <p>Forget Password</p>
            </Link>
            <div>
              <button className="login" type="submit" disabled={isFetching}>
                {isFetching ? <CircularProgress size="20px" /> : "Login"}
              </button>
            </div>

            <p className="para" style={{ textAlign: "center", color: "black" }}>
              Don't have an account, yet?{" "}
              <span onClick={navigateRegister} style={{ color: "blue" }}>
                Register
              </span>
            </p>
          </div>
        </form>
        <Upperfooter />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
