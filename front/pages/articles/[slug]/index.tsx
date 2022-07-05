import React from 'react'
import { imagesUrl } from '../../../src/components/Includes'

const Index =()=> {
  return (
    
	<section className="home">
    <div className="mobile-area articles-details-page">
        <div className="header-wrapper details-head">                           
            <div className="close-bar">
                <a href="startpage-1.html">
                    <span className="icon-close-white"></span>
                </a>
            </div>
            <div className="head-content">
                <span className="nws"><a href="articles-list.html">TRAVEL</a></span>
            </div>
        </div>
        <div className="bookmark-block">
            <div className="main-page">
                <div className="travel-story all-auth-wraper">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="all-box-area">
                            <div className="follow-us">
                                <div className="News-story-info">
                                    <span className="color-theamb" >
                                        <div className="News-title">
                                            <span className="news-date">2 June 2021</span> 
                                        </div>
                                    </span>
                                </div>
                                <div className="follow-bookmark">
                                    <a href="#" className="like-icon" title="">
                                        <span className="icon-heart-big-3"></span>
                                    </a>
                                    <a href="#bookmark-id"><span className="icon-bookmark"></span></a>
                                </div>
                            </div>
                            <div className="short-story">
                                <h3>Short Story is a Piece<br /> of Prose Fiction</h3>
                            </div>
                        </div>
                    </div>
                    <div className="follow-area article-follow-inner">
                        <div className="all-box-area">
                            <div className="post-wraper all-post">
                                <div className="author-area">
                                    <img src={imagesUrl+"/author5.svg"}  alt="" title="" />
                                </div>
                                <div className="post-text-outer">

                                    <div className="life-icon">
                                        <div className="art-content">

                                            <div className="auth-details">
                                                <div className="auhtor-content">
                                                    <h3 className="auth-name">Olivia</h3>
                                                    <h5 className="auth-art">7 min watch</h5>
                                                </div>
                                            </div>
                                            <div className="lifetime button-btn auth-btn"> 
                                                 <a href="#" className="follow-btn-auth follow-btn" title="">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>  

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="story-social-icon">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" title="facebook">
                                    <span className="icon-facebook2"><span className="path1"></span><span className="path2"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" title="twitter">
                                    <span className="icon-twitter2"><span className="path1"></span><span className="path2"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://in.linkedin.com/" target="_blank" title="linkedin">
                                    <span className="icon-linkedin"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.whatsapp.com/" target="_blank" title="whatsapp">
                                    <span className="icon-whatsapp"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gmail.com/" target="_blank" title="mail">
                                    <span className="icon-mail"><span className="path1"></span><span className="path2"></span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="description-cont">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae felis sit amet ligula semper convallis. Vestibulum lectus neque, ultricies et lacus ut, pulvinar blandit sem. Suspendisse interdum porta dolor ac luctus. Integer tristique tortor enim. Donec egestas, neque sed finibus ullamcorper, leo risus facilisis dui, nec porttitor magna augue quis lectus.Etiam ac mauris arcu. Pellentesque commodo nibh a augue. </p>
                        <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. Vivamus id sapien gravida, aliquet lorem ac, tristique odio. Cras eleifend urna hendrerit ullamcorper efficitur. Morbi mattis eros et neque congue eleifend. Curabitur at erat arcu.</p>
                    </div>
                    <div className="dummy-content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae felis sit amet ligula semper convallis. Vestibulum lectus neque, ultricies et lacus ut, pulvinar blandit sem.</h4>
                    </div>
                    <div className="description-cont">
                        <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. Vivamus id sapien gravida, aliquet lorem ac, tristique odio. Cras eleifend urna hendrerit ullamcorper efficitur. Morbi mattis eros et neque congue eleifend. Curabitur at erat arcu.</p>
                    </div>
                    <div className="description-img">
                        <img src={imagesUrl+"/image11.jpg"}  alt="" title="" />
                    </div>
                    <div className="description-cont story-con">
                        <div className="review-story">
                            <div className="review-text">
                                <h5>RELATED QUOTE</h5>
                                <h1>Trust yourself, you know more than you think you do.</h1>
                            </div>
                        </div>
                        <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. Vivamus id sapien gravida, aliquet lorem ac, tristique odio. Cras eleifend urna hendrerit ullamcorper efficitur. Morbi mattis eros et neque congue eleifend. Curabitur at erat arcu.</p>
                        <div className="signup">
                            <a href="https://twitter.com/" className="follow-btn" title="Share This Article">Share This Article</a>
                        </div>
                    </div>
                    <div className="all-box-area">
                        <div className="story-block play-music">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <h1 className="sub-headings"> You might also like</h1>
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <div className="vd-icon-txt">

                                            <div className="wrap-vdo">
                                                <a className="play-vd-pop videoPop"
                                                    data-src="assets/video/big_buck_bunny.mp4">
                                                    <img  src={imagesUrl+"/image36.jpg"} className="img-fluid full-size" alt="" title="" />
                                                    <img  src={imagesUrl+"/video1.svg"}  className="play-pop-icon" alt="" title="" />    
                                                </a>  
                                            </div>
                                            <div className="post-text post-area-main">
                                                <p>A man stand alone watch the full Moon Night</p>
                                                <div className="life-icon">
                                                    <h3 className="time-content">
                                                        <span className="author-area">
                                                            <img src={imagesUrl+"/author2.svg"}  alt="" title="" /> 
                                                        </span>
                                                        <span>Isabella</span> 
                                                        <span className="lifetime"> 7 Min</span>  
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <div className="vd-icon-txt">
                                            <div className="wrap-vdo">
                                                <a className="play-vd-pop videoPop"
                                                    data-src="assets/video/big_buck_bunny.mp4">
                                                   <img  src={imagesUrl+"/image37.jpg"} className="img-fluid full-size" alt="" title="" />
                                                    <img  src={imagesUrl+"/video1.svg"}  className="play-pop-icon" alt="" title="" />   
                                                </a>  
                                            </div>
                                            <div className="post-text post-area-main">
                                                <p>Fabulous the shadow of the little Prince Story</p>
                                                <div className="life-icon">
                                                    <h3 className="time-content">
                                                        <span className="author-area">
                                                            <img src={imagesUrl+"/author2.svg"} alt="" title="" /> 
                                                        </span>
                                                        <span>Isabella</span> 
                                                        <span className="lifetime"> 7 Min</span>  
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="comments" id="bookmark-id">
                                <h1 className="sub-headings"> Comments</h1>
                               
                                <div className="post-wraper all-post">
                                    <a href="author-profile.html">
                                        <div className="author-area clark">
                                            <img src={imagesUrl+"/author3.svg"} alt="" title="" />
                                        </div>
                                    </a>
                                    <div className="post-text-outer">
                                        <div className="auth-life-txt">
                                            <div className="life-icon">
                                                <div className="art-content">
                                                    <div className="auth-details">
                                                        <a href="author-profile.html">
                                                            <div className="auhtor-content">
                                                                <h3 className="auth-name">William Joseph</h3>
                                                                <h5 className="auth-art">2 hours ago</h5>
                                                                <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div className="post-wraper all-post">
                                    <a href="author-profile.html">
                                        <div className="author-area isabella">
                                            <img src={imagesUrl+"/author3.svg"} alt="" title="" />
                                        </div>
                                    </a>
                                    <div className="post-text-outer">
                                        <div className="auth-life-txt">
                                            <div className="life-icon">
                                                <div className="art-content">
                                                    <div className="auth-details">
                                                        <a href="author-profile.html">
                                                            <div className="auhtor-content">
                                                                <h3 className="auth-name">Benjamin</h3>
                                                                <h5 className="auth-art">3 hours ago</h5>
                                                                <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-comments">
                                <h1 className="sub-headings"> Post New Comment</h1>
                                <form className="list contact-us-form" id="login-form">
                                    <ul>
                                        <li className="item-content item-input">
                                            <div className="item-inner">
                                                <div className="item-input-wrap">
                                                    <input type="text" name="name" id="dump-name" placeholder="Name" className="" required />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item-content item-input">
                                            <div className="item-inner">
                                                <div className="item-input-wrap">
                                                    <input type="text" name="email" id="dump-email" placeholder="E-mail" className="" required />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item-content item-input">
                                            <div className="item-inner">
                                                <div className="item-input-wrap">
                                                    <textarea id="comments" name=" " rows={4} cols={50} placeholder="Comment" required >
                                                    </textarea>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="signup form-submit">
                                        <div className="success-message alert alert-success">
                                            <p>Message has been sent successfully.</p>
                                        </div>
                                        <button type="submit" className="btn btn-common list-button" id="form-submit">Post Comment</button>
                                    </div>
                                </form>
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

export default Index