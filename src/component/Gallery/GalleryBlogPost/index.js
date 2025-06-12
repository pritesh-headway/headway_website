import React, { useState } from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";


const GalleryBlogPost = ({ titleRef, isVisible }) => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const itemsPerPage = 6;

    const blogData = [
        {
            id: 1,
            author: "John Doe",
            date: "17 Jan 2024",
            title: "Factors That Drive Your Jewellery Business Forward: Unlocking Success",
            excerpt: "Factors That Drive Your Jewellery Business Forward: Unlocking Success",
            tags: [
                { text: "Jewellery", color: "orange", bgColor: "white" },
                { text: "Business", color: "blue", bgColor: "indigo" },
                // { text: "Lorem ipsum", color: "emerald", bgColor: "emerald" },
            ],
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Descriptive text the image",
        },
        {
            id: 2,
            author: "John Doe",
            date: "16 Jan 2024",
            title: "Shine Bright: Why Branding is a Key to Success in the Jewellery Business",
            excerpt: "Shine Bright: Why Branding is a Key to Success in the Jewellery Business...",
            tags: [
                { text: "Seminar", color: "orange", bgColor: "white" },
                { text: "Sessions", color: "blue", bgColor: "indigo" },
                // { text: "Lorem ipsum", color: "emerald", bgColor: "emerald" },
            ],
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Descriptive text the image",
        },
        {
            id: 3,
            author: "John Doe",
            date: "15 Jan 2024",
            title: "Beyond the Sparkle: Why Customer Delight is Important in the Jewellery Business",
            excerpt: "Beyond the Sparkle: Why Customer Delight is Important in the Jewellery Business...",
            tags: [
                // { text: "Lorem", color: "orange", bgColor: "white" },
                { text: "Business", color: "blue", bgColor: "indigo" },
                { text: "Training", color: "emerald", bgColor: "emerald" },
            ],
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
            altText: "Descriptive text the image",
        },
    ];

    const handleNextClick = () => {
        const newIndex = currentIndex + itemsPerPage;
        setCurrentIndex(newIndex >= blogData.length ? 0 : newIndex);
    };

    const handlePrevClick = () => {
        const newIndex = currentIndex - itemsPerPage;
        setCurrentIndex(newIndex < 0 ? Math.floor(blogData.length / itemsPerPage) * itemsPerPage : newIndex);
    }

    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    const indexOfLastItem = currentIndex * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentIndex(pageNumber);


    const handleClickPrevious = () => {
        setCurrentIndex(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleClickNext = () => {
        setCurrentIndex(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const startIndex = (currentIndex - 1) * itemsPerPage;
    const visibleItems = blogData.slice(startIndex, startIndex + itemsPerPage);

    const BlogCard = ({ author, date, title, excerpt, tags, imgSrc, altText }) => (
        <article className="flex flex-col w-full max-md:w-full max-md:mb-5">
            <img loading="lazy" src={imgSrc} alt={altText} className="w-full aspect-[1.72]" />
            <div className="mt-8 text-orange-500">{`${author} • ${date}`}</div>
            <h3 className="flex gap-4 mt-3 text-2xl text-zinc-800">
                <span className="flex-auto"  style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                    {title}
                    </span>
                {/* Assuming the next image is a logo or an icon related to the blog post, the alt text should describe its purpose or content */}
                <img loading="lazy" src={Images.recent_blog_icon} alt="Related Icon" className="shrink-0 self-start mt-1 w-6 aspect-square" />
            </h3>
            <p className="mt-3 text-base text-zinc-600"  style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                {excerpt}
            </p>
            <div className="flex gap-2 pr-20 mt-6 text-center max-md:pr-5">
                {tags.map((tag, index) => (
                    <div key={index} className={`justify-center px-2.5 py-0.5 text-${tag.color}-500 bg-${tag.bgColor}-50 rounded-2xl`}>
                        {tag.text}
                    </div>
                ))}
            </div>
        </article>
    );


    return (
        <section className="relative flex justify-center items-center px-16 py-20 bg-white max-md:px-5 "
            ref={titleRef}
        >
            <div className="absolute  bottom-0 rotate-180">
                <img
                    src={Images.blog_post_bg}
                    alt="Images"
                    loading="lazy"
                    className="  self-stretch aspect-[2.9]"
                />
            </div>
            <div className="flex flex-col max-w-full w-[1296px] z-10">
                {/* <header>
                    <h1
                        // className="text-5xl font-medium text-orange-500 max-md:max-w-full max-md:text-4xl"
                        className={`text-5xl font-medium text-zinc-800 max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >All Blog
                        <span className="text-orange-500 font-bold"> Posts</span>
                    </h1>
                </header> */}


                <header className="flex gap-5 justify-between self-stretch font-medium max-md:flex-wrap">
                    <h1 
                    // className="flex-auto text-5xl  max-md:text-4xl"
                    className={`flex-auto text-5xl  max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                    >
                        <span className="leading-[58px] text-zinc-800">All Blog</span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]">Posts</span>
                    </h1>
                    <a
                        href="/blog"
                        className="flex gap-3 justify-center px-8 py-2.5 my-auto text-base text-white bg-orange-500 rounded-lg max-md:px-5 items-center"
                    >
                        <span>View all</span>
                        <img
                            loading="lazy"
                            src={Images.arr_right_white_clr}
                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f91a0c4ed72c28ebc443cd6ef9f02828243aef928b511cb28df01fe7cb897e?apiKey=8e5983036f284a13866aae97819cdb73&"
                            alt="Arrow icon"
                            // className="shrink-0 self-start w-4 aspect-square"
                            className="w-4"
                        />
                    </a>
                </header>


                <section className="justify-center mt-12 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 flex-wrap grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {visibleItems.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>
                </section>

            </div>
        </section>
    );
}

export default UpdatedAnimatedComponent(GalleryBlogPost);