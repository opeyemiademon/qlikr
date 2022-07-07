import React from 'react'
import { imagesUrl } from './Includes'
const Header =()=> {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="page-header">
						<div className = "navbar-inner">
							<div className = "left">
								<img style={{width:'60px'}} src={imagesUrl+"/logo-pipple.png"}  className="light-mode-logo" alt="" title="" />
								<img  src={imagesUrl+"/logo2.svg"} className="dark-mode-logo" alt="" title="" />
							</div>


							<div className="center moon-search">
								<form action="#">
									<div className="input-group" id="search-page">
										<div className="input-group-prepend border-0">
											<button id="button-add" type="button" className="btn btn-link text-info">
												<span className="icon-search"></span>
											</button>
										</div>
										<input type="search" placeholder="Search" aria-describedby="button-addon4" onChange={()=>window.location.href='/search'} className="form-control search-page bg-none border-0" />
									</div>
								</form>
							</div>
							<div className= "right moon-icon" >
								<span className="icon-day-night-icon"></span>
							</div>
						</div>
					</div>
				</div>
  )
}

export default Header