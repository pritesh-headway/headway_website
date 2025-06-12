import React, { useEffect } from 'react'
import Layout from '../Layout'
import JewellerySectionone from './JewellerySectionone'
import JewelleryIntro from './JewelleryIntro'
import JewellerySectionthree from './JewellerySectionthree'
import JewelleryAllSession from './JewelleryAllSession'
import JewelleryBlogPost from './JewelleryBlogPost'
import JVSectionfive from './JVSectionfive'
import JewelleryNewsletter from './JewelleryNewsletter'
import JewellerySlider from './JewelleryAllSession/jewllerySlider'
import SuccessStorySlider from '../StartUp/SuccessStorySlider'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';
import JewelleryCrafting from './JewelleryCrafting'
import HISlider from '../HeadwayInitiatives/HISlider'

const JewelleryVidhyapithPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Layout>
      {/* <JewellerySectionone /> */}
      <AllSectionone
        src={Images.jv_bg_new}
        title={'Jewellery Vidhyapith'}
        link_to2={'/our_services'}
        link_name2={'Our Services'}
        link_to3={'/jewellery_vidhyapith'}
        link_name3={'Jewellery Vidhyapith'}
      />
      <JewelleryIntro />
      <JewellerySectionthree />
      {/* <HISlider/> */}
      <JewelleryAllSession />
      <JVSectionfive />
      <JewelleryCrafting/>
      {/* <JewelleryBlogPost /> */}
      <JewelleryNewsletter />

      {/* <JewellerySlider /> */}
    </Layout>
  )
}

export default JewelleryVidhyapithPage