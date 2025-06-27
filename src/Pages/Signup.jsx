import React, { useState } from 'react';
import ConsultingThumb11 from "../assets/img/normal/consulting-thumb1-1.jpg";
import Breadcumbs from '../components/Breadcumbs';
import { faEnvelope, faUser, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";


function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { API } = useAuth();

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
      .required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(`${API}/api/auth/register`, values);

      if (response.status === 201) {
        toast.success('Registration Successful!');
        navigate('/login');
        resetForm();
      } else {
        toast.error(response.data.msg || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <Breadcumbs prevLink="Home" currentLink="Sign up" pageTitle="Sign up" />
      <div className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common" id="contact-sec">
        <div className="container">
          <div className="consulting-wrap1 bg-smoke">
            <div className="row align-items-center">
              <div className="col-xxl-6">
                <div className="page-img mb-0">
                  <img src={ConsultingThumb11} alt="img" />
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="consulting-form-wrap1">
                  <div className="title-area mb-20">
                    <h2 className="sec-title">Sign Up</h2>
                  </div>
                  <div className="contact-form-v1">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting }) => (
                        <Form className="contact-form">
                          <div className="row">
                            {/* Username */}
                            <div className="form-group style-border col-md-12">
                              <Field
                                type="text"
                                name="username"
                                placeholder="Enter Your Name"
                                className="form-control form-input"
                              />
                              <FontAwesomeIcon icon={faUser} className="form-icon" />
                              <ErrorMessage name="username" component="div" className="text-danger mt-1" />
                            </div>

                            {/* Email */}
                            <div className="form-group style-border col-md-12">
                              <Field
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                                className="form-control form-input"
                              />
                              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                              <ErrorMessage name="email" component="div" className="text-danger mt-1" />
                            </div>

                            {/* Phone */}
                            <div className="form-group style-border col-md-12">
                              <Field
                                type="text"
                                name="phone"
                                placeholder="Enter Your Phone Number"
                                className="form-control form-input"
                              />
                              <FontAwesomeIcon icon={faPhone} className="form-icon" />
                              <ErrorMessage name="phone" component="div" className="text-danger mt-1" />
                            </div>

                            {/* Password */}
                            <div className="form-group style-border col-md-12 position-relative">
                              <Field
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Your Password"
                                className="form-control form-input"
                              />
                              <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={() => setShowPassword(prev => !prev)}
                                className="form-icon"
                                style={{ transform: 'translateY(-50%)', cursor: 'pointer' }}
                              />
                              <ErrorMessage name="password" component="div" className="text-danger mt-1" />
                            </div>

                            <div className="mb-4">
                              Already have an account? <Link to="/login">Login</Link>
                            </div>

                            <div className="form-btn col-12">
                              <button type="submit" disabled={isSubmitting} className="th-btn style5 fs-5">
                                {isSubmitting ? 'Submitting...' : 'Signup'}
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                    <p className="form-messages mb-0 mt-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
