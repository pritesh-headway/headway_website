import React from 'react';
import { Link } from 'react-router-dom';
import * as Images from '../../../assets';
import { LinkTagwithClass } from '../../Link';

const SectionWithoutText = ({ src, title, link_to2, link_name2 }) => {
    return (
        <>

            <div
                // className="flex flex-col items-start relative max-h-[50%] max-w-full  " 
                className='flex flex-col items-start relative max-w-full'
            >
                <div className=" flex gap-5 justify-between max-w-full max-md:flex-wrap ">
                    <img
                        loading="lazy"
                        src={Images.bg_pages}
                        // className=" max-w-full self-start aspect-[6.10] max-sm:aspect-[2.9]"
                        alt="Images"
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className='absolute text-gray-100 font-bold text-9xl bottom-0 left-[25%] max-lg:left-[10%] max-md:text-7xl max-md:left-[10%] max-sm:text-5xl'>
                    <div className=''>About Us</div>
                    
                </div>
                <div className='absolute w-full h-full px-16 max-md:px-5 z-10 '>

                    <div className="max-w-full w-[1296px]  mx-auto flex items-center h-full ">
                        <div
                            // className="border animation_fadeInRight1 top-[30%] absolute mt-1 min-lg:ml-72 font-semibold text-orange-500 text-[60px] text-neutral-100 max-md:max-w-full xl:text-6xl lg:text-5xl md:text-4xl max-md:text-lg sm:left-[20%] max-sm:pl-5"
                            className=" animation_fadeInRight1 top-[50%]  mt-1 font-semibold text-orange-500 text-[60px] max-md:max-w-full xl:text-6xl lg:text-5xl md:text-4xl max-md:text-lg sm:left-[20%] max-sm:pl-5"
                        >
                            {title}


                            <nav className="animation_fadeInRight2 flex mt-5 max-md:mt-1" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse  ">
                                    <li className="inline-flex items-center ">
                                        <Link to={'/'} className="max-sm:text-xs inline-flex items-center text-base font-medium text-gray-700 hover:text-orange-500 ">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg class="rtl:rotate-180 w-3 h-3 text-orange-500 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <Link
                                                to={link_to2}
                                                className="ms-1 max-sm:text-xs text-base font-medium text-orange-500 hover:text-orange-500 md:ms-2 "
                                            >
                                                {link_name2}
                                            </Link>
                                        </div>
                                    </li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWithoutText