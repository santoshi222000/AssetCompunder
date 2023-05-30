import React, { useState } from "react";
import { useEffect } from "react";
import { getCourseChapterTopic, deleteCourse } from "../services/api.js";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Sidebaradmin from '../admin/Sidebaradmin'

function AddCourseChapterTopic() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    let res = await getCourseChapterTopic();
    console.log(res);
    setCourse(res.data);
  };


  return (
    <div className="showallcourses">
      <h1>All Chapter</h1>
      <Table striped bordered hover style={{marginTop: "50px"}}>
        <thead>
          <tr>
            <th className="td">Course_Id</th>
            <th className="td">Chapter_Id</th>
            <th className="td">Course</th>
            <th className="td">Chapter</th>
          </tr>
        </thead>
        <tbody>
          {course.map((e, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="td">{e._id}</td>
                  <td className="td">{e.userId}</td>
                  <td className="td">{e.course}</td>
                  <td className="td">{e.content}</td>

                  <Link to={`/topic/${e._id}`}><button className="edit">Add Topic</button></Link>
                  
                  {/* <button className="delete" onClick={()=>deleteCourseDetails(e._id)}>Delete</button>
                  <Link to={`/AddCourseChapterTopic/${e._id}`}><button className="add" >ADD</button></Link> */}
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}



export default AddCourseChapterTopic
