import React from "react";
// import "../App.css";
import "./briefinfo.css";
import { getCourseInfomation } from "../services/api.js";
import { useEffect, useState } from "react";
import { Params, useLocation, useParams } from "react-router-dom";
import axios from 'axios'

function BriefInfo() {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadcoursedeatil();
  }, []);

  const loadcoursedeatil = async () => {
    try {
      const loaddata =  await axios.get(`http://localhost:5001/api/route/course2/${id}`)
      console.log(loaddata);
      setUser(loaddata.data);
      }
      
   catch (error) {
      console.log("course is not get", error);
  }
    // console.log(user.heading);
  };

  return (
    <div className="brief">
      {user.map((e) => {
        return (
          <div>
            <h2>
              {console.log(e.heading)}
              {e.heading}
            </h2>
            <p className="desc">
              This course is Provided by Asset Compounder Academy
            </p>
            <p className="info">{e.description}</p>
            <p className="fee">{e.amount}</p>
        <p className="fee">{e.start}</p>
           <button class="button-50" role="button">Enroll Now</button>
          </div>
         )
        })}
      {/* <div>
        <h2>usdinr</h2>
        <p className="desc">
          This course is Provided by Asset Compounder Academy
        </p>
        <p className="info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          alias vero vitae laudantium atque debitis architecto! Officia
          reiciendis suscipit quos quam laudantium est.
        </p>
        <p className="fee">Amount: 7999</p>
        <p className="fee">Start: monday</p>
        <button class="button-50" role="button">
          Enroll Now
        </button>
      </div> */}
    </div>
  );
}

export default BriefInfo;
