import React,{useState} from 'react'
import ConsultingThumb11 from "../assets/img/normal/consulting-thumb1-1.jpg";
function Signup() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        number: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value})
    }
  return (
    <>
        <div className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common" id="contact-sec">
        <div className="container">
            <div className="consulting-wrap1 bg-smoke">
                <div className="row align-items-center">
                    <div className="col-xxl-6">
                        <div className="page-img mb-0">
                            <img src={ConsultingThumb11} alt="img"/>
                            </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="consulting-form-wrap1">
                            <div className="title-area mb-20">
                                <h2 className="sec-title"> Sign Up </h2>
                            </div>
                            <div className="contact-form-v1">
                                <form action="https://html.themeholy.com/robor/demo/mail.php" method="POST"
                                    className="contact-form ajax-contact">
                                    <div className="row">
                                        <div className="form-group style-border col-md-12">
                                            <input type="text" className="form-control" name="name" id="name" value={userData.name} onChange={handleChange} placeholder="Enter Your Name" required/> 
                                            <i className="far fa-user"></i>
                                            </div>
                                        <div className="form-group style-border col-md-12">
                                            <input type="email" className="form-control" name="email" id="email" value={userData.email} onChange={handleChange} placeholder="Enter Your Email Address" required/>
                                             <i className="far fa-envelope"></i>
                                            </div>
                                              <div className="form-group style-border col-md-12">
                                            <input type="number" className="form-control" name="number" id="number" value={userData.number} onChange={handleChange} placeholder="Enter Your Phone Number" required/> 
                                            <i className="far fa-phone"></i></div>
                                              <div className="form-group style-border col-md-12">
                                            <input type="password" className="form-control" name="password" id="password" value={userData.password} onChange={handleChange} placeholder="Enter Your Password" required/>
                                             <i className="far fa-lock"></i>
                                            </div>
                                      
                                        {/* <div className="form-group style-border col-md-6">
                                            <select name="subject" id="subject" className="form-select bg-white">
                                                <option value="" disabled="disabled" selected="selected" hidden> Select Subject </option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Brand Marketing">Brand Marketing</option>
                                                <option value="UI/UX Designing">UI/UX Designing</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                            </select></div> */}
                                        {/* <div className="form-group style-border col-12">
                                            <input type="number" className="form-control" name="number" id="number" placeholder="Company name"/> 
                                            <i className="far fa-circle-info"></i>
                                        </div> */}
                                        {/* <div className="form-group style-border col-12">
                                            <textarea name="message" id="message" cols="30" rows="3" className="form-control"
                                                placeholder="How can we help you? feel free to get in touch!*"></textarea>
                                        </div> */}
                                        <div className="form-btn col-12"><button className="th-btn style5">
                                            Signup
                                        </button></div>
                                        
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </form>
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

export default Signup