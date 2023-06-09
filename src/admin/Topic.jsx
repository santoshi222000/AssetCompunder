import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Topic() {

    
  const { id } = useParams();

  const defaultaDta = {
    topic: "",
  }

  
  const [user, setUser] = useState(defaultaDta);

  const onChangeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
   await axios.put(`http://localhost:5001/api/content/topic/${id}`, user)
      toast.success("Successfully Add")
   } catch (error) {
    toast.warn("Something went Wrong")
   }
  }


  return (
       
    <div className="addContent">
      <h2>Add Topic</h2>
     
        <div className="contentForm">
          <form action="">
            <div>
              <label htmlFor="" style={{ display: "block" }}>
                Topic
              </label>
              <input type="text" placeholder="Topic" name="topic" onChange={(e) => onChangeData(e)} />
            </div>

            <button className="sendbtn" onClick={handleOnClick}>Add</button>
          </form>
      </div>
      <ToastContainer/>
      </div>
  )
}

export default Topic
