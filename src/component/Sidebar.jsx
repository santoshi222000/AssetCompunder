import React from "react";
// import "../App.css";
import "./sidebar.css";
import fb from "../assets/Images/fb.png";
import insta from "../assets/Images/insta.png";
import pin from "../assets/Images/pin.png";
import utube from "../assets/Images/youtube.png";
import twitter from "../assets/Images/twitter.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sides">
      <div className="zoom-div">
        <div className="zoom-in-zoom-out">
        <Link to="https://www.facebook.com">
          {" "}
          <img src={fb} alt="" />
        </Link>
        </div>
       <div className="zoom-in-zoom-out">
       <Link to="https://www.instagram.com" className="insta">
          
            <img src={insta} alt="" />
          
        </Link>
       </div>
       <div className="zoom-in-zoom-out">
       <Link to="https://www.youtube.com/@AssetCompoundersAcademy">
            <img src={utube} alt="" />
          
        </Link>
       </div>
      </div>
    </div>
  );
}

export default Sidebar;
