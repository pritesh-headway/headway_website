/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from '../../../apiGeneralFunction';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const Clients = ({ data,isVisible,titleRef }) => {

    // const titleRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);
    // const [data, setData] = useState([]);
    // const [token, setToken] = useState('');

    // useEffect(() => {
    //     const title = titleRef.current;

    //     const handleScroll = () => {
    //         if (title) {
    //             const top = title.getBoundingClientRect().top;
    //             const windowHeight = window.innerHeight;
    //             setIsVisible(top < windowHeight);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    const counterData = [
        {
            id: 1,
            title: 'K. Virchand Jewellers',
            img: `${Images.client_logo4}`,
            desc: 'Patan'
        },
        {
            id: 2,
            title: 'CMS Jewellers',
            img: `${Images.client_logo5}`,
            desc: 'Deesa'
        },
        {
            id: 3,
            title: 'Shriji Jewellers',
            img: `${Images.client_logo1}`,
            desc: 'Rajkot'
        },
        {
            id: 4,
            title: 'Mahaveer Jewellers',
            img: `${Images.client_logo3}`,
            desc: 'Ahmedabad'
        },
        {
            id: 5,
            title: 'N K Jewellers',
            img: `${Images.client_logo2}`,
            desc: 'Vadodra'
        },
        {
            id: 6,
            title: 'Subhlaxmi Jewellers',
            img:`${Images.client_logo6}`,
            desc: 'Ahmedabad'
        },
        // {
        //     id: 7,
        //     title: 'Subhlaxmi Jewellers',
        //     img: "https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c756841127332d344e5c180012b9262c5e2725db7feeeae62559b3dc2af38143?apiKey=8e5983036f284a13866aae97819cdb73&",
        //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        // },
    ]

    const [slides, setSlides] = useState([]);

    const settings = {
        // dots: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 6,
        // slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    const handleNextClick = () => {
        const newIndex = currentIndex + itemsPerPage;
        setCurrentIndex(newIndex >= data?.length ? 0 : newIndex);
        // setCurrentIndex(newIndex >= counterData.length ? 0 : newIndex);
    };

    const handlePrevClick = () => {
        const newIndex = currentIndex - itemsPerPage;
        setCurrentIndex(newIndex < 0 ? Math.floor(data?.length / itemsPerPage) * itemsPerPage : newIndex);
        // setCurrentIndex(newIndex < 0 ? Math.floor(counterData.length / itemsPerPage) * itemsPerPage : newIndex);
    };

    return (
        <section ref={titleRef}>
            <div className="flex justify-center items-center px-16 py-12 mt-12 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full max-sm:py-0">
                <div className="flex flex-col my-1.5 max-w-full w-[1296px]">
                    <div
                        // className="self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl"
                        className={` self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className=" leading-[58px]">Our</span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Clients
                        </span>
                    </div>

                    <div className="justify-center mt-12 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 grid lg:grid-cols-3 gap-4 flex-wrap max-md:flex-col  md:grid-cols-2  max-sm:grid-col-1 sm:grid-cols-1">
                            {data && data.length > 0 ? (
                                <>
                                    {data?.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                                        <div className="flex grow flex-auto max-md:ml-0 max-md:w-full " key={index}>
                                            <div
                                                // className="grow px-5 py-6 w-full bg-white rounded-xl hover:shadow-2xl hover:border-0 max-md:pr-5 max-md:mt-8  border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]"
                                                // className="grow px-5 py-6 w-full bg-white rounded-xl client_zoomin hover:border-0 max-md:pr-5 max-md:mt-8  border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]"
                                                className="grow px-5 py-6 w-full bg-white rounded-xl max-md:pr-5 max-md:mt-8  border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]"
                                            >
                                                <div className="flex gap-5  max-md:gap-0 ">
                                                    <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full max-xs:items-center max-xs:w-full">
                                                        <img
                                                            loading="lazy"
                                                            src={item?.client_logo}
                                                            // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                            // className="rounded-full aspect-square w-[92px] max-md:mt-10"
                                                            className="rounded-full aspect-square w-[92px]"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                                                        <div
                                                            className="flex flex-col self-stretch my-auto "
                                                        //  className="flex flex-col self-stretch my-auto max-md:mt-10"
                                                        >
                                                            <div className="text-lg font-medium text-zinc-800 text-start">
                                                                {item?.title}
                                                            </div>
                                                            <div className="mt-2.5 text-base text-zinc-600 font-medium flex ">

                                                                <img
                                                                    src={Images.home_location_pin}
                                                                    alt=''
                                                                    className='w-5 h-5 me-1'
                                                                />
                                                                {item?.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (

                                <>
                                    {counterData.map((item, index) => (
                                        <div className="flex grow flex-auto max-md:ml-0 max-md:w-full " key={index}>
                                            <div
                                                // className="grow px-5 py-6 w-full bg-white rounded-xl hover:shadow-2xl hover:border-0 max-md:pr-5 max-md:mt-8  border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]"
                                                // className="grow px-5 py-6 w-full bg-white rounded-xl client_zoomin hover:border-0 max-md:pr-5 max-md:mt-8  border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]"
                                                className="grow px-5 py-6 w-full bg-white rounded-xl max-md:pr-5 max-md:mt-0 border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]"
                                            >
                                                <div className="flex gap-5  max-md:gap-0 ">
                                                    <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full max-xs:items-center max-xs:w-full">
                                                        <img
                                                            loading="lazy"
                                                            src={item?.img}
                                                            // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5475ee4516883935b6c580dca762d49a612853d06726f68c7ae69be8149c25fd?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                            // className="rounded-full aspect-square w-[92px] max-md:mt-10"
                                                            className="rounded-full aspect-square w-[92px]"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                                                        <div
                                                            className="flex flex-col self-stretch my-auto "
                                                        //  className="flex flex-col self-stretch my-auto max-md:mt-10"
                                                        >
                                                            <div className="text-lg font-medium text-zinc-800">
                                                                {item?.title}
                                                            </div>
                                                            <div className="mt-2.5 text-base text-zinc-600 font-medium flex ">

                                                                <img
                                                                    src={Images.home_location_pin}
                                                                    alt=''
                                                                    className='w-5 h-5 me-1'
                                                                />
                                                                {item?.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                        </div>
                    </div>
                    {/* <button onClick={handlePrevClick}>Previous</button>
                    <button onClick={handleNextClick}>Next</button> */}
                    {data?.length > 6 && (
                        <div className="flex gap-3 self-center mt-12 max-md:mt-10">
                            <button
                                onClick={handlePrevClick}
                                className="exit focus:outline-none flex flex-1 justify-center items-center ">

                                <svg
                                    className=' exitHover w-12 h-12 p-3 rounded-full bg-white hover:bg-orange-500'
                                    xmlns="http://www.w3.org/2000/svg" version="1.0"
                                     width="24"
                                    height="24" 
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        // fill="#000000" 
                                        stroke="none">
                                        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                    </g>
                                </svg>
                            </button>
                            <button
                                onClick={handleNextClick}
                                className="exit  focus:outline-none flex flex-1 justify-center items-center "
                            >
                                <svg
                                    className=' exitHover w-12 h-12 p-3 rounded-full bg-white hover:bg-orange-500'
                                    xmlns="http://www.w3.org/2000/svg" version="1.0"
                                     width="24"
                                    height="24" 
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                        <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>


        </section >
    )
}

export default UpdatedAnimatedComponent(Clients)