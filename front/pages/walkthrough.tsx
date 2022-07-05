import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const WalkThrough=()=> {
  return (
    <section className="home">
        <div className="mobile-area app-page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="main-page walk-main">
                            <div className="main-area app-area">
                                <div className="app-slider ">
                                   
                                    <div className="banner-carousel">
                                       
                                        <div className="carousel-cell">
                                            <a href="select-intrest.html">
                                                <div className="slider-content">
                                                    <div className="slider-img">
                                                        <img src={imagesUrl+"/newsapp.png"}  className="img-fluid" alt="Banner Slide" title="" />
                                                    </div>
                                                </div>
                                                <div className="slider-txt">
                                                    <h1>News App</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="carousel-cell">
                                            <a href="select-intrest.html"  title="">
                                                <div className="slider-content">
                                                    <div className="slider-img">
                                                        <img src={imagesUrl+"/news-aap-discoverlead.png"}  className="img-fluid" alt="Banner Slide" title="" />
                                                    </div> 
                                                </div>
                                                <div className="slider-txt">
                                                    <h1 data-aos="fade-up">Mobile App</h1>
                                                    <p data-aos="fade-up"> ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="carousel-cell">
                                            <a href="select-intrest.html"  title="">
                                                    <div className="slider-content">
                                                    <div className="slider-img">
                                                        <img  src={imagesUrl+"/newsapp-success.png"} className="img-fluid" alt="Banner Slide" />
                                                    </div>
                                                </div>
                                                <div className="slider-txt">
                                                    <h1 data-aos="fade-up">Mobile App</h1>
                                                    <p data-aos="fade-up">ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="get-start-btn">                                 
                                <a href="select-intrest.html" className="list-button" title="">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default WalkThrough