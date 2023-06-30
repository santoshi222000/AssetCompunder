import React from "react";
import "./groups.css";
import group from "../assets/Images/socialMedia.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Upperfooter from "../component/Upperfooter";
import Footer from "../component/Footer";
import Faqs from "./Faqs";

function Groups() {
  return (
    <div className="groups">
      <div className="groupImg">
        <img src={group} alt="" />
      </div>
      <div className="choose">
        <h1>WHY CHOOSE US ?</h1>
        <ul>
          <li>More than 95% accuracy in USDINR Analysis.</li>
          <li>
            12 Years of Experience in Algo, Derivatives, Currency trading and
            Investment.
          </li>
          <li>12 - 16 Premium Strategies/Month</li>

          <h4> REGISTRATION FEE: Rs.2100</h4>
          <button>Join Now</button>
        </ul>
      </div>
      <Faqs/>

      <Upperfooter />
      <Footer />
    </div>
  );
}

export default Groups;
