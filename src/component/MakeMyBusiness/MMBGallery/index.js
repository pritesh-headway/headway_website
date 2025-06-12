import React, { useState, useEffect, useRef } from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import Slider from 'react-slick';
import { fetchData } from '../../../apiGeneralFunction';

const MMBGallery = ({ titleRef, isVisible }) => {

    let sliderRef = useRef(null);


    const Image = [
        // `${Images.mmb_module1}`,
        // `${Images.mmb_module2}`,
        // `${Images.mmb_module3}`,
        // `${Images.mmb_module4}`,
        // `${Images.mmb_module5}`,
        // `${Images.mmb_module6}`,
        `${Images.mmb_gallery_one}`,
        `${Images.mmb_gallery_two}`,
        `${Images.mmb_gallery_three}`,
    ]

    const [myIndex, setMyIndex] = useState(0);

    const lastIndex = Image.length - 1;

    // useEffect(() => {
    //    const carouselInterval = setInterval(() => {
    //        setMyIndex((prevIndex) => (prevIndex + 1) % Image.length); 

    //    }, 2000);

    //    return () => clearInterval(carouselInterval);
    // }, [Image.length]);

    const handlePrevClick = () => {
        // setMyIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); 
        const newIndex = (myIndex - 1 + Image.length) % Image.length;
        setMyIndex(newIndex);
        // console.log("previous image", newIndex, myIndex);
    };

    const handleNextClick = () => {
        // setMyIndex((prevIndex) => (prevIndex + 1) % Images.length); 
        const newIndex = (myIndex + 1) % Image.length;
        setMyIndex(newIndex);
    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                }
            }
        ]
    };



    return (
        <>
            <section className=" flex justify-center items-center px-16 mb-10 max-md:px-5" ref={titleRef}>

                <div className=" flex flex-col max-w-full w-[1296px]">
                    <div className='my-10 flex justify-between items-center w-full'>
                        <h2
                            // className="self-center text-5xl  max-md:text-4xl"
                            className={`self-center text-5xl  max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >
                            <span className="text-zinc-800">MMB </span>{" "}
                            <span className="text-orange-500 font-bold"> Gallery</span>
                        </h2>

                        <div className='flex  items-center  '>
                            <button className="w-fit -ms-4 focus:outline-0 foculs:border-0" onClick={handlePrevClick} >
                                <i className="px-4 py-3 fa fa-angle-left rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                            <button className="w-fit -me-4 focus:outline-0 foculs:border-0" onClick={handleNextClick}>
                                <i className="px-4 py-3 fa fa-angle-right rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div>

                <div className="w3-content w3-section"
                >
                    <div className='flex flex-row flex-wrap gap-5 items-center justify-center'>
                        {Image.map((item, index) => {
                            const lastIndex = Image.length - 1;
                            let prevIndex = index === 0 ? lastIndex : index - 1;
                            let nextIndex = index === lastIndex ? 0 : index + 1;
                        
                            if (index === lastIndex) {
                                prevIndex = index - 1;
                                nextIndex = 0;
                            }
                        
                            if (index === 0) {
                                prevIndex = lastIndex;
                                nextIndex = 1;
                            }
                            return (
                                <>

                                    <img

                                        className="mySlides"
                                        src={item}
                                        style={{
                                            width: '30%',
                                            display: myIndex === prevIndex ? 'block' : 'none'
                                        }}
                                        alt="Los Angeles"
                                        // key={index}
                                        key={prevIndex}
                                        
                                    />
                                    <img
                                        className="mySlides"
                                        src={item}
                                        style={{
                                            width: '30%',
                                            display: myIndex === index ? 'block' : 'none'
                                        }}
                                        alt="Los Angeles"
                                        key={index}
                                    />

                                    <img
                                        className="mySlides"
                                        src={item}
                                        style={{
                                            width: '30%',
                                            display: myIndex === nextIndex ? 'block' : 'none'
                                        }}
                                        alt="Los Angeles 123"
                                        // key={index}
                                        key={nextIndex}
                                    />

                                </>
                            )

                        })}

                    </div>
                    <img
                        className="mySlides"
                        src={Images.mmb_module1}
                        style={{ width: '50%', display: myIndex === 0 ? 'block' : 'none' }}
                        alt="Los Angeles"
                    />
                    <img
                        className="mySlides"
                        src={Images.mmb_module2}
                        style={{ width: '50%', display: myIndex === 1 ? 'block' : 'none' }}
                        alt="New York"
                    />
                    <img
                        className="mySlides"
                        src={Images.mmb_module3}
                        style={{ width: '50%', display: myIndex === 2 ? 'block' : 'none' }}
                        alt="Chicago"
                    />
                </div>
            </div> */}
            <div className='  ' style={{ transform: 'none !important' }}>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >

                    {/* {companyImg.map((item, index) => (

                        <div
                            className="px-5 "
                            style={{ transform: 'none' }}

                            key={index}
                        >
                            <img src={item} alt=""
                                loading="lazy"
                            />
                        </div>
                    ))} */}

                </Slider>

               
            </div>
        </>
    );
}

export default UpdatedAnimatedComponent(MMBGallery);
