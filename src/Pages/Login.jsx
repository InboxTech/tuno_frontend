import React from "react";
import { Container } from "react-bootstrap";
import LoginImg from "../assets/img/normal/about-thumb4-1.jpg";
import { Link } from "react-router-dom";
import Breadcumbs from "../components/Breadcumbs";

const Login = () => {
  return (
    <React.Fragment>
      <Breadcumbs prevLink="Home" currentLink="Login" pageTitle="Login" />

      <div className="space">
        <Container>
          <div className="consulting-wrap1 bg-smoke">
            <div className="row align-items-center">
              <div className="col-xxl-6">
                <div className="page-img mb-0">
                  <img src={LoginImg} alt="img" />
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="consulting-form-wrap1">
                  <div className="title-area mb-20">
                    <h2 className="sec-title">Login</h2>
                  </div>
                  <div className="contact-form-v1">
                    <form className="contact-form ajax-contact">
                      <div className="row">
                        <div className="form-group style-border col-md-12">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                          />
                          <i className="far fa-envelope" />
                        </div>
                        <div className="form-group style-border col-md-12">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Your password"
                          />
                          {/* <i className="far fa-user far" /> */}
                          <i class="fa-solid fa-lock" />
                        </div>
                       <div className="mb-4">
                        Don’t have an account ? <Link to="/signup">Sign Up</Link> 
                       </div>

                        <div className="form-btn col-12">
                          <button className="th-btn style5">
                            Submit 
                          </button>
                        </div>
                      </div>
                      <p className="form-messages mb-0 mt-3" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
