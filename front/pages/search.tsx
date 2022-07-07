import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { config, imagesUrl, serverUrl, siteUrl } from '../src/components/Includes';
import axios from 'axios';
import { shortText, timeSince } from '../src/components/globalFunction';
import SearchIt from '../src/sections/search';
import Loader from '../src/components/loader';

const Search =()=> {

    const [query, setQuery] = useState('');
	const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
	const [content, setContent] = useState([] as any);
	let [limit, setLimit] = useState(6);

	const nextPage = (num:number)=>{
		setLimit(num)
		fetchPost(num, query)
	  }

      const fetchPost =  async(limit:number, queryString:string)=>{
	   
        var sql ="Select   distinct p.code, p.post_title, p.post_content, u.user_url, p.post_excerpt, p.post_image, p.view_count, p.post_date, p.post_slug, u.display_name as post_autor, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' and p.post_title  Like '%"+queryString+"%'  ";
    
        sql = sql+" order by p.ID DESC  LIMIT "+limit
        setQuery(queryString)
    var fd = {    
    sql:sql
    }
    
    setLoading({...loading, isDatafetching:true})
    let url = serverUrl+'/carelessfetch'
    await axios.post(url, fd, config)
        .then(response =>{
  
              if(response.data.length!==0 && Array.isArray(response.data)){
               setContent(response.data)
              }else{
                setContent([])
                    } 
      }).finally(()=>{
  
        setLoading({...loading, isDatafetching:false})
                 }) 
    
                }


useEffect(()=>{
    

    if (typeof window !== undefined) {
        let   queryString = new URLSearchParams(window.location.search).get("q") as string
        
        fetchPost(6, queryString)

            }
            
        }, [])


                        interface slides {
                            post_title: string,
                            subtitle:string,
                            post_autor:string, 
                            post_date:string, 
                            post_image:string,
                            post_slug:string,
                            post_category:string,
                            post_content:string,
                            user_url:string,
                        }
    
  return (
    <section className="home">
        <div className="mobile-area startpage">
            <div className="main-page">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                {loading.isDatafetching?<Loader />:''}
                    <div className="page-header">
                        <div className = "navbar-inner">
                            <div className = "left back-page">
                                <a href="/categories">
                                    <span className="icon-arrow-big2"></span>
                                </a>
                            </div>
                         <SearchIt />

                            <div className = "right moon-icon">
                                <span className="icon-day-night-icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="news-tab">
                        <ul>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="/story-news" className="active" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-all-news"></span>
                                        </span>
                                        <span className="allnews">All News</span>
                                    </a>
                                </div>
                            </li>
                           <li className="nav-item ">
                              <div className="cat-content">
                                   <a href="#" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-trending-white"></span>
                                        </span>
                                        <span className="allnews">Trending</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="#" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-latest"></span>
                                        </span>
                                        <span className="allnews">Latest</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="#" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-unread"></span>
                                        </span>
                                        <span className="allnews">Unread</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                   <a href="#" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-trending-white"></span>
                                        </span>
                                        <span className="allnews">Trending</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                              <div className="cat-content">
                                    <a href="#" className="" title="" target="">
                                        <span className="cat-icon">
                                            <span className="icon icon-latest"></span>
                                        </span>
                                        <span className="allnews">Latest</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="categories hashtag">
                        <h1>Suggestes Hashtags</h1>
                        <div className="hashtag-area pill-container">
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-a" name="selector" value="a" />
                                <label className="selector option-a" htmlFor="option-a"> Cricket</label>
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-b" name="selector" value="b" />
                                <label className="selector" htmlFor="option-b">Today</label>
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-c" name="selector" value="c" />
                                <label className="selector" htmlFor="option-c">Politics</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-d" name="selector" value="d" />
                                <label className="selector" htmlFor="option-d">Vaccines</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-e" name="selector" value="E" />
                                <label className="selector" htmlFor="option-e">Hollywood</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-f" name="selector" value="F" />
                                <label className="selector" htmlFor="option-f">Moderna</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-g" name="selector" value="G" />
                                <label className="selector" htmlFor="option-g">Fashion</label> 
                            </div>
                            <div className="intrest-wrap">
                                <input type="checkbox" id="option-h" name="selector" value="h" />
                                <label className="selector" htmlFor="option-h">Freedom</label> 
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 block-leftspace">
                    <div className="search-page-content">

                       <div className="cat-block-1">
                        <div className="home-cat-content">
                              <h6>Search Result ({query})</h6>
                        </div>
                        <div className ="lifestyle-wrap categories-block">
								
							{content.length!==0?content.map((item:slides, id:number)=>	<div key={id} className ="post-wraper">
									<div className ="post-thumb" >
									<Link href={siteUrl+"/articles/"+item.post_slug}><a >
											<img src={imagesUrl+"/post/"+item.post_image} className="post-image"  alt="" title="" />    
										</a></Link>
									</div>
									<div className ="post-text-outer">
										<div className ="post-user-info">
										<Link href={siteUrl+"/articles/"+item.post_slug}><a>
												<div className ="life-txt">
													<h3>{item.post_category.toUpperCase()}</h3>
													<h2>{shortText(item.post_title, 50)}</h2>
													<div className ="life-icon">
														<h3 className ="art-content">
															<span className ="author-area">
																<img src={imagesUrl+"/users/"+item.user_url} alt="" title="" className='img-profile' /> 
															</span>
															<span>{item.post_autor}</span> 
															<span className ="lifetime">{timeSince(new Date(item.post_date))}</span>  
														</h3>
													</div>  
												</div>
											</a></Link>
										</div>
									</div>
								</div>):''}
							</div>

                            <div className ="col-xl-12 col-md-12">
				<div className ="all-box-area" id="lt">
					<div className ="load-more-btn">
						<a href="#lt"  className ="loadMore" title="" onClick={()=>nextPage(limit+6)}>Load More</a>
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

export default Search