import React, { useEffect, useState } from 'react';
import * as Images from '../../../assets';
import { Email, Phone } from '../../WebsiteComInform';
import { Link } from 'react-router-dom';
import { fetchWithFormData } from '../../../apiGeneralFunction'


const Header = () => {
    
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
            <header className=" flex justify-center items-center px-16 py-2.5 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-w-full w-[1296px] max-md:flex-wrap">
                    <div className="flex gap-2 justify-between text-base text-zinc-800 flex-wrap">
                        <div className="flex gap-1 justify-between whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe41f255839507ee38fd303430f669525b5d5159621d38b37e27310ad498b072?"
                                className="w-5 aspect-square"
                                alt="Images"
                            />
                            <span>{data.mobile}</span>
                            {/* <Phone /> */}
                        </div>
                        <div className="flex gap-1 justify-between">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3096112c42f638ca0539e74c35a126aa8f8a25213bf0ee51430568a6fbcfd11e?"
                                className="w-5 aspect-square"
                                alt=''
                            />
                            <span>{data.email}</span>
                            {/* <Email email_no={`info@headway.org.in`} /> */}
                        </div>
                    </div>
                    <div className="flex gap-3">

                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://www.facebook.com/Headwaybsl/';
                                window.open(data.facebook, '_blank');
                            }}
                            className='focus:outline-none'
                            aria-labelledby='facebook'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_fb}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6838c970cea6b950dfce81a74690fac0651497ddf594fee7fa4f9d41244130f?"
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button>
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0de2dc821abfb780a38a10042f541a52781c5d96dfd805ea80bd3851923284c0?"
                            className="w-5 aspect-square"
                            alt=''
                        /> */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://www.facebook.com/Headwaybsl/';
                                window.open(data.linkedin, '_blank');
                            }}
                            className='focus:outline-none'
                              aria-labelledby='linkedin'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_ln}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6838c970cea6b950dfce81a74690fac0651497ddf594fee7fa4f9d41244130f?"
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button>
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded7988219dead1ab1c6e09ff3db39ac6482c4673bddd51f5b246fbdff19e01d?"
                            className="w-5 aspect-square"
                            alt=''
                        /> */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://www.facebook.com/Headwaybsl/';
                                window.open(data.youtube, '_blank');
                            }}
                            className='focus:outline-none'
                              aria-labelledby='youtube'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_youtube}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6838c970cea6b950dfce81a74690fac0651497ddf594fee7fa4f9d41244130f?"
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button>
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f82a89ac6f149d8ff1098d27258cec9251dd9a00ad5a5686427bc426efd0a4d9?"
                            className="w-5 aspect-square"
                            alt=''
                        /> */}
                         {/* <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://www.facebook.com/Headwaybsl/';
                                window.open('https://www.pinterest.ph/login/', '_blank');
                            }}
                            className='focus:outline-none'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_pi}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6838c970cea6b950dfce81a74690fac0651497ddf594fee7fa4f9d41244130f?"
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button> */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://www.instagram.com/headway_business_solutions/';
                                window.open(data.instagram, '_blank');
                            }}
                            className='focus:outline-none'
                              aria-labelledby='instagram'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_insta}
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button>
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa8cd3ded724bbb3812d4922e966704fb0ea45048f96f3ea34298618fb2e9f2?"
                            className="aspect-[0.95] w-[19px]"
                            alt=''
                        /> */}
                        {/* <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://www.instagram.com/headway_business_solutions/';
                                window.open('https://www.quora.com/', '_blank');
                            }}
                            className='focus:outline-none'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_quora}
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button> */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                // window.location.href = 'https://twitter.com/Headway_100';
                                window.open(data.twitter, '_blank');
                            }}
                            className='focus:outline-none'
                              aria-labelledby='twitter'
                        >
                            <img
                                loading="lazy"
                                src={Images.header_twitter}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/db76d725b4f086220036b853e146ce14affc4e81c37be0571e30678f4eccf21d?"
                                className="w-5 aspect-square"
                                alt=''
                            />
                        </button>
                    </div>
                </div>
            </header>
            
        </>
    )
}

export default Header