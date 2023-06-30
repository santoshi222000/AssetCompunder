import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import "../App.css";
import "./course1.css";
import b2 from "../assets/Images/b2.jpg";
import b1 from "../assets/Images/b1.jpg";
import b3 from "../assets/Images/b3.jpg";
import BriefInfo from "./BriefInfo";
import { Params, useLocation, useParams } from "react-router-dom";
import {getCourseInfomation} from "../services/api.js";
import axios from 'axios'

function Course1() {
  const info = "USDINR BEST 5 AGGRESSIVE STRATEGIES";

  const [user, setUser] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadcoursedeatil();
  }, [])

  const loadcoursedeatil = async () => {
    const loaddata = await getCourseInfomation(id)
    setUser(loaddata.data)
  }

  return (
    <div className="course1">
      <div className="sec-Course">
        <div className="box2">
          <BriefInfo  />
        </div>
        <div className=" box3">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/rgzphzmxeNc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Instructor: <span>Vikash kum Pandey</span></p>
        </div>
        <div className="box07">
          <BriefInfo  />
        </div>
      </div>
    </div>
  );
}

export default Course1;
