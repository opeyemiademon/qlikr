import React from 'react'
import { imagesUrl } from '../components/Includes'

const Slider =()=> {
  return (
    <>

				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="banner">
						<div className="banner-area">
							<div className="banner-carousel">
								
								<div className="carousel-cell">
									<a href="articles-details.html"  title="">
										<div className="overlay-bg"></div>
										<div className="overlay"></div>
										<img src={imagesUrl+"/author4.svg"}  className="img-fluid" alt="Banner Slide" title="" />
										<div className="banner-block">
											<div className="heart-block">
												<span className="icon-heart"></span> 
												<span className="text-3571">3571</span>
											</div>
											<div className="banner-content">
												<div className="heading">
													<h3>Short Story is a Piece of<br/> Prose Fiction</h3>
												</div>
												<div className="img-content">
													<div className="author-area">
														<img src={imagesUrl+"/image13.jpg"}  alt="" title="" />
													</div>
													<div className="post-text-outer">
														<div className="post-text">
															<p>Olivia</p>
														</div>
														<div className="post-user-info">
															<span className="min-read">7 min read</span>	
															<span className="post-time">2 June 2021</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>

							{/* 	<div className="carousel-cell">
									<a href="articles-details.html"  title="">
										<div className="overlay-bg"></div>
										<div className="overlay"></div>
										<img src={imagesUrl+"/start-slider-2.jpg"}  className="img-fluid" alt="Banner Slide" title="" />
										<div className="banner-block">
											<div className="heart-block">
												<span className="icon-heart"></span> 
												<span className="text-3571">3571</span>
											</div>
											<div className="banner-content">
												<div className="heading">
													<h3>Short Story is a Piece of <br />Prose Fiction</h3>
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
															<span className="min-read">7 min read</span>	
															<span className="post-time">2 June 2021</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>

								<div className="carousel-cell">
									<a href="articles-details.html"  title="">
										<div className="overlay-bg"></div>
										<div className="overlay"></div>
										<img src={imagesUrl+"/start-slider-3.jpg"}  className="img-fluid" alt="Banner Slide" title="" />
										<div className="banner-block">
											<div className="heart-block">
												<span className="icon-heart"></span>
												<span className="text-3571">3571</span>
											</div>
											<div className="banner-content">
												<div className="heading">
													<h3>Short Story is a Piece of<br /> Prose Fiction</h3>
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
															<span className="min-read">7 min read</span>	
															<span className="post-time">2 June 2021</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div> */}
							</div>
						</div>
					</div>
				</div>
    </>
  )
}

export default Slider