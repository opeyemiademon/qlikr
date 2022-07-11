
import { useState, ChangeEvent } from "react";
import Breadcomb from "../../components/breadcomb";
import { Code, ImagesUrl, multipartConfig, ServerUrl, Token } from "../../components/includes";
import AddUser from "./addUser";
import axios from "axios";
import { closeModal, LoadingModal, SuccessModal, WarningModal } from "../../components/notify";
import UsePagination from '../../components/pageNumber';
import { usePaginated, DOTS } from '../../components/usePagination';

import { useSelector } from 'react-redux'

const Viewusers = () => {
const [loading, setLoading] = useState({
        isDatafetching:false,
        isLoading:false
    });
const [perPage, setPerPage] = useState(16);
const [errors, setErrors] = useState({
        errorMessage:''
    });
const users = useSelector((state:any) => state.rootReducer.users);
  let [page, setPage] = useState(1);
  const PER_PAGE = Number(perPage);
const dataList = UsePagination(users, PER_PAGE);

   const handleChange = (num:number) => {
    setPage(num);
    dataList.jump(num);
  };

 const handleChangeSelect =(event:ChangeEvent<HTMLSelectElement>)=>{
			const {name, value} =event.target
      setPerPage(Number(value))
		  }

   
const [activeProfile, setActiveProfile] = useState(users&&users.filter((item:any)=>item.user_code ===Code));
	 



const viewUser=(userCode:string)=>{

setActiveProfile(users&&users.filter((item:any)=>item.user_code ===userCode))
}



const Pagination = () => {
         
const pageSize = perPage;
const totalCount = users.length
const siblingCount = 1
const currentPage = page

  const paginationRange = usePaginated({ currentPage,  totalCount, siblingCount,  pageSize });

  if (currentPage === 0 ) {
    return null;
  }
  
  let lastPage =  paginationRange&&paginationRange[paginationRange.length - 1];
  return (
  <nav className="" aria-label="Page navigation sample">
    <ul  className="pagination"  >
      <li className={currentPage === 1 ? ' page-item disabled' : 'page-item'} >
       <a className="page-link" href="#!" onClick={() =>handleChange(page - 1)}>Previous</a>
      </li>
      {paginationRange&&paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={index}>
           <a className="page-link" href="#!" >&#8230;</a>
          </li>
        }
        return (
          <li className={pageNumber === currentPage?' page-item  active':'page-item '} key={index}>
            <a className="page-link" href="#!" onClick={() =>handleChange(pageNumber)} >{pageNumber}</a>
            
          </li>
        );
      })}

  <li  className={currentPage === lastPage  ? ' page-item disabled' : 'page-item'}>
  <a className="page-link" href="#!" onClick={() =>handleChange(page + 1)} aria-label="Next">Next</a>
      </li>

    </ul> </nav>
  );

      }

      const handleChangeCheckbox =()=>{}

 const handleDelete = (code:number)=>{  
            setLoading({...loading,  isLoading: true}) 

               let close =   document.getElementById('btnWarningDialog-'+code)
                  close?.click();
                  LoadingModal()
                let url = ServerUrl+'/delete_controller/tbl_users/'

 const fd = new FormData();

 fd.append("ID", 'ID')
 fd.append("data", String(code))
 fd.append("jwt", String(Token)) 
      axios.post(url, fd, multipartConfig)
               .then(response =>{
                if(response.data.type ==='success'){

                 closeModal()
                    SuccessModal()
                    
                       } else{

            setErrors({...errors, errorMessage:response.data.message})
                       }   
               })
               .catch((error)=>{
                   setErrors({...errors, errorMessage:error.message})
               }).finally(()=>{
              window.location.reload()
                   setLoading({...loading, isLoading: false
                   })
               }) 
        }

  return (
    <>
      <Breadcomb title="Users" />
    <div className="container-fluid page-content">
         
          <div className="row">
            
            <div className="col-lg-8 col-xl-9 col-md-9">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex no-block align-items-center mb-4">
                    <h4 className="card-title">All Users</h4>
                    <div className="ms-auto">
                      <div className="btn-group">
                        <button type="button" className="
                            btn btn-light-primary
                            text-primary
                            font-weight-medium
                            rounded-pill
                            px-4
                          " data-bs-toggle="modal" data-bs-target="#createmodel">
                          Create New User
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">


   <div className="row"> 
                      <div id="file_export_filter" ><label>Search:<input type="search" className="form-control mb-2 form-control" placeholder="" aria-controls="file_export" /></label></div>
                      </div>

   {users.length===0?<div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>:  

             <table className="table table-hover customize-table mb-10">
                <thead className='table-light'>
                  <tr>
                    <td>#</td>
                      <th scope="col" >Image</th>
                    <th scope="col" >Name</th>

                    <th scope="col" >Email</th>
                    <th scope="col" >Username</th>
                     <th scope="col" >Status</th>
                  </tr>
                </thead>
                <tbody>


                  {dataList.currentData().map((item:any, index:number)=>{
                    return (
                       <tr role="row" className="odd visible" key={index}>
                         
                          <td className="sorting_1">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" onChange={handleChangeCheckbox} id="customControlValidation2" />
                              <label className="form-check-label" htmlFor="customControlValidation2"></label>
                            </div>
                          </td>
                          <td>
                            <img src={ImagesUrl+"/users/"+item.user_url} alt="user" className="rounded-circle " width="50" height="50"  onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/logo.png' }} />
                          </td>
                          <td>{item.display_name}</td>

                          <td>{item.user_email}

                           <WarningModal message="This is very dangerous, you shouldn't do it! are you really really sure.?" handleAction={()=>handleDelete(item.ID)} mID={item.ID} /> 



                             <div className="flex  hide">
    <a href="#"> Edit</a> | <a href="#!"  data-bs-toggle="modal" data-bs-target={`#warningdialog-${item.ID}`} className='text-danger'> Delete </a> | <a href={"#"} onClick={()=>viewUser(item.user_code)}> View </a>
    </div> 
                          </td>
                          <td>{item.user_login}</td>
                          <td>
                            <span className={`badge   ${item.user_status==='active'?'text-success bg-light-success':'text-danger bg-light-danger'} font-weight-medium`}>{item.user_status}</span>
                          </td>
                          
                        </tr>

                    )
                  })}
                </tbody>
                  <tfoot  className='table-light'>
                  <tr>
                    <th scope="col" >#</th>
                    <th scope="col" >Image</th>
                    <th scope="col" >Name</th>
                    <th scope="col" >Username</th>
                    <th scope="col" >Email</th>
                     <th scope="col" >Status</th>
                  </tr>
                </tfoot>
              </table>}


<div className="" style={{ display:'flex', justifyContent:'space-between' }}>
  <select className="mr-2 " style={{ height:'40px' }} name="perPage" onChange={handleChangeSelect} value={perPage}>
              <option value='16'>  16 </option>
              <option value='32'>  32 </option>
              <option value='64'>  64 </option>
              <option value='128'>  128 </option>
              <option value='256'>  256 </option>
			 <option value={users.length}>  All</option>
			</select>

<Pagination />

</div>
            </div>
                </div>
              </div>
            </div>
            
{users.length!==0? activeProfile.map((item:any, index:number)=>  <div className="col-lg-4 col-xlg-3 col-md-5" key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="mt-4 pull-center">
                    <img src={ImagesUrl+"/users/"+item.user_url} className="rounded-circle" width="150" height="150"  onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/no.jpg' }} />
                    <h4 className="card-title mt-2">{item.display_name}</h4>
                    <h6 className="card-subtitle">{item.user_login}</h6>
                    <div className="row text-center justify-content-md-center">
                      <div className="col-4">
                        <a href="#" className="link">Published
                          <div className="font-weight-medium">254</div></a>
                      </div>
                      <div className="col-4">
                        <a href="#" className="link">Drafted
                          <div className="font-weight-medium">54</div></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="card-body">
                  <small className="text-muted">Email address </small>
                  <h6>{item.user_email}</h6>
                  <small className="text-muted pt-4 db">Phone</small>
                  <h6></h6>
                  <small className="text-muted pt-4 db">Address</small>
                  
                 
                </div>
              </div>
            </div>):''
}

          </div>
        </div>
<AddUser/>

    </>
  );
};

export default Viewusers;
