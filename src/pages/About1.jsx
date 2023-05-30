import React from "react";
import AboutFeed from "../component/AboutFeed";
import Sidebar from "../component/Sidebar";
import Navbar from '../component/Navbar';
import Burger from "../component/Burger";

function About1() {
  return (
    <div>
      <Burger/>
      <div className="containers">
        <Sidebar/>
        <AboutFeed/>
      </div>
    </div>
  );
}

export default About1;
