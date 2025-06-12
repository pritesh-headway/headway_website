import React, { useEffect } from 'react'
import Layout from '../Layout'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink';
import * as Images from '../../assets';
import HIIntro from './HIIntro';
import JewelleryAllSession from '../JewelleryVidhyapithPage/JewelleryAllSession';
import HeadwayITGrowthPlan from '../HeadwayIT/HeadwayITGrowthPlan';
import HIPara from './HIPara';
import HISlider from './HISlider';



const HeadwayInitiatives = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <Layout>
            <SectiononeTwoLink
                src={Images.headway_init_bg_new}
                title={'Headway Initiatives'}
                link_to2={'/headway_initiatives'}
                link_name2={'Headway Initiatives'}
            />
            <HIIntro/>
            <HISlider/>
            {/* <JewelleryAllSession /> */}
            <HIPara/>
            <HeadwayITGrowthPlan />
        </Layout>
    )
}

export default HeadwayInitiatives