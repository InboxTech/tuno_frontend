import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ConsultingThumb11 from "../assets/img/normal/consulting-thumb1-1.jpg";
import Breadcumbs from '../components/Breadcumbs';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Signup() {
  const [showPassword, setShowPassword] = useState(false);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value})
    }
  return (
    <>
        <Breadcumbs prevLink="Home" currentLink="Sign up" pageTitle="Sign up" />
        <div className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common" id="contact-sec">
        <div className="container">
            <div className="consulting-wrap1 bg-smoke">
                <div className="row align-items-center">
                    <div className="col-xxl-6">
                        <div className="page-img mb-0">
                            <img src={ConsultingThumb11} alt="img"/>
                            </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="consulting-form-wrap1">
                            <div className="title-area mb-20">
                                <h2 className="sec-title"> Sign Up </h2>
                            </div>
                            <div className="contact-form-v1">
                                <form action="https://html.themeholy.com/robor/demo/mail.php" method="POST"
                                    className="contact-form ajax-contact">
                                    <div className="row">
                                        <div className="form-group style-border col-md-12">
                                            <input type="text" className="form-control form-input" name="name" id="name" value={userData.name} onChange={handleChange} placeholder="Enter Your Name" required/> 
                                            <FontAwesomeIcon icon={faUser} className="form-icon"  />
                                            </div>
                                        <div className="form-group style-border col-md-12">
                                            <input type="email" className="form-control form-input" name="email" id="email" value={userData.email} onChange={handleChange} placeholder="Enter Your Email Address" required/>
                                             <FontAwesomeIcon icon={faEnvelope} className="form-icon"  />
                                            </div>
                                              <div className="form-group style-border col-md-12">
                                            <input type="number" className="form-control form-input" name="number" id="number" value={userData.number} onChange={handleChange} placeholder="Enter Your Phone Number" required/> 
                                            <FontAwesomeIcon icon={faPhone} className="form-icon"  />
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
                                      
                                        {/* <div className="form-group style-border col-md-6">
                                            <select name="subject" id="subject" className="form-select bg-white">
                                                <option value="" disabled="disabled" selected="selected" hidden> Select Subject </option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Brand Marketing">Brand Marketing</option>
                                                <option value="UI/UX Designing">UI/UX Designing</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                            </select></div> */}
                                        {/* <div className="form-group style-border col-12">
                                            <input type="number" className="form-control" name="number" id="number" placeholder="Company name"/> 
                                            <i className="far fa-circle-info"></i>
                                        </div> */}
                                        {/* <div className="form-group style-border col-12">
                                            <textarea name="message" id="message" cols="30" rows="3" className="form-control"
                                                placeholder="How can we help you? feel free to get in touch!*"></textarea>
                                        </div> */}
                                        <div className="mb-4">
                                            Already have an account? <Link to="/login">Login</Link>
                                            </div>
                                        <div className="form-btn col-12">
                                            <button className="th-btn style5 fs-5">
                                            Signup
                                        </button></div>
                                        
                                        
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup