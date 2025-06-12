import React from 'react';
import * as Images from '../../../../assets';

const Vision = () => {

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
                }
            ]


        },

        {
            id: 2,
            title: 'Vision',
            desc: [
                {
                    id: 1,
                    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',

                },
                {
                    id: 2,
                    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
                }
            ]
        }

    ]
    return (
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <div className="text-5xl font-medium max-md:max-w-full max-md:text-4xl">
                    <span className=" leading-[58px]">Our</span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">
                        Vision
                    </span>
                </div>
                <div className="flex flex-col justify-center p-6 mt-12 text-lg bg-white rounded-xl shadow-2xl text-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={Images.icn_checkmark}
                            alt="Images"
                            className="self-start aspect-square w-[22px]"
                        />
                        <div className="flex-auto max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s.
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={Images.icn_checkmark}
                            alt="Images"
                            className="self-start aspect-square w-[22px]"
                        />
                        <div className="flex-auto max-md:max-w-full">
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision