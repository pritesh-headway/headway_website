import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Images from '../../../assets';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const SuccessStory = () => {

    // const settings = {
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     centerPadding: '0px',
    //     speed: 500,
    //     dots: true,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 centerMode: false
    //             }
    //         }
    //     ]
    // };

    // const settings = {
    //     infinite: true,
    //     focusOnSelect: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     centerPadding: '25%',
    //     speed: 500,
    //     dots: true,
    //     arrows: false,
    //     appendDots: dots => (
    //         <>
    //             <div className='flex items-center justify-center mt-5'>
    //                 <div className="flex gap-3 self-center flex-row items-center justify-center">
    //                     <div
    //                         onClick={previous}
    //                         className="cursor-pointer exit flex flex-1 justify-center items-center ">

    //                         <svg
    //                             style={{ border: 0 }}
    //                             className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
    //                             xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

    //                             <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    //                                 stroke="none">
    //                                 <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
    //                             </g>
    //                         </svg>
    //                     </div>
    //                     <div
    //                         style={{
    //                             //  backgroundColor: "#ddd",
    //                             //  borderRadius: "10px",
    //                             //   padding: "10px"
    //                         }}
    //                         className='flex justify-center items-center flex-row '
    //                     >
    //                         <ul className='flex p-1 items-center'> {dots} </ul>

    //                     </div>
    //                     <div
    //                         onClick={next}
    //                         className="exit cursor-pointer  flex flex-1 justify-center items-center "
    //                     >
    //                         <svg
    //                             style={{ border: 0 }}
    //                             className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
    //                             xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

    //                             <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
    //                                 <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
    //                             </g>
    //                         </svg>
    //                     </div>

    //                 </div>
    //             </div>
    //         </>
    //     ),
    //     customPaging: i => (
    //         <div
    //             style={{
    //             }}
    //             className='rounded-full p-2 custom_paging m-0.5'
    //         >
    //             {/* {i + 1} */}
    //         </div>
    //     ),
    //     // appendDots: dots => {
    //     //     return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} className="border border-pink-800"/>;
    //     //   },
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 centerMode: true,
    //                 centerPadding: '20%',
    //             }
    //         }
    //     ]
    // };

    const settings = {
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        speed: 500,
        dots: false,
        arrows: false,
        appendDots: dots => (
            <>
                <div className='flex items-center justify-center mt-5'>
                    <div className="flex gap-3 self-center flex-row items-center justify-center">
                        <div
                            onClick={previous}
                            className="cursor-pointer exit flex flex-1 justify-center items-center ">

                            <svg
                                style={{ border: 0 }}
                                className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                </g>
                            </svg>
                        </div>
                        <div
                            style={{
                                //  backgroundColor: "#ddd",
                                //  borderRadius: "10px",
                                //   padding: "10px"
                            }}
                            className='flex justify-center items-center flex-row '
                        >
                            <ul className='flex p-1 items-center'> {dots} </ul>

                        </div>
                        <div
                            onClick={next}
                            className="exit cursor-pointer  flex flex-1 justify-center items-center "
                        >
                            <svg
                                style={{ border: 0 }}
                                className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                    <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
                                </g>
                            </svg>
                        </div>

                    </div>
                </div>
            </>
        ),
        customPaging: i => (
            <div
                style={{
                }}
                className='rounded-full p-2 custom_paging m-0.5'
            >
                {i + 1}
            </div>
        ),
    };

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const companyImg = [
        {
            id: 1,
            imageUrl: `${Images.Make_mmb1}`,
            title: "Slide 1",
            description: "Description for slide 1"
        },
        {
            id: 2,
            imageUrl: `${Images.Make_mmb2}`,
            title: "Slide 2",
            description: "Description for slide 2"
        },
        {
            id: 3,
            imageUrl: `${Images.mmb_module1}`,
            title: "Slide 3",
            description: "Description for slide 3"
        },
        {
            id: 4,
            imageUrl: `${Images.mmb_module2}`,
            title: "Slide 4",
            description: "Description for slide 3"
        },
        {
            id: 5,
            imageUrl: `${Images.mmb_module3}`,
            title: "Slide 5",
            description: "Description for slide 3"
        },
        {
            id: 6,
            imageUrl: `${Images.mmb_module4}`,
            title: "Slide 5",
            description: "Description for slide 3"
        },
        {
            id: 7,
            imageUrl: `${Images.mmb_module5}`,
            title: "Slide 5",
            description: "Description for slide 3"
        },

    ]


    const Image = {
        main: `${Images.Make_mmb1}`,
        overlay1: `${Images.Make_mmb2}`,
        overlay2: `${Images.mmb_module1}`,
        overlay3: `${Images.mmb_module2}`,
    };


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === companyImg.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? companyImg.length - 1 : prevIndex - 1));
    };

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col pb-10 mt-6 max-w-full w-[1296px]">
                    <div className="self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl">
                        <span className=" leading-[58px]">Our</span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Success Story
                        </span>
                    </div>

                    <div className="mt-6 text-lg text-center text-zinc-600 max-md:max-w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </div>
                    {/* <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&"
                        className="mt-28 w-full aspect-[3.13] max-md:mt-10 max-md:max-w-full"
                        alt=''
                    />
                    <div className="flex gap-3 self-center mt-6">
                        <div className="flex justify-center items-center px-3.5 bg-white aspect-square h-[42px] rounded-[160px] w-[42px]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/987aae4ebfe7ea76166750320777bedb30ea2c876cb0d41454d993575e04a76b?apiKey=8e5983036f284a13866aae97819cdb73&"
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                        <div className="flex gap-2.5 p-2 my-auto">
                            <div className="flex flex-col justify-center aspect-square">
                                <div className="shrink-0 h-3 bg-orange-500 rounded-full" />
                            </div>
                            <div className="w-3 h-3" />
                            <div className="w-3 h-3" />
                            <div className="w-3 h-3" />
                            <div className="w-3 h-3" />
                        </div>
                        <div className="flex justify-center items-center px-3.5 bg-orange-500 aspect-square h-[42px] rounded-[160px] w-[42px]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/043a2c81d01fea3fa4dd5de1b704656d2d69f81f23e3f538b6bf5160cc207c61?apiKey=8e5983036f284a13866aae97819cdb73&"
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </div> */}

                    {/* <Slider
                        {...settings}
                        ref={slider => {
                            sliderRef = slider;
                        }}>
                        {companyImg.map((item, index) => (
                            <div className="flex z-10 gap-5 justify-between px-3 mt-0 max-md:flex-wrap max-md:max-w-full rounded-lg mb-10 ">

                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow self-stretch p-8 mx-auto w-full bg-white rounded-2xl shadow-2xl shadow-orange-50 max-md:pl-5 max-md:mt-8">
                                        <div className="flex gap-3 justify-between">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="w-12 aspect-square"
                                                alt=''
                                            />
                                            <div className="flex flex-col flex-1">
                                                <div className="text-base font-medium leading-6 text-zinc-800">
                                                    Dianne Russell
                                                </div>
                                                <div className="mt-1 text-sm leading-5 text-neutral-400">
                                                    Donware
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-base text-zinc-600">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s
                                        </div>
                                        <div className="flex gap-1 mt-5 max-w-full w-[136px]">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8c8becf07ced6d792269411af550471a0bbb0eb0e59466349369fe249d5c6f?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="flex-1 shrink-0 w-full aspect-square"
                                                alt=''
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8c8becf07ced6d792269411af550471a0bbb0eb0e59466349369fe249d5c6f?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="flex-1 shrink-0 w-full aspect-square"
                                                alt=''
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8c8becf07ced6d792269411af550471a0bbb0eb0e59466349369fe249d5c6f?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="flex-1 shrink-0 w-full aspect-square"
                                                alt=''
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8c8becf07ced6d792269411af550471a0bbb0eb0e59466349369fe249d5c6f?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="flex-1 shrink-0 w-full aspect-square"
                                                alt=''
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8c8becf07ced6d792269411af550471a0bbb0eb0e59466349369fe249d5c6f?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="flex-1 shrink-0 w-full aspect-square"
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider> */}
                    {/* <div className='mt-10'>
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            {companyImg.map((item, index) => (
                                <div key={index} className="slider-item">
                                    <img
                                        loading="lazy"
                                        src={item.imageUrl}
                                        alt=''
                                        className="slider-image"
                                    />


                                </div>
                            ))}
                        </Slider>
                    </div> */}
                    {/* <div className="flex gap-3 self-center mt-10">
                        <div
                            onClick={previous}
                            className="cursor-pointer exit flex flex-1 justify-center items-center ">

                            <svg
                                className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                </g>
                            </svg>
                        </div>

                        <div
                            onClick={next}
                            className="exit cursor-pointer  flex flex-1 justify-center items-center "
                        >
                            <svg
                                className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                    <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
                                </g>
                            </svg>
                        </div>
                    </div> */}
                    {/* <div className="slider-item">
                        <img
                            loading="lazy"
                            src={Images.Make_mmb1}
                            alt=''
                            className="slider-image"
                        />


                    </div> */}

                </div>
            </div>
            {/* <div className="image-container">
                <img src={Images.mmb_module3} alt="Overlay Image 1"
                    className="overlay-image-left-left"

                />
                <img src={Images.Make_mmb2} alt="Overlay Image 1"
                    className="overlay-image-left"
                />
                <img src={Images.Make_mmb1} alt="Main Image" className="main-image" />
                <img src={Images.mmb_module1} alt="Overlay Image 2"
                    className="overlay-image-right"
                />
                <img src={Images.mmb_module3} alt="Overlay Image 1"
                    className="overlay-image-right-right"


                />
            </div> */}

            {/* <div className='mt-10'>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {companyImg.map((item, index) => (
                        <div key={index} className="slider-item">
                            <img
                                loading="lazy"
                                src={item.imageUrl}
                                // alt=''
                                // className="slider-image"
                                alt={`slide ${index}`}
                                className={index === currentIndex ? 'active ' : 'slider-image'}
                            />
                        </div>
                    ))}
                </Slider>


            </div> */}


            {/* <div className="slider-container">
                <div className="slider ">
                    {companyImg.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageUrl}
                            alt={`slide ${index}`}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                </div>
                <button onClick={prevSlide} className="prev-button">
                    Prev
                </button>
                <button onClick={nextSlide} className="next-button">
                    Next
                </button>
            </div> */}
            <div className="slider-container">
                {/* <button onClick={prevSlide} className="prev-button">
                    Prev
                </button> */}
                <div className="image-container" >
                    {companyImg.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageUrl}
                            alt={`slide ${index}`}
                            className={` ${index === currentIndex ? 'slider-image active' : 'slider-not-currentimage'}`}
                            style={{ transform: `translateX(${currentIndex * 50}%)` }}
                        />
                    ))}
                </div>
                {/* <button onClick={nextSlide} className="next-button">
                    Next
                </button> */}

                <div className='flex items-center justify-center mt-5 '>
                    <div className="flex gap-3 self-center flex-row items-center justify-center">
                        <div
                            // onClick={previous}
                            onClick={prevSlide}
                            className="cursor-pointer exit flex flex-1 justify-center items-center ">

                            <svg
                                style={{ border: 0 }}
                                className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                </g>
                            </svg>
                        </div>
                        <div
                            style={{
                            }}
                            className='flex justify-center items-center flex-row '
                        >
                            {companyImg.map((_, index) => (
                                <ul className='flex p-1 items-center custom_dots_section'
                                    onClick={() => handleClick(index)}
                                    key={index}
                                >
                                    {index + 1}
                                </ul>
                            ))}

                        </div>
                        <div
                            // onClick={next}
                            onClick={nextSlide}
                            className="exit cursor-pointer  flex flex-1 justify-center items-center "
                        >
                            <svg
                                style={{ border: 0 }}
                                className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                    <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
                                </g>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SuccessStory