import React, { useEffect, useState } from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";
import { fetchWithFormData } from "../../../apiGeneralFunction";
import { decodeHTML } from "../../ReusableComp/DecodeHtmlData";


const OurPlansSection = ({ titleRef, isVisible }) => {

    const [activeTab, setActiveTab] = useState('all');
    const [data, setData] = useState([]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'all':
                return (
                    <div>
                        {/* Content for All tab */}
                    </div>
                );
            case 'chimanlal':
                return (
                    <div>
                        {/* Content for Chimanlal Girdharlal Road tab */}
                    </div>
                );
            case 'headway':
                return (
                    <div>
                        {/* Content for Headway Business Solutions LLP tab */}
                    </div>
                );
            // Add cases for additional tabs as needed
            default:
                return null;
        }
    };


    const cardsData = [
        {
            id: 1,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7008ba3a052f949187ab281b700e398ecf8afb2a2e50b3bac6ac5229df38816e?apiKey=8e5983036f284a13866aae97819cdb73&",
            badgeText: "Available Online",
            title: "Startup",
            title1: 'Empowering New Beginnings:',
            description: `For entrepreneurs venturing into 
            the jewellery sector, Headway offers an unparalleled start-up 
            service. We guide you through every step of the business set-up 
            process, help in crafting a resonant brand identity, implement 
            cutting-edge marketing strategies, and develop customer 
            engagement practices that ensure your business’s rapid growth 
            and sustainability.`,
            price: "₹10,000",
            priceUnit: "Per hour",
            bookNowImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/044d125104efe03f2c87170ab720f952ee7c38bba2db2b99c47f660340d958f2?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Intro to Data Analysis Cover",
        },
        {
            id: 2,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7008ba3a052f949187ab281b700e398ecf8afb2a2e50b3bac6ac5229df38816e?apiKey=8e5983036f284a13866aae97819cdb73&",
            badgeText: "Business Mentoring",
            title: "Make My Business (MMB)",
            title1: 'Holistic Business Enhancement:',
            description: `Our Make My Business program 
            is a complete guide for jewellery businesses aiming for success. It 
            encompasses everything from foundational business planning 
            and brand development to advanced marketing, financial 
            management, inventory control, and staff empowerment. MMB 
            is designed to be your roadmap to business excellence.`,
            price: "₹10,000",
            priceUnit: "Per hour",
            bookNowImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/044d125104efe03f2c87170ab720f952ee7c38bba2db2b99c47f660340d958f2?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Business Mentoring Cover",
        },
        {
            id: 3,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7008ba3a052f949187ab281b700e398ecf8afb2a2e50b3bac6ac5229df38816e?apiKey=8e5983036f284a13866aae97819cdb73&",
            badgeText: "Available Online",
            title: "Individual Development Program (IDP)",
            title1: 'Personal Growth for Professional Success:',
            description: `At the core of every 
            successful business are leaders and teams equipped with the 
            right skills and mindset. Our Individual Development Program 
            focuses on nurturing leadership qualities, brand building 
            capabilities, effective management practices, and strategies for 
            scalable growth. This program is tailored to instill a competitive 
            edge in you and your team.`,
            price: "₹10,000",
            priceUnit: "Per hour",
            bookNowImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/044d125104efe03f2c87170ab720f952ee7c38bba2db2b99c47f660340d958f2?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Art of Jewellery Sales Workshop Cover",
        },
        {
            id: 4,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7008ba3a052f949187ab281b700e398ecf8afb2a2e50b3bac6ac5229df38816e?apiKey=8e5983036f284a13866aae97819cdb73&",
            badgeText: "Available Online",
            title: "Jewellery Vidhyapith",
            title1: 'Fostering Industry-Ready Talent: ',
            description: `Recognizing the need for skilled 
            personnel in the jewellery industry, Headway has launched the 
            Jewellery Vidhyapith in Ahmedabad. This initiative aims to train 
            over 100,000 young individuals, providing them with the skills 
            needed to secure employment and contribute to India’s growth. 
            Opening on August 1, 2022, this venture underlines our 
            commitment to social responsibility and industry advancement.`,
            price: "₹10,000",
            priceUnit: "Per hour",
            bookNowImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/044d125104efe03f2c87170ab720f952ee7c38bba2db2b99c47f660340d958f2?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Art of Jewellery Sales Workshop Cover",
        },
        {
            id: 5,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7008ba3a052f949187ab281b700e398ecf8afb2a2e50b3bac6ac5229df38816e?apiKey=8e5983036f284a13866aae97819cdb73&",
            badgeText: "Available Online",
            title: "Intelligent HR",
            title1: 'Streamlining Human Resources for Jewellers:',
            description: `Understanding the 
            specific HR challenges faced by jewellers, we offer bespoke HR 
            solutions that encompass staff recruitment and selection, salary 
            negotiations, training, contractual agreements, leave 
            management, and performance evaluations. Our services are 
            designed to ensure that your business operates smoothly and 
            efficiently.`,
            price: "₹10,000",
            priceUnit: "Per hour",
            bookNowImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/044d125104efe03f2c87170ab720f952ee7c38bba2db2b99c47f660340d958f2?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Art of Jewellery Sales Workshop Cover",
        },
        {
            id: 6,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7008ba3a052f949187ab281b700e398ecf8afb2a2e50b3bac6ac5229df38816e?apiKey=8e5983036f284a13866aae97819cdb73&",
            badgeText: "Available Online",
            title: "IT for Jewellers",
            title1: 'Digital Solutions for a Digital Age:',
            description: `In today’s digital marketplace, 
            having a robust online presence is crucial. Our IT services are 
            crafted to meet the unique needs of the jewellery sector, offering 
            website and app development, SEO, digital marketing, social 
            media management, data analytics, content management, and 
            ecommerce solutions. These services are geared towards 
            enhancing your digital footprint and connecting with your 
            audience effectively.`,
            price: "₹10,000",
            priceUnit: "Per hour",
            bookNowImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/044d125104efe03f2c87170ab720f952ee7c38bba2db2b99c47f660340d958f2?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Art of Jewellery Sales Workshop Cover",
        }
    ];

    useEffect(() => {

        const tokenValue = localStorage.getItem('login api response token');
        const storedToken = JSON.parse(tokenValue);
        // console.log("plan pricing fgascdgasfghdfshj", storedToken);
        // if (storedToken) {
        //   setToken(storedToken);
        // }
        // console.log("token value", storedToken)

        const formData = new FormData();

        fetchWithFormData('service_plan_list', formData, storedToken)
            .then(data => {

                if (data?.status === true) {
                    setData(data?.data);

                }
                else {

                    setData(null);
                }
            })
            .catch(

        );
    }, []);


    const CardComponent = ({ id, name, hours, price, location, service_desc, image }) => {
        return (
            <div className="flex flex-col grow p-6 mx-auto w-full bg-white rounded-3xl max-md:px-5 max-md:mt-6 ">

                <figure className="flex overflow-hidden relative flex-col items-start pt-5 pr-16 pb-20 text-xs leading-4 text-orange-500 aspect-[1.24] max-md:pr-5">
                    <img
                        loading="lazy"
                        // src={imageSrc}
                        src={image}
                        alt="Images"
                        fetchPriority="high"
                        width=""
                        height=""
                        className="object-cover absolute inset-0 size-full rounded-xl" />
                    <figcaption className="relative justify-center px-3 py-1 mb-32 rounded-none bg-stone-50 max-md:mb-10">
                        {location}
                    </figcaption>
                </figure>
                <div className="h-full justify-between flex flex-col ">
                    <div className="">
                        <h3 className="mt-6 text-2xl font-bold text-zinc-800">{name}</h3>

                        <p className="mt-1.5 text-lg blog_intro" dangerouslySetInnerHTML={{ __html: service_desc }} />
                    </div>
                    <div className="flex gap-5 justify-between mt-6 w-full">
                        <div className="flex gap-0 justify-center my-auto text-center whitespace-nowrap max-md:text-sm items-end">
                            <div className="grow text-2xl font-bold text-orange-500 max-md:text-xl">₹{price}</div>
                            <div className="grow my-auto max-md:my-0 text-base text-zinc-800 max-md:text-sm">/{hours}{" "}hours</div>
                        </div>

                        {/* <div
                            className="hover-change cursor-pointer flex px-5  max-md:px-3 max-md:gap-2 hover:bg-orange-500 hover:text-white exit flex gap-3 justify-center self-start py-2.5 text-base font-medium text-orange-500 rounded-lg border border-solid border-[color:var(--primary-orange-f-6821-f,#F6821F)] max-md:px-5"
                        >
                            <div className="select max-md:text-xs">Book Now</div>
                            <img
                                loading="lazy"
                                data-src-hover={Images.arr_right_white_clr}
                                src={Images.arr_right_orange_clr}

                                className="my-auto w-4 aspect-square"
                                alt=''
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    };

    return (

        <>
            {data?.length > 0 ?
                <section className=" relative flex justify-center items-center px-16 py-20 max-md:px-5 terms_bg_clr" ref={titleRef}>

                    <img
                        src={Images.about_us_vector}
                        alt="Images"
                        loading="lazy"
                        className="absolute top-0"
                        width=""
                        height=""
                        fetchPriority="high"
                    />
                    <div className=" flex flex-col max-w-full w-[1296px] z-10 ">

                        <h1
                            className={`self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >
                            Book
                            <span className="leading-[58px] font-bold text-orange-500"> Online</span>
                        </h1>

                        {/* <div className="flex flex-auto gap-5 justify-between">
                        <div
                            className={`cursor-pointer justify-center px-8 py-3 whitespace-nowrap rounded-full max-md:px-5 ${activeTab === 'all' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}
                            onClick={() => handleTabClick('all')}
                        >
                            All
                        </div>
                        <div
                            className={`cursor-pointer justify-center px-8 py-3  whitespace-nowrap  rounded-full max-md:px-5 ${activeTab === 'chimanlal' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}
                            onClick={() => handleTabClick('chimanlal')}
                        >
                            Chimanlal Girdharlal Road
                        </div>
                        <div
                            className={`cursor-pointer justify-center px-8 py-3  whitespace-nowrap  rounded-full max-md:px-5 ${activeTab === 'headway' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}
                            onClick={() => handleTabClick('headway')}
                        >
                            Headway Business Solutions LLP (Corporate Office)
                        </div>
                    </div> */}
                        {/* <div
                            className={`flex-auto my-auto px-8 py-3  max-md:max-w-full ${activeTab === 'headway' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}
                            onClick={() => handleTabClick('headway')}
                        >
                            Headway Business Solutions LLP (Corporate Office)
                        </div> */}

                        <main className="px-5 mt-3.5 max-w-full w-[1296px] max-sm:px-0 ">
                            <div className="text-start flex gap-5 max-md:flex-col  max-md:gap-0 grid lg:grid-cols-3 md:grid-cols-2 ">
                                {data && data.map((card, index) => (
                                    <div key={index} className={`flex flex-col  ${index !== cardsData.length - 1 ? "ml-5 max-sm:ml-0" : ""}  max-md:ml-0 max-md:w-full`}>
                                        <CardComponent {...card} />
                                    </div>
                                ))}
                                {/* {renderContent()} */}
                            </div>
                        </main>
                    </div>
                </section>
                :
                <></>
            }
        </>
    );
};

export default UpdatedAnimatedComponent(OurPlansSection);