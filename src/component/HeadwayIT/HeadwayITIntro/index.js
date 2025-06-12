import * as React from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const HeadwayITIntro = ({ titleRef, isVisible }) => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-sm:py-0" 
        ref={titleRef}
        >
            <div className="mt-6 max-w-full w-[1296px]">
                <div className="flex justify-between gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
                    <div className="headwayITIntro flex flex-col w-[50%] max-lg:ml-0 max-lg:w-full  shadow-2xl shadow-orange-100">
                        <img
                            loading="lazy"
                            src={Images.headway_it_intro}
                            // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                            className=" max-lg:mt-5 rounded-2xl max-sm:mt-0"
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-lg:ml-0 max-lg:w-full">
                        <div className="text-start flex flex-col text-lg max-lg:mt-10 max-lg:max-w-full">
                            <div className=" font-medium  max-md:max-w-full max-md:text-4xl">

                                <div
                                    // className="text-4xl font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2"
                                // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                className={`text-4xl font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    IT for Jewellers
                                </div>
                                <div
                                    // className=" leading-[58px]"
                                    // className="text-2xl about-us_title_animation_fade_in_right text-zinc-800 font-bold"
                                 className={`text-2xl text-zinc-800 font-bold ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    by Headway Business Solutions LLP
                                </div>
                            </div>

                            <div className="mt-6 max-md:max-w-full blog_intro headwayitintropara1">
                                Welcome to IT for Jewellers, the latest offering from
                                Headway Business Solutions LLP designed to revolutionize
                                the way jewellers operate in the digital landscape.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro headwayitintropara2">
                                With our comprehensive suite of services, we empower
                                jewellers to leverage the power of technology to enhance
                                their online presence, streamline operations, and drive
                                business growth.
                            </div>

                            {/* <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5">
                                        Learn more
                                        </div> */}
                            {/* <ButtonOrange
                                name={`Learn More`}
                                className={`justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5`}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdatedAnimatedComponent(HeadwayITIntro);