import React, { useRef, useState } from "react";
// import "../App.css";
import "./register.css";
import Upperfooter from "../component/Upperfooter";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Burger from "../component/Burger";
import Sidebar from "../component/Sidebar";

function Register() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("");
  const [secretkey, setSecretkey] = useState("");

  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const cpassword = useRef();

  const handleClick = async (e) => {
    if (userType == "Admin" && secretkey != "santoshi") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      if (cpassword.current.value !== password.current.value) {
        console.log(cpassword.current.value);
        console.log(password.current.value);
        console.log(userType);
        cpassword.current.setCustomValidity("Password don't match!");
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          phone: phone.current.value,
          password: password.current.value,
          userType: userType,
        };

        console.log(userType);
        try {
          await axios.post("/api/user/register", user);
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const navigateRegister = () => {
    navigate("/login");
  };


  return (
    <div className="register">
        <Sidebar />
      <Burger />
      <div class="forms">
          <h2>Register</h2>
          <div>
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            User
            <input
              style={{ marginLeft: "20px" }}
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Admin
          </div>
          <form class="form-input" onSubmit={handleClick}>
            {userType == "Admin" ? (
              <input
                type="text"
                placeholder="Secret key"
                onChange={(e) => setSecretkey(e.target.value)}
              />
            ) : null}

            <input type="name" placeholder="Username" ref={username} required />
            <input type="email" placeholder="E-mail" ref={email} required />
            <input
              type="number"
              maxLength="10"
              minLength="10"
              placeholder="Phone Number"
              ref={phone}
              required
            />
            <input
              type="password"
              minLength="9"
              placeholder="password"
              ref={password}
              autocomplete="new-password"
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              ref={cpassword}
              autocomplete="new-password"
              required
            />
            <div className="register-btn">
              <button  type="submit">Register</button>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>

            <p className="para" style={{ textAlign: "center", color: "black" }}>
              Already, Account? 
              <span onClick={navigateRegister} style={{ color: "blue", cursor: "pointer" }}>
                Login
              </span>
            </p>
          </form>

        </div>
      <Upperfooter />
      <Footer />
    </div>
  );
}

export default Register;
