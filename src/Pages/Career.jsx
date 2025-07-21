import React from 'react'
import Breadcumbs from '../components/Breadcumbs'
import {Link} from 'react-router-dom'
function Career() {
  return (
    <>

     <Breadcumbs prevLink="Home" currentLink="Career" pageTitle="Career-Apportunity" />


    <div className="container">
         <div className="overflow-hidden space">
        <div className="container">
            <div className="row gy-40">
                <div className="col-xxl-6">
                    <div className="title-area">
                        <span className="sub-title style2 before-none text-anim" >  Current Oppenings </span>
                        {/* <h2 className="sec-title text-anim2">Frequently asked questions</h2> */}
                    </div>
                </div>
                <div className="col-xxl-6 align-self-center">
                    <div className="img-box1">
                        {/* <div className="img2" >
                            <img src="assets/img/normal/about-thumb1-3.jpg" alt="About"/>
                            </div> */}
                    </div>
                </div>
            </div>
            <div className="faq-wrap1">
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-card" >
                        <div className="accordion-header" id="collapse-item-1"><button className="accordion-button"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1"
                                aria-expanded="true" aria-controls="collapse-1"> Front End Developer </button></div>
                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Crafts the user-facing part of websites and applications, turning designs into interactive and visually appealing experiences. They use HTML, CSS, and JavaScript to build the structure, style, and functionality of web pages, ensuring a smooth and engaging user experience. </p>
                            </div>
                            <div className='d-flex justify-content-end me-5'>
                                <button className='th-btn style-gradient'> Apply Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-card" >
                        <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2"
                                aria-expanded="false" aria-controls="collapse-2">Backend Developer</button></div>
                        <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Builds and maintains the server-side logic, databases, and APIs that power websites and applications. They focus on the behind-the-scenes functionality, ensuring data is processed correctly and the application runs smoothly for users. They collaborate with front-end developers to integrate user-facing elements with server-side logic. </p>
                            </div>
                             <div className='d-flex justify-content-end me-5'>
                                <button className='th-btn style-gradient'> Apply Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-card" >
                        <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3"
                                aria-expanded="false" aria-controls="collapse-3">Business Development Executive</button></div>
                        <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Identifies and cultivates new business opportunities, building relationships with clients and driving revenue growth. This role requires strong communication, sales, and strategic thinking skills to expand the company's market presence. They are responsible for lead generation, client acquisition, and contributing to the overall success of the company's growth initiatives. </p>
                            </div>
                             <div className='d-flex justify-content-end me-5'>
                                <button className='th-btn style-gradient'> Apply Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-card" >
                        <div className="accordion-header" id="collapse-item-4"><button className="accordion-button collapsed"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4"
                                aria-expanded="false" aria-controls="collapse-4"> Database Administrator</button></div>
                        <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="collapse-item-4"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Manages and maintains an organization's databases, ensuring data integrity, security, and accessibility. They are responsible for designing, implementing, and optimizing database systems, as well as providing technical support and troubleshooting. This role requires strong technical skills in database management, data security, and performance tuning, along with excellent communication and problem-solving abilities. </p>
                            </div>
                             <div className='d-flex justify-content-end me-5'>
                                <button className='th-btn style-gradient'> Apply Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-card" >
                        <div className="accordion-header" id="collapse-item-5"><button className="accordion-button collapsed"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5"
                                aria-expanded="false" aria-controls="collapse-5"> Project Manager</button></div>
                        <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="collapse-item-5"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Oversees projects from initiation to completion, ensuring they are delivered on time, within budget, and meet quality standards. They lead teams, manage resources, and communicate with stakeholders, acting as a central point of contact for all project-related matters. Essentially, they are responsible for guiding projects to success, coordinating all aspects of their execution. </p>
                            </div>
                             <div className='d-flex justify-content-end me-5'>
                                <Link to='/career-details'>
                                <button className='th-btn style-gradient'> Apply Now </button>
                                </Link>
                            </div>
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

export default Career