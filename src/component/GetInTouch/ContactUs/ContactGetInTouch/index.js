import React, { useEffect, useRef, useState } from 'react';
import * as Images from '../../../../assets';

const ContactGetInTouch = () => {

    const titleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const title = titleRef.current;

        const handleScroll = () => {
            if (title) {
                const top = title.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full" ref={titleRef}>
                <div className="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div
                        // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={` text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}

                    >
                        <span className=" leading-[58px]">Get in</span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Touch
                        </span>
                    </div>
                    <div className="mt-6 text-lg text-zinc-600 max-md:max-w-full font-medium">
                        Connect with excellence by reaching out for personalized jewellery business
                        solutions.
                    </div>
                    <div className="flex gap-5  mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full ">
                        <div className="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
                            <img
                                loading="lazy"
                                src={Images.header_calling}
                                alt="Images"
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ddd28f3d90d3836e9129f8e473900ec0d9c6067602612ff341f37f8fd2b7beb?apiKey=8e5983036f284a13866aae97819cdb73&"
                                className="w-8 aspect-square"
                            />
                        </div>
                        <div className="flex flex-col text-left my-auto">
                            <div className="text-sm tracking-[3.5px]  font-medium  text-zinc-600">CALL US</div>
                            <div className="mt-1.5 text-2xl font-semibold  max-sm:text-xl">+91 70469 00096</div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
                            <img
                                loading="lazy"
                                src={Images.header_sms}
                                alt=''
                                className="w-8 aspect-square"
                            />
                        </div>
                        <div className="flex flex-col flex-1 my-auto">
                            <div className="text-sm tracking-[3.5px]   text-zinc-600 font-medium">EMAIL US</div>
                            <div className="mt-1.5 text-2xl font-semibold max-sm:text-xl">info@headway.org.in</div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
                            <img
                                loading="lazy"
                                src={Images.global}
                                alt="Images"
                                className="w-8 aspect-square"
                            />
                        </div>
                        <div className="flex flex-col flex-1 my-auto whitespace-nowrap">
                            <div className="text-sm tracking-[3.5px]  font-medium   text-zinc-600">WEBSITE</div>
                            <div className="mt-1.5 text-2xl font-semibold max-sm:text-xl">www.headway.org.in</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactGetInTouch