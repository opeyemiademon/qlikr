
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./pages/category/categories";
import Viewusers from "./pages/users/viewusers";

const ProtectedView =()=>{
  return (
   <>
 <Routes>
         
    <Route path="/view_users" element={<Viewusers />} />
     <Route path="/category" element={<Categories />} />

        </Routes>
   </>
  );
}

export default ProtectedView;

