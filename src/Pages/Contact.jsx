import React from "react";
import contact from "../assets/img/form/Contact_US.jpg";
import Breadcumbs from "../components/Breadcumbs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";  
import { useAuth } from "../store/auth";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Contact = () => {
  // Initial form values
    const { API } = useAuth();
  
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
  };

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Phone must be at least 10 digits")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    // company: Yup.string().required("Company name is required"),
    message: Yup.string().required("Please enter a message"),
  });

 const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    // 1️⃣ Save to DB
    const saveResponse = await axios.post(`${API}/api/form/contact`, values);

    if (saveResponse.status === 200) {
      toast.success("Contact saved successfully");

      // 2️⃣ Send Email
      const emailResponse = await axios.post(`${API}/api/form/contact/sendEmail`, values);

      if (emailResponse.status === 200) {
        toast.success("Email sent to admin successfully!");
        resetForm(); // ✅ Clear form only after both are successful
      } else {
        toast.error("Contact saved, but failed to send email");
      }
    } else {
      toast.error("Failed to save contact form");
    }
  } catch (error) {
    console.error("Error during form submission:", error);
    toast.error(
      error.response?.data?.message || "Something went wrong. Try again later."
    );
  } finally {
    setSubmitting(false);
  }
};

  return (
    <React.Fragment>
      <ToastContainer />
      <Breadcumbs prevLink="Home" currentLink="Contact" pageTitle="Contact" />

      {/* conatact Info  ====> */}

      <div
        className="space overflow-hidden contact-area-1 position-relative z-index-common"
        id="contact-sec"
      >
        <div className="container">
          <div className="row gy-40 justify-content-center">
            <div className="col-xl-12">
              <div className="title-area mb-0 text-center">
                <span className="sub-title2 text-anim text-theme text-uppercase mb-30">
                  Quick contact info
                </span>
                <h2 className="sec-title text-anim2">Contact Information</h2>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4 className="box-title">Location</h4>
                <p className="box-text">
                  Aai Saheb Housing Society, Sawant Bangla, 412308, Pakisthan
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-envelope" />
                </div>
                <h4 className="box-title">Email us</h4>
                <p className="box-text">
                  <Link to="mailto:help24/7.info@robor.com">
                    help24/7.info@robor.com
                  </Link>
                  <Link to="mailto:info@robor.com">info@robor.com</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-phone" />
                </div>
                <h4 className="box-title">Free Call</h4>
                <p className="box-text">
                  <Link to="tel:+919175513773">+919 (175) 513 663</Link>
                  <Link to="tel:+919175513773">+919 (175) 513 773</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-clock" />
                </div>
                <h4 className="box-title">Opening hour</h4>
                <p className="box-text">
                  Mon to Fri: 09AM - 05PM Saturday &amp; Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common"
        id="contact-sec"
      >
        <div className="container">
          <div className="consulting-wrap1 bg-smoke">
            <div className="row align-items-center">
              <div className="col-xxl-6">
                <div className="page-img mb-0">
                  <img src={contact} alt="img" />
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="consulting-form-wrap1">
                  <div className="title-area mb-20">
                    <h2 className="sec-title">Get In Touch!</h2>
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
                            {/* Name */}
                            <div className="form-group style-border col-md-6">
                              <Field
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="form-control"
                              />
                              <i className="far fa-user" />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger small mt-1"
                              />
                            </div>

                            {/* Email */}
                            <div className="form-group style-border col-md-6">
                              <Field
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="form-control"
                              />
                              <i className="far fa-envelope" />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger small mt-1"
                              />
                            </div>

                            {/* Phone */}
                            <div className="form-group style-border col-md-6">
                              <Field
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                className="form-control"
                              />
                              <i className="far fa-phone" />
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger small mt-1"
                              />
                            </div>

                           {/* Subject */}
<div className="form-group style-border col-md-6">
  <Field
    type="text"
    name="subject"
    placeholder="Subject"
    className="form-control"
  />
  <i className="far fa-book" /> {/* Optional icon */}
  <ErrorMessage
    name="subject"
    component="div"
    className="text-danger small mt-1"
  />
</div>

                            {/* Company */}
                            <div className="form-group style-border col-12">
                              <Field
                                type="text"
                                name="company"
                                placeholder="Company name"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="company"
                                component="div"
                                className="text-danger small mt-1"
                              />
                            </div>

                            {/* Message */}
                            <div className="form-group style-border col-12">
                              <Field
                                as="textarea"
                                name="message"
                                rows={3}
                                placeholder="How can we help you? feel free to get in touch!"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="text-danger small mt-1"
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="form-btn col-12">
                              <button
                                type="submit"
                                className="th-btn style5"
                                disabled={isSubmitting}
                              >
                                Submit Message
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
