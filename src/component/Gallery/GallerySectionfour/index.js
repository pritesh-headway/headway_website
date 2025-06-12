import * as React from "react";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";

const GallerySectionfour = ({ titleRef, isVisible }) => {
    return (
        <div className="flex justify-center items-center px-16 py-20 max-md:px-5"
            ref={titleRef}
        >
            <div className="flex flex-col max-w-full w-[1296px]">
                <header className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col max-w-full">
                        <h1
                            // className="self-center text-5xl font-medium  max-md:max-w-full max-md:text-4xl"
                            className={`self-center text-4xl font-bold  max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >

                            {/* <span className="font-bold text-orange-500 leading-[58px]">
                                A Team
                            </span> */}
                            <span className="leading-[58px] text-zinc-800">A Team with the Appropriate Blend of </span>{" "}
                            <span className="font-bold text-orange-500 leading-[58px]">
                                Skills and Philosophy
                            </span>{" "}
                            {/* <span className="leading-[58px] text-zinc-800">and</span>{" "}
                            <span className="leading-[58px] text-zinc-800"> Philosophy </span>{" "} */}
                        </h1>
                        <p className="mt-6 text-lg text-center text-zinc-600 max-md:max-w-full">
                            Our photo gallery is more than just a collection of images; it's a window into the soul of our company. It reflects our
                            commitment to excellence, our vibrant company culture, and the memorable journey we're on.
                        </p>
                    </div>
                </header>
                <main className="justify-between py-8 pr-8 pl-20 mt-12 bg-white shadow-2xl rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:p-10 max-lg:p-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-lg:flex-col">
                        <section className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full max-lg:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-4xl font-medium text-zinc-800 max-md:max-w-full">
                                    {/* Lorem Ipsum is simply{" "} */}
                                    <span className="text-orange-500 font-bold">Visit Us</span> Again
                                </h2>
                                <p className="mt-6 text-lg text-zinc-600 max-md:max-w-full">
                                    As you browse through our gallery, we hope you'll
                                    feel the passion, energy, and dedication that drive
                                    us every day at Headway Business Solutions LLP.
                                </p>
                                <p className="mt-6 text-lg text-zinc-600 max-md:max-w-full">
                                    Our journey continues, and so will the updates to
                                    our photo gallery. Keep visiting to catch the latest
                                    glimpses of life at Headway Business Solutions LLP,
                                    as we forge ahead, creating more memories and
                                    reaching new milestones together.
                                </p>
                            </div>
                        </section>
                        <figure className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full  max-lg:w-full max-lg:ml-0">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffc96e1efb26ea2314ac567501b4d199af32f2632349af11f5bbb4549902d8a3?apiKey=8e5983036f284a13866aae97819cdb73&"
                                alt="Jewellery Vidhyapith"
                                className="grow w-full aspect-[1.69] max-md:mt-10 max-md:max-w-full"
                            />
                        </figure>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UpdatedAnimatedComponent(GallerySectionfour);