import React, { useEffect, useRef, useState } from 'react';
import *  as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const IHRChoose = ({ titleRef, isVisible }) => {

    // const titleRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const title = titleRef.current;

    //     const handleScroll = () => {
    //         if (title) {
    //             const top = title.getBoundingClientRect().top;
    //             const windowHeight = window.innerHeight;
    //             setIsVisible(top < windowHeight);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <section ref={titleRef}>
            <div className="bg-white relative flex justify-center items-center px-16 py-12 w-full text-5xl font-medium max-md:px-5 max-sm:py-0 max-md:max-w-full max-md:text-4xl">
                <div className="top-0 flex overflow-hidden absolute flex-col justify-center items-center self-stretch fill-white   max-md:px-5 max-md:max-w-full">

                    <img
                        alt="Images"
                        loading="lazy"
                        src={Images.orange_vector}
                        className=""
                    />

                </div>
                <div className="text-start flex flex-col my-6 max-w-full w-[1296px] max-md:text-4xl z-10">
                    <div
                        // className="max-md:max-w-full max-md:text-4xl"
                        className={`max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className=" leading-[58px] text-zinc-800">Why Choose   </span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Intelligent HR&nbsp;
                        </span>
                        From&nbsp;
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Headway
                        </span>
                        ?
                    </div>
                    <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
                        At Headway Business Solutions LLP, we are committed to providing you with comprehensive and reliable HR solutions that
                        meet your unique business needs. With our Intelligent HR services, you can rest assured that your HR operations are in good hands,
                        allowing you to focus on what you do best – growing your jewellery business.
                    </div>
                    <img
                        loading="lazy"
                        className="mt-12 w-full aspect-[2.44] max-md:mt-10 max-md:max-w-full"
                        src={Images.ihr_banner}
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
}

export default UpdatedAnimatedComponent(IHRChoose)