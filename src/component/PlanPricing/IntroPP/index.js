import React from 'react';
import * as Images from '../../../assets';

const IntroPP = () => {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white  max-md:max-w-full max-md:px-5">
        <div className=" max-w-full w-[1296px] max-md:px-5 max-sm:px-0">
          <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="text-start flex flex-col self-stretch pb-6 my-auto max-lg:mt-5 max-sm:mt-3 max-md:max-w-full">
                <div className="text-lg font-bold tracking-[4px] max-md:max-w-full text-orange-500 animation_fadeInRight1">
                  SOLUTION@100%
                </div>
                <div className="mt-6 text-6xl max-md:max-w-full max-md:text-4xl animation_fadeInRight2 max-sm:mt-3">
                  <span className="text-5xl leading-[58px]">
                    Leading Jewellery
                  </span>
                  <br/>

                  <span className="text-5xl font-bold text-orange-500 leading-[58px]">
                    Business Consultant
                  </span>
                  <br/>
                  <span className="text-5xl leading-[58px]">in India</span>
                </div>
                <div className="mt-6 text-xl text-zinc-700 max-md:max-w-full animation_fadeInRight3  max-sm:mt-3">
                  Empowering Success, Crafting Excellence: Your Trusted Partner
                  in Jewellery Business Advancement
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
              <img
              alt='Images'
              width=""
              height=""
                loading="lazy"
                src={Images.plan_pricing_intro}
                // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/178408a6ca2f9b8b7a7ed53b1c03c697377b7a38c00a6b3093dc660437787b85?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="grow w-full shadow-2xl aspect-[1.59] max-md:mt-9 max-sm:mt-0 max-md:max-w-full rounded-xl shadow-orange-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroPP