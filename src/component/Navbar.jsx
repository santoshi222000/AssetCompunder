import React, { useContext, useState } from "react";
import logo from "../assets/Images/logo.png";
import close from "../assets/Images/close.png";
import menu from "../assets/Images/menu.png";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ReactRouterBootstrap, { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import {
  getcourse,
  getCourseDetailInBrief,
  loginCall,
} from "../services/api.js";
import "./navbar.css";
import styled from "styled-components";

import "../App.css";
import Burger from "./Burger";

const Ul = styled.ul`
  @media (max-width: 1026px) {
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    justify-content: flex-start;
    // background-color: #0d2538;
    transform: ${({ start }) => (start ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 155px;
    right: 0px;
    height: 100vh;
    width: 300px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: 1px solid black;
    transition: transform 0.3s ease-in-out;
    background-color: black;
    z-index: 999;
    padding-bottom: 80px;

    li a:hover {
      color: red;
    }

  }
`;

function Navbar({ start }) {
  const [isOpen, setIsOpen] = useState(false);

  const [course, setCourse] = useState([]);

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    let res = await getcourse();
    setCourse(res.data);
    // console.log();
  };

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <navbar className="navbarGo">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <Ul start={start}>
            {/* <img src={close} class="close" alt="" /> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="" onClick={() => setIsOpen((prev) => !prev)}>
                Courses {isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </Link>
            </li>

            {isOpen && (
              <div className="class">
                {course.map((item, i) => (
                  <div className="item">
                    <Link to={`/course2/${item._id}`}>
                      <p>{item.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            <li>
              <Link to="/group">Groups</Link>
            </li>
            <li>
              <Link to="career">Career</Link>
            </li>
          </Ul>
        </div>

        <div class="hamburger" id="hamburger" style={{ paddingRight: "80px" }}>
          {user ? (
            <NavDropdown title={user.userName} id="username">
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;
