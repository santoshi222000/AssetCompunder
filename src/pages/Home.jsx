import React from "react";
import Feed from "../component/Feed";
import Sidebar from "../component/Sidebar";
import Navbar from '../component/Navbar';
import Burger from "../component/Burger";

function Home() {


  return (
    <div>
      <Burger/>
      <div className="containers">
      <Sidebar/>
      <Feed/>
      </div>
     
    </div>
  );
}

export default Home;
