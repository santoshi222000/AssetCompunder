import React, {useContext, useEffect, useState } from 'react'
import {getAdminType} from "../services/api.js";
import {  useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'
import Dashboard from '../adminPages/Dashboard.jsx';
import Home from '../pages/Home.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {message } from  'antd'

function AdminAccess() {

    const [userData, setUserData]  = useState()
    const [admin, setAdmin]  = useState(false)

    const id = useParams();


    const {user, isFetching, error, dispatch} = useContext(AuthContext)
   
  const navigate = useNavigate()

    useEffect(()=>{
      getAdmin();
    }, [])

    const getAdmin = ()=>{

        try {
            if(user.userType=="Admin"){
                setAdmin(true);
              }
        } catch (error) {
                // message.warning('Login Again')
                toast("Login Again")
              
        }
     
    }



  return (
    <div>
       {admin ? <Dashboard/>: <Home/>}
       <ToastContainer/>
      
    </div>
  )
}

export default AdminAccess
