import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.css";
import axios from 'axios'

import { getCourseDetails } from "../services/api.js";
import { useEffect, useState } from "react";
import { Params, useLocation, useParams } from "react-router-dom";

export default function SimpleAccordion() {
  const [user, setUser] = useState([]);
  const [content, setContent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadcoursedeatil();
  }, []);

  const loadcoursedeatil = async () => {
    try {
      const loaddata =  await axios.get(`http://localhost:5001/api/content/course2/${id}`)
      setUser(loaddata.data);
      }
      
   catch (error) {
      console.log("something is wrong to get all course details", error);
  }
   
  };

  return (
    <div className="aacord" style={{ border: "1px solid rgba(0, 0, 0, 0.17)", marginRight: "50px" }}>
        {user.map((e) => { 
           return ( 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
            
              <div className="type">
                <Typography
                  style={{
                    color: "black",
                    fontSize: "0.9em",
                    fontWeight: "bold"
                  }}
                  className="chapterName"
                >
                  {e.content}
                </Typography>
              </div>
              
        </AccordionSummary>
         {e.topic.map((item)=>{
          return(
            <AccordionDetails>
            <Typography style={{ marginTop: "-10px", height: "30px"}}>
                <ul className="list" >
                <li>{item}</li>
              </ul>
            </Typography>
          </AccordionDetails>
          )
         })}  
        </Accordion>
        );
           })}
       
      
    </div>
  );
}
