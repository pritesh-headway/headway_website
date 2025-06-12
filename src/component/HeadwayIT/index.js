import React, { useEffect } from 'react'
import Layout from '../Layout'
import HeadwayITSectionone from './HeadwayITSectionone'
import HeadwayITIntro from './HeadwayITIntro'
import HeadwayITDesign from './HeadwayITDesign'
import HeadwayITDevelopment from './HeadwayITDevelopment'
import HeadwayITSectionfive from './HeadwayITSectionfive'
import HeadwayITOnlineMarketing from './HeadwayITOnlineMarketing'
import HeadwayITGrowthPlan from './HeadwayITGrowthPlan'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';


const HeadwayIT = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <>
            <Layout>
                {/* <HeadwayITSectionone /> */}
                <AllSectionone
                    src={Images.bg_headway_it_new}
                    title={'Headway IT'}
                    link_to2={'/our_services'}
                    link_name2={'Our Services'}
                    link_to3={'/headway_IT'}                                                                                                                                    
                    link_name3={'Headway IT'}
                />
                <HeadwayITIntro />
                <HeadwayITDesign />
                <HeadwayITDevelopment />
                <HeadwayITSectionfive />
                <HeadwayITOnlineMarketing />
                <HeadwayITGrowthPlan />
            </Layout>
        </>
    )
}

export default HeadwayIT