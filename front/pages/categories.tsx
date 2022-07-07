import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { config, imagesUrl, serverUrl, siteUrl } from '../src/components/Includes';
import axios from 'axios';
import { shortText, timeSince } from '../src/components/globalFunction';
import Footer from '../src/components/footer'
import Header from '../src/components/header'
import Loader from '../src/components/loader';

const Categories =()=> {

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

	
	var sql ="Select count(p.ID) as total, c.name, c.slug, c.avatar from tbl_posts p join tbl_category c on c.code=p.post_category and p.post_status ='Published' group by p.post_category "
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
    <section className="home">{loading.isDatafetching?<Loader/>:''}
		<div className="mobile-area startpage">
			<div className="main-page">
				
				<Header />
				
				<div className="all-box-area">
					<div className="categories">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<h1>Categories</h1>
							<div className="row categories-list">
								
							{content.length!==0?content.map((item:slides, id:number)=><div key={id} className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0">
									<div className="list-area" style={{ backgroundColor:getColor(), opacity:0.8 }}>
										<Link href={"/articles-list?s="+item.slug}><a>
											<img src={imagesUrl+"/category/"+item.avatar} className="img-fluid" alt="" title="" />										
											<p>{shortText(item.name, 10)}</p>
											<p className="articles-count">{item.total} Articles</p>
										</a></Link>
									</div>
								</div>):''}
								
																																				
							</div>
						</div>
					</div>
				</div>
				
			</div>
<Footer />		
		</div>
	</section>
    </>
  )
}

export default Categories