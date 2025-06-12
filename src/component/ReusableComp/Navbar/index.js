import React, { useState } from 'react';
import * as Images from '../../../assets';
import { Link } from "react-router-dom";
import { LinkTag } from '../../Link';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-center items-center px-16 py-4 w-full text-base bg-orange-50 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-center max-w-full w-[1296px] max-md:flex-wrap">
                    {/* <img
                        loading="lazy"
                        src={Images.logo}
                        className="self-stretch aspect-[0.97] w-[72px]"
                        alt=""
                    /> */}
                    {/* <div className="flex gap-5 justify-between self-stretch my-auto text-center text-zinc-800 max-md:flex-wrap max-md:max-w-full"> */}
                    {/* <Link to={'/'}>
                            <div
                                className="grow text-gray-700 font-medium focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer"
                            >
                                Home
                            </div>
                        </Link>
                        <Link to={'/about_us'}>
                            <div
                                className='font-medium focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer'
                            >
                                About Us
                            </div>
                        </Link> */}
                    {/* <LinkTag
                            to={'/'}
                            name={'Home'}
                            className="grow text-gray-700 font-medium focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer"
                        />
                        <LinkTag
                            to={'/about_us'}
                            name={'About Us'}
                            className="grow text-gray-700 font-medium focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer"
                        />
                        <div className=" flex gap-1.5 justify-between whitespace-nowrap cursor-pointer">
                            <div className="relative inline-block text-left" onClick={() => setIsOpen(!isOpen)}>
                                <div>
                                    <div className="grow font-medium inline-flex w-full justify-center gap-x-1.5 rounded-md  focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer">Services
                                        <img
                                            loading="lazy"
                                            src={Images.chevron_down}
                                            className="my-auto aspect-[1.08] w-[15px]"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                {isOpen &&
                                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Menu 1</div>
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Menu 2</div>
                                        </div>
                                        <div className="py-1" role="none">
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Menu 3</div>
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Menu 4</div>
                                        </div>
                                        <div className="py-1" role="none">
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Menu 5</div>
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Menu 6</div>
                                        </div>
                                        <div className="py-1" role="none">
                                            <div className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Menu 7</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='font-medium focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer'>Our Products</div>
                        <div className='font-medium focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer'>Blogs</div>
                        <LinkTag
                            to={'/get_in_touch'}
                            name={'Contact Us'}
                            className="font-medium grow whitespace-nowrap  focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer"

                        /> */}
                    {/* <div className="font-medium grow whitespace-nowrap  focus:font-bold focus:text-orange-500 hover:font-bold hover:text-orange-500 hover:cursor-pointer">Contact Us</div> */}
                    {/* </div> */}



                    <nav className="bg-orange-50 border-gray-200  border w-full">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <img
                                loading="lazy"
                                src={Images.logo}
                                className="self-stretch aspect-[0.97] w-[72px]"
                                alt="Images"
                            />

                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-orange-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-orange-50 ">
                                    <li>
                                        <button
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                                            aria-current="page"
                                        >
                                            Home
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0"
                                        >
                                            About Us
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                                        >
                                           Our Services
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                                        >
                                            Our Products
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                                        >
                                            Blogs
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 "
                                        >
                                            Contact
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex items-center gap-5'>
                                
                                <div className="flex gap-5 justify-between self-stretch my-auto whitespace-nowrap">
                                    <button className="font-medium grow justify-center px-6 py-3.5 bg-white rounded text-zinc-800 max-md:px-5 hover:text-white hover:bg-orange-500">
                                        Register
                                    </button>

                                    <button className="font-medium grow justify-center px-6 py-3.5 bg-white  text-zinc-800 rounded max-md:px-5 hover:text-white hover:bg-orange-500">
                                        Login
                                    </button>
                                </div>

                                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>


                </div>
            </nav>
        </>
    )
}

export default Navbar