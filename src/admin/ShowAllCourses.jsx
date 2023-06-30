import React, { useState, useContext } from "react";
import "./showAllCourses.css";
import { useEffect } from "react";
import { getAllCourse, deleteCourse } from "../services/api.js";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ShowAllCourses() {
  const [course, setCourse] = useState([]);

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
  
    const token = user.accessToken
    console.log(token);
    let res = await getAllCourse();
    console.log(res);
    setCourse(res.data);
  };

  const deleteCourseDetails = async(id)=>{
    await deleteCourse(id);
    await  getAllCourses();

  }

  return (
    <div className="showallcourses">
      <h1>All Courses</h1>
      <Table striped bordered hover style={{marginTop: "50px"}}>
        <thead>
          <tr>
            <th className="td">Id</th>
            <th className="td">Course Name</th>
            <th className="td">Price Name</th>
          </tr>
        </thead>
        <tbody>
          {course.map((e, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="td">{e._id}</td>
                  <td className="td">{e.title}</td>
                  <td className="td">{e.price}</td>

                  <Link to={`/editCourse/${e._id}`}><button className="edit">Edit</button></Link>
                  
                  <button className="delete" onClick={()=>deleteCourseDetails(e._id)}>Delete</button>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowAllCourses;
