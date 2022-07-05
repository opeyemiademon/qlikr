import Link from 'next/link'
import React from 'react'
import Footer from '../src/components/footer'
import Header from '../src/components/header'
import { imagesUrl } from '../src/components/Includes'
const Categories =()=> {
  return (
    <>
    <section className="home">
		<div className="mobile-area startpage">
			<div className="main-page">
				
				<Header />
				
				
				<div className="all-box-area">
					<div className="categories">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<h1>Categories</h1>
							<div className="row categories-list">
								
								<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area travel-article">
										<Link href="/articles-list"><a>
											<img src={imagesUrl+"/character1.svg"} className="img-fluid" alt="" title="" />										
											<p>Travel</p>
											<p className="articles-count">172 Articles</p>
										</a></Link>
									</div>
								</div>
								
								
								<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area lifestyle-art">
										<Link href="/articles-list"><a>
											<img src={imagesUrl+"/character2.svg"} className="img-fluid" alt="" title="" />
											<p>Lifestyle</p>
											<p className="articles-count">120 Articles</p>
										</a></Link>
									</div>
								</div>
								
								
								<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area fitness-art">
										<Link href="/articles-list"><a>
											<img src={imagesUrl+"/character3.svg"} className="img-fluid" alt="" title="" />
											<p>Fitness</p>
											<p className="articles-count">243 Articles</p>
										</a></Link>
									</div>
								</div>
								
								
								<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area education-art">
										<Link href="/articles-list"><a>
											<img src={imagesUrl+"/character4.svg"} className="img-fluid" alt="" title="" />
											<p>Education</p>
											<p className="articles-count">265 Articles</p>
										</a></Link>
									</div>
								</div>
								
								
								<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area sports-art">
										<Link href="/articles-list"><a>
											<img src={imagesUrl+"/character6.svg"} className="img-fluid" alt="" title="" />
											<p>Sports</p>
											<p className="articles-count">56 Articles</p>
										</a></Link>
									</div>
								</div>
								
								
								<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area techology-art">
										<Link href="/articles-list"><a>
											<img src={imagesUrl+"/character5.svg"}className="img-fluid" alt="" title="" />
											<p>techology</p>
											<p className="articles-count">85 Articles</p>
										</a></Link>
									</div>
								</div>
																																				
							</div>
						</div>
					</div>
				</div>
				
			</div>
<Footer />		
		</div>
	</section>
    </>
  )
}

export default Categories