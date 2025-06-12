import React, { useEffect, useState } from 'react';
import * as Images from '../../../assets';
import { LinkTag } from '../../Link';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchWithFormData, fetchWithFormDataToken, fetchWithFormDataWithoutBody } from '../../../apiGeneralFunction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar1 = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userPic, setUserPic] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    const isActiveMenuItem = (link) => {
        return location?.pathname === link;
    };

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isHeadwayInitiativesOpen, setIsHeadwayInitiativesOpen] = useState(false);
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (
    //             !event.target.closest('#service_menu') &&
    //             !event.target.closest('#product_menu') &&
    //             !event.target.closest('#company_menu') &&
    //             !event.target.closest('#user_menu')
    //             // !event.target.closest('#mobile-menu')
    //         ) {

    //             setIsOpen(false);
    //             setIsAboutUsOpen(false);
    //             setIsProductOpen(false);
    //             setIsHeadwayInitiativesOpen(false);
    //             setIsUserProfileOpen(false);
    //             // setIsMobileMenuOpen(false)
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [
    //     isOpen, isAboutUsOpen, isProductOpen, isUserProfileOpen
    // ]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !event.target.closest('#mobile-menu')
            ) {
                setIsMobileMenuOpen(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        isMobileMenuOpen
    ]);



    const token = localStorage.getItem('login api response token');


    const handleLogout = () => {
        localStorage.clear();
        const fetchAPI = async () => {
            const tokenValue = localStorage.getItem('login api response token');
            const storedToken = JSON.parse(tokenValue);

            if (!storedToken) {
                navigate('/login');
                return;
            }

            else {
                try {

                    const result = await fetchWithFormDataWithoutBody('api/logout', storedToken);

                    if (result?.status === true) {
                        localStorage.clear();
                        await clearCacheAndCookies();
                        navigate('/login');
                        toast.dismiss()
                        toast.success(result?.message, {
                            position: 'top-center',
                            autoClose: 2000,

                        })

                    }
                    else {
                        toast.dismiss()
                        toast.error(result?.message, {
                            position: 'top-center',
                            autoClose: 3000,
                        });
                    }



                } catch (error) {

                }
            }


        };
        fetchAPI();
    }


    const handleUserData = async () => {



        const user_id = localStorage?.getItem('user_data') || '';

        const userId = user_id ? JSON.parse(user_id) : {};

        try {
            const tokenValue = localStorage?.getItem('login api response token') || '';

            const formdata = new FormData();
            formdata.append("user_id", userId?.user_id);

            if (tokenValue) {
                try {
                    const storedToken = JSON.parse(tokenValue);
                    if (storedToken) {
                        const result = await fetchWithFormDataToken('profile/getProfile', formdata, storedToken);
                        // c
                        if (result?.status === true) {

                            setUserPic(result?.data?.avatar)


                            const firstName = result?.data?.name ? result?.data?.name?.split(" ")[0] : '';

                            setUserName(firstName)

                        }
                        else {

                        }
                    }
                } catch (error) {


                }
            }


        } catch (error) {

        }



    };

    const clearCacheAndCookies = async () => {

        if (caches) {
            const cacheNames = await caches.keys();
            cacheNames.forEach(cacheName => {
                caches.delete(cacheName);
            });
        }


        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        }
    };

    useEffect(() => {
        handleUserData();
        const handleUserProfileUpdated = () => {
            handleUserData();
        };
        window.addEventListener('userProfileUpdated', handleUserProfileUpdated);
        return () => {
            window.removeEventListener('userProfileUpdated', handleUserProfileUpdated);
        };
    }, []);

    return (
        <nav
            className="w-full text-base max-lg:px-5 max-lg:max-w-full"
            style={{
                background: 'linear-gradient(90deg,rgb(255, 226, 207) 0%, #fff8f5 10%, #fff8f5 77%,rgb(255, 233, 220) 100%)'
            }}
        // className="w-full text-base bg-orange-50 max-lg:px-5 max-lg:max-w-full "
        // className={`navbar  ${isScrolled ? 'fixed scrolled  shadow-2xl' : ''}   py-4 w-full text-base bg-orange-50 max-md:px-5 max-md:max-w-full `}
        // style={{
        //     position: isScrolled ? 'fixed' : 'relative',
        //     top: isScrolled ? 0 : '',
        // }}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 max-w-full ">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={Images.logo}
                        className="w-[105px]" alt="Headway Logo" />
                </Link>
                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse items-center">
                    <div className='gap-5 flex'>

                        {!token ?
                            <Link to={'/login'}>
                                <button
                                    type="button"
                                    // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                    className="font-medium grow justify-center px-6 py-2.5 text-base rounded max-md:px-5 text-white bg-orange-500 focus:outline-0"
                                >
                                    Login
                                </button>
                            </Link>
                            :
                            <div className=' flex gap-5 items-center '>

                                <div
                                    className='relative'
                                >
                                    <div
                                        onClick={() => setIsUserProfileOpen(!isUserProfileOpen) && setIsOpen(false) && setIsAboutUsOpen(false) && setIsProductOpen(false)}
                                        className='cursor-pointer flex items-center gap-3 bg-white px-2.5 rounded-lg py-1 '

                                    >
                                        <span className="sr-only">Open user menu</span>
                                        {userPic && /\.(png|webp|jpeg|jpg)$/.test(userPic) ? (
                                            <img
                                                className="w-8 h-8 rounded-full "
                                                loading='lazy'
                                                width=""
                                                height=""
                                                src={userPic ? userPic : ''}
                                                alt="user photo"
                                            />
                                        ) : (
                                            <i className='fa fa-user-circle text-3xl text-orange-500'></i>
                                        )}

                                        <div>

                                            <div className='text-sm'>{userName ? userName : ''}</div>

                                        </div>
                                        <img
                                            loading="lazy"
                                            src={isUserProfileOpen ? Images.chevron_orangeclr_down : Images.chevron_down}
                                            data-src-hover={Images.chevron_orangeclr_down}
                                            className="my-auto aspect-[1.08] w-[15px]"
                                            alt="Images"
                                            width=""
                                            height=""

                                        />

                                    </div>
                                    {isUserProfileOpen &&
                                        <div
                                            id="user_menu"
                                            className="absolute right-0 z-20 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1"

                                        >

                                            <ul className="py-2" aria-labelledby="user-menu-button">
                                                <Link to={'/user_profile'}>
                                                    <li>
                                                        <div
                                                            className="block px-4 py-2 text-sm text-zinc-800 hover:terms_bg_clr hover:text-orange-500 cursor-pointer"

                                                        >
                                                            My Account
                                                        </div>
                                                    </li>
                                                </Link>
                                                <li>
                                                    <div
                                                        className="block px-4 py-2 text-sm text-zinc-800 hover:terms_bg_clr hover:text-orange-500 cursor-pointer"
                                                        onClick={() => handleLogout()}
                                                    >
                                                        Logout
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    }

                                </div>
                            </div>

                        }


                    </div>

                    <button

                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg lg:hidden hover:bg-orange-500 hover:text-white focus:outline-none "

                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>

                <div

                    className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1  ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                >
                    <ul
                        id="mobile-menu"
                        className={` flex flex-col font-medium p-4 lg:p-0 mt-4 
                        rounded-lg bg-[#fff8f5] lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  max-lg:shadow-lg 
                        max-lg:shadow-orange-100`}>

                        <li>
                            <LinkTag
                                name={`Home`}
                                to={`/`}
                                className={`cursor-pointer block py-2 px-3 lg:p-0 rounded ${isActiveMenuItem('/') ? 'text-orange-500' : 'text-zinc-800'}`}

                            />

                        </li>
                        <li>
                            <LinkTag
                                name={`About Us`}
                                to={`/about_us`}
                                className={`cursor-pointer block py-2 px-3 lg:p-0 rounded ${isActiveMenuItem('/about_us') ? 'text-orange-500' : 'text-zinc-800'}`}

                            />


                        </li>
                        <li
                            className=''

                        >

                            <div
                                className={`${isOpen || isActiveMenuItem('/start_up') || isActiveMenuItem('/make_my_business') || isActiveMenuItem('/jewellery_vidhyapith') || isActiveMenuItem('/idb') || isActiveMenuItem('/intelligent_hr') || isActiveMenuItem('/headway_IT') || isActiveMenuItem('/our_courses') || isActiveMenuItem('/our_it_services') ? 'text-orange-500' : 'text-zinc-800'} 
                            hover-nav-change relative cursor-pointer block py-2 px-3 lg:p-0 rounded md:bg-transparent  hover:text-orange-500 active:text-orange-500 focus:text-orange-500`}
                                onMouseLeave={() => setIsOpen(false)}

                            // onClick={() => setIsOpen(!isOpen) && setIsAboutUsOpen(false) && setIsProductOpen(false)}

                            >
                                <div
                                    className='flex items-center gap-2 nav_dropdown '
                                    // onClick={() => setIsOpen(true) && setIsAboutUsOpen(false) && setIsProductOpen(false)}

                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Our Services

                                    <img
                                        loading="lazy"

                                        src={isOpen || isActiveMenuItem('/start_up') || isActiveMenuItem('/make_my_business') || isActiveMenuItem('/jewellery_vidhyapith') || isActiveMenuItem('/idb') || isActiveMenuItem('/intelligent_hr') || isActiveMenuItem('/headway_IT') || isActiveMenuItem('/our_courses') || isActiveMenuItem('/our_it_services') ? Images.chevron_orangeclr_down : Images.chevron_down}
                                        data-src-hover={Images.chevron_orangeclr_down}
                                        className="my-auto aspect-[1.08] w-[15px]"
                                        alt="Images"

                                    />

                                </div>
                                {isOpen &&
                                    <div
                                        id="service_menu"
                                        className="absolute left-[15%] z-20 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <Link to={`/start_up`}>

                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/start_up') ? 'text-orange-500' : 'text-zinc-800'}`} role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Startup
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="py-1" role="none">
                                            <Link to={`/make_my_business`}>

                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/make_my_business') ? 'text-orange-500' : 'text-zinc-800'}`} role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Make My Business
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="py-1" role="none">
                                            <Link to={`/jewellery_vidhyapith`}>

                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/jewellery_vidhyapith') ? 'text-orange-500' : 'text-zinc-800'}`} role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Jewellery Vidhyapith
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="py-1" role="none">
                                            <Link to={`/idb`}>

                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/idb') ? 'text-orange-500' : 'text-zinc-800'}`} role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Individual Development Program
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="py-1" role="none">
                                            <Link to={`/intelligent_hr`}>

                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/intelligent_hr') ? 'text-orange-500' : 'text-zinc-800'}`} role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Intelligent HR
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="py-1" role="none">
                                            <Link to={`/headway_IT`}>
                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/headway_IT') ? 'text-orange-500' : 'text-zinc-800'}`} role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Headway IT
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="py-1" role="none">
                                            <Link to={`/our_it_services`}>
                                                <div
                                                    className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/our_it_services') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Our IT Services
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                }
                            </div>
                        </li>

                        <li>
                            <div
                                className={` hover-nav-change relative cursor-pointer block py-2 px-3 lg:p-0 rounded md:bg-transparent  hover:text-orange-500 
                        ${isProductOpen || isActiveMenuItem('/plan_pricing') || isActiveMenuItem('/our_services') ? 'text-orange-500' : 'text-zinc-800'}
                        `}
                                // onClick={() => setIsProductOpen(!isProductOpen) && setIsAboutUsOpen(false) && setIsOpen(false)}

                                onMouseLeave={() => setIsProductOpen(false)}
                            // onTouchEnd={() => setIsProductOpen(false)}
                            // onMouseLeave={() => setIsProductOpen(false)}
                            // onTouchEnd={() => setIsProductOpen(false)}

                            >
                                <div
                                    className='flex items-center gap-2 nav_dropdown'
                                    onClick={() => setIsProductOpen(!isProductOpen)}
                                >
                                    Our Products

                                    <img
                                        loading="lazy"
                                        src={isOpen || isActiveMenuItem('/plan_pricing') || isActiveMenuItem('/our_services') ? Images.chevron_orangeclr_down : Images.chevron_down}

                                        data-src-hover={Images.chevron_orangeclr_down}
                                        className="my-auto aspect-[1.08] w-[15px]"
                                        alt="Products"
                                    />
                                </div>
                                {isProductOpen &&
                                    <div
                                        id="product_menu"
                                        className="absolute left-[15%] z-20 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <Link to={`/plan_pricing`}>
                                                <div

                                                    className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/plan_pricing') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Plan Pricing
                                                </div>
                                            </Link>

                                        </div>
                                        {/* <div className="py-1" role="none">
                                            <Link to={`/our_services`}>

                                                <div className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/our_services') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Book Online
                                                </div>
                                            </Link>

                                        </div> */}

                                    </div>
                                }
                            </div>

                        </li>
                        <li>
                            <LinkTag
                                name={`Headway Initiatives`}
                                to={`/headway_initiatives`}
                                className={`cursor-pointer block py-2 px-3 lg:p-0 rounded ${isActiveMenuItem('/headway_initiatives') ? 'text-orange-500' : 'text-zinc-800'}`}
                            />


                        </li>
                        <li>


                            <div

                                className={` hover-nav-change relative cursor-pointer block py-2 px-3 lg:p-0 rounded md:bg-transparent  hover:text-orange-500 
                            ${isAboutUsOpen || isActiveMenuItem('/blogs') || isActiveMenuItem('/gallery') || isActiveMenuItem('/meet_our_team') ? 'text-orange-500' : 'text-zinc-800'}
                            `}
                                onMouseLeave={() => setIsAboutUsOpen(false)}
                            // onTouchEnd={() => setIsAboutUsOpen(false)}
                            // onClick={() => setIsAboutUsOpen(!isAboutUsOpen) && setIsOpen(false) && setIsProductOpen(false)}
                            >
                                <div
                                    className='flex items-center gap-2 nav_dropdown'
                                    onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}

                                >
                                    Our Company

                                    <img
                                        loading="lazy"

                                        src={isAboutUsOpen || isActiveMenuItem('/gallery') || isActiveMenuItem('/meet_our_team') || isActiveMenuItem('/blogs') ? Images.chevron_orangeclr_down : Images.chevron_down}
                                        data-src-hover={Images.chevron_orangeclr_down}
                                        className="my-auto aspect-[1.08] w-[15px]"
                                        alt="Images"
                                    />
                                </div>
                                {isAboutUsOpen &&
                                    <div
                                        id="company_menu"
                                        className="absolute left-[15%] z-20 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <Link to={`/blogs`}>
                                                <div
                                                    className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/blogs') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Blogs
                                                </div>
                                            </Link>

                                        </div>

                                        {/* <div className="py-1" role="none">
                                            <Link to={`/gallery`}>
                                                <div
                                                    className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/gallery') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Gallery
                                                </div>
                                            </Link>

                                        </div> */}
                                        <div className="py-1" role="none">
                                            <Link to={`/meet_our_team`}>
                                                <div
                                                    className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/meet_our_team') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-2">
                                                    Meet Our Team
                                                </div>
                                            </Link>

                                        </div>

                                    </div>
                                }
                            </div>
                        </li>

                        <li>

                            <LinkTag
                                name={`Contact Us`}
                                to={`/get_in_touch`}
                                className={`cursor-pointer block py-2 px-3 lg:p-0 rounded ${isActiveMenuItem('/get_in_touch') ? 'text-orange-500' : 'text-zinc-800'}`}

                            />

                        </li>
                        {/* 
                        <li>
    <LinkTag
        name="Others"
        to="https://forms.gle/JG2baVv9E3DT1mF56"
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer block py-2 px-3 lg:p-0 rounded ${isActiveMenuItem('/get_in_touch') ? 'text-orange-500' : 'text-zinc-800'}`}
    />
</li> */}

                        {/* 
                        <li>
                            <a
                                href="https://forms.gle/JG2baVv9E3DT1mF56"
                                target="_blank"
                                rel="noopener noreferrer" // Recommended for security reasons
                                className={`cursor-pointer block py-2 px-3 lg:p-0 rounded ${isActiveMenuItem('/get_in_touch') ? 'text-orange-500' : 'text-zinc-800'}`}
                            >
                                Others
                            </a>
                        </li> */}


                        <li>


                            <div

                                className={` hover-nav-change relative cursor-pointer block py-2 px-3 lg:p-0 rounded md:bg-transparent  hover:text-orange-500 
${isMoreOpen ? 'text-orange-500' : 'text-zinc-800'}
`}
                                onMouseLeave={() => setIsMoreOpen(false)}
                            // onTouchEnd={() => setIsAboutUsOpen(false)}
                            // onClick={() => setIsAboutUsOpen(!isAboutUsOpen) && setIsOpen(false) && setIsProductOpen(false)}
                            >
                                <div
                                    className='flex items-center gap-2 nav_dropdown'
                                    onClick={() => {
                                        setIsMoreOpen(!isMoreOpen);
                                    }}

                                >
                                    More

                                    <img
                                        loading="lazy"
                                        src={isMoreOpen ? Images.chevron_orangeclr_down : Images.chevron_down}
                                        data-src-hover={Images.chevron_orangeclr_down}
                                        className="my-auto aspect-[1.08] w-[15px]"
                                        alt="Images"
                                    />
                                </div>
                                {isMoreOpen &&
                                    <div
                                        id="more_menu"
                                        className="absolute left-[15%] z-20 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <a href="https://forms.gle/JG2baVv9E3DT1mF56" target="_blank">
                                                <div className="block px-4 py-2 text-sm text-zinc-800 hover:text-orange-500">
                                                    Exhibition Visitors Form
                                                </div>
                                            </a>

                                        </div>
                                        <div className="py-1" role="none">
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6V9VMwh4K4Bu7CvicfUoEBBH_AH6ecmUX7g8ZbgMJdZWR0w/viewform?fbzx=-5841238227092255560" target="_blank">
                                                <div className="block px-4 py-2 text-sm text-zinc-800 hover:text-orange-500">
                                                    Candidate Registration Form
                                                </div>
                                            </a>

                                        </div>

                                        {/* <div className="py-1" role="none">
                                            <Link to={`/our_it_services`}>
                                                <div
                                                    className={`block px-4 py-2 text-sm hover:text-orange-500 ${isActiveMenuItem('/gallery') ? 'text-orange-500' : 'text-zinc-800'}`}
                                                    role="menuitem" tabIndex="-1" id="menu-item-0">
                                                    Our IT Services
                                                </div>
                                            </Link>

                                        </div> */}

                                    </div>
                                }
                            </div>
                        </li>


                    </ul>
                </div>


            </div>

            <ToastContainer />

        </nav>

    )
}

export default Navbar1