import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

const URL = "http://localhost:5001";


const getAxiosHeader = (token) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + token
        }
    }
}

export const addcourses = async(data)=>{

    console.log(data);
    
    try {
       return await axios.post(`${URL}/api/route/addcourses`, data)
    } catch (error) {
        console.log("are u not able to add data", error);
    }
}

export  const getcourse = async ()=>{
   try{
       return await axios.get(`${URL}/api/route/`); 
   }catch(error){
      console.log("error while getting the course", error);
   }   
}

export const getAllCourse = async (token)=>{
    try{
     return await axios.get(`${URL}/api/route/allCourses` );
    }catch(error){
        console.log("something is wrong to get all course table", error);
    }
}

export const editCourse = async (id)=>{
    try {
        return await axios.get(`${URL}/api/route/${id}`)
    } catch (error) {
        console.log("error while getting the course for editing", error);
    }
}

export const addCourseContent = async (user, id)=>{
    try {
        return await axios.put(`${URL}/api/route/${id}`, user)
    } catch (error) {
        console.log("error while updating the detail", error);
    }
}

export const  editcourseDetail = async (user, id)=>{
    try {
        return await axios.post(`${URL}/api/route/${id}`, user)
    } catch (error) {
        toast.success("Something went wrong")
    }
}

export const deleteCourse = async (id)=>{
    try {
        return await axios.delete(`${URL}/api/route/${id}`);
    } catch (error) {
        console.log('error while delete te course', error);
    }
}


export const loginCall = async (userCredential, dispatch) =>{
    dispatch({type : "LOGIN_START"});
    try {
      
        const res = await axios.post(`${URL}/api/user/login`, userCredential);
        console.log(res);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        
    } catch (error) {
        toast.warn("Login Failed")
        dispatch({type: "LOGIN_FAILURE", payload: error})
        
    }
}
export const changePassword = async ()=>{
    try {
        return await axios.post(`${URL}/api/otp/emailSend`)
    } catch (error) {
        console.log("error while changing the password", error);
    }
}

export const getUsers = async ()=>{
    try{
     return await axios.get(`${URL}/api/user/user`);
    }catch(error){
        console.log("something is wrong to get all user table", error);
    }
}

export const getCourseChapter = async ()=>{
    try{
     return await axios.get(`${URL}/api/route/user`);
    }catch(error){
        console.log("something is wrong to get all user table", error);
    }
}

export const getCourseChapterTopic = async ()=>{
    try{
     return await axios.get(`${URL}/api/content/addTopic`);
    }catch(error){
        console.log("something is wrong to get all user table", error);
    }
}


export const getCourseInfomation = async (id)=>{
    try {
        return await axios.get(`${URL}/api/route/course2/${id}`)
    } catch (error) {
        console.log("something is wrong to get all course details", error);
    }
}







