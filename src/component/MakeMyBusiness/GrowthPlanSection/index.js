import React from 'react';
import { LinkTagwithClass } from '../../Link';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import { Link } from 'react-router-dom';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const GrowthPlanSection = ({ titleRef, isVisible }) => {
    return (
        <>
            {/* <div className="flex flex-col items-start max-md:px-5 relative max-h-[50%]">
                <div className="flex gap-5 justify-between ml-2.5 max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src={Images.mmb_growth_plan_bg}
                        className=" max-w-full self-start aspect-[4.1]"
                        alt=""
                    />
                </div>
                <div className=" top-[30%] absolute mt-1 right-[17%] font-semibold text-[38px] max-md:max-w-full max-md:text-4xl">
                    Make
                    <span className='ml-2 text-orange-500 '>My Business Growth Plan</span>
                    <div className='text-base text-zinc-600'> Next Level For Your Business</div>
                    <div className="cursor-pointer w-fit border flex gap-3 justify-center self-start px-8 py-2.5 mt-3 text-sm font-medium text-white whitespace-nowrap bg-orange-500 rounded-lg max-md:px-5">
                        <div className=''>Choice Your Business Growth Plan</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                            className="my-auto w-4 aspect-square"
                            alt=""
                        />
                    </div>
                </div>

            </div> */}
            {/* <div className="flex flex-col items-start relative max-h-[50%] " ref={titleRef}>
                <div className="flex gap-5 justify-between ml-2.5 max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src={Images.mmb_growth_plan_bg}
                        className="w-full max-w-full self-start aspect-[4.1]"
                        alt=""
                    />
                </div>
                <div className="top-[30%] absolute mt-1 font-medium md:text-xl sm:text-base sm:right-[20%] md:right-[18%] xl:top-[30%] xl:right-[18%] xs:right-[5%] lg:right-[20%] lg:text-2xl xl:text-4xl max-sm:right-[16%] max-sm:text-xs max-sm:top-[18%]">
                    <div 
                    className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        Make
                        <span 
                        className='ml-2 text-orange-500 font-bold'
                        >My Business Growth Plan</span>
                    </div>
                    <div 
                    // className='text-base text-zinc-600 md:text-xs sm:text-sm  max-sm:text-[9px] xl:text-2xl xl:my-3 '
                    className={`text-base text-zinc-600 md:text-xs sm:text-sm  max-sm:text-[9px] xl:text-2xl xl:my-3 ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                    >Next Level For Your Business</div>
                    <Link to={`/plan_pricing`}>
                        <div className="  max-md:px-5 sm:text-xs sm:mt-1 sm:px-2 sm:py-1 xl:px-8 xl:py-2.5 xl:mt-3 max-sm:text-[9px] max-sm:p-0.5 max-sm:m-0 cursor-pointer w-fit border flex gap-3 justify-center self-start px-8 py-2.5 mt-3 text-sm font-medium text-white whitespace-nowrap bg-orange-500 rounded-lg">
                            <div>Choice Your Business Growth Plan</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                                className="my-auto w-4 aspect-square max-sm:w-3"
                                alt=""
                            />
                        </div>
                    </Link>
                </div>
            </div> */}

            <div className="flex flex-col justify-center w-full  max-md:max-w-full terms_bg_clr mt-10" ref={titleRef}>
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full fill-stone-50 max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src={Images.about_us_vector}
                        className="object-cover absolute top-0 "
                        alt=''
                    />
                    <div className=" my-6 max-w-full w-[1296px] z-10 ">
                        <div className=" flex justify-between gap-5 max-md:gap-0 max-md: rounded-2xl shadow-2xl shadow-orange-100  bg-white px-10  max-sm:px-3 ">
                            <img
                                loading="lazy"
                                // srcSet="..."
                                src={Images.event_newsletter}
                                className=' xl:w-5/12 right-0 mt-[-6%] md:w-1/3 sm:w-1/2  sm:right-[5%] w-2/5'
                                // // className="object-cover absolute inset-0 size-full"
                                alt=''
                            />
                            <div className=" flex flex-col my-auto text-lg text-zinc-600 max-md:max-w-full max-sm:py-4">
                                <div
                                    // className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                                    className={` text-5xl lg:text-4xl md:text-3xl max-sm:text-xl sm:text-xl text-zinc-800 max-md:max-w-full max-md:text-4xl  ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                >
                                    {/* <span className="leading-7 ">Make</span>{" "}
                                    <span className="font-bold leading-[58px] text-orange-500 "> My Business Growth Plan</span> */}
                                    <span className=" ">Make </span>{" "}
                                    <span className="font-bold  text-orange-500 "> My Business Growth Plan</span>

                                </div>

                                <div className="text-start my-4 max-md:max-w-full xl:text-lg xl:my-4 md:my-2 sm:my-2 sm:text-sm max-sm:text-sm xs:my-1 ">
                                Next Level For Your Business
                                </div>

                                <Link to={`/plan_pricing`}>
                                    <div className="  max-md:px-5 max-xs:text-[5px] max-sm:px-2 cursor-pointer w-fit  flex gap-3 justify-center self-start px-8 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg">
                                        <div className='xl:text-base md:text-sm max-xs:text-[5px] growth_plan_btn'>Choice Your Business Growth Plan</div>
                                        <img
                                            loading="lazy"
                                            src={Images.arr_right_white_clr}
                                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            className="my-auto w-4 aspect-square max-sm:w-3"
                                            alt="Images"
                                        />
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UpdatedAnimatedComponent(GrowthPlanSection)