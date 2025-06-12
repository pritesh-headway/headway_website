import React from 'react';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';


const OurITServicesIntro = ({ titleRef, isVisible }) => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-sm:py-0" >
            <div className="mt-6 max-w-full w-[1296px]" ref={titleRef}>
                <div className="flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-md:">
                    <div className="mt-5 flex flex-col w-[50%] max-md:ml-0 max-lg:w-full">
                        <img
                            loading="lazy"
                            // src={Images.headwayinit_intro}
                            src={Images.our_it_service_intro}
                            className=" w-full shadow-2xl shadow-orange-100 rounded-xl max-md:mt-10 max-sm:mt-5 max-md:max-w-full"
                            // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-lg:w-full">
                        <div className="flex flex-col text-lg max-lg:mt-10 max-lg:max-w-full">
                            <div className="flex items-center gap-5">
                                <div
                                    // className=" leading-[58px]"
                                    // className="flex-1 about-us_title_animation_fade_in_right text-zinc-800 text-4xl font-medium  max-md:max-w-full max-md:text-4xl max-sm:text-2xl "
                                // className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                className={`flex-1  text-zinc-800 text-4xl font-medium  max-md:max-w-full max-md:text-4xl max-sm:text-2xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    Unlock limitless possibilities with <br />
                                    <span
                                    className={`font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                        // className="font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] about-us_title_animation_fade_in_right2"
                                    // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                    >
                                    Intelligence IT Solution by HEADWAY
                                    </span>
                                </div>

                            </div>
                            <div className="text-start mt-3 max-md:max-w-full blog_intro ">
                            Intelligence IT Solutions by Headway is a new company focused on modern technology solutions for today’s varied business aspects. We offer intelligent and easy to scale solutions in software development, digital transformation, cloud and data analytics, business intelligence.
                            </div>
                            <div className="text-start mt-3 max-md:max-w-full blog_intro ">
                            Our aim is to provide organizations with smart systems that increase efficiency, optimize activities and allow for more sustainable growth. Our strategy emphasizes innovation and customer focus which will enable us as a reliable partner in the ever evolving digital landscape.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatedAnimatedComponent(OurITServicesIntro)