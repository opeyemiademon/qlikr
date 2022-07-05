import React from 'react'
import { imagesUrl } from '../components/Includes'

const CategoryCard =()=> {
  return (
   <>
   
   
   <div className="home-cat-content">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  col-xl-12">
								<h6>Categories
									<span className="see-all btn-color-change color-change"><a href="categories.html">SEE ALL</a></span>
								</h6>
							</div>
						</div>



						<div className="home-cat-slider slider-cat">
						<div className="carousel trending-carousel"
            				data-flickity='{ "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false }'>
								<div className="carousel-cell">
									<a href="articles-list.html"  title="">
										<div className="list-area travel-article">
											<img src={imagesUrl+"/character1.svg"} className="img-fluid" alt="" title="" />
											<div className="home-c-content">
												<p>Travel</p>
												<p className="articles-count">172 Articles</p>
											</div>										
										</div>
									</a>
								</div>
								<div className="carousel-cell">
									<a href="articles-list.html"  title="">
										<div className="list-area lifestyle-art">
											<img src={imagesUrl+"/character2.svg"} className="img-fluid" alt="" title="" />
											<div className="home-c-content">
												<p>Lifestyle</p>
												<p className="articles-count">120 Articles</p>
											</div>
										</div>
									</a>
								</div>
								<div className="carousel-cell">
									<a href="articles-list.html"  title="">
										<div className="list-area fitness-art">
											<img src={imagesUrl+"/character3.svg"}className="img-fluid" alt="" title="" />
											<div className="home-c-content">
												<p>Fitness</p>
												<p className="articles-count">243 Articles</p>
											</div>
										</div>
									</a>
								</div>
								<div className="carousel-cell">
									<a href="articles-list.html"  title="">
										<div className="list-area education-art">
										<img src={imagesUrl+"/character4.svg"} className="img-fluid" alt="" title="" />
											<div className="home-c-content">
												<p>Education</p>
												<p className="articles-count">265 Articles</p>
											</div>
										</div>
									</a>
								</div>
								<div className="carousel-cell">
									<a href="articles-list.html"  title="">
										<div className="list-area sports-art">
											<img src={imagesUrl+"/character3.svg"} className="img-fluid" alt="" title="" />
											<div className="home-c-content">
												<p>Sports</p>
												<p className="articles-count">56 Articles</p>
											</div>
										</div>
									</a>
								</div>
								<div className="carousel-cell">
									<a href="articles-list.html"  title="">
										<div className="list-area techology-art">
											<img src={imagesUrl+"/character3.svg"}className="img-fluid" alt="" title="" />
											<div className="home-c-content">
												<p>Techology</p>
												<p className="articles-count">85 Articles</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
   </>
  )
}

export default CategoryCard