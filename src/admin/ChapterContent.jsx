import React, { useState } from "react";
import { useEffect } from "react";
import { getAllCourse, deleteCourse } from "../services/api.js";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function ChapterContent() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
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

                  <Link to={`/addContent/${e._id}`}><button className="edit">Add Chapter</button></Link>
                  
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



export default ChapterContent
