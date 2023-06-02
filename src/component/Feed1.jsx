import React from 'react'
import Course1 from './Course1'
import Bar from "./Bar";
import Accordian from './Accordian';
import Overview from './Overview';
import AboutCourse from "./AboutCourse";
// import "../App.css";
import "./feed1.css";
import CourseCotent from './CourseCotent';
import Facilities from './Facilities';
import Faqs from './Faqs';
import Upperfooter from "../component/Upperfooter";
import Footer from "../component/Footer";
import { Params, useLocation, useParams } from "react-router-dom";

function Feed1() {

  // const location = useLocation()
  // console.log(location);


  const title = "More Courses You might Like";
  const heading = "Courses"
  
  return (
    <div className='feed1'>
      <Course1/>
      <Bar/>
      <Overview/>
      <CourseCotent/>
      <Facilities/>
      <Faqs/>
      <Upperfooter />
      <Footer />
    </div>
  )
}

export default Feed1
