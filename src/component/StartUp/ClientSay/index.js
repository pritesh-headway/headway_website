import React, { useRef } from 'react';
import * as Images from '../../../assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const ClientSay = ({ titleRef, isVisible, data }) => {


    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         },

    //     ],
    // };

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        speed: 500,
        dots: true,
        arrows: false,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             centerMode: false
        //         }
        //     }
        // ]
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,

        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             centerMode: false
        //         }
        //     },
        //     {
        //         breakpoint: 480, 
        //         settings: {
        //             slidesToShow: 1,
        //             centerMode: false
        //         }
        //     }
        // ]
        responsive: [
            {
                breakpoint: 1200, // For large desktops
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992, // For medium-sized desktops
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For tablets
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
    };

    const companyImg = [
        {
            id: 1,
            imageUrl: `${Images.startup_icon_one}`,
            title: `Sangeeta Jewellers, Bhavnagar`,
            name: 'Gaurav Lumbhani',
            // description: `Big thanks to Headway for helping us overcome our business challenges! We used
            // to struggle with marketing, sales, and reaching customers. With Paresh sir's
            // guidance, we've seen a huge increase in customer engagement and sales. Now
            // more customers are coming to us! Grateful for Headway’s guidance and support!!`,
            description: `Headway really helped my jewellery store when it was having problems. 
             They gave me special solutions that made things easier and turned tough times into chances to grow. I'm so thankful for their great advice!`
        },
        {
            id: 2,
            imageUrl: `${Images.startup_icon_two}`,
            title: `Aai Shree khodiyar Jewellers, Vyara`,
            name: 'Piyush Lumbhani',
            // description: `If you're ready to turn business success dreams into reality, Headway Business
            // Solutions is your golden ticket. When we were in a critical stage, Headway took my
            // business back to life! Working with Paresh sir has really been a game-changer
            // experience for us. Grateful!`
            description: `Headway's guidance was the secret element our jewellery showroom very much needed. 
            Their advice and actionable steps transformed our business operations for good. Thanks to their training programs, 
            we saw increased staff efficiency and profitability. Forever grateful to the team Headway!`
        },
        {
            id: 3,
            imageUrl: `${Images.startup_icon_three}`,
            name: 'Siddharth kataria',
            title: `Mahaveer Jewellers, Ahmedabad`,
            // description: `Headway really helped my jewellery store when it was having problems. They gave
            // me special solutions that made things easier and turned tough times into chances to
            // grow. I'm so thankful for their great advice!`
            // description: `Thank you Headway for making my jewellery business grow exponentially. 
            // The trainer's strategic insights and customized solutions not only increased our sales but also improved our brand presence, making them a valuable partner in our success story.`
            description: `Big thanks to Headway for helping us overcome our business challenges! We used 
            to struggle with marketing, sales, and reaching customers. With Paresh sir's 
            guidance, we've seen a huge increase in customer engagement and sales. Now 
            more customers are coming to us! Grateful for Headway’s guidance and support!`
        },
        {
            id: 4,
            imageUrl: `${Images.startup_icon_four}`,
            name: 'Dhaval Soni',
            title: `N. K. Jewellers, Vadodara`,
            // description: `Headway's guidance was the secret element our jewellery showroom very much
            // needed. Their advice and actionable steps transformed our business operations for
            // good. Thanks to their training programs, we saw increased staff efficiency and
            // profitability. Forever grateful to the team Headway!`
            // description: `Headway really helped our jewellery business succeed. Mr. Paresh Rajpara knows a 
            // lot about the industry, and his guidance with smart strategies made a big difference in our growth and success.`
            description: `If you're ready to turn business success dreams in to reality, Headway Business Solutions is your golden ticket.
            When we were in a critical stage, Headway took my business back to life! Working with Paresh sir has really been a game-changer
            experience for us. Grateful!`
        },
        // {
        //     id: 5,
        //     imageUrl: `${Images.home2_sub5}`,
        //     name:'CMS  Jewellers',
        //     title: `Client’s name, Jeweller's name (city)`,
        //     // description: `Thank you Headway for making my jewellery business grow exponentially. The
        //     // trainer's strategic insights and customized solutions not only increased our sales but
        //     // also improved our brand presence, making them a valuable partner in our success
        //     // story.`
        //     description: `Thank you Headway for making my jewellery business grow exponentially. The
        //     trainer's strategic insights and customized solutions not only increased our sales but
        //     also improved our brand presence, making them a valuable partner in our success
        //     story.`
        // },
        // {
        //     id: 6,
        //     imageUrl: `${Images.home2_sub5}`,
        //     title: `Client’s name, Jeweller's name (city)`,
        //     // description: `Headway really helped our jewellery business succeed. Mr. Paresh Rajpara knows a
        //     // lot about the industry, and his guidance with smart strategies made a big difference
        //     // in our growth and success.`
        //     description: `Headway really helped our jewellery business succeed. Mr. Paresh Rajpara knows a
        //     lot about the industry, and his guidance with smart strategies made a big difference
        //     in our growth and success.`
        // }
    ]

    // console.log("startuop client", data);

    return (
        <>

            <div className="flex flex-col pb-12 max-sm:pb-0" ref={titleRef}>
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 w-full  min-h-[284px] max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3ff303f32b720d222d4d36823394558c005d5f681cbf2f17af6dd2e3967450?"
                        className="object-cover absolute inset-0 size-full"
                        alt="Images"
                    />
                    <div className="flex relative gap-5 justify-between mt-6 mb-10 max-w-full w-[1296px] max-md:flex-wrap max-md:mb-10 max-sm:mb-0">
                        <div
                            // className="flex-auto text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                            className={`text-start flex-auto text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >
                            <span className=" leading-[58px]">What Our </span>
                            <span className="font-bold text-orange-500 leading-[58px]">
                                Clients Say About Us?
                            </span>
                        </div>
                        <div className="flex gap-3 self-center">
                            <div
                                onClick={previous}
                                className="cursor-pointer exit flex flex-1 justify-center items-center ">

                                <svg
                                    className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                    xmlns="http://www.w3.org/2000/svg" version="1.0" width="24"
                                    height="24" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

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
                                    xmlns="http://www.w3.org/2000/svg" version="1.0" width="24"
                                    height="24" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                                        <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
                                    </g>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className='border border-blue-500'> */}
                <Slider
                    {...settings}
                    ref={slider => {
                        sliderRef = slider;
                    }}>
                    {data?.length > 0 ? (
                        data.map((item, index) => (
                            <div className="text-start h-full flex items-center justify-center z-10 gap-5 justify-between px-3 mt-0 max-md:flex-wrap max-md:max-w-full rounded-lg max-sm:mb-0 mb-5"
                                key={index}
                            >

                                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                    <div
                                        className="flex flex-col grow p-8 mx-auto w-full self-stretch h-[400px] bg-white  rounded-2xl shadow-2xl shadow-orange-100 max-md:pl-5 max-md:mt-8"
                                    //  className="flex flex-col grow p-8 mx-auto w-full self-stretch bg-white  rounded-2xl shadow-2xl shadow-orange-100 max-md:pl-5 max-md:mt-8"
                                    >
                                        <div className="flex gap-3 justify-between">
                                            <img
                                                loading="lazy"
                                                // src={item.imageUrl}
                                                src={item?.image}
                                                className="w-16 h-14 aspect-square"
                                                alt={item?.name}
                                            />
                                            <div className="flex flex-col flex-1 grow">
                                                <div className="text-base font-medium leading-6 text-zinc-800">
                                                    {item?.name}
                                                </div>
                                                <div className="mt-1 text-sm leading-5 text-neutral-400" >
                                                    {item?.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-base text-zinc-600 flex-1 grow">
                                            {item?.comment}
                                        </div>
                                        <div className="flex gap-1 mt-2 max-w-full w-[136px]">
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
                        ))
                    )
                        : (
                            companyImg.map((item, index) => (
                                <div className=" h-full flex z-10 gap-5 justify-between px-3 mt-0 max-md:flex-wrap max-md:max-w-full rounded-lg mb-10 max-sm:mb-0"
                                    key={index}
                                >

                                    <div className="flex flex-col max-md:ml-0 max-md:w-full ">
                                        <div className="flex flex-col grow self-stretch p-8 mx-auto w-full bg-white rounded-2xl shadow-2xl shadow-orange-50 max-md:pl-5 max-md:mt-8">
                                            <div className="flex gap-3 justify-between">
                                                <img
                                                    loading="lazy"
                                                    src={item.imageUrl}

                                                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1849dff81c30016140e2c23a4bd99fe9224769a4733e249d47d75ac297f885bf?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                    className="w-12 aspect-square"
                                                    alt='Image'
                                                />
                                                <div className="flex flex-col flex-1">
                                                    <div className="text-base font-medium leading-6 text-zinc-800">
                                                        {item?.name}
                                                    </div>
                                                    <div className="mt-1 text-sm leading-5 text-neutral-400">
                                                        {item?.title}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 text-base text-zinc-600">
                                                {item?.description}
                                            </div>
                                            <div className="flex gap-1 mt-2 max-w-full w-[136px]">
                                                {[...Array(5)].map((_, i) => (
                                                    <img
                                                        key={i}
                                                        loading="lazy"
                                                        src={
                                                            i < (item.rating || 0)
                                                                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ec8c8becf07ced6d792269411af550471a0bbb0eb0e59466349369fe249d5c6f?apiKey=8e5983036f284a13866aae97819cdb73&" // filled star
                                                                : "https://cdn.builder.io/api/v1/image/assets/TEMP/empty-star.png" // empty star (replace with your empty star image)
                                                        }
                                                        className="flex-1 shrink-0 w-full aspect-square"
                                                        alt={i < (item.rating || 0) ? 'Filled star' : 'Empty star'}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        )
                    }

                </Slider>
                {/* </div> */}
            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(ClientSay)