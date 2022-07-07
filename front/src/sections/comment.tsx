import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import ReplyPost from './replyPost';
import { timeSince } from '../components/globalFunction';


const Comment =({slug}:{slug:any})=> {

    const [loading, setLoading] = useState({
		isDatafetching:false,
		isLoading:false
	});
    const [postId, setPostId] = useState('');
  const [content, setContent] = useState([] as any);
const getSubcomment =(code:String)=>{

const res = content&&content.filter((item:any)=>item.comment_parent===code)
return res.length!==0?res:[]
}


  const fetchComment=  async()=>{
    setLoading({...loading, isDatafetching:true})

     var sql ="Select  comment_post_ID, comment_author, comment_author_email, comment_author_IP, comment_date, comment_content, comment_approved,comment_agent, comment_type, comment_parent, user_id, code from tbl_comments where comment_post_ID = '"+slug.code+"' order by ID DESC";


var fd = {    
sql:sql
}

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

                fetchComment()
              }, [])


  return (
  
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div className="comments" id="comment-id">
    {content.length!==0? <h1 className="sub-headings"> Comments</h1>:''}
       
        {content.length!==0? content.filter((item:any)=>item.comment_type==='comment').map((item:any, index:number)=><div key={index} className="post-wraper all-post">
            <a href="#">
                <div className="author-area clark">
                    <img src={imagesUrl+"/logo.png"} alt="" title="" className='img-profile'  onError={(e)=>{(e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src =imagesUrl+"/no.jpg"}} />
                </div>
            </a>
            <div className="post-text-outer">
                <div className="auth-life-txt">
                    <div className="life-icon">
                        <div className="art-content">
                            <div className="auth-details">
                                <a href="#">
                                    <div className="auhtor-content">
                                        <h3 className="auth-name">{item.comment_author}</h3>
                                        <h5 className="auth-art">{timeSince(new Date(item.comment_date))}</h5>
                                        <p>{item.comment_content}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>):''}
    </div>
    <ReplyPost slug={slug} postId={postId} />
</div>
  )
}

export default Comment