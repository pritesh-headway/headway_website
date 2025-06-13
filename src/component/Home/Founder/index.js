import React, { useEffect, useRef, useState } from 'react';
import *  as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const Founder = ({isVisible,titleRef}) => {

  // const titleRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const title = titleRef.current;

  //   const handleScroll = () => {
  //     if (title) {
  //       const top = title.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       setIsVisible(top < windowHeight);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <section ref={titleRef}>
      <div className="flex justify-center items-center px-16 py-12 w-full text-5xl font-medium max-md:px-5 max-sm:py-0 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col my-6 max-w-full w-[1296px] max-md:text-4xl">
          <div
            // className="max-md:max-w-full max-md:text-4xl"
            className={`text-start max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
          >
            <span className=" leading-[58px]">Founder & CMD of</span>{" "}
            <span className="font-bold text-orange-500 leading-[58px]">
              Headway Business Solutions LLP
            </span>
          </div>
          {/* <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
          Headway Business Solutions goes beyond simply "consulting" We are committed to fostering 
          long-term relationships with our clients, acting as trusted advisors and partners on their journey
           towards achieving their unique jewellery business aspirations.
          </div> */}
          <img
            loading="lazy"
            // className="mt-12 w-full aspect-[2.44] max-md:mt-10 max-md:max-w-full"
            className="mt-12 w-full rounded-xl max-md:mt-10 max-md:max-w-full"
            // src={Images.home_founder}
            // src={Images.home_founder_new}
            src={Images.home_founder_wepb_img}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default UpdatedAnimatedComponent(Founder)