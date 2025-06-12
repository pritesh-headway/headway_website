import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout';
import AboutPage from './component/AboutPage';
import GetInTouch from './component/GetInTouch';
import MakeMyBusiness from './component/MakeMyBusiness';
import PlanPricing from './component/PlanPricing';
import StartUp from './component/StartUp';
import LoginWithSociallMedia from './component/UserAuth/Login/LoginWithSocialMedia';
import LoginWithEmail from './component/UserAuth/Login/LoginWithEmail';
import RegisterWithSocialMedia from './component/UserAuth/Register/RegisterWithSocialMedia';
import RegisterWithEmail from './component/UserAuth/Register/RegisterWithEmail';
import Verification from './component/UserAuth/Verification';
import BlogPage from './component/BlogPage';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsCondition from './component/Terms&Condition';
import OurServices from './component/OurServices';
import RefundCancellation from './component/RefundCancellation';
import MeetOurTeam from './component/MeetOurTeam';
import JewelleryVidhyapithPage from './component/JewelleryVidhyapithPage';
import HeadwayIT from './component/HeadwayIT';
import Gallery from './component/Gallery';
import OurCourses from './component/OurCourses';
import IDBPage from './component/IDBPage';
import IntelligentHR from './component/IntelligentHR';
import HeadwayInitiatives from './component/HeadwayInitiatives';
import UserProfile from './component/LoggedInUser/UserProfile';
import { useEffect, useState } from 'react';
// import './firebaseConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import WebPage from './component/Webpage';
import AnimationStartWebsite from './component/AnimationStartWebsite';
import BlogDetailPage from './component/BlogPage/BlogDetailPage';
import RegistrationFormIDP from './component/RegistrationFormIDP';
import OurITServices from './component/OurITServices';

// import { analytics } from './firebaseConfig';
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
// console.log(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

//   // const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

//   // const [isLandscape, setIsLandscape] = useState(false);

  // useEffect(() => {
  //   logEvent(analytics, "testing_firebase_analytics")

  // }, [])
  


  // useEffect(() => {
  //   const hostname = window.location.hostname;
  
  //   // Only check for "www.headway.org.in"
  //   if (hostname === "www.headway.org.in") {
  //     console.log('Redirecting from www to non-www:', hostname);
  //     window.location.replace("https://headway.org.in" + window.location.pathname);
  //   } else {
  //     console.log('Current hostname in production:', hostname);
  //     console.log('Current pathname in production:', window.location.pathname);
  //   }
  // }, []);
  

// useEffect(() => {
//   const hostname = window.location.hostname;

//   if (hostname === "www.headway.org.in") {
//     console.log('if ',hostname);
//     window.location.replace("https://headway.org.in" + window.location.pathname);
//     console.log('if ',window.location.pathname);
    
//   }else if(hostname === "https://www.headway.org.in") {
//     console.log('else if ',hostname);
//     window.location.replace("https://headway.org.in" + window.location.pathname);
//     console.log('else if ',window.location.pathname);
//   }else{

