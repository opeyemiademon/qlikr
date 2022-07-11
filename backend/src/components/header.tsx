import { useEffect, useState } from "react";
import ProfileModal from "../pages/users/profileModal";

import axios  from 'axios'
import {ServerUrl,  config, Token, Code, ImagesUrl} from '../components/includes'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

const Header = () => {
const dispatch = useDispatch()

const [user, setUser] = useState([]as any);

 const fetchUsers =  async()=>{
        var sql ="Select ID, user_login, user_pass, user_code, user_email, user_url, user_registered, user_status, display_name  from tbl_users order by display_name";
 var fd = {    
    sql:sql
}

let url = ServerUrl+'/fetchSqlQuery'

await axios.post(url, fd, config).then(response=>{ 
       	if(response.data.length!==0 && Array.isArray(response.data)){
              dispatch({
                    type:'SET_RECORDS',
                    name:'users',
                    data:response.data
                })

                setUser(response.data.filter((item:any)=>item.user_code===Code)[0])

        }else{
        window.location.href='/logout'
        }
    })
    }

 const fetchCategory =  async()=>{
        if(Token!==undefined){
        var sql ="Select  ID, code, parent, name, slug, avatar, 'false' as status from tbl_category order by name";

 var fd = {    
    sql:sql
}

let url = ServerUrl+'/fetchSqlQuery'

	const response = await axios.post(url, fd, config)
			if(response.data.length!==0 && Array.isArray(response.data)){
                dispatch({
                    type:'SET_RECORDS',
                    name:'category',
                    data:response.data.sort((a, b) =>(a.name > b.name) ? 1 : -1)
                })

            }
    }else{
        window.location.href='/logout'
    }
    }

    useEffect(()=>{
        fetchCategory() 
        fetchUsers()
         },[]);


  return (
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header border-end">
          {/* This is for the sidebar toggle which is visible on mobile only */}
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="#"
          >
            <i className="ti-menu ti-close"></i>
          </a>
          <a className="navbar-brand" href="/">
  
            <b className="logo-icon">
              <img
                  src={process.env.PUBLIC_URL+'/logo.png'}
                  alt=""
                  className="light-logo img-fluid img-sm rounded" style={{ width:'50px', height:'50px' }}
                />

            </b>
            <span className="logo-text text-white">Qlikr
             {/*  <img
                src={ImagesUrl+"/logo.png"}
                className="light-logo img-fluid rounded"
                alt="qlikr"
              /> */}
            </span>
          </a>
         

          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more"></i>
          </a>
        </div>
        {/* ==============================================================  */}
        {/* End Logo  */}
        {/* ==============================================================  */}
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          {/* toggle and nav items  */}
          {/* ==============================================================  */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item d-none d-md-block">
              <a
                className="nav-link sidebartoggler waves-effect waves-light"
                href="#"
                data-sidebartype="mini-sidebar"
              >
                <i className="mdi mdi-menu fs-5"></i>
              </a>
            </li>

            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                id="2"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fs-5 mdi mdi-gmail"></i>
                <div className="notify">
                  <span className="heartbit"></span>
                  <span className="point"></span>
                </div>
              </a>
              <div
                className="
            dropdown-menu
            mailbox
            dropdown-menu-start dropdown-menu-animate-up
            "
                aria-labelledby="2"
              >
                <ul className="list-style-none">
                  <li>
                    <div className="border-bottom rounded-top py-3 px-4">
                      <div className="mb-0 font-weight-medium fs-4">
                        You have 4 new messages
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="message-center message-body position-relative"
                      style={{ height: "230px" }}
                    >
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span className="user-img position-relative d-inline-block">
                          <img
                            src="../../assets/images/users/1.jpg"
                            alt="user"
                            className="rounded-circle w-100"
                          />
                          <span className="profile-status rounded-circle online"></span>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Pavan kumar
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    fw-normal
                    mt-1
                    "
                          >
                            Just see the my admin!
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:30 AM
                          </span>
                        </div>
                      </a>
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span className="user-img position-relative d-inline-block">
                          <img
                            src="../../assets/images/users/2.jpg"
                            alt="user"
                            className="rounded-circle w-100"
                          />
                          <span className="profile-status rounded-circle busy"></span>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Sonu Nigam
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    "
                          >
                            I've sung a song! See you at
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:10 AM
                          </span>
                        </div>
                      </a>
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span className="user-img position-relative d-inline-block">
                          <img
                            src="../../assets/images/users/3.jpg"
                            alt="user"
                            className="rounded-circle w-100"
                          />
                          <span className="profile-status rounded-circle away"></span>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Arijit Sinh
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    "
                          >
                            I am a singer!
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:08 AM
                          </span>
                        </div>
                      </a>
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span className="user-img position-relative d-inline-block">
                          <img
                            src="../../assets/images/users/4.jpg"
                            alt="user"
                            className="rounded-circle w-100"
                          />
                          <span className="profile-status rounded-circle offline"></span>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Pavan kumar
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    "
                          >
                            Just see the my admin!
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:02 AM
                          </span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link border-top text-center text-dark pt-3"
                      href="#;"
                    >
                      <b>See all e-Mails</b>{" "}
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* ==============================================================  */}
            {/* Comment  */}
            {/* ==============================================================  */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-check-circle fs-5"></i>
                <div className="notify">
                  <span className="heartbit"></span>
                  <span className="point"></span>
                </div>
              </a>
              <div
                className="
            dropdown-menu dropdown-menu-start
            mailbox
            dropdown-menu-animate-up
            "
              >
                <ul className="list-style-none">
                  <li>
                    <div className="border-bottom rounded-top py-3 px-4">
                      <div className="mb-0 font-weight-medium fs-4">
                        Notifications
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="message-center notifications position-relative"
                      style={{ height: "230px" }}
                    >
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span className="btn btn-light-danger text-danger btn-circle">
                          <i
                            data-feather="link"
                            className="feather-sm fill-white"
                          ></i>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Luanch Admin
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    fw-normal
                    text-muted
                    mt-1
                    "
                          >
                            Just see the my new admin!
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:30 AM
                          </span>
                        </div>
                      </a>
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span
                          className="
                    btn btn-light-success
                    text-success
                    btn-circle
                "
                        >
                          <i
                            data-feather="calendar"
                            className="feather-sm fill-white"
                          ></i>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Event today
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    fw-normal
                    text-muted
                    mt-1
                    "
                          >
                            Just a reminder that you have event
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:10 AM
                          </span>
                        </div>
                      </a>
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span className="btn btn-light-info text-info btn-circle">
                          <i
                            data-feather="settings"
                            className="feather-sm fill-white"
                          ></i>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Settings
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    fw-normal
                    text-muted
                    mt-1
                    "
                          >
                            You can customize this template as you want
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:08 AM
                          </span>
                        </div>
                      </a>
                      {/* Message  */}
                      <a
                        href="#"
                        className="
                message-item
                d-flex
                align-items-center
                border-bottom
                px-3
                py-2
                "
                      >
                        <span
                          className="
                    btn btn-light-primary
                    text-primary
                    btn-circle
                "
                        >
                          <i
                            data-feather="users"
                            className="feather-sm fill-white"
                          ></i>
                        </span>
                        <div className="w-75 d-inline-block v-middle ps-3">
                          <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                            Pavan kumar
                          </h5>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    time
                    text-truncate
                    fw-normal
                    text-muted
                    mt-1
                    "
                          >
                            Just see the my admin!
                          </span>
                          <span
                            className="
                    fs-2
                    text-nowrap
                    d-block
                    subtext
                    text-muted
                    "
                          >
                            9:02 AM
                          </span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link border-top text-center text-dark pt-3"
                      href="#;"
                    >
                      <strong>Check all notifications</strong>
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>
          {/* ==============================================================  */}
          {/* Right side toggle and nav items  */}
          {/* ==============================================================  */}
          <ul className="navbar-nav">
            {/* ==============================================================  */}
            {/* Search  */}
            {/* ==============================================================  */}
            <li className="nav-item search-box">
              <form className="app-search d-none d-lg-block">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <a href="" className="active">
                  <i className="fa fa-search"></i>
                </a>
              </form>
            </li>
           
            {/* User profile and search  */}
           
           <ProfileModal user={user} />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
