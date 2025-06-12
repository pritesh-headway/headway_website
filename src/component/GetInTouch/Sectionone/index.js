import React from 'react';
import { Link } from 'react-router-dom';
import * as Images from '../../../assets';
import { LinkTagwithClass } from '../../Link';

const Sectionone = () => {
    return (
        <div className="flex flex-col items-start relative max-h-[50%]">
            <div className="flex gap-5 justify-between ml-2.5 max-w-full max-md:flex-wrap">
                <img
                    loading="lazy"
                    src={Images.Get_in_touch_bg}
                    className=" max-w-full aspect-[1.1] self-start aspect-[6.10] max-sm:aspect-[2.9]"
                    alt="Images"
                />
            </div>
            <div className="animation_fadeInRight1 top-[30%] absolute mt-1 min-lg:ml-72 font-semibold text-orange-500 text-[60px] text-neutral-100 max-md:max-w-full xl:text-6xl lg:text-5xl md:text-4xl max-md:text-lg sm:left-[20%] max-sm:pl-5">
                Get in touch


                <nav className="animation_fadeInRight2 flex mt-5 max-sm:mt-2 max-sm:text-sm max-md:text-base max-lg:text-base max-xl:text-lg" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse  sm:text-sm">
                        <li className="inline-flex items-center text-zinc-800">
                            {/* <Link to={'/'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-600 ">
                                Home
                            </Link> */}
                            <LinkTagwithClass 
                            to={'/'} className="inline-flex items-center text-base font-medium text-black-700 hover:text-orange-500 "
                            name={'Home'}
                            />
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-orange-500 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link
                                    href={'/make_my_business'}
                                    className="ms-1 text-base font-medium text-orange-500 hover:text-orange-500 md:ms-2 "
                                >
                                    Get in touch
                                </Link>
                            </div>
                        </li>
                    </ol>
                </nav>

            </div>
        </div>
    )
}

export default Sectionone