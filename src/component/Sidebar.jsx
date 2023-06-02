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
      <div>
        <Link to="https://www.facebook.com">
          {" "}
          <img src={fb} alt="" />
        </Link>
        <Link to="https://www.instagram.com" className="insta">
          <Link>
            <img src={insta} alt="" />
          </Link>
        </Link>
        <Link to="https://www.youtube.com/@AssetCompoundersAcademy">
          <Link>
            <img src={utube} alt="" />
          </Link>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
