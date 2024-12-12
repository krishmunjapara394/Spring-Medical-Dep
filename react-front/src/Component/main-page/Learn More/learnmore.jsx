import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import logo from '../Home Page/IMG/logo-2.svg'
import fLogo from '../Home Page/IMG/logo (2).svg'
import './learnmore.css'

const LearnMore = () => {
    const navbar = useSelector(state => state.whySpring.navbar1)
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
    const WhySpring = () => {
        navigate('/WhySpring')
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
                                            <p className="pt-1">{a?.icon}</p>
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
                            <li onClick={WhySpring} style={{cursor: 'pointer'}} className="nav-item nav-link ps-xxl-4">Why Spring</li>
                            <li className="nav-item-1 dropdown ps-xxl-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={FamilyPhysicians} style={{ cursor: 'pointer' }} className="dropdown-item">Family Physicians</li>
                                    <li onClick={FootOrthotics} style={{ cursor: 'pointer' }} className="dropdown-item">Foot Orthotics</li>
                                    <li onClick={OurService} style={{ cursor: 'pointer' }} className="dropdown-item">Our Service</li>
                                    <li onClick={Shockwave} style={{ cursor: 'pointer' }} class="dropdown-item">Shockwave</li>
                                    <li onClick={HolterMonitering} style={{ cursor: 'pointer' }} className="dropdown-item">Holter Monitering</li>
                                    <li onClick={Electrocardiogram} style={{ cursor: 'pointer' }} className="dropdown-item">Electrocardiogram</li>
                                    <li onClick={HerbalTherapy} style={{ cursor: 'pointer' }} class="dropdown-item">Traditional Chinese Herbal Therapy</li>
                                </ul>
                            </li>
                            <li onClick={OurTeam} style={{ cursor: 'pointer' }} className="nav-item ps-xxl-4 nav-link">Our Team</li>
                            <li onClick={BlogPost} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Blog</li>
                            <li className="nav-item ps-xxl-4">
                                <a className="nav-link" href="../Contact Us/Contact Us.html">Contact us</a>
                            </li>
                            <li className="nav-item1 ms-xl-5 ps-xl-5" data-aos="fade-left" data-aos-duration="1000">
                                <a href="../Book Appoinment/appointment.html"><button className="head-btn px-4 rounded-pill py-2">Book An Appoinment <i className="bi bi-arrow-right-short"></i></button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="dr-detail">
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="doctor-details">
                                <h2 class="doctor-name mt-4">Dr. John Doe</h2>
                                <p class="doctor-info mt-5">Specialization: Cardiologist</p>
                                <p class="doctor-info">Experience: 15 years</p>
                                <p class="doctor-info">Education: MBBS, MD (Cardiology)</p>
                                <p class="doctor-info">Clinic Address: 123 Medical Center, Street Name, City</p>
                                <p class="doctor-info">Contact: +123-456-7890</p>
                                <p class="doctor-info">Email: john.doe@example.com</p>
                                <p class="doctor-info">Working Hours: Monday to Friday, 9:00 AM - 5:00 PM</p>
                                <h3 class="mt-5">About Dr. John Doe</h3>
                                <p class="doctor-about mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante vel mi varius efficitur. Maecenas malesuada, lacus eget consequat consequat, ligula ligula posuere nisi, vel semper orci ipsum a nisi. Nullam euismod nisi ac orci elementum, a feugiat risus fermentum. Fusce vulputate dapibus elit, nec accumsan tortor dignissim id. Suspendisse at tempor odio. Donec suscipit leo et nibh lacinia, vel tincidunt elit dignissim.</p>
                                <button onClick={OurTeam} className="head-btn px-4 rounded-pill py-2 mt-5">Back <i class="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="sec-8">
                <div className="container sec8-1">
                    <div className="row">
                        <div className="col-12 pt-5 pb-5 text-center">
                            <h1 className="fw-bold" data-aos="fade-right" data-aos-duration="2000">Book Appoinment</h1>
                            <p className="pt-4" data-aos="fade-left" data-aos-duration="2000">Our administration and support staff
                                all have exceptional people skills
                                and<br />trained to assist you with all medical enquiries.</p>
                            <a href="../Book Appoinment/appointment.html"><button className="sec5-btn px-4 rounded-pill py-2 mt-3"
                                data-aos="fade-right" data-aos-duration="2000">Book Appointment <i
                                    className="bi bi-arrow-right-short ps-3"></i></button></a>
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


export default LearnMore