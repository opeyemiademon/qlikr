import React from 'react'
import Footer from '../src/components/footer'
import Header from '../src/components/header'
import { imagesUrl } from '../src/components/Includes'

const Settings =()=> {
  return (
    <section className="home">
    <div className="mobile-area startpage">
        <div className="main-page">
           
           <Header />

            <div className="categories setting-potfolio">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="all-box-area">
                        <div className="user-profile">
                            <div className="author-area setting-profile isabella">
                                <a href="premium-pass.html">
                                    <img src={imagesUrl+"/author5.svg"} alt="" title="" />
                                </a>
                            </div>
                            <div className="post-text-outer">
                                <h1>Charlotte</h1>
                                <p className="user-name">Italy</p>
                                <a href="premium-pass.html" role="button" className="list-button get-pre-setting btn-color-change">Get Premium Pass</a>
                            </div>
                        </div>
                        <div className="list pages-list color-bar">
                            <h1>Color Scheme</h1>
                            <div className="custom-radios">
                                <div>
                                    <input type="radio" id="color-1" name="color" value="color-1"
                                    className="choose-color button-blue-checked"
                                    data-color="#1987FF"/>
                                    <label htmlFor="color-1">
                                        <span>
                                            <img  src={imagesUrl+"/tick-big.svg"} alt="Checked Icon" title="" />
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" id="color-2" name="color" value="color-2"
                                    className="choose-color button-yellow-checked"
                                    data-color="#ECBD34"/>
                                    <label htmlFor="color-2">
                                        <span>
                                            <img src={imagesUrl+"/tick-big.svg"} alt="Checked Icon" title="" />
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" id="color-3" name="color" value="color-3"
                                    className="choose-color button-orchid-checked"
                                    data-color="#C281D1"/>
                                    <label htmlFor="color-3">
                                        <span>
                                            <img src={imagesUrl+"/tick-big.svg"} alt="Checked Icon" title="" />
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" id="color-4" name="color" value="color-4"
                                    className="choose-color button-chino-checked"
                                    data-color="#8BB0BA" />
                                    <label htmlFor="color-4">
                                        <span>
                                            <img src={imagesUrl+"/tick-big.svg"} alt="Checked Icon" title="" />
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" id="color-5" name="color" value="color-5"
                                    className="choose-color button-mandy-checked"
                                    data-color="#EC5E78" />
                                    <label htmlFor="color-5">
                                        <span>
                                            <img src={imagesUrl+"/tick-big.svg"} alt="Checked Icon" title="" />
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="Pages-block categories-block select-language-block">
                                <ul>
                                    <li>
                                        <a href="language.html">
                                            <div className="item-inner">
                                                <div className="item-title">Language</div>
                                                <p className="slect-language set-language">English</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="content-style">
                                            <div className="item-title">Content Style</div>
                                            <p className="slect-language">
                                                <button type="button" className="rtl-btn btn btn-toggle" data-toggle="button"
                                                aria-pressed="false" >
                                                <div className="handle"></div>
                                                </button>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <div className="item-inner">
                                                <div className="item-title">Contact</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components.html">
                                            <div className="item-inner">
                                                <div className="item-title">Components</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="pages.html">
                                            <div className="item-inner">
                                                <div className="item-title">Pages</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </div>
</section>
  )
}

export default Settings