import React, {useEffect, useState}from "react";
import { editCourse,editcourseDetail } from "../services/api";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditCourseDetail() {

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
    
  const {id} = useParams();

  const navigate = useNavigate

  const [user, setUser] = useState(defaultaDta);
  const [file, setFile] = useState("");

  const onChangeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
     loadStudent();
  }, [])

  const loadStudent = async ()=>{
    const res =  await editCourse(id);
    setUser(res.data);
  }

  const handleOnClick = async ()=>{
    // if(file){
    //   const data = new FormData();
    //   const fileName = file.name;
    //   data.append("file", file);
    //   data.append("name", fileName);
    //   user.img = fileName;
    // }
    
      await  editcourseDetail(user, id);
      toast.success("Successfully Add")
      navigate("/allcourses")
  // }

  }
  return (
    <div className="allCourseAdmin">
      <h2>Edit Courses</h2>
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
              <input type="text" placeholder="xyz" name="title" onChange={(e) => onChangeData(e)} value={user.title}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Description
              </label>
              <input type="text" placeholder="This is Course for..." name="description" onChange={(e) => onChangeData(e)} value={user.description}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Price
              </label>
              <input type="number" placeholder="eg : 5000" name="price" onChange={(e) => onChangeData(e)} value={user.price}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Timing
              </label>
              <input type="text" placeholder="eg : 10" name="timing" onChange={(e) => onChangeData(e)} value={user.timing}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Heading
              </label>
              <input type="text" placeholder="Heading" name="heading" onChange={(e) => onChangeData(e)} value={user.heading}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Duration
              </label>
              <input type="text" placeholder="eg : 5 months" name="duration" onChange={(e) => onChangeData(e)} value={user.duration}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Start Date
              </label>
              <input type="text" placeholder="eg : 23rd April" name="start" onChange={(e) => onChangeData(e)} value={user.start}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Classes
              </label>
              <input type="text" placeholder="eg : 10 hr" name="classes" onChange={(e) => onChangeData(e)} value={user.classes}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Overview
              </label>
              <input type="text" placeholder="This course are based on...." name="overview" onChange={(e) => onChangeData(e)} value={user.overview}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Course Content
              </label>
              <input type="text" placeholder="Know More" name="content" onChange={(e) => onChangeData(e)} value={user.content}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Chapter Topic
              </label>
              <input type="text" placeholder="Topic" name="topic" onChange={(e) => onChangeData(e)} value={user.topic}/>
            </div>
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Facilities
              </label>
              <input type="text" placeholder="Internet " name="facility" onChange={(e) => onChangeData(e)} value={user.facility}/>
            </div>

            <button className="sendbtn" onClick={handleOnClick}>Edit</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}


export default EditCourseDetail;
