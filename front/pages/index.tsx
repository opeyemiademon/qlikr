import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { imagesUrl } from '../src/components/Includes'
import Loader from '../src/components/loader'
import CategoryCard from '../src/sections/categoryCard'
import CategoryList from '../src/sections/categoryList'
import Footer from '../src/components/footer'
import Slider from '../src/sections/slider'
import TrendingNews from '../src/sections/trendingNews'
import TrendingStory from '../src/sections/trendingStory'

const Home: NextPage = () => {
  return (<>
  
{/* 
<Loader /> */}

	<section className="home">
		<div className="mobile-area startpage">
			<div className="main-page">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="page-header">
						<div className = "navbar-inner">
							<div className = "left">
								<img style={{width:'60px'}} src={imagesUrl+"/logo-pipple.png"}  className="light-mode-logo" alt="" title="" />
								<img  src={imagesUrl+"/logo2.svg"} className="dark-mode-logo" alt="" title="" />
							</div>
							<div className="center moon-search">
								<form action="search-page.html">
									<div className="input-group" id="search-page">
										<div className="input-group-prepend border-0">
											<button id="button-add" type="button" className="btn btn-link text-info">
												<span className="icon-search"></span>
											</button>
										</div>
										<input type="search" placeholder="Search" aria-describedby="button-addon4" className="form-control search-page bg-none border-0" />
									</div>
								</form>
							</div>
							<div className= "right moon-icon" >
								<span className="icon-day-night-icon"></span>
							</div>
						</div>
					</div>
				</div>
			
			
			<CategoryList />

				<Slider />


				<div className="categories">
					<div className="cat-block-1">
					

            <CategoryCard />



						<TrendingStory />





						<div className="seperator-line"></div>
					
					<TrendingNews />
					</div>
				</div>
			</div>
		</div>


	<Footer />
	</section>

  
  </>
  )
}

export default Home
