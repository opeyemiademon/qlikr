import React from 'react'
import { imagesUrl } from '../components/Includes'

const TrendingStory =()=> {
  return (
    <>
    	<div className="all-box-area">
							<div className="startpage-content">
								<h4 className="trending-story">TRENDING STORY IN LIFESTYLE</h4>
								<div className="super-learner">
									<div className="learner">
										<img src={imagesUrl+"/super-hub.jpg"}  alt="" title="" />
									
										<div className="learner-txt">
											<h3>6 Habits of Super Learners</h3>
											<p className="learner-txt-p"><span>Ethan</span> <span className="lifetime"> 7 Min</span>  </p>
										</div>
									</div>	
									 <p><a href="articles-details.html"  title=""><span className="icon-dots"></span></a></p> 
								</div>
							</div>
							<div className="startpage-content">
								<div className="super-learner get-up">
									<h3>Go to bed early and <br /> get up early.</h3>
									<span className="icon-seperator super-get-bar"></span>
									<p>Staying awake while tired will make you feel more tired and irritable the next day. It’s almost never worth it to stay up late watching TV or getting extra work done. You’ll be more efficient if you start your day earlier and you won’t have to live with the hangover of being tired all the time…</p>  
								</div>
								<div className="share-like">
									<div className="navbar-inner">
										<div className="left"> 
											<a href="#" className="like-icon"  title="">
												<span className="icon-heart-big-3 icon"></span>
												<span className="like-txt">Like</span></a>
										</div>
										<div className="center">
											<a href="articles-details.html#bookmark-id"  title="">
												<span className="icon-chat icon"></span>
											<span className="like-txt">Comment</span>
											</a>
										</div>
										<div className="right">
											<a href="https://m.facebook.com/" target="_blankd"  title="">
												<span className="icon-logout icon"></span>
											<span className="like-txt">Share</span></a>
										</div>															
									</div>
								</div>
								<div className="signup articles-btn">
									<a href="articles-details.html" className="list-button  btn-color-change" title="">Read Full Story</a>
								</div>
							</div>
						</div>
    </>
  )
}

export default TrendingStory