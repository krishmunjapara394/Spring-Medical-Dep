import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from '../Component/main-page/Home Page/HTML/Home-PageSlice'
import AllServicesSliceReducer from '../Component/main-page/our services/AllServicesSlice'
import BlogPostReducer from "../Component/main-page/Blog Post/Blog PageSlice";
import WhySpringReducer from "../Component/main-page/Why Spring/Why SpringSlice";
import OurTeamSliceReducer from "../Component/main-page/Our Team/Our TeamSlice";
import aosSliceReducer from "../Component/main-page/AOS Animation/aosSlice";
import AdminPanalReducer from "../Component/main-page/Admin Panal/AdminPanalSlice";


export const store = configureStore({
    reducer: {
        homePage: HomeReducer,
        blogPost: BlogPostReducer,
        allServicesSlice: AllServicesSliceReducer,
        whySpring: WhySpringReducer,
        ourTeam: OurTeamSliceReducer,
        aos: aosSliceReducer,
        adminPanal: AdminPanalReducer
    }
})