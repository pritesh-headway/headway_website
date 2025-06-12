import React, { useEffect } from 'react'
import Layout from '../Layout'
import RCSectionone from './RCSectionone'
import RCContent from './RCContent'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';

const RefundCancellation = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <Layout>
            {/* <RCSectionone /> */}
            <SectiononeTwoLink
                src={Images.refund_bg}
                title={'Refund & Cancellation'}
                link_to2={'/refund_and_cancellation'}
                link_name2={'Refund & Cancellation'}
            />
            <RCContent />
        </Layout>
    )
}

export default RefundCancellation