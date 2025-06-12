import React from "react";
import * as Images from '../../../assets';

const OurCoursesSectionTwo = () => {

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

    const SearchInput = () => (
        <>
            <div className="w-full justify-center items-center px-5 py-3 rounded-md border border-gray-200 border-solid max-md:max-w-full ">
            Find courses, skills etc..
        </div>
            {/* <input
                type="text"
                className="w-full justify-center items-center px-5 py-3 rounded-md border border-gray-200 border-solid max-md:max-w-full focus:outline-0 focus:border-0"
                placeholder="Find courses, skills etc.."
            /> */}
        </>
    );

    const Divider = () => (
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1585bf8409a60939c6ca5f2bc6bf2ee2289091322ed951b671707b6d24f31e04?apiKey=8e5983036f284a13866aae97819cdb73&"
            className="shrink-0 my-auto w-px border border-gray-200 border-solid aspect-[0.05] stroke-[1px] stroke-gray-200"
            alt="Images"
        />
    );

    const DropdownButton = ({ label }) => (
        <div className="w-full flex gap-5 justify-between px-6 py-3 whitespace-nowrap rounded-md border border-gray-200 border-solid max-md:pr-5">
            <div>{label}</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/86277f7713ac27e010de05d1537a86c1379485be3811cc1593f53df54661c5a8?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="shrink-0 w-3  aspect-[2] stroke-[1.5px] stroke-zinc-800"
                alt="Dropdown arrow"
            />
        </div>
    );

    const SearchButton = () => (
        <button className="justify-center px-6 py-3.5 my-auto text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5 focus:outline-0">
            Search
        </button>
    );

    const LessonCardList = () => {
        const lessonData = [
            {
                id: 1,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 4,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
            {
                id: 2,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 5,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
            {
                id: 3,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 5,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
            {
                id: 4,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 5,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
            {
                id: 5,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 5,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
            {
                id: 6,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 5,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
            {
                id: 7,
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fb290ca1f99905c1f4743a56c6b4e994452ddcd2a19e56fa58e0535baf44e?apiKey=8e5983036f284a13866aae97819cdb73&",
                lessonCount: "25",
                rating: 5,
                title: "Lorem Ipsum is simply dummy text of the printing and typeset",
                avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03989f1daa00556d1410c2014bdb8bb3a81ba18551b62a6c1366dc7acf342d88?apiKey=8e5983036f284a13866aae97819cdb73&",
                authorName: "Headway Business",
                authorDescription: "lorem ipsum",
            },
        ];

        const LessonCard = ({ imageSrc, lessonCount, rating, title, avatarSrc, authorName, authorDescription }) => (
            <div className="flex flex-col grow w-full bg-white rounded-2xl shadow-2xl max-md:mt-8">
                <img src={imageSrc} alt={title} className="w-full aspect-[1.49] rounded-t-2xl" />
                <div className="flex flex-col p-6 max-md:px-5">
                    <div className="flex gap-5 justify-between w-full">
                        <div className="flex gap-3.5 text-base font-medium text-zinc-800">
                            <img
                                src={Images.ourcourses_play}
                                alt="Lesson icon"
                                className="shrink-0 w-7 aspect-square"
                            />
                            <div className="my-auto">{lessonCount}x Lesson</div>
                        </div>

                        <div className="flex gap-1 my-auto">

                            {Array.from({ length: rating }).map((_, index) => (

                                <>
                                    {/* <img key={index} src="/path/to/star.png" alt="Star rating" className="shrink-0 aspect-square w-[17px]" /> */}
                                    <i className="fa fa-star" key={index} style={{ color: '#FB9400' }}></i>
                                </>

                            ))}
                        </div>
                    </div>
                    <h3 className="mt-6 text-2xl font-medium text-zinc-800">{title}</h3>
                    {/* <hr className="shrink-0 mt-6 h-px bg-gray-200 border border-gray-200 border-solid border-1" /> */}
                    <hr className="shrink-0 mt-6 h-px border border-gray-200 border-solid border-t-2 border-x-0 border-b-0 " />
                    <div className="flex gap-5 justify-between mt-6 w-full">
                        <div className="flex gap-5">
                            <img
                                src={avatarSrc}
                                alt={`${authorName}'s avatar`}
                                className="shrink-0 my-auto rounded-full border border-gray-200 border-solid aspect-square w-[43px] " />
                            <div className="flex flex-col">
                                <div className="text-lg font-medium text-zinc-800">{authorName}</div>
                                <div className="mt-2 text-sm text-neutral-400">{authorDescription}</div>
                            </div>
                        </div>
                        <button className="justify-center px-7 py-2 my-auto text-base font-medium text-white whitespace-nowrap bg-orange-500 rounded-full max-md:px-5">Lorem</button>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="justify-center self-stretch">
                <div className="flex gap-5 py-10 max-md:flex-col max-md:gap-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {lessonData.map((lesson, index) => (
                        <div key={index} className="flex flex-col max-md:ml-0 max-md:w-full ">
                            <LessonCard {...lesson} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    const SearchBar = () => {
        return (
            <div className="flex gap-10 justify-between self-stretch p-4 text-base bg-white rounded-xl shadow-lg max-md:flex-wrap">
                <div className=" w-full flex gap-5 justify-between items-center bg-white rounded-lg text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                    <SearchInput />
                    <Divider />

                    <DropdownButton label="Categories" />
                    <Divider />

                    <DropdownButton label="Topics" />
                </div>
                <SearchButton />
            </div>
        );
    }


    return (
        <section className="relative flex justify-center items-center px-16 py-20 max-md:px-5">
            <img
                loading="lazy"
                src={Images.user_auth_vector}
                className="object-cover absolute bottom-0  "
                alt=''
            />
            <div className="flex flex-col max-w-full w-[1296px] z-10">
                <h2 className="self-center text-5xl font-bold max-md:text-4xl">
                    <span className="text-zinc-800">What do you want to</span>{" "}
                    <span className="text-orange-500"> Learn ?</span>
                </h2>
                <div className="justify-center mt-20 max-md:mt-10 max-md:max-w-full ">
                    {/* <div className="flex gap-5 max-md:flex-col max-md:gap-0"> */}

                    {/* <form className="border p-2 rounded-full shadow-lg mx-auto">
                            <div className="flex">

                                <div className=" w-full">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Find courses, skills etc.." required />
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>

                                <div className="w-full">
                                    <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                                        All categories
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form> */}

                    {/* </div> */}
                    <SearchBar />
                </div>

                <LessonCardList />
            </div>
        </section>
    );
}

export default OurCoursesSectionTwo