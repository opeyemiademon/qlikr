import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const Register =()=> {
  return ( 
    <section className="home">
		<div className="mobile-area">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div className="main-page">
							<div className="wrap">
								<div className="logo">
									
                                <img src={imagesUrl+"/logo1.svg"}className="light-mode-logo" alt="" title="" />
									<img src={imagesUrl+"/logo2.svg"} className="dark-mode-logo" alt="" title="" />
								</div>
								<div className="main-area">
									<h1>Register</h1>
									<form className="list" id="login-form" action="https://www.osumstudio.com/" method="">
										<ul>
											<li className="item-content item-input">
												<div className="item-inner">
													<div className="item-input-wrap">
														<input type="text" name="name" id="dump-name" placeholder="Name" className="" />
													</div>
												</div>
											</li>
											<li className="item-content item-input">
												<div className="item-inner">
													<div className="item-input-wrap">
														<input type="text" name="email" id="dump-email" placeholder="E-mail" className="" />
													</div>
												</div>
											</li>
											<li className="item-content item-input">
												<div className="item-inner">
													<div className="item-input-wrap">
														<input type="password" name="password" id="dump-password" placeholder="Password" className="" />
													</div>
												</div>
											</li>
										</ul>
										<div className="signup">
											<a href="walkthrough.html" className="list-button" title="">Register</a>
											<div className="signin-up or-text">or</div>
										</div>
										<div className="login-social-icon">
											<a href="https://www.facebook.com/" className="link" target="_blank">
												<span className="icon-facebook"><span className="path1"></span><span className="path2"></span></span>
											</a>
											<a href="https://accounts.google.com/" className="link" target="_blank">
												<span className="icon-google"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
											</a>
										</div>
									</form>
								</div>
								<div className="login-footer">
									<p>Already have an account?</p>
									<a className="log-title" href="/login">Log In</a>
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

export default Register