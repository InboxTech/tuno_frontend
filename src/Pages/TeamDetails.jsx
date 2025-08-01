import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcumbs from '../components/Breadcumbs';
import { useFormik } from "formik";
import * as Yup from "yup";
// import axios from 'axios';
// import { useAuth } from '../store/auth';

function TeamDetails() {
  // const { id } = useParams();
  // const [team, setTeam] = useState(null);
  // const {API} = useAuth()

  // Fetch member details by ID
  // const fetchTeamMember = async () => {
  //   try {
  //     const res = await axios.get(`${API}/api/teamMeber/team/${id}`);
  //     setTeam(res.data);
  //   } catch (error) {
  //     console.error("Failed to fetch team member:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTeamMember();
  // }, [id]);

  // Formik Contact Form
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     number: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required("Name is required"),
  //     number: Yup.string().matches(/^\d+$/, "Phone must be numeric").required("Phone is required"),
  //     email: Yup.string().email("Invalid email").required("Email is required"),
  //     subject: Yup.string().required("Subject is required"),
  //     message: Yup.string().required("Message is required"),
  //   }),
  //   onSubmit: async (values, { resetForm }) => {
  //     try {
  //       const response = await fetch("https://html.themeholy.com/robor/demo/mail.php", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: new URLSearchParams(values).toString(),
  //       });

  //       if (response.ok) {
  //         alert("Message sent successfully!");
  //         resetForm();
  //       } else {
  //         alert("Failed to send message.");
  //       }
  //     } catch (error) {
  //       alert("An error occurred. Please try again later.");
  //     }
  //   },
  // });

  // if (!team) {
  //   return <div className="text-center my-5">Loading...</div>;
  // }

  return (
    <>
      <Breadcumbs prevLink="Home" currentLink="Team Details" pageTitle="Team Details" />
      {/* <section className="space-top space-extra-bottom">
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
      </section> */}

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xxl-3 col-xl-4 col-lg-5">
              <aside className="sidebar-area sidebar-sticky radius-0 p-0 bg-transparent">
                <div className="widget widget_team_info">
                  <div className="widget-thumb">
                    <img src="assets/img/team/team_inner_1_1.png" alt="img" /></div>
                  <div className="widget-info-wrap">
                    <h4 className="box-title">Darshit Bavisi </h4>
                    <p className="box-text">CEO & Founder</p>
                  </div>
                  <div className="info-list">
                    <ul>
                      <li>
                        <div><strong className="title">Phone Number:</strong> <span className="text"><a
                          href="tel:+00-1234567889">+00-123 456 7889</a></span></div>
                      </li>
                      <li>
                        <div><strong className="title">Location:</strong> <span
                          className="text">California</span></div>
                      </li>
                      <li>
                        <div><strong className="title">Email Address:</strong> <span
                          className="text">williamjenymail@gmail.com</span></div>
                      </li>
                      <li>
                        <div><strong className="title">Services</strong> <span className="text"><a
                          href="#">Business,</a><a href="#">Consulting,</a><a
                            href="#">Finance</a></span></div>
                      </li>
                      <li>
                        <div><strong className="title">Get In Touch:</strong>
                          <div className="th-social style2"><a href="https://www.facebook.com/"><i
                            className="fab fa-facebook-f"></i></a> <a
                              href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i
                              className="fab fa-linkedin-in"></i></a> <a
                                href="https://www.instagram.com/"><i
                                  className="fab fa-instagram"></i></a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-7">
              <div className="page-single">
                <h2 className="page-title mt-n2 mb-20">Meet the Founder: Teams Details for TUNO </h2>
                <p className="mb-25">Darshit Bavisi, as the CEO and Founder of TUNO, brings a visionary approach to AI-driven automation solutions. With a passion for leveraging technology to transform industries, Darshit leads TUNO’s mission to deliver smarter, scalable automation tools for financial institutions, healthcare, and EdTech sectors. His leadership fosters a culture of innovation and excellence, ensuring TUNO remains a pioneer in AI voice automation. </p>
                <p className="mb-25">Payal Patel, Co-Founder of TUNO, plays a pivotal role in steering the company’s strategic direction and technological innovation. With a robust background in IT solutions, Payal brings expertise from her previous leadership at Inbox Infotech, where she championed digital transformation for global businesses. As a Co-Founder, she is dedicated to empowering TUNO’s clients with cutting-edge solutions in AI, IoT, and application development, mirroring her mission to help organizations thrive in an evolving digital landscape. Payal’s agile approach ensures TUNO delivers enterprise-level services, including cybersecurity and web development, with a strong emphasis on quality, collaboration, and long-term success for clients, partners, and the team. </p>

                <div className="checklist mb-60">
                  <h4 className="fw-semibold mb-2">Payal leads the following teams at TUNO: </h4>
                  <ul>
                    <li> <strong> AI Development Team:</strong> </li>
                    <p className='ps-5'>Oversees the creation and optimization of TUNO’s AI voice automation platform, ensuring seamless integration and advanced functionality. </p>
                    <li> <strong>Cybersecurity Team:</strong>
                    </li>
                    <p className='ps-5'> Ensures all solutions comply with industry standards, protecting client data with robust security protocols. </p>
                    <li> <strong>Application Development Team:</strong>  </li>
                    <p className='ps-5'> Drives the development of web and mobile applications, enhancing user experience and operational efficiency.</p>
                    <li> <strong>Client Success Team:</strong>  </li>
                    <p className='ps-5'> Focuses on delivering exceptional support and tailored solutions, fostering long-term partnerships. </p>
                  </ul>
                </div>

                <div className="page-single">
                  <h2 className="page-title mt-n2 mb-20">Our Team Culture  </h2>
                  <p className="mb-25">At TUNO, our teams thrive on a shared commitment to innovation, adaptability, and client satisfaction. Guided by Darshit and Payal, we foster a collaborative environment where every member contributes to delivering world-class automation solutions. Our dedication to excellence ensures we remain at the forefront of technological advancements, empowering our clients to succeed in their respective industries. </p>

                </div>
                {/* <div className="contact-form-v4 bg-smoke mt-60">
                            <div className="title-area mb-30">
                                <h3 className="title mt-n2">Contact with me</h3>
                            </div>
                            <form action="https://html.themeholy.com/robor/demo/mail.php" method="POST"
                                className="contact-form ajax-contact">
                                <div className="row">
                                    <div className="form-group style-border col-md-6">
                                      <input type="text" className="form-control" name="name" id="name" placeholder="Name*"/></div>
                                    <div className="form-group style-border col-md-6">
                                      <input type="number" className="form-control" name="number" id="number" placeholder="Phone*"/></div>
                                    <div className="form-group style-border col-12">
                                      <input type="email" className="form-control" name="email" id="email" placeholder="e-mail address*"/></div>
                                    <div className="form-group style-border col-12"><select name="subject" id="subject"
                                            className="form-select bg-white">
                                            <option value="" disabled="disabled" selected="selected" hidden>Select
                                                Subject</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Brand Marketing">Brand Marketing</option>
                                            <option value="UI/UX Designing">UI/UX Designing</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select></div>
                                    <div className="form-group style-border col-12"><textarea name="message" id="message"
                                            cols="30" rows="3" className="form-control"
                                            placeholder="How can I help you? Feel free to get in touch!"></textarea>
                                    </div>
                                    <div className="form-btn col-12 mt-15"><button className="th-btn">Send Message</button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                        </div> */}
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-5">
              <aside className="sidebar-area sidebar-sticky radius-0 p-0 bg-transparent">
                <div className="widget widget_team_info">
                  <div className="widget-thumb">
                    <img src="assets/img/team/team_inner_1_1.png" alt="img" /></div>
                  <div className="widget-info-wrap">
                    <h4 className="box-title">Payal Patel</h4>
                    <p className="box-text">Co-Founder </p>
                  </div>
                  <div className="info-list">
                    <ul>
                      <li>
                        <div><strong className="title">Phone Number:</strong> <span className="text"><a
                          href="tel:+00-1234567889">+00-123 456 7889</a></span></div>
                      </li>
                      <li>
                        <div><strong className="title">Location:</strong> <span
                          className="text">California</span></div>
                      </li>
                      <li>
                        <div><strong className="title">Email Address:</strong> <span
                          className="text">williamjenymail@gmail.com</span></div>
                      </li>
                      <li>
                        <div><strong className="title">Services</strong> <span className="text"><a
                          href="#">Business,</a><a href="#">Consulting,</a><a
                            href="#">Finance</a></span></div>
                      </li>
                      <li>
                        <div><strong className="title">Get In Touch:</strong>
                          <div className="th-social style2"><a href="https://www.facebook.com/"><i
                            className="fab fa-facebook-f"></i></a> <a
                              href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i
                              className="fab fa-linkedin-in"></i></a> <a
                                href="https://www.instagram.com/"><i
                                  className="fab fa-instagram"></i></a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default TeamDetails;
