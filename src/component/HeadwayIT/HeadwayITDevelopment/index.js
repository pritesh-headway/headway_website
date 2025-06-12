import React from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { decodeHTML } from '../../ReusableComp/DecodeHtmlData';

const HeadwayITDevelopment = ({ titleRef, isVisible }) => {

    const data = [
        {
            id: 1,
            title: 'Web Development',
            src: `${Images.headway_it_web_icon}`,
            desc: `Build robust and dynamic 
            websites equipped with 
            advanced functionalities, 
            including online catalogues, e-
            commerce capabilities, and 
            secure payment gateways.`
        },
        {
            id: 2,
            title: 'Mobile App Development',
            src: `${Images.headway_it_mobile_develop_icon}`,
            desc: `Develop custom mobile 
            applications compatible with 
            various platforms, enabling 
            jewellers to offer personalized 
            experiences and drive 
            customer loyalty.`
        },

        {
            id: 3,
            title: 'Ecommerce Portal',
            src: `${Images.headway_it_ecommerce_icon}`,
            desc: `Design and develop secure 
            and user-friendly e-
            commerce portals, providing 
            jewellers with a platform to 
            showcase their products, 
            manage inventory, and 
            process transactions online.`
        },
        {
            id: 4,
            title: 'Content Management',
            src: `${Images.headway_it_content_icon}`,
            desc: `Implement efficient content 
            management systems to 
            streamline the creation, 
            publication, and management 
            of content across digital 
            platforms, ensuring 
            consistency and relevance.`
        }
    ]

    const ServiceCard = ({ icon, title, desc, src }) => (

        <div className="headwayitdevelopment flex flex-col grow justify-between text-center max-md:mt-6  px-8 py-10 bg-white rounded-3xl shadow-lg shadow-orange-100 ">
            {/* <div className="shrink-0 self-center bg-stone-50 h-[100px] rounded-[58.5px] w-[100px]">
                {icon}
            </div>
            <div className="flex flex-col justify-end px-8 py-10 bg-white rounded-3xl shadow-lg max-md:px-5">
                <h3 className="text-2xl font-medium text-zinc-800">{title}</h3>
                <p className="mt-3 text-lg text-zinc-600">{desc}</p>
            </div> */}
            <div className="flex flex-col gap-4 self-center items-center ">
                <div
                    // className="flex justify-center items-center px-4 w-14 h-14 aspect-square bg-orange-50 rounded-[58.5px]"
                    // className='flex justify-center items-center px-6 bg-orange-50 h-[100px] rounded-[58.5px] w-[100px] max-md:px-5'
                >
                    <img
                        loading="lazy"
                        alt="Images"
                        // className="w-full aspect-square"
                        // src={Images.value_group}
                        className="w-20 aspect-square"
                        src={src}
                    />
                </div>
                <div
                    // className="grow my-auto text-2xl font-medium text-center text-zinc-800 border"
                    className="grow my-auto text-2xl font-medium text-center text-zinc-800 "
                >
                    {title}
                </div>
            </div>
            <div className="mt-6 text-lg text-zinc-600 ">
                {decodeHTML(desc)}
            </div>
        </div>
    );
    return (
        <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full max-sm:py-0" >
            <div className="flex flex-col my-6 max-w-full w-[1296px] max-sm:my-3" ref={titleRef}>
                <div
                    // className="headway_it_develop self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl"
                    className={` self-center text-5xl font-medium text-center max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                >
                    <span className=" leading-[58px]">Our</span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">
                        Development
                    </span>


                    <div className="mt-3 text-xl text-zinc-600">
                        The Development segment of "IT for Jewellers" transforms digital aspirations into reality with cutting-edge web and mobile app
                        development, robust ecommerce portals, and seamless content management systems designed specifically for the unique needs
                        of the jewellery industry.
                    </div>
                </div>
                {/* <h1>
                    <span class="word">Schitt </span>
                    <span class="word">Creek</span>
                </h1> */}
                <div className="justify-center mt-12 max-md:mt-10 max-md:max-w-full">
                    {/* <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        {data.map((item, index) => (
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-start mx-auto w-full bg-white rounded-xl max-md:mt-8">
                                    <div className="flex gap-4 self-start">
                                        <div className="flex justify-center items-center px-4 w-14 h-14 aspect-square bg-orange-50 rounded-[58.5px]">
                                            <img
                                                loading="lazy"
                                                alt=""
                                                className="w-full aspect-square"
                                                src={Images.value_group}
                                            />
                                        </div>
                                        <div className="grow my-auto text-2xl font-medium text-center whitespace-nowrap text-zinc-800">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="mt-6 text-lg text-zinc-600">
                                        {decodeHTML(item.desc)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <section className="self-stretch">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {data.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col ml-5  max-md:ml-0 max-md:w-full"
                                >
                                    <ServiceCard {...service} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default UpdatedAnimatedComponent(HeadwayITDevelopment)