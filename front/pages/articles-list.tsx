import Link from 'next/link'
import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const ArticlesList =()=> {
  return (
    <section className ="home article-page-list">
		<div className ="mobile-area startpage">
			<div className ="main-page">
				
				<div className ="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className ="page-header">
						<div className = "navbar-inner">

							<div className = "left back-page" data-aos="fade-up">
							<Link href="/"><a href="/">
									<span className ="icon-arrow-big2"></span>
								</a></Link>
							</div>
							<div className = "center article-head" data-aos="fade-up">
								<h1>Articles List</h1>
							</div>

							<div className = "right moon-icon" data-aos="fade-up">
								<span className ="icon-day-night-icon"></span>
							</div>

						</div>
					</div>
				</div>
				<div className ="all-box-area">
					<div className ="travel-area">
						<div className ="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<h1>News Feed</h1>
							<div className ="lifestyle-wrap categories-block">
								
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a >
											<img src={imagesUrl+"/image27.jpg"}  alt="" title="" />    
										</a></Link>
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info">
										<Link href="/articles/2"><a>
												<div className ="life-txt">
													<h3>LIFESTYLE</h3>
													<h2>Short Story is a Piece of Prose Fiction</h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a>
											<img src={imagesUrl+"/image24.jpg"} alt="" title="" /> 
										</a></Link>   
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info"> 
										<Link href="/articles/2"><a >
												<div className ="life-txt">
													<h3>LIFESTYLE</h3>
													<h2>Fabulous the shadow of the little Prince Story </h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a >
											<img src={imagesUrl+"/image25.jpg"} alt="" title="" /> 
										</a></Link>
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info"> 
										<Link href="/articles/2">
											<a >
												<div className ="life-txt">
													<h3>TRAVEL</h3>
													<h2>A man stand alone watch the full Moon Night </h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a>
											<img src={imagesUrl+"/image26.jpg"} alt="" title="" />
										</a></Link>    
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info">
										<Link href="/articles/2"><a> 
												<div className ="life-txt">
													<h3>FITNESS</h3>
													<h2>A man stand alone watch the full Moon Night </h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a>
											<img src={imagesUrl+"/image25.jpg"} alt="" title="" /> 
										</a></Link>   
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info"> 
										<Link href="/articles/2"><a >
												<div className ="life-txt">
													<h3>TRAVEL</h3>
													<h2>Advantages of online education </h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>
							</div>
							<div id="more-listing">
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a>
											<img src={imagesUrl+"/image27.jpg"} alt="" title="" />  
										</a></Link>  
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info">
										<Link href="/articles/2"><a>
												<div className ="life-txt">
													<h3>TRAVEL</h3>
													<h2>Advantages of online education </h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>
								<div className ="post-wraper">
									<div className ="post-thumb">
									<Link href="/articles/2"><a >
											<img src={imagesUrl+"/image24.jpg"} alt="" title="" /> 
										</a></Link>
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info"> 
										<Link href="/articles/2"><a >
												<div className ="life-txt">
													<h3>FITNESS</h3>
													<h2>A man stand alone watch the full Moon Night </h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/author5.svg"} alt="" title="" /> 
															</span>
															<span>Isabella</span> 
															<span className ="lifetime"> 7 Min</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>                           
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-xl-12 col-md-12">
				<div className ="all-box-area">
					<div className ="load-more-btn">
						<a href="#"  className ="loadMore" title="">Load More</a>
					</div>
				</div>
			</div>		
		</div>
	</section>
  )
}

export default ArticlesList