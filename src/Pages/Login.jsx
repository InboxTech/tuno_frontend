import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LoginImg from "../assets/img/normal/about-thumb4-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import Breadcumbs from "../components/Breadcumbs";

import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { useAuth } from '../store/auth';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);  
  const navigate = useNavigate(); // to redirect after login
  const { API } = useAuth();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Adjust baseURL to your backend API URL
      const response = await axios.post(`${API}/api/auth/login`, values);
      console.log('Login success:', response.data);
      toast.success("Login success",response.data)
      // Save token to localStorage or context/state
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);

      // Redirect or do other post-login logic
      navigate('/');  // change as per your app route

    } catch (error) {
      console.error(error);

      if (error.response && error.response.data) {
        setErrors({ email: error.response.data.message || 'Invalid credentials' });
      } else {
        setErrors({ email: 'Something went wrong, try again later' });
      }
    }
    setSubmitting(false);
  };

  return (
    <>
          <ToastContainer />
    
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
                    <h2 className="sec-title">SignIn</h2>
                  </div>
                  <div className="contact-form-v1">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      {({ isSubmitting }) => (
                        <Form className="contact-form">
                          <div className="row">
                            <div className="form-group style-border col-md-12">
                              <Field
                                type="email"
                                name="email"
                                className="form-control form-input"
                                placeholder="Email Address"
                              />
                              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                              <ErrorMessage name="email" component="div" className="text-danger mt-1 small" />
                            </div>

                            <div className="form-group style-border col-md-12">
                              <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="form-control form-input"
                                placeholder="Your password"
                              />
                              <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="form-icon"
                                style={{ transform: 'translateY(-50%)', cursor: 'pointer' }}
                              />
                              <ErrorMessage name="password" component="div" className="text-danger mt-1 small" />
                            </div>

                            <div className="mb-4">
                              Don’t have an account? <Link to="/signup">Sign Up</Link>
                            </div>

                            <div className="form-btn col-12">
                              <button type="submit" className="th-btn style5 fs-5" disabled={isSubmitting}>
                                Signin
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
