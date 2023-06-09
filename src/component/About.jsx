import React from "react";
import girl from "../assets/Images/300 PX.png";
import group from "../assets/Images/400 PX.png";
import instructor from "../assets/Images/instructor.webp";
import courselogo from "../assets/Images/courselogo.jpg";
// import "../App.css";
import "./about.css";

function About() {
  return (
    <div className="main">
      <div className="containerr">
        <div className="div " id="dives">
          <div className="gp">
          <img className="group" src={group} alt="" />
          </div>
          <div className="gp1">
          <img className="girl" src={girl} alt="" />
          </div>
         
        </div>
        <div className="div" id="driven">
          <h3>ABOUT US</h3>
          <h2>Welcome to Asset Compounder</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            sint mollitia itaque debitis molestias sit cum illo aliquam pariatur
            similique animi doloremque et tempore modi,
            <div className="div1">
              <img src={instructor} alt="" />
              <div>
                <h4>Best Quality Course</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, saepe!
                </p>
              </div>
            </div>
            <div className="div1">
              <img src={courselogo} alt="" />
              <div>
                <h4>Best expert Instructor</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, saepe!
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
