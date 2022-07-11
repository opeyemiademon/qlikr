import React from 'react'
import { Link } from 'react-router-dom'

const Breadcomb =(props:any)=> {
  return (
       <div className="page-breadcrumb border-bottom">
            <div className="row">
              <div
                className="
                col-lg-3 col-md-4 col-xs-12
                justify-content-start
                d-flex
                align-items-center
                gap-2
              "
              >
                <h5 className="font-weight-medium text-uppercase mb-0">
                  {props.title}
                </h5>
{props.children}
              </div>
              <div
                className="
                col-lg-9 col-md-8 col-xs-12
                d-flex
                justify-content-start justify-content-md-end
                align-self-center
              "
              >
                <nav aria-label="breadcrumb" className="mt-2">
                  <ol className="breadcrumb mb-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {props.title}
                    </li>
                  </ol>
                </nav>

            
              </div>
            </div>
          </div>
  )
}

export default Breadcomb