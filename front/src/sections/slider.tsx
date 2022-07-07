import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
//https://react-slick.neostack.com/
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { abbreviate, shortText, timeSince } from '../components/globalFunction';
import Loader from '../components/loader';
const HeroSection =()=> {

const [content, setContent] = useState([] as any);

const [loading, setLoading] = useState({
	isDatafetching:false,
	isLoading:false
});
interface slides {
post_title: string,
post_autor:string, 
post_date:string, 
post_image:string,
post_slug:string,
post_category:string,
view_count:number,
user_url:string,
}
/* 
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
  }; */

	 const  settings = {
		speed: 750,
	  autoplay: true,
	  infinite: true,
	  autoplaySpeed: 5000,
	  cssEase: 'ease-in-out',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  pauseOnHover: true, 
	  dots: true,
arrows: false,
initialSlide: 0
}; 


const fetchPosts =  ()=>{

var sql ="Select  distinct p.code, p.post_title, p.view_count, u.user_url, p.post_date, p.post_image, p.post_slug, u.display_name as post_autor, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' order by p.ID DESC limit 5";


var fd = {    
sql:sql
}

let url = serverUrl+'/carelessfetch'
setLoading({...loading, isDatafetching:true})
axios.post(url, fd, config)
.then(response =>{
if(response.data.length!==0 && Array.isArray(response.data)){
 setContent(response.data)

}
})
.catch((error)=>{
  //   setErrors({...errors, errorMessage:error.message})
  }).finally(()=>{

setLoading({...loading, isDatafetching:false})
	 }) 

	}


useEffect(()=>{
fetchPosts()
}, [])			

  return (
    <>
	 
	 {loading.isDatafetching?<Loader />:''}
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				 <div className="bg-banner"/> 
						{/*  <div className="overlay" />  */}
				 <Slider {...settings}>
							{content.length!==0?content.map((item:slides, id:number)=><div key={id}>
						<div  className="bg-image-wrapper" style={{ backgroundImage:`url(${imagesUrl+"/post/"+item.post_image})`
    
					}}>
								<div className="banner-blocks">
											<div className="heart-block">
												<span className="icon-heart"></span> 
												<span className="text-3571">3571</span>
											</div>

								</div>						

						<div className="banner-content">
												<div className="heading">
												<h3 ><Link href={siteUrl+"/articles/"+item.post_slug}><a style={{ color:'#fff' }} >{shortText(item.post_title, 70)}</a></Link></h3>
												</div>
												<div className="img-content">
													<div className="author-area">
														<img src={imagesUrl+"/users/"+item.user_url}  alt="" title="" />
													</div>
													<div className="post-text-outer">
														<div className="post-text">
															<p>{item.post_autor} </p>
														</div>
														<div className="post-user-info">
															<span className="min-read">{abbreviate(item.view_count, 0)} Views</span>	
															<span className="post-time">{timeSince(new Date(item.post_date))} </span>
														</div>
													</div>
												</div>
											</div> 
						
						
					</div></div>):''
					 	 }
						 </Slider>  
				</div>
    </>
  )
}

export default HeroSection