import { useNavigate } from "react-router-dom";
import logo from '../Home Page/IMG/logo-2.svg'
import { useDispatch, useSelector } from "react-redux";
import fLogo from '../Home Page/IMG/logo (2).svg'
import './Our Services-Holter Monitering.css'
import { holterSec1Data } from "./AllServicesSlice";
import { useEffect } from "react";
import { navbar1Data } from "../Home Page/HTML/Home-PageSlice";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initializeAOS } from "../AOS Animation/aosSlice";


const HolterMonitering = () => {

    const navbar = useSelector((state) => state.homePage.navbar1)
    const holterSec1 = useSelector((state) => state.allServicesSlice.holterSec1)
    const aosSettings = useSelector((state) => state.aos.settings);
    const aosInitialized = useSelector((state) => state.aos.initialized);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(navbar1Data())
        dispatch(holterSec1Data())
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
    const HerbalTherapy = () => {
        navigate('/HerbalTherapy')
    }
    const BlogPost = () => {
        navigate('/BlogPost')
    }
    const WhySpring = () => {
        navigate('/WhySpring')
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
                    <a className="navbar-brand ps-5" data-aos="fade-right" data-aos-duration="1000" href="#"><img
                        src={logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ps-5">
                            <li onClick={HomePage} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-5">Home</li>
                            <li onClick={WhySpring} style={{cursor: 'pointer'}} className="nav-item nav-link ps-xxl-4">Why Spring</li>
                            <li className="nav-item-1 dropdown ps-xxl-4">
                                <a className="nav-link dropdown-toggle text-warning" href="./Our Services-Holter Monitering.html" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Holter Monitering
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={FamilyPhysicians} style={{cursor: 'pointer'}} className="dropdown-item">Family Physicians</li>
                                    <li onClick={FootOrthotics} style={{cursor: 'pointer'}} className="dropdown-item">Foot Orthotics</li>
                                    <li onClick={OurService} style={{cursor: 'pointer'}} className="dropdown-item">Our Service</li>
                                    <li onClick={Shockwave} style={{cursor: 'pointer'}} className="dropdown-item">Shockwave</li>
                                    <li onClick={Electrocardiogram} style={{ cursor: 'pointer' }} className="dropdown-item">Electrocardiogram</li>
                                    <li onClick={HerbalTherapy} style={{ cursor: 'pointer' }} className="dropdown-item">Traditional Chinese Herbal Therapy</li>
                                </ul>
                            </li>
                            <li onClick={OurTeam} style={{ cursor: 'pointer' }} className="nav-item ps-xxl-4 nav-link">Our Team</li>
                            <li onClick={BlogPost} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Blog</li>
                            <li onClick={ContactUs} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Contact us</li>
                            <li className="nav-item1 ms-xl-4 ps-xl-4" data-aos="fade-left" data-aos-duration="1000">
                                <button onClick={BookAppointment} className="head-btn px-4 rounded-pill py-2">Book An Appoinment <i
                                    className="bi bi-arrow-right-short"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="sec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-white ps-xl-5 my-5 py-4">
                            <h6 className="ms-xl-5 mb-0" data-aos="fade-left" data-aos-duration="1000">HOME | Holter Monitering</h6>
                            <h1 className="ms-xl-5" data-aos="fade-right" data-aos-duration="1000">Holter Monitering</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-2 mt-2">
                <div className="container">
                    <div className="row">
                        {
                            holterSec1?.map((a, idx) => {
                                return (
                                    <div key={idx}>
                                        {idx % 2 === 0 ?
                                            <div className="row">
                                                <div className="col-lg-6 col-mg-12 text-center pt-4" data-aos="fade-up" data-aos-duration="1000">
                                                    <img src={a?.image} alt="" />
                                                </div>
                                                <div className="col-lg-6 col-mg-12 mt-lg-5 p-5 " data-aos="fade-down" data-aos-duration="1000">
                                                    <h1 className="Holter-s2p1 fw-bold">{a?.title}</h1>
                                                    <p className="Holter-s2p3 mt-4">{a?.details}</p>
                                                    <p className="Holter-s2p3">{a?.description}</p>
                                                </div>
                                            </div>
                                            :
                                            <div className="row">
                                                <div className="col-lg-6 col-mg-12 mt-lg-5 p-5 " data-aos="fade-up" data-aos-duration="1000">
                                                    <h1 className="Holter-s2p1 fw-bold mt-xl-5">{a?.title}</h1>
                                                    <p className="Holter-s2p3 mt-4">{a?.details}</p>
                                                    <p className="Holter-s2p3">{a?.description}</p>
                                                </div>
                                                <div className="col-lg-6 col-mg-12 text-center pt-4" data-aos="fade-down" data-aos-duration="1000">
                                                    <img style={{ width: '100%' }} src={a?.image} alt="" />
                                                </div>
                                            </div>
                                        }
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

export default HolterMonitering