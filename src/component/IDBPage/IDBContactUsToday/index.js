import React from 'react';
import { LinkTagwithClass } from '../../Link';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { Link } from 'react-router-dom';


const IDBContactUsToday = ({ titleRef, isVisible }) => {
    return (
        <>

            <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full " ref={titleRef}>
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full fill-stone-50 max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        // src={Images.about_us_vector}
                        src={Images.user_auth_vector}
                        // className="object-cover absolute top-0 size-full"
                        className=" absolute top-0 size-full max-sm:object-cover"
                        alt=''
                    />
                    <div className=" my-6 max-w-full w-[1296px]  ">
                        <div className="relative shadow-2xl shadow-orange-100 rounded-xl flex justify-between gap-5 max-md:gap-0 max-md:items-end  bg-white max-sm:px-3 ">
                            <div className="text-start z-10 p-10 flex flex-col my-auto text-lg text-zinc-600 max-md:max-w-full max-md:px-3 max-sm:py-4 w-5/6">
                                <div
                                    // className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                                    className={` text-5xl lg:text-4xl md:text-3xl max-sm:text-xl sm:text-xl text-zinc-800 max-md:max-w-full max-md:text-4xl  ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                >
                           
                                    Contact Us
                                    <span className="text-orange-500 "> Today</span>

                                </div>

                                <div className="blog_intro my-4 max-md:max-w-full xl:text-lg xl:my-4 md:my-2 sm:my-2 sm:text-sm max-sm:text-sm xs:my-1">
                                    Headway is here to be your partner in success. Contact us today to discuss your individual needs and learn how our IDP program can transform your jewellery business. We'll work closely with you to develop a customized plan that addresses your specific challenges and helps you achieve your unique goals.
                                </div>
                                <div className="text-orange-500 leading-7 mb-4 max-md:max-w-full xl:text-[22px]">
                                    Don't wait any longer. Contact Headway Business Solutions LLP today and take the first step towards a thriving jewellery business!
                                </div>

                                <Link to={`/get_in_touch`}>
                                    <div className="  max-md:px-5 max-xs:text-[5px] max-sm:px-2 cursor-pointer w-fit  flex gap-3 justify-center self-start px-8 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg">
                                        <div className='xl:text-base md:text-sm max-xs:text-[5px] growth_plan_btn'>Contact Us</div>
                                        <img
                                            loading="lazy"
                                            src={Images.arr_right_white_clr}
                                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            className="my-auto w-4 aspect-square max-sm:w-3"
                                            alt="Images"
                                        />
                                    </div>
                                </Link>
                            </div>


                            {/* <div className='border border-green-500 w-full'> */}
                            <img
                                loading="lazy"
                                // srcSet="..."
                                src={Images.ourcoursessectionthree_bg}
                                // className=' xl:w-4/12 right-0 absolute bg-white md:w-1/3 sm:w-1/2  sm:right-[5%]  w-2/5'
                                // // className="object-cover absolute inset-0 size-full"
                                // className='absolute size-full w-3/6 right-0 rounded-r-xl max-md:h-auto'
                                 className='absolute size-full w-3/6 right-0 rounded-r-xl max-lg:h-auto bottom-0'
                                alt=''
                            />
                            {/* </div> */}

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdatedAnimatedComponent(IDBContactUsToday)