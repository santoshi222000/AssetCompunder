import React from 'react'
import './sidebaradmin.css'
import logo from '../assets/Images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import ShopIcon from '@mui/icons-material/Shop';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DetailsIcon from '@mui/icons-material/Details';
import { Link } from 'react-router-dom';


function Sidebaradmin() {
  return (
    <div className='sidebaradmin'>
        <div className='innerdidebar'>
        <div className="logoadmin">
            <img src={logo} alt="" />
        </div>
        <div className='middle'>
         <Link to="/dashboard" style={{textDecoration: "none", color: "black"}}>
         <div>
                <DashboardIcon style={{width:"18px"}}/>
                <span>Dashboard</span>
            </div>
         </Link>
           <Link to="/user" style={{textDecoration: "none", color: "black"}}>
           <div>
                <PersonIcon style={{width:"18px"}}/>
                <span>User</span>
            </div>
           </Link>
            <Link to='/allCourses' style={{textDecoration: "none", color: "black"}}>
            <div>
                <SubjectIcon style={{width:"18px"}}/>
                <span>All Courses</span>
            </div>
            </Link>
            <Link to='/coursePurchase' style={{textDecoration: "none", color: "black"}}>
            <div>
                <ShopIcon style={{width:"18px"}}/>
                <span>Course Purchase</span>
            </div>
            </Link>
            <Link to='/addCourses' style={{textDecoration: "none", color: "black"}}>
            <div>
               <MenuBookIcon style={{width:"18px"}}/>
                <span>Add Courses</span>
            </div>
            </Link>
            <Link to='/delete' style={{textDecoration: "none", color: "black"}}>
            <div>
                <DeleteIcon style={{width:"18px"}}/>
                <span>Delete</span>
            </div>
            </Link>
            <Link to='/addCourseChapter' style={{textDecoration: "none", color: "black"}}>
            <div>
              <EditIcon style={{width:"18px"}}/>
                <span>Add Courses Content</span>
            </div>
            </Link>
           <Link to='/addTopic' style={{textDecoration: "none", color: "black"}}> 
           <div>
                <DetailsIcon style={{width:"18px"}}/>
                <span>Add Topic</span>
            </div>
           </Link>
        </div>
        <div className='downbutton'>
            <hr></hr>
            <button className="signbtn">Sign Up</button>
        </div>
        </div>
    </div>
  )
}   

export default Sidebaradmin
