/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import * as Images from '../../../../assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchWithFormData, fetchWithFormDataToken } from '../../../../apiGeneralFunction';
import ProfileImageComponent from '../../../ProfileImageComponent';
import Loader from '../../../ReusableComp/Loader';

const BlogDetailContent = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // const id = location.state.id || {};

    const [blogData, setBlogData] = useState([]);
    const [blogDetailData, setBlogDetailData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogDetailData();
        fetchBlogData();
        window.scroll(0, 0);
    }, []);

    const fetchBlogDetailData = async () => {

        setLoading(true)

        const tokenValue = localStorage.getItem('login api response token');
        const storedToken = JSON?.parse(tokenValue);
        const user_id = localStorage?.getItem('user_data');
        const userId = JSON.parse(user_id);
        // if (!storedToken) {
        //     navigate('/login');
        //     return;
        // }

        const id = localStorage.getItem("blog detail id")
        const formdata = new FormData();
        formdata.append("blog_id", id);

        try {
            const result = await fetchWithFormDataToken(`blog_details`, formdata, storedToken);
            if (result?.status === true) {
                setBlogDetailData(result?.data);
            }
            else {
                setBlogDetailData(null);
            }
        } catch (error) {
        }
        finally {
            setLoading(false)
        }
    };

    const fetchBlogData = async () => {
        try {
                  const formData = new FormData();
            
                  const result = await fetchWithFormData('blogs_list', formData);
            if (result?.status === true) {
                console.log("blog list data", result?.data);
                setBlogData(result?.data);
            } else {
                setBlogData(null);
            }
        } catch (error) {

        }
    }

    const Card = (item) => {
        console.log("recent card", item.item);

        const categoryStatus = item?.item?.category;

        const renderStatus = (category) => {
            console.log("status", category);
            switch (category) {
                case "Training":
                    return <span className="text-green-500 bg-green-50  px-3 py-1 rounded-lg">Training</span>;
                case "Seminar":
                    return <span className="text-green-600 bg-green-50 px-3 py-1  rounded-lg">Seminar</span>;
                case "Business":
                    return <span className="text-blue-600  bg-blue-50 px-3 py-1  rounded-lg">Business</span>;
                case "Jewellery":
                    return <span className="text-orange-600 bg-orange-50 px-3 py-1  rounded-lg">Jewellery</span>;
                case "Sessions":
                    return <span className="text-orange-600 bg-white px-3 py-1  rounded-lg">Sessions</span>;
                default:
                    return <span className=""></span>;
            }
        };


        const reversedRecentDate = item?.item?.blog_date
            ? item?.item?.blog_date.split('-').reverse().join('-')
            : '';

        // const handleNavigation = () => {
        //     window.location.reload();
        //     navigate('/blog_detail', { state: { id: item?.item?.id } });
        // };
        const handleNavigation = () => {
            localStorage.setItem("blog detail id", item?.item?.id)
            // navigate('/blog_detail', { state: { id } }); 
            // navigate('/blog_detail');
            fetchBlogDetailData();
        };

        return (
            <div className=' flex items-center flex-row gap-2 p-3 rounded-lg max-lg:gap-5 cursor-pointer'
                onClick={() => handleNavigation()}
            >
                <div className='w-[30%] max-lg:w-[30%] h-full'>
                    <img
                        src={item?.item?.image ? item?.item?.image : Images.logo}
                        className='rounded-lg '
                        alt="Image"
                        loading="lazy"
                    />
                </div>
                <div className='flex flex-1 flex-col gap-3'>
                    <div
                        className={`rounded-full uppercase text-[10px] w-fit `}
                    >
                        {renderStatus(item?.item?.category)}
                    </div>
                    <div className='max-sm:text-base primary_black_clr text-sm font-medium max-lg:text-xl'
                        style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}
                    >
                        {item?.item?.title}
                    </div>
                    <div className='max-sm:text-sm flex text-[10px] gap-2 items-center max-lg:text-base max-lg:justify-between'>
                        <div className='text-zinc-600 '>
                            {item?.item?.name}
                        </div>
                        <div className='flex items-center primary_black_clr gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="9.000000pt" height="9.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#F6821F" stroke="none">
                                    <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 560 374 952 942 1095 1588 33 150 50 291 57 465 15 426 -73 832 -263 1214 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                                    <path d="M2400 3327 l0 -832 503 -503 502 -502 113 113 112 112 -455 455 -455 455 0 767 0 768 -160 0 -160 0 0 -833z" />
                                </g>
                            </svg>
                            {reversedRecentDate}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    console.log("blogDetailData", blogDetailData);

    const FollowUs = () => {
        return (
            <div className='shadow-xl mb-10 py-5  bg-white rounded-lg h-fit'>
                <div className='text-2xl font-semibold  w-fit px-8 py-3 rounded-r-full primary_black_clr' style={{ backgroundColor: 'rgb(246 130 31 / 10%)' }}>
                    Join Us  <span className='text-orange-500'>Follow Us</span>
                </div>
                <div className='flex flex-wrap justify-around p-5 pb-0 gap-3'>
                    <img
                        src={Images.event_detail_mail}
                        alt=''
                        className='w-10'
                    />
                    <img
                        className='w-10'
                        src={Images.event_detail_fb}
                        alt=''
                    />
                    <img
                        className='w-10'
                        alt=''
                        src={Images.event_detail_insta}
                    />
                    <img
                        className='w-10'
                        alt=''
                        src={Images.event_detail_twitter}
                    />
                </div>
            </div>
        )
    }

    const reversedDate = blogDetailData?.blog_date
        ? blogDetailData.blog_date.split('-').reverse().join('-')
        : '';

    return (
        <>
            {
                loading ?
                    <Loader />
                    :
                    <>
                        <div className='flex gap-3 flex-col pb-8'>
                            <div className="text-3xl font-medium max-md:max-w-full">
                                {blogDetailData?.title}
                            </div>
                            <div className="flex flex-row justify-start items-center  gap-10 w-full text-sm max-md:max-w-full mt-1 ">
                                {/* <div className="flex flex-wrap gap-10 justify-between items-center"> */}
                                    <div className="flex gap-3 items-center self-stretch my-auto text-base font-medium text-zinc-800">
                                        <img
                                            loading="lazy"
                                            src={Images.logo}
                                            className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full aspect-square"
                                            alt="Images"
                                        />
                                        <div className="self-stretch my-auto">
                                            {blogDetailData?.name}
                                        </div>
                                    </div>
                                {/* </div>
                                <div className="flex gap-4 items-start"> */}
                                    <div className="flex gap-1.5 justify-center items-center">
                                        <img
                                            loading="lazy"
                                            src={Images.blog_calendar}
                                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                            alt="Images"
                                        />
                                        <div className="self-stretch my-auto">
                                            {reversedDate}
                                        </div>
                                    </div>
                                {/* </div> */}

                            </div>
                        </div>
                        <img
                            loading="lazy"
                            // src={Images.blog_detail_splash}
                            src={blogDetailData?.image ? blogDetailData?.image : Images.blog_detail_splash}
                            // className="object-contain shrink-0 self-stretch my-auto w-full aspect-square"
                            alt="Images"
                            className='rounded-xl'
                        />
                        <div className="flex flex-wrap gap-10 items-start pt-5  max-lg:flex-col">
                            <div className="flex flex-col flex-1 shrink basis-0 max-lg:max-w-full ">
                                
                                <div className="mt-6 text-zinc-800 max-md:max-w-full "
                                    dangerouslySetInnerHTML={{ __html: `${blogDetailData?.description}` }}
                                />
                            </div>
                            
                        </div>
                    </>
            }
        </>
    )
}

export default BlogDetailContent