import * as React from "react";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const JVSectionfive = ({ titleRef, isVisible }) => {

  const data = [
    {
      id: 1,
      title: 'Processing'
    },
    {
      id: 2,
      title: 'Jewellery manufacturing'
    },
    {
      id: 3,
      title: 'Diamond cutting'
    },
    {
      id: 4,
      title: 'Diamond cutting'
    },
    {
      id: 5,
      title: 'Stock management'
    },
    {
      id: 6,
      title: 'Leadership'
    },
    {
      id: 7,
      title: 'Customer relations'
    },
    {
      id: 8,
      title: 'Communication skills'
    },
    {
      id: 9,
      title: 'Body language'
    },
    {
      id: 10,
      title: 'Personality development'
    },
    {
      id: 11,
      title: 'Insights into wholesale and retail business'
    },
    {
      id: 12,
      title: 'Accounting'
    },
  ]
  return (
    <div className="flex justify-center items-center px-16 py-20 max-md:px-5 max-sm:pt-0 max-sm:pb-5"
      ref={titleRef}
    >
      <div className="flex flex-col max-w-full w-[1296px]">
        <header className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full max-sm:px-0 ">
          <div className="flex flex-col max-w-full w-[769px]">
            <h1
              // className="self-center text-5xl font-medium  max-md:max-w-full max-md:text-4xl"
              className={`self-center text-5xl font-medium  max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
            >
              <span className="leading-[58px] text-zinc-800">Services and</span>{" "}
              <span className="font-bold text-orange-500 leading-[58px]">
                Curriculum
              </span>
            </h1>
            <div className="mt-6 text-lg text-center text-zinc-600 max-md:max-w-full max-sm:text-left">
              Jewellery Vidhyapith offers a meticulously crafted curriculum covering all facets of the gem and
              jewellery industry. Our free training program encompasses various industry areas and functions,
              including:
            </div>
          </div>
        </header>
        <main className="justify-between py-8 pr-8 pl-20 mt-12 bg-white shadow-2xl rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:p-10 max-lg:p-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-lg:flex-col">
            <section className="text-start flex flex-col w-[42%] max-md:ml-0 max-md:w-full max-lg:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full max-sm:mt-0">
                {/* <h2 className="text-4xl font-medium text-zinc-800 max-md:max-w-full">
                  Lorem Ipsum is simply{" "}
                  <span className="text-orange-500">Text of The Printing</span>
                </h2> */}  
                <p className="mt-6 text-lg text-zinc-600 max-md:max-w-full max-sm:mt-0">
                  Leveraging state-of-the-art software and
                  methodologies, our team of experts is dedicated to
                  providing high-quality training that prepares
                  students for immediate industry entry.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 text-lg text-orange-500 p-4 rounded-xl mt-6 terms_bg_clr">
                  {data.map((item, index) => (
                    <div key={index} className="flex " >
                      <li>
                      </li>
                      <div>{item?.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="flex flex-col  w-[58%] max-md:ml-0 max-md:w-full  max-lg:w-full max-lg:ml-0">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-12 max-sm:py-0 rounded-xl min-h-[443px] max-md:px-5 max-md:mt-10 max-sm:mt-0 max-md:max-w-full">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffc96e1efb26ea2314ac567501b4d199af32f2632349af11f5bbb4549902d8a3?apiKey=8e5983036f284a13866aae97819cdb73&"
                alt="Jewellery Vidhyapith"
                className="grow w-full aspect-[1.69] max-md:mt-10 max-md:max-w-full"
              /> */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Q_hJXQvw4Lk?si=gc9xMK9Ox_ZFZ-3i?autoplay=1&mute=1&rel=0"
                //src="https://www.youtube.com/embed/Q_hJXQvw4Lk?autoplay=1&mute=1"

                title="YouTube video player"
                frameBorder="0"
                //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                //  referrerpolicy="strict-origin-when-cross-origin" 

                allowFullScreen></iframe>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UpdatedAnimatedComponent(JVSectionfive);