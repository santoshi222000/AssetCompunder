import React from "react";
import "../App.css";
import { getCourseInfomation } from "../services/api.js";
import { useEffect, useState } from "react";
import { Params, useLocation, useParams } from "react-router-dom";

function BriefInfo() {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadcoursedeatil();
  }, []);

  const loadcoursedeatil = async () => {
    const loaddata = await getCourseInfomation(id);
    setUser(loaddata.data);
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
            <p className="fee">{e.price}</p>
            <p className="fee">{e.start}</p>
            <button className="btn">Enroll Now</button>
          </div>
        );
      })}
    </div>
  );
}

export default BriefInfo;
