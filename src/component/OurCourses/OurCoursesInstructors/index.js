import * as React from "react";
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";
import * as Images from '../../../assets';

const OurCoursesInstructors = ({ titleRef, isVisible }) => {

    const instructorData = [
        {
            name: "Mr. Paresh Rajapara",
            description: "Lorem Ipsum is simply dummy text of the printing and typeset.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce3283675a73736825016544a93140e38d864c763d5e36e54f2e734d96725009?apiKey=8e5983036f284a13866aae97819cdb73&",
        },
        {
            name: "Lorem ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typeset.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/460bfdfebcade5f570211f98934e380b05117315514dfe7905985a0a11279c5f?apiKey=8e5983036f284a13866aae97819cdb73&",
        },
        {
            name: "Mr. Paresh Rajapara",
            description: "Lorem Ipsum is simply dummy text of the printing and typeset.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/227b3b60e85aa83fdb70969aef31fa854085e8d124e3372d87573fa9f9da6e50?apiKey=8e5983036f284a13866aae97819cdb73&",
        },
        {
            name: "Mr. Paresh Rajapara",
            description: "Lorem Ipsum is simply dummy text of the printing and typeset.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2308b0352116efbd265f830c06baecee8ab44a87a94cac6d149ac12bae891e2?apiKey=8e5983036f284a13866aae97819cdb73&",
        },
    ]; 
    
    const InstructorCard = ({ name, description, image }) =>{
        return (
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow px-8 pt-20 pb-8 aspect-[0.72] rounded-[36px] max-md:px-5 max-md:mt-8">
                    <img loading="lazy" src={image} alt={`Instructor ${name}`} className="object-cover absolute inset-0 size-full" />
                    <div className="relative mt-48 text-xl text-stone-50 text-opacity-90 max-md:mt-10">
                        {name}
                    </div>
                    <div className="relative mt-3.5 text-2xl font-medium text-white">
                        {description}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section 
        className="flex justify-center items-center px-16 py-20 max-md:px-5 max-md:pb-0 "
        ref={titleRef}
        >
            <div className="flex flex-col max-w-full w-[1296px]">
                <h2 
                // className="self-center text-5xl font-bold max-md:text-4xl"
                className={`self-center text-5xl font-bold max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                >
                    <span className="text-zinc-800">Our</span>{" "}
                    <span className="text-orange-500">Instructor</span>
                </h2>
                <div className="relative justify-center mt-20 max-md:mt-10 max-md:max-w-full border border-red-500">
                <img
                        loading="lazy"
                        src={Images.about_us_vector}
                        className="object-cover absolute top-0 "
                        alt=''
                    />
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 terms_bg_clr">
                        {instructorData.map((instructor, index) => (
                            <InstructorCard key={index} name={instructor.name} description={instructor.description} image={instructor.image} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpdatedAnimatedComponent(OurCoursesInstructors)