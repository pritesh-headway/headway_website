import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Value from './Value'
import Sectiontwo from './Sectiontwo'
import Training from './Training'
import Headway from './Headway';
import * as Images from '../../assets';
import { Link } from 'react-router-dom'
import Sectionone from './Sectionone'
import Intro from './Intro'
import Journey from './Journey'
import AllSectionone from '../ReusableComp/Sectionone'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink'
import AboutJourney from './AboutJourney'
import SectionWithoutText from '../ReusableComp/SectionWithoutText'
import { fetchWithFormData } from '../../apiGeneralFunction'

const AboutPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const formData = new FormData();

    fetchWithFormData(`about_us`, formData)
      // .then(data => setData(data[0].data))
      .then(data => {
        if (data?.status === true) {
          setData(data?.data);
          console.log('Fetched data:', data?.data?.about_us?.description);
        }
        else {
          // console.error('Status is not true:', data?.status);
          setData("null");
        }
      })
      .catch(
      // error => console.error('Error fetching data:', error)
    );

  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0); 
  // }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);



  return (
    <Layout>
      {/* <Sectionone /> */}
      <SectiononeTwoLink
        src={Images.about_us_bg_new}
        title={'About Us'}
        link_to2={'/about_us'}
        link_name2={'About Us'}
      />
      {/* <Intro data={data?.about_us} /> */}
      <Intro />
      <Sectiontwo />
      {/* <Journey /> */}
      <AboutJourney />
      <Headway />
      <Value />
      <Training data={data?.youtube_link} />
    </Layout>
  )
}

export default AboutPage