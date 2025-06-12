import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import OurServicesSectionone from './OurServicesSectionone'
import OurServicesIntro from './OurServicesIntro'
import OurPlansSection from './OurPlansSection'
import OurServicesSection from './OurServicesSection'
import Contact_us from '../Home/ContactUs'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';
import { fetchWithFormData } from '../../apiGeneralFunction'
import AllSectionone from '../ReusableComp/Sectionone'

const OurServices = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      try {
       

                const formData = new FormData();

        const result = await fetchWithFormData('get_dashboard_data', formData);

        if (result?.status === true) {
          setData(result?.data);
        } else {
          setData(null);
        }
      } catch (error) {

      }
    };

    fetchDataAndUpdate();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
        {/* <SectiononeTwoLink
        src={Images.service_bg_new}
        title={'Our Services'}
        link_to2={'/our_services'}
        link_name2={'Our Services'}
        /> */}
         <AllSectionone
        src={Images.services_bg_new}
        title={'Our Services'}
        link_to2={'/'}
        link_name2={'Our Products'}
        link_to3={'/our_services'}
        link_name3={'Our Services'}
        />
       
        <OurServicesIntro/>
        <OurPlansSection/>
        <OurServicesSection/>
        <Contact_us data={data?.get_in_touch} />
        {/* <Contact_us/> */}
    </Layout>
  )
}

export default OurServices