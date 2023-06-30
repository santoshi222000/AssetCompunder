import React from "react";
import fb from "../assets/Images/fb.png";
import insta from "../assets/Images/insta.png";
import pin from "../assets/Images/pin.png";
import utube from "../assets/Images/youtube.png";
import twitter from "../assets/Images/twitter.png";
import logo from "../assets/Images/logo.png";
import "../App.css";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {

  
  

  return (
    <div className="down">
      <div className="footer">
        <div className="left-box">
          <img src={logo} alt="" className="footer-logo" />
          <h3>Contact</h3>
          <h4>
            <span> Address:</span>
          </h4>
          <span className="span">
            562 Wellington Road Street 32. San Francisco
          </span>
          <h4>
            <span> Phone:</span>
          </h4>
          <span className="span">+012222365/(+91)01 2345 6789</span>
          <br />
          <h4>
            <span>House:</span>
          </h4>
          <span className="span">10:00 - 18:00. Mon - Sat</span>
          <br />
          <h4 id="heading">Follow Us</h4>
        </div>

        <div class="middle-left">
          <h3>About</h3>
          <Link to="/about" style={{textDecoration: "none", color: "black"}}><p>About Us</p></Link>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <Link to='/group' style={{textDecoration: "none", color: "black"}}> <p>FAQs</p></Link>
          <Link to='/'  style={{textDecoration: "none", color: "black"}}><p>Courses</p></Link>
          <p>Reviews</p>
        </div>

        <div className="right">

         <Link to="https://www.facebook.com"> <img src={fb} alt="" /></Link>
          <Link to="https://www.instagram.com"><img src={insta} alt="" /></Link>
          <Link to="https://www.youtube.com/@AssetCompoundersAcademy"><img src={utube} alt="" /></Link>
        </div>
      </div>
      <hr />
      <hr />
      <p className="para2">Copyright @ assetcompounderacademy. All rights reserved</p>
    </div>
  );
}

export default Footer;
