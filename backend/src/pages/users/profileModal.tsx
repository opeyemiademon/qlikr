import React from 'react'
import { ImagesUrl } from '../../components/includes';

const  ProfileModal =({user}:any)=> {
  return (
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href="#"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img

                src={ImagesUrl+"/users/"+user.user_url}   onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/favicon.jpeg' }}
                
                  alt="user"
                  className="rounded-circle"
                  width="36"
                />
                <span className="ms-2 font-weight-medium">{user.display_name}</span>
                <span className="fas fa-angle-down ms-2"></span>
              </a>



              <div
                className="
            dropdown-menu dropdown-menu-end
            user-dd
            animated
            flipInY
            "
              >
                <div
                  className="
            d-flex
            no-block
            align-items-center
            p-3
            bg-info
            text-white
            mb-2
            "
                >
                  <div className="">
                    <img
                      src={ImagesUrl+"/users/"+user.user_url}   onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/favicon.jpeg' }}
                      alt="user"
                      className="rounded-circle"
                      width="60"
                    />
                  </div>
                  <div className="ms-2">
                    <h4 className="mb-0 text-white">{user.display_name}</h4>
                    <p className="mb-0">{user.user_email}</p>
                  </div>
                </div>
                <a className="dropdown-item" href="#">
                  <i
                    data-feather="user"
                    className="feather-sm text-info me-1 ms-1"
                  ></i>
                  My Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i
                    data-feather="credit-card"
                    className="feather-sm text-info me-1 ms-1"
                  ></i>
                  My Balance
                </a>
                <a className="dropdown-item" href="#">
                  <i
                    data-feather="mail"
                    className="feather-sm text-success me-1 ms-1"
                  ></i>
                  Inbox
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i
                    data-feather="settings"
                    className="feather-sm text-warning me-1 ms-1"
                  ></i>
                  Account Setting
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout">
                  <i
                    data-feather="log-out"
                    className="feather-sm text-danger me-1 ms-1"
                  ></i>
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <div className="ps-4 p-2">
                  <a
                    href="#"
                    className="btn d-block w-100 btn-info rounded-pill"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </li>
  )
}

export default ProfileModal