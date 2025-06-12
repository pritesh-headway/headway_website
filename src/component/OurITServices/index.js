import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';
import OurITServicesIntro from './OurITServicesIntro';
import OurITProjects from './OurITProjects';
import Contact_us from '../Home/ContactUs';
import { fetchWithFormData } from '../../apiGeneralFunction'


const OurITServices = () => {

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
            <SectiononeTwoLink
                src={Images.our_it_services_bg_new}
                title={'Our IT Services'}
                link_to2={'/our_it_services'}
                link_name2={'Our IT Services'}
            />
            <OurITServicesIntro />
            <OurITProjects />
            {/* <Contact_us data={data?.get_in_touch} /> */}
        </Layout>
    )
}

export default OurITServices