import React from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const HeadwayITOnlineMarketing = ({ titleRef, isVisible }) => {

    const servicesData = [
        {
            id: 1,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cd9239ce7f31af42e1b822fadb56a18cc33c1a516ba21970530e55858e4d864?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Search Engine Marketing and SEO",
            title: "Search Engine Marketing and SEO",
            description:
                `Optimize websites for search engines and implement 
                strategic search engine marketing campaigns to 
                improve visibility and drive targeted traffic to jewellers' 
                websites.`,
        },
        {
            id: 2,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a86d080340f2a24f410a1c1d013e1745d36f9443f02ec734c70000322346b88?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Social Media Marketing",
            title: "Social Media Marketing",
            description:
                `Harness the power of social media platforms to build 
                brand awareness, engage with customers, and drive 
                sales through targeted advertising and compelling 
                content.`,
        },
        {
            id: 3,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11f5b2f84c3b4dc39011ed8bb5532913b9246a1abac8b3c285b272c5a3cc889f?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Display Marketing",
            title: "Display Marketing",
            description:
                `Deploy visually appealing display advertising 
                campaigns across relevant websites and platforms 
                to increase brand visibility and attract potential 
                customers.`,
        },
        {
            id: 4,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d9ec73aab46b4f6805c81bb1f37f822524d3f96cfc610c373a1015590a9560f?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Email Marketing",
            title: "Email Marketing",
            description:
                `Execute targeted email marketing campaigns to 
                nurture leads, promote products, and drive 
                conversions, leveraging personalized messaging and 
                automation tools.`,
        },
    ];

    const ServiceCard = ({ src, alt, title, description }) => (


        <div
            className="relative bg-white  flex flex-col grow px-8 py-8 rounded-3xl shadow-orange-50 shadow-lg max-md:px-5 max-md:mt-6 max-md:w-full max-md:max-w-full"
        // className="border absolute top-[5%]"
        >
            <div>
                <img
                    loading="lazy"
                    alt="Images"
                    src={Images.our_section_div_circle_bg}
                    className="absolute h-40 right-0 top-0"
                />
            </div>
            <div className="z-10 ">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                    <div className="flex justify-center items-center px-3.5 w-16 h-16 terms_bg_clr rounded-[37.44px]">
                        <img loading="lazy" src={src} alt={alt} className="w-9 aspect-square" />
                    </div>
                    <div className="flex-auto my-auto text-2xl font-medium text-start text-zinc-800 max-md:max-w-full ">
                        {title}
                    </div>
                </div>
                <p className="mt-6 text-xl text-zinc-600 max-md:max-w-full">{description}</p>
            </div>
        </div>


    );

    return (
        <div className="relative flex justify-center items-center px-16 py-20 bg-white max-md:px-5 mb-20 max-sm:mb-0"
            ref={titleRef}
        >
            <div className="absolute  top-0">
                <img
                    // src={Images.blog_post_bg}
                    src={Images.our_services_section_vector_bg}
                    alt="Images"
                    loading="lazy"
                    className="  "
                />
            </div>
            <section className="text-start z-10 flex flex-col max-w-full w-[1296px]">
                <header className="flex flex-col text-center gap-5 w-full justify-between font-medium max-md:flex-wrap max-md:max-w-full ">
                    <h1
                        // className="flex-auto text-5xl max-md:text-4xl"
                        className={`flex-auto text-5xl text-zinc-800 max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className="leading-[58px] text-zinc-800">Online </span>{" "}
                        <span className="font-bold leading-[58px]  text-orange-500"> Marketing </span>
                    </h1>
                    {/* <p className="flex-auto my-auto text-2xl text-zinc-800 max-md:max-w-full text-end">
                        Let Your Jewellery Store Bloom from Seed to Success:
                    </p> */}
                    <div className="mt-6 max-md:max-w-full text-zinc-600 text-xl">
                        Headway Business Solutions LLP goes beyond simply "coaching" and "consulting." We are committed to
                        fostering long-term relationships with our clients, acting as trusted advisors and partners on their
                        journey towards achieving their unique jewellery business aspirations.
                    </div>
                </header>
                <div className="justify mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
                        {/* {servicesData.slice(0, 2).map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))} */}
                        {servicesData.map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div>
                {/* <div className="justify-center mt-8 max-md:pl-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {servicesData.slice(2).map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div> */}
            </section>
        </div>
    )

};

export default UpdatedAnimatedComponent(HeadwayITOnlineMarketing);