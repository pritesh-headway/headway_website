import React, { useEffect, useState } from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { decodeHTML } from '../../ReusableComp/DecodeHtmlData';

const AboutJourney = ({ titleRef, isVisible }) => {

    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(false);

    useEffect(() => {
        // Check screen size on initial render
        checkScreenSize();

        // Event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup function
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const checkScreenSize = () => {
        // Update state based on screen width
        setIsMediumOrSmaller(window.innerWidth <= 1024); // Adjust breakpoint as needed
    };
// this is testing
    const data = [
        {
            id: 1,
            step: '01',
            title: 'From Family Legacy to Business Empire',
            desc1: ` Our journey at Headway Business Solutions LLP has been a remarkable odyssey
            of growth, innovation, and unwavering dedication, spanning from the early 2000s to
            the present day.`,
            desc2: ` Anchored by Mr Paresh Rajpara&#39;s familial ties to the jewellery
            business, our story commenced with a personal touch as he began imparting his
            extensive knowledge to a close circle of friends. This initial phase set the foundation
            for what would evolve into a transformative venture in the dynamic world of jewellery.`,
            imgUrl: `${Images.about_journey_one}`,
            year: '2003'
        },
        {
            id: 2,
            step: '02',
            title: 'Seeds of Success',
            desc1: `  In the earlier phase of our journey, we officially took flight under the banner of
            &quot;Solution@100%,&quot; operating as a proprietor entity.`,
            desc2: ` During this period, Mr Rajpara&#39;s
            training encompassed every facet of the jewellery business, extending guidance to
            staff, owners, manufacturers, retailers, and wholesalers alike. As we broke our
            records of success, the need for evolution became evident. Mr. Rajpara orchestrated
            a strategic restructuring, birthing &quot;Headway Business Solutions LLP&quot; from the
            crucible of experience and accomplishment.`,
            imgUrl: `${Images.about_journey_four}`,
            year: '2008'
        },
        {
            id: 3,
            step: '03',
            title: 'Building a Dream Team',
            desc1: `    The transition from a small firm to the esteemed &quot;Headway Business Solutions
            LLP&quot; marked a pivotal chapter in our narrative.`,
            desc2: `  With a team now comprising more
            than 20 qualified industry experts, our commitment to excellence and growth has
            only deepened. As we navigate the landscape of 2024-25, our journey stands as a
            testament to resilience, innovation, and an unyielding pursuit of setting new
            standards in the jewellery business coaching and consulting domain.`,
            imgUrl: `${Images.about_journey_three}`,
            year: '2016'
        },
        {
            id: 4,
            step: '04',
            title: ' The Legacy Continues',
            desc1: `Our aim is to empower and inspire the jewellery industry&#39;s trailblazers, helping
            both budding startups and established businesses flourish in an ever-evolving
            market.`,
            desc2: `We are committed to fostering the growth of new jewellery ventures by
            providing strategic guidance, personalized coaching, and a roadmap for success.
            We aim to ignite positive change and drive transformation across the industry. At
            Headway, we believe in the transformative power of collaboration, and our mission is
            to be the guiding force that propels your jewellery business to new heights.`,
            imgUrl: `${Images.about_journey_two}`,
            year: '2024'
        },
    ]

    return (
        <>
            <div ref={titleRef}>
                {!isMediumOrSmaller && (

                    <div className="relative flex justify-center items-center px-16 py-12 w-full bg-orange-lightclr max-md:px-5 max-md:max-w-full ">
                        <img
                            loading="lazy"
                            // src={Images.about_us_vector}
                            src={Images.about_us_vector}
                            className="object-cover absolute top-0"
                            alt=''
                        />
                        <div className="z-10 flex flex-col my-6 max-w-[1296px]">

                            <div
                                className={`text-start text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                            >
                                <span className=" leading-[58px]">Our</span>{" "}
                                <span className="font-bold text-orange-500 leading-[58px]">
                                    Journey
                                </span>
                            </div>
                            {data.map((item, index) => (
                                <div key={index} className='pb-12' >
                                    {item.id % 2 !== 0 ? (

                                        <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full max-md:hidden">
                                            <div className=" flex max-md:flex-col max-md:gap-0 max-md: gap-5">

                                                <div className="relative  gap-5 flex w-[50%] max-md:ml-0 max-md:w-full ">
                                                    <div className="absolute text-end  font-black text-white text-[160px] max-md:text-4xl max-sx  w-full">
                                                        {item.year}
                                                    </div>
                                                    <div className='flex flex-col  w-fit items-center'>
                                                        <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                            {item.step}
                                                        </div>
                                                        <div>
                                                            <img
                                                                src={Images.journey_dashed_vect_l_to_r}
                                                                alt=''
                                                                loading='lazy '
                                                                className='absolute  '


                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-start self-stretch text-lg max-md:max-w-full z-10">


                                                        <div className='mx-auto  w-[100%]'>
                                                            <h3 className='text-start font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                                {item.title}
                                                            </h3>
                                                            <div className="text-start mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                                {decodeHTML(item.desc1)}
                                                            </div>
                                                            <div className="text-start mt-4 text-zinc-600 max-md:max-w-full   2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                                {decodeHTML(item.desc2)}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className=" flex flex-row  w-[50%] gap-5 max-md:ml-0 max-md:w-full rounded-xl ">
                                                    <div className='w-[80%] mx-auto'>
                                                        <img
                                                            loading="lazy"
                                                            src={item.imgUrl}

                                                            alt="Images"
                                                        />
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    ) : (

                                        <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full max-md:hidden">
                                            <div className=" flex max-md:flex-col max-md:gap-0 max-md: w-[95%] mx-auto">
                                                <div className="relative flex flex-row  gap-5 w-[55%] max-md:ml-0 max-md:w-full rounded-xl ">
                                                    <div className='w-[70%] mx-auto'>
                                                        <img
                                                            loading="lazy"
                                                            src={item.imgUrl}

                                                            alt="Images"
                                                        />
                                                    </div>
                                                    <div className='flex flex-col '>
                                                        <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                            {item.step}
                                                        </div>
                                                        {item.id !== 4 && (
                                                            <div>
                                                                <img
                                                                    src={Images.journey_dashed_vect_r_to_l}
                                                                    alt=''
                                                                    loading='lazy '
                                                                    className='absolute pe-5 right-[0%] w-auto h-auto'


                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="relative  flex w-[50%] mx-auto max-md:ml-0 max-md:w-full">
                                                    <div className="absolute text-end font-black text-white text-[160px] max-md:text-4xl max-sx w-full">
                                                        {item.year}
                                                    </div>

                                                    <div className="flex flex-row w-[80%] mx-auto items-start self-stretch text-lg max-md:max-w-full z-10">


                                                        <div className='mx-auto text-start w-[100%]'>
                                                            <h3 className='font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                                {item.title}
                                                            </h3>
                                                            <div className="mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                            {decodeHTML(item.desc1)}
                                                            </div>
                                                            <div className="mt-4 text-zinc-600 max-md:max-w-full   2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                            {decodeHTML(item.desc2)}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}



                        </div>
                    </div>
                )}

                {isMediumOrSmaller && (
                    <div className="flex justify-center items-center px-16 py-12 w-full bg-orange-lightclr max-md:px-5 max-md:max-w-full relative" >
                        <img
                            loading="lazy"
                            // src={Images.about_us_vector}
                            src={Images.about_us_vector}
                            className="object-cover absolute top-0"
                            alt=''
                        />
                        <div className="text-start flex flex-col px-6 py-9 mx-auto w-full max-w-[640px] z-10">
                            <div
                                // className="text-3xl font-medium"
                                className={`text-3xl font-medium ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                            >
                                <span className="leading-7 ">Our</span>{" "}
                                <span className="font-bold leading-7 text-orange-500">Journey</span>
                            </div>
                            {/* <div className="mt-3 text-base text-zinc-600">
                            The pioneer in Business development and solutions. We understand
                            transformation in time and enable to grow Business in the 360 degree
                            horizon.
                        </div> */}

                            <div className=" flex mt-8">
                                <div className=" flex flex-col ml-5 items-center ">

                                    <div className="font-outline-1 self-stretch text-2xl ">
                                        01
                                    </div>
                                    <div>
                                        <img
                                            src={Images.mobile_journey_vector}
                                            alt=''
                                            loading='lazy '
                                            className='max-h-[67%] absolute mt-3'
                                        // className=' h-[50%]'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col '>
                                    <div className="absolute self-start font-black text-white text-9xl text-center w-full max-sm:text-8xl max-sm:w-auto">
                                        2003
                                    </div>
                                    <div
                                        className="z-10 mx-auto flex flex-col items-start text-lg max-md:max-w-full px-5"

                                    >
                                        <h3 className='font-bold text-2xl'>
                                            From Family Legacy to Business Empire
                                        </h3>
                                        <div className="self-end text-base text-zinc-700 mt-5">
                                            Our journey at Headway Business Solutions LLP has been a remarkable odyssey
                                            of growth, innovation, and unwavering dedication, spanning from the early 2000s to
                                            the present day.
                                        </div>
                                        <div className="self-end  text-base text-zinc-700 mt-4 ">
                                            Anchored by Mr Paresh Rajpara&#39;s familial ties to the jewellery
                                            business, our story commenced with a personal touch as he began imparting his
                                            extensive knowledge to a close circle of friends. This initial phase set the foundation
                                            for what would evolve into a transformative venture in the dynamic world of jewellery.
                                        </div>

                                        <div className='mt-5 rounded-2xl'>
                                            <img
                                                src={Images.about_journey_one}
                                                // src={Images.journey1}
                                                alt=''
                                                loading='lazy '
                                            // className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[40%] 2xl:left-[13%] max-2xl:aspect-[1.6] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" flex mt-8">
                                <div className=" flex flex-col ml-5 items-center ">

                                    <div className="font-outline-1 self-stretch text-2xl ">
                                        02
                                    </div>
                                    <div>
                                        <img
                                            src={Images.mobile_journey_vector}
                                            alt=''
                                            loading='lazy '
                                            className='max-h-[67%] absolute mt-3'
                                        // className=' h-[50%]'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col '>
                                    <div className="absolute self-start font-black text-white text-9xl text-center w-full max-sm:text-8xl max-sm:w-auto">
                                        2008
                                    </div>
                                    <div
                                        className="z-10 mx-auto flex flex-col items-start text-lg max-md:max-w-full px-5 "

                                    >
                                        <h3 className='font-bold text-2xl'>
                                            Seeds of Success
                                        </h3>
                                        <div className="self-end text-base text-zinc-700 mt-5">
                                            In the earlier phase of our journey, we officially took flight under the banner of
                                            &quot;Solution@100%,&quot; operating as a proprietor entity.
                                        </div>
                                        <div className="self-end  text-base text-zinc-700 mt-4 ">
                                            During this period, Mr Rajpara&#39;s
                                            training encompassed every facet of the jewellery business, extending guidance to
                                            staff, owners, manufacturers, retailers, and wholesalers alike. As we broke our
                                            records of success, the need for evolution became evident. Mr. Rajpara orchestrated
                                            a strategic restructuring, birthing &quot;Headway Business Solutions LLP&quot; from the
                                            crucible of experience and accomplishment.
                                        </div>

                                        <div className='mt-5 '>
                                            <img
                                                src={Images.about_journey_four}
                                                // src={Images.journey1}
                                                alt=''
                                                loading='lazy '
                                            // className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[40%] 2xl:left-[13%] max-2xl:aspect-[1.6] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" flex mt-8">
                                <div className=" flex flex-col ml-5 items-center ">

                                    <div className="font-outline-1 self-stretch text-2xl ">
                                        03
                                    </div>
                                    <div>
                                        <img
                                            src={Images.mobile_journey_vector}
                                            alt=''
                                            loading='lazy '
                                            className='max-h-[67%] absolute mt-3'
                                        // className=' h-[50%]'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col '>
                                    <div className="absolute self-start font-black text-white text-9xl text-center w-full max-sm:text-8xl max-sm:w-auto">
                                        2016
                                    </div>
                                    <div
                                        className="z-10 mx-auto flex flex-col items-start text-lg max-md:max-w-full px-5"

                                    >
                                        <h3 className='font-bold text-2xl'>
                                            Building a Dream Team
                                        </h3>
                                        <div className="self-end text-base text-zinc-700 mt-5">
                                            The transition from a small firm to the esteemed &quot;Headway Business Solutions
                                            LLP&quot; marked a pivotal chapter in our narrative.
                                        </div>
                                        <div className="self-end  text-base text-zinc-700 mt-4 ">
                                            With a team now comprising more
                                            than 20 qualified industry experts, our commitment to excellence and growth has
                                            only deepened. As we navigate the landscape of 2024-25, our journey stands as a
                                            testament to resilience, innovation, and an unyielding pursuit of setting new
                                            standards in the jewellery business coaching and consulting domain.
                                        </div>

                                        <div className='mt-5 '>
                                            <img
                                                src={Images.about_journey_two}
                                                // src={Images.journey1}
                                                alt=''
                                                loading='lazy '
                                            // className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[40%] 2xl:left-[13%] max-2xl:aspect-[1.6] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" flex mt-8">
                                <div className=" flex flex-col ml-5 items-center ">

                                    <div className="font-outline-1 self-stretch text-2xl ">
                                        04
                                    </div>

                                </div>
                                <div className='flex flex-col '>
                                    <div className="absolute self-start font-black text-white text-9xl text-center w-full max-sm:text-8xl max-sm:w-auto">
                                        2024
                                    </div>
                                    <div
                                        className="z-10 mx-auto flex flex-col items-start text-lg max-md:max-w-full px-5"

                                    >
                                        <h3 className='font-bold text-2xl'>
                                            The Legacy Continues
                                        </h3>
                                        <div className="self-end text-base text-zinc-700 mt-5">
                                            Our aim is to empower and inspire the jewellery industry&#39;s trailblazers, helping
                                            both budding startups and established businesses flourish in an ever-evolving
                                            market.
                                        </div>
                                        <div className="self-end  text-base text-zinc-700 mt-4 ">
                                            We are committed to fostering the growth of new jewellery ventures by
                                            providing strategic guidance, personalized coaching, and a roadmap for success.
                                            We aim to ignite positive change and drive transformation across the industry. At
                                            Headway, we believe in the transformative power of collaboration, and our mission is
                                            to be the guiding force that propels your jewellery business to new heights.
                                        </div>

                                        <div className='mt-5 '>
                                            <img
                                                src={Images.about_journey_three}
                                                // src={Images.journey1}
                                                alt=''
                                                loading='lazy '
                                            // className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[40%] 2xl:left-[13%] max-2xl:aspect-[1.6] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(AboutJourney)