import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import Link from 'next/link';


const CategoryList =()=> {
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

	
	var sql ="Select count(p.ID) as total, c.name, c.slug, c.avatar from tbl_posts p, tbl_category c where  c.code=p.post_category and p.post_status ='Published'  group by p.post_category order by total DESC limit 5"
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
    	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 block-leftspace">
					
					<div className="news-area">
						<h1>Latest News</h1>
						<div className="news-tab">
							<ul>

							<li className="nav-item active">
							<Link href={"/articles-list"}><a href="articles-list.html" className="nav-link">All</a></Link>
							</li>

								{content.length!==0?content.map((item:slides, id:number)=><li key={id} className="nav-item">
								<Link href={"/articles-list?s="+item.slug}><a className="nav-link">{item.name}</a></Link>
								</li>):''}

							</ul>

						</div>
					</div>
					
				</div>
    </>
  )
}

export default CategoryList