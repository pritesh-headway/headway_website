import React from 'react';
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';


const IntroStartup = ({ titleRef, isVisible }) => {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full max-sm:py-0">
      <div className="my-6 max-w-full w-[1296px]">
        <div className="flex gap-5 max-lg:flex-col max-md:gap-0 ">
          <div 
          className="flex flex-col w-[50%] max-md:ml-0 max-lg:w-full "
          >
            <img
              loading="lazy"
              alt=''
              // src={Images.startup_intro}
              src={Images.start_up_intro}
              // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15c3fe47dd96a40a131f7dfd09552f3fd3c456c3a85608c572df497676511cde?apiKey=8e5983036f284a13866aae97819cdb73&"
              // className="grow w-full shadow-2xl aspect-[1.49] max-md:mt-10 max-md:max-w-full shadow-orange-50"
              className="grow w-full aspect-[1.49] max-md:mt-10 max-sm:mt-0 max-md:max-w-full rounded-xl"
                                style={{ boxShadow: '0 0 10px 0 rgba(255, 115, 0, 0.25)' }} // custom orange shadow
            />
          </div>
          <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-lg:w-full max-lg:mt-5" ref={titleRef}>
            <div className=" text-start flex flex-col text-lg max-md:mt-10 max-md:max-w-full intro_section_para">
              <div 
              // className="text-5xl font-medium max-md:max-w-full max-md:text-4xl "
              className={`text-5xl font-medium max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
              >
                <div className=" leading-[58px] text-zinc-800 ">Accelerating Startups</div>
                <div className="font-bold text-orange-500 leading-[58px] about-us_title_animation_fade_in_right2">
                   Beyond Limits!
                </div>
              </div>
              {/* <div className="mt-6 max-md:max-w-full intro_section_para">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div> */}
              <div className="mt-6 max-md:max-w-full intro_section_para">
                Headway Business Solutions LLP is your strategic partner in propelling your newly
                started jewellery store towards accelerated growth. From seamless business set-up
                to cultivating an impactful brand identity, implementing effective marketing strategies,
                and fostering meaningful customer engagement, we are committed to ensuring that
                your business not only prospers but scales rapidly in the competitive landscape. With
                Headway, consider your entrepreneurial journey poised for success from inception to
                sustained expansion.
              </div>
              {/* <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5">
                Learn more
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatedAnimatedComponent(IntroStartup)