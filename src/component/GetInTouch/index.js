import React, { useEffect } from 'react'
import Layout from '../Layout'
import Contact_us from '../Home/ContactUs'
import Sectionone from './Sectionone'
import ContactUs from './ContactUs'
import GetInTouchContent from './GetInTouchContent'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';

const GetInTouch = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <>
            <Layout>
                {/* <Sectionone/> */}
                <SectiononeTwoLink
        src={Images.get_in_touch_bg}
        title={'Get in touch'}
        link_to2={'/get_in_touch'}
        link_name2={'Get in touch'}
        />
                <GetInTouchContent/>
                {/* <ContactUs/> */}
                <Contact_us/>
            </Layout>
        </>
    )
}

export default GetInTouch