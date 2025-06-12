import React from 'react';
import { LinkTagwithClass } from '../../Link';
import * as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const BlogBroucherSection = ({titleRef,isVisible}) => {
    return (
        <>

            <div 
            // className="flex flex-col items-start relative max-h-[50%]" 
            className="flex flex-col items-start relative" 
            ref={titleRef}>
                
                <div className="flex gap-5 justify-between max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        // src={Images.blog_brouchure_sectionbg}
                        src={Images.blogs_bg_brochure_new}
                        className="w-full max-w-full self-start aspect-[3.5]"
                        alt="Images"
                    />
                </div>
                <div className="top-[30%] absolute mt-1 ml-2  font-semibold xl:text-[40px] md:text-2xl sm:text-base sm:left-[20%] md:left-[20%] xl:top-[40%]">
                    <div 
                    className={`flex-auto text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'animation_fadeInRight1' : ''}`}
                    >
                        Download&nbsp;
                        <span className=' text-orange-500'>Program Brochure</span>
                    </div>
                    <div 
                    // className='text-lg text-orange-500 xl:text-2xl xl:my-3'
                    className={`text-lg text-orange-500 xl:text-2xl xl:my-3 ${isVisible ? 'animation_fadeInRight2' : ''}`}
                    > Start up</div>
                    <div className="w-fit border flex gap-3 justify-center self-start px-8 py-2.5 mt-3 text-sm font-medium text-white bg-orange-500 rounded-lg max-md:px-5 sm:text-xs sm:mt-1 sm:px-2 sm:py-1 xl:px-8 xl:py-2.5 xl:mt-3">
                        <div>Download</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                            className="my-auto w-4 aspect-square"
                            alt="Images"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdatedAnimatedComponent(BlogBroucherSection)