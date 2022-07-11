
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Token } from "./components/includes";
import Template from "./components/template";
import Dashboard from "./pages/dashboard";
import Login from "./user/login";
 
/*import LogOut from "./pages/users/logOut"; */

function App() {
  return (
  
    <>
    
    <Router>
        <Routes>
         


          <Route  path="/login" element={<Login  />} /> 
           {/*  <Route path="*" element={<Error404 />} />  */}

        </Routes>
    </Router>
   {/*    {Token!==undefined?<Template />:''} */}
  
    </>
  );
}

export default App;


