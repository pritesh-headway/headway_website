import React, { useEffect } from 'react'
import Layout from '../Layout'
import PrivacySectionone from './PrivacySectionone'
import PrivacyPolicyContent from './PrivacyPolicyContent';
import * as Images from '../../assets';
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {


  useEffect(() => {
  
       window.scrollTo(0, 0);
       window.scrollTo({ top: 0, behavior: 'instant' });
    //  document.body.scrollTop = 0;

  }, []);
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  return (
    <Layout>
      {/* <PrivacySectionone /> */}
      <SectiononeTwoLink
        src={Images.policy_bg}
        title={'Privacy Policy'}
        link_to2={'/privacy_policy'}
        link_name2={'Privacy Policy'}
      />
      <PrivacyPolicyContent />
    </Layout>
  )
}

export default PrivacyPolicy