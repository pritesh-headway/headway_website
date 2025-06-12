import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Sectionone from './Sectionone'
import IntroStartup from './IntroStartUp'
import AboutStartup from './AboutStartup'
import ClientSay from './ClientSay'
import BroucherSection from '../MakeMyBusiness/BroucherSection'
import SuccessStory from './SuccessStory'
import SuccessStorySlider from './SuccessStorySlider'
import SuccessStoryFullRound from './SuccessStoryFullRound'
import SuccessStoryThreeSlider from './SuccessStoryThreeSlider'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';
import AllSectionone from '../ReusableComp/Sectionone'
import ResBrochureSection from '../MakeMyBusiness/ResBrochureSection'
import ProgramBrochure from '../ReusableComp/ProgramBrochure'
import { fetchWithFormData } from '../../apiGeneralFunction'

const StartUp = () => {

    const [data, setData] = useState([]);

  
    useEffect(() => {
    const formData = new FormData();

    fetchWithFormData(`about_startup`, formData)
        // .then(data => setData(data[0].data))
        .then(data => {
          // console.log("adghsasd1", data)
          if (data?.status === true) {
            setData(data?.data);
           
          }
          else {
            // console.error('Status is not true:', data?.status);
            setData(null);
          }
        })
        .catch(
          // error => console.error('Error fetching data:', error)
          );
  
    }, []);

    // console.log("startup_data", data)

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <>
            <Layout>
                {/* <Sectionone /> */}
                <AllSectionone
                    src={Images.startup_bg_new}
                    title={'Startup'}
                    link_to2={'/our_services'}
                    link_name2={'Our Services'}
                    link_to3={'/start_up'}
                    link_name3={'Startup'}
                />
                <IntroStartup />
                <SuccessStoryThreeSlider data={data?.oss_galleries}/>
                {/* <SuccessStoryFullRound/> */}
                {/* <SuccessStorySlider/> */}
                {/* <SuccessStory/> */}
                <AboutStartup data={data?.about_the_startup}/>
                {/* <ClientSay data={data?.what_client_say_about_us}/> */}
                {/* <BroucherSection /> */}
                {/* <ResBrochureSection/> */}
                <ProgramBrochure
                    src={Images.about_us_vector}
                    bgClrClassName={`terms_bg_clr`}
                    data={data?.brochure}
                />
            </Layout>
        </>
    )
}

export default StartUp