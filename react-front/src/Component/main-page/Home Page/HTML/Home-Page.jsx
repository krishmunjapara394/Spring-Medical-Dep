import { useDispatch, useSelector } from "react-redux"
import '../CSS/Home-Page.css'
import logo from '../IMG/logo-2.svg'
import sec4Img from '../IMG/covid-recovery-center-female-doctor-checking-elder-patient-s-heartbeat-with-stethoscope.svg'
import sec5Img1 from '../IMG/Need-Family_dr-3.svg'
import sec5Img2 from '../IMG/SpringMedicalCentreExterior_Map.svg'
import fLogo from '../IMG/logo (2).svg'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { navbar1Data, sec2Data, sec3Data, sec4_1Data, sec4_2Data, sec6Data, sec7_1Data, sec7_2Data } from "./Home-PageSlice"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initializeAOS } from '../../AOS Animation/aosSlice';


const Home = () => {
    const dispatch = useDispatch()
    const navbar = useSelector((state) => state.homePage.navbar1)
    const sec2 = useSelector((state) => state.homePage.sec2.data)
    const sec3 = useSelector((state) => state.homePage.sec3.data)
    const sec4_1 = useSelector((state) => state.homePage.sec4_1.data)
    const sec4_2 = useSelector((state) => state.homePage.sec4_2.data)
    const sec6 = useSelector((state) => state.homePage.sec6.data)
    const sec7_1 = useSelector((state) => state.homePage.sec7_1.data)
    const sec7_2 = useSelector((state) => state.homePage.sec7_2.data)
    const aosSettings = useSelector((state) => state.aos.settings);
    const aosInitialized = useSelector((state) => state.aos.initialized);

    useEffect(() => {
        dispatch(navbar1Data())
        dispatch(sec2Data())
        dispatch(sec3Data())
        dispatch(sec4_1Data())
        dispatch(sec4_2Data())
        dispatch(sec6Data())
        dispatch(sec7_1Data())
        dispatch(sec7_2Data())
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


    const navigate = useNavigate();
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
                    <a className="navbar-brand ps-5" data-aos="fade-right" data-aos-duration="1000" href="#"><img src={logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ps-5">
                            <li className="nav-item nav-link text-warning ps-xxl-5" style={{ cursor: 'pointer' }}>Home</li>
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
                            <li onClick={ContactUs} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Contact us</li>
                            <li className="nav-item1 ms-xl-5 ps-xl-5" data-aos="fade-left" data-aos-duration="1000">
                                <button onClick={BookAppointment} className="head-btn px-4 rounded-pill py-2">Book An Appoinment <i className="bi bi-arrow-right-short"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ps-5 head-text">
                                <h1 data-aos="fade-right" data-aos-duration="1000">Welcome to the <br />Spring Medical Centre</h1>
                                <p className="mt-4" data-aos="fade-left" data-aos-duration="1000">Spring Integrative Medical Centre
                                    is the Lower Mainland’s premier<br />
                                    provider of integrated medical services. With an extensive range of<br />
                                    services we streamline the healing process for our patients as we<br />
                                    offer both a Family Physician, and team of practitioners, all in ONE<br />
                                    location.
                                </p>
                                <button onClick={BookAppointment} className="head-btn px-4 rounded-pill py-2 mt-4 me-xl-5 me-sm-2" data-aos="fade-right" data-aos-duration="1000">Make Appointment <i className="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="sec-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center text-white sec1-1">
                            <h1 className="pt-5 fw-bold">Spring Medical Centre</h1>
                            <h4 className="pt-1">The Foundation of Optimal Health</h4>
                            <p className="pt-3 pb-5">Spring Integrative Medical Centre is the Lower Mainland’s premier provider of integrated medical services. With<br />
                                an extensive range of services we streamline the healing process for our patients as we offer both a Family<br />
                                Physician, and team of practitioners, all in ONE location.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec2">
                <div className="container">
                    <div className="row">
                        {
                            sec2?.map((a, idx) => {
                                return (
                                    <div className="col-xl-4 col-lg-6 col-md-6" key={idx}>
                                        {idx % 2 === 0 ?
                                            <div className="col-xl-12 col-lg-12 col-md-12 gx-3">
                                                <div className="text-center border border-black rounded-bottom-pill sec2-1" data-aos="fade-right" data-aos-duration="1000">
                                                    <img className="pt-5" src={a?.first?.Image} alt="img" />
                                                    <h4 className="pt-4">{a?.first?.title}</h4>
                                                    <p className="pt-3 px-4">{a?.first?.description}</p>
                                                    <button onClick={BookAppointment} className="mt-4 mb-5">{a.first.button}<i className="bi bi-arrow-right-short"></i></button>
                                                </div>
                                            </div>
                                            :
                                            <div className="col-xl-12 col-lg-12 col-md-12 gx-3">
                                                <div className="text-center rounded-bottom-pill sec2-2" data-aos="fade-up" data-aos-duration="1000">
                                                    <img className="pt-5" src={a?.first?.Image} alt="img" />
                                                    <h4 className="pt-4">{a?.first?.title}</h4>
                                                    <p className="pt-3 px-4">{a?.first?.description}</p>
                                                    <button onClick={BookAppointment} className="mt-4 mb-5">{a?.first?.button}<i className="bi bi-arrow-right-short"></i></button>
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
            <section className="sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className="fw-bold">All-In-One<br />Medical Centre</h1>
                        </div>
                        <div className="col-xl-6 col-lg-12" data-aos="fade-down" data-aos-duration="3000">
                            <p className="sec3-p">
                                Our extensive range of services allow us to streamline the healing process<br />
                                for our patients as we offer both a Family Physician, and team of<br />
                                practitioners without having to leave our clinic. Most of our services are<br />
                                covered by extended medical insurance.
                            </p>
                            <div className="row">
                                <div className="col-xl-6">
                                    <button onClick={BookAppointment} className="head-btn px-4 rounded-pill py-2 mt-3 me-xl-5 me-sm-2">Make Appointment <i className="bi bi-arrow-right-short"></i></button>
                                </div>
                                <div className="col-xl-6">
                                    <p className="sec3-span mt-3"><i
                                        className="bi bi-arrow-right-short rounded-circle me-xl-3 sec3-i"></i>Call 604-428-1363
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <div className="row row-cols-lg-5 row-cols-auto d-flex justify-content-center">
                        {
                            sec3?.map((a, idx) => {
                                return (
                                    <div key={idx}>
                                        <div className="col g-3 mt-3 g-lg-3" data-aos="zoom-in-up" data-aos-duration="1000">
                                            <div className="p-3 rounded-3 sec3-1">
                                                <img className="pt-4" src={a?.iamges} alt="img" />
                                                <h5 className="mt-5">{a?.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="sec4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 sec4-1" data-aos="fade-right" data-aos-duration="1000">
                            <img src={sec4Img} alt="image" />
                        </div>
                        <div className="col-xl-6 col-lg-12 sec4-2">
                            {
                                sec4_1?.map((a, idx) => {
                                    return (
                                        <div key={idx}>
                                            <h1 className="mt-5 text-white ps-md-5 sec4-h1-1" data-aos="fade-up" data-aos-duration="1000">{a?.title}</h1>
                                            <p className=" text-white mt-4 ps-md-5 sec4-p-1" data-aos="fade-up" data-aos-duration="1000">{a?.description}</p>
                                            <div className="row mt-5 ps-md-5">
                                                <div className="col-lg-1" data-aos="fade-down" data-aos-duration="1000">
                                                    <img className="mt-sm-3" src={a?.details?.img} alt="" />
                                                </div>
                                                <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                                    <h3 className="text-white fw-bold mt-sm-3">{a?.details?.title}</h3>
                                                    <a href="../Learn More/learnmore.html" className="sec4-Learn">
                                                        <p className="sec4-Learn">{a?.details?.button}<i className="bi bi-arrow-right-short"></i></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                sec4_2?.map((a, idx) => {
                                    return (
                                        <div key={idx}>
                                            <div className="row mt-4 ps-md-5">
                                                <div className="col-lg-1" data-aos="fade-down" data-aos-duration="1000">
                                                    <img className="mt-sm-3" src={a?.img} alt="" />
                                                </div>
                                                <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                                    <h3 className="text-white fw-bold mt-sm-3">{a?.title}</h3>
                                                    <a href="../Learn More/learnmore.html" className="sec4-Learn">
                                                        <p className="sec4-Learn">{a?.button} <i className="bi bi-arrow-right-short"></i></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <span style={{ textDecoration: "none" }}>
                                <h1 onClick={BookAppointment} className="py-sm-3 px-sm-5 sec4-h1-2"><i className="bi bi-calendar2-event pe-4"></i>Book An Appoinment<i className="bi bi-arrow-right-short ps-3"
                                    data-aos="fade-down" data-aos-duration="1000"></i></h1>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-5">
                <div className="container">
                    <div className="row" id="sec5-js">
                        <div className="col-12 sec5-1" data-aos="zoom-in-down" data-aos-duration="1000">
                            <h1>All-In-One Medical Centre</h1>
                        </div>
                        <div className="col-xl-1 mt-5" data-aos="zoom-in-down" data-aos-duration="1000">
                            <img src={sec5Img1} alt="image" />
                        </div>
                        <div className="col-xl-5 mt-5" data-aos="zoom-in-down" data-aos-duration="1000">
                            <p className="fs-5">Spring Medical Centre is the most comprehensive multidisciplinary centre in the
                                lower mainland, where a true sense of a coordinated multidisciplinary team approach to health
                                care is offered. Same-day appointments are typically available.</p>
                        </div>
                        <div className="col-xl-6 mt-5" data-aos="zoom-in-down" data-aos-duration="1000">
                            <p className="fs-5 ps-xl-5">We are dedicated to serving the Brentwood community in the most convenient
                                fashion and are proud to offer such services as: Family medicine, Physiotherapy, Registered
                                Massage Therapy, Acupuncture, chiropractic therapy, Sleep apnea clinic, Hearing Aid Specialist,
                                Registered Dietitian, Registered Counsellor, Active Rehabilitation.</p>
                        </div>
                        <div className="col-xl-6 mt-4 sec5-img" data-aos="zoom-in-right" data-aos-duration="1000">
                            <img src={sec5Img2} alt="image" />
                        </div>
                        <div className="col-xl-6 mt-4" data-aos="zoom-in-down" data-aos-duration="1000">
                            <p className="ps-xl-5 fs-5">We offer on-line appointment requests with specialty services which include
                                cosmetic procedures such as Botox and fillers. In addition, our clinic offers ECG testing,
                                Holter monitoring, Custom made Orthotics, Braces and Compression stockings. We look forward to
                                serving you. Contact us today to find out how our experienced team can help you:</p>
                            <button onClick={OurTeam} className="sec5-btn px-4 rounded-pill py-2 mt-5 ms-xl-5">Find a Doctor <i className="bi bi-arrow-right-short ps-3"></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-6">
                <div className="container">
                    <div className="row" id="sec6-js">
                        {
                            sec6?.map((a, idx) => {
                                return (
                                    <div className="col-xl-12" key={idx}>
                                        {idx % 2 == 0 ?
                                            <div className="row">
                                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 mt-xl-5" data-aos="fade-down-right"
                                                    data-aos-duration="3000">
                                                    <img className="mt-xl-5" src={a?.icon} alt="image" />
                                                    <h1 className="mt-4">{a?.title}</h1>
                                                    <p className="mt-3">{a?.description}</p>
                                                    <button onClick={OurTeam} className="sec5-btn px-4 rounded-pill py-2 mt-5">Find a Doctor <i className="bi bi-arrow-right-short ps-3"></i></button>
                                                </div>
                                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 sec6-1" data-aos="fade-up" data-aos-duration="1000">
                                                    <img src={a?.img} alt="" />
                                                </div>
                                            </div>
                                            :
                                            <div className="row mt-4">
                                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 sec6-1" data-aos="fade-down-right"
                                                    data-aos-duration="3000">
                                                    <img src={a?.img} alt="" />
                                                </div>
                                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 pt-xl-5 ps-xl-5 sec6-2" data-aos="fade-up"
                                                    data-aos-duration="1000">
                                                    <img className="mt-xl-5" src={a?.icon} alt="image" />
                                                    <h1 className="mt-4">{a?.title}</h1>
                                                    <p className="mt-3">{a?.description}</p>
                                                    <button onClick={OurTeam} className="sec5-btn px-4 rounded-pill py-2 mt-5">Find a Doctor <i className="bi bi-arrow-right-short ps-3"></i></button>
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
            <section className="sec-7">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 sec7-1" id="sec7-js1" data-aos="zoom-in-right" data-aos-duration="1000">
                            {
                                sec7_1?.map((a, idx) => {
                                    return (
                                        <div className="row" key={idx}>
                                            <div className="col-xl-12">
                                                {idx % 2 == 0 ?
                                                    <p>{a?.title} <i className={a?.icon} /></p>
                                                    :
                                                    <p>{a?.title}</p>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-xl-9">
                            <div className="row">
                                <div className="col-12 mt-3 text-center">
                                    <h1 className="fw-bold" data-aos="fade-right" data-aos-duration="1000">Meet Our Doctors</h1>
                                    <p className="mt-3" data-aos="fade-left" data-aos-duration="1000">Our administration and support
                                        staff all have exceptional people skills and
                                        trained<br />to assist you with all medical enquiries.</p>
                                </div>
                                <div className="row">
                                    {
                                        sec7_2?.map((a, idx) => {
                                            return (
                                                <div className="col-xl-4 col-lg-6 g-3">
                                                    <div className="mt-3 py-3 rounded-3 text-center sec7-2" data-aos="zoom-in-up"
                                                        data-aos-duration="1000">
                                                        <img src={a?.img} alt="" />
                                                        <h3>{a?.title}</h3>
                                                        <a href="../our services/Family Physicians.html"><button
                                                            className="px-4 py-2 rounded-2 mt-3 mb-4">{a?.button}</button></a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
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

export default Home