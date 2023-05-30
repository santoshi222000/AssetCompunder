import React from 'react'
import './courseContent.css'
import AccordianContent from './AccordianContent'
import { courses } from './DummyData'
import { Params, useLocation, useParams } from "react-router-dom";
import {getCourseInfomation} from "../services/api.js";
import { useEffect, useState } from "react";


function CourseCotent() {

 
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
    <div className='courseContent'>
      <h2>Course Content</h2>
      <AccordianContent />
    </div>
  )
}

export default CourseCotent
