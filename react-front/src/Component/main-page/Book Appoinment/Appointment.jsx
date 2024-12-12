import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import logo from '../Home Page/IMG/logo-2.svg'
import fLogo from '../Home Page/IMG/logo (2).svg'
import { useFormik } from "formik"
import './appointment.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { initializeAOS } from "../AOS Animation/aosSlice"
import { navbar1Data } from "../Home Page/HTML/Home-PageSlice"
import { toast } from "react-toastify"

const Appointment = () => {
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
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            reason: "",
            gender: "",
            doctor: "",
            insurance: "",
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "please enter your name"
            }
            if (!values.email) {
                errors.email = "please enter your email"
            }
            if (!values.phone) {
                errors.phone = "please enter your phone"
            }
            if (!values.date) {
                errors.date = "please enter your date"
            }
            if (!values.time) {
                errors.time = "please enter your time"
            }
            if (!values.reason) {
                errors.reason = "please enter your reason"
            }
            if (!values.gender) {
                errors.gender = "please enter your gender"
            }
            if (!values.doctor) {
                errors.doctor = "please enter your doctor"
            }
            if (!values.insurance) {
                errors.insurance = "please enter your insurance"
            }
            return errors
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            let data = JSON.parse(localStorage.getItem('Appointment')) || []
            localStorage.setItem('Appointment', JSON.stringify([...data, values]))
            toast.success('Appointment Booked Successfully')
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
                            <li onClick={ContactUs} style={{ cursor: 'pointer' }} className="nav-item nav-link ps-xxl-4">Contact us</li>
                            <li className="nav-item1 ms-xl-5 ps-xl-5" data-aos="fade-left" data-aos-duration="1000">
                                <button onClick={BookAppointment} className="head-btn px-4 rounded-pill py-2">Book An Appoinment <i className="bi bi-arrow-right-short"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form className="appointment-form" id="form" method="post" onSubmit={formik.handleSubmit}>
                            <h2 className="form-title">Book Appointment</h2>
                            <div className="form-group">
                                <label for="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your name"
                                />
                                {formik.errors.name && <p id="errorName">{formik.errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label for="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your email"
                                />
                                {formik.errors.email && <p id="errorEmail">{formik.errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label for="phone" className="form-label">Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your phone number"
                                />
                                {formik.errors.phone && <p id="errorPhone">{formik.errors.phone}</p>}
                            </div>
                            <div className="form-group">
                                <label for="date" className="form-label">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={formik.values.date}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.date && <p id="errorDate">{formik.errors.date}</p>}
                            </div>
                            <div className="form-group">
                                <label for="time" className="form-label">Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="time"
                                    name="time"
                                    value={formik.values.time}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.time && <p id="errorTime">{formik.errors.time}</p>}
                            </div>
                            <div className="form-group">
                                <label for="reason" className="form-label">Reason for Appointment</label>
                                <textarea
                                    className="form-control"
                                    id="reason"
                                    rows="3"
                                    name="reason"
                                    value={formik.values.reason}
                                    onChange={formik.handleChange}
                                    placeholder="Enter reason for appointment">
                                </textarea>
                                {formik.errors.reason && <p id="errorReason">{formik.errors.reason}</p>}
                            </div>
                            <div className="form-group">
                                <label for="gender" className="form-label">Gender</label>
                                <select className="form-control" id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {formik.errors.gender && <p id="errorGender">{formik.errors.gender}</p>}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Preferred Doctor</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="doctor"
                                        value="Doctor1"
                                        checked={formik.values.doctor === "Doctor1"}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" for="doctor1">
                                        Doctor 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="doctor"
                                        value="Doctor2"
                                        checked={formik.values.doctor === "Doctor2"}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" for="doctor2">
                                        Doctor 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="doctor"
                                        value="Doctor3"
                                        checked={formik.values.doctor === "Doctor3"}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" for="doctor3">
                                        Doctor 3
                                    </label>
                                </div>
                                {formik.errors.doctor && <p id="errorDoctor">{formik.errors.doctor}</p>}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Insurance Provider</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="insurance"
                                        value="InsuranceYes"
                                        checked={formik.values.insurance === 'InsuranceYes'}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" for="insuranceYes">
                                        Yes, I have insurance
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="insurance"
                                        value="InsuranceNo"
                                        checked={formik.values.insurance === 'InsuranceNo'}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" for="insuranceNo">
                                        No, I don't have insurance
                                    </label>
                                </div>
                                {formik.errors.insurance && <p id="errorInsurance">{formik.errors.insurance}</p>}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="head-btn px-4 rounded-pill py-2 px-5">Submit<i className="bi bi-arrow-right-short"></i></button>
                            </div>
                        </form>
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

export default Appointment