import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcumbs from '../components/Breadcumbs';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useAuth } from '../store/auth';

function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const {API} = useAuth()

  // Fetch member details by ID
  const fetchTeamMember = async () => {
    try {
      const res = await axios.get(`${API}/api/teamMeber/team/${id}`);
      setTeam(res.data);
    } catch (error) {
      console.error("Failed to fetch team member:", error);
    }
  };

  useEffect(() => {
    fetchTeamMember();
  }, [id]);

  // Formik Contact Form
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      number: Yup.string().matches(/^\d+$/, "Phone must be numeric").required("Phone is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://html.themeholy.com/robor/demo/mail.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(values).toString(),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          resetForm();
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        alert("An error occurred. Please try again later.");
      }
    },
  });

  if (!team) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <>
      <Breadcumbs prevLink="Home" currentLink="Team Details" pageTitle="Team Details" />
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xxl-3 col-xl-4 col-lg-5">
              <aside className="sidebar-area sidebar-sticky radius-0 p-0 bg-transparent">
                <div className="widget widget_team_info">
                  <div className="widget-thumb">
                    <img src={`${API}${team.image}`} alt={team.title} />
                  </div>
                  <div className="widget-info-wrap">
                    <h4 className="box-title">{team.title}</h4>
                    <p className="box-text">{team.designation}</p>
                  </div>
                  <div className="info-list">
                    <ul>
                      <li>
                        <div>
                          <strong className="title">Phone Number:</strong>
                          <span className="text">
                            <Link to="tel:+00-1234567890">+00-1234567890</Link>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <strong className="title">Experience:</strong>
                          <span className="text">{team.experience}</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <strong className="title">Email Address:</strong>
                          <span className="text">{team.linkedIn || "N/A"}</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <strong className="title">Services:</strong>
                          <span className="text">
                            <Link to="#">Business,</Link>
                            <Link to="#">Consulting,</Link>
                            <Link to="#">Finance</Link>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <strong className="title">Get In Touch:</strong>
                          <div className="th-social style2">
                            <a href={team.facebook || "#"} target="_blank" rel="noreferrer">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={team.twitter || "#"} target="_blank" rel="noreferrer">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href={team.linkedIn || "#"} target="_blank" rel="noreferrer">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href={team.instagram || "#"} target="_blank" rel="noreferrer">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            <div className="col-xxl-9 col-xl-8 col-lg-7">
              <div className="page-single">
                <div>
                  <h2 className="page-title mt-n2 mb-20">About Me</h2>
                  <div dangerouslySetInnerHTML={{ __html: team.description }}></div>
                </div>

                <div className="contact-form-v4 bg-smoke mt-60">
                  <div className="title-area mb-30">
                    <h3 className="title mt-n2">Contact with me</h3>
                  </div>
                  <form onSubmit={formik.handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="form-group style-border col-md-6">
                        <input type="text" className="form-control" name="name" placeholder="Name*" {...formik.getFieldProps("name")} />
                        {formik.touched.name && formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
                      </div>

                      <div className="form-group style-border col-md-6">
                        <input type="text" className="form-control" name="number" placeholder="Phone*" {...formik.getFieldProps("number")} />
                        {formik.touched.number && formik.errors.number && <div className="text-danger">{formik.errors.number}</div>}
                      </div>

                      <div className="form-group style-border col-12">
                        <input type="email" className="form-control" name="email" placeholder="e-mail address*" {...formik.getFieldProps("email")} />
                        {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                      </div>

                      <div className="form-group style-border col-12">
                        <select name="subject" className="form-select bg-white" {...formik.getFieldProps("subject")}>
                          <option value="" disabled hidden>Select Subject</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Brand Marketing">Brand Marketing</option>
                          <option value="UI/UX Designing">UI/UX Designing</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                        {formik.touched.subject && formik.errors.subject && <div className="text-danger">{formik.errors.subject}</div>}
                      </div>

                      <div className="form-group style-border col-12">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="How can I help you? Feel free to get in touch!"
                          {...formik.getFieldProps("message")}
                          rows="3"
                        />
                        {formik.touched.message && formik.errors.message && <div className="text-danger">{formik.errors.message}</div>}
                      </div>

                      <div className="form-btn col-12 mt-15">
                        <button type="submit" className="th-btn">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamDetails;
