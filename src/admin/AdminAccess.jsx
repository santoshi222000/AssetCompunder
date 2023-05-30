import React, {useContext, useEffect, useState } from 'react'
import {getAdminType} from "../services/api.js";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'
import Dashboard from '../adminPages/Dashboard.jsx';
import Home from '../pages/Home.jsx';

function AdminAccess() {

    const [userData, setUserData]  = useState()
    const [admin, setAdmin]  = useState(false)


    const {user, isFetching, error, dispatch} = useContext(AuthContext)
   
  const navigate = useNavigate()

    useEffect(()=>{
       getuserType();
        
    }, [])

    const getuserType = async ()=>{

      return await axios.post(`http://localhost:5001/api/user/userData`, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'authorization':  'Bearer' +  token
      // }
      })
    }

 



  return (
    <div>
       {admin ? <Dashboard/>: <Home/>}
       
    </div>
  )
}

export default AdminAccess
