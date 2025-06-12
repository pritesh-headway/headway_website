import React, { useEffect, useState } from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const OurServicesIntro = ({isVisible,titleRef}) => {

    // const [imageLoaded, setImageLoaded] = useState(false);

    // useEffect(() => {
    //     const image = new Image();
    //     image.src = Images.our_service_intro;
    //     image.onload = () => {
    //       setImageLoaded(true);
    //     };
    //   }, []);


    return (
        <section className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 max-sm:py-0" 
        ref={titleRef}
        >
            <div className="mt-6 max-w-full w-[1296px]">
                <div className="flex justify-between gap-5 max-lg:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-lg:ml-0 max-lg:w-full ">
                    {/* {imageLoaded ? null : <div className="aspect-[1.49] w-full bg-gray-200" /> } */}
                        <img
                            loading="lazy"
                            src={Images.our_service_intro}
                        
                            // className={`image ${imageLoaded ? 'loaded' : ''} grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-sm:mt-5 max-md:max-w-full rounded-xl shadow-orange-100`}
                             className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-sm:mt-5 max-md:max-w-full rounded-xl shadow-orange-100"
                            alt="Images"
                            width=""
                            height=""
                             fetchPriority="high"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-lg:ml-0 max-lg:w-full">
                        <div className="text-start flex flex-col text-lg max-lg:mt-10 max-lg:max-w-full">
                            <div className="text-4xl font-medium  max-md:max-w-full max-md:text-4xl">
                                <div
                                  
                                   // className="about-us_title_animation_fade_in_right text-zinc-800"
                                 className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >Our Services at</div>
                                <div
                                    // className="font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2"
                                className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    Headway Business Solutions LLP
                                </div>
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Welcome to Headway Business Solutions LLP, where
                                our mission is to support and elevate jewellery
                                businesses at every stage of their development.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                With a comprehensive suite of services tailored
                                specifically for the jewellery industry, we're here to
                                ensure your venture not only succeeds but thrives and
                                leads in the competitive market.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default UpdatedAnimatedComponent(OurServicesIntro);