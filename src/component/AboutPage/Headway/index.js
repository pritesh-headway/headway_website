import React from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const Headway = ({ titleRef, isVisible }) => {
    return (
        <>
            <section  ref={titleRef}>
                <div className="flex overflow-hidden relative flex-col items-center px-16 pt-12 pb-6 w-full fill-stone-50 min-h-[304px] max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src={Images.orange_vector}
                        className="object-cover absolute inset-0 -z-10"
                        alt=''
                    />
                    <div className="flex justify-center items-center px-16 py-12 w-full max-lg:max-w-full max-md:p-0">
                        <div className="flex flex-col my-6 max-w-full w-[1296px]">
                            <div 
                            // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                            className={`text-start text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                            >
                                <span className=" leading-[58px]">Why Choose</span>{" "}
                                <span className="font-bold text-orange-500 leading-[58px]">
                                    Headway Business Solutions LLP?
                                </span>
                            </div>
                            <div className="justify-center mt-12 max-md:mt-10 max-lg:max-w-full">
                                <div className="flex gap-5 max-lg:flex-col max-md:gap-0 max-md: flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                                    <div className="flex flex-col  max-lg:ml-0 max-lg:w-full">
                                        <div className="flex flex-col items-center px-8 py-12 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-8" style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }}>
                                            <div className=" flex justify-center items-center px-6 bg-orange-50 h-[100px] rounded-[58.5px] w-[100px] max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src={Images.value_group}
                                                    alt=''
                                                    className="w-full aspect-square"
                                                />
                                            </div>

                                            <div className="mt-6 text-2xl font-medium text-center  text-zinc-800">
                                                Distinctive Industry Expertise:
                                            </div>
                                            <div className="self-stretch mt-3 text-lg text-center text-zinc-600">
                                                At Headway Business Solutions LLP, we bring to
                                                the table a depth of knowledge and experience that is unmatched in the industry.
                                                This wealth of expertise allows us to provide our clients with insights, strategies, and
                                                solutions that are not only effective but also ahead of the curve.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5  max-lg:ml-0 max-lg:w-full">
                                        <div className="flex flex-col grow items-center self-stretch px-8 py-12 mt-12 max-lg:mt-0 w-full bg-white rounded-3xl shadow-lg max-md:px-5 max-md:mt-10" style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }}>
                                            <div className="flex justify-center items-center px-6 bg-orange-50 h-[100px] rounded-[58.5px] w-[100px] max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src={Images.about_icon_two}
                                                    alt=''
                                                    className="w-full aspect-square"
                                                />
                                            </div>
                                            <div className="mt-6 text-2xl font-medium text-center  text-zinc-800">
                                                Tailored Strategies for Your Success:
                                            </div>
                                            <div className="self-stretch mt-3 text-lg text-center text-zinc-600">
                                                We understand that each jewellery
                                                business has its own set of challenges and opportunities. That&#39;s why we emphasize
                                                personalized strategies that are specifically designed to meet your unique needs and
                                                objectives. Our approach is not one-size-fits-all; it&#39;s a solution that aims to elevate
                                                your business in every aspect.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5  max-lg:ml-0 max-lg:w-full">
                                        <div className="flex flex-col items-center px-8 py-12 w-full bg-white rounded-3xl shadow-lg max-md:px-5 max-md:mt-8" style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }}>
                                            <div className="flex justify-center items-center px-6 bg-orange-50 h-[100px] rounded-[58.5px] w-[100px] max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src={Images.about_icon_three}
                                                    alt=''
                                                    className="w-full aspect-square"
                                                />
                                            </div>
                                            <div className="mt-6 text-2xl font-medium text-center  text-zinc-800">
                                                Comprehensive Service Offerings:
                                            </div>
                                            <div className="self-stretch mt-3 text-lg text-center text-zinc-600">
                                                From startups to established enterprises,
                                                our range of services caters to every facet of the jewellery business. Whether it&#39;s
                                                operational optimization, market expansion, brand development, or financial
                                                advisory, Headway Business Solutions stands as a one-stop shop for all your
                                                consulting needs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5  max-lg:ml-0 max-lg:w-full">
                                        <div className="flex flex-col grow items-center self-stretch px-8 py-12 mt-12 max-lg:mt-0 w-full bg-white rounded-3xl shadow-lg max-md:px-5 max-md:mt-10" style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }}>
                                            <div className="flex justify-center items-center px-6 bg-orange-50 h-[100px] rounded-[58.5px] w-[100px] max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src={Images.about_icon_four}
                                                    alt=''
                                                    className="w-full aspect-square"
                                                />
                                            </div>
                                            <div className="mt-6 text-2xl font-medium text-center  text-zinc-800">
                                                Proven Track Record of Success:
                                            </div>
                                            <div className="self-stretch mt-3 text-lg text-center text-zinc-600">
                                                Our history speaks volumes. Since our
                                                inception, we have consistently broken our own records of success, helping
                                                numerous businesses within the gold, silver, diamond, and gem jewellery sectors to
                                                thrive. Our clients&#39; achievements are a testament to our effective methodologies and
                                                the positive impact we have on their businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdatedAnimatedComponent(Headway)