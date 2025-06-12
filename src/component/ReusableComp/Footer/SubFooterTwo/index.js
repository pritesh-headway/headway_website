import React, { useEffect, useState } from 'react';
import * as Images from '../../../../assets';
import { fetchWithFormData } from '../../../../apiGeneralFunction'

const Subfootertwo = () => {
                const [data, setData] = useState([]);
            
              
                useEffect(() => {
                const formData = new FormData();
            
                fetchWithFormData(`gen_settings`, formData)
                    // .then(data => setData(data[0].data))
                    .then(data => {
                      // console.log("adghsasd1", data)
                      if (data?.status === true) {
                        setData(data?.data);
                       
                      }
                      else {
                        // console.error('Status is not true:', data?.status);
                        setData(null);
                      }
                    })
                    .catch(
                      // error => console.error('Error fetching data:', error)
                      );
              
                }, []);
    return (
        <>

            <div className="flex gap-5 justify-between py-6 w-full max-md:flex-wrap max-md:max-w-full ">
                <div
                    // className="flex-auto my-auto text-base text-start text-neutral-400 max-md:max-w-full font-normal"
                    className="flex-auto my-auto text-base text-start max-md:max-w-full font-normal"
                    style={{ color: '#8c8c8c' }}
                >
                    {/* Copyright &#169; 2024 headway business solutions LLP. All rights
                    reserved */}
                    Copyright &#169; {new Date().getFullYear()} Headway Business Solutions LLP. All rights reserved
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(data.facebook, '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">

                            <img
                                loading="lazy"
                                src={Images.header_fb}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(data.linkedin, '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">
                            <img
                                loading="lazy"
                                src={Images.header_ln}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(data.youtube, '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">
                            <img
                                loading="lazy"
                                src={Images.header_youtube}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button>

                    {/* <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.pinterest.ph/login/', '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">
                            <img
                                loading="lazy"
                                src={Images.header_pi}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button> */}

                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(data.instagram, '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">
                            <img
                                loading="lazy"
                                src={Images.header_insta}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button>


                    {/* <i className='fa fa-quora'></i> */}
                    {/* <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.quora.com/', '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">
                            <img
                                loading="lazy"
                                src={Images.header_quora}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button> */}

                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(data.twitter, '_blank');
                        }}
                        className='focus:outline-none'
                    >
                        <div className="flex justify-center items-center px-3 w-11 h-11 aspect-square bg-orange-50 rounded-[360px]">
                            <img
                                loading="lazy"
                                src={Images.header_twitter}
                                className="w-full aspect-square"
                                alt=''
                            />
                        </div>
                    </button>

                </div>
            </div>
        </>

    )
}

export default Subfootertwo