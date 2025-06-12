
import React, { useEffect, useState } from 'react';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { fetchData } from '../../../apiGeneralFunction';


const Intro = ({ titleRef, isVisible, data }) => {


    const htmlToConvert = [
        {
            "state": true,
            "message": "Page fatch successfully",
            "data": {
                "id": 4,
                "name": "Get In Touch",
                "description":
                    `
                <div class="flex flex-col text-base max-md:mt-10 max-md:max-w-full">
                    <div
                        class="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                    >
                        Introduction
                    </div>
                    <div class="mt-6 text-xl text-zinc-700 max-md:max-w-full">
                        Welcome to Headway Business Solutions LLP, where innovation meets brilliance in
                        the world of jewellery business coaching and consulting. As a leading enterprise in
                        the industry, we are dedicated to guiding jewellery entrepreneurs towards
                        outstanding success.
                    </div>
                    <div class="mt-6 max-md:max-w-full text-zinc-700">
                        <span class="text-xl leading-6 text-zinc-700">
                            At Headway, we understand that the jewellery business is not just about beautiful
                            ornaments; it&#39;s a delicate balance of productive operations, strategic marketing, and
                            artistic jewellery products. Our seasoned team of experts brings a wealth of
                            experience to the table, offering tailored solutions that propel your business forward.
                            Join hands with us; we are committed to achieving lasting success for your
                            business.
                        </span>
                    </div>
                </div>
            </div
             `,
                "created_at": "2024-03-29T12:50:00.000000Z",
                "updated_at": "2024-03-29T12:50:00.000000Z"
            }
        }
    ]

    return (
        <section ref={titleRef}>
            <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:py-0 max-md:max-w-full">
                <div className="my-6 max-w-full w-[1296px]">
                    <div className="flex justify-between flex-wrap gap-10 max-lg:flex-row max-md:gap-0 max-md: flex-row">
                        <div className="flex flex-col lg:w-[50%] max-md:ml-0 max-lg:w-full max-md:max-w-full ">
                            <img
                                loading="lazy"
                                src={Images.About_us_intro_new}
                                className="grow w-full aspect-[1.49] max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl"
                                style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }} // custom orange shadow
                                alt="Images"
                            />
                        </div>

                        {/* <div className="flex flex-col ml-5 lg:w-[40%] max-md:ml-0 max-lg:w-full max-md:max-w-full" dangerouslySetInnerHTML={{ __html: `${data?.description}` }} /> */}
                        <div className="flex flex-col ml-5 lg:w-[40%] max-md:ml-0 max-lg:w-full max-md:max-w-full">
                            {/* {data && data?.length>0 ? (
                                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                            ) : (
                                <> */}
                            {htmlToConvert.map((item, index) => (
                                <div className="text-start" dangerouslySetInnerHTML={{ __html: `${item.data.description}` }} key={index} />

                            ))}
                            {/* </>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default UpdatedAnimatedComponent(Intro);