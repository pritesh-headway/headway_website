import React, { useState } from 'react';
import { LinkTagwithClass } from '../../Link';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import { Link, useNavigate } from 'react-router-dom';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { fetchWithFormData, fetchWithFormDataToken } from '../../../apiGeneralFunction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JewelleryNewsletter = ({ titleRef, isVisible }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [apiSuccessResponse, setApiSuccessResponse] = useState(false);
    const [apiFailResponse, setApiFailResponse] = useState(false);

    const handleSubmit = async () => {

        // const tokenValue = localStorage?.getItem('login api response token');
        // const storedToken = JSON?.parse(tokenValue);
        // console.log("plan pricing verification", storedToken);

        // console.log("phone number register", storedPhone?.phone);

        // if (!storedToken) {  
        //     navigate('/login');
        //     return;
        // } 

        const formdata = new FormData();
        formdata.append("email", email);


        try {
            // const result = await fetchWithFormDataToken('api/newsletter_subscription', formdata, storedToken);
            const result = await fetchWithFormData('newsletter_subscription', formdata);
            if (result?.status === true) {
                // toast.dismiss()
                // toast.success(result?.message, {
                //     position: 'top-center',
                //     autoClose: 3000,
                // });
                setTimeout(() => {
                    setApiSuccessResponse('')
                    setApiFailResponse('')
                }, 3000)

                setEmail('')
                setApiSuccessResponse(result?.message)
            }
            else {
                setTimeout(() => {
                    setApiSuccessResponse('')
                    setApiFailResponse('')
                }, 3000)
                setApiFailResponse(result?.message)
                // toast.dismiss()
                // toast.error(result?.message, {
                //     position: 'top-center',
                //     autoClose: 3000,
                // });
                setEmail('')


                // navigate('/login');
            }
        } catch (error) {

        }


    };

    return (
        <>
            {/* <div className="flex flex-col items-start relative max-h-[50%] "
                ref={titleRef}
            >
                <div className="flex gap-5 justify-between ml-2.5 max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src={Images.mmb_growth_plan_bg}
                        className="w-full max-w-full self-start aspect-[4.1]"
                        alt=""
                    />
                </div>

                <div className="top-[30%] text-wrap absolute mt-1 font-semibold md:text-xl sm:text-base sm:right-[18%] md:right-[18%] xl:top-[25%] xl:right-[22%] xs:right-[5%] lg:right-[18%] lg:top-[19%] lg:text-2xl xl:text-4xl max-sm:right-[16%] max-sm:text-xs max-sm:top-[18%] md:top-[10%] sm:top-[10%]">
                    <div

                        className='flex flex-col font-medium'
                    >
                        <h2 className="w-full text-5xl max-md:max-w-full max-md:text-4xl max-lg:text-4xl max-xl:text-5xl 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-2xl md:m-0  sm:text-lg xs:text-base ">
                            <span

                                className="text-zinc-800  2xl:leading-[58px] xl:leading-[58px] lg:leading-[58px] md:leading-[48px]"
                            >Sign up for </span>
                            <span

                                className="font-bold text-orange-500 "
                            >
                                Our Newsletter
                            </span>
                        </h2>
                        <div className="mt-3 w-full text-lg text-zinc-600 text-wrap max-md:max-w-full max-lg:text-base 2xl:text-lg 2xl:mt-4 lg:mt-1 lg:text-sm md:mt-0 md:text-xs sm:text-[10px] sm:mt-0">
                            Be the first one to get updates and Special events or seminar
                        </div>
                        <form className="flex gap-5 justify-between self-start p-4 mt-6 rounded-lg shadow-md terms_bg_clr 2xl:mt-6 lg:p-2 max-lg:mt-4 lg:mt-2 md:mt-1 md:p-2 sm:mt-0 sm:p-1">
                            <div

                                className=' flex flex-col flex-1 '
                            >

                                <div className="text-sm text-zinc-600 2xl:text-sm lg:text-xs md:text-[10px] sm:text-[8px] ">
                                    Type your Email Address
                                </div>

                                <div className=' text-base text-black mt-1 2xl:text-base 2xl:mt-1 lg:text-sm md:mt-0 md:text-xs sm:text-[10px] sm:m-0'>terrycalzoni@gmail.com</div>
                            </div>
                            <button
                                type="submit"
                                className="grow justify-center px-8 py-3.5 my-auto text-base text-white text-wrap bg-orange-500 rounded-lg max-md:px-5 2xl:text-base 2xl:px-8 2xl:py-3.5 max-lg:text-sm max-lg:px-4 lg:py-1 lg:px-2 lg:text-xs md:text-sm md:px-2 md:py-1 sm:p-1 sm:text-[10px] sm:py-0"
                            >
                                Send Now
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col justify-center w-full  max-md:max-w-full terms_bg_clr mt-10" ref={titleRef}>
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full fill-stone-50 max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src={Images.about_us_vector}
                        className="object-cover absolute top-0 "
                        alt=''
                    />
                    <div className=" my-6 max-w-full w-[1296px] z-10 ">
                        <div className=" flex justify-between gap-5 max-md:gap-0 max-md: rounded-2xl shadow-2xl shadow-orange-100  bg-white px-10  max-sm:px-3 ">
                            <img
                                loading="lazy"
                                // srcSet="..."
                                src={Images.event_newsletter}
                                className=' xl:w-5/12 right-0 mt-[-6%] md:w-1/3 sm:w-1/2  sm:right-[5%] w-2/5'
                                // // className="object-cover absolute inset-0 size-full"
                                alt=''
                            />
                            <div className=" flex flex-col my-auto text-lg text-zinc-600 max-md:max-w-full max-sm:py-4 ">
                                <div
                                    // className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                                    className={` text-5xl lg:text-4xl md:text-3xl max-sm:text-xs sm:text-xl text-zinc-800 max-md:max-w-full max-md:text-4xl  ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                >
                                    {/* <span className="leading-7 ">Make</span>{" "}
                                    <span className="font-bold leading-[58px] text-orange-500 "> My Business Growth Plan</span> */}
                                    {/* <span className=" ">Sign up for  </span>{" "} */}
                                    <span className=" ">Subscribe for  </span>{" "}
                                    <span className="font-bold  text-orange-500 ">  Our Newsletter</span>

                                </div>

                                <div className="my-4 max-md:max-w-full xl:text-lg xl:my-4 md:my-2 sm:my-2 sm:text-sm xs:my-1  max-sm:my-2  max-sm:text-[8px] max-sm:leading-normal" >
                                    Be the first one to get updates and Special events or seminar
                                </div>
                                <div className='w-full flex gap-5 terms_bg_clr max-sm:flex-col px-3 py-3 rounded-lg shadow-lg shadow-orange-100 max-sm:gap-2 justify-between items-center'>
                                    <div className='w-full'>
                                        {/* <div className="text-sm text-zinc-600 2xl:text-sm lg:text-xs md:text-[10px] sm:text-[8px] max-sm:text-[5px]  ">
                                            Type your Email Address
                                        </div> */}
                                        <input
                                            placeholder='Email Address'
                                            className='w-full border-0 text-base text-black max-sm:text-[10px] py-2 px-2 focus:ring-0 rounded-lg max-sm:py-1'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    handleSubmit();
                                                }
                                            }}
                                        />
                                        {/* <div className=' text-base text-black mt-1 2xl:text-base 2xl:mt-1 lg:text-sm md:mt-0 md:text-xs sm:text-[8px] sm:m-0 xs:text-[5px] max-sm:text-[5px]'
                                        style={{ overflowWrap: 'break-word' }}
                                        >
                                            terrycalzoni@gmail.com</div> */}

                                    </div>
                                    <Link to={`/plan_pricing`}>
                                    <button
                                        // onKeyDown={(e) => {
                                        //     if (e.key === 'Enter') {
                                        //         e.preventDefault();
                                        //       handleSubmit();
                                        //     }
                                        //   }}
                                        onClick={handleSubmit}
                                        className="max-sm:w-full lg:text-base md:text-sm max-xs:text-[5px] growth_plan_btn max-sm:text-[9px] focus:border-orange-500 focus:outline-orange-700 w-48  max-md:px-5 text-center max-sm:px-2 cursor-pointer max-sm:my-auto flex gap-3 max-sm:py-1 justify-center self-start px-8 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg">

                                        {/* <div
                                        onClick={handleSubmit}
                                        className='lg:text-base md:text-sm max-xs:text-[5px] growth_plan_btn max-sm:text-[9px]'> */}
                                        {/* Send Now */}
                                        Subscribe
                                        {/* </div> */}

                                        {/* <img
                                                loading="lazy"
                                                src={Images.arr_right_white_clr}
                                                className="my-auto w-4 aspect-square max-sm:w-3"
                                                alt=""
                                            /> */}
                                    </button>

                                    </Link>
                                </div>
                                {apiSuccessResponse ? (
                                    <div className="text-start text-green-500 text-sm font-medium mt-5">
                                        {apiSuccessResponse}
                                    </div>
                                )
                                    :

                                    <div className="text-start text-red-500 text-sm font-medium mt-5">
                                        {apiFailResponse}
                                    </div>
                                }
                                {/* {apiFailResponse && (
                                         <div className="text-start text-red-500 text-sm font-medium mt-5">
                                             {apiFailResponse}
                                         </div>
                                     )} */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(JewelleryNewsletter)