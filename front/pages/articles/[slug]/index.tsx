import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios';
import {config, imagesUrl, serverUrl, siteUrl  } from '../../../src/components/Includes'
import Seo from '../../../src/components/Seo';
import Loader from '../../../src/components/loader';
import { slides } from '../../../src/components/Interface';
import Link from 'next/link';
import Comment from '../../../src/sections/comment';
import SimilarPost from '../../../src/sections/similarPost';
import { timeSince } from '../../../src/components/globalFunction';


const Index =({content}:any)=> {

    const router = useRouter()
    const {slug} = router.query
    const [loading, setLoading] = useState({
        isDatafetching:false,
        isLoading:false
    });

  
  const embededQuote =()=>{

    const subsEl = `<div className="description-cont story-con">
    <div className="review-story">
        <div className="review-text">
            <h5>RELATED QUOTE</h5>
            <h1>Trust yourself, you know more than you think you do.</h1>
        </div>
    </div>
    <p>This is just a quote, a very nice quote/p>
  
</div>`;

    const pTags = document.querySelectorAll('p'); 
    for (let i = 0; i < pTags.length - 1; i++) { 
        
        pTags[i].prepend(document.createElement(subsEl)); 
    
    }
  }


    const property ={
        title:content.length!==0?content[0].post_title:'Qlikr news and analysis from across the globe',
        description:content[0].post_excerpt.length!==0?content[0].post_excerpt:content[0].post_title,
        keywords:content.length!==0?content[0].post_title:''
      } 



      const fetchCountView =  async()=>{
        setLoading({...loading, isDatafetching:true})
        var fd = {    
        post_slug:slug
        }
        
        let url = serverUrl+'/update_controller/tbl_count_view'
        await axios.post(url, fd, config).then(()=>{
            setLoading({...loading, isDatafetching:false})
        })
        
                    }

                    useEffect(()=>{
                        fetchCountView()
                      }, [])      
  return (
    <>
<Seo 
      
      description ={property.description}
      title ={property.title}
        keywords ={property.keywords}
          siteUrl={siteUrl+"/articles/"+slug}
        imageLink ={content.length!==0?imagesUrl+"/post/"+content[0].post_image:imagesUrl+"/post/default.jpg"}
      
      /> 
      {loading.isDatafetching?<Loader />:''}
     
	{content&&content.map((item:slides, id:number)=><section key={id} className="home">
    <div className="mobile-area articles-details-page">
        <div className="header-wrapper details-head" style={{ backgroundImage:`url(${imagesUrl+"/post/"+item.post_image})`,
    
    }}>                           
            <div className="close-bar">
               <Link href="/"><a>
                    <span className="icon-close-white"></span>
                </a></Link>
            </div>
            <div className="head-content">
                <span className="nws"><Link href={"/articles-list?s="+item.slug}><a>{item.post_category}</a></Link></span>
            </div>
        </div>
        <div className="bookmark-block">
            <div className="main-page">
                <div className="travel-story all-auth-wraper">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="all-box-area">
                            <div className="follow-us">
                                <div className="News-story-info">
                                    <span className="color-theamb" >
                                        <div className="News-title">
                                            <span className="news-date">
 { new Date(item.post_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: '2-digit' })} </span> 
                                        </div>
                                    </span>
                                </div>
                                <div className="follow-bookmark">
                                    <a href="#" className="like-icon" title="">
                                        <span className="icon-heart-big-3"></span>
                                    </a>
                                    <a href="#comment-id"><span className="icon-bookmark"></span></a>
                                </div>
                            </div>
                            <div className="short-story">
                                <h3>{item.post_title}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="follow-area article-follow-inner">
                        <div className="all-box-area">
                            <div className="post-wraper all-post">
                                <div className="author-area">
                                    <img src={imagesUrl+"/users/"+item.user_url} className="img-profile" alt="" title="" />
                                </div>
                                <div className="post-text-outer">

                                    <div className="life-icon">
                                        <div className="art-content">

                                            <div className="auth-details">
                                                <div className="auhtor-content">
                                                    <h3 className="auth-name">{item.post_autor}</h3>
                                                    <h5 className="auth-art">{timeSince(new Date(item.post_date))}</h5>
                                                </div>
                                            </div>
                                            <div className="lifetime button-btn auth-btn"> 
                                                 <a href="#" className="follow-btn-auth follow-btn" title="">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>  

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="story-social-icon">
                        <ul>
                            <li>
                                <a href={"https://www.facebook.com/sharer/sharer.php?u="+siteUrl+"/articles/"+item.post_slug} rel="noreferrer" target="_blank" title="facebook">
                                    <span className="icon-facebook2"><span className="path1"></span><span className="path2"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href={"http://www.twitter.com/intent/tweet?text="+siteUrl+"/articles/"+item.post_slug} rel="noreferrer" target="_blank" title="twitter">
                                    <span className="icon-twitter2"><span className="path1"></span><span className="path2"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.linkedin.com/sharing/share-offsite/?url="+siteUrl+"/articles/"+item.post_slug} rel="noreferrer" target="_blank" title="linkedin">
                                    <span className="icon-linkedin"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
                                </a>
                            </li>
                            <li>
                                <a  href={"https://wa.me/?text="+siteUrl+"/articles/"+item.post_slug} target="_blank" rel="noreferrer" title="whatsapp">
                                    <span className="icon-whatsapp"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
                                </a>
                            </li>
                            <li>
                                <a href={"https://telegram.me/share/url?url="+siteUrl+"/articles/"+item.post_slug} target="_blank" rel="noreferrer" title="mail">
                                    <span className="icon-mail"><span className="path1"></span><span className="path2"></span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="description-cont">
                    
									<p dangerouslySetInnerHTML={{ __html:item.post_content }}></p> 
                    </div>
                    
                 {/*    <div className="dummy-content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae felis sit amet ligula semper convallis. Vestibulum lectus neque, ultricies et lacus ut, pulvinar blandit sem.</h4>
                    </div>
                    <div className="description-cont">
                        <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. Vivamus id sapien gravida, aliquet lorem ac, tristique odio. Cras eleifend urna hendrerit ullamcorper efficitur. Morbi mattis eros et neque congue eleifend. Curabitur at erat arcu.</p>
                    </div>
                    <div className="description-img">
                        <img src={imagesUrl+"/image11.jpg"}  alt="" title="" />
                    </div>
                   */}
                  
                  
                  
                   {/*  <div className="description-cont story-con">
                        <div className="review-story">
                            <div className="review-text">
                                <h5>RELATED QUOTE</h5>
                                <h1>Trust yourself, you know more than you think you do.</h1>
                            </div>
                        </div>
                        <p>Proin sed est porta, imperdiet velit quis, faucibus sem. Nam malesuada aliquam placerat. Nam hendrerit nibh non lacinia aliquet. Vivamus id sapien gravida, aliquet lorem ac, tristique odio. Cras eleifend urna hendrerit ullamcorper efficitur. Morbi mattis eros et neque congue eleifend. Curabitur at erat arcu.</p>
                      
                    </div> */}




                    <div className="all-box-area">
                        <SimilarPost ID={item.ID} />
                        <Comment  slug={item} />
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>)} </>
  )
}

export default Index


export const getServerSideProps: GetServerSideProps = async (context) => {

    var sql ="Select p.ID, p.code, p.post_title, p.subtitle, p.post_image, c.slug, p.post_excerpt, p.post_content, p.view_count, p.post_date, p.post_slug, p.quote, u.description, u.user_url, u.display_name as post_autor, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' and p.post_slug='"+context.params?.slug+"' limit 1";
    
    var fd = {    
    sql:sql
    }
    
    let url = serverUrl+'/carelessfetch'

    const response =  await axios.post(url, fd, config)

    const content = response.data
  return {
      props:{
        content
      }
  }
}
 