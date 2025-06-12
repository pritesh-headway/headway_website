import React, { useEffect } from 'react'
import Layout from '../Layout'
import * as Images from '../../assets';
import FourLinkSectionone from '../ReusableComp/FourLinkSectionone';
import RegisterPages from './RegisterPages';

const RegistrationFormIDP = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <Layout>
            {/* <IDBSectionone/> */}
            <FourLinkSectionone 
            src={Images.registration_form_bg_new}
                // src={Images.make_my_business_bg}
                title={'Registration Form'}
                link_to2={'/our_services'}
                link_name2={'Our Services'}
                link_to3={'/idb'}
                link_name3={'Individual Development Program'}
                link_to4={'/registration_form'}
                link_name4={'Registration Form'}
            />
            <RegisterPages />
        </Layout>
    )
}

export default RegistrationFormIDP
