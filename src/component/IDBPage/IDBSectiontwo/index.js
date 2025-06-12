import React from "react";
import * as Images from '../../../assets';
import { Link } from "react-router-dom";

export const IdbSectiontwo = () => {

  const data = [
    {
      id: 1,
      img: `${Images.leadership_icn}`,
      title: 'Leadership Skill Development',
      desc: 'Through our IDP, we provide jewellers with personalized leadership training tailored to their unique strengths and challenges.'
    },
    {
      id: 2,
      img: `${Images.brand_building_icn}`,
      title: 'Brand Building',
      desc: 'From logo design to brand messaging, we work closely with jewellers to develop a brand that resonates with the target audience.'
    },
    {
      id: 3,
      img: `${Images.degree_icn}`,
      title: '360-Degree Management',
      desc: `Our IDP covers all aspects of business 
      management, providing jewellers with 
      the skills and knowledge they need to 
      effectively manage every aspect of 
      their operations.`
    },
    {
      id: 4,
      img: `${Images.running_icn}`,
      title: 'Running an Ownerless Business',
      desc: 'We provide jewellers with strategies and systems for creating an ownerless business model that can run smoothly and efficiently without constant oversight.'
    },
    {
      id: 5,
      img: `${Images.growth_tech_icn}`,
      title: 'Business Growth Techniques',
      desc: 'IDP goes beyond traditional business development programs. We focus on developing your business skills to empower you to inspire your team and make strategic decisions.'
    },
    {
      id: 6,
      img: `${Images.gain_icn}`,
      title: 'Gain a Competitive Edge',
      desc: 'We’ll teach you how to gain a competitive edge that resonates with your business strategy and sets you apart from the competition. We equip you with the tools and strategies to dominate the market.'
    },
  ]
  return (
    <div className="relative flex justify-center items-center px-16 py-20 orange_vector_clr max-lg:px-5 max-sm:py-0">
      <div className="top-0 flex overflow-hidden absolute flex-col justify-center items-center self-stretch fill-white   max-lg:px-5 max-lg:max-w-full">

        <img
          alt="Images"
          loading="lazy"
          src={Images.about_us_vector}
          className=""
        />

      </div>
      <div className="text-start flex flex-col max-w-full w-[1296px] z-10">
        <div className="max-lg:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
            <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-8 rounded-2xl max-lg:px-5 max-lg:mt-8 max-sm:mt-0 max-lg:max-w-full">
                <div className="text-4xl font-medium text-zinc-800 max-lg:max-w-full ">
                  Empowering Jewellers,<br />
                  <div className="flex">
                    <span className="text-orange-500">Crafting Success</span>
                    <img
                      alt="Images"
                      src={Images.arrow_ui_idb}
                      className="w-20 ms-5 mt-2"
                    />
                  </div>
                </div>
                <div className="mt-6 text-lg text-zinc-800 max-lg:max-w-full">
                  Spark Success, Illuminate Growth: Transforming Jewellers into
                  Industry Leaders with Headway's Expert Guidance
                </div>
                <Link to={`/get_in_touch`}>
                <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white bg-orange-500 rounded shadow-2xl max-lg:px-5 w-fit">
                  Contact Us
                </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
              <div className="grow px-px max-lg:mt-8 max-lg:max-w-full">
                <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                  <div className="flex flex-col  max-lg:ml-0 max-lg:w-full">
                    <div className="flex flex-col grow p-6 w-full bg-white rounded-2xl shadow-2xl shadow-orange-100 max-lg:px-5 max-lg:mt-8">
                      <img
                        loading="lazy"
                        src={Images.idp_icon_one}
                        // src={Images.leadership_icn}
                        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/f958f3fd2264ae6aec4609a8349a148f8a190e30136b227e11cb39c309187f80?apiKey=8e5983036f284a13866aae97819cdb73&"
                        className="aspect-[0.88] w-[79px]"
                        alt="Images"
                      />
                      <div className="mt-8 text-lg font-medium text-orange-500">
                        Leadership Skill Development
                      </div>
                      <div className="mt-4 text-base text-zinc-600">
                        Through our IDP, we provide jewellers with personalized
                        leadership training tailored to their unique strengths
                        and challenges.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 max-lg:ml-0 max-lg:w-full">
                    <div className="flex flex-col grow p-6 w-full bg-white rounded-2xl shadow-2xl shadow-orange-100 max-lg:px-5 max-lg:mt-8">
                      <img
                        loading="lazy"
                        src={Images.idp_icon_two}
                        // src={Images.brand_building_icn}
                        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/77933f03dfc0aa16547c4f757da5e1751f5edb0bd29cf58012893d217959400c?apiKey=8e5983036f284a13866aae97819cdb73&"
                        className="aspect-[0.88] w-[79px]"
                        alt="Images"
                      />
                      <div className="mt-8 text-lg font-medium text-orange-500">
                        Brand Building
                      </div>
                      <div className="mt-4 text-base text-zinc-600">
                        From logo design to brand messaging, we work closely
                        with jewellers to develop a brand that resonates with
                        the  target audience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 max-lg:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col  max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow self-stretch p-6 w-full bg-white rounded-2xl shadow-2xl shadow-orange-100 max-lg:px-5 max-lg:mt-8">
                <img
                  loading="lazy"
                  src={Images.idp_icon_three}
                  // src={Images.degree_icn}
                  // src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ee4afab6c4f05cab994cf2f9a6ee311dc4eb264d90e51ab27b8ccdeb8b9cce?apiKey=8e5983036f284a13866aae97819cdb73&"
                  className="aspect-[0.88] w-[79px]"
                  alt="Images"
                />
                <div className="mt-8 text-lg font-medium text-orange-500">
                  360-Degree Management
                </div>
                <div className="mt-4 text-base text-zinc-600">
                  Our IDP covers all aspects of business
                  management, providing jewellers with
                  the skills and knowledge they need to
                  effectively manage every aspect of
                  their operations.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5  max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow self-stretch p-6 w-full bg-white rounded-2xl shadow-2xl shadow-orange-100 max-lg:px-5 max-lg:mt-8">
                <img
                  loading="lazy"
                  src={Images.idp_icon_four}
                  // src={Images.running_icn}
                  // src="https://cdn.builder.io/api/v1/image/assets/TEMP/2976415c7690fb009a83bd810862aa79bf138c73df531f459696ac01efe24426?apiKey=8e5983036f284a13866aae97819cdb73&"
                  className="aspect-[0.88] w-[79px]"
                  alt="Images"
                />
                <div className="mt-8 text-lg font-medium text-orange-500">
                  Running an Ownerless Business
                </div>
                <div className="mt-4 text-base text-zinc-600">
                  We provide jewellers with strategies and systems for creating
                  an ownerless business model that can run smoothly and
                  efficiently without constant oversight.
                </div>
              </div>
            </div>
            <div className="text-start flex flex-col ml-5  max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow self-stretch py-6 pr-6 pl-6 w-full bg-white rounded-2xl shadow-2xl shadow-orange-100 max-lg:px-5 max-lg:mt-8">
                <img
                  loading="lazy"
                  src={Images.idp_icon_five}
                  // src={Images.growth_tech_icn}
                  // src="https://cdn.builder.io/api/v1/image/assets/TEMP/60a90db4ed0d26d1689da8a859fd842b8895b7d1c6a6aa0fe786f1d7fa4bcdb3?apiKey=8e5983036f284a13866aae97819cdb73&"
                  className="aspect-[0.88] w-[79px]"
                  alt="Images"
                />
                <div className="mt-8 text-lg font-medium text-orange-500">
                  Business Growth Techniques
                </div>
                <div className="mt-4 text-base text-zinc-600">
                  IDP goes beyond traditional business development programs. We
                  focus on developing your business skills to empower you to
                  inspire your team and make strategic decisions.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5  max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow self-stretch p-6 w-full bg-white rounded-2xl shadow-2xl shadow-orange-100 max-lg:px-5 max-lg:mt-8">
                <img
                  loading="lazy"
                  src={Images.idp_icon_six}
                  //src={Images.gain_icn}
                  // src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3c310663b1b99058a71cfeaf5d99b0e22fc7fc962e7fb5bd1eff2650918e13?apiKey=8e5983036f284a13866aae97819cdb73&"
                  className="aspect-[0.88] w-[79px]"
                  alt="Images"
                />
                <div className="mt-8 text-lg font-medium text-orange-500">
                  Gain a Competitive Edge
                </div>
                <div className="mt-4 text-base text-zinc-600">
                  We’ll teach you how to gain a competitive edge that resonates
                  with your business strategy and sets you apart from the
                  competition. We equip you with the tools and strategies to
                  dominate the market.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


