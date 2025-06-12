import React, { useEffect, useRef, useState } from 'react';
import *  as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const IDBSectionthree = ({ titleRef, isVisible }) => {

    // const titleRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const title = titleRef.current;

    //     const handleScroll = () => {
    //         if (title) {
    //             const top = title.getBoundingClientRect().top;
    //             const windowHeight = window.innerHeight;
    //             setIsVisible(top < windowHeight);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <section ref={titleRef}>
            <div className="terms_bg_clr flex justify-center items-center px-16 py-12 w-full text-5xl font-medium max-md:px-5 max-md:max-w-full max-md:text-4xl">
                <div className="flex flex-col my-6 max-w-full w-[1296px] max-md:text-4xl text-center">
                    <div
                        // className="max-md:max-w-full max-md:text-4xl"
                        className={`max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className=" leading-[58px] text-zinc-800">Individual Development Program (IDP)  </span>{" "} <br />
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Your Pathway to Success
                        </span>
                    </div>
                    <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
                        In today's competitive jewellery market, standing out requires more than just beautiful products. You need the leadership skills
                        and business acumen to navigate challenges, seize opportunities, and propel your business forward. Headway's IDP program is an investment
                        in your future and the future of your jewellery business. It's the key to unlocking your full potential and achieving the success you deserve.
                    </div>
                    <img
                        loading="lazy"
                        className="mt-12 w-full aspect-[2.44] max-md:mt-10 max-md:max-w-full"
                        // src={Images.home_founder_new}
                        src={Images.idp_banner}
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
}

export default UpdatedAnimatedComponent(IDBSectionthree)