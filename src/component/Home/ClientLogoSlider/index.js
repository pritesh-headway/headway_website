import React, { useEffect, useState } from 'react';

const ClientLogoSlider = () => {
    const images = [
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp',
        // Add more image URLs as needed
    ];



    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // handleNext();
            setActiveIndex(prevIndex => (prevIndex + 1) % (images.length * 2));
        }, 5000); // Change the interval duration as needed

        return () => clearInterval(intervalId);
    }, [images.length]);

    const duplicatedImages = [...images, ...images];

    const handleNext = () => {
        setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* <div className="wiper w-[1190px] mx-auto" style={{ border: '1px solid green' }}>
                <div className="wiper-wrapper" style={{ border: '1px solid red' }}>
                    <ul className="wiper-track" style={{ border: '1px solid yellow' }}>
                        {duplicatedImages.map((image, index) => (
                            <li key={index} className={`wiper-item ${index === activeIndex ? "active" : ""}`} style={{ transform: `translateX(-${activeIndex * 100}%)`, border: '1px solid orange' }}>
                                <img className="wiper__image" src={image} alt={`Slide ${index}`} />
                                <div>{`Slide ${index}`}</div>
                            </li>
                        ))}

                    </ul>

                </div>
                <button className="prev-btn" onClick={handlePrev}>Previous</button>
                <button className="next-btn" onClick={handleNext}>click next</button>
            </div> */}
            <section
                className='w-[1296px] wiper rounded-md max-md:flex-wrap max-md:px-5 max-w-full shadow-2xl  py-11 px-14 mt-6 justify-between self-center text-center'
            >
                <div className="wiper-wrapper flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
                    {duplicatedImages.map((item, index) => (

                        <li 
                        // className=""
                            // style={{ textAlign: '-webkit-center' }}
                            key={index}
                            className={`wiper-item ${index === activeIndex ? "active" : ""}`} 
                            style={{ transform: `translateX(-${activeIndex * 100}%)`, border: '1px solid orange' }}
                        >
                            <img src={item}
                                // alt=""
                                loading="lazy"
                                className="wiper__image" 
                               
                                alt={`Slide ${index}`}
                                
                                // className="self-stretch max-w-full aspect-[2.78] w-[151px]"
                                // className=" max-w-full aspect-[2.78] w-[151px]"
                            />
                             <div>{`Slide ${index}`}</div>
                        </li>

                    ))}

                </div>
                <button className="prev-btn" onClick={handlePrev}>Previous</button>
                <button className="next-btn" onClick={handleNext}>click next</button>
            </section>
        </>
    );
};

export default ClientLogoSlider;