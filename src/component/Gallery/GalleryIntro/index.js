import * as React from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const GalleryIntro = () => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5" >
            <div className="mt-6 max-w-full w-[1296px]">
                <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full ">
                        <img
                            loading="lazy"
                            // src={Images.make_my_business_intro}
                            src={Images.gallery_intro}
                            // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                            className="grow w-full max-md:mt-10 max-md:max-w-full rounded-xl  shadow-2xl shadow-orange-100"
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-lg max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl font-medium  max-md:max-w-full max-md:text-4xl">
                                <div
                                    // className=" leading-[58px]"
                                    className="about-us_title_animation_fade_in_right text-zinc-800"
                                // className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    Welcome to the
                                </div>
                                <div
                                    className="font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2"
                                // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    Headway Business Solutions LLP
                                </div>
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Dive into the vibrant world of Headway Business Solutions LLP through
                                our curated photo gallery. Our gallery offers a visual journey through the
                                milestones, everyday life, and memorable moments that define us.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                We're excited to share these snapshots of our journey to excellence, the
                                vibrant life at Headway, and the cherished memories we've created
                                along the way.
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


export default GalleryIntro;