import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import ShopIcon from '@mui/icons-material/Shop';

import "./upperboard.css"
import { Link } from 'react-router-dom';

function Upperboard() {
  return (
    <div className='upperboard'>
      <div className="boxed" id='boxed'>
      <PersonIcon style={{width:"40px" , height:"40px"}}/>
       <Link to='/user' style={{textDecoration: "none", color: "black"}}> <span style={{marginLeft: "5px" , cursor: "pointer"}}>User</span></Link>
      </div>
      <div className="boxed" id='boxed2'>
      <SubjectIcon style={{width:"40px" , height:"40px"}}/>
        <Link to='/allCourses' style={{textDecoration: "none", color: "black"}}><span style={{marginLeft: "5px", cursor: "pointer"}}>Courses</span></Link>
      </div>
      <div className="boxed" id='boxed3'>
      <ShopIcon style={{width:"40px" , height:"40px"}}/>
        <Link to='/coursePurchase' style={{textDecoration: "none", color: "black"}} ><span style={{cursor: "pointer"}}>Purchase</span></Link>
      </div>
    </div>
  )
}

export default Upperboard
