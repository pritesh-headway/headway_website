import React, { useEffect, useState } from 'react';
import './successslider.css';
import * as Images from '../../../assets';

const SuccessStorySlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    // const plusSlides = (n) => {
    //     setSlideIndex((prevIndex) => prevIndex + n);
    // };
    const plusSlides = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex > companyImg.length) {
            newIndex = 1; // Go back to the first image if reaching the end
        } else if (newIndex < 1) {
            newIndex = companyImg.length; // Go to the last image if reaching the beginning
        }
        setSlideIndex(newIndex);
    }; 


    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    // const showSlides = (n) => {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     let dots = document.getElementsByClassName("demo");
    //     let captionText = document.getElementById("caption");
    //     if (n > slides.length) { setSlideIndex(1) }
    //     if (n < 1) { setSlideIndex(slides.length) }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
    //     captionText.innerHTML = dots[slideIndex - 1].alt;
    // };

    // const showSlides = (n) => {
    //     const slides = document.getElementsByClassName("mySlides");
    //     const dots = document.getElementsByClassName("demo");
    //     const captionText = document.getElementById("caption");


    //     let currentSlideIndex = (n + companyImg.length) % companyImg.length;
    //     let prevSlideIndex = (currentSlideIndex - 1 + companyImg.length) % companyImg.length;
    //     let nextSlideIndex = (currentSlideIndex + 1) % companyImg.length;


    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slides[prevSlideIndex].style.display = "block";
    //     slides[currentSlideIndex].style.display = "block";
    //     slides[nextSlideIndex].style.display = "block";


    //     for (let i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     dots[currentSlideIndex].className += " active";


    //     captionText.innerHTML = dots[currentSlideIndex].alt;
    // };

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("demo");
        // const captionText = document.getElementById("caption");

        let currentSlideIndex = (n + companyImg.length) % companyImg.length;
        // let prevSlideIndex = (currentSlideIndex - 1 + companyImg.length) % companyImg.length;
        // let nextSlideIndex = (currentSlideIndex + 1) % companyImg.length;
        let prevSlideIndexes = [
            (currentSlideIndex - 2 + companyImg.length) % companyImg.length,
            (currentSlideIndex - 1 + companyImg.length) % companyImg.length
        ];
        let nextSlideIndexes = [
            (currentSlideIndex + 1) % companyImg.length,
            (currentSlideIndex + 2) % companyImg.length
        ];

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove("current", "prev", "next");
        }

        slides[currentSlideIndex].classList.add("current");
        slides[currentSlideIndex].style.display = "block";
        slides[currentSlideIndex].style.transform = "scale(2.5)";
        slides[currentSlideIndex].style.zIndex = "2";

        // if (currentSlideIndex !== 0) {
        //     prevSlideIndexes[1] = currentSlideIndex;
        //     slides[currentSlideIndex].style.transform = "none";
        //     slides[currentSlideIndex].style.zIndex = "0";
        // }
        // else {

        // }
        slides[prevSlideIndexes[0]].classList.add("prev");
        slides[prevSlideIndexes[0]].style.display = "block";
        slides[prevSlideIndexes[0]].style.transform = "none";
        slides[prevSlideIndexes[0]].style.zIndex = "0";

        slides[prevSlideIndexes[1]].classList.add("prev");
        slides[prevSlideIndexes[1]].style.display = "block";
        slides[prevSlideIndexes[1]].style.transform = "scale(1.8)";
        slides[prevSlideIndexes[1]].style.zIndex = "1";

        if (currentSlideIndex === companyImg.length - 1) {
            nextSlideIndexes[0] = currentSlideIndex;
            // nextSlideIndexes[1] = currentSlideIndex;
            slides[prevSlideIndexes[1]].style.transform = "none";
        }
        else {

        }

        slides[nextSlideIndexes[0]].classList.add("next");
        slides[nextSlideIndexes[0]].style.display = "block";
        slides[nextSlideIndexes[0]].style.transform = "scale(1.8)";
        slides[nextSlideIndexes[0]].style.zIndex = "1";

        slides[nextSlideIndexes[1]].classList.add("next");
        slides[nextSlideIndexes[1]].style.display = "block";
        slides[nextSlideIndexes[1]].style.transform = "none";
        slides[nextSlideIndexes[1]].style.zIndex = "0";


        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[currentSlideIndex].className += " active";

        // captionText.innerHTML = dots[currentSlideIndex].alt;
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
                    {/* <div className="container">
                <div className="mySlides">
                    <div className="numbertext">1 / 6</div>
                    <img src={Images.mmb_module1} style={{ width: '100%' }} alt='' />
                </div>
                <div className="mySlides">
                    <div className="numbertext">2 / 6</div>
                    <img src={Images.mmb_module2} style={{ width: '100%' }} alt='' />
                </div>

                <div className="mySlides">
                    <div className="numbertext">3 / 6</div>
                    <img src={Images.mmb_module3} style={{ width: '100%' }} alt='' />
                </div>

                <div className="mySlides">
                    <div className="numbertext">4 / 6</div>
                    <img src={Images.mmb_module4} style={{ width: '100%' }} alt='' />
                </div>

                <div className="mySlides">
                    <div className="numbertext">5 / 6</div>
                    <img src={Images.mmb_module5} style={{ width: '100%' }} alt='' />
                </div>

                <div className="mySlides">
                    <div className="numbertext">6 / 6</div>
                    <img src={Images.Home_bg} style={{ width: '100%' }} alt='' />
                </div>



                <div className="caption-container">
                    <p id="caption"></p>
                </div>
                <div className='flex'>
                    <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
                    <div className="row">
                        <div className="column">
                            <img className="demo cursor"
                                src={Images.mmb_module1} style={{ width: '100%' }} onClick={() => currentSlide(1)}
                                alt="The Woods" />
                        </div>
                        <div className="column">
                            <img className="demo cursor"
                                src={Images.mmb_module2} style={{ width: '100%' }} onClick={() => currentSlide(2)}
                                alt="Cinque Terre" />
                        </div>
                        <div className="column">
                            <img className="demo cursor"
                                src={Images.mmb_module3} style={{ width: '100%' }} onClick={() => currentSlide(3)}
                                alt="Mountains and fjords" />
                        </div>
                        <div className="column">
                            <img className="demo cursor"
                                src={Images.mmb_module4} style={{ width: '100%' }} onClick={() => currentSlide(4)}
                                alt="Northern Lights" />
                        </div>
                        <div className="column">
                            <img className="demo cursor"
                                src={Images.mmb_module5} style={{ width: '100%' }} onClick={() => currentSlide(5)}
                                alt="Nature and sunrise" />
                        </div>
                        <div className="column">
                            <img className="demo cursor"
                                src={Images.Home_bg} style={{ width: '100%' }} onClick={() => currentSlide(6)}
                                alt="Snowy Mountains" />
                        </div>
                    </div>
                    <button className="next" onClick={() => plusSlides(1)}>❯</button>
                </div>
            </div> */}
                    <div className="container ">
                        <div className="gallery-container my-20 py-10">
                            <div className="image-container_success">
                                {/* {companyImg.map((item, index) => (
                                    <div className="mySlides" key={index}>
                                        <div className="numbertext">{index + 1} / {item.length}</div>
                                        <img src={item.imageUrl} style={{ width: '100%' }} alt='' />
                                    </div>
                                ))} */}
                                {companyImg.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`image-item mySlides ${index === currentIndex ? 'active ' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <img src={image.imageUrl} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <div className="caption-container  mt-20">
                            <p id="caption"></p>
                        </div> */}
                        <div className='flex mt-20 justify-center items-center gap-2'>
                            {/* <button className="prev" onClick={() => plusSlides(-1)}>❮</button> */}
                            <div
                                onClick={() => plusSlides(-1)}
                                className="prev  w-auto cursor-pointer exit flex justify-center items-center ">

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
                            <div className="row w-auto flex items-center">
                                {companyImg.map((item, index) => (
                                    <div className="column demo mx-1">
                                        {/* <img className="demo cursor"
                                            src={item.imageUrl}
                                            style={{ width: '100%' }}
                                            onClick={() => currentSlide(index + 1)}
                                            alt="The Woods" /> */}
                                        <div
                                            style={{
                                                //  backgroundColor: "#ddd",
                                                //  borderRadius: "10px",
                                                //   padding: "10px"
                                            }}
                                            className=' flex justify-center items-center flex-row px-1 py-1 rounded-full'
                                            onClick={() => currentSlide(index + 1)}
                                        >
                                            {/* <ul className='flex p-1 items-center '>  </ul> */}

                                        </div>
                                    </div>
                                ))}


                            </div>
                            {/* <button className="next" onClick={() => plusSlides(1)}>❯</button> */}
                            <div
                                onClick={() => plusSlides(1)}
                                className="next exit cursor-pointer flex justify-center items-center "
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
            </div>
        </>
    );
};


export default SuccessStorySlider;
