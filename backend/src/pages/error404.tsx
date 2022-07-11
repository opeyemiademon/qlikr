import React from 'react'

const Error404=()=> {
  return (
        <div className="error-box">
        <div className="error-body text-center">
          <h1 className="error-title text-danger">404</h1>
          <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
          <p className="text-muted mt-4 mb-4">
            YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
          </p>
          <a href="/" className="btn btn-danger btn-rounded waves-effect waves-light mb-5">Back to home</a>
        </div>
      </div>
  )
}

export default Error404