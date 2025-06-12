import * as React from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const TeamIntro = ({isVisible,titleRef}) => {
    return (
        <div className="flex justify-center items-center px-16 pt-12 pb-20 bg-white max-lg:px-5 max-sm:py-0" 
        ref={titleRef}
        >
            <div className="mt-6 max-w-full w-[1296px] max-sm:mt-0">
                <div className="flex justify-between gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
                    <div className="flex flex-col w-[50%] max-lg:ml-0 max-lg:w-full">
                        <img
                            loading="lazy"
                            src={Images.team_intro}
                            // src={Images.make_my_business_intro}
                            // className="grow w-full shadow-2xl aspect-[1.49] max-lg:mt-10 max-lg:max-w-full rounded-xl shadow-orange-100"
                            className=" w-full shadow-2xl max-lg:mt-10 max-lg:max-w-full rounded-xl shadow-orange-100"
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-lg:ml-0 max-lg:w-full">
                        <div className="text-start flex flex-col text-lg max-lg:mt-10 max-lg:max-w-full ">
                            <div className="text-5xl font-medium  max-lg:max-w-full max-lg:text-4xl">
                                <div
                                    // className=" leading-[58px]"
                                  //  className="about-us_title_animation_fade_in_right"
                                 className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                   Headway Business 
                                </div> 
                                <div
                                    className="font-bold text-orange-500 leading-[50px] about-us_title_animation_fade_in_right2"
                                // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    Solutions LLP
                                </div>
                            </div>
                            <div
                                    className="mt-4 text-orange-500 "
                                // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    Where Jewellers are Polished to Perfection
                                </div>
                            <div className="mt-4 max-lg:max-w-full blog_intro text-base">
                                At Headway Business Solutions, our dedicated team, led by the visionary leadership of CMD Paresh
                                Rajapara and CEO Pooja Rajpara, is here to help you achieve your goals. From our skilled executive
                                assistants who ensure seamless operations to our proficient business trainers who empower clients with
                                essential skills, every member plays a unique role. Additionally, our data analytics team harnesses the
                                power of insights to drive strategies toward optimal outcomes. Together, we stand as a formidable force,
                                providing comprehensive coaching and consulting services designed to unlock your jewellery business&#39;s
                                full potential.
                            </div>
                            <div className="mt-4 max-lg:max-w-full blog_intro text-base">
                            Meet the experts who will become your trusted partners on the path to success.
                            </div>
                            {/* <div className="mt-6 max-lg:max-w-full">
                                Headway&#39;s commitment to nurturing and enhancing every aspect of your enterprise
                                ensures that you not only survive but thrive in today&#39;s cutting-edge jewellery industry.
                            </div> */}
                            {/* <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-lg:px-5">
                                        Learn more
                                        </div> */}
                            {/* <ButtonOrange
                                name={`Learn More`}
                                className={`justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-lg:px-5`}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdatedAnimatedComponent(TeamIntro);