import React, { useEffect } from "react";
import Layout from "../../Layout";
import UserProfileContent from "./UserProfileContent";


const UserProfile = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <>
        <Layout
        //   isUserProfile={true}
         >
            <UserProfileContent/>
        </Layout>
        </>
    );
}

export default UserProfile