import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const Search =()=> {
  return (
    <section className="home">
        <div className="mobile-area startpage">
            <div className="main-page">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                    <div className="page-header">
                        <div className = "navbar-inner">
                            <div className = "left back-page">
                                <a href="categories.html">
                                    <span className="icon-arrow-big2"></span>
                                </a>
                            </div>
                            <div className="center moon-search">
                                <form action="#">
                                    <div className="input-group border rounded-pill">
                                        <div className="input-group-prepend border-0">
                                            <button id="button-add" type="button" className="btn btn-link text-info">
                                                <span className="icon-search"></span>
                                            </button>
                                        </div>
                                        <input type="search" placeholder="Search" aria-describedby="button-addon4" className="form-control bg-none border-0" />
                                    </div>
                                </form>
                            </div>

                            <div className = "right moon-icon">
                                <span className="icon-day-night-icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="news-tab">
                        <ul>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="story-news.html" className="active" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-all-news"></span>
                                        </span>
                                        <span className="allnews">All News</span>
                                    </a>
                                </div>
                            </li>
                           <li className="nav-item ">
                              <div className="cat-content">
                                   <a href="story-news.html" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-trending-white"></span>
                                        </span>
                                        <span className="allnews">Trending</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="startpage-1.html" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-latest"></span>
                                        </span>
                                        <span className="allnews">Latest</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="live-event-report.html" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-unread"></span>
                                        </span>
                                        <span className="allnews">Unread</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                   <a href="live-event-report.html" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-trending-white"></span>
                                        </span>
                                        <span className="allnews">Trending</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="startpage-1.html" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-latest"></span>
                                        </span>
                                        <span className="allnews">Latest</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="categories hashtag">
                        <h1>Suggestes Hashtags</h1>
                        <div className="hashtag-area pill-container">
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-a" name="selector" value="a" />
                                <label className="selector option-a" htmlFor="option-a"> Cricket</label>
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-b" name="selector" value="b" />
                                <label className="selector" htmlFor="option-b">Today</label>
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-c" name="selector" value="c" />
                                <label className="selector" htmlFor="option-c">Politics</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-d" name="selector" value="d" />
                                <label className="selector" htmlFor="option-d">Vaccines</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-e" name="selector" value="E" />
                                <label className="selector" htmlFor="option-e">Hollywood</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-f" name="selector" value="F" />
                                <label className="selector" htmlFor="option-f">Moderna</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-g" name="selector" value="G" />
                                <label className="selector" htmlFor="option-g">Fashion</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-h" name="selector" value="h" />
                                <label className="selector" htmlFor="option-h">Freedom</label> 
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 block-leftspace">
                    <div className="search-page-content">

                       <div className="cat-block-1">
                        <div className="home-cat-content">
                              <h6>All Categories  </h6>
                        </div>
                        <div className="home-cat-slider slider-cat">
                        <div className="carousel trending-carousel"
                            data-flickity='{ "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false }'>
                                <div className="carousel-cell">
                                    <div className="list-area travel-article">
                                        <a href="categories.html"  title="">
                                            <img src={imagesUrl+"/character1.svg"}  className="img-fluid" alt="" title="" />
                                            <div className="home-c-content">
                                                <p>Travel</p>
                                                <p className="articles-count">172 Articles</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="list-area lifestyle-art">
                                        <a href="categories.html"  title="">
                                            <img  src={imagesUrl+"/character2.svg"} className="img-fluid" alt="" title="" />
                                            <div className="home-c-content">
                                                <p>Lifestyle</p>
                                                <p className="articles-count">120 Articles</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="list-area fitness-art">
                                        <a href="categories.html"  title="">
                                            <img  src={imagesUrl+"/character3.svg"} className="img-fluid" alt="" title="" />
                                            <div className="home-c-content">
                                                <p>Fitness</p>
                                                <p className="articles-count">243 Articles</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="list-area education-art">
                                        <a href="categories.html"  title="">
                                            <img src={imagesUrl+"/character4.svg"} className="img-fluid" alt="" title="" />
                                            <div className="home-c-content">
                                                <p>Education</p>
                                                <p className="articles-count">265 Articles</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="list-area sports-art">
                                        <a href="categories.html"  title="">
                                            <img src={imagesUrl+"/character5.svg"} className="img-fluid" alt="" title="" />
                                            <div className="home-c-content">
                                                <p>Sports</p>
                                                <p className="articles-count">56 Articles</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="list-area techology-art">
                                        <a href="categories.html"  title="">
                                            <img src={imagesUrl+"/character3.svg"} className="img-fluid" alt="" title="" />
                                            <div className="home-c-content">
                                                <p>Techology</p>
                                                <p className="articles-count">85 Articles</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Search