
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Token } from "./components/includes";
import Template from "./components/template";
import Login from "./pages/users/login";
import LogOut from "./pages/users/logOut";

function App() {
  return (
  
    <>
     <Router>
        <Routes>
          <Route  path="/" element={<Login   />} />
          <Route  path="/logout" element={<LogOut  />} />
        {/*    <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </Router>
      {Token!==undefined?<Template />:''}

    </>
  );
}

export default App;
