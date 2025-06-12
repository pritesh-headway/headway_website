import React, { useEffect } from 'react'
import Layout from '../Layout'
import IHRSectionone from './IHRSectionone'
import IHRIntro from './IHRIntro'
import IDBContactUsToday from '../IDBPage/IDBContactUsToday'
import IHRChoose from './IHRChoose';
import IHRServices from './IHRServices';
import IHRClients from './IHRClients'
import { IDBSectionfour } from '../IDBPage/IDBSectionfour'
import IHRSlider from './IHRSlider'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';


const IntelligentHR = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  
  return (
    <Layout>
        {/* <IHRSectionone/> */}
        <AllSectionone
         src={Images.ihr_bg_new}
        // src={Images.make_my_business_bg}
        title={'Intelligent HR'}
        link_to2={'/our_services'}
        link_name2={'Our Services'}
        link_to3={'/intelligent_hr'}
        link_name3={'Intelligent HR'}
      />
        <IHRIntro/>
       <IHRServices/>
        <IHRChoose/>
        {/* <IHRClients/> */}
        {/* <IDBSectionfour/> */}
        {/* <IDBContactUsToday/> */}
    </Layout>
  )
}

export default IntelligentHR