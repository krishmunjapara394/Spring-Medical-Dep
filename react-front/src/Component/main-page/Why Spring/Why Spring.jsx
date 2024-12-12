import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import logo from '../Home Page/IMG/logo-2.svg'
import fLogo from '../Home Page/IMG/logo (2).svg'       
import './Why Spring.css'
import { sec2Data, sec5Data, sec7Data } from "./Why SpringSlice"
import { navbar1Data } from "../Home Page/HTML/Home-PageSlice"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initializeAOS } from "../AOS Animation/aosSlice"



const WhySpring = () => {
    const dispatch = useDispatch()
    const navbar = useSelector(state => state.homePage.navbar1)
    const sec2 = useSelector(state => state.whySpring.sec2.data)
    const sec5 = useSelector(state => state.whySpring.sec5.data)
    const sec7 = useSelector(state => state.whySpring.sec7.data)
    const aosSettings = useSelector((state) => state.aos.settings);
    const aosInitialized = useSelector((state) => state.aos.initialized);


    useEffect(() => {
        dispatch(navbar1Data())
        dispatch(sec2Data())
        dispatch(sec5Data())
        dispatch(sec7Data())
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



    const navigate = useNavigate()
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
    const ContactUs = () => {
        navigate('/ContactUs')
    }
    const BookAppointment = () => {
        navigate('/BookAppointment')
    }
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
                            <li style={{ cursor: 'pointer' }} className="nav-item nav-link text-warning ps-xxl-4">Why Spring</li>
                            <li className="nav-item-1 dropdown ps-xxl-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul className="dropdown-menu">
                                <li onClick={FamilyPhysicians} style={{cursor: 'pointer'}} className="dropdown-item">Family Physicians</li>
                                <li onClick={FootOrthotics} style={{cursor: 'pointer'}} className="dropdown-item">Foot Orthotics</li>
                                    <li onClick={OurService} style={{cursor: 'pointer'}} className="dropdown-item">Our Service</li>
                                    <li onClick={Shockwave} style={{cursor: 'pointer'}} className="dropdown-item">Shockwave</li>
                                    <li onClick={HolterMonitering} style={{ cursor: 'pointer' }} className="dropdown-item">Holter Monitering</li>
                                    <li onClick={Electrocardiogram} style={{ cursor: 'pointer' }} className="dropdown-item">Electrocardiogram</li>
                                    <li onClick={HerbalTherapy} style={{ cursor: 'pointer' }} className="dropdown-item">Traditional Chinese Herbal Therapy</li>
                                </ul>
                            </li>
                            <li onClick={OurTeam} style={{ cursor: 'pointer' }} className="nav-item ps-xxl-4 nav-link">Our Team</li>
                            <li onClick={BlogPost} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Blog</li>
                            <li onClick={ContactUs} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Contact us</li>
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
                            <h6 className="ms-xl-5 mb-0" data-aos="fade-left" data-aos-duration="1000">HOME | Foot Orthotics and
                                Braces </h6>
                            <h1 className="ms-xl-5" data-aos="fade-right" data-aos-duration="1000">Why Choose Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            {
                sec2?.map((a, idx) => {
                    return (
                        <div key={idx}>
                            {idx % 2 === 0 ?
                                <section className="why-spring-sec-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 text-center why-spring-sec2-img1" data-aos="fade-down" data-aos-duration="1000">
                                                <img src={a?.first?.image} alt="Doctor" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 why-spring-sec2-1" data-aos="fade-up" data-aos-duration="1000">
                                                <h1 className="mt-5 pt-5 fw-bold">{a?.first?.title}</h1>
                                                <p className="mt-5">{a?.first?.description}</p>
                                            </div>
                                            <div className="col-12 why-spring-sec2-2" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="row">
                                                    <div className="col-xl-9 col-lg-9 ps-md-5 mt-5">
                                                        <h1 className="ms-md-5 fw-bold">{a?.secund?.title}</h1>
                                                        <p className="ms-md-5 mt-4">{a?.secund?.description}</p>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-3 text-center rounded-circle why-spring-sec2-3">
                                                        <img src={a?.secund?.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                :
                                <section className="why-spring-sec-3">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 why-spring-sec3-1" data-aos="fade-up" data-aos-duration="1000">
                                                <h1 className="mt-5 pt-5 fw-bold">{a?.first?.title}</h1>
                                                <p className="mt-5">{a?.first?.description}</p>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 text-center why-spring-sec3-img1" data-aos="fade-down" data-aos-duration="1000">
                                                <img src={a?.first?.image} alt="Doctor" />
                                            </div>
                                            <div className="col-12 why-spring-sec3-2" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 text-center rounded-circle why-spring-sec3-3">
                                                        <img src={a?.secund?.image} alt="" />
                                                    </div>
                                                    <div className="col-xl-9 col-lg-9 ps-md-5 mt-5 text-end">
                                                        <h1 className="ms-md-5 pt-3 fw-bold">{a?.secund?.title}</h1>
                                                        <p className="ms-md-5 mt-4 mb-5">{a?.secund?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            }
                        </div>
                    )
                })
            }
            <section className="why-spring-sec-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center pb-5 mb-5">
                            <h1 className="fw-bold mt-5 pt-4" data-aos="fade-right" data-aos-duration="1000">How Can We Help You?
                            </h1>
                            <p className="mt-4 pb-5 mb-5" data-aos="fade-left" data-aos-duration="1000">Spring Integrative Medical
                                Centre is the Lower Mainland’s premier provider of integrated medical<br /> services. With an
                                extensive range of services we streamline the healing process for our patients as we<br /> offer
                                both a Family Physician, and team of practitioners, all in ONE location.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-spring-sec-5">
                <div className="container text-center mt-5">
                    <div className="row row-cols-lg-5 row-cols-auto d-flex justify-content-center">
                        {
                            sec5?.map((a, idx) => {
                                return (
                                    <div className="col g-3 g-lg-3" key={idx} data-aos="zoom-in-up" data-aos-duration="1000">
                                        <div className="p-3 rounded-3 why-spring-sec5-1">
                                            <img className="pt-4" src={a?.image} alt="img" width="50px" />
                                            <h5 className="mt-5">{a?.title}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 mt-5">
                        <button onClick={OurService} className="head-btn px-4 rounded-pill py-2">View All Services <i className="bi bi-arrow-right-short"></i></button>
                    </div>
                </div>
            </section>
            <section className="why-spring-sec-6">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="fw-bold" data-aos="fade-right" data-aos-duration="1000">Get In Touch With Us!</h1>
                            <p className="mt-4" data-aos="fade-left" data-aos-duration="1000">Spring Medical Centre is the North
                                Burnaby premier provider of integrated medical services. With an<br /> extensive range of services
                                we streamline the healing process for our patients as we offer both a<br /> Family Physician, and
                                team of practitioners, all in ONE location.</p>
                        </div>
                        <div className="col-12 mt-5">
                            <iframe className="rounded-4"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.197462692059!2d-123.00705065999095!3d49.26640176133577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486772e2c59ea19%3A0x801a10c015d6e5b!2sSpring%20Medical%20Centre%20-%20Burnaby%20Physiotherapy%2C%20Chiropractor%2C%20Massage%20Therapy%20and%20Walk-In%20Doctors!5e0!3m2!1sen!2sin!4v1713595671824!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-spring-sec-7">
                <div className="container">
                    <div className="row text-center">
                        {
                            sec7?.map((a, idx) => {
                                return (
                                    <div key={idx} className="col-xl-4 col-lg-6 d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-duration="1000">
                                        <div className={a?.class1}>
                                            <img className="pt-4" src={a?.image} alt="" />
                                            <h2 className="pt-4">{a?.title}</h2>
                                            <p>{a?.details}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
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
                            <p className="mt-4">Spring Medical Centre is the North Burnaby premier provider of integrated medical
                                services. With
                                an extensive range of services we streamline the healing process for our patients as we offer
                                both a Family Physician, and team of practitioners, all in ONE location.</p>
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


export default WhySpring