import React,{useState} from "react";
import { Container } from "react-bootstrap";
import LoginImg from "../assets/img/normal/about-thumb4-1.jpg";
import { Link } from "react-router-dom";
import Breadcumbs from "../components/Breadcumbs";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
          email: '',
          password: ''
      });
  
      const handleChange = (e) => {
          setUserData({ ...userData, [e.target.name]: e.target.value})
      }
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
                    <h2 className="sec-title">LogIn</h2>
                  </div>
                  <div className="contact-form-v1">
                    <form className="contact-form ajax-contact">
                      <div className="row">
                        <div className="form-group style-border col-md-12 ">
                          <input
                            type="email"
                            className="form-control form-input"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Email Address"

                          />
                         <FontAwesomeIcon icon={faEnvelope} className="form-icon"  />
                        </div>
                        <div className="form-group style-border col-md-12">
                          <input
                           type={showPassword ? "text" : "password"}
                            className="form-control form-input"
                            name="password"
                            id="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Your password"
                          />
                          {/* <i className="far fa-user far" /> */}
                        <FontAwesomeIcon  icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="form-icon"
                            style={{ transform: 'translateY(-50%)', cursor: 'pointer'}} />
                        </div>
                       <div className="mb-4">
                        Don’t have an account ? <Link to="/signup">Sign Up</Link> 
                       </div>

                        <div className="form-btn col-12">
                          <button className="th-btn style5 fs-5">
                           Login 
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
