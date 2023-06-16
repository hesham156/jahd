import { Route,Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Error from "./pages/Error";
import {Error,Home,Register,Login} from './pages/AllPage'
function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/not" element={<Error/>} />
    <Route path="*" element={<Error/>}/>
   </Routes>
  );
}

export default App;
