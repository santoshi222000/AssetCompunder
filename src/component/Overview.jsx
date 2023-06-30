import React from "react";
import "./overview.css";
// import usd from "../assets/Images/USDNIR.webp";
import b2 from "../assets/Images/b2.jpg";
import { Params, useParams } from "react-router-dom";
import { getCourseInfomation } from "../services/api.js";
import { useEffect, useState } from "react";

function Overview() {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadcoursedeatil();
  }, []);

  const loadcoursedeatil = async () => {
    const loaddata = await getCourseInfomation(id);
    setUser(loaddata.data);
  };

  return (
    <div className="view">
      {user.map((user) => {
        return (
          <div>
            <div className="sidebar" key={user._id}>
              <div className="customPic">
                <img src={b2} alt="" />
              </div>
              <div className="overview">
                <h1>Overview</h1>
                <p>{user.overview}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
