/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/style-prop-object */
import { useEffect, useState } from "react";
import * as Images from '../../../assets';
import './jewellersider.css'
// import $ from 'jquery';
// import 'lightslider/dist/css/lightslider.min.css'; 
// import 'lightslider';


const JewellerySlider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    function plusSlides(n) {
        // setSlideIndex(slideIndex + n);
    }

    function currentSlide(n) {
        // setSlideIndex(n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides1");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n >= slides.length) {
            setSlideIndex(0);
            return;
        }
        if (n < 0) {
            setSlideIndex(slides.length - 1);
            return;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
        // captionText.innerHTML = dots[slideIndex].alt;
    }

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

    //  useEffect(() => {
    //      $(document).ready(function () {
    //          $("#content-slider").lightSlider({
    //              loop: true,
    //              keyPress: true
    //          });
    //          $('#image-gallery').lightSlider({
    //              gallery: true,
    //              item: 1,
    //              thumbItem: 9,
    //              slideMargin: 0,
    //              speed: 500,
    //              auto: true,
    //              loop: true,
    //              onSliderLoad: function () {
    //                  $('#image-gallery').removeClass('cS-hidden');
    //              }
    //          });
    //      });
    //  }, []);

    return (
        <>

            {/* <div class=" container1 border">


                <div class="mySlides1">
                    <div class="numbertext">1 / 6</div>
                    <img alt="" src={Images.mmb_module5} style={{ width: '100%' }} />
                </div>

                <div class="mySlides1">
                    <div class="numbertext">2 / 6</div>
                    <img alt="" src={Images.mmb_module5} style={{ width: '100%' }} />
                </div>

                <div class="mySlides1">
                    <div class="numbertext">3 / 6</div>
                    <img alt="" src={Images.mmb_module5} style={{ width: '100%' }} />
                </div>

                <div class="mySlides1">
                    <div class="numbertext">4 / 6</div>
                    <img alt="" src={Images.mmb_module5} style={{ width: '100%' }} />
                </div>

                <div class="mySlides1">
                    <div class="numbertext">5 / 6</div>
                    <img alt="" src={Images.mmb_module5} style={{ width: '100%' }} />
                </div>

                <div class="mySlides1">
                    <div class="numbertext">6 / 6</div>
                    <img alt="" src={Images.mmb_module5} style={{ width: '100%' }} />
                </div>


                <button class="prev1" onClick={plusSlides(-1)}>&#10094;</button>
                <button class="next1" onClick={plusSlides(1)}>&#10095;</button>

                <div class="caption-container">
                    <p id="caption"></p>
                </div>


                <div class="row border border-green-500">
                    <div class="column">
                        <img class="demo cursor" src={Images.mmb_module5} style={{ width: '100%' }} onclick="currentSlide(1)" alt="The Woods" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={Images.mmb_module5} style={{ width: '100%' }} onclick="currentSlide(2)" alt="Cinque Terre" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={Images.mmb_module5} style={{ width: '100%' }} onclick="currentSlide(3)" alt="Mountains and fjords" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={Images.mmb_module5} style={{ width: '100%' }} onclick="currentSlide(4)" alt="Northern Lights" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={Images.mmb_module5} style={{ width: '100%' }} onclick="currentSlide(5)" alt="Nature and sunrise" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={Images.mmb_module5} style={{ width: '100%' }} onclick="currentSlide(6)" alt="Snowy Mountains" />
                    </div>
                </div>
            </div> */}
            {/* <div>
                <div className="slideshow-container">
                    {companyImg.map((image, index) => (
                        <div className="mySlides fade" key={index}>
                            <img src={image.imageUrl} style={{ width: '100%' }} alt={image.alt} />
                        </div>
                    ))}
                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {companyImg.map((_, index) => (
                        <span className="demo" key={index} onClick={() => currentSlide(index)}></span>
                    ))}
                </div>
                <div id="caption" style={{ textAlign: 'center', marginTop: '20px' }}></div>
            </div> */}
{/* <div className="demo">
            <div className="item">
                <div className="clearfix" style={{ maxWidth: '474px' }}>
                    <ul id="image-gallery" className="gallery list-unstyled cS-hidden">
                        {[...Array(15).keys()].map((index) => (
                            <li key={index} data-thumb={`img/thumb/cS-${index + 1}.jpg`}>
                                <img src={`img/cS-${index + 1}.jpg`} alt={`Image ${index + 1}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="item">
                <ul id="content-slider" className="content-slider">
                    {[...Array(6).keys()].map((index) => (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div> */}
        </>
    )
}

export default JewellerySlider