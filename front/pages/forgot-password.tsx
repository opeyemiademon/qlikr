import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const ForgotPassword=()=> {
  return (
    <div className="modal forgot-password-page" id="forgot-password">
		<div className="modal-dialog modal-lg">
			<div className="modal-content">
				<div className="modal-header1">
					<button type="button" className="close" data-dismiss="modal">
						<a href="index-2.html"><span className="forget-colse icon-close-dark"></span></a>
					</button>
				</div>
				<div className="modal-body">
					<div className="main-page">
						<div className="main-area">
							<div className="forget-cover">
								<h1>Forgot	<br />Password?</h1>
								<p>Enter your registered email address.	</p>
								<form className="list" id="login-form" action="https://www.osumstudio.com/" method="">
									<ul>
										<li className="item-content item-input">
											<div className="item-inner">
												<div className="item-input-wrap">
													<input type="text" name="email" id="forgot-email" placeholder="E-mail Address" className="" />
												</div>
											</div>
										</li>
									</ul>
									<div className="signup">
										<a href="index-2.html" className="list-button" title="">Reset Password</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ForgotPassword