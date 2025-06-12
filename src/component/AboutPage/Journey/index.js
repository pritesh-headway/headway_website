import React, { useEffect, useState } from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const Journey = ({ titleRef, isVisible }) => {

    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(false);

    useEffect(() => {
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        // Cleanup function
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const checkScreenSize = () => {
        // Update state based on screen width
        setIsMediumOrSmaller(window.innerWidth <= 1024); // Adjust breakpoint as needed
    };

    return (
        <>
            <div ref={titleRef}>
                {!isMediumOrSmaller && (
                    <div className="flex justify-center items-center px-16 py-12 w-full bg-orange-lightclr max-md:px-5 max-md:max-w-full ">
                        <div className="flex flex-col my-6 max-w-[1296px]">
                            <div
                                // className="text-5xl font-medium  max-md:max-w-full max-md:text-4xl"
                                className={`text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                            >
                                <span className=" leading-[58px]">Our</span>{" "}
                                <span className="font-bold text-orange-500 leading-[58px]">
                                    Journey
                                </span>
                            </div>
                            {/* <div className="mt-6 text-lg text-zinc-600 max-md:max-w-full">
                            The pioneer in Business development and solutions. We understand
                            transformation in time and enable to grow Business in the 360 degree
                            horizon.
                        </div> */}
                            <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full max-md:hidden">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                    <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                                        <div className="absolute self-end font-black text-white text-[160px] max-md:text-4xl max-sx">
                                            2003
                                        </div>
                                        <div className="z-10 w-[85%] mx-auto flex flex-row items-start self-stretch my-auto text-lg max-md:mt-10 max-md:max-w-full">
                                            <div className=''>
                                                <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                    01
                                                </div>
                                                <div>
                                                    <img
                                                        src={Images.journey_dashed_vect_l_to_r}
                                                        alt=''
                                                        loading='lazy '
                                                        // className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[34%] 2xl:left-[19%] max-2xl:aspect-[1.4] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                                        className='absolute journey_r_to_l_vector 2xl:aspect-[1.4] 2xl:w-[34%] 2xl:left-[19%] 2xl:aspect-[1.4] 2xl:w-[30%] 2xl:left-[13%] xl:aspect-[1.3] xl:w-[44%] xl:pt-5 xl:left-[10%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                                    
                                                    />
                                                </div>
                                            </div>

                                            <div className='w-[80%] mx-auto mt-2 '>
                                                <h3 className='font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                    From Family Legacy to Business Empire
                                                </h3>
                                                <div className="mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                    Our journey at Headway Business Solutions LLP has been a remarkable odyssey
                                                    of growth, innovation, and unwavering dedication, spanning from the early 2000s to
                                                    the present day.
                                                </div>
                                                <div className="mt-4 text-zinc-600 max-md:max-w-full   2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                    Anchored by Mr Paresh Rajpara&#39;s familial ties to the jewellery
                                                    business, our story commenced with a personal touch as he began imparting his
                                                    extensive knowledge to a close circle of friends. This initial phase set the foundation
                                                    for what would evolve into a transformative venture in the dynamic world of jewellery.
                                                </div>
                                            </div>
                                            {/* <div className='w-[80%] mx-auto mt-2 '>
                                    <h3 className='font-bold'>
                                        Lorem ipsum Dummy
                                    </h3>
                                    <div className="mt-5 text-zinc-600 max-md:max-w-full">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s.
                                    </div>
                                    <div className="mt-4 text-zinc-600 max-md:max-w-full">
                                        when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only
                                        five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages.
                                    </div>
                                </div> */}

                                        </div>
                                    </div>
                                    <div className=" flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full rounded-xl ">
                                        <img
                                            loading="lazy"
                                            src={Images.about_journey_one}
                                            // src={Images.journey1}
                                            // className="grow w-full shadow-2xl aspect-[1.47] max-md:mt-10 max-md:max-w-full"
                                            // className="grow w-full shadow-2xl max-md:mt-10 max-md:max-w-full rounded-xl shadow-orange-100"
                                            alt="Images"
                                        />

                                    </div>
                                </div>
                            </div>
                            {/* <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full max-md:hidden">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

                                    <div className=" flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={Images.about_journey_two}
                                            alt=""
                                        />

                                    </div>
                                    <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                                        <div className="absolute self-end font-black text-white text-[160px] max-md:text-4xl ">
                                            2000
                                        </div>
                                        <div className="z-10 w-[85%] mx-auto flex flex-row items-start self-stretch my-auto text-lg max-md:mt-10 max-md:max-w-full">
                                            <div className=''>
                                                <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                    01
                                                </div>
                                                <div>
                                                    <img
                                                        src={Images.journey_dashed_vect_r_to_l}
                                                        alt=''
                                                        loading='lazy '
                                                        className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[40%] 2xl:left-[13%] max-2xl:aspect-[1.6] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                                    />
                                                </div>
                                            </div>

                                            <div className='w-[80%] mx-auto mt-2'>
                                                <h3 className='font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                    Seeds of Success
                                                </h3>
                                                <div className="mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                    In the earlier phase of our journey, we officially took flight under the banner of
                                                    &quot;Solution@100%,&quot; operating as a proprietor entity.
                                                </div>
                                                <div className="mt-4 text-zinc-600 max-md:max-w-full   2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                    During this period, Mr Rajpara&#39;s
                                                    training encompassed every facet of the jewellery business, extending guidance to
                                                    staff, owners, manufacturers, retailers, and wholesalers alike. As we broke our
                                                    records of success, the need for evolution became evident. Mr. Rajpara orchestrated
                                                    a strategic restructuring, birthing &quot;Headway Business Solutions LLP&quot; from the
                                                    crucible of experience and accomplishment.
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="justify-between mt-5 md:mt-10 max-md:max-w-full max-md:hidden xl:mt-10">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: xl:gap-0 justify-around flex-wrap">
                                    <div className="relative flex flex-row w-[40%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={Images.about_journey_four}
                                           
                                            alt="Images"
                                      
                                        />
                                        <div>
                                            <img
                                                src={Images.journey_dashed_vect_r_to_l}
                                                alt=''
                                                loading='lazy '
                                                className='absolute xl:aspect-[1.8] xl:top-[33%] xl:left-[28%] xl:width-[12%] lg:aspect-[1.5] lg:top-[28%] lg:left-[16%] lg:width-[98%] z-10'
                                            />
                                        </div>
                                    </div> 
                                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                                            <div className="relative self-end font-black text-white text-[160px] max-md:text-4xl">
                                                2008
                                            </div>
                                            
                                            <div className='absolute flex '>
                                                <div className='flex flex-col'>
                                                    <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                        02
                                                    </div>

                                                </div>
                                                <div className='xl:w-[70%] me-auto ms-10'>
                                                    <h3 className='font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                        Seeds of Success
                                                    </h3>
                                                    <div className="mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                        In the earlier phase of our journey, we officially took flight under the banner of
                                                        &quot;Solution@100%,&quot; operating as a proprietor entity.
                                                    </div>
                                                    <div className="mt-4 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                        During this period, Mr Rajpara&#39;s
                                                        training encompassed every facet of the jewellery business, extending guidance to
                                                        staff, owners, manufacturers, retailers, and wholesalers alike. As we broke our
                                                        records of success, the need for evolution became evident. Mr. Rajpara orchestrated
                                                        a strategic restructuring, birthing &quot;Headway Business Solutions LLP&quot; from the
                                                        crucible of experience and accomplishment.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-end self-stretch my-auto text-lg max-md:mt-10 max-md:max-w-full">
                                <div className="self-stretch text-5xl font-medium max-md:max-w-full max-md:text-4xl">
                                    03
                                </div>
                                <div className="mt-5 text-zinc-700 max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s.
                                </div>
                                <div className="mt-4 text-zinc-700 max-md:max-w-full">
                                    when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet={Images.journey_three}
                                className="grow w-full shadow-2xl aspect-[1.47] max-md:mt-10 max-md:max-w-full"
                                alt=""
                            />
                        </div>
                    </div>
                </div> */}
                            <div className="justify-between pt-10  max-md:mt-10 max-md:max-w-full  max-md:hidden">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                                        <div className="absolute self-end font-black text-white text-[160px] max-md:text-4xl">
                                            2016
                                        </div>
                                        <div className="z-10 mt-20 w-[85%] mx-auto flex flex-row items-start self-stretch my-auto text-lg max-md:mt-10 max-md:max-w-full">
                                            <div className=''>
                                                <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                    03
                                                </div>
                                                <div>
                                                    <img
                                                        src={Images.journey_dashed_vect_l_to_r}
                                                        alt=''
                                                        loading='lazy '
                                                        className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[34%] 2xl:left-[19%] max-2xl:aspect-[1.4] max-2xl:w-[30%] max-2xl:left-[13%] max-xl:aspect-[1.5] max-xl:w-[43%] max-xl:left-[11%] lg:aspect-[1.33] lg:w-[43%] lg:left-[12%] md:aspect-[0.9] md:w-[43%] md:left-[13%]'
                                                   
                                                        // className='absolute aspect-[1.5] w-[35%] left-[18%]'
                                                        // className='absolute journey_r_to_l_vector 2xl:aspect-[1.6] 2xl:w-[40%] 2xl:left-[13%] xl:aspect-[1.5] xl:w-[35%] xl:left-[18%] lg:aspect-[1.5] lg:w-[42%] lg:left-[11%] md:aspect-[1.25] md:w-[41%] md:left-[12%]'
                                                    />
                                                </div>

                                            </div>
                                            <div className='w-[80%] mx-auto mt-2 '>
                                                <h3 className='font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                    Building a Dream Team
                                                </h3>
                                                <div className="mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                    The transition from a small firm to the esteemed &quot;Headway Business Solutions
                                                    LLP&quot; marked a pivotal chapter in our narrative.
                                                </div>
                                                <div className="mt-4 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                    With a team now comprising more
                                                    than 20 qualified industry experts, our commitment to excellence and growth has
                                                    only deepened. As we navigate the landscape of 2024-25, our journey stands as a
                                                    testament to resilience, innovation, and an unyielding pursuit of setting new
                                                    standards in the jewellery business coaching and consulting domain.
                                                </div>
                                            </div>
                                            {/* <div className='w-[80%] mx-auto mt-2 '>
                                    <h3 className='font-bold'>
                                        Lorem ipsum Dummy
                                    </h3>
                                    <div className="mt-5 text-zinc-600 max-md:max-w-full">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s.
                                    </div>
                                    <div className="mt-4 text-zinc-600 max-md:max-w-full">
                                        when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only
                                        five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages.
                                    </div>
                                </div> */}

                                        </div>
                                    </div>
                                    <div className=" flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={Images.about_journey_two}
                                            // src={Images.journey1}
                                            // className="grow w-full shadow-2xl aspect-[1.47] max-md:mt-10 max-md:max-w-full"
                                            // className="grow w-full shadow-2xl max-md:mt-10 max-md:max-w-full rounded-xl shadow-orange-100"
                                            alt="Images"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full pt-10  max-md:hidden">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                    <div className="relative flex flex-row w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={Images.about_journey_three}
                                            // srcSet={Images.journey_two}
                                            alt="Images"
                                        // className="grow w-full rounded-xl shadow-2xl aspect-[1.79] max-md:mt-7 max-md:max-w-full rounded-xl shadow-orange-100"
                                        />
                                        {/* <div>
                                <img
                                    src={Images.journey_dashed_vect_r_to_l}
                                    alt=''
                                    loading='lazy '
                                    className='absolute  aspect-[1.8] top-[33%] left-[12%] width-[98%]'
                                />
                            </div> */}
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full ">
                                        <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                                            <div className="relative self-end font-black text-white text-[160px] max-md:text-4xl">
                                                2024
                                            </div>
                                            {/* <div className="mt-20 text-lg text-zinc-700 max-md:mt-10 max-md:max-w-full">
                                    when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages.
                                </div> */}
                                            <div className='absolute flex  '>
                                                <div className='flex flex-col'>
                                                    <div className="font-outline-1 self-stretch text-5xl max-md:max-w-full max-md:text-4xl ">
                                                        04
                                                    </div>

                                                </div>
                                                <div className='w-[50%] me-auto ms-10 '>
                                                    <h3 className='font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-2xl'>
                                                        The Legacy Continues
                                                    </h3>
                                                    <div className="mt-5 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                        Our aim is to empower and inspire the jewellery industry&#39;s trailblazers, helping
                                                        both budding startups and established businesses flourish in an ever-evolving
                                                        market.
                                                    </div>
                                                    <div className="mt-4 text-zinc-600 max-md:max-w-full 2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-base">
                                                        We are committed to fostering the growth of new jewellery ventures by
                                                        providing strategic guidance, personalized coaching, and a roadmap for success.
                                                        We aim to ignite positive change and drive transformation across the industry. At
                                                        Headway, we believe in the transformative power of collaboration, and our mission is
                                                        to be the guiding force that propels your jewellery business to new heights.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet={Images.journey_four}
                            alt=""
                            className="grow w-full rounded-xl shadow-2xl aspect-[1.79] max-md:mt-7 max-md:max-w-full"
                        />
                    </div>
                    <div className="self-start mt-9 text-5xl font-medium max-md:text-4xl">
                        04
                    </div>
                    <div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
                        <div className=" self-end font-black text-white text-[160px] max-md:text-4xl">
                            2024
                        </div>
                        <div className='absolute'>
                            <div>Loreum lpsum</div>
                            <div className="mt-20 text-lg text-zinc-700 max-md:mt-10 max-md:max-w-full">
                                when an unknown printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum
                                passages.
                            </div>
                        </div>
                    </div>
                </div> */}
                        </div>
                    </div>
                )}

                {isMediumOrSmaller && (
                    <div className="flex justify-center items-center px-16 py-12 w-full bg-orange-lightclr max-md:px-5 max-md:max-w-full" >
                        <div className="flex flex-col px-6 py-9 mx-auto w-full max-w-[640px] ">
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

export default UpdatedAnimatedComponent(Journey)