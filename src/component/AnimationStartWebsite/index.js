
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Images from '../../assets';


const AnimationStartWebsite = ({ onClick, data }) => {

  return (
    <>
<div
  style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
  className="backdrop-filter h-full backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0"
>
  <div className="modals h-full max-md:overflow-y-auto flex justify-center items-center max-md:items-start">

    <div className="popup_container w-full flex flex-col items-center relative">
      <Link to={'/'} onClick={onClick}>
        <div
          className="zoom_modal absolute cursor-pointer text-white hover:text-white font-bold" 
        >
          &times;
        </div>
      </Link>
      <img
        // src={Images.animatedBanner} // Replace with your image path
        src={data.bannerPopup} 
        alt="Animated Banner"
        className="animated-banner relative"
        style={{ maxWidth: '90vh', maxHeight: '90vh' }} // Optional: adjust image styling
      />
    </div>
  </div>
</div>

    </>
  )
}

export default AnimationStartWebsite