import React from 'react'
import Sidebar from "../component/Sidebar"
import Feed1 from '../component/Feed1'
import Navbar from '../component/Navbar';
import Burger from '../component/Burger';

function Courses2() {
  return (
    <div>
      <Burger/>
      <div className="containers">
      <Sidebar/>
      <Feed1/>
      </div>
    </div>
  );
}

export default Courses2
