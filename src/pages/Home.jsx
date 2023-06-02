import React from "react";
import Feed from "../component/Feed";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Burger from "../component/Burger";
import "../App.css";

function Home() {
  return (
    <div>
      <Sidebar />
      <Burger />
      <Feed />
    </div>
  );
}

export default Home;
