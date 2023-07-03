import { Route,Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Error from "./pages/Error";
import {Error,Home,Register,Login,Course} from './pages/AllPage'
import Admin from "./pages/admin/Admin";
function App() {
  return (
   <Routes>
    <Route exact path="/*" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/admin" element={<Admin/>}/>
    {/* <Route path="/course/:courseid" element={<Course/>}/> */}
    <Route path="/not" element={<Error/>} />
    <Route path="*" element={<Error errorCode={404} errorMsg={"This Page not foumd"}/>}/>
   </Routes>
  );
}

export default App;
