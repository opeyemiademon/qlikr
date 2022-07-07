import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import axios from 'axios';
import { shortText, timeSince } from '../components/globalFunction';
import Image from 'next/image';

const TrendingNews =()=> {

	const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
	const [content, setContent] = useState([] as any);
	let [limit, setLimit] = useState(6);

	
	 

const fetchPost =  async(limit:number)=>{

	var sql ="Select distinct p.post_slug, p.code, p.post_title, p.view_count, p.post_date,  p.post_image, u.display_name as post_autor, u.user_url, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' "
	
	
	sql = sql+" order by  p.post_date DESC  LIMIT "+limit

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
		fetchPost(3)
		  }, [])
		  
  return (
    <>
    	<div className="cat-block-2 all-box-area">
							<div className="startpage-content">
								<h6>Trending News
									<span className="see-all  btn-color-change"><Link href="/articles-list"><a >SEE ALL</a></Link></span>
								</h6>
								<div className="categories-block">
									<div className="post-area post-area-main">
									{content.length!==0?content.map((item:slides, id:number)=><Link key={id} href={siteUrl+"/articles/"+item.post_slug}><a  title="">
											<div className="post-wraper">
												<div className="post-thumb">
													<img src={imagesUrl+"/post/"+item.post_image} className="post-image" alt="" title="" />	
												</div>
												<div className="post-text-outer">
													<div className="post-user-info"> 
														<div className="life-txt">
															<h3>{item.post_category.toUpperCase()}</h3>
															<h2>{shortText(item.post_title, 50)}	</h2>
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
													</div>
												</div>
											</div>
										</a></Link>):''}

									</div>
								</div>
							</div>
						</div>
    </>
  )
}

export default TrendingNews