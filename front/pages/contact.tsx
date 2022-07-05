import React from 'react'

const Contact =()=> {
  return (
    <section className="home">
		<div className="mobile-area startpage contact-page-inner">
			<div className="main-page">
				
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="page-header">
						<div className = "navbar-inner">
							<div className = "left back-page">
								<a href="setting.html">
									<span className="icon-arrow-big2"></span>
								</a>
							</div>
							<div className = "center article-head">
								<h1>Contact</h1>
							</div>

							<div className = "right moon-icon">
								<span className="icon-day-night-icon"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="contact-form">
					<div className="contact-area">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<div className="contact-box-area">
								<h1>Get in touch</h1>
							</div>
						</div>
						<div className="form-wrap">
							<form className="contact-us-form">
								<div className="form-row">
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" name="name" id="name" required />
											<label htmlFor="name">Name</label>
											<span className="input-highlight"></span>
										</div>
										<div className="form-group">
											<input type="email" className="form-control" name="email" id="email" required />
											<label htmlFor="email">Email</label>
											<span className="input-highlight"></span>
										</div>
										<div className="form-group  message-area">
											<select className="form-control" required>
												<option selected> Interested In</option>
												<option>Option 1</option>
												<option>Option 2</option>
												<option>Last long option</option>
											</select>
										</div>
										<div className="form-group">
											<textarea name="message" id="message" className="form-control"></textarea>
											<label htmlFor="message">Message</label>
											<span className="input-highlight"></span>
										</div>
									</div>								
								</div>
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<div className="form-submit">
										<div className="success-message alert alert-success">
											<p>Message has been sent successfully.</p>
										</div>
										<button type="submit" className="btn btn-common" id="form-submit">Send Message</button>
									
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Contact