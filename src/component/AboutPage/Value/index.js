import React from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { decodeHTML } from '../../ReusableComp/DecodeHtmlData';

const Value = ({ titleRef, isVisible }) => {

    const data = [
        {
            id: 1,
            title: 'Building Skills & Confidence',
            desc: `At Headway Business Solutions LLP, we take pride in being a catalyst for
            success in the realm of jewellery businesses through our comprehensive training
            programs. Our initiatives are designed to empower jewellery stores by imparting
            invaluable skills, strategic insights, and industry-specific knowledge.`,
            image:`${Images.about_icon_five}`
        },
        {
            id: 2,
            title: 'Expert Coaching & Consultation',
            desc: `Whether you&#39;re navigating the complexities of starting a new venture or seeking
            to enhance the performance of an established business, our training equips you with
            the tools needed to thrive in the competitive jewellery industry.`,
            image:`${Images.about_icon_six}`
        },
        {
            id: 3,
            title: 'Committed to Your Growth',
            desc: `With a commitment to excellence, our training programs go beyond theory,
            providing practical, actionable guidance that transforms aspirations into tangible
            achievements. Headway Business Solutions is not just a training resource; we are
            your dedicated partner in shaping a path to lasting success for your jewellery
            business.`,
            image:`${Images.about_icon_seven}`
        }
    ]
    return (
        <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full max-sm:py-0" >
            <div className="flex flex-col my-6 max-w-full w-[1296px]"ref={titleRef}>
                <div 
                // className="self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl"
                className={`self-center text-5xl font-medium  max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                >
                    <span className=" leading-[58px]">Our</span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">
                        Value: Sparkling Futures, Crafted Today.
                    </span>
                </div>
                <div className="justify-center mt-12 max-md:mt-10 max-sm:mt-0 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-5 max-md: grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {data?.map((item, index) => (
                            <div className="flex flex-col max-md:ml-0 max-md:w-full" key={index}>
                                <div className="flex flex-col grow justify-start mx-auto w-full bg-white rounded-xl max-md:mt-8">
                                    <div className="flex gap-4 self-start">
                                        <div className="flex justify-center items-center px-4 w-14 h-14 aspect-square bg-orange-50 rounded-[58.5px]">
                                            <img
                                                loading="lazy"
                                                alt="Images"
                                                className="w-full aspect-square"
                                                // src={Images.value_group}
                                                src={item?.image}
                                            />
                                        </div>
                                        <div className="grow my-auto text-2xl font-medium text-center max-md:text-left whitespace-nowrap max-md:text-wrap text-zinc-800">
                                            {item?.title}
                                        </div>
                                    </div>
                                    <div className="mt-6 text-lg text-zinc-600">
                                    {decodeHTML(item?.desc)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatedAnimatedComponent(Value)