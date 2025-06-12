import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Images from '../../../assets';
import './home_banner_slider.css';
import { fetchData } from '../../../apiGeneralFunction';

const Homeslider = ({data}) => {

    const [myIndex, setMyIndex] = useState(0);

    // const [data, setData] = useState([]);
    // const [token, setToken] = useState('');

    // useEffect(() => {

    //     fetchData(`api/banner_list`)
    //         .then(data => setData(data[0]?.data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);



    // useEffect(() => {
    //     const carouselInterval = setInterval(() => {
    //         setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    //     }, 3000);

    //     return () => clearInterval(carouselInterval);
    // }, []);

    // const handlePrevClick = () => {
    //     setMyIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    // };

    // const handleNextClick = () => {
    //     setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    // };

    // const [index, setIndex] = useState(0);

    // const images = [
    //     `${Images.Home_banner1_cmp}`,
    //     `${Images.Home_banner2_cmp}`,
    //     `${Images.Home_banner3_cmp}`,
    // ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {                              
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
        }, 3000); 

        return () => clearInterval(intervalId);
    }, [data?.length]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [images.length, 3000]);



    return (
        <>
            {data && data.length > 0 ? (

            <section className="relative  flex justify-center items-center px-16 pt-20 max-md:pt-8 max-md:px-5"
            >
                <img
                    src={Images.home_banner_bg}
                    alt=''
                    className='absolute'
                />
                <div className="flex flex-col max-w-full w-[1296px] z-10">
                    {/* <div className='w-full flex justify-between items-center absolute top-[50%] '>
                        <button className="w-fit -ms-4 focus:outline-0 foculs:border-0" onClick={handlePrevClick} >
                            <i className="px-4 py-3 fa fa-angle-left rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                        </button>
                        <button className="w-fit -me-4 focus:outline-0 foculs:border-0" onClick={handleNextClick}>
                            <i className="px-4 py-3 fa fa-angle-right rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                        </button>
                    </div> */}
                    {/* <div>

                        <div className="w3-content w3-section"
                        >

                            <img
                                className="mySlides shadow-orange-100 home_banner1"
                                src={Images.Home_banner1}
                                style={{ width: '100%', display: myIndex === 0 ? 'block' : 'none' }}
                                alt="Los Angeles"
                            />
                            <img
                                className="mySlides  shadow-orange-100 home_banner1"
                                src={Images.Home_banner2}
                                style={{ width: '100%', display: myIndex === 1 ? 'block' : 'none' }}
                                alt="New York"
                            />
                            <img
                                className="mySlides  shadow-orange-100 home_banner1"
                                src={Images.Home_banner3}
                                style={{ width: '100%', display: myIndex === 2 ? 'block' : 'none' }}
                                alt="Chicago"
                            />
                        </div>
                    </div> */}

                    <div className="slideshow-container">
                        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {data && data?.map((image, index) => (
                                <img key={index} src={image?.image} alt={`Slide ${index}`} />
                            ))}
                              
                                {/* <img  src={image?.image} alt={`Slide ${index}`} /> */}
                          
                        </div>
                    </div>

                </div>
                    {/* <section className="relative  flex justify-center items-center px-16 pt-20 max-md:px-5">
                <img
                    src={Images.home_banner_bg}
                    alt=''
                    className='absolute'
                />
                <div className="relative flex flex-col max-w-full w-[1296px] z-10">

                    <div id="default-carousel" className="relative w-full" data-carousel="slide">

                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img
                                    src={Images.Home_banner1}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img
                                    src={Images.Home_banner2}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img
                                    src={Images.Home_banner3}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>

                        </div>

                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>

                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section> */}
            </section>

        
             )
            :
            <></>
            }  
        </>
    )
}

export default Homeslider