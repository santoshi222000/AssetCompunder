import React from "react";
import "./banner01.css";
import long from "../assets/Images/longterm.jpg";

function Banner01() {
  return (
    <div className="banner01">
      <div className="leftBanner">
        <div>
          <img src={long} alt="" />
        </div>
      </div>
      <div className="rightBanner">
        <div>
          <p>
            Learn and Earn From <span>Stock Market</span>
          </p>
          <p>
            We've Got the tool to help you trade your way to{" "}
            <span>Success</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner01;
