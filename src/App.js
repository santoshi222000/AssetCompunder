import About from "./component/About";
import Courses2 from "./pages/Courses2";
import Home from "./pages/Home";
import About1 from "./pages/About1";
import Group from "./pages/Group";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCourses from "./adminPages/AddCourses";
import AllCourses from "./adminPages/AllCourses";
import Dashboard from "./adminPages/Dashboard";
import User from "./adminPages/User";
import AddCourseChapter from "./adminPages/AddCourseChapter";
import AddContent from "./admin/AddContent";
import AddTopic from "./adminPages/AddTopic";
import Topic from "./admin/Topic";
import EditCourse from "./adminPages/EditCourse";
import CoursePurchase from "./adminPages/CoursePurchase";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

function App() {

  return (
    <div className="App">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About1 /> } />
            <Route path="/group" element={ <Group /> } />
            <Route path="/course2/:id" element={ <Courses2 /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/addCourses" element={ <AddCourses /> } />
            <Route path="/allCourses" element={ <AllCourses /> } />
            <Route path="/user" element={ <User/> } />
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/addCourseChapter" element={ <AddCourseChapter/> } />
            <Route path="/addContent/:id" element={ <AddContent/> } />
            <Route path="/addTopic" element={ <AddTopic/> } />
            <Route path="/topic/:id" element={ <Topic/> } />
            <Route path="/editCourse/:id" element={ <EditCourse/> } />
            <Route path="/coursePurchase" element={ <CoursePurchase/> } />
          </Routes>
    </div>
  );
}

export default App;
