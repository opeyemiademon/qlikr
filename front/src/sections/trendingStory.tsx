import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import axios from 'axios';
import { shortText, timeSince } from '../components/globalFunction';

const TrendingStory =()=> {

	const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
	const [content, setContent] = useState([] as any);
	let [limit, setLimit] = useState(6);

	
	 

const fetchPost =  async(limit:number)=>{

	var sql ="Select distinct p.post_slug, p.code, p.subtitle, p.post_title, p.post_content, p.view_count, p.post_date,  p.post_image, u.display_name as post_autor, u.user_url, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' "
	
	
	sql = sql+" order by  p.view_count DESC  LIMIT "+limit

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
		fetchPost(1)
		  }, [])

  return (
    <>
    	{content.length!==0?content.map((item:slides, id:number)=><div key={id} className="all-box-area">
							<div className="startpage-content">
								<h4 className="trending-story">TRENDING STORY IN {item.post_category.toUpperCase()}</h4>
								<div className="super-learner">
									<div className="learner">
										<img src={imagesUrl+"/post/"+item.post_image} className="post-image"  alt="" title="" />
									
										<div className="learner-txt">
											<h3>{shortText(item.post_title, 50)}</h3>
											<p className="learner-txt-p"><span>{item.post_autor}</span> <span className="lifetime"> {timeSince(new Date(item.post_date))}</span>  </p>
										</div>
									</div>	
									 <p><Link href={siteUrl+"/articles/"+item.post_slug}><a  title=""><span className="icon-dots"></span></a></Link></p> 
								</div>
							</div>
							<div className="startpage-content">
								<div className="super-learner get-up">
									<h3> {shortText(item.subtitle, 50)}</h3>
									{item.subtitle!==''?<span className="icon-seperator super-get-bar"></span>:''}
									<p dangerouslySetInnerHTML={{ __html:shortText(item.post_content, 250) }}></p>  
								</div>
								<div className="share-like">
									<div className="navbar-inner">
										<div className="left"> 
											<a href="#" className="like-icon"  title="">
												<span className="icon-heart-big-3 icon"></span>
												<span className="like-txt">Like</span></a>
										</div>
										<div className="center">
											<a href={siteUrl+"/articles/"+item.post_slug+"#comment"}  title="">
												<span className="icon-chat icon"></span>
											<span className="like-txt">Comment</span>
											</a>
										</div>
										<div className="right">
											<a href="#" target="_blankd"  title="">
												<span className="icon-logout icon"></span>
											<span className="like-txt">Share</span></a>
										</div>															
									</div>
								</div>
								<div className="signup articles-btn">
								<Link href={siteUrl+"/articles/"+item.post_slug}><a className="list-button  btn-color-change" title="">Read Full Story</a></Link>
								</div>
							</div>
						</div>):''}
    </>
  )
}

export default TrendingStory