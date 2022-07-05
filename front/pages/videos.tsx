import React from 'react'
import Footer from '../src/components/footer'
import Header from '../src/components/header'
import { imagesUrl } from '../src/components/Includes'

const Videos =()=> {
  return (
    <section className="home">
    <div className="mobile-area startpage">
        <div className="main-page">
       
           <Header />
           
        
            <div className="categories cat-video-block">
               
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
                   
                    <div className="news-area p-0">
                        <div className="videos-wrapper">
                            <div className="carousel"
                                 data-flickity='{ "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false, "groupCells": "3" }'>
                               
                                <div className="carousel-cell">
                                    <div className="swiper-slide">
                                        <a href="video-player.html"  title="">
                                            <img src={imagesUrl+"/image33.jpg"}  alt="" title="" />
                                        </a>
                                        <a href="video-player.html" className="videos-content"  title="">
                                            <div className="videos-content-1">
                                                <div className="v-img">
                                                    <img src={imagesUrl+"/author2.svg"}  alt="" title="" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="videos-info">
                                            <a href="video-player.html"  title="">
                                                <span className="min-read">Isabella</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="swiper-slide">
                                        <a href="video-player.html"  title="">
                                            <img src={imagesUrl+"/image34.jpg"} alt="" title="" />
                                        </a>
                                        <a href="video-player.html" className="videos-content">
                                            <div className="videos-content-1">
                                                <div className="v-img">
                                                    <img src={imagesUrl+"/author3.svg"} alt="" title="" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="videos-info">
                                            <a href="video-player.html"  title="">
                                                <span className="min-read">Clark</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="swiper-slide">
                                        <a href="video-player.html"  title="">
                                            <img src={imagesUrl+"/image35.jpg"} alt="" title="" /> 
                                        </a>
                                        <a href="video-player.html" className="videos-content"  title="">
                                            <div className="videos-content-1">
                                                <div className="v-img">
                                                    <img src={imagesUrl+"/author-1.svg"} alt="" title="" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="videos-info">
                                            <a href="video-player.html"  title="">
                                                <span className="min-read">Olivia</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               
                            
                                <div className="carousel-cell">
                                    <div className="swiper-slide">
                                        <a href="video-player.html"  title="">
                                            <img src={imagesUrl+"/image33.jpg"} alt="" title="" />
                                        </a>
                                        <a href="video-player.html" className="videos-content"  title="">
                                            <div className="videos-content-1">
                                                <div className="v-img">
                                                    <img src={imagesUrl+"/author2.svg"} alt="" title="" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="videos-info">
                                            <a href="video-player.html"  title="">
                                                <span className="min-read">Isabella</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="cat-block-2 videos-block">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="all-box-area">
                            <h1>Featured Video</h1>
                            <div className="videos-bg wrap-vdo">
                                <a className="play-vd-pop videoPop"
                                   data-src="assets/video/big_buck_bunny.mp4">
                                    <img  src={imagesUrl+"/image8.jpg"} className="img-fluid full-size" alt="" title="" />
                                    <img src={imagesUrl+"/video1.svg"} className="play-pop-icon" alt="" title="" />
                                </a>
                                <div className="heart-block">
                                    <span className="icon-heart"></span>
                                    <span className="text-3571">3571</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                
                <div className="story-block v-story-block">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="story-content all-box-area">
                            <div className="heading">
                               <a href="video-details.html"> 
                                <h3>Short Story is a Piece <br/>of Prose Fiction</h3>
                            </a>
                            </div>
                            <a href="video-details.html">
                                <div className="img-content">
                                <div className="author-icon">
                                    <img src={imagesUrl+"/author4.svg"} alt="" title="" />
                                </div>
                                <div className="post-text-outer video-txt">
                                    <div className="post-text">
                                        <p>Olivia</p>
                                    </div>
                                    <div className="post-user-info">
                                        <span className="min-read min-read-vedo">7 min read</span>
                                        <span className="post-time min-read-vedo">2 June 2021</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="all-box-area">
                        <h6>Trending News
                            <span className="see-all"><a href="video-articles-list.html">SEE ALL</a></span>
                        </h6>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
                    <div className="carousel trending-carousel trending-carousel-vd"
                         data-flickity='{ "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false }'>

                    
                        <div className="carousel-cell">
                            <div className="vd-icon-txt">
                                <div className="wrap-vdo">
                                    <a className="play-vd-pop videoPop"
                                        data-src="assets/video/big_buck_bunny.mp4">
                                        <img src={imagesUrl+"/image18.jpg"} className="img-fluid full-size" alt=""
                                             title="" />
                                        <img src={imagesUrl+"/video1.svg"} className="play-pop-icon" alt="" title="" />
                                    </a>
                                </div>
                                <div className="post-text post-area-main">
                                    <a href="video-details.html"><p>A man stand alone watch the full Moon Night</p></a>
                                </div>
                            </div>
                        </div>
                       
                    
                        <div className="carousel-cell">
                            <div className="vd-icon-txt">
                                <div className="wrap-vdo">
                                    <a className="play-vd-pop videoPop"
                                        data-src="assets/video/big_buck_bunny.mp4">
                                        <img src={imagesUrl+"/image19.jpg"} className="img-fluid full-size" alt=""
                                             title="" />
                                        <img src={imagesUrl+"/video1.svg"} className="play-pop-icon" alt="" title="" />
                                    </a>
                                </div>
                                <div className="post-text post-area-main">
                                    <a href="video-details.html"><p>Evening city view from pilot cockpit in Germany</p></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="story-block v-story-block">
                    <div className="all-box-area mt-3">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <div className="vd-icon-txt">
                                        <div className="wrap-vdo">
                                            <a className="play-vd-pop videoPop"
                                                data-src="assets/video/big_buck_bunny.mp4">
                                                <img src={imagesUrl+"/image36.jpg"} className="img-fluid full-size" alt=""
                                                     title="" />
                                                <img src={imagesUrl+"/video1.svg"} className="play-pop-icon" alt=""
                                                     title="" />                                            
                                            </a>
                                        </div>
                                        <div className="post-text post-area-main">
                                            <a href="video-details.html"><p>A man stand alone watch the full Moon Night</p>
                                                <div className="life-icon">
                                                    <h3 className="time-content">
                                                        <span className="author-area">
                                                            <img src="assets/images/author2.svg" alt="" title="" /> 
                                                        </span>
                                                        <span>Isabella</span>
                                                        <span className="lifetime"> 7 Min</span>
                                                    </h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="vd-icon-txt">
                                        <div className="wrap-vdo">
                                            <a className="play-vd-pop videoPop"
                                                data-src="assets/video/big_buck_bunny.mp4">
                                                <img src={imagesUrl+"/image37.jpg"} className="img-fluid full-size" alt=""
                                                     title="" />
                                                <img src={imagesUrl+"/video1.svg"} className="play-pop-icon" alt=""
                                                     title="" />
                                            </a>
                                        </div>
                                        <div className="post-text post-area-main">
                                            <a href="video-details.html"><p>A man stand alone watch the full Moon Night</p>
                                                <div className="life-icon">
                                                    <h3 className="time-content">
                                                        <span className="author-area">
                                                            <img src={imagesUrl+"/author2.svg"} alt="" title="" /> 
                                                        </span>
                                                        <span>Isabella</span>
                                                        <span className="lifetime"> 7 Min</span>
                                                    </h3>
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
    </div>
 <Footer />


{/* video modal */}
    <div className="modal fade" id="glassAnimals" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="modalVideoClose">
                    <span className="icon-close-dark-white"></span>
                </button>
                <div className="modal-body">
                    <iframe id="glassAnimalsVideo" src="#" frameBorder="0" 
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Videos