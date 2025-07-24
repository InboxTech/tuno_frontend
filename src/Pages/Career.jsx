import React, { useState, useEffect } from 'react'
import Breadcumbs from '../components/Breadcumbs'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../store/auth'
function Career() {
    const [jobopenings, setJobOpenings] = useState([])
    const { API } = useAuth()

    //get job openings
    const getJobOpenings = async () => {
        try {
            const response = await fetch(`${API}/api/career/getJobOpenings`, {
                method: "GET"
            })
            const data = await response.json()
            if (response.ok) {
                setJobOpenings(Array.isArray(data.jobOpenings) ? data.jobOpenings : [])
            } else {
                toast.error(data.message || "Failed to fetch job openings")
            }
        } catch (error) {
            toast.error("Something went wrong while fetching job openings")
        }
    }
    useEffect(() => {
        getJobOpenings()
    }, [])
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
                                {jobopenings.map((job, index) => {
                                    const collapseId = `collapse-${job._id}`;
                                    const headerId = `collapse-item-${job._id}`;

                                    return (
                                        <div className="accordion-card" key={job._id}>
                                            <div className="accordion-header" id={headerId}>
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    aria-expanded="false"
                                                    aria-controls={collapseId}
                                                >
                                                    {job.designation}
                                                </button>
                                            </div>
                                            <div
                                                id={collapseId}
                                                className="accordion-collapse collapse"
                                                aria-labelledby={headerId}
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p className="faq-text">{job.short_description}</p>
                                                </div>
                                                <div className="d-flex justify-content-end me-5 py-1">
                                                    <Link to={`/career-details/${job._id}`} className="th-btn style-gradient">
                                                      Apply Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career