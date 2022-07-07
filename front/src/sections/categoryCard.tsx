import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import axios from 'axios';
import { shortText, timeSince } from '../components/globalFunction';

const CategoryCard =()=> {


	const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
	const [content, setContent] = useState([] as any);
	let [limit, setLimit] = useState(6);

	
	const getColor=()=>{
		return `#${Math.floor(Math.random()* 0xffffff).toString(16)}`
	 }

const fetchPost =  async()=>{

	
	var sql ="Select count(p.ID) as total, c.name, c.slug, c.avatar from tbl_posts p join tbl_category c on c.code=p.post_category and p.post_status ='Published' group by p.post_category order by p.view_count ASC limit 3"
	

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
			total: string,
			slug:string,
			name:string, 
			avatar:string,
		}


		useEffect(()=>{
		fetchPost()
		  }, [])




  return (
   <>
   
   <div className="home-cat-content">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  col-xl-12">
								<h6>Categories
									<span className="see-all btn-color-change color-change"><Link href="/categories"><a >SEE ALL</a></Link></span>
								</h6>
							</div>
						</div>

						<div className="trending-carousels cat-wrapper">
							
							{content.length!==0?content.map((item:slides, id:number)=><div key={id} className="carousel-cell" >
							<Link href={"/articles-list?s="+item.slug}><a title="">
										<div className="list-area " style={{ backgroundColor:getColor(), opacity:0.8 }}>
											<img src={imagesUrl+"/category/"+item.avatar}  className="img-fluid" alt="" title="" />
											<div className="home-c-content">
											<p className='text-white'>{shortText(item.name, 10)}</p>
											<p className="articles-count text-white">{item.total} Articles</p>
											</div>										
										</div>
									</a></Link>
									</div>):''}

							</div>
   </>
  )
}

export default CategoryCard