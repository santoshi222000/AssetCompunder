import React, { useState } from "react";
// import usdinr from "../Images/usdinr.jpg";
// import st from "../Images/short term.jpg";
// import lt from "../Images/longterm.jpg";
// import stock from "../Images/stock market.jpg";
// import algo from "../Images/algo.jpg";
// import xyz from "../Images/xyz.png";
// import echnical from "../Images/echnical any.jpg";
// import data from "../Images/data enter.jpg";
import "../App.css";
import { Link } from "react-router-dom";
// import {course} from "./DummyData"
import Courses2 from "../pages/Courses2";
import { useEffect } from "react";
import {
  getcourse,
  getCourseDetailInBrief,
  loginCall,
} from "../services/api.js";

function AboutCourse(props) {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    let res = await getcourse();
    setCourse(res.data);
    console.log(course);
    // console.log();
  };

  return (
    <div className="cont1">
      <h3>{props.heading}</h3>
      <h2>{props.title}</h2>

      <div className="explore-Courses">
        <div className="explore">
          {course.map((e) => (
            <div className="boxes" id="boxes" key={e.id}>
              <div className="course-img">
                <img src={`http://localhost:5001/images/${e.img}`} />
              </div>
              <div className="main-content" key={e.id}>
                <h4 className="courseName">{e.title}</h4>
                <p>{e.description}</p>
                <div className="prices">
                  <h4>Rs. {e.price}</h4>
                  <p> {e.timing}</p>
                </div>

                <Link to={`/course2/${e._id}`}>
                  <button>Explore More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCourse;
