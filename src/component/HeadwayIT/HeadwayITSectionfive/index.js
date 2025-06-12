
import React from 'react';
import { ButtonOrange } from '../../Buttons';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const HeadwayITSectionfive = ({ titleRef, isVisible }) => {
    return (
        <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full terms_bg_clr" ref={titleRef}>
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full fill-stone-50 min-h-[587px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    src={Images.about_us_vector}
                    className="object-cover absolute top-0 "
                    alt=''
                />
                <div className=" my-6 max-w-full w-[1296px] z-10">
                    <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
                        <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
                            <div className="text-start flex relative flex-col self-stretch my-auto text-lg text-zinc-600 max-lg:mt-10 max-lg:max-w-full">
                                <div
                                    // className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                                    className={`text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                >

                                    <span className="font-bold  leading-[58px] text-orange-500 text-5xl">Empowering Jewellers</span>{" "}
                                    <span className="leading-7 ">With Digital Brilliance </span>
                                    {/* <div className="mt-3 text-base text-zinc-600">
                                        Headway Business Solutions LLP goes beyond simply "coaching" and "consulting." We are committed to
                                        fostering long-term relationships with our clients, acting as trusted advisors and partners on their journey
                                        towards achieving their unique jewellery business aspirations.
                                    </div> */}
                                </div>
                                {/* <div className="mt-6 max-md:max-w-full text-orange-500 ">
                                Lorem Ipsum is simply dummy text of the printing.
                                </div> */}
                                <div className="mt-6 max-md:max-w-full">
                                    At IT for Jewellers, we are committed to empowering jewellers with
                                    innovative IT solutions that drive business growth and success in today's
                                    digital age.
                                </div>
                                <div className="mt-6 max-md:max-w-full">
                                    From design and development to online marketing, our comprehensive
                                    range of services is tailored to meet the unique needs of jewellers,
                                    enabling them to stay ahead of the competition and thrive in an
                                    increasingly competitive market.
                                </div>
                                <div className="mt-6 max-md:max-w-full">
                                    Join us on this transformative journey and unlock the full potential of your
                                    jewellery business.
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
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div
                            // className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-12 rounded-xl min-h-[443px] max-md:px-5 max-md:mt-10 max-md:max-w-full"

                            >
                                <img
                                    loading="lazy"
                                    // srcSet="..."
                                    src={Images.headwayit_sectionfive}
                                    className='mx-auto'
                                    // className="object-cover absolute inset-0 size-full"
                                    alt=''
                                />
                                {/* <div className="flex relative justify-center items-center px-9 mt-32 w-24 h-24 backdrop-blur-[27px] bg-zinc-800 bg-opacity-10 rounded-[73.6px] max-md:px-5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f4744928dfb48d4a928e7f79aa192a0012074a0e3fac8c01e2995ef16d7fea?"
                                        className="w-full aspect-[0.85]"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatedAnimatedComponent(HeadwayITSectionfive)