import React from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";
import { useNavigate } from "react-router-dom";

const OurServicesSection = ({ titleRef, isVisible }) => {

    const servicesData = [
        {
            id: 1,
            src: `${Images.service_startup}`,
            alt: "Startups",
            title: "Startups",
            description:
                `Headway Business Solutions LLP is your strategic partner in propelling your newly started jewellery store towards accelerated growth.`,
        },
        {
            id: 2,
            src: `${Images.service_mmb}`,
            alt: "Make My Business",
            title: "Make My Business",
            description: `Make My Business (MMB) by Headway Business Solutions LLP is a transformative initiative designed to empower entrepreneurs at every stage of their business growth journey.`

        },
        {
            id: 3,
            src: `${Images.service_jv}`,
            alt: "Jewellery Vidhyapith",
            title: "Jewellery Vidhyapith",
            description: `In a significant move aimed at empowering the youth and contributing to the gem and jewellery industry's workforce, Headway Business Solutions LLP proudly announces the launch of Jewellery Vidhyapith in Ahmedabad.`,
        },
        {
            id: 4,
            src: `${Images.service_idp}`,
            alt: "Individual Development Program",
            title: "Individual Development Program",
            description: `Headway welcomes you to the IDP experience! We understand your aspirations. Let's develop your leadership and unlock your business's true potential.`,
        },
        {
            id: 5,
            src: `${Images.service_ihr}`,
            alt: "Intelligent HR",
            title: "Intelligent HR",
            description: `Welcome to our Intelligent HR services, where we provide comprehensive human resources solutions tailored specifically for jewelers.`,
        },
        // {
        //     id: 6,
        //     src: `${Images.service_ourcourse}`,
        //     alt: "Our Courses",
        //     title: "Our Courses",
        //     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
        // },
        {
            id: 6,
            src: `${Images.service_headwayit}`,
            alt: "Headway IT",
            title: "Headway IT",
            description: `Welcome to IT for Jewellers, the latest offering from Headway Business Solutions LLP designed to revolutionize the way jewellers operate in the digital landscape.`,
        },
        {
            id: 7,
            src: `${Images.service_headwayinit}`,
            alt: "Headway Initiatives",
            title: "Headway Initiatives",
            description: `Discover My Bharatiya Zaveri Bazaar (MyBzB), an online jewellery shopping platform by Headway Business Solutions LLP, dedicated to showcasing the timeless allure of Indian jewellery craftsmanship.`,
        },

    ];

    const ServiceCard = ({ id, src, alt, title, description }) => {
        const navigate = useNavigate();

        const handleNavigate = (title) => {

            switch (title) {
                case 'Startups':
                    navigate('/start_up');
                    break;
                case 'Make My Business':
                    navigate('/make_my_business');
                    break;
                case 'Jewellery Vidhyapith':
                    navigate('/jewellery_vidhyapith');
                    break;
                case 'Individual Development Program':
                    navigate('/idb');
                    break;
                case 'Intelligent HR':
                    navigate('/intelligent_hr');
                    break;
                // case 'Our Courses':
                //     navigate('/our_courses');
                //     break;
                case 'Headway IT':
                    navigate('/headway_IT');
                    break;
                case 'Headway Initiatives':
                    navigate('/headway_initiatives');
                    break;

                default:
                    break;
            }
        };
        return (

            <div
                className={`bg-white relative h-fit flex flex-col grow px-8 py-8 rounded-3xl shadow-orange-50 shadow-lg max-md:px-5 max-md:mt-6 max-md:w-full max-md:max-w-full ${id % 2 === 0 ? 'mt-12' : ''}`}
            >
                <div>
                    <img
                        loading="lazy"
                        alt="Images"
                        width=""
                        height=""
                        src={Images.our_section_div_circle_bg}
                        className="absolute h-24 right-0 top-0"
                    />
                </div>
                <div className="z-10 flex justify-center items-center flex-col">
                    <div className="flex gap-5 justify-between max-md:flex-wrap">
                        <div className="flex justify-center items-center px-3.5 w-16 h-16 terms_bg_clr rounded-[37.44px]">
                            <img loading="lazy" src={src} alt={alt} className="w-9 aspect-square" />
                        </div>

                    </div>
                    <div className="flex-auto my-auto text-2xl font-medium text-center text-zinc-800 max-md:max-w-full ">
                        {title}
                    </div>
                    <p className="mt-6 text-xl text-zinc-600 max-md:max-w-full text-center"
                        style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4 }}
                    >{description}</p>
                    <div className="mt-5">
                        <div
                            onClick={() => handleNavigate(title)}
                            className="hover-change cursor-pointer flex px-6 hover:bg-orange-500 hover:text-white exit flex gap-3 justify-center self-start py-2 text-base font-medium text-orange-500 rounded-lg border border-solid border-[color:var(--primary-orange-f-6821-f,#F6821F)] max-md:px-5"
                        >
                            <div className="select">Explore</div>
                            <img
                                loading="lazy"
                                data-src-hover={Images.arr_right_white_clr}
                                src={Images.arr_right_orange_clr}

                                className="my-auto w-4 aspect-square"
                                alt=''
                            />
                        </div>
                    </div>
                    {/* {title !== 'Our Courses' && (
                        <div className="mt-5">
                            <div
                                onClick={() => handleNavigate(title)}
                                className="hover-change cursor-pointer flex px-6 hover:bg-orange-500 hover:text-white exit flex gap-3 justify-center self-start py-2 text-base font-medium text-orange-500 rounded-lg border border-solid border-[color:var(--primary-orange-f-6821-f,#F6821F)] max-md:px-5"
                            >
                                <div className="select">Explore</div>
                                <img
                                    loading="lazy"
                                    data-src-hover={Images.arr_right_white_clr}
                                    src={Images.arr_right_orange_clr}

                                    className="my-auto w-4 aspect-square"
                                    alt=''
                                />
                            </div>
                        </div>
                    )} */}
                </div>

            </div>


        );
    }

    return (
        <section className="relative flex justify-center items-center px-16 py-20 bg-white max-md:px-5 mb-20 max-sm:py-0 max-sm:mb-0"
            ref={titleRef}
        >
            <div className="absolute  top-0">
                <img
                    // src={Images.blog_post_bg}
                    src={Images.our_services_section_vector_bg}
                    alt="Images"
                    loading="lazy"
                    className=""
                    fetchPriority="high"
                    width=""
                    height=""
                />
            </div>
            <section className="z-10 flex flex-col max-w-full w-[1296px]">
                <header className="flex gap-5 w-full justify-between font-medium max-md:flex-wrap max-md:max-w-full ">
                    <h1
                        // className="flex-auto text-5xl max-md:text-4xl"
                        className={`flex-auto text-5xl text-zinc-800 max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className="leading-[58px] text-zinc-800">Our</span>{" "}
                        <span className="font-bold leading-[58px]  text-orange-500"> Services </span>
                    </h1>
                    <p className="flex-auto my-auto text-2xl text-zinc-800 max-md:max-w-full text-end">
                        Let Your Jewellery Store Bloom from Seed to Success:
                    </p>
                </header>

                <div className="mt-9 grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full max-w-[90%] mx-auto">
                    {servicesData.slice(0, 4).map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
                <div className="flex gap-5 justify-between grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5 w-full lg:max-w-[70%] mx-auto">
                    {servicesData.slice(4, 7).map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>

                {/* <div className="justify mt-14 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full max-w-[90%] mx-auto">
                        {servicesData.map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div> */}

            </section>
        </section>
    )

};

export default UpdatedAnimatedComponent(OurServicesSection);