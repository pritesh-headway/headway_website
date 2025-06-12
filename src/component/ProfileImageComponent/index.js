import React from 'react';
import * as Images from '../../assets';

const ProfileImageComponent = ({ profilePicUrl, className }) => {
    const handleImageError = (event) => {
        event.target.src = Images.blog_dummy_logo; 
    };

    const isDummyImage = !profilePicUrl || profilePicUrl === Images.blog_dummy_logo;

    return (
        <img
            src={profilePicUrl ? profilePicUrl : Images.blog_dummy_logo}
            alt="Profile"
            onError={handleImageError}
            // className={className}
            className={`${className} ${isDummyImage ? 'px-20 py-10' : ''} `}
        />
    );
};

export default ProfileImageComponent
 