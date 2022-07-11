import React from 'react'
import Breadcomb from './breadcomb'
import Header from './header'
import Preloader from './preloader'
import Sidebar from './sidebar'

const  GlobalHeader =(props:any)=> {
  return (
   <>
   <Preloader />
      {/*Main wrapper - style you can find in pages.scss  */}
      <div id="main-wrapper">
       
        <Header />
        <Sidebar />
       
        <div className="page-wrapper">
          {/*Bread crumb and right sidebar toggle  */}
         <Breadcomb title={props.title} />
         






          <footer className="footer text-center">
            All Rights Reserved by Admotek Solutions.
          </footer>
          
        </div>
      </div>
      
      
      
      
      
      
      </>
  )
}

export default GlobalHeader