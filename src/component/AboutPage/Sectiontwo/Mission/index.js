import React from 'react';
import * as Images from '../../../../assets';

const Mission = () => {


    return (
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <div className="text-5xl font-medium max-md:max-w-full max-md:text-4xl">
                    <span className=" leading-[58px]">Our</span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">
                        Mission
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
                        <div className="flex-auto max-md:max-w-full ">
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

export default Mission