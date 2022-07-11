import React from 'react'
import {  Link } from "react-router-dom";


const  Sidebar =()=> {
  return (
     
        <aside className="left-sidebar">
          {/*Sidebar scroll */}
          <div className="scroll-sidebar">
            {/*Sidebar navigation */}
            <nav className="sidebar-nav">
              <ul id="sidebarnav">

                   <li className="sidebar-item mt-2">

                      <Link to={`/dashboard`} className="sidebar-link">   <i className="mdi mdi-av-timer"></i><span className="hide-menu">Dashboard</span> </Link>

                </li>


                <li className="sidebar-item mt-2">
                  <a
                    className="sidebar-link has-arrow waves-effect waves-dark"
                    href="#!"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-pin"></i>
                    <span className="hide-menu">Post</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">

                    <li className="sidebar-item">
                     <Link to={`/view_posts`} className="sidebar-link"><i className="mdi mdi-adjust"></i>All Post</Link> 

                    </li>
 
                    <li className="sidebar-item">
                       <Link to={`/create_post`} className="sidebar-link"> <i className="mdi mdi-chart-pie"></i> <span className="hide-menu">Create New</span> </Link>
                    </li>  

                    <li className="sidebar-item">
                <Link to={`/category`} className="sidebar-link">  <i className="mdi mdi-chart-pie"></i><span className="hide-menu">Categories</span> </Link>

                    </li>
                   
                  </ul>
                </li>



                <li className="sidebar-item">
                   <Link to={`/banners`} className=" sidebar-link">  <i className="mdi mdi-format-color-fill text-info"></i>
                    <span className="hide-menu">Advert</span></Link>

                </li>
             

   <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow waves-effect waves-dark"
                    href="#!"
                    aria-expanded="false"
                  >
                    <i className="fa fa-users"></i>
                    <span className="hide-menu">Users</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">

                      <Link to={`/view_users`} className="sidebar-link">  <i className="mdi mdi-chart-pie"></i><span className="hide-menu">Users List</span> </Link>


                    </li>
                   
                  
                  </ul>
                </li>

                
                   <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow waves-effect waves-dark"
                    href="#!"
                    aria-expanded="false"
                  >
                    <i className="fa fa-cogs"></i>
                    <span className="hide-menu">Settings</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">

                      <Link to={`/details`} className="sidebar-link">  <i className="mdi mdi-chart-pie"></i><span className="hide-menu">Basic Details</span> </Link>

                    </li>
                  
                  </ul>
                </li>
                
                <div className="devider"></div>
               
                <li className="sidebar-item">

                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/logout"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-adjust text-info"></i>
                    <span className="hide-menu">Log Out</span>
                  </a>
                </li>
              
              </ul>
            </nav>
            {/*End Sidebar navigation  */}
          </div>
          {/*End Sidebar scroll */}
        </aside>
  )
}

export default Sidebar