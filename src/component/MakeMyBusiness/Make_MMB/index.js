import React, { useRef } from "react";
import * as Images from '../../../assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const MakeMMB = ({ titleRef, isVisible }) => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
            },

        ],
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick}
                className="cursor-pointer exit flex flex-1 justify-center items-center ">

                <svg
                    className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                    xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        // fill="#000000" 
                        stroke="none">
                        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                    </g>
                </svg>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick}
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
        );
    }

    const companyImg = [
        {
            imageUrl: `${Images.Make_mmb1}`,
            title: "Slide 1",
            description: "Description for slide 1"
        },
        {
            imageUrl: `${Images.home2_sub2}`,
            title: "Slide 2",
            description: "Description for slide 2"
        },
        {
            imageUrl: `${Images.home2_sub3}`,
            title: "Slide 3",
            description: "Description for slide 3"
        },
        {
            imageUrl: `${Images.home2_sub4}`,
            title: "Slide 3",
            description: "Description for slide 3"
        },
        {
            imageUrl: `${Images.home2_sub5}`,
            title: "Slide 3",
            description: "Description for slide 3"
        }
    ]

    return (
        <>
            <div className="flex flex-col pb-12 bg-white" ref={titleRef}>
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-12 w-full fill-stone-50 min-h-[284px] max-md:px-5 max-md:max-w-full">
                    {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3ff303f32b720d222d4d36823394558c005d5f681cbf2f17af6dd2e3967450?"
                        className="object-cover absolute inset-0 size-full"
                        alt=""
                    /> */}
                    <div className="flex relative gap-5 justify-between mt-6 mb-20 max-w-full w-[1296px] max-md:flex-wrap max-md:mb-10">
                        <div 
                        // className="flex-auto text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`flex-auto text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >
                            <span className=" leading-[58px]">About </span>
                            <span className="font-bold text-orange-500 leading-[58px]">
                                Make My Business
                            </span>
                        </div>
                        <div className="flex gap-3 self-center">
                            <div
                                // onClick={handlePrevClick}
                                onClick={previous}
                                className="cursor-pointer exit flex flex-1 justify-center items-center ">

                                <svg
                                    className=' exitHover w-9 h-9 p-3 rounded-full bg-white hover:bg-orange-500'
                                    xmlns="http://www.w3.org/2000/svg" version="1.0" width="" height="" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        // fill="#000000" 
                                        stroke="none">
                                        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188 -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123 1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163 177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978 c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97 -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                    </g>
                                </svg>
                            </div>
                            <div
                                // onClick={handleNextClick}
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
                        </div>
                        {/* <div className="flex gap-3 self-start">
                            <div className="flex justify-center items-center px-3.5 bg-white aspect-square h-[42px] rounded-[160px] w-[42px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/987aae4ebfe7ea76166750320777bedb30ea2c876cb0d41454d993575e04a76b?"
                                    className="w-full aspect-square"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-center items-center px-3.5 bg-orange-500 aspect-square h-[42px] rounded-[160px] w-[42px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/043a2c81d01fea3fa4dd5de1b704656d2d69f81f23e3f538b6bf5160cc207c61?"
                                    className="w-full aspect-square"
                                    alt=""
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="flex z-10 gap-5 justify-between px-5 mt-0 max-md:flex-wrap max-md:max-w-full rounded-lg">
                    <div className="flex flex-col flex-1 pb-4 bg-white rounded-3xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]">
                        <div className="flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]">
                            <img
                                loading="lazy"
                                src={Images.Make_mmb1}
                                className="object-cover absolute inset-0 size-full rounded-t-lg"
                                alt=""
                            />
                            <div className="relative justify-center py-4 mt-44 backdrop-blur-[6px] bg-black bg-opacity-40 max-md:mt-10">
                                All About You
                            </div>
                        </div>
                        <div className="mt-4 text-base p-3 make_mmb_clr">
                            At Headway Business Solutions LLP, we believe that your business
                            goals are our business goals. Our highly experienced team of experts
                            have the knowledge and expertise to help you overcome any obstacle
                            standing between you and your desired success. We are committed to
                            providing impartial and practical assistance to ensure that you make
                            the most of every opportunity that comes your way. Whether you are
                            an established business looking to consolidate your position in the
                            market or a start-up looking for guidance, we are here to help.
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-4 bg-white rounded-3xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]">
                        <div className="flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]">
                            <img
                                loading="lazy"
                                src={Images.Make_mmb1}
                                className="object-cover absolute inset-0 size-full rounded-t-lg"
                                alt=""
                            />
                            <div className="relative justify-center py-4 mt-44 backdrop-blur-[6px] bg-black bg-opacity-40 max-md:mt-10">
                                All About You
                            </div>
                        </div>
                        <div className="mt-4 text-base p-3 make_mmb_clr">
                            At Headway Business Solutions LLP, we believe that your business
                            goals are our business goals. Our highly experienced team of experts
                            have the knowledge and expertise to help you overcome any obstacle
                            standing between you and your desired success. We are committed to
                            providing impartial and practical assistance to ensure that you make
                            the most of every opportunity that comes your way. Whether you are
                            an established business looking to consolidate your position in the
                            market or a start-up looking for guidance, we are here to help.
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-4 bg-white rounded-3xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]">
                        <div className="flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]">
                            <img
                                loading="lazy"
                                src={Images.Make_mmb1}
                                className="object-cover absolute inset-0 size-full rounded-t-lg"
                                alt=""
                            />
                            <div className="relative justify-center py-4 mt-44 backdrop-blur-[6px] bg-black bg-opacity-40 max-md:mt-10">
                                All About You
                            </div>
                        </div>
                        <div className="mt-4 text-base p-3 make_mmb_clr">
                            At Headway Business Solutions LLP, we believe that your business
                            goals are our business goals. Our highly experienced team of experts
                            have the knowledge and expertise to help you overcome any obstacle
                            standing between you and your desired success. We are committed to
                            providing impartial and practical assistance to ensure that you make
                            the most of every opportunity that comes your way. Whether you are
                            an established business looking to consolidate your position in the
                            market or a start-up looking for guidance, we are here to help.
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-4 bg-white rounded-3xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]">
                        <div className="flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]">
                            <img
                                loading="lazy"
                                src={Images.Make_mmb1}
                                className="object-cover absolute inset-0 size-full rounded-t-lg"
                                alt=""
                            />
                            <div className="relative justify-center py-4 mt-44 backdrop-blur-[6px] bg-black bg-opacity-40 max-md:mt-10">
                                All About You
                            </div>
                        </div>
                        <div className="mt-4 text-base p-3 make_mmb_clr">
                            At Headway Business Solutions LLP, we believe that your business
                            goals are our business goals. Our highly experienced team of experts
                            have the knowledge and expertise to help you overcome any obstacle
                            standing between you and your desired success. We are committed to
                            providing impartial and practical assistance to ensure that you make
                            the most of every opportunity that comes your way. Whether you are
                            an established business looking to consolidate your position in the
                            market or a start-up looking for guidance, we are here to help.
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-4 bg-white rounded-3xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]">
                        <div className="flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]">
                            <img
                                loading="lazy"
                                src={Images.Make_mmb1}
                                className="object-cover absolute inset-0 size-full rounded-t-lg"
                                alt=""
                            />
                            <div className="relative justify-center py-4 mt-44 backdrop-blur-[6px] bg-black bg-opacity-40 max-md:mt-10">
                                All About You
                            </div>
                        </div>
                        <div className="mt-4 text-base p-3 make_mmb_clr">
                            At Headway Business Solutions LLP, we believe that your business
                            goals are our business goals. Our highly experienced team of experts
                            have the knowledge and expertise to help you overcome any obstacle
                            standing between you and your desired success. We are committed to
                            providing impartial and practical assistance to ensure that you make
                            the most of every opportunity that comes your way. Whether you are
                            an established business looking to consolidate your position in the
                            market or a start-up looking for guidance, we are here to help.
                        </div>
                    </div>
                </div> */}
                {/* <div className="flex z-10 gap-5 justify-between px-5 mt-0 max-md:flex-wrap max-md:max-w-full rounded-lg"> */}
                <Slider
                    {...settings}
                    ref={slider => {
                        sliderRef = slider;
                    }}>
                    {companyImg.map((item, index) => (
                        <div className="flex z-10 gap-5 justify-between px-2 mt-0 max-md:flex-wrap max-md:max-w-full rounded-lg">
                            <div className="flex flex-col flex-1 pb-4 bg-white rounded-3xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)]">
                                {/* <div className="flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]">
                                    <img
                                        loading="lazy"
                                        src={Images.Make_mmb1}
                                        className="object-cover absolute inset-0 size-full rounded-t-lg"
                                        alt=""
                                    />
                                    <div className="relative justify-center py-4 xl:bottom-0 backdrop-blur-[6px] bg-black bg-opacity-40 max-md:mt-10">
                                        All About You
                                    </div>
                                </div> */}
                                <div 
                                className="container flex overflow-hidden relative flex-col pt-12 w-full text-2xl font-medium text-center text-white aspect-[0.97]"
                                >
                                    <img
                                        loading="lazy"
                                        src={Images.Make_mmb1}
                                        className="object-cover absolute inset-0 size-full rounded-t-lg"
                                        alt="Images" />
                                    <div className="overlay">All About You</div>
                                </div>
                                <div className="mt-4 text-base p-3 make_mmb_clr">
                                    At Headway Business Solutions LLP, we believe that your business
                                    goals are our business goals. Our highly experienced team of experts
                                    have the knowledge and expertise to help you overcome any obstacle
                                    standing between you and your desired success. We are committed to
                                    providing impartial and practical assistance to ensure that you make
                                    the most of every opportunity that comes your way. Whether you are
                                    an established business looking to consolidate your position in the
                                    market or a start-up looking for guidance, we are here to help.
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* </div> */}
            </div>
        </>
    );
}

export default UpdatedAnimatedComponent(MakeMMB)

