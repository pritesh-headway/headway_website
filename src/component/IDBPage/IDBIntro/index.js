
import React from 'react';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';


const IDBIntro = ({ titleRef, isVisible }) => {

    return (
        <section ref={titleRef}>
            <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="my-6 max-w-full w-[1296px]">
                    <div className="flex justify-between flex-wrap gap-10 max-md:flex-row max-md:gap-0 max-md: ">
                        <div className="flex flex-col lg:w-[50%] max-md:ml-0 max-md:w-full max-md:max-w-full ">
                            <img
                                loading="lazy"
                                src={Images.idp_intro}
                                className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full rounded-xl shadow-orange-100"
                                alt="Images"
                            />
                        </div>
                        <div className="flex flex-col ml-5 lg:w-[40%] max-md:ml-0 max-md:w-full max-md:max-w-full">
                            <div className="text-start flex flex-col text-base max-md:mt-10 max-md:max-w-full">
                                <div
                                    className={`text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl ${isVisible ? '' : 'about-us_title_animation_fade_in_right'}`}
                                >
                                    Individual Development Program <span className='text-orange-500'>(IDP)</span>
                                </div>
                                <div className="mt-6 text-2xl text-orange-500 max-md:max-w-full">

                                    Shine Brighter. Sell Smarter.
                                </div>
                                <div className="mt-6 text-lg make_mmb_clr max-md:max-w-full">

                                    Headway welcomes you to the IDP experience! We understand your aspirations. Let's develop your leadership and unlock your business's true potential.
                                </div>
                                <div className="mt-6 max-md:max-w-full text-lg make_mmb_clr">
                                    The IDP is a customized program designed specifically for jewellery business owners. Our IDP offers a
                                    powerful combination of development training and execution activities to equip you with the skills and strategies
                                    you need to excel in both leadership and business management. Our goal is to equip jewellers with the knowledge and
                                    tools they need to navigate the complexities of their industry successfully.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default UpdatedAnimatedComponent(IDBIntro);