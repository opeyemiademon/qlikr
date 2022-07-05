import React from 'react'

const CategoryList =()=> {
  return (
    <>
    	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 block-leftspace">
					
					<div className="news-area">
						<h1>Latest News</h1>
						<div className="news-tab">
							<ul>
								<li className="nav-item active">
									<a href="articles-list.html" className="nav-link">All</a>
								</li>
								<li className="nav-item">
									<a href="articles-list.html" className="nav-link">Travel</a>
								</li>
								<li className="nav-item">
									<a href="articles-list.html" className="nav-link">Lifestyle</a>
								</li>
								<li className="nav-item">
									<a href="articles-list.html" className="nav-link">Fitness</a>
								</li>
								<li className="nav-item">
									<a href="articles-list.html" className="nav-link">Education</a>
								</li>
								<li className="nav-item">
									<a href="articles-list.html" className="nav-link">Technology</a>
								</li>
							</ul>

						</div>
					</div>
					
				</div>
    </>
  )
}

export default CategoryList