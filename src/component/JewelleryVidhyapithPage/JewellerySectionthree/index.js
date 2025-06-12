import React, { useEffect, useRef, useState } from 'react';
import *  as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const JewellerySectionthree = ({ titleRef, isVisible }) => {

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
            <div className="bg-white flex justify-center items-center px-16 py-12 w-full text-5xl font-medium max-md:px-5 max-md:max-w-full max-md:text-4xl max-sm:py-0">
                <div className="text-start flex flex-col my-6 max-w-full w-[1296px] max-md:text-4xl ">
                    <div
                        // className="max-md:max-w-full max-md:text-4xl"
                        className={`max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className=" leading-[58px] text-zinc-800">Objectives and </span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Mission
                        </span>
                    </div>
                    <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
                        Jewellery Vidhyapith is founded on the visionary objective of training over 1 lakh youth in Gujarat, particularly
                        targeting those who are less educated or have dropped out of school. Recognizing the gem and jewellery industry's
                        demand for skilled personnel—projected to require an additional 4 million people in the next decade according to
                        surveys by NSDC and ICRA—we aim to build a talent pool capable of fulfilling both national and global needs.
                    </div>
                    <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
                        Launched on August 1st, 2022, this initiative is a cornerstone of our Corporate Social Responsibility (CSR) efforts,
                        designed to equip the youth with comprehensive industry knowledge and skills, thus paving their way to becoming
                        self-reliant and contributing members of society.
                    </div>
                    <img
                        loading="lazy"
                        className="mt-12 w-full aspect-[2.44] max-md:mt-10 max-md:max-w-full"
                        src={Images.jv_banner}
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
}

export default UpdatedAnimatedComponent(JewellerySectionthree)