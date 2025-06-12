
import React from 'react';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';


const IHRIntro = ({ titleRef, isVisible }) => {

    return (
        <section ref={titleRef}>
            <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-sm:py-3 max-md:max-w-full">
                <div className="my-6 max-w-full w-[1296px]">
                    <div className="flex justify-between flex-wrap gap-10 max-md:flex-row max-md:gap-0 max-md: ">
                        <div className="flex flex-col lg:w-[50%] max-md:ml-0 max-md:w-full max-md:max-w-full ">
                            <img
                                loading="lazy"
                                src={Images.ihr_intro}
                                className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl shadow-orange-100"
                                alt="Images"
                            />
                        </div>
                        <div className="flex flex-col ml-5 lg:w-[40%] max-md:ml-0 max-md:w-full max-md:max-w-full">
                            <div className="text-start flex flex-col text-base max-md:mt-10 max-md:max-w-full">
                                <div
                                    className={`text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl ${isVisible ? '' : 'about-us_title_animation_fade_in_right'}`}
                                >
                                    Intelligent <span className='text-orange-500'>HR</span>
                                </div>
                                <div className="mt-6 text-2xl text-orange-500 max-md:max-w-full">

                                    Premium human resource services for jewellers
                                </div>
                                <div className="mt-6 text-lg make_mmb_clr max-md:max-w-full">

                                    Welcome to our Intelligent HR services, where we provide comprehensive human resources solutions tailored specifically for jewelers.
                                </div>
                                <div className="mt-6 max-md:max-w-full text-lg make_mmb_clr">
                                    At Headway Business Solutions LLP, we understand the unique challenges that jewelers face in managing their businesses efficiently
                                    while also ensuring smooth HR operations. With our Intelligent HR package, we take care of all your HR needs, allowing you to focus
                                    on the growth and success of your jewellery business without worrying about staffing issues.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default UpdatedAnimatedComponent(IHRIntro);