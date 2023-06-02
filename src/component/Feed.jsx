import React from "react";
import NavbarBottom from "./NavbarBottom";
import Slider from "../component/Slider";
import About from "../component/About";
import AboutCourse from "../component/AboutCourse";
import Upperfooter from "../component/Upperfooter";
import Footer from "../component/Footer";
import "./feed.css";


function Feed() {
 
    const title = "Explore our popular courses";
    const heading = "Courses";

  return (
    <div className="feed">
      <NavbarBottom />
      <Slider />
      <About />
      <AboutCourse title={title} heading={heading} />
      <Upperfooter />
      <Footer />
    </div>
  );
}

export default Feed;
