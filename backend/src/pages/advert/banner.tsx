
import { useEffect, useState, ChangeEvent } from "react";
import Breadcomb from "../../components/breadcomb";
import { config, ImagesUrl, ServerUrl } from "../../components/includes";
import Template from "../../components/template";
import axios from "axios";
import UsePagination from '../../components/pageNumber';

import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const Banners = () => {

  const [content, setContent] = useState([] as any);
	const [loading, setLoading] = useState({
        isDatafetching:false,
        isLoading:false
    });
const [perPage, setPerPage] = useState(16);

const users = useSelector((state:any) => state.rootReducer.users);
  let [page, setPage] = useState(1);
  const PER_PAGE = Number(perPage);
const dataList = UsePagination(users, PER_PAGE);

   const handleChange = (num:number) => {
    setPage(num);
    dataList.jump(num);
  };


   const [errors, setErrors] = useState({
        errorMessage:''
    });


 const fetchBanner =  ()=>{
        var sql ="Select ID, code, title, isActive, bannerList, layoutUrl, description from tbl_banner order by title ";

 var fd = {    
    sql:sql
}

let url = ServerUrl+'/fetchSqlQuery'
setLoading({...loading, isDatafetching:true})
 axios.post(url, fd, config)
      .then(response =>{
			if(response.data.length!==0 && Array.isArray(response.data)){
             setContent(response.data)

            }else{
         setErrors({...errors, errorMessage: response.data})
                  } 
    })
       .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{

setLoading({...loading, isDatafetching:false})
                 }) 

                }

useEffect(()=>{
  fetchBanner()
}, [])


  return (
    <>
      <Breadcomb title="Advert" />
    <div className="container-fluid page-content">
         
          <div className="row">
            
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex no-block align-items-center mb-4">
                    <h4 className="card-title">All Banners</h4>
                  
                  </div>
                  <div className="table-responsive">


             <table className="table table-hover customize-table mb-10">
                <thead className='table-light'>
                  <tr>
                      <th scope="col" >Sample</th>
                    <th scope="col" >Title</th>
                    <th scope="col" >Descritption</th>
                    <th scope="col" >Is Active</th>
                     <th scope="col" >Action</th>
                  </tr>
                </thead>
                <tbody>

                  {content&&content.map((item:any, index:number)=>{
                    return (
                       <tr role="row" key={index}>
                          <td>
                            <img src={ImagesUrl+"/advert/"+item.layoutUrl} 
			onError={(e)=>{(e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src =ImagesUrl+'/no.jpg'}} className="img-fluid rounded" width="100" height="100" />
                          </td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>

                        <td>
                            <span className={`badge   ${item.isActive==='Yes'?'text-success bg-light-success':'text-danger bg-light-danger'} font-weight-medium`}>{item.isActive}</span>
                          </td>

                          <td>    <Link to={`/banner/edit/`+item.code} className=" btn  btn-outline-primary">  <i className='fa fa-image'></i> Add Image </Link>
                     </td>
                         
                          
                        </tr>

                    )
                  })}
                </tbody>
                 
              </table>
          
                </div>
              </div>
            </div>

</div>
          </div>
        </div>

    </>
  );
};

export default Banners
