import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Images from '../../../assets';
import './home_banner_slider.css';
import { fetchData } from '../../../apiGeneralFunction';

const Homeslider = ({ data }) => {

    const [myIndex, setMyIndex] = useState(0);


    const images = [
        `${Images.Home_banner1}`,
        `${Images.Home_banner2}`,
        `${Images.Home_banner3}`,
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (data) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
            }, 3000);

            return () => clearInterval(intervalId);
        } else {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [data, images?.length]);
    
    const handlePrevClick = () => {
        setMyIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    };




    return (
        <>


            <section className="relative  flex justify-center items-center px-16 pt-20 max-md:pt-8 max-md:px-5"
            >
                <img
                    src={Images.home_banner_bg}
                    alt=''
                    className='absolute h-auto'
                />
                <div className="flex flex-col max-w-full w-[1296px] z-10 relative ">
                    
                    <div className='relative'>
                        <div className='w-full flex justify-between items-center absolute  border border-red-500'>
                            <button className="w-fit -ms-4 focus:outline-0 " onClick={handlePrevClick} >
                                <i className="px-4 py-3 fa fa-angle-left rounded-full border border-orange-500  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                            <button className="w-fit -me-4 focus:outline-0 " onClick={handleNextClick}>
                                <i className="px-4 py-3 fa fa-angle-right rounded-full  bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                        </div>
                        {data & data?.length > 0 ? (
                            <div className="slideshow-container ">
                                <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                    {data && data?.map((image, index) => (
                                        <img key={index} src={image?.image} alt={`Slide ${index}`} />
                                    ))}
                                </div>
                            </div>
                        )
                            :

                            (
                                <div className="slideshow-container ">
                                    <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                        {images?.map((image, index) => (
                                            <img key={index} src={image} alt={`Slide ${index}`} className='w-fit' style={{ width: 'fit-content' }} />
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                    </div>


                </div>

            </section>

        </>
    )
}

export default Homeslider