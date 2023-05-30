import React, { useState, useEffect } from "react";
import "./addContent.css";
import { editCourse,addCourseContent } from "../services/api";
import axios from 'axios';
import { Params, useNavigate, useParams } from "react-router-dom";
import Sidebaradmin from "./Sidebaradmin";

function AddContent() {

 
  const navigate = useNavigate();

  const { id } = useParams();

  const defaultaDta = {
    content: "",
    course : "",
  }

  
  const [user, setUser] = useState(defaultaDta);

  const onChangeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      return await axios.post(`http://localhost:5001/api/route/addContent/${id}`, user)
   } catch (error) {
       console.log("are u not able to add data", error);
   }
  }

  return (
    <>
    
    <div className="addContent">
      <h2>Add Content</h2>
     
        <div className="contentForm">
          <form action="">
            {/* <div>
              <label htmlFor="" style={{ display: "block" }}>
                Course 
              </label>
              <input type="text" placeholder="Know More" name="title" onChange={(e) => onChangeData(e)} />
            </div> */}
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Chapter
              </label>
              <input type="text" placeholder="Topic" name="content" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
              course
              </label>
              <input type="text" placeholder="Internet " name="course" onChange={(e) => onChangeData(e)} />
            </div>

            <button className="sendbtn" onClick={handleOnClick}>Add</button>
          </form>
      </div>
      </div>
      </>
  )
  }

export default AddContent;
