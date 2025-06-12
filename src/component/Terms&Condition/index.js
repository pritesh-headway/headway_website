import React, { useEffect } from 'react'
import Layout from '../Layout'
import TCSectionone from './TCSectionone'
import TCContent from './TCContent'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';

const TermsCondition = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Layout>
      {/* <TCSectionone/> */}
      <SectiononeTwoLink
        src={Images.terms_bg}
        title={'Terms and Conditions'}
        link_to2={'/terms_and_conditions'}
        link_name2={'Terms and Conditions'}
      />
      <TCContent/>
    </Layout>
  )
}

export default TermsCondition