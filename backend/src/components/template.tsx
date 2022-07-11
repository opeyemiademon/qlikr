import React, { Children } from 'react'
import Breadcomb from './breadcomb'
import Header from './header'
import Preloader from './preloader'
import Sidebar from './sidebar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewusers from '../pages/users/viewusers'
import Categories from '../pages/category/categories'
import Login from '../pages/users/login'
import Error404 from '../pages/error404'
import Dashboard from '../pages/dashboard'
import NewPost from '../pages/post/newPost'
import Posts from '../pages/post/viewPost'
import EditPost from '../pages/post/editPost'
import Banners from '../pages/advert/banner'
import EditBanners from '../pages/advert/editbanner'
import Videos from '../pages/videos/videos'

const  Template =(props:any)=> {


  return (
   <Router>
   <Preloader /> 
      {/*Main wrapper - style you can find in pages.scss  */}
      <div id="main-wrapper">
       
        <Header />
<Sidebar />
       
        <div className="page-wrapper">
          
         
   {/*  makesure you put header here  */}
      
        <Routes>
        <Route path="/videos" element={<Videos/>} />

    <Route path="/view_users" element={<Viewusers />} />
     <Route path="/category" element={<Categories />} />
 <Route path="/dashbaord" element={<Dashboard/>} />
        <Route path="/view_posts" element={<Posts/>} />
<Route path="/create_post" element={<NewPost/>} />
<Route path="/post/edit/:code" element={<EditPost/>} />

<Route path="/banner/edit/:code" element={<EditBanners/>} />
<Route path="/banners" element={<Banners/>} />

        </Routes>
      

      
    {/*  put footer here */}

          <footer className="footer text-center">
            All Rights Reserved.
          </footer>
          
        </div>
      </div>
      </Router>
  )
}

export default Template