import React, { Children } from 'react'
import Breadcomb from './breadcomb'
import Header from './header'
import Preloader from './preloader'
import Sidebar from './sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './footer'
import Dashboard from '../pages/dashboard'

const  Template =(props:any)=> {


  return (
   <Router>
     <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
      

       <Sidebar />
        <div className="layout-page">
      <Header />

          <div className="content-wrapper">

              
              
            <Routes>
            <Route  path="/" element={<Dashboard   />} />

      </Routes>

          <Footer />

            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>

      <div className="layout-overlay layout-menu-toggle"></div>
    </div>

    <div className="buy-now">
      <a href="#" target="_blank" className="btn btn-danger btn-buy-now">Upgrade to Pro</a>
    </div>

    

      </Router>
  )
}

export default Template