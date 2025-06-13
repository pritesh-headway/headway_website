import * as React from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const JewelleryIntro = ({isVisible,titleRef}) => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-sm:py-0" 
        ref={titleRef}
        >
            <div className="mt-6 max-w-full w-[1296px]">
                <div className="flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-lg:flex-col items-center ">
                    <div className="flex flex-col lg:w-[50%] max-md:ml-0 max-lg:w-full max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet={Images.jv_intro}
                            // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                            className="grow w-full aspect-[1.49] max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl"
                                style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }}
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col  w-[45%]  max-md:ml-0 max-lg:w-full  max-lg:mt-5">
                        <div className="text-start flex flex-col text-lg max-md:mt-10 max-md:max-w-full max-lg:w-full md:w-full lg:w-full ">
                            <div className="text-5xl font-medium  max-md:max-w-full max-md:text-4xl">
                                <div
                                    // className=" leading-[58px]"
                                   // className="about-us_title_animation_fade_in_right text-zinc-800"
                                 className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >Introduction</div>
                                {/* <div
                                    className="font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2"
                                className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    IDLE TO IDEAL
                                </div> */}
                            </div>
                            {/* <div className="mt-6 max-md:max-w-full blog_intro">
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
                            </div> */}
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                In a significant move aimed at empowering the youth and
                                contributing to the gem and jewellery industry's workforce,
                                <span className="text-orange-500">Headway Business Solutions LLP</span> proudly announces the
                                launch of Jewellery Vidhyapith in Ahmedabad.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Led by Paresh Rajpara, the Chairman and Managing Director,
                                this initiative marks our entrance into the education sector,
                                reflecting our commitment to societal growth and industry
                                advancement.
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


export default UpdatedAnimatedComponent(JewelleryIntro);