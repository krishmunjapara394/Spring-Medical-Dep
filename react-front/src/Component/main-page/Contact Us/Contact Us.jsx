import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import logo from '../Home Page/IMG/logo-2.svg'
import fLogo from '../Home Page/IMG/logo (2).svg'
import { useFormik } from "formik"
import './Contact Us.css'
import { useEffect } from "react"
import { navbar1Data } from "../Home Page/HTML/Home-PageSlice"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initializeAOS } from "../AOS Animation/aosSlice"
import { toast } from "react-toastify"

const ContactUs = () => {
    const navbar = useSelector(state => state.homePage.navbar1)
    const aosSettings = useSelector((state) => state.aos.settings);
    const aosInitialized = useSelector((state) => state.aos.initialized);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(navbar1Data())
    }, [])

    useEffect(() => {
        if (!aosInitialized) {
            dispatch(initializeAOS({ duration: 1000, easing: 'ease-in-out' }));
            AOS.init(aosSettings);
        }
    }, [aosInitialized, aosSettings, dispatch]);

    useEffect(() => {
        if (aosInitialized) {
            AOS.refresh();
        }
    }, [aosSettings, aosInitialized]);


    const HomePage = () => {
        navigate('/')
    }
    const Electrocardiogram = () => {
        navigate('/electrocardiogram')
    }
    const HolterMonitering = () => {
        navigate('/HolterMonitering')
    }
    const HerbalTherapy = () => {
        navigate('/HerbalTherapy')
    }
    const BlogPost = () => {
        navigate('/BlogPost')
    }
    const OurService = () => {
        navigate('/OurService')
    }
    const Shockwave = () => {
        navigate('/ShockwaveTherapy')
    }
    const FamilyPhysicians = () => {
        navigate('/FamilyPhysicians')
    }
    const FootOrthotics = () => {
        navigate('/FootOrthotics')
    }
    const OurTeam = () => {
        navigate('/OurTeam')
    }
    const WhySpring = () => {
        navigate('/WhySpring')
    }
    const ContactUs = () => {
        navigate('/ContactUs')
    }
    const BookAppointment = () => {
        navigate('/BookAppointment')
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            number: "",
            message: ""
        },
        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = "please enter your email"
            }
            if (!values.name) {
                errors.name = "please enter your name"
            }
            if (!values.number) {
                errors.number = "please enter your number"
            }
            if (!values.message) {
                errors.message = "please enter your message"
            }
            return errors
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            let data = JSON.parse(localStorage.getItem('Contact Us')) || []
            localStorage.setItem('Contact Us', JSON.stringify([...data, values]))
            toast.success('Message Sent Successfully')
            resetForm()
        }
    })

    return (
        <>
            <div className="container-fluid nav-error" data-aos="fade-down" data-aos-duration="1000">
                <div className="row">
                    <div className="col-12 text-center head-1">
                        <p className="pt-1 "><i className="bi bi-exclamation-circle-fill pe-2 ps-5"></i> COVID-19 information<span
                            className="ps-5 pe-5"> | </span>SPRING MEDICAL COVID-19 SAFETY PLAN</p>
                    </div>
                </div>
            </div>
            <div className="container nav-number">
                <div className="row">
                    {
                        navbar?.map((a, idx) => {
                            return (
                                <div className="col-4" key={idx}>
                                    <div className="row" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="col-3 text-end my-3 head-2">
                                            <p className="pt-1"><i className={a?.icon} /></p>
                                        </div>
                                        <div className="col-9 my-3 ps-5">
                                            <div className="row border-end head-3">
                                                <div className="col-12 pt-2 head3-1">
                                                    <h6>{a?.i_title}</h6>
                                                </div>
                                                <div className="col-12">
                                                    <p>{a?.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container">
                    <a className="navbar-brand ps-5" data-aos="fade-right" data-aos-duration="1000" href="#"><img src={logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ps-5">
                            <li onClick={HomePage} className="nav-item nav-link ps-xxl-5" style={{ cursor: 'pointer' }}>Home</li>
                            <li onClick={WhySpring} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Why Spring</li>
                            <li className="nav-item-1 dropdown ps-xxl-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={FamilyPhysicians} style={{ cursor: 'pointer' }} className="dropdown-item">Family Physicians</li>
                                    <li onClick={FootOrthotics} style={{ cursor: 'pointer' }} className="dropdown-item">Foot Orthotics</li>
                                    <li onClick={OurService} style={{ cursor: 'pointer' }} className="dropdown-item">Our Service</li>
                                    <li onClick={Shockwave} style={{ cursor: 'pointer' }} className="dropdown-item">Shockwave</li>
                                    <li onClick={HolterMonitering} style={{ cursor: 'pointer' }} className="dropdown-item">Holter Monitering</li>
                                    <li onClick={Electrocardiogram} style={{ cursor: 'pointer' }} className="dropdown-item">Electrocardiogram</li>
                                    <li onClick={HerbalTherapy} style={{ cursor: 'pointer' }} className="dropdown-item">Traditional Chinese Herbal Therapy</li>
                                </ul>
                            </li>
                            <li onClick={OurTeam} style={{ cursor: 'pointer' }} className="nav-item ps-xxl-4 nav-link">Our Team</li>
                            <li onClick={BlogPost} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Blog</li>
                            <li onClick={ContactUs} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4 text-warning">Contact us</li>
                            <li className="nav-item1 ms-xl-5 ps-xl-5" data-aos="fade-left" data-aos-duration="1000">
                                <button onClick={BookAppointment} className="head-btn px-4 rounded-pill py-2">Book An Appoinment <i className="bi bi-arrow-right-short"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="sec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-white ps-xl-5 my-5 py-4">
                            <h6 className="ms-xl-5 mb-0" data-aos="fade-left" data-aos-duration="1000">HOME | CONTACT US</h6>
                            <h1 className="ms-xl-5" data-aos="fade-right" data-aos-duration="1000">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-sec-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <form method="post" className="form" id="form" onSubmit={formik.handleSubmit}>
                                <label htmlFor="email" className="mt-3 ps-3 contact-label">Email Address</label><br />
                                <input
                                    type="email"
                                    className="mt-2 contact-input"
                                    name="email"
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your email address here"
                                /><br />
                                {formik.errors.email && <p id="errorEmail">{formik.errors.email}</p>}

                                <label htmlFor="text" className="mt-3 ps-3 contact-label">First Name</label><br />
                                <input
                                    type="text"
                                    className="mt-2 contact-input"
                                    name="name"
                                    id="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your name here"
                                /><br />
                                {formik.errors.name && <p id="errorName">{formik.errors.name}</p>}

                                <label htmlFor="email" className="mt-3 ps-3 contact-label">Mobile Number</label><br />
                                <input
                                    type="number"
                                    className="mt-2 contact-input"
                                    name="number"
                                    id="number"
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your contact number here"
                                /><br />
                                {formik.errors.number && <p id="errorNumber">{formik.errors.number}</p>}

                                <label htmlFor="email" className="mt-3 ps-3 contact-label">Message</label><br />
                                <textarea
                                    id="message"
                                    className="mt-2 contact-input"
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your message here"
                                    style={{ height: "200px" }}>
                                </textarea>
                                {formik.errors.message && <p id="errorMessage">{formik.errors.message}</p>}

                                <div className="text-center mt-2">
                                    <button className="head-btn px-4 rounded-pill py-2 w-100 contact-form-btn" type="submit" data-aos="fade-right" data-aos-duration="1000">Submit <i className="bi bi-arrow-right-short"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-7 col-lg-7 ps-5">
                            <div className="row">
                                <div className="col-xl-12 mt-4">
                                    <h1>Get In Touch With Us!</h1>
                                    <p className="mt-3">Spring Medical Centre is the North Burnaby premier provider of integrated medical services. With an extensive range of services we streamline the healing process for our patients as we offer both a Family Physician, and team of practitioners, all in ONE location.</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3">
                                    <h6 className="fw-bold">Address</h6>
                                    <p>Spring Medical Centre<br />
                                        4453 Lougheed Highway<br />
                                        Burnaby, BC<br />
                                        V5C 3Z2
                                    </p>
                                    <h6 className="mt-3 fw-bold">Mail</h6>
                                    <p>info@springmedicalcentre.com</p>
                                    <h6 className="fw-bold mt-4">Office</h6>
                                    <p className="mt-3"><span className="pe-4"><i className="bi bi-telephone-fill"></i></span>604-428-1363</p>
                                    <p><span className="pe-4"><i className="bi bi-phone-vibrate-fill"></i></span>604-428-1366</p>
                                    <h6>Family Doctors</h6>
                                    <p><span className="pe-4"><i className="bi bi-telephone-fill"></i></span>604-428-1363</p>
                                    <p><span className="pe-4"><i className="bi bi-phone-vibrate-fill"></i></span>604-428-1366</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3">
                                    <h6 className="fw-bold contact-sec2-h6-1">Spring Medical Centre -<br />
                                        Working Hours:</h6>
                                    <p className="mt-4">Mon: 09:00 am - 05:00 pm</p>
                                    <p>Tue: 08:30 am - 05:00 pm</p>
                                    <p>Wed: 08:30 am - 06:00 pm</p>
                                    <p>Thu: 09:00 am - 06:30 pm</p>
                                    <p>Fri: 09:00 am - 05:00 pm</p>
                                    <p>Sat: 09:00 am - 03:00 pm</p>
                                    <p>Sun: 09:00 am - 3:00 pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 contact-sec2-map">
                            <iframe className="rounded-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.197462692059!2d-123.00705065999095!3d49.26640176133577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486772e2c59ea19%3A0x801a10c015d6e5b!2sSpring%20Medical%20Centre%20-%20Burnaby%20Physiotherapy%2C%20Chiropractor%2C%20Massage%20Therapy%20and%20Walk-In%20Doctors!5e0!3m2!1sen!2sin!4v1713595671824!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-8">
                <div className="container sec8-1">
                    <div className="row">
                        <div className="col-12 pt-5 pb-5 text-center">
                            <h1 className="fw-bold" data-aos="fade-right" data-aos-duration="1000">Book Appoinment</h1>
                            <p className="pt-4" data-aos="fade-left" data-aos-duration="1000">Our administration and support staff
                                all have exceptional people skills
                                and<br />trained to assist you with all medical enquiries.</p>
                            <button onClick={BookAppointment} className="sec5-btn px-4 rounded-pill py-2 mt-3"
                                data-aos="fade-right" data-aos-duration="1000">Book Appointment <i
                                    className="bi bi-arrow-right-short ps-3"></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-5 footer">
                <div className="container">
                    <div className="row" id="footer">
                        <div className="col-md-4" data-aos="zoom-in-down" data-aos-duration="1000">
                            <img src={fLogo} alt="" />
                            <p className="mt-4">Spring Medical Centre is the North Burnaby premier provider of integrated medical services. With an extensive range of services we streamline the healing process for our patients as we offer both a Family Physician, and team of practitioners, all in ONE location.</p>
                            <div className="social-icons mt-5">
                                <i className="bi bi-google"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-linkedin"></i>
                                <i className="bi bi-youtube"></i>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in-down" data-aos-duration="1000">
                            <h5 className="fs-3 mt-3">Contact Us</h5>
                            <ul className="list-unstyled mt-4 foot-1">
                                <li className="mt-2"><i className="bi bi-telephone-fill pe-4"></i> 604-428-3263</li>
                                <li className="mt-2"><i className="bi bi-envelope-fill pe-4"></i> info@springmedicalcentre.com</li>
                                <li className="mt-2"><i className="bi bi-geo-alt-fill pe-4"></i> 4463 Lougheed Hwy, Burnaby, BC V5C 3Z2
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in-down" data-aos-duration="1000">
                            <h5 className="fs-3">Latest News</h5>
                            <ul className="list-unstyled mt-4">
                                <li>Lorem ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                            </ul>
                        </div>
                        <div className="col-12 text-center border-top p-4 mt-5" data-aos="zoom-in-down" data-aos-duration="1000">
                            <p className="small text-light">© Copyright 2023 by Spring Medical Centre. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default ContactUs