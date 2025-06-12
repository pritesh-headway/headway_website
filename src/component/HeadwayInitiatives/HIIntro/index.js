import React from 'react';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';


const HIIntro = ({ titleRef, isVisible }) => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-sm:py-0" >
            <div className="mt-6 max-w-full w-[1296px]" ref={titleRef}>
                <div className="flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-lg:w-full">
                        <img
                            loading="lazy"
                            // src={Images.headwayinit_intro}
                            src={Images.headway_initiative_my_bzb_intro}
                            className=" w-full shadow-2xl shadow-orange-100 rounded-xl max-md:mt-10 max-sm:mt-5 max-md:max-w-full"
                            // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-lg:w-full">
                        <div className="flex flex-col text-lg max-lg:mt-10 max-lg:max-w-full">
                            <div className="flex items-center gap-5">
                                <img
                                    alt=''
                                    src={Images.bzb_logo}
                                    className='w-24 h-24 '
                                />
                                <div
                                className={`flex-1  text-zinc-800 text-4xl font-medium  max-md:max-w-full max-md:text-4xl max-sm:text-2xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    My Bharatiya Zaveri Bazaar&nbsp;
                                    <span
                                    className={`font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                        // className="font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] about-us_title_animation_fade_in_right2"
                                    // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                    >
                                        (My BzB)
                                    </span>
                                </div>

                            </div>
                            <div className="text-start mt-3 max-md:max-w-full blog_intro ">
                                Discover My Bharatiya Zaveri Bazaar (MyBzB), an online jewellery shopping platform by Headway Business Solutions LLP, dedicated to showcasing the timeless allure of Indian jewellery craftsmanship.
                            </div>
                            <div className="text-start mt-3 max-md:max-w-full blog_intro ">
                                At My Bharatiya Zaveri Bazaar, we offer a global platform for jewellers to showcase their exquisite creations and for customers to explore and purchase the finest jewellery pieces from the comfort of their homes.
                            </div>

                            {/* <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5">
                                    Learn more
                                    </div> */}
                            <ButtonOrange
                                name={`Visit Website`}
                                className={`justify-center self-start px-4 py-1 mt-4 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl shadow-orange-50 max-md:px-5`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://mybzb.com/', '_blank');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatedAnimatedComponent(HIIntro)