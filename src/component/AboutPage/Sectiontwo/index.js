import React from 'react'
import Mission from './Mission'
import Vision from './Vision'
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent'
import { decodeHTML } from '../../ReusableComp/DecodeHtmlData'


const Sectiontwo = ({ titleRef, isVisible }) => {

    const multipleData = [
        {
            id: 1,
            title: 'Mission',
            desc: [
                {
                    id: 1,
                    desc1: `At Headway Business Solutions LLP, our mission is to help every jewellery business
                    thrive, setting new benchmarks for success.`,

                },
                {
                    id: 2,
                    desc1: `We&#39;re committed to equipping jewellery
                    businesses with the tools they need to succeed in the ever-evolving customer needs.`,
                },
                {
                    id: 3,
                    desc1: `Besides, We are dedicated to nurturing startups and accelerating growth for
                    established jewellers.`,
                },
                {
                    id: 4,
                    desc1: `Through custom-made strategies, innovative insights, and
                    unwavering support, we are devoted to turning your aspirations into achievements.`,
                }
            ]


        },

        {
            id: 2,
            title: 'Vision',
            desc: [
                {
                    id: 1,
                    desc1: `Headway Business Solutions LLP aims to be the best in the world at coaching and
                    advising jewellery businesses.`,

                },
                {
                    id: 2,
                    desc1: `We want all our partner jewellers to succeed. `,
                },
                {
                    id: 3,
                    desc1: `We&#39;ll help them with top-notch advice, creative strategies, and powerful solutions, hoping
                    to take their jewellery businesses to unprecedented levels of success.`,
                }
            ]
        }

    ]


    return (
        <>
            <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:py-0 max-md:max-w-full" ref={titleRef}>
                <div className="my-6 max-w-full w-[1296px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-full">
                        {multipleData.map((item, index) => (
                            <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full w-full " key={index}

                            >
                                <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full max-sm:mt-0">

                                    {/* <span className="font-bold text-orange-500 leading-[58px]">
                                            {item?.title}
                                        </span> */}
                                    {item.title === 'Mission' ? (
                                        <div
                                            // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                                            className={`text-start text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                        >
                                            <span className=" leading-[58px]">Our</span>{" "}
                                            <span
                                                className="leading-[58px] font-bold text-orange-500"

                                            >{item.title}</span>
                                        </div>
                                    ) : (
                                        <div
                                            // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                                            className={`text-start text-5xl font-medium max-md:max-w-full max-md:text-4xl max-sm:mt-10 ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                        >
                                            <span className=" leading-[58px]">Our</span>{" "}
                                            <span
                                                className="leading-[58px]  font-bold text-orange-500"
                                            // className={`leading-[58px] font-bold text-orange-500 ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                            >{item.title}</span>
                                        </div>
                                    )}



                                    <div
                                        style={{ boxShadow: '0 0 10px 0 rgba(89, 89, 89, 0.25)' }}
                                        className="flex flex-col  justify-start p-6 mt-10 text-lg bg-white h-full rounded-xl text-zinc-700 max-md:px-5 max-md:mt-10 max-sm:mt-5 max-md:max-w-full"
                                    >
                                        {item?.desc?.map((subdata, i) => (
                                            <div
                                                className="gap-4 my-3 max-md:gap-3 w-full flex flex-row"
                                                key={i}

                                            >

                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e9aa359493aad157ae267c79a869e51ad8a39a9b6708ca6a3dc26d0146b8ed?"
                                                    className="self-start aspect-square w-[22px]   mt-1 "
                                                    alt=''
                                                />

                                                <div
                                                    className="text-start"
                                                >
                                                    {/* {subdata.desc1} */}
                                                    {decodeHTML(subdata.desc1)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        ))}
                        {/* <Mission />
                        <Vision /> */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default UpdatedAnimatedComponent(Sectiontwo)