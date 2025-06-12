import React, { useEffect, useState } from "react";
import * as Images from '../../../assets';
import UpdatedAnimatedComponent from "../../AnimationWrapperComponent";
import { fetchWithFormData } from "../../../apiGeneralFunction";
import ProfileImageComponent from "../../ProfileImageComponent";
import { useNavigate } from "react-router-dom";


const AllBlogPosts = ({ titleRef, isVisible }) => {

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const formData = new FormData();

      const result = await fetchWithFormData('blogs_list', formData);

      if (result?.status === true) {
        console.log("blog list data", result?.data);
        setData(result?.data);
      } else {
        setData(null);
      }
    } catch (error) {

    }
  }

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
        { text: "Jewellery", color: "orange", bgColor: "white" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 2,
      author: "John Doe",
      date: "16 Jan 2024",
      title: `Shine Bright: Why Branding is a Key to 
      Success in the Jewellery Business`,
      excerpt: `Shine Bright: Why Branding is a Key to 
      Success in the Jewellery Business`,
      tags: [
        { text: "Seminar", color: "orange", bgColor: "white" },
        { text: "Sessions", color: "blue", bgColor: "indigo" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 3,
      author: "John Doe",
      date: "15 Jan 2024",
      title: `Beyond the Sparkle: Why Customer 
      Delight is Important in the Jewellery 
      Business`,
      excerpt: `Beyond the Sparkle: Why Customer 
      Delight is Important in the Jewellery 
      Business`,
      tags: [
        { text: "Business", color: "blue", bgColor: "indigo" },
        { text: "Training", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 4,
      author: "Natali Craig",
      date: "14 Jan 2024",
      title: `10 Golden Delights: The Ultimate Guide to 
      Gifting Gold Jewellery for Her`,
      excerpt: `Gold jewellery is a symbol of love, appreciation, and timeless elegance. When it comes to finding the perfect gift for that special woman in your life,`,
      tags: [
        { text: "Jewellery", color: "orange", bgColor: "white" },
        { text: "Business", color: "blue", bgColor: "indigo" },
        { text: "Training", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 5,
      author: "Drew Cano ",
      date: "13 Jan 2024",
      title: `10 Awesome Gift Ideas for Him: Show 
      Your Man You Care!`,
      excerpt: `Gold – a timeless symbol of luxury, class, and value – makes an exceptional gift for the special man in your life.`,
      tags: [
        { text: "Seminar", color: "orange", bgColor: "white" },
        { text: "Business", color: "blue", bgColor: "indigo" },
        { text: "Training", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 6,
      author: "Orlando Diggs",
      date: "12 Jan 2024",
      title: `Find Your Forever Sparkle: Engagement &
      Wedding Ring Guide`,
      excerpt: `Choosing the perfect engagement and wedding ring is a beautiful occasion, symbolizing a lifelong commitment and celebrating a love story.`,
      tags: [
        { text: "Jewellery", color: "orange", bgColor: "white" },
        { text: "Business", color: "blue", bgColor: "indigo" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 7,
      author: "Alec Whitten",
      date: "17 Jan 2024",
      title: "Lorem Ipsum is simply dummy text",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: [
        { text: "Lorem", color: "orange", bgColor: "white" },
        { text: "Lorem", color: "blue", bgColor: "indigo" },
        { text: "Lorem ipsum", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 8,
      author: "Alec Whitten",
      date: "17 Jan 2024",
      title: "Lorem Ipsum is simply dummy text",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: [
        { text: "Lorem", color: "orange", bgColor: "white" },
        { text: "Lorem", color: "blue", bgColor: "indigo" },
        { text: "Lorem ipsum", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 9,
      author: "Alec Whitten",
      date: "17 Jan 2024",
      title: "Lorem Ipsum is simply dummy text",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: [
        { text: "Lorem", color: "orange", bgColor: "white" },
        { text: "Lorem", color: "blue", bgColor: "indigo" },
        { text: "Lorem ipsum", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
    {
      id: 10,
      author: "Alec Whitten",
      date: "17 Jan 2024",
      title: "Lorem Ipsum is simply dummy text",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: [
        { text: "Lorem", color: "orange", bgColor: "white" },
        { text: "Lorem", color: "blue", bgColor: "indigo" },
        { text: "Lorem ipsum", color: "emerald", bgColor: "emerald" },
      ],
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/704e58ee719da9d51bc7010eeb318ad655397755e3c29bc4ffd7ba979c7a3a15?apiKey=8e5983036f284a13866aae97819cdb73&",
      altText: "Descriptive text the image",
    },
  ];

  const handleNextClick = () => {
    const newIndex = currentIndex + itemsPerPage;
    setCurrentIndex(newIndex >= data.length ? 0 : newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex - itemsPerPage;
    setCurrentIndex(newIndex < 0 ? Math.floor(data.length / itemsPerPage) * itemsPerPage : newIndex);
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentIndex * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentIndex(pageNumber);


  const handleClickPrevious = () => {
    setCurrentIndex(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleClickNext = () => {
    setCurrentIndex(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentIndex - 1) * itemsPerPage;
  const visibleItems = blogData.slice(startIndex, startIndex + itemsPerPage);
  const dataItems = data.slice(startIndex, startIndex + itemsPerPage)
  console.log("visibleItems", data.slice(startIndex, startIndex + itemsPerPage));

  const BlogCard = ({ author, date, title, excerpt, tags, imgSrc, altText }) => (
    <article className="flex flex-col w-full max-md:w-full">
      <img loading="lazy" src={imgSrc} alt={altText} className="w-full aspect-[1.72]" />
      <div className="mt-8 text-orange-500">{`${author} • ${date}`}</div>
      <h3 className="flex gap-4 mt-3 text-2xl text-zinc-800 justify-between" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
        <span className="flex-auto">{title}</span>
        {/* {title.length > 30 ? title.substring(0, 30) + "..." : title} */}
        {/* {title.substring(0, 30)}
        <span className="hidden">
          {title.substring(30)}...
        </span> */}
        <img loading="lazy" src={Images.recent_blog_icon} alt="Related Icon" className="shrink-0 self-start mt-1 w-6 aspect-square" />
      </h3>
      <p className="mt-3 text-base text-zinc-600" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
        {excerpt}
        {/* {excerpt.length > 105 ? excerpt.substring(0, 105) + "..." : excerpt} */}

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

  const BlogDataCard = ({ id, description, blog_date, category, image, name, title, blog }) => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const renderStatus = (category) => {
      console.log("status", category);
      switch (category) {
        case "Training":
          return <span className="text-green-500 bg-green-50  px-3 rounded-lg">Training</span>;
        case "Seminar":
          return <span className="text-green-600 bg-green-50 px-3 rounded-lg">Seminar</span>;
        case "Business":
          return <span className="text-blue-600  bg-blue-50 px-3 rounded-lg">Business</span>;
        case "Jewellery":
          return <span className="text-orange-600 bg-orange-50 px-3 rounded-lg">Jewellery</span>;
        case "Sessions":
          return <span className="text-orange-600 bg-white px-3 rounded-lg">Sessions</span>;
        default:
          return <span className=""></span>;
      }
    };

    const handleNavigation = () => {
      localStorage.setItem("blog detail id", id)
      // navigate('/blog_detail', { state: { id } }); 
      navigate('/blog_detail');
    };

    console.log("blog single data", id);
    return (
      <article className="flex flex-col w-full max-md:w-full cursor-pointer"
        onClick={() => handleNavigation()}
      >
        {/* <img loading="lazy" 
        src={image ? image : Images.logo} 
        alt={`alt`} className="w-full aspect-[1.72] rounded-lg" /> */}
        <div className="">
          <ProfileImageComponent
            profilePicUrl={image}
            className={`aspect-[1.70] rounded-lg border bg-white max-sm:h-40 max-sm:w-full max-sm:mx-auto`}
          />
        </div>
        <div className="mt-8 text-orange-500">{`${name} • ${blog_date}`}</div>
        <h3 className="flex gap-4 mt-3 text-xl text-zinc-800 justify-between"
        // style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}
        >
          <span className="flex-auto">{title}</span>
          <img loading="lazy" src={Images.recent_blog_icon} alt="Related Icon" className="shrink-0 self-start mt-1 w-6 aspect-square" />
        </h3>
        {/* <div className="text-start mt-3 text-sm"
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}
          dangerouslySetInnerHTML={{ __html: `${description}` }}
        /> */}
        {/* <span
          className="text-sm text-red-500  cursor-pointer"
          // onClick={() => setOpen(true)}
          onClick={() => handleNavigation()}
        >
          Read More <i className="fa fa-angle-down"></i>
        </span> */}
        {/* {!open &&
          <>
            <div className="text-start"
              style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}
              dangerouslySetInnerHTML={{ __html: `${description}` }}
            />
            <span
              className="text-sm text-red-500  cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Read More <i className="fa fa-angle-down"></i>
            </span>
          </>
        }
        {open &&
          <>
            <div className="text-start"
              dangerouslySetInnerHTML={{ __html: `${description}` }}
            />
            <span
              className="text-sm text-red-500 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Read Less <i className="fa fa-angle-up"></i>
            </span>
          </>
        } */}
        <div className="flex gap-2 pr-20 mt-3 text-center max-md:pr-5 text-sm">
          {renderStatus(category)}
        </div>
      </article>
    )
  };

  return (
    <section className="relative flex justify-center items-center px-16 py-20 bg-white max-md:px-5 "
      ref={titleRef}
    >
      <div className="absolute  top-0">
        <img
          src={Images.blog_post_bg}
          alt="Images"
          loading="lazy"
          className="  self-stretch aspect-[2.9]"
        />
      </div>
      <div className="z-10 flex flex-col max-w-full w-[1296px] ">

        <h1
          className="text-5xl font-medium text-zinc-800 max-md:max-w-full max-md:text-4xl"
        //  className={`text-5xl font-medium text-zinc-800 max-md:max-w-full max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
        >All Blog
          <span className="text-orange-500 font-bold"> Posts</span>
        </h1>

        <section className="justify-center pt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col max-md:gap-5 flex-wrap grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {/* {visibleItems.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))} */}
            {dataItems.map((blog, index) => (
              <BlogDataCard key={index} {...blog} />
            ))}
          </div>
        </section>
        <footer className=" flex gap-5 justify-between items-start pt-5 mt-12 w-full text-sm font-medium whitespace-nowrap border-t border-gray-200 border-solid text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div
            className="flex gap-2 justify-center mt-2.5 cursor-pointer"
            onClick={handleClickPrevious}
            disabled={currentIndex === 1}
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/068e81483a012c28d0beb2e11403fe8036eb2679b3088bc32e7ab7fb2c337f91?apiKey=8e5983036f284a13866aae97819cdb73&" alt="Previous Page" className="shrink-0 w-5 aspect-square" />
            <span>Previous</span>
          </div>

          <div className="flex gap-3 self-stretch text-center pagination items-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={` ${index + 1 === currentIndex ? 'active  text-white' : 'null bg-zinc-100 text-black rounded-lg '}`}>
                <button
                  className="justify-center items-end  rounded-full focus:outline-0 px-2.5 py-1"
                  onClick={() => paginate(index + 1)}>{index + 1}</button>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center mt-2.5  cursor-pointer"
            onClick={handleClickNext}
            disabled={currentIndex === totalPages}
          >
            <span>Next</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce90b6fd20e8725611002e627738a1496d3e8578d82c061c380d7f8c11e25964?apiKey=8e5983036f284a13866aae97819cdb73&" alt="Next Page" className="shrink-0 w-5 aspect-square" />
          </div>
        </footer>
      </div>
    </section>
  );
}

export default UpdatedAnimatedComponent(AllBlogPosts);