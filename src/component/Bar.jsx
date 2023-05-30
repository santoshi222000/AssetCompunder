import React from "react";
import "../App.css";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import StartIcon from "@mui/icons-material/Start";
import ClassIcon from "@mui/icons-material/Class";
import { Params, useParams } from "react-router-dom";
import { getCourseInfomation } from "../services/api.js";
import { useEffect, useState } from "react";

function Bar() {
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
    <div>
      <div className="bar">
        {user.map((user) => {
          return (
            <div>
              <div className="barleft bardev">
                <TimelapseIcon style={{ marginLeft: "30px", color: "black" }} />
                <span style={{ marginRight: "40px" }}>
                  Duration <br /> {user.duration}
                </span>
              </div>
              <div className="thin bardev">
                <StartIcon style={{ marginLeft: "30px", color: "black" }} />
                <span style={{ marginRight: "40px" }}>
                  Start <br /> {user.start}{" "}
                </span>
              </div>
              <div className="bardev">
                <ClassIcon style={{ marginLeft: "30px", color: "black" }} />
                <span style={{ marginRight: "40px" }}>
                  Classes <br />
                  {user.classes}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bar;
