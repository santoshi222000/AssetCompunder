import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      return await axios.put(`http://localhost:5001/api/content/topic/${id}`, user)
   } catch (error) {
       console.log("are u not able to add data", error);
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
      </div>
  )
}

export default Topic
