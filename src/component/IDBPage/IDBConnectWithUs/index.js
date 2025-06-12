import React from 'react';
import { LinkTagwithClass } from '../../Link';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { Link } from 'react-router-dom';


const IDBConnectWithUs = ({ titleRef, isVisible ,src,bgClrClassName}) => {
    return (
        <>
 
            <div 
            // className="flex flex-col justify-center w-full bg-white max-md:max-w-full " 
            className={`flex flex-col justify-center w-full max-md:max-w-full mt-5 ${bgClrClassName}`}
            // ref={titleRef}
            >
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        // src={Images.orange_vector}
                        src={src}
                        className="object-cover absolute top-0 "
                        alt=''
                    />
                    <div className=" my-10 max-w-full w-[1296px] z-10  rounded-xl">
                        <div className=" flex justify-between gap-5 max-md:gap-0 max-md:  bg-white ps-10 rounded-xl shadow-orange-200  max-sm:px-3 shadow-[3px_3px_10px_3px]" 
                        // style={{boxShadow: '2px 2px 10px 6px'}}
                        
                        >
                            <div className=" flex flex-col my-auto text-lg text-zinc-600 max-md:max-w-full max-sm:py-4">
                                <div
                                className='text-5xl lg:text-4xl md:text-3xl max-sm:text-xl sm:text-xl text-zinc-800 max-md:max-w-full max-md:text-4xl'
                                    //className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                                    // className={` text-5xl lg:text-4xl md:text-3xl max-sm:text-xl sm:text-xl text-zinc-800 max-md:max-w-full max-md:text-4xl  ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                >
                                    {/* <span className="leading-7 ">Make</span>{" "}
                                    <span className="font-bold leading-[58px] text-orange-500 "> My Business Growth Plan</span> */}
                                    <span className=" ">Registration With </span>{" "}
                                    <span className="font-bold  text-orange-500 "> Us</span>

                                </div>

                                <Link to={`/registration_form`}>
                                    <div className="mt-10 max-md:px-5 max-xs:text-[5px] max-sm:px-2 cursor-pointer w-fit flex gap-3 justify-center self-start px-8 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg">
                                        <div className='xl:text-base md:text-sm max-xs:text-[5px] growth_plan_btn'>Join Now</div>
                                        <img
                                            loading="lazy"
                                            src={Images.arr_right_white_clr}
                                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            className="my-auto w-4 aspect-square max-sm:w-3"
                                            alt="Images"
                                        />
                                    </div>
                                </Link>

                                <Link to={`/plan_pricing`}>
                                    <div className="  max-md:px-5 max-xs:text-[5px] max-sm:px-2 cursor-pointer w-fit  flex gap-3 justify-center self-start px-8 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg">
                                        <div className='xl:text-base md:text-sm max-xs:text-[5px] growth_plan_btn'>Download</div>
                                        <img
                                            loading="lazy"
                                            src={Images.arr_right_white_clr}
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
                                src={Images.registration_brochure_section}
                                className=' xl:w-5/12 right-0 mt-[-7%] md:w-1/3 sm:w-1/2 sm:right-[5%]  w-2/5  rounded-r-lg '
                                // // className="object-cover absolute inset-0 size-full"
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

export default UpdatedAnimatedComponent(IDBConnectWithUs)