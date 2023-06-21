import React from "react";
import "./faqs.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordianContent from "./AccordianContent";
import { useEffect, useState } from "react";
import {faqs} from "./DummyData";

function Faqs() {
  const [user, setUser] = useState(faqs);


  return (
    <div className="faqs">
      <h2>Frequently Ask Question</h2>
      <div className="qusetion" style={{ border: "1px solid rgba(0, 0, 0, 0.17)" }}>
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
                      fontWeight: "bold",
                    }}
                    className="chapterName"
                  >
                    {e.ques}
                  </Typography>
                </div>
              </AccordionSummary>
              {/* {e.topic.map((item) => {
                return (
                  <AccordionDetails>
                    <Typography style={{ marginTop: "-10px", height: "30px" }}>
                      <ul className="list">
                        <li>{item}</li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                );
              })} */}
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
