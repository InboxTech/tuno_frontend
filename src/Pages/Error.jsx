import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/img/normal/error.png"

const Error = () => {
  return (
    <React.Fragment>
  <section className="space">
  <div className="container">
    <div className="error-page-wrap">
      <div className="error-img">
        <img src={error} alt="404 image" />
      </div>
      <div className="error-content">
        <h2 className="page-title fw-bold mt-n2 mb-20">
          Opp’s that page can’t be found
        </h2>
        <p className="error-text mb-30">
          It looks like nothing was found at this location. Maybe try one of
          the links below or a search?
        </p>
        <Link to="/" className="th-btn"><i className="fas fa-home me-2" /> Back To Home</Link>
      </div>
    </div>
  </div>
</section>

    </React.Fragment>
  )
}

export default Error