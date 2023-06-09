import React, { useState , useContext} from "react";
// import "../App.css";
import "./aboutCourse.css";
import { Link } from "react-router-dom";
// import {course} from "./DummyData"
import Courses2 from "../pages/Courses2";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  getcourse,
  getCourseDetailInBrief,
  loginCall,
} from "../services/api.js";

function AboutCourse(props) {
  const [course, setCourse] = useState([]);

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

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
      <div className="course-find">
        <h2 className="h2">COURSES</h2>
        <h4 className="h4">Explore Our Popular Courses</h4>
      </div>
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
                  {/* <button class="buttonbtn" >
                    Explore More
                  </button> */}
                  <button class="button-20" role= "button" >
                    Explore More
                  </button>
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
