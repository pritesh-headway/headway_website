import React, { useEffect, useRef, useState } from 'react';
import './threeslider.css';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import * as Images from '../../../assets';
import { fetchData } from '../../../apiGeneralFunction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


const SuccessStoryThreeSlider = ({ titleRef, isVisible, data }) => {

    const swiperRef = useRef(null);

    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    // const [data, setData] = useState([]);

    // useEffect(() => {

    //     fetchData(`api/oss_gallaries`)
    //         // .then(data => setData(data[0].data))
    //         .then(data => {
    //             if (data?.status === true) {
    //                 setData(data?.data);
    //             }
    //             else {
    //                 console.error('Status is not true:', data?.status);
    //                 setData(null);
    //             }
    //         })
    //         .catch(error => console.error('Error fetching data:', error));

    // }, []);

    // console.log("oss galley startup api data", data)

    const [selectedItem, setSelectedItem] = useState(0);

    const images = [
        {
            id: 1,

            image: "https://admin.headway.org.in/images/oss_gallery/1713355440.webp"
        },
        {
            id: 2,

            image: "https://admin.headway.org.in/images/oss_gallery/1713355452.webp"
        },
        {
            id: 3,

            image: "https://admin.headway.org.in/images/oss_gallery/1713355464.webp"
        }
    ]

    const handlePrevious = () => {
        setSelectedItem((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedItem((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };




    return (
        <>
            <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full max-sm:py-0"
                ref={titleRef}
            >
                <div className="flex flex-col pb-10 mt-6 max-w-full w-[1296px]">
                    <div
                        // className="self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl "
                        className={`self-center text-5xl font-medium max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className=" leading-[58px]">Our</span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">
                            Success Story
                        </span>
                    </div>

                    <div className="mt-6 text-lg text-center text-zinc-600 max-md:max-w-full">
                        Headway&#39;s success is a testament to unwavering dedication, innovative strategies,
                        and a commitment to empowering businesses for enduring success.
                    </div>
                    <div className='three_slider_container mt-10 max-sm:mt-0 max-sm:py-0'>
                        {/* <div className="container ">
                            <input type="radio" name="slider" id="item-1" checked readOnly/>
                            <input type="radio" name="slider" id="item-2" />
                            <input type="radio" name="slider" id="item-3" />
                            <div className="cards max-sm:mb-0 ">
                                <label className="card" htmlFor="item-1" id="song-1">
                                    <img
                                        className='card_img h-auto'
                                        src={Images.startup_s_one}
                                        alt="song" 
                                        loading='lazy'
                                        
                                        />
                                </label>
                                <label className="card" htmlFor="item-2" id="song-2">
                                    <img
                                        className='card_img h-auto'
                                        src={Images.startup_s_two}
                                        alt="song" 
                                        loading='lazy'
                                        />
                                </label>
                                <label className="card" htmlFor="item-3" id="song-3">
                                    <img
                                        className='card_img h-auto'
                                        src={Images.startup_s_three}
                                        alt="song" 
                                        loading='lazy'
                                        />
                                </label>
                            </div>

                        </div> */}
                        {/* {data.map((item,index) => (
                            <div className="container ">
                            <input type="radio" name="slider" id="item-1" checked readOnly/>
                            <input type="radio" name="slider" id="item-2" />
                            <input type="radio" name="slider" id="item-3" />
                            <div className="cards max-sm:mb-0 ">
                                <label className="card" htmlFor="item-1" id="song-1">
                                    <img
                                        className='card_img h-auto'
                                        src={Images.startup_s_one}
                                        alt="song" 
                                        loading='lazy'
                                        
                                        />
                                </label>
                                <label className="card" htmlFor="item-2" id="song-2">
                                    <img
                                        className='card_img h-auto'
                                        src={Images.startup_s_two}
                                        alt="song" 
                                        loading='lazy'
                                        />
                                </label>
                                <label className="card" htmlFor="item-3" id="song-3">
                                    <img
                                        className='card_img h-auto'
                                        src={Images.startup_s_three}
                                        alt="song" 
                                        loading='lazy'
                                        />
                                </label>
                            </div>

                        </div>
                        ))} */}
                        {/* <div className="container ">
                            {data.map((image, index) => (
                                <input
                                    key={`item-${index + 1}`}
                                    type="radio"
                                    name="slider"
                                    id={`item-${index + 1}`}
                                    checked={selectedItem === index}
                                    readOnly
                                />
                            ))}
                            <div className="cards max-sm:mb-0">
                                {data.map((image, index) => (
                                    <label key={`label-${index + 1}`} className="card" htmlFor={`item-${index + 1}`} id={`song-${index + 1}`}>
                                        <img className="card_img h-auto" src={image.image} alt={`song-${index + 1}`} loading="lazy" />
                                    </label>
                                ))}
                            </div>
                            <button onClick={handlePrevious}>Previous</button>
                            <button onClick={handleNext}>Next</button>
                        </div> */}

                        <Swiper
                            ref={swiperRef}
                            slidesPerView={1}
                            spaceBetween={30}
                            style={{ borderRadius: '10px' }}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            //     color: '#F6821F'
                            // }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            modules={[Autoplay]}
                            // modules={[Autoplay, Navigation]}

                            className="mySwiper slider_marquee-wrapper"
                            // grabCursor={true}
                            // simulateTouch={true}
                            effect="slide"
                            // navigation={true}
                            // navigation={{
                            //     prevEl: '.swiper-button-prev',
                            //     nextEl: '.swiper-button-next'
                            // }}
                        // slidesPerGroup={5}

                        >
                            {/* <button className="swiper-button-prev" onClick={goToPreviousSlide}>Previous</button>
            <button className="swiper-button-next" onClick={goToNextSlide}>Next</button> */}
                            <div className="slider_marquee-swiper ">
                                {Array.isArray(data) && data.length > 0 ? (
                                    data.map((image, index) => (
                                        <SwiperSlide key={image.id || index}>
                                            <div className='flex items-center gap-3'>
                                                <img
                                                    src={image?.image}
                                                    alt={image?.title || `Slide ${index}`}
                                                    className='rounded-xl'
                                                    loading="lazy"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <div>No images found.</div>
                                )}

                                {/* {data?.map((image, index) => (
                                    <SwiperSlide>
                                        <div className='flex items-center gap-3' key={index}>
                                            <img

                                                src={image?.image}
                                                alt={`Slide ${index}`}

                                                className='rounded-xl'
                                            />

                                        </div>
                                    </SwiperSlide>
                                ))} */}
                            </div>


                        </Swiper>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(SuccessStoryThreeSlider)