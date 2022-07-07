import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import ReplyPost from './replyPost';
import { shortText, timeSince } from '../components/globalFunction';
import Link from 'next/link';


const SimilarPost =({ID}:{ID:number})=> {

	const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
	const [content, setContent] = useState([] as any);
	let [limit, setLimit] = useState(6);

	
	 

const fetchPost =  async()=>{

    let prev = Number(ID)+1;
  let next = Number(ID-1);
	var sql ="Select distinct p.post_slug, p.code, p.post_title, p.view_count, p.post_date,  p.post_image, u.display_name as post_autor, u.user_url, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' and p.ID IN ('"+prev+"','"+next+"') and p.ID !='"+ID+"' limit 2";
	

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
		fetchPost()
		  }, [])
  return (
  
    <div className="story-block play-music">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <h1 className="sub-headings"> You might also like</h1>
                                <div className="row">


                                   {content.length!==0?content.slice(0,1).map((item:slides, id:number)=><Link key={id}  href={siteUrl+"/articles/"+item.post_slug}><div  className="col-md-6 col-6">
                                        <div className="vd-icon-txt">

                                            <div className="wrap-vdo">
                                                <a className="play-vd-pop videoPop">
                                                    <img  src={imagesUrl+"/post/"+item.post_image} className="img-fluid full-size" alt="" title="" />
                                                    <img  src={imagesUrl+"/video1.svg"}  className="play-pop-icon" alt="" title="" />    
                                                </a>  
                                            </div>
                                            <div className="post-text post-area-main">
                                          
                                            <p><a href={siteUrl+"/articles/"+item.post_slug}>{shortText(item.post_title,50)}</a></p>
                                                <div className="life-icon">
                                                    <h3 className="time-content">
                                                        <span className="author-area">
                                                            <img src={imagesUrl+"/users/"+item.user_url} className='img-profile'  alt="" title="" /> 
                                                        </span>
                                                        <span>{item.post_autor}</span> 
                                                        <span className="lifetime"> {timeSince(new Date(item.post_date))}</span>  
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div></Link>):''}


                                    {content.length!==0?content.slice(1,2).map((item:slides, id:number)=><Link key={id}  href={siteUrl+"/articles/"+item.post_slug}><div  className="col-md-6 col-6">
                                        <div className="vd-icon-txt">
                                            <div className="wrap-vdo">
                                                <a className="play-vd-pop videoPop">
                                                   <img  src={imagesUrl+"/post/"+item.post_image} className="img-fluid full-size" alt="" title="" />
                                                    <img  src={imagesUrl+"/video1.svg"}  className="play-pop-icon" alt="" title="" />   
                                                </a>  
                                            </div>
                                            <div className="post-text post-area-main">
                                            <p><a href={siteUrl+"/articles/"+item.post_slug}>{shortText(item.post_title,50)}</a></p>
                                                <div className="life-icon">
                                                    <h3 className="time-content">
                                                        <span className="author-area">
                                                            <img src={imagesUrl+"/users/"+item.user_url} className='img-profile' alt="" title="" /> 
                                                        </span>
                                                        <span>{item.post_autor}</span> 
                                                        <span className="lifetime"> {timeSince(new Date(item.post_date))}</span>  
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div></Link>):''}
                                </div>
                            </div>
                        </div>
  )
}

export default SimilarPost