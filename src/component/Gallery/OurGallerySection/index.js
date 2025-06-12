import React, { useState } from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";


const OurGallerySection = ({ titleRef, isVisible }) => {

  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    "All",
    "Office",
    "Training",
    "Seminar",
    "Jewellers",
    "Team HBS",
    "Events",
    "Success Stories",
  ];

  const GalleryImage = ({ src, alt, aspectRatio, className = "" }) => {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`w-full aspect-[${aspectRatio}] ${className}`}
      />
    );
  }

  return (
    <section
      className="flex relative justify-center items-center px-16 py-20 terms_bg_clr max-md:px-5"
      ref={titleRef}
    >
      <img
        alt="Images"
        loading="lazy"
        src={Images.about_us_vector}
        className="top-0 absolute"
      />
      <img
        alt="Images"
        loading="lazy"
        src={Images.about_us_vector}
        className="bottom-0 absolute rotate-180"
      />

      <div className=" z-10 flex flex-col max-w-full w-[1296px]">
        <h2
          // className="self-center text-5xl font-medium text-orange-500 max-md:text-4xl"
          className={`self-center text-5xl font-medium text-orange-500 max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
        >
          <span className="leading-[58px] text-zinc-800">Our</span>{" "}
          <span className="font-bold text-orange-500 leading-[58px]">
            Gallery
          </span>
        </h2>
        <div className="mt-6 text-xl text-black max-md:max-w-full text-center font-semibold">
        <span className="text-orange-500">Life @ Headway</span> - On a Journey to Excellence
        </div>
        <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full text-center font-medium">
          This section is dedicated to the people who embody the perfect blend of expertise, dedication, and a positive attitude. Through candid
          shots and professional portraits, get to know the individuals who are the pillars of our success and the heart of our operations.
        </div>
        {/* <div className="flex gap-2 flex-wrap  p-3 mt-12 text-base font-semibold tracking-normal leading-6 text-center bg-white border border-gray-200 border-solid rounded-full text-zinc-600 max-md:flex-wrap max-md:mt-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`justify-center px-8 py-2 rounded-full max-md:px-5 hover:text-white hover:bg-orange-500 cursor-pointer ${index === activeTab ? "cursor-pointer text-white bg-orange-500" : "terms_bg_clr"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {category}
            </div>
          ))}
        </div> */}
        <div className="mt-12 max-md:mt-10 max-md:max-w-full ">
          {activeTab === 0 &&
            <div className="flex gap-0 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                  <GalleryImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cdec824b9f63e93ad7e3b3599eb0b880c59ba7b22a94c40a2d25def01890c5d?apiKey=8e5983036f284a13866aae97819cdb73&"
                    alt="Gallery image 1"
                    aspectRatio="3.13"
                    className="max-md:max-w-full"
                  />
                  <div className="mt-6 max-md:max-w-full">
                    <div className="flex gap-0 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-6">
                          <GalleryImage
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f08ccf494d0bb6db8bc8d0aadf2ad806cfd1f3b94fa11a31ce433316537f0ec6?apiKey=8e5983036f284a13866aae97819cdb73&"
                            alt="Gallery image 2"
                            aspectRatio="1.49"
                          />
                          <GalleryImage
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47ee1ea7d9cde312e8598a7b77095e9601995cf083b0e8e163cc4a0f7222490a?apiKey=8e5983036f284a13866aae97819cdb73&"
                            alt="Gallery image 3"
                            aspectRatio="1.49"
                            className="mt-5"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <GalleryImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8594b3a58ae68393fefb9d9f8e25e0212735666117b4e29f02041b29b77d6a3?apiKey=8e5983036f284a13866aae97819cdb73&"
                          alt="Gallery image 4"
                          aspectRatio="0.71"
                          className="grow max-md:mt-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-0 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <GalleryImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f903f5db3d0bb07a1512d98238235f74d771c9ed9bbbd9b3f91084d9cc93a6f4?apiKey=8e5983036f284a13866aae97819cdb73&"
                          alt="Gallery image 5"
                          aspectRatio="1.49"
                          className="grow max-md:mt-6"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <GalleryImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8343ac046eefcdf0bcc4a67f9b6eb0c67514a17dfa2f57b777febe4174a38b?apiKey=8e5983036f284a13866aae97819cdb73&"
                          alt="Gallery image 6"
                          aspectRatio="1.49"
                          className="grow max-md:mt-6"
                        />
                      </div>
                    </div>
                  </div>
                  <GalleryImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17fe11922e34d508f5e478269d33b54c9f76837a0b20f74e68d5c660f973810a?apiKey=8e5983036f284a13866aae97819cdb73&"
                    alt="Gallery image 7"
                    aspectRatio="3.13"
                    className="mt-6 max-md:max-w-full"
                  />
                  <div className="mt-6 max-md:max-w-full">
                    <div className="flex gap-0 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <GalleryImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b5f43337539bfba085aff5d0a4352bb8eb4bd46b064fd101447e2a688798336?apiKey=8e5983036f284a13866aae97819cdb73&"
                          alt="Gallery image 8"
                          aspectRatio="1.49"
                          className="grow max-md:mt-6"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <GalleryImage
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab986b61f4d904aceef020805a68f91eac706c2214dc24af5767b7e2959873f2?apiKey=8e5983036f284a13866aae97819cdb73&"
                          alt="Gallery image 9"
                          aspectRatio="1.49"
                          className="grow max-md:mt-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {activeTab === 1 && <div> <h1>div abc 1</h1></div>
          }
          {activeTab === 2 && <div> <h1>div def 2</h1></div>
          }
          {activeTab === 3 && <div> <h1>div ghi 3</h1></div>
          }
          {activeTab === 4 && <div> <h1>div jhd 4</h1></div>
          }
        </div>
      </div>
    </section>
  );
}

export default UpdatedAnimatedComponent(OurGallerySection);