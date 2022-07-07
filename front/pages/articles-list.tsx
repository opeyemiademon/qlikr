
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { config, imagesUrl, serverUrl, siteUrl } from '../src/components/Includes';
import axios from 'axios';
import { shortText, timeSince } from '../src/components/globalFunction';
import Loader from '../src/components/loader';
import Footer from '../src/components/footer';

const ArticlesList =()=> {


	const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
	const [content, setContent] = useState([] as any);
	let [limit, setLimit] = useState(6);

	const nextPage = (num:number)=>{
		setLimit(num)
		fetchPost(num)
	  }


	 

const fetchPost =  async(limit:number)=>{

	var sql ="Select distinct p.post_slug, p.code, p.post_title, p.view_count, p.post_date,  p.post_image, u.display_name as post_autor, u.user_url, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' "
	
	if (typeof window !== undefined) {
		let   cat = new URLSearchParams(window.location.search)

		if(cat.get("s")){
			sql = sql + " and c.code = '"+cat.get("s")+"' "
		}

		   }
	

	sql = sql+" order by p.ID DESC  LIMIT "+limit

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


		useEffect(()=>{
		fetchPost(6)
		  }, [])
		  

  return (<>
    <section className ="home article-page-list">
		{loading.isDatafetching?<Loader/>:''}
		<div className ="mobile-area startpage">
			<div className ="main-page">
				
				<div className ="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className ="page-header">
						<div className = "navbar-inner">

							<div className = "left back-page" data-aos="fade-up">
							<Link href="/"><a href="/">
									<span className ="icon-arrow-big2"></span>
								</a></Link>
							</div>
							<div className = "center article-head" data-aos="fade-up">
								<h1>Articles List</h1>
							</div>

							<div className = "right moon-icon" data-aos="fade-up">
								<span className ="icon-day-night-icon"></span>
							</div>

						</div>
					</div>
				</div>
				<div className ="all-box-area">
					<div className ="travel-area">
						<div className ="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<h1>News Feed</h1>
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
						</div>
					</div>
				</div>
			</div>
			<div className ="col-xl-12 col-md-12">
				<div className ="all-box-area" id="lt">
					<div className ="load-more-btn">
						<a href="#lt"  className ="loadMore" title="" onClick={()=>nextPage(limit+6)}>Load More</a>
					</div>
				</div>
			</div>		
		</div>
		
	</section>
	<div className="h50"></div>
	<Footer />
	</>
  )
}

export default ArticlesList