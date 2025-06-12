import React, { useEffect } from 'react';
import Layout from '../Layout';
import TeamSectionone from './TeamSectionone';
import TeamIntro from './TeamIntro';
import Contact_us from '../Home/ContactUs';
import TeamOurClients from './TeamOurClients';
import AllTeamSection from './AllTeamSection';
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';

const MeetOurTeam = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* <TeamSectionone/> */}
            <AllSectionone
                src={Images.team_bg}
                title={'Meet Our Team'}
                link_to2={'/'}
                link_name2={'Our Company'}
                link_to3={'/meet_our_team'}
                link_name3={'Meet Our Team (The Masterminds Behind Headway Business Solution LLP)'}
            />
            <TeamIntro />
            <AllTeamSection />
            {/* <TeamOurClients/> */}
            {/* <Contact_us/> */}
        </Layout>
    )
}

export default MeetOurTeam