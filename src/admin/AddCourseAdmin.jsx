import React, { useState, useEffect, useContext } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./addCourseAdmin.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { addcourses,addCourseContent } from "../services/api";
import axios from 'axios';
import { Params, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";

function AllCourseAdmin() {

  const defaultaDta = {
    title: "",
    description: "",
    price: "",
    timing: "",
    heading: "",
    duration: "",
    start: "",
    classes:"",
    overview: "",
    facility: "",
    content: "",
    topic: []
  }

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const [file, setFile] = useState("");
  const [users, setUsers] = useState(defaultaDta);

  const { id } = useParams();

  // useEffect(() => {
  //   loadcoursedeatil();
  // }, [id])

  // const loadcoursedeatil = async () => {
  //   const loaddata = await addCourseContent(id)
  //   console.log(loaddata);
  //   setUser(loaddata.data)
  // }


  const onChangeData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  // const imageUpload =(e)=>{
  //   setUser({...user,img: e.target.files[0]})
  // }

  const handleOnClick = async (e) => {
    e.preventDefault();
    if(file){
      const data = new FormData();
      const fileName = file.name;
      data.append("file", file);
      data.append("name", fileName);
      users.img = fileName;
    
    try {
      await axios.post("http://localhost:5001/api/upload", data)
    } catch (error) {
      console.log(error);
    }
  }
    try {
       await axios.post(`http://localhost:5001/api/route/addcourses`, user, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': user.token
      }
       });
      toast.success('Course add Successfully');
      setUsers({})
   } catch (error) {
    toast.warn('Something went Wrong');
   }
  }

  return (
    <div className="allCourseAdmin">
      <h2>Add Courses</h2>
      <div className="allCourses">
        <div style={{ width: "100px", height: "100px", borderRadius: "50%", position: "relative", top: "-200px" }} className="leftImg">
          <img style={{ width: "100%", height: "100%" }}

            src={file ? URL.createObjectURL(file) : "https://t3.ftcdn.net/jpg/01/12/21/18/240_F_112211801_Feb3Q3mr3CxQgKai4WIIE4NhdkwMfIWl.jpg"}
            alt=""
          />
        </div>
        <div className="rightForm">
          <form action="">
            <div>
              Image :{" "}
              <label htmlFor="file">
                <DriveFolderUploadIcon />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e)=>setFile(e.target.files[0])}
                accept=".png, .jpeg, .jpg"
                style={{ display: "none" }}
              />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Title
              </label>
              <input type="text" placeholder="xyz" name="title" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Description
              </label>
              <input type="text" placeholder="This is Course for..." name="description" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Price
              </label>
              <input type="number" placeholder="eg : 5000" name="price" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Timing
              </label>
              <input type="text" placeholder="eg : 10" name="timing" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Heading
              </label>
              <input type="text" placeholder="Heading" name="heading" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Duration
              </label>
              <input type="text" placeholder="eg : 5 months" name="duration" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Start Date
              </label>
              <input type="text" placeholder="eg : 23rd April" name="start" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Classes
              </label>
              <input type="text" placeholder="eg : 10 hr" name="classes" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Overview
              </label>
              <input type="text" placeholder="This course are based on...." name="overview" onChange={(e) => onChangeData(e)} />
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Facilities
              </label>
              <input type="text" placeholder="Internet " name="facility" onChange={(e) => onChangeData(e)} />
            </div>

            <button className="sendbtn" onClick={handleOnClick}>Add</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AllCourseAdmin;
