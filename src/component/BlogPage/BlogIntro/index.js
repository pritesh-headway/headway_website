import * as React from "react";
import * as Images from '../../../assets';
import { ButtonOrange } from "../../Buttons";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const BlogIntro = () => {
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5" >
            <div className="mt-6 max-w-full w-[1296px]">
                <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            // src={Images.make_my_business_intro}
                            src={Images.blog_intro}
                            // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                            className="grow w-full max-md:mt-10 max-md:max-w-full rounded-xl  shadow-2xl shadow-orange-100"
                            alt="Images"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-lg max-md:mt-10 max-md:max-w-full ">
                            <div className="text-5xl font-medium  max-md:max-w-full max-md:text-4xl">
                                <div
                                    // className=" leading-[58px]"
                                    className="about-us_title_animation_fade_in_right text-zinc-800"
                                // className={` ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                >
                                    Lorem ipsum Dummy
                                </div>
                                <div
                                    className="font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2"
                                // className={`font-bold text-orange-500 leading-[58px] ${isVisible ? 'about-us_title_animation_fade_in_right2' : ''}`}
                                >
                                    Text Type testing
                                </div>
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className="mt-6 max-md:max-w-full blog_intro">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            </div>
                            {/* <div className="mt-6 max-md:max-w-full">
                                Headway&#39;s commitment to nurturing and enhancing every aspect of your enterprise
                                ensures that you not only survive but thrive in today&#39;s cutting-edge jewellery industry.
                            </div> */}
                            {/* <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5">
                                        Learn more
                                        </div> */}
                            {/* <ButtonOrange
                                name={`Learn More`}
                                className={`justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5`}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogIntro;