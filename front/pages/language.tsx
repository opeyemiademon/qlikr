import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const Language =()=> {
  return (
    <section className="home">
		<div className="mobile-area startpage">
			<div className="main-page">
				
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

					<div className="page-header">
						<div className= "navbar-inner">
							<div className= "left back-page">
								<a href="setting.html">
									<span className="icon-arrow-big2"></span>
								</a>
							</div>
							<div className= "center article-head">
								<h1>Select Language</h1>
							</div>
							<div className= "right moon-icon">
								<span className="icon-day-night-icon"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="language-area">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div className="language-block">
							<h1>Languages</h1>
							<div className="language-wrapper">
								<div className="language-img">
									<img src={imagesUrl+"/india.svg"}  alt="" title="" />
								</div>
								<div className="post-text-outer">
									<div className="life-icon">
										<div className="art-content">
											<div className="auhtor-content">
												<h3 className="auth-name">Hindi</h3>
											</div>
											<div className="custom-radios">
												<input type="radio" id="hindi" name="color" value="hindi" />
												<label htmlFor="hindi">
													<span>
														<img src={imagesUrl+"/chekmark-selected.svg"} alt="Checked Icon" />
													</span>
												</label>
											</div>
										</div>
									</div>  
								</div>
							</div>
							<div className="language-wrapper">
								<div className="language-img">
									<img  src={imagesUrl+"/united_states.svg"} alt="" title="" />
								</div>
								<div className="post-text-outer">
									<div className="life-icon">
										<div className="art-content">
											<div className="auhtor-content">
												<h3 className="auth-name">English</h3>
											</div>
											<div className="custom-radios">
												<input type="radio" id="english" name="color" value="english"  checked />
												<label htmlFor="english">
													<span>
														<img src={imagesUrl+"/chekmark-selected.svg"} alt="Checked Icon" title="" />
													</span>
												</label>
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
		</section>

  )
}

export default Language