import React,{useState} from 'react'
import Breadcumbs from '../components/Breadcumbs'
import teaminner11 from "../assets/img/team/team_inner_1_1.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';


function TeamDetails() {
    const [team,setTeam] = useState({ name: '',number: '',email: '', subject: '', message:''})
    const handleChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value })
    }

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
      number: Yup.string()
        .matches(/^\d+$/, "Phone must be numeric")
        .required("Phone is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://html.themeholy.com/robor/demo/mail.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
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
  return (
   <>
    <Breadcumbs prevLink="Home" currentLink="Team Details" pageTitle="Team Details"/>
    <section className="space-top space-extra-bottom">
        <div className="container">
            <div className="row gx-60">
                <div className="col-xxl-3 col-xl-4 col-lg-5">
                    <aside className="sidebar-area sidebar-sticky radius-0 p-0 bg-transparent">
                        <div className="widget widget_team_info">
                            <div className="widget-thumb">
                                <img src={teaminner11} alt="img"/></div>
                            <div className="widget-info-wrap">
                                <h4 className="box-title">Jenny William</h4>
                                <p className="box-text">Chief Consultant</p>
                            </div>
                            <div className="info-list">
                                <ul>
                                    <li>
                                        <div>
                                            <strong className="title">Phone Number:</strong> 
                                            <span className="text"><Link to="tel:+00-1234567889">+00-123 456 7889</Link></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <strong className="title">Location:</strong>
                                            <span className="text">California</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div><strong className="title">Email Address:</strong> <span
                                                className="text">williamjenymail@gmail.com</span></div>
                                    </li>
                                    <li>
                                        <div><strong className="title">Services</strong>
                                         <span className="text"><Link to="#">Business,</Link>
                                         <Link to="#">Consulting,</Link>
                                         <Link to="#">Finance</Link></span>
                                         </div>
                                    </li>
                                    <li>
                                        <div><strong className="title">Get In Touch:</strong>
                                            <div className="th-social style2">
                                                <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                                 <Link to="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
                                                <Link to="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link> 
                                                <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
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
                        <p className="mb-25">Jenny Willam is one of the best online resources for learning about technology
                            in the medical sphere. There’s a real sense skepticiesm cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit aniem id If you run an internet search for medical blogs, you’ll come across hundreds
                            of results. And figuring out which sources are reputable can take a lot of time. To help
                            ease the process, we compiled. we present present exciting new ventures.</p>
                        <p className="mb-25">The New York coworking community has also been evolving rapidly Regus and
                            Rockefeller Group Business Center. WeWork and other services have a large presence. The
                            demand coworking Brooklyn neighborhoods is high due to the increased number of millennials
                            in workforce; nearly one in 10 workers in the Gowanus, Brooklyn area are remote workers. The
                            industrial area of Gowanus is seeing a surge in new startups that are redesigning old
                            buildings into new coworking spaces.</p>
                        <h4 className="fw-semibold mb-2">Problem solved with our team</h4>
                        <p>Venenatis purus egestas lorem aenean enim bibendum. Ac pharetra egestas eget gravida turpis
                            senectus. Sed blandit ipsum orci odio egestas egestas sed bibendum. Rhoncus est proin
                            euismod condimentum eget a tristique integer viverra. facilisis gravida neque convallis a
                            cras. Risus nec Fermentum posuere urna nec. Felis imperdiet proin fermentum leo vel orci
                            porta. Sapien pellentesque habitant morbi tristique.</p>
                        <div className="checklist mb-60">
                            <ul>
                                <li>Covers all the international news via websites, blogs, newswires, newspapers, trade
                                    publication</li>
                                <li>This Database provides books, conference proceedings and journals covering all
                                    disciplines in academics</li>
                                <li>Fintech is growing rapidly but Internet Access, Government compliance and Data
                                    Security is where it is still</li>
                                <li>Database provides returns for exchange rates, fixed income tax, price earnings,
                                    prices, equity data</li>
                            </ul>
                        </div>
                        </div>
                        <div className="contact-form-v4 bg-smoke mt-60">
                            <div className="title-area mb-30">
                                <h3 className="title mt-n2">Contact with me</h3>
                            </div>
                            <form onSubmit={formik.handleSubmit} className="contact-form">
                                <div className="row">
                                    <div className="form-group style-border col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name*"
                                        {...formik.getFieldProps("name")}
                                    />
                                    {formik.touched.name && formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
                                    </div>

                                    <div className="form-group style-border col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="number"
                                        placeholder="Phone*"
                                        {...formik.getFieldProps("number")}
                                    />
                                    {formik.touched.number && formik.errors.number && <div className="text-danger">{formik.errors.number}</div>}
                                    </div>

                                    <div className="form-group style-border col-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="e-mail address*"
                                        {...formik.getFieldProps("email")}
                                    />
                                    {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                                    </div>

                                    <div className="form-group style-border col-12">
                                    <select
                                        name="subject"
                                        className="form-select bg-white"
                                        {...formik.getFieldProps("subject")}
                                    >
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
  )
}

export default TeamDetails