import React, { useState, useEffect } from "react";
import Breadcumbs from "../components/Breadcumbs";
import contact from "../assets/img/normal/Contact_US.jpg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

function CareerDetails() {
    const { API } = useAuth();
    const [jobDetails, setJobDetails] = useState([]);
    const [relatedJobs, setRelatedJobs] = useState([]);
    const { id } = useParams();
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        applyfor: "",
        address: "",
        city: "",
        state: "",
        message: "",
        resume: null,
    };

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, "Phone must be at least 10 digits")
            .required("Phone number is required"),
        applyfor: Yup.string().required("Please select a role you apply for"),
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        message: Yup.string().required("Please enter a message"),
        resume: Yup.mixed()
            .test("required", "Resume is required", (value) => value instanceof File)
            .test("fileSize", "File too large", (value) => {
                return value && value.size <= 5 * 1024 * 1024;
            })
            .test("fileType", "Unsupported file format", (value) => {
                return (
                    value &&
                    [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ].includes(value.type)
                );
            }),
    });

    // add job application
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const formData = new FormData();

            // Append text fields
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("phone", values.phone);
            formData.append("position", values.applyfor); // backend expects "position"
            formData.append("address", values.address);
            formData.append("message", values.message);

            // Optional: Include city and state if needed (you can store them in DB later)
            formData.append("city", values.city);
            formData.append("state", values.state);

            // Append the resume file
            if (values.resume) {
                formData.append("resume", values.resume);
            }

            // Send to backend
            const response = await fetch(
                `${API}/api/jobApplication/applyJobDetails`,
                {
                    method: "POST",
                    // headers: {
                    //     "Content-Type": "multipart/form-data",
                    // },
                    body: formData,
                }
            );
            const data = await response.json();
            if (response.ok) {
                toast.success(data.message || "Application submitted successfully");
                resetForm();
            } else {
                toast.error(data.error || "Failed to submit");
            }
            // ✅ Handle success
        } catch (error) {
            console.error("Error submitting application:", error);
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    //get job details
    const getJobDetails = async () => {
        try {
            const response = await fetch(
                `${API}/api/career/getJobOpeningById/${id}`,
                {
                    method: "GET",
                }
            );
            const data = await response.json();
            if (response.ok) {
                setJobDetails(data.jobOpening);
            } else {
                toast.error(data.message || "Failed to fetch job details");
            }
        } catch (error) {
            toast.error("Something went wrong while fetching job details");
        }
    };

    // get related jobs 
   const getRelatedJobs = async () => {
  try {
    const response = await fetch(`${API}/api/career/getRelatedJobOpenings/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    
    // Protect against undefined
    if (response.ok && Array.isArray(data.relatedJobs)) {
      setRelatedJobs(data.relatedJobs);
    } else {
      setRelatedJobs([]); // fallback to empty array
    }
  } catch (error) {
    console.error("Error fetching related jobs:", error);
    setRelatedJobs([]); // prevent undefined errors
    toast.error("Failed to fetch related jobs");
  }
};

    useEffect(() => {
        getJobDetails();
        getRelatedJobs();
    }, [id]);
    return (
        <>
            <Breadcumbs
                prevLink="Home"
                currentLink={jobDetails?.designation?.toUpperCase() || "Designation"}
                pageTitle="Current Job Opening"
            />

            {/* Job details */}

            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="page-single">
                            {/* <div className="page-img gsap-parallax mb-35"> */}
                                {/* <img src={service_details1} alt="Service Image"/> */}
                                <h3 className="sub-title before-none fs-4"> Designation : {jobDetails.designation} </h3>
                            {/* </div> */}

                            <div>
                                <h5 className="sub-title before-none fs-4"> Job summary </h5>
                                <p> {jobDetails.short_description} </p>
                            </div>

                            <div>
                                <h5 className="sub-title before-none fs-4"> Required Skills </h5>
                                <p> {jobDetails.skills}</p>
                            </div>

                            <div>
                                <h5 className="sub-title before-none fs-4">
                                    {" "}
                                    Roles & Responsibilities :{" "}
                                </h5>
                                <div
                                    dangerouslySetInnerHTML={{ __html: jobDetails.full_description }}
                                >
                                    {/* 
                        <ul>
                            <li> Develop user interfaces: Implement designs using HTML, CSS, and JavaScript, creating the visual elements users interact with. </li>
                            <li> Ensure responsiveness: Make sure the website or application looks and functions well on various devices and browsers. </li>
                            <li>Collaborate with teams: Work with designers to translate mockups into code and with back-end developers to integrate front-end components with server-side logic. </li>
                            <li> Optimize performance: Improve website loading speed and overall performance. </li>
                            <li>Maintain code quality: Write clean, well-documented, and reusable code, potentially using component libraries. </li>
                            <li> Troubleshoot and debug: Identify and fix issues related to layout, functionality, and performance. </li>
                        </ul> */}
                                </div>
                            </div>

                            <div className="row gy-40">
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <h4 className="page-subtitle mb-10">No of Openings</h4>
                                    <p className="box-text"> {jobDetails.openings} </p>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <h4 className="page-subtitle mb-10">Job Type </h4>
                                    <p className="box-text">{jobDetails.jobtype} </p>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <h4 className="page-subtitle mb-10"> Years of Experience</h4>
                                    <p className="box-text"> {jobDetails.experience} </p>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <h4 className="page-subtitle mb-10"> Join in </h4>
                                    <p className="box-text"> {jobDetails.joinin}</p>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <h4 className="page-subtitle mb-10"> Last date to apply </h4>
                                    <p className="box-text">
                                        {" "}
                                        {new Date(jobDetails.last_date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="page-img-wrap mt-40">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="page-img radius-20">
                                            {/* <img src={Services12} alt="img"/> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="page-img radius-20">
                                            {/* <img src={Services13} alt="img"/> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="related-jobs mt-5">
        <h3 className="sub-title before-none fs-4">Related Job Openings</h3>
        {relatedJobs.length > 0 ? (
          relatedJobs.map((job) => (
            <div key={job._id} className="border p-3 mb-3 rounded shadow-sm">
              <h5>{job.designation}</h5>
              <p>{job.skills}</p>
              <Link to={`/career-details/${job._id}`} className="th-btn style-gradient btn-sm">View Details</Link>
            </div>
          ))
        ) : (
          <p>No related jobs found.</p>
        )}
      </div>
                    </div>


                </div>
            </div>

            {/* Job application Form */}
            <div
                className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common"
                id="contact-sec"
            >
                <div className="container my-3">
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
                                        <h4 className="sub-title before-none fs-3">
                                            {" "}
                                            Fill your details with updated resume
                                        </h4>
                                    </div>
                                    <div className="contact-form-v1">
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ isSubmitting, setFieldValue }) => (
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
                                                                as="select"
                                                                name="applyfor"
                                                                className="form-select bg-white"
                                                            >
                                                                <option value="" disabled hidden>
                                                                    Apply For
                                                                </option>
                                                                <option value="Web Development">
                                                                    Web Development
                                                                </option>
                                                                <option value="Brand Marketing">
                                                                    Brand Marketing
                                                                </option>
                                                                <option value="UI/UX Designing">
                                                                    UI/UX Designing
                                                                </option>
                                                                <option value="Digital Marketing">
                                                                    Digital Marketing
                                                                </option>
                                                            </Field>
                                                            <ErrorMessage
                                                                name="applyfor"
                                                                component="div"
                                                                className="text-danger small mt-1"
                                                            />
                                                        </div>

                                                        {/* Company */}
                                                        <div className="form-group style-border col-12">
                                                            <Field
                                                                type="text"
                                                                name="address"
                                                                placeholder="Address"
                                                                className="form-control"
                                                            />
                                                            <i className="far fa-circle-info" />
                                                            <ErrorMessage
                                                                name="address"
                                                                component="div"
                                                                className="text-danger small mt-1"
                                                            />
                                                        </div>

                                                        {/* City */}
                                                        <div className="form-group style-border col-md-6">
                                                            <Field
                                                                type="text"
                                                                name="city"
                                                                placeholder="City"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage
                                                                name="city"
                                                                component="div"
                                                                className="text-danger small mt-1"
                                                            />
                                                        </div>

                                                        {/* State */}
                                                        <div className="form-group style-border col-md-6">
                                                            <Field
                                                                type="text"
                                                                name="state"
                                                                placeholder="State"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage
                                                                name="state"
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
                                                                placeholder="Let us know about your requirement"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage
                                                                name="message"
                                                                component="div"
                                                                className="text-danger small mt-1"
                                                            />
                                                        </div>

                                                        {/* Resume Upload */}
                                                        <div className="form-group style-border col-12">
                                                            <input
                                                                id="resume"
                                                                name="resume"
                                                                type="file"
                                                                placeholder="Upload Resume"
                                                                className="form-control py-3 pe-0"
                                                                onChange={(event) => {
                                                                    setFieldValue(
                                                                        "resume",
                                                                        event.currentTarget.files[0]
                                                                    );
                                                                }}
                                                            />
                                                            <i className="far fa-file" />
                                                            <ErrorMessage
                                                                name="resume"
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
                                                                Submit Application
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
        </>
    );
}

export default CareerDetails;
