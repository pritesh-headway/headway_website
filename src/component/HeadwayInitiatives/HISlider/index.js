import React, { useEffect, useRef, useState } from 'react';
import *  as Images from '../../../assets';
import Slider from 'react-slick';
import $ from 'jquery';
import { fetchWithFormData } from '../../../apiGeneralFunction';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const HISlider = ({ titleRef, isVisible }) => {

    // const titleRef = useRef(null);
    let sliderRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        let visible = true;

        // jQuery event handler
        $('#show').click(function () {
            visible = !visible;
            if (visible) {
                $(".collapsible").addClass("collapsed");
            } else {
                $(".collapsible").removeClass("collapsed");
            }
        });

        // Cleanup function to remove event listener
        return () => {
            $('#show').off('click');
        };
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "-100px",
        // autoplay:true,
        slidesToShow: 3,
        speed: 500,
        //     autoplaySpeed: 2000,
        // cssEase: "linear",
        // fade: true,

        swipeToSlide: true,
        rtl: true,

        afterChange: function (index) {
            // console.log(
            //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             centerMode: true,
        //             centerPadding: '40px',
        //         }
        //     }
        // ]
    };

    const companyImg = [
        `${Images.headway_initiate_1}`,
        `${Images.headway_initiate_2}`,
        `${Images.headway_initiate_3}`,
        `${Images.headway_initiate_1}`,
        `${Images.headway_initiate_2}`,
        `${Images.headway_initiate_3}`,


    ];

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };



    useEffect(() => {

                const formData = new FormData();

        fetchWithFormData('ssu_gallaries', formData)
            // .then(data => setData(data[0].data))
            .then(data => {
                if (data?.status === true) {
                     setData(data?.data);
                }
                else {
                    // console.error('Status is not true:', data?.status);
                    setData(null);
                }
            })
            .catch(
                // error => console.error('Error fetching data:', error)
                );

    }, []);



    return (
        <>
            <section ref={titleRef}>
                <div className="flex justify-center items-center px-16 py-12 w-full text-5xl font-medium max-md:px-5 max-md:max-w-full max-md:text-4xl">
                    <div className=" flex flex-col my-6 max-w-full w-[1296px] max-md:text-4xl">
                        {/* <div
                            // className="max-md:max-w-full max-md:text-4xl"
                            className={`max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >
                            <span className=" leading-[58px] text-zinc-800">All </span>{" "}
                            <span className="font-bold text-orange-500 leading-[58px]">
                                Sessions
                            </span>
                        </div> */}
                        <div className="flex gap-5 justify-between max-w-full w-[1296px] max-md:flex-wrap max-md:mb-10 max-sm:w-full ">
                            <div className="flex items-center gap-5 max-sm:gap-3">
                                <img
                                    src={Images.ssu_logo}
                                    alt=''
                                    className='w-48 h-24 max-sm:w-36 max-sm:h-20'
                                />
                                <div
                                    // className="flex-auto text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                                    className={` text-wrap text-5xl font-medium max-md:max-w-full max-md:text-4xl max-sm:text-3xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    <span className=" leading-[58px] max-sm:leading-[40px]">Suvarna Saubhagya Utsav  </span>
                                    <span className="font-bold text-orange-500 leading-[58px]">
                                        (SSU)
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3 self-center max-md:self-end text-end  ">
                                <div
                                    onClick={previous}
                                    className="cursor-pointer exit flex flex-1 justify-center items-center ">

                                    <svg
                                        className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                        xmlns="http://www.w3.org/2000/svg" version="1.0"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            stroke="none">
                                            <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    onClick={next}
                                    id="show"
                                    className="exit cursor-pointer  flex flex-1 justify-center items-center "
                                >
                                    <svg
                                        className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                        xmlns="http://www.w3.org/2000/svg" version="1.0"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                            <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <div className='  ' style={{ transform: 'none !important' }}>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >

                    {data && data?.length > 0 ? (
                        data?.map((item, index) => (
                            <div
                                className="px-5 "
                                style={{ transform: 'none' }}
                                key={index}
                            >
                                <img src={item?.image} alt="Images"
                                    loading="lazy"
                                />
                            </div>
                        ))
                    ) : (
                        companyImg?.map((item, index) => (
                            <div
                            className="px-5 "
                            style={{ transform: 'none' }}
                            key={index}
                        >
                            <img src={item} alt="Images"
                                loading="lazy"
                            />
                        </div>
                        ))
                    )}


                </Slider>
            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(HISlider)