import React, { useEffect } from 'react'
import Layout from '../Layout'
import IDBSectionone from './IDBSectionone'
import { IdbSectiontwo } from './IDBSectiontwo'
import IDBIntro from './IDBIntro'
import Contact_us from '../Home/ContactUs'
import IDBContactUsToday from './IDBContactUsToday'
import IDBConnectWithUs from './IDBConnectWithUs'
import IDBSectionthree from './IDBSectionthree'
import { IDBSectionfour } from './IDBSectionfour'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';
import ProgramBrochure from '../ReusableComp/ProgramBrochure'

const IDBPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <Layout>
            {/* <IDBSectionone/> */}
            <AllSectionone
            src={Images.idp_bg_new}
                // src={Images.make_my_business_bg}
                title={'Individual Development Program'}
                link_to2={'/our_services'}
                link_name2={'Our Services'}
                link_to3={'/idb'}
                link_name3={'Individual Development Program'}
            />
            <IDBIntro />
            <IdbSectiontwo />
            {/* <IDBConnectWithUs /> */}
            <IDBSectionthree />
            <IDBSectionfour />
            {/* <IDBContactUsToday /> */}
            {/* <Contact_us /> */}
        </Layout>
    )
}

export default IDBPage
