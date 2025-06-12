import React from 'react';
import { Link } from 'react-router-dom';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const Sectionone = ({ titleRef, isVisible }) => {
    return (
        <section className="flex flex-col items-start relative max-h-[50%]" 
        
        >
            <div className="flex gap-5 justify-between ml-2.5 max-w-full max-md:flex-wrap ">
                <img
                    loading="lazy"
                    src={Images.about_us_bg_new}
                    className=" max-w-full aspect-[1.1] self-start aspect-[6.10] max-sm:aspect-[2.9]"
                    alt="Images"
                />
            </div>
            <div 
            className="animation_fadeInRight1 top-[30%] absolute mt-1 min-lg:ml-72 font-semibold text-orange-500 text-[60px] text-neutral-100 max-md:max-w-full xl:text-6xl lg:text-5xl md:text-4xl max-md:text-lg sm:left-[20%] max-sm:pl-5"
            // className={` top-[30%] absolute mt-1 min-lg:ml-72 font-semibold text-orange-500 text-[60px] text-neutral-100 max-md:max-w-full xl:text-6xl lg:text-5xl md:text-4xl max-md:text-lg sm:left-[20%] max-sm:pl-5 ${isVisible ? '' : 'animation_fadeInRight1'}`}
            >
                About Us


                <nav 
                className="flex animation_fadeInRight2" 
                aria-label="Breadcrumb"
                // className={`flex mt-2 ${isVisible ? '' : 'animation_fadeInRight2'}`}
                >
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link to={'/'} className="inline-flex items-center text-base font-medium text-gray-700 hover:text-orange-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-orange-500 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link
                                    href={'/about_us'}
                                    className="ms-1 text-base font-medium text-orange-500 hover:text-orange-500 md:ms-2"
                                >
                                    About Us
                                </Link>
                            </div>
                        </li>
                    </ol>
                </nav>

            </div>
        </section>
    )
}

export default Sectionone