import React from 'react';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';


const OurITProjects = ({ titleRef, isVisible }) => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-sm:py-0" >
            <div className="max-w-full w-[1296px]" ref={titleRef}>
                <div
                    className={`text-start text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                >
                    <span className=" leading-[58px]">Our</span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">
                        Projects
                    </span>
                </div>
                <div className="mt-6 flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-lg:w-full">
                        <img
                            loading="lazy"
                            // src={Images.headwayinit_intro}
                            src={Images.our_project_mybzb}
                            className=" w-full shadow-2xl mt-8 shadow-orange-100 rounded-xl max-md:mt-10 max-sm:mt-5 max-md:max-w-full"
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
                            <div className="text-start mt-2 max-md:max-w-full blog_intro ">
                                MyBzB is a dynamic e-commerce platform and application dedicated to showcasing exquisite jewelry collections. Designed for both elegance and convenience, MyBzB offers a wide range of high-quality jewelry, including rings, necklaces, bracelets, and more.
                            </div>
                            <div className="text-start mt-2 max-md:max-w-full blog_intro ">
                                With a user-friendly interface, secure transactions, and personalized shopping features, MyBzB provides a seamless experience for customers seeking timeless beauty and style. Whether for special occasions or everyday wear, MyBzB is your go-to destination for all things jewelry.
                            </div>

                            <div className="flex flex-wrap justify-start space-x-4 mt-4">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://play.google.com/store/apps/details?id=com.headway.mybzb', '_blank');
                                    }}
                                    className='focus:outline-none'
                                    aria-labelledby='playstore'
                                >
                                    <img
                                        loading="lazy"
                                        src={Images.google_play}
                                        className="our-it-services-buttons w-auto"
                                        alt=''
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://apps.apple.com/in/app/my-bharatiya-zaveri-bazaar/id6737978516', '_blank');
                                    }}
                                    className='focus:outline-none'
                                    aria-labelledby='appstore'
                                >
                                    <img
                                        loading="lazy"
                                        src={Images.app_store}
                                        className="our-it-services-buttons w-auto"
                                        alt=''
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://mybzb.com/#/', '_blank');
                                    }}
                                    className='focus:outline-none'
                                    aria-labelledby='website'
                                >
                                    <img
                                        loading="lazy"
                                        src={Images.website_link}
                                        className="our-it-services-buttons w-auto"
                                        alt=''
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-24 flex justify-between gap-5 max-lg:flex-col-reverse max-md:flex-col-reverse max-md:gap-0">
    {/* Content Section */}
    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-lg:w-full">
        <div className="flex flex-col text-lg max-lg:mt-10 max-lg:max-w-full">
            <div className="flex items-center gap-5">
                <div
                    className={`flex-1 text-zinc-800 text-4xl font-medium max-md:max-w-full max-md:text-4xl max-sm:text-2xl ${
                        isVisible ? 'about-us_title_animation_fade_in_right' : ''
                    }`}
                >
                    Suvarna Saubhagya Utsav 2024&nbsp;
                    <span
                        className={`font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] ${
                            isVisible ? 'about-us_title_animation_fade_in_right2' : ''
                        }`}
                    >
                        (SSU)
                    </span>
                </div>
            </div>
            <div className="text-start mt-2 max-md:max-w-full blog_intro">
                Suvarna Saubhagya Utsav is a special lucky draw event for jeweler's customers. Shoppers who purchase jewelry worth ₹10,000 or more get a chance to participate and win exciting prizes. This event celebrates customer loyalty while adding joy and value to their shopping experience.
            </div>
            <div className="flex flex-wrap justify-start space-x-4 mt-4">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://play.google.com/store/apps/details?id=com.headway.ssu', '_blank');
                    }}
                    className="focus:outline-none"
                    aria-labelledby="playstore"
                >
                    <img
                        loading="lazy"
                        src={Images.google_play}
                        className="our-it-services-buttons w-auto"
                        alt=""
                    />
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://apps.apple.com/in/app/suvarna-saubhagya-utsav-ssu/id6648775717', '_blank');
                    }}
                    className="focus:outline-none"
                    aria-labelledby="appstore"
                >
                    <img
                        loading="lazy"
                        src={Images.app_store}
                        className="our-it-services-buttons w-auto"
                        alt=""
                    />
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.headway.guru/', '_blank');
                    }}
                    className="focus:outline-none"
                    aria-labelledby="website"
                >
                    <img
                        loading="lazy"
                        src={Images.website_link}
                        className="our-it-services-buttons w-auto"
                        alt=""
                    />
                </button>
            </div>
        </div>
    </div>

    {/* Image Section */}
    <div className="flex flex-col w-[50%] max-md:ml-0 max-lg:w-full">
        <img
            loading="lazy"
            src={Images.our_project_ssu}
            className="w-full shadow-2xl shadow-orange-100 rounded-xl max-md:mt-10 max-sm:mt-5 max-md:max-w-full"
            alt="Images"
        />
    </div>
</div>


                <div className="mt-24 flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-lg:w-full">
                        <img
                            loading="lazy"
                            // src={Images.headwayinit_intro}
                            src={Images.our_project_kashi_parekh}
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
                                    Shree Kashi Parekh Association &nbsp; <br />
                                    <span
                                        className={`font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                    // className="font-bold text-orange-500 leading-[58px] max-sm:leading-[30px] about-us_title_animation_fade_in_right2"
                                    // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                    >
                                        (SKP Association)
                                    </span>
                                </div>

                            </div>
                            <div className="text-start mt-2 max-md:max-w-full blog_intro ">
                                Shree Kashi Parekh Association Visitor App is a smart solution designed to streamline visitor management across various offices. It enables efficient visitor tracking, seamless check-ins, and enhanced security, ensuring a smooth and professional experience for both visitors and staff.
                            </div>

                            <div className="flex flex-wrap justify-start space-x-4 mt-4">
                                <button
                                    type="button"
                                    // onClick={(e) => {
                                    //     e.preventDefault();
                                    //     window.open('#', '_blank');
                                    // }}
                                    className='focus:outline-none'
                                    aria-labelledby='playstore'
                                >
                                    <img
                                        loading="lazy"
                                        src={Images.google_play}
                                        className="our-it-services-buttons w-auto"
                                        alt=''
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://apps.apple.com/us/app/shree-kashi-parekh-association/id6738197018', '_blank');
                                    }}
                                    className='focus:outline-none'
                                    aria-labelledby='appstore'
                                >
                                    <img
                                        loading="lazy"
                                        src={Images.app_store}
                                        className="our-it-services-buttons w-auto"
                                        alt=''
                                    />
                                </button>
                                {/* <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://mybzb.com/#/','_blank');
                            }}
                            className='focus:outline-none'
                              aria-labelledby='website'
                        >
                            <img
                                loading="lazy"
                                src={Images.website_link}
                                className="our-it-services-buttons w-auto"
                                alt=''
                            />
                        </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatedAnimatedComponent(OurITProjects)