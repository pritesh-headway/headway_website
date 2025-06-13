
import React from 'react';
import { ButtonOrange } from '../../Buttons';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const Training = ({ titleRef, isVisible ,data}) => {

  function getYouTubeEmbedUrl(url) {
    if (!url) return "";
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2]
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&rel=0`
      : url;
  }

    return (
        <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full" ref={titleRef}>
            <div 
            // className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full max-sm:py-0 fill-stone-50 min-h-[587px] max-lg:px-5 max-lg:max-w-full"
            className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full max-sm:py-0 max-lg:px-5 max-lg:max-w-full"
            >
                <img
                    loading="lazy"
                    // src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde768a89637af3ff397af28548af8acd68fdb588e89f8745e3dc0234b34793a?"
                    src={Images.user_auth_vector}
                    // className="object-cover absolute inset-0 size-full"
                    className='absolute size-full max-lg:object-cover'
                    alt=''
                />
                <div className="relative my-6 max-w-full w-[1296px]">
                    <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-md:">
                        <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
                            <div className="text-start flex relative flex-col self-stretch my-auto text-lg text-zinc-600 max-lg:mt-5 max-lg:max-w-full">
                                <div 
                                // className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl"
                                className={`text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                >
                                    Transform Your Jewellery Business with Headway's Expert Training Programs
                                </div>
                                <div className="mt-6 max-md:max-w-full">
                                    Headway Business Solutions LLP stands as a torch bearer & beacon of growth and success in the jewellery business world, thanks to our in-depth training programs. We're dedicated to enhance the capabilities of jewellery stores, offering them essential skills, strategic insights, and specialized knowledge to flourish.
                                </div>
                                <div className="mt-6 max-md:max-w-full ">
                                    Our training is designed to support both emerging and established businesses, equipping them with the necessary tools to stand out in the modest jewellery market. At Headway, we're more than just a resource for training; we're a unwavering partner, organised to guide your jewellery business towards enduring success.
                                </div>
                                {/* <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5">
                                    Learn more
                                </div> */}
                                {/* <ButtonOrange
                                    name={`Learn More`}
                                    className={`justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5`}
                                /> */}
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
                            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-12 rounded-xl min-h-[443px] max-md:px-5 max-md:mt-10 max-sm:mt-0 max-md:max-w-full">
                                {/* <img
                                    loading="lazy"
                                    src={Images.training}
                                    className="object-cover absolute inset-0 size-full"
                                    alt=''
                                /> */}
                                <iframe 
                                width="560"
                                 height="315" 
                                src={getYouTubeEmbedUrl(data)}
                                 title="YouTube video player" 
                                 frameBorder="0" 
                                //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                //  referrerpolicy="strict-origin-when-cross-origin" 
                                 
                                 allowFullScreen></iframe>

                                {/* <div className="flex relative justify-center items-center px-9 mt-32 w-24 h-24 backdrop-blur-[27px] bg-zinc-800 bg-opacity-10 rounded-[73.6px] max-md:px-5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f4744928dfb48d4a928e7f79aa192a0012074a0e3fac8c01e2995ef16d7fea?"
                                        className="w-full aspect-[0.85]"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// export default Training

export default UpdatedAnimatedComponent(Training)