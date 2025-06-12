import React, { useEffect } from 'react'
import Layout from '../Layout'
import Sectionone from './Sectionone'
import Intro from './Intro'
import AllModules from './AllModules'
import BroucherSection from './BroucherSection'
import MakeMMB from './Make_MMB'
import GrowthPlanSection from './GrowthPlanSection'
import HeadwayITGrowthPlan from '../HeadwayIT/HeadwayITGrowthPlan'
import ResBrochureSection from './ResBrochureSection'
import MMBGallery from './MMBGallery'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';
import MMBGallerySlider from './MMBGallerySlider'

const MakeMyBusiness = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Layout>
        {/* <Sectionone/> */}
        <AllSectionone
        src={Images.mmb_bg_new}
        // src={Images.make_my_business_bg}
        title={'Make My Business'}
        link_to2={'/our_services'}
        link_name2={'Our Services'}
        link_to3={'/make_my_business'}
        link_name3={'Make My Business'}
        />
        <Intro/>
        {/* <MakeMMB/> */}
        <AllModules/>
        {/* <BroucherSection/> */}
        <ResBrochureSection/>
        {/* <MMBGallery/> */}
        <MMBGallerySlider/>
         <GrowthPlanSection/>
        {/* <HeadwayITGrowthPlan/> */}
    </Layout>
    </>
  )
}

export default MakeMyBusiness