//     console.log(hostname);
//     console.log(window.location.pathname);
//   }
// })


  
  // useEffect(() => {
  //   const handleOrientationChange = () => {
  //     if (window.orientation === 90 || window.orientation === -90) {
  //       setIsLandscape(true);
  //     } else {
  //       setIsLandscape(false);
  //     }
  //   };

  //   window.addEventListener('orientationchange', handleOrientationChange);

  //   return () => {
  //     window.removeEventListener('orientationchange', handleOrientationChange);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleOrientationChange = () => {
  //     setIsPortrait(window.innerHeight > window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleOrientationChange);

  //   return () => {
  //     window.removeEventListener('resize', handleOrientationChange);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (window.screen.orientation) {
  //     window.screen.orientation.lock('portrait');
  //   }
  // }, []);

  // useEffect(() => {

  //   const handleOrientationChange = () => {
  //     if (window.orientation === 90 || window.orientation === -90) {
  //       document.body.style.transform = 'rotate(0deg)';
  //     }
  //   };

  //   window.addEventListener('orientationchange', handleOrientationChange);

  //   return () => {
  //     window.removeEventListener('orientationchange', handleOrientationChange);
  //   };
  // }, []);


  return (
    <>

      {/* {isLandscape ? (
        <div>
          <h2 style={{ color: 'black', textAlign: 'center' }}>Please turn your device to portrait mode</h2>
        </div>
      )
        :
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutPage />} />
          <Route path="/get_in_touch" element={<GetInTouch />} />
          <Route path="/make_my_business" element={<MakeMyBusiness />} />
          <Route path="/plan_pricing" element={<PlanPricing />} />
          <Route path="/start_up" element={<StartUp />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_and_conditions" element={<TermsCondition />} />
          <Route path="/refund_and_cancellation" element={<RefundCancellation />} />
          <Route path="/our_services" element={<OurServices />} />
          <Route path="/meet_our_team" element={<MeetOurTeam />} />
          <Route path="/jewellery_vidhyapith" element={<JewelleryVidhyapithPage />} />
          <Route path="/headway_IT" element={<HeadwayIT />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our_courses" element={<OurCourses />} />
          <Route path="/event_main" element={<EventMainPage />} />
          <Route path="/event_detail" element={<EventDetailPage />} />
          <Route path="/idb" element={<IDBPage />} />
          <Route path="/intelligent_hr" element={<IntelligentHR />} />
          <Route path="/headway_initiatives" element={<HeadwayInitiatives />} />
          <Route path="/login_with_social_media" element={<LoginWithSociallMedia />} />
          <Route path="/login_with_email" element={<LoginWithEmail />} />
          <Route path="/register_with_social_media" element={<RegisterWithSocialMedia />} />
          <Route path="/login" element={<RegisterWithEmail />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route
          path="/webpage"
          element={<WebPage
            title="Headway Business Solution"
            description="A brief description of my website."

          />} />
        </Routes>

      } */}

      {/* <FirebaseAnalyticsProvider firebaseAnalytics={analytics}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<AnimationStartWebsite />} /> */}
        <Route path="/about_us" element={<AboutPage />} />
        <Route path="/get_in_touch" element={<GetInTouch />} />
        <Route path="/make_my_business" element={<MakeMyBusiness />} />
        <Route path="/plan_pricing" element={<PlanPricing />} />
        <Route path="/start_up" element={<StartUp />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog_detail" element={<BlogDetailPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<TermsCondition />} />
        <Route path="/refund_and_cancellation" element={<RefundCancellation />} />
        <Route path="/" element={<OurServices />} />
        {/* <Route path="/our_services" element={<OurServices />} /> */}
        <Route path="/meet_our_team" element={<MeetOurTeam />} />
        <Route path="/jewellery_vidhyapith" element={<JewelleryVidhyapithPage />} />
        <Route path="/headway_IT" element={<HeadwayIT />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our_courses" element={<OurCourses />} />
        <Route path="/idb" element={<IDBPage />} />
        <Route path="/registration_form" element={<RegistrationFormIDP />} />
        <Route path="/intelligent_hr" element={<IntelligentHR />} />
        <Route path="/headway_initiatives" element={<HeadwayInitiatives />} />
        <Route path="/login_with_social_media" element={<LoginWithSociallMedia />} />
        <Route path="/login_with_email" element={<LoginWithEmail />} />
        <Route path="/register_with_social_media" element={<RegisterWithSocialMedia />} />
        <Route path="/login" element={<RegisterWithEmail />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/our_it_services" element={<OurITServices />} />
        {/* <Route
            path="/webpage"
            element={<WebPage
              title="Headway Business Solution"
              description="A brief description of my website."

            />} /> */}
      </Routes>
      {/* </FirebaseAnalyticsProvider> */}
    </>
  );
}

export default App;
