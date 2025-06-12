import React from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";
import { decodeHTML } from "../../ReusableComp/DecodeHtmlData";

const JewelleryCrafting = ({ titleRef, isVisible }) => {

    const servicesData = [
        {
            id: 1,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cd9239ce7f31af42e1b822fadb56a18cc33c1a516ba21970530e55858e4d864?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Training Mode and Duration ",
            title: "Training Mode and Duration ",
            description:
                `The three-month training program will be delivered through 
                both online and offline modes, ensuring accessibility and 
                convenience for all participants. We plan to conduct 15 to 20 
                sessions, each lasting two hours, tailored to instill both 
                theoretical knowledge and practical skills in our students.`,
        },
        {
            id: 2,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a86d080340f2a24f410a1c1d013e1745d36f9443f02ec734c70000322346b88?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Investment in Future Talent",
            title: "Investment in Future Talent",
            description:
                `Understanding the importance of investing in the next 
                generation, <span style={{color:'#F6821F'}}>Headway Business Solutions LLP<span> will cover all 
                training expenses, estimated at Rs 20,000 per trainee. Our 
                commitment to this cause underscores our belief in nurturing 
                talent that can significantly contribute to the industry's 
                growth.`,
        },
        {
            id: 3,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11f5b2f84c3b4dc39011ed8bb5532913b9246a1abac8b3c285b272c5a3cc889f?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Certification and Employment",
            title: "Certification and Employment",
            description:
                `Upon successful completion of the training, participants will 
                be awarded certificates, validating their skills and 
                knowledge. With over 20 years of experience in the jewellery 
                industry and a network spanning 3,000 establishments, we 
                are uniquely positioned to assist our graduates in securing 
                employment. Our placement efforts aim to offer 
                opportunities that can earn trainees a monthly income 
                ranging from INR 10,000 to INR 50,000.`,
        },
        {
            id: 4,
            src: `${Images.value_group}`,
            // src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d9ec73aab46b4f6805c81bb1f37f822524d3f96cfc610c373a1015590a9560f?apiKey=8e5983036f284a13866aae97819cdb73&",
            alt: "Training Language",
            title: "Training Language",
            description:
                `To ensure the program's inclusivity and reach, the training 
                will be imparted exclusively in Gujarati. This decision reflects 
                our dedication to catering to the local population's needs, 
                making education and training accessible to all.`,
        },
    ];

    const ServiceCard = ({ src, alt, title, description,id }) => (


        <div
        className={`relative bg-white  flex flex-col grow px-8 py-8 rounded-3xl shadow-orange-50 shadow-lg max-md:px-5 max-md:mt-6 max-md:w-full max-md:max-w-full ${id % 2 === 0 ? 'mt-12' : ''}`}
            // className="relative bg-white  flex flex-col grow px-8 py-8 rounded-3xl shadow-orange-50 shadow-lg max-md:px-5 max-md:mt-6 max-md:w-full max-md:max-w-full"
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
                    {/* <div className="flex justify-center items-center px-3.5 w-16 h-16 terms_bg_clr rounded-[37.44px]">
                        <img loading="lazy" src={src} alt={alt} className="w-9 aspect-square" />
                    </div> */}
                    <div className="flex-auto my-auto text-2xl font-medium text-start text-zinc-800 max-md:max-w-full ">
                        {title}
                    </div>
                </div>
                {/* <p className="mt-6 text-xl text-zinc-600 max-md:max-w-full">{decodeHTML(description)}</p> */}
                <div className="text-start mt-6 text-xl text-zinc-600 max-md:max-w-full">
                <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </div>


    );

    return (
        <div 
        // className="relative flex justify-center items-center px-16 py-20 bg-white max-md:px-5 mb-20"
        className="relative flex justify-center items-center px-16 py-20 bg-white max-md:px-5 max-sm:py-10"
            ref={titleRef}
        >
            {/* <div className="absolute  top-0">
                <img
                    // src={Images.blog_post_bg}
                    src={Images.our_services_section_vector_bg}
                    alt=""
                    loading="lazy"
                    className="  "
                />
            </div> */}
            <section className="z-10 flex flex-col max-w-full w-[1296px]">
                <header className="flex flex-col text-center max-sm:text-left gap-5 w-full justify-between font-medium max-md:flex-wrap max-md:max-w-full ">
                    <h1
                        // className="flex-auto text-5xl max-md:text-4xl"
                        className={`flex-auto text-4xl text-zinc-800 max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >

                        <span className="font-bold leading-[58px]  text-orange-500"> Learn. Create. Shine. Repeat. </span>{" "}
                        <span className="leading-[58px] text-zinc-800">— Crafting Futures, Shaping Careers </span>
                    </h1>
                    {/* <p className="flex-auto my-auto text-2xl text-zinc-800 max-md:max-w-full text-end">
                        Let Your Jewellery Store Bloom from Seed to Success:
                    </p> */}
                    <div className="text-center mt-6 max-md:max-w-full text-zinc-600 text-xl">
                        Jewellery Vidhyapith by <span className="text-orange-500">Headway Business Solutions LLP</span> is not just an educational initiative; it's a movement towards creating a self-reliant
                        India equipped with skilled professionals ready to make their mark in the gem and jewellery industry. As we embark on this journey, we
                        invite the youth of Gujarat to join us in shaping a brighter, more prosperous future.
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

export default UpdatedAnimatedComponent(JewelleryCrafting);