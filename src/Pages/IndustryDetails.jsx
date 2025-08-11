import React, {useState,useEffect} from 'react'
import Breadcumbs from '../components/Breadcumbs'
import { Link } from 'react-router-dom'
import {useAuth} from '../store/auth'
import { useParams } from 'react-router-dom'

function IndustryDetails() {
  const [industrydetails, setIndustrydetails] = useState([])
  const {API} = useAuth()
  const {id} = useParams()
    //get service details
     const getIndustryDetails = async () => {
     try {
        const response = await fetch(`${API}/api/industry/getIndustryById/${id}`,{
            method: "GET"
            })
            const data = await response.json()
            setIndustrydetails(data)
     } catch (error) {
        console.log(error)
     }
     }

     useEffect(() => {
        getIndustryDetails()
     },[id])

    return (
        <>
            <Breadcumbs prevLink="Home" currentLink={industrydetails.title} pageTitle={industrydetails.title} />

            <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row gx-60">
                        <div className="col-xl-8 col-lg-7">
                            <div className="page-single">
                                <div className="page-img gsap-parallax mb-35">
                                    <img src={`${API}${industrydetails.industry_image}`} alt="Industry Image" style={{width: '100%',height: '30rem'}} />
                                </div>
                                <div  dangerouslySetInnerHTML={{ __html: industrydetails.full_description }}>
                                   {/* full description come from admin panel */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <aside className="sidebar-area sidebar-sticky rounded-0 p-0 bg-transparent">
                                {/* <div className="widget widget-contact-form">
                                    <h3 className="widget_title">Get In touch</h3>
                                    <form action="https://html.themeholy.com/robor/demo/mail.php" method="POST"
                                        className="ajax-contact">
                                        <div className="row">
                                            <div className="form-group style-border col-12">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your name*" />
                                            </div>
                                            <div className="form-group style-border col-12">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email address*" />
                                            </div>
                                            <div className="form-group style-border col-12">
                                                <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Write Message..."></textarea>
                                            </div>
                                            <div className="form-btn col-12">
                                                <button className="th-btn style3">Submit Message</button>
                                            </div>
                                        </div>
                                        <p className="form-messages mb-0 mt-3"></p>
                                    </form>
                                </div> */}
                                <div className="widget widget-contact-wrap">
                                    <h3 className="widget_title">Contact info</h3>
                                    <p className="box-text">Need Any Help, Call Us 24/7 For Support</p>
                                    <div className="info-box">
                                        <div className="info-box_icon"><i className="fas fa-phone"></i></div>
                                        <div className="box-content">
                                            <p className="info-box_title">Call Us</p>
                                            <p className="info-box_text">
                                                <Link to="tel:+11278956825" className="info-box_link">+286 985 2156</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="info-box_icon"><i className="fas fa-envelope"></i></div>
                                        <div className="box-content">
                                            <p className="info-box_title">Mail Us</p>
                                            <p className="info-box_text">
                                                <Link to="mailto:info@example.com" className="info-box_link">info@example.com</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="info-box_icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="box-content">
                                            <p className="info-box_title">Office Address</p>
                                            <p className="info-box_text">
                                                <Link to="https://www.google.ca/maps/" className="info-box_link">125 Berlin, Germany</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default IndustryDetails