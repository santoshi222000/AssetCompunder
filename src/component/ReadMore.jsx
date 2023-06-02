import React, { useState } from "react";
import './readMore.css'

import { getCourseInfomation } from "../services/api.js";
import { useEffect} from "react";
import { Params, useLocation, useParams } from "react-router-dom";

function ReadMoreLess() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };


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
    <div className="card">
      <p>
       <ul style={{listStyleType:"circle"}}>
        <li>What is the problem</li>
        <li>What is the problem</li>
        <li>What is the problem</li>
        <li>What is the problem</li>
       </ul>
      </p>
      {isShowMore && (
        <p style={{marginTop:"-30px"}}>
         <ul  style={{listStyleType:"circle"}}>
        <li>What is the problem</li>
        <li>What is the problem</li>
        <li>What is the problem</li>
        <li>What is the problem</li>
       </ul>
        </p>
      )}

      <button className="readmore" onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreLess;