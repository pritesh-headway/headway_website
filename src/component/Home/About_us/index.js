import React, { useEffect, useRef, useState } from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const AboutUs = ({ isVisible, titleRef }) => {

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
        <>
            <div
                className='relative mt-5 max-sm:mt-0'
                ref={titleRef}
            >

                <div className='absolute'>
                    <img
                        src={Images.about_us_vector}
                        alt="Images"
                        className='w-full'
                    />
                </div>

                <div className="flex justify-center items-center px-16 py-12 w-full bg-[#fff8F5] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:py-0">
                    <div className="my-6 max-w-full w-[1296px]">
                        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-md: justify-between">
                            <div className="flex flex-col w-[40%]  max-md:ml-0 max-lg:w-full  z-10">
                                <img
                                    loading="lazy"
                                    // src={Images.about_us}
                                    src={Images.home_ourservice}
                                    alt="Images"
                                    // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl"
                                    className="grow w-full shadow-2xl max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl "
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[50%] max-lg:ml-0 max-lg:w-full  z-10">
                                <div className="text-start flex flex-col text-base max-md:mt-10 max-md:max-w-full ">
                                    <div
                                        // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl animation_fadeInRight1"
                                        className={` text-5xl font-medium max-md:max-w-full max-md:text-4xl max-lg:mt-10 max-md:mt-5  ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                    >
                                        {/* <span className=" leading-[58px]">About</span>{" "}
                                        <span className="font-bold text-orange-500 leading-[58px]">
                                            Us
                                        </span> */}
                                        <span className=" leading-[58px]">Our</span>{" "}
                                        <span className="font-bold text-orange-500 leading-[58px]">
                                            Services
                                        </span>
                                    </div>
                                    <div className='text-2xl text-zinc-800 my-4 font-medium'>
                                        {/* Helping Businesses Bloom from Seed to Success: */}
                                        Let Your Jewellery Business Blossom from Seed to Succeed:
                                    </div>
                                    <div className="mt-6 text-base text-zinc-600 max-md:max-w-full font-medium text-start">
                                        <span className='text-orange-500'>Start-up: </span>We provide comprehensive guidance and counselling to new entrants of the lucrative jewellery business. From crafting a winning business plan to navigate through the complexities of daily administrations & operations. We shall provide solutions to all your issues & concerns in accordance with your business activities.
                                    </div>
                                    <div className="mt-6 text-base text-zinc-600 max-md:max-w-full font-medium text-start">
                                        <span className='text-orange-500'>Growth of Established Businesses: </span>
                                        We partner with veteran established jewellers to identify their strengths and explore the opportunities for ideal expansion, refine marketing strategies, and optimize operational efficiency, propelling their businesses to accomplish remarkable success.
                                    </div>
                                    <div className="mt-6 text-base text-zinc-600 max-md:max-w-full font-medium text-start">
                                        <span className='text-orange-500'>Jewellery Vidhyapith: </span>
                                        While we recognise the importance of constant learning, we propose specialised training programs under the "Jewellery Vidhyapith" banner. These preparations equip individuals with the necessary skills and knowledge to excel in various aspects of the jewellery business.
                                    </div>
                                    <div className="mt-6 text-base text-zinc-600 max-md:max-w-full font-medium text-start">
                                        {/* <span className='text-orange-500'>Comprehensive IT Solutions: </span>Headway Business Solutions LLP specializes */}
                                        <span className='text-orange-500'>Intelligent IT : </span>Headway Business Solutions LLP specializes in offering a complete suite of IT services customised for jewellers, including web development, data analytics, and social media expertise. Our dedicated team ensures that your jewellery business flourishes in the digital landscape through cutting-edge technological solutions.
                                    </div>
                                    {/* <div className="mt-6 max-md:max-w-full">
                                        <span className="text-xl font-medium leading-6 text-orange-500">
                                            MR. PARESH RAJPARA
                                        </span>{" "}
                                        <span className="text-xl leading-6 text-zinc-600 font-medium">is the founder of</span>{" "}
                                        <span className="text-xl font-medium leading-6 text-orange-500">
                                            &quot;Headway Business Solutions LLP
                                        </span>
                                        <span className="font-medium leading-5 text-orange-500">
                                            &quot;
                                        </span>
                                        <span className="text-xl leading-6 text-zinc-600 font-medium">
                                            . He himself is having more than 25 years of a wide range of
                                            experience in the Business industry and well known as an
                                            institution in himself. He has enormous knowledge, screening
                                            capability, concept creation, analysis, research,
                                            development, commercialization and his own generation of
                                            ideas for the benefit of Business and personnel.
                                        </span>
                                    </div> */}
                                    {/* <button className="justify-center self-start px-6 py-3.5 mt-6 text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5 hover:bg-white hover:text-orange-500">
                                        Learn more
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(AboutUs)