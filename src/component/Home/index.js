import React, { useEffect, useState } from 'react';
import AboutUs from './About_us';
import Founder from './Founder';
import Counter from './Counter';
import Clients from './Clients';
import * as Images from '../../assets';
import Contact_us from './ContactUs';
import Layout from '../Layout';
import Homeslider from './HomeSlider';
import ClientLogoSlider from './ClientLogoSlider';
import WhatWeDo from './WhatWeDo';
import { fetchWithFormData } from '../../apiGeneralFunction';
import HomeBanner from './HomeBanner';
import { analytics } from '../../firebaseConfig';
import { logEvent } from "firebase/analytics";
import CustomAlert from '../ReusableComp/CustomAlert';
import AnimationStartWebsite from '../AnimationStartWebsite';
import { Navigate, useNavigate } from 'react-router-dom';
import VerificationPending from './VerificationPending';



const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      try {
        if (!isOnline) {

          setData(null);
          return;

        }
        const formData = new FormData();

        const result = await fetchWithFormData('get_dashboard_data', formData);

        if (result?.status === true) {
          setData(result?.data);
        } else {
          setData(null);
        }
      } catch (error) {
        setData(null);
      }
    };

    fetchDataAndUpdate();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  useEffect(() => {
    if (data?.bannerPopup && data?.bannerPopup.trim() !== "") {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  }, [data?.bannerPopup]);

  // useEffect(() => {
  //   console.log(data?.bannerPopup);
  //   if (data?.bannerPopup === ""){
  //     setShowAnimation(false);
  //   } else{
  //     setShowAnimation(true);
  //   }
  //   // const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
  //   // if (!hasSeenAnimation) {
  //   //   setShowAnimation(true);
  //   //   // setTimeout(() => {
  //   //   //   setShowAnimation(false);
  //   //   //   sessionStorage.setItem('hasSeenAnimation', 'true');
  //   //   // },6000) 
  //   // }else{
  //   //   setShowAnimation(false);
  //   // }
  // }, []);

  const handleGetStarted = () => {
    sessionStorage.setItem('hasSeenAnimation', 'true');
    setShowAnimation(false);
    navigate('/');
  };


  return (
    <>
      {/* <Layout> */}
      {/* <VerificationPending /> */}
      {/* <HomeBanner data={data?.banners} />
          <Home3 data={data?.client_logo} />
          <AboutUs />
          <Founder />
          <WhatWeDo />
          <Counter />
          <Clients data={data?.our_client} />
          <Contact_us data={data?.get_in_touch} />
        </Layout> */}
      {showAnimation ? (
        <>
          <AnimationStartWebsite data={data} onClick={() => handleGetStarted()} />
          <div className=''>
            <HomeBanner data={data?.banners} />
            {/* <Home3 data={data?.client_logo} /> */}
            <AboutUs />
            <Founder />
            <WhatWeDo />
            <Counter data={data?.settings} />
            <Clients data={data?.our_client} />
            <Contact_us data={data?.settings} />
          </div>
        </>
      ) : (
        <Layout>
          <HomeBanner data={data?.banners} />
          {/* <Home3 data={data?.client_logo} /> */}
          <AboutUs />
          <Founder />
          <WhatWeDo />
          <Counter data={data?.settings} />
          <Clients data={data?.our_client} />
          <Contact_us data={data?.settings} />
          {/* </div> */}
          {/* {!isOnline && <CustomAlert message="No internet connection" />} */}
        </Layout>
      )}
    </>
  )
}
export default Home
