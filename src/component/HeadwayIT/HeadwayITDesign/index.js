import React from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const HeadwayITDesign = ({ titleRef, isVisible }) => {

    const servicesData = [
        {
            id: 1,
            src: `${Images.headway_it_website_icon}`,
            alt: "Website Design",
            title: "Website Design",
            description:
                `Craft visually stunning 
                and user-friendly 
                websites tailored 
                specifically for jewellers, 
                providing an immersive 
                online experience for 
                customers and driving 
                engagement.`,
        },
        {
            id: 2,
            src: `${Images.headway_it_mobile_design_icon}`,
            alt: "Mobile App Design",
            title: "Mobile App Design",
            description: `Develop intuitive and 
            engaging mobile applications 
            that enable jewellers to 
            connect with their customers 
            on the go, offering seamless 
            access to products and 
            services.`

        },
        {
            id: 3,
            src: `${Images.headway_it_branding_icon}`,
            alt: "Branding",
            title: "Branding",
            description: `Create captivating brand 
            identities that resonate 
            with the target audience, 
            encompassing logo design, 
            brand documents, 
            merchandise, business 
            cards, brochures, and 
            more.`,
        },
        {
            id: 4,
            src: `${Images.headway_it_graphic_icon}`,
            alt: "Graphic Design",
            title: "Graphic Design",
            description: `Produce eye-catching 
            graphics for social media 
            platforms, email templates, 
            infographics, and other 
            marketing collateral, 
            reinforcing brand messaging 
            and driving engagement.`,
        },
       

    ];

    const ServiceCard = ({ id, src, alt, title, description }) => {
       

      
        return (

            <div
                // className="relative   flex flex-col grow px-8 py-8 rounded-3xl shadow-orange-50 shadow-lg max-md:px-5 max-md:mt-6 max-md:w-full max-md:max-w-full"
                className={`relative h-fit flex flex-col grow px-8 py-8 rounded-3xl shadow-orange-50 shadow-lg max-md:px-5 max-md:mt-6 max-md:w-full max-md:max-w-full ${id % 2 === 0 ? 'mt-12' : ''}`}
            >
                <div>
                    <img
                        loading="lazy"
                        alt="Images"
                        src={Images.our_section_div_circle_bg}
                        className="absolute h-24 right-0 top-0"
                    />
                </div>
                <div className="z-10 flex justify-center items-center flex-col">
                    <div className="flex gap-5 justify-between max-md:flex-wrap">
                        <div 
                        // className="flex justify-center items-center px-3.5 w-16 h-16 terms_bg_clr rounded-[37.44px]"
                        >
                            {/* <img loading="lazy" src={src} alt={alt} className="w-9 aspect-square" /> */}
                            <img loading="lazy" src={src} alt={alt} className="w-20 aspect-square" />
                        </div>

                    </div>
                    <div className="mt-4 flex-auto my-auto text-2xl font-medium text-center text-zinc-800 max-md:max-w-full ">
                        {title}
                    </div>
                    <p className="mt-3 text-xl text-zinc-600 max-md:max-w-full text-center">{description}</p>
                    {/* <div className="mt-5">
                        <div
                           
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
                    </div> */}
                </div>

            </div>


        );
    }

    return (
        <>
            <section ref={titleRef}>
                <div className="flex overflow-hidden  flex-col items-center px-16 pt-12 pb-6 w-full fill-stone-50 min-h-[304px] max-md:px-5 max-md:max-w-full">
                    {/* <img
                        loading="lazy"
                        src={Images.orange_vector}
                        className="object-cover absolute inset-0 -z-10"
                        alt=''
                    /> */}
                    <div className="flex justify-center items-center w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col my-6 max-w-full w-[1296px]">
                            <div
                                // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                                className={`text-start text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                            >
                                {/* <span className=" leading-[58px]">Why Choose</span>{" "} */}
                                {/* <span className="font-bold text-orange-500 leading-[58px]">
                                Design
                                </span> */}
                                <div
                                    // className="text-3xl font-medium"
                                    className={`text-3xl font-medium ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    {/* <span className="leading-7 ">Our</span>{" "} */}
                                    <span className="font-bold  leading-[58px] text-orange-500 text-5xl">Design</span>
                                </div>
                                <div className="mt-3 text-xl text-zinc-600">
                                    Our Design service offers bespoke solutions tailored to jewelers, including captivating website design, intuitive mobile app design,
                                    and compelling branding and graphic design services, ensuring a visually stunning and engaging online presence.
                                </div>
                            </div>
                            <div className="justify-center mt-12 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                {servicesData.map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdatedAnimatedComponent(HeadwayITDesign)