import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const LiveEvent=()=> {
  return (
    <section className="home">
    <div className="mobile-area startpage">
        <div className="main-page">
           
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="page-header">
                    <div className="navbar-inner">
                        <div className="left back-page">
                            <a href="pages.html">
                                <span className="icon-arrow-big2"></span>
                            </a>
                        </div>
                        <div className="center article-head">
                            <h1>Live Reporting</h1>
                        </div>
                        <div className="right moon-icon">
                            <span className="icon-day-night-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xs-12">
                <div className="travel-tag">
                    <div className="all-box-area">
                        <span className="live-tag">Live</span>
                        <div className="usa-china-plicy-sh">
                            <h1>A USA-China plicy shifts, <br />top officials will meet in<br /> Alaska</h1>
                            <p>Proin sed est porta, imperdiet velit quis, faucibussem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. </p>
                            <div className="usa-china-img">
                               <img  src={imagesUrl+"/image29.jpg"} alt="" title="" />
                            </div>
                        </div>
                        <div className="live-event-area">
                            <div className="live-event">
                                <div className="event-date">
                                    <p>Jun 02</p>
                                    <h5>13:32 (IST)</h5>
                                </div>
                                <div className="event-content">
                                  <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada.</p>
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="https://www.facebook.com/">
                                                <span className="icon-facebook2"><span className="path1"></span><span className="path2"></span></span></a>
                                            </li>
                                            <li><a href="https://twitter.com/">
                                                <span className="icon-twitter2"><span className="path1"></span><span className="path2"></span></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="live-event-area">
                            <div className="live-event">
                                <div className="event-date">
                                    <p>Jun 02</p>
                                    <h5>12:32 (IST)</h5>
                                </div>
                                <div className="event-content">
                                    <p>Proin sed est porta, imperdiet velit quis, faucibus.</p>
                                    <h4>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. </h4>
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="https://www.facebook.com/">
                                                <span className="icon-facebook2"><span className="path1"></span><span className="path2"></span></span></a>
                                            </li>
                                            <li><a href="https://twitter.com/">
                                                <span className="icon-twitter2"><span className="path1"></span><span className="path2"></span></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="live-event-area">
                            <div className="live-event">
                                <div className="event-date">
                                    <p>Jun 02</p>
                                    <h5>12:32 (IST)</h5>
                                </div>
                                <div className="event-content">
                                    <p>Proin sed est porta, imperdiet velit quis, faucibus.</p>
                                    <h4>Proin sed est porta, imperdiet velit quis, faucibus sem.</h4>
                                </div>
                            </div>
                            <div className="usa-china-img">
                                <img src={imagesUrl+"/image30.jpg"}  alt="" title="" />
                            </div>
                            <div className="live-event">
                                <div className="event-content">
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="https://www.facebook.com/">
                                                <span className="icon-facebook2"><span className="path1"></span><span className="path2"></span></span></a>
                                            </li>
                                            <li><a href="https://twitter.com/">
                                                <span className="icon-twitter2"><span className="path1"></span><span className="path2"></span></span></a>
                                            </li>
                                        </ul>
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

export default LiveEvent