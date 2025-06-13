import * as React from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const Intro = ({ titleRef, isVisible }) => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-md:py-6 max-sm:py-0" ref={titleRef}>
            <div className="mt-6 max-w-full w-[1296px] max-sm:mt-0">
                <div className="flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-lg:w-full">
                        <img
                            loading="lazy" 
                            // src={Images.make_my_business_intro}
                            src={Images.service_mmb_intro}
                           className="grow w-full aspect-[1.49] max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl"
                                style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }} // custom orange shadow
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-lg:w-full max-lg:mt-5">
                        <div className="text-start flex flex-col text-lg max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl font-medium  max-md:max-w-full max-md:text-4xl">
                                <div
                                // className=" leading-[58px]"
                                //className="about-us_title_animation_fade_in_right"
                                className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >Make My Business</div>
                                <div 
                                //className="font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2"
                                className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    IDLE TO IDEAL
                                </div>
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Make My Business (MMB) by Headway Business Solutions LLP is a transformative
                                initiative designed to empower entrepreneurs at every stage of their business growth
                                journey.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                From laying a solid foundation with effective business planning to crafting a
                                compelling brand identity, navigating financial intricacies, and fostering staff
                                members, Make My Business is a holistic manual for businesses seeking success.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Headway&#39;s commitment to nurturing and enhancing every aspect of your enterprise
                                ensures that you not only survive but thrive in today&#39;s cutting-edge jewellery industry.
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


export default UpdatedAnimatedComponent(Intro);