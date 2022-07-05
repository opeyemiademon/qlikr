import React from 'react'
import { imagesUrl } from '../components/Includes'

const TrendingNews =()=> {
  return (
    <>
    	<div className="cat-block-2 all-box-area">
							<div className="startpage-content">
								<h6>Trending News
									<span className="see-all  btn-color-change"><a href="articles-list.html">SEE ALL</a></span>
								</h6>
								<div className="categories-block">
									
									<a href="articles-details.html"  title="">								
									 <div className="trending-new-bg">
											<div className="heading">
												<h2>Storytelling that moves<br /> People around</h2>
											</div>
											<div className="img-content">
												<div className="author-area">
													<img src={imagesUrl+"/author4.svg"} alt="" title="" />
												</div>
												<div className="post-text-outer">
													<div className="post-text">
														<p>Olivia</p>
													</div>
													<div className="post-user-info">
														<span  className="min-read">7 min read</span>	
														<span className="post-time">2 June 2021</span>
													</div>
												</div>
											</div>
										</div>
									</a> 
									<div className="post-area post-area-main">
									
										<a href="articles-details.html"  title="">
											<div className="post-wraper">
												<div className="post-thumb">
													<img src={imagesUrl+"/image23.jpg"}  alt="" title="" />	
												</div>
												<div className="post-text-outer">
													<div className="post-user-info"> 
														<div className="life-txt">
															<h3>LIFESTYLE</h3>
															<h2>A man stand alone watch	the full Moon Night	</h2>
															<div className="life-icon">
																<h3 className="art-content">
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
										</a>
										<a href="articles-details.html"  title="">
											<div className="post-wraper">
												<div className="post-thumb">
													<img src={imagesUrl+"/image24.jpg"} alt="" title="" />	
												</div>
												<div className="post-text-outer">
													<div className="post-user-info"> 
														<div className="life-txt">
															<h3>TRAVEL</h3>
															<h2>Fabulous the shadow of the little Prince Story	</h2>
															<div className="life-icon">
																<h3 className="art-content">
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
										</a>
										<a href="articles-details.html"  title="">
											<div className="post-wraper">
												<div className="post-thumb">
													<img src={imagesUrl+"/image25.jpg"} alt="" title="" />	
												</div>
												<div className="post-text-outer">
													<div className="post-user-info"> 
														<div className="life-txt border-bottom-0">
															<h3>FITNESS</h3>
															<h2>A man stand alone watch the full Moon Night	</h2>
															<div className="life-icon">
																<h3 className="art-content">
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
										</a>
									</div>
								</div>
							</div>
						</div>
    </>
  )
}

export default TrendingNews