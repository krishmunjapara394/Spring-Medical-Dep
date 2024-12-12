import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './Component/main-page/Home Page/HTML/Home-Page'
import Electrocardiogram from './Component/main-page/our services/Electrocardiogram'
import HolterMonitering from './Component/main-page/our services/Our Services-Holter Monitering';
import HerbalTherapy from './Component/main-page/our services/Traditional Chinese Herbal Therapy';
import BlogPost from './Component/main-page/Blog Post/Blog Post.jsx';
import WhySpring from './Component/main-page/Why Spring/Why Spring.jsx';
import OurService from './Component/main-page/our services/Our Service.jsx';
import Appointment from './Component/main-page/Book Appoinment/Appointment.jsx';
import Shockwave from './Component/main-page/our services/Shockwave Therapy.jsx'
import FamilyPhysicians from './Component/main-page/our services/Family Physicians.jsx';
import FootOrthotics from './Component/main-page/our services/Our Services Foot Orthotics and Braces.jsx';
import OurTeam from './Component/main-page/Our Team/Our Team.jsx';
import LearnMore from './Component/main-page/Learn More/learnmore.jsx';
import ContactUs from './Component/main-page/Contact Us/Contact Us.jsx';
import Dashboard from './Component/main-page/Admin Panal/AdminPanal.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/WhySpring' element={<WhySpring />} />
        <Route path='/HolterMonitering' element={<HolterMonitering />} />
        <Route path='/OurService' element={<OurService />} />
        <Route path='/electrocardiogram' element={<Electrocardiogram />} />
        <Route path='/HerbalTherapy' element={<HerbalTherapy />} />
        <Route path='/BlogPost' element={<BlogPost />} />
        <Route path='/ShockwaveTherapy' element={<Shockwave />} />
        <Route path='/FamilyPhysicians' element={<FamilyPhysicians />} />
        <Route path='/FootOrthotics' element={<FootOrthotics />} />
        <Route path='/OurTeam' element={<OurTeam />} />
        <Route path='/ContactUs' element={<ContactUs />} />

        <Route path='/LearnMore' element={<LearnMore />} />
        <Route path='/BookAppointment' element={<Appointment />} />
        <Route path='/Adminpanal' element={<Dashboard />} />

        <Route path='*' element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </Provider>
);
