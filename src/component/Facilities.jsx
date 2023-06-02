import React from 'react'
import './facilities.css'
import ReadMore from './ReadMore'
// import ReadMoreReact from 'read-more-react';
// import ReactReadMoreReadLess from "react-read-more-read-less";
import { Params, useParams } from "react-router-dom";
import {getCourseDetails} from "../services/api.js";
import { useEffect, useState } from "react";


function Facilities() {


 

  return (
    <div  className='facility'>
      <h2>Facilities</h2>
      <ReadMore/>
    </div>
  )
}

export default Facilities
