import React, { useState, useEffect , useContext} from "react";
import "./addContent.css";
import { editCourse,addCourseContent } from "../services/api";
import axios from 'axios';
import { Params, useNavigate, useParams } from "react-router-dom";
import Sidebaradmin from "./Sidebaradmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";

function AddContent() {

 
  const navigate = useNavigate();

  const { id } = useParams();

  const defaultaDta = {
    content: "",
    course : "",
  }

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const [users, setUsers] = useState(defaultaDta);

  const onChangeData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
     await axios.post(`http://localhost:5001/api/content/addContent/${id}`, users)
      toast.success("Successfully Add")
   } catch (error) {
      toast.warn("Something went Wrong")
   }
  }

  return (
    <>
    
    <div className="addContent">
      <h2>Add Content</h2>
     
        <div className="contentForm">
          <form action="">
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
      <ToastContainer/>
      </>
  )
  }

export default AddContent;
