/* eslint-disable react/jsx-pascal-case */

import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import SectiononePP from './Sectionone';
import IntroPP from './IntroPP';
import Contact_us from '../Home/ContactUs';
import BusinessGrowthPlan from './BusinessGrowthPlan';
import HeadwayITGrowthPlan from '../HeadwayIT/HeadwayITGrowthPlan';
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';
import ContactUs from '../GetInTouch/ContactUs';

const PlanPricing = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailedModalOpen, setIsFailedModalOpen] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  return (
    <>
      <Layout
        isModalOpen={isModalOpen}
        isSuccessModalOpen={isSuccessModalOpen}
        isFailedModalOpen={isFailedModalOpen}
      >
        {/* <SectiononePP/> */}
        <AllSectionone
          src={Images.plna_pricing_bg_new}
          title={'Plan Pricing'}
          link_to2={'/'}
          link_name2={'Our Products'}
          link_to3={'/plan_pricing'}
          link_name3={'Plan Pricing'}
        />
        <IntroPP />
        <BusinessGrowthPlan
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isSuccessModalOpen={isSuccessModalOpen}
          setIsSuccessModalOpen={setIsSuccessModalOpen}
          isFailedModalOpen={isFailedModalOpen}
          setIsFailedModalOpen={setIsFailedModalOpen}
        />
        {/* <HeadwayITGrowthPlan/> */}
        {/* <Contact_us/> */}
        {/* <ContactUs/> */}
      </Layout>
    </>
  )
}

export default PlanPricing