import React, { useState, useEffect, useRef } from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import Slider from 'react-slick';
import { fetchWithFormData } from '../../../apiGeneralFunction';

const MMBGallerySlider = ({ titleRef, isVisible }) => {

    // const Image = [
    //     `${Images.mmb_gallery_one}`,
    //     `${Images.mmb_gallery_two}`,
    //     `${Images.mmb_gallery_three}`,
    // ]

    let sliderRef = useRef(null);
    const [data, setData] = useState([]);

    const next = () => {
        sliderRef.current && sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current && sliderRef.current.slickPrev();
    };

    // const next = () => {
    //     sliderRef.slickNext();
    // };
    // const previous = () => {
    //     sliderRef.slickPrev();
    // };

    const Image = [
        {
            id: 1,
            imageUrl: `${Images.mmb_gallery_one}`,
            title: "Slide 1",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 2,
            imageUrl: `${Images.mmb_gallery_two}`,
            title: "Slide 2",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 3,
            imageUrl: `${Images.mmb_gallery_three}`,
            title: "Slide 3",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
    ]

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        speed: 500,
        dots: true,
        arrows: false,
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
    };



    useEffect(() => {

        const formData = new FormData();

        fetchWithFormData(`mmb_gallaries`, formData)
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

    // console.log("mmb galley api data", data)





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
                            <button className="w-fit -ms-4 focus:outline-0 foculs:border-0"
                                onClick={previous}
                            >
                                <i className="px-4 py-3 fa fa-angle-left rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                            <button className="w-fit -me-4 focus:outline-0 foculs:border-0"
                                onClick={next}
                            >
                                <i className="px-4 py-3 fa fa-angle-right rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div>

                <div className=""
                >
                    <div className=''>

                        <Slider
                            {...settings}
                            ref={sliderRef}
                        // ref={slider => {
                        //     sliderRef = slider;
                        // }}
                        >
                            {data && data?.length > 0 ? (
                                data?.map((item, index) => (
                                    <img
                                        className='p-5'
                                        src={item?.image}
                                        alt={item?.title || "Gallery Image"}
                                        key={item.id || index}
                                    />
                                ))
                            ) : (
                                Image?.map((item, index) => (
                                    <img
                                        className='p-5'
                                        src={item.imageUrl}
                                        alt={item.title || "Gallery Image"}
                                        key={item.id || index}
                                    />
                                ))
                            )}



                        </Slider>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UpdatedAnimatedComponent(MMBGallerySlider);
