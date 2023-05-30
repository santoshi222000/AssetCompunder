import React from 'react'
import Sidebar from "../component/Sidebar";
import Navbar from '../component/Navbar';
import Groups from '../component/Groups';
import Burger from '../component/Burger';


function Group() {
  return (
    <div>
      <Burger/>
      <div className="containers">
        <Sidebar/>
        <Groups/>
      </div>
    </div>
  )
}

export default Group
