import React, { useEffect, useState } from 'react';
import * as Images from '../../../assets';
import { fetchWithFormData } from '../../../apiGeneralFunction';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const IHRClients = () => {

    const images = [
        `${Images.home2_sub1}`,
        `${Images.home2_sub2}`,
        `${Images.home2_sub3}`,
        `${Images.home2_sub4}`,
        `${Images.home2_sub5}`,

    ];

    const [myIndex, setMyIndex] = useState(0);
    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(false);

    // useEffect(() => {
    //     const carouselInterval = setInterval(() => {
    //         setMyIndex((prevIndex) => (prevIndex + 1) % images.length);

    //     }, 2000);

    //     return () => clearInterval(carouselInterval);
    // }, [images.length]);

    const handlePrevClick = () => {
        setMyIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
        // const newIndex = (myIndex - 1 + images.length) % images.length;
        // setMyIndex(newIndex);
        // console.log("previous image", newIndex, myIndex);
    };

    const handleNextClick = () => {
        // setMyIndex((prevIndex) => (prevIndex + 1) % Images.length); 
        const newIndex = (myIndex + 1) % images.length;
        setMyIndex(newIndex);
    };

    const goToPrev = () => {
        setMyIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const goToNext = () => {
        setMyIndex(prevIndex => Math.min(prevIndex + 1, images.length - 1));
    };

    const [data, setData] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {

               const formData = new FormData();

         fetchWithFormData('get_dashboard_data', formData)
            // .then(data => setData(data[0].data))
            .then(data => {
                //   console.log("adghsasd1", data)
                if (data?.status === true) {
                    setData(data?.data?.client_logo);
                    // console.log("adghsasd", data?.data)
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

    const companyImg = [
        {
            id: 1,
            imageUrl: `${Images.client_logo1}`,
            title: "Shriji Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 2,
            imageUrl: `${Images.client_logo2}`,
            title: "N.K.  Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 3,
            imageUrl: `${Images.home_mahavir_client_new_logo}`,
            title: "Mahaveer  Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 4,
            imageUrl: `${Images.client_logo4}`,
            title: "K. Virchand Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 5,
            imageUrl: `${Images.client_logo5}`,
            title: "CMS  Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 6,
            imageUrl: `${Images.client_logo1}`,
            title: "Shriji Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 7,
            imageUrl: `${Images.client_logo2}`,
            title: "N.K.  Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 8,
            imageUrl: `${Images.home_mahavir_client_new_logo}`,
            title: "Mahavir  Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 9,
            imageUrl: `${Images.client_logo4}`,
            title: "K. Virchand Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        },
        {
            id: 10,
            imageUrl: `${Images.client_logo5}`,
            title: "CMS  Jewellers",
            description: "At Headway Business Solutions LLP, we believe that your business goals are our business goals. Our highly experienced team of experts have the knowledge and expertise to help you overcome any obstacle standing between you and your desired success. We are committed to providing impartial and practical assistance to ensure that you make the most of every opportunity that comes your way. Whether you are an established business looking to consolidate your position in the market or a start-up looking for guidance, we are here to help."
        }
    ]

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const checkScreenSize = () => {
        // setIsMediumOrSmaller(window.innerWidth <= 640); 
        setIsMediumOrSmaller(window.innerWidth <= 1024);
    };



    return (
        <>
            {/* <section
                className='w-[1296px] rounded-md max-md:flex-wrap max-md:px-5 max-w-full shadow-2xl  py-11 px-14 mt-6 justify-between self-center text-center'
            >
               
                <div className=" slideshow flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full ">
                    
                    <div className="carousel">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index}`}
                                className=' my-auto aspect-[2.94] w-[87px]'

                            />
                        ))}

                    </div>
                </div>
               
            </section> */}
            <section
                className="  flex justify-center items-center py-10 max-lg:px-5 max-sm:pt-5 max-sm:pb-0 px-16 max-lg:px-12"
            // className="  flex justify-center items-center px-16 py-10 max-md:px-5 max-sm:pt-5 max-sm:pb-0"
            >
                {/* <div className="top-0 flex overflow-hidden absolute flex-col justify-center items-center self-stretch fill-white   max-md:px-5 max-md:max-w-full">

                    <img
                        alt=""
                        loading="lazy"
                        src={Images.orange_vector}
                        className=""
                    />

                </div> */}
                <div className="flex flex-col max-w-full w-[1296px] ">
                    <div className='my-10 flex justify-between items-center w-full max-sm:m-0 '>
                        <h2 className="self-center text-5xl  max-md:text-4xl max-sm:text-2xl">
                            <span className="text-zinc-800">Our Intelligent HR </span>{" "}
                            <span className="text-orange-500 font-bold"> Clients</span>
                        </h2>

                        {/* <div className='flex  items-center  '>
                            <button className="w-fit -ms-4 focus:outline-0 foculs:border-0" onClick={handlePrevClick} >
                                <i className="px-4 py-3 fa fa-angle-left rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                            <button className="w-fit -me-4 focus:outline-0 foculs:border-0" onClick={handleNextClick}>
                                <i className="px-4 py-3 fa fa-angle-right rounded-full  bg-white text-orange-500 hover:bg-orange-500 hover:text-white"></i>
                            </button>
                        </div> */}
                    </div>

                    <div>

                        <div
                            className="flex justify-center items-center py-8 max-md:px-5 max-sm:py-0  max-sm:px-0"
                        >
                            <div
                                className=" w-[1296px] max-md:px-5 max-w-full"
                            >
                                <div
                                    className='px-16 py-8 max-md:px-5  max-sm:mx-0 max-sm:px-0 shadow-xl shadow-orange-50 '
                                >
                                    <Swiper
                                        slidesPerView={5}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        autoplay={{
                                            delay: 0,
                                            disableOnInteraction: false,
                                        }}
                                        speed={3000}
                                        modules={[Autoplay, Navigation]}

                                        className="mySwiper slider_marquee-wrapper"
                                        grabCursor={true}
                                        simulateTouch={true}
                                        effect="slide"
                                        // slidesPerGroup={5}
                                        slidesPerGroup={Math.min(5, data?.length)}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 2,
                                                //spaceBetween: 10,
                                                slidesPerGroup: 2,
                                                autoplay: {
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                },
                                                speed: 3000,
                                                loop: true
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                //spaceBetween: 10,
                                                slidesPerGroup: 2,
                                                autoplay: {
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                },
                                                speed: 3000,
                                                loop: true
                                            },
                                            // When window width is <= 768px
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 10,
                                                slidesPerGroup: 2,
                                                autoplay: {
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                },
                                                speed: 2000,
                                                loop: true
                                            },
                                            // When window width is <= 992px
                                            992: {
                                                slidesPerView: 2,
                                                // spaceBetween: 20,
                                                slidesPerGroup: 2,
                                                autoplay: {
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                },
                                                speed: 3000,
                                                loop: true

                                            },
                                            // When window width is <= 1200px
                                            1200: {
                                                slidesPerView: 5,
                                                spaceBetween: 25,
                                                slidesPerGroup: Math.min(5, data?.length),
                                                autoplay: {
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                },
                                                speed: 3000,
                                                loop: true
                                            }
                                        }}
                                    >
                                        <div className="slider_marquee-swiper">

                                            {/* {companyImg?.map((image, index) => (
                            <SwiperSlide>
                                <div className='flex items-center gap-3' key={index}>
                                <img

                                    src={image?.imageUrl}
                                    alt={`Slide ${index}`}
                                  
                                    className=' w-36'
                                />
                            
                                </div>
                            </SwiperSlide>
                        ))} */}
                                            {data && data?.length > 0 ? (

                                                data?.map((item, index) => (
                                                    <SwiperSlide key={index} className='px-5'>
                                                        {/* <div
                                            className="px-5 "

                                         key={index}
                                        > */}
                                                        <img src={item?.logo_image} alt="Images"
                                                            loading="lazy"
                                                            className='slider-logo max-sm:w-52'
                                                        //   className='w-48 max-md:w-96'
                                                        />
                                                        {/* </div> */}
                                                    </SwiperSlide>
                                                ))
                                            ) : (
                                                companyImg?.map((image, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div
                                                            className="px-5 flex items-center"


                                                        >
                                                            <img src={image?.imageUrl} alt="Images"
                                                                loading="lazy"
                                                                className='w-16 max-sm:w-10 '
                                                            />
                                                            <div className='ms-5 max-sm:text-sm'>{image?.title}</div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            )}
                                        </div>

                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        {/* <div className="w3-content w3-section py-5 px-10 border bg-white"
                        >
                            <div className='flex flex-row flex-wrap  items-center justify-center'>
                                <div className="carousel">
                                    {images.map((item, index) => {

                                        return (
                                            <>


                                                
                                                <img
                                                    src={item}
                                                    style={{
                                                        display: myIndex === index ? 'block' : 'none'
                                                    }}
                                                    alt="Los Angeles"
                                                    key={index}
                                                    className='mySlides my-auto aspect-[2.94] w-[87px]'
                                                />

                                                <img
                                                    src={item}
                                                    style={{

                                                        display: myIndex === index + 1 ? 'block' : 'none'

                                                    }}
                                                    alt="Los Angeles"
                                                    key={index}

                                                    className='mySlides my-auto aspect-[2.94] w-[87px]'

                                                />


                                                <img
                                                    src={item}
                                                    style={{
                                                        display: myIndex === index + 2 ? 'block' : 'none'

                                                    }}
                                                    alt="Los Angeles 123"
                                                    key={index}
                                                    className='mySlides my-auto aspect-[2.94] w-[87px]'
                                                />
                                                <img
                                                    src={item}
                                                    style={{
                                                        display: myIndex === index + 3 ? 'block' : 'none'

                                                    }}
                                                    alt="Los Angeles 123"
                                                    key={index}
                                                    className='mySlides my-auto aspect-[2.94] w-[87px]'
                                                />
                                                <img
                                                    src={item}
                                                    style={{
                                                        display: myIndex === index + 4 ? 'block' : 'none'

                                                    }}
                                                    alt="Los Angeles 123"
                                                    key={index}
                                                    className='mySlides my-auto aspect-[2.94] w-[87px]'
                                                />


                                            </>
                                        )

                                    })}

                                </div>
                            </div>

                        </div> */}

                    </div>

                </div>
                {/* <Home3 data={data?.client_logo}/> */}
            </section>

        </>
    )
}

export default IHRClients