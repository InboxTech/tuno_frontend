import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LoginImg from "../assets/img/form/Login.jpg";
import { Link, useNavigate } from "react-router-dom";
import Breadcumbs from "../components/Breadcumbs";

import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useAuth } from "../store/auth";
import ForgotPasswordModal from "../components/model/ForgotPasswordModal";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  //  storeTokenInLs from AuthContext
  const { API, storeTokenInLs } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
      .required("Email is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{6,}$/,
        "Password must be at least 6 characters, include at least one letter, one number, and one special character"
      )
      .required("Password is Required"),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(`${API}/api/auth/login`, values);
      console.log("Login success:", response.data);

      toast.success("Login success");

      storeTokenInLs(response.data.token);

      localStorage.setItem("userId", response.data.userId);

      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.response && error.response.data) {
        setErrors({
          email: error.response.data.message || "Invalid credentials",
        });
      } else {
        setErrors({ email: "Something went wrong, try again later" });
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
                    <h2 className="sec-title">LogIn</h2>
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
                              <FontAwesomeIcon
                                icon={faEnvelope}
                                className="form-icon"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger mt-1 small"
                              />
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
                                style={{
                                  transform: "translateY(-50%)",
                                  cursor: "pointer",
                                }}
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger mt-1 small"
                              />
                            </div>
                            <div className="mb-4">
                              <Link
                                to="#"
                                onClick={() => setShowForgotModal(true)}
                              >
                                Forgot password?
                              </Link>
                            </div>

                            <div className="mb-4">
                              Don’t have an account?{" "}
                              <Link to="/signup">Sign Up</Link>
                            </div>

                            <div className="form-btn col-12">
                              <button
                                type="submit"
                                className="th-btn style5 fs-5"
                                disabled={isSubmitting}
                              >
                                Signin
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                    {showForgotModal && (
                      <ForgotPasswordModal
                        onClose={() => setShowForgotModal(false)}
                      />
                    )}
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
