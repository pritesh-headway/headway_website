import React, { useEffect, useState } from 'react';
import * as Images from '../../../../assets';

import { LinkTag, LinkTagwithClass } from '../../../Link';
import { Address, Email, Phone } from '../../../WebsiteComInform';
import { Link } from 'react-router-dom';
import { fetchWithFormData } from '../../../../apiGeneralFunction'


const Subfooterone = () => {
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
            <div className="justify-between py-12 max-md:max-w-full">
                <div className="flex gap-5 max-lg:flex-col max-md:gap-0 max-md: justify-between flex-wrap">


                    <Link to={'/'} className="focus:ring-0 focus:outline-0">
                        <img
                            loading="lazy"
                            src={Images.logo}
                            className="focus:ring-0 focus:outline-0 mt-6 self-stretch my-auto w-44 h-[150px] max-w-full aspect-square max-md:mt-10"
                            alt="Company Logo"
                            tabIndex="0"
                        />
                    </Link>

                    <div
                        className="flex flex-col  w-[75%] max-md:ml-0 max-md:w-full mx-auto"

                    >
                        <div className="flex gap-5 items-center self-stretch my-auto max-md:flex-wrap max-md:mt-10 max-md:max-w-full justify-between ">
                            <div className="flex flex-col self-stretch my-auto text-base basis-0 text-zinc-800  font-medium">
                                {/* <div>About Us</div> */}
                                <LinkTagwithClass name={`About Us`} to={'/about_us'} className={`hover:text-orange-500 whitespace-nowrap`} />
                                <LinkTagwithClass name={`Meet our team`} to={'/meet_our_team'} className={`hover:text-orange-500 whitespace-nowrap mt-6`} />

                                {/* <div className="mt-6 whitespace-nowrap">Why Headway</div> */}
                                {/* <div className="mt-6 whitespace-nowrap">Events</div> */}
                                {/* <LinkTagwithClass name={`Events`} to={'/event_main'} className={`hover:text-orange-500 mt-6 whitespace-nowrap`} /> */}
                                <LinkTagwithClass name={`Contact Us`} to={'/get_in_touch'} className={`hover:text-orange-500 mt-6 whitespace-nowrap`} />
                                {/* <div className="mt-6">Careers</div> */}
                                {/* <div className="mt-6">Services</div> */}
                                {/* <LinkTagwithClass name={`Our Services`} to={'/our_services'} className={`hover:text-orange-500 mt-6 whitespace-nowrap`} /> */}
                            </div>
                            <div className="flex  flex-col self-stretch my-auto text-base basis-0 text-zinc-800 font-medium mx-auto">
                                {/* <div>Our Team</div> */}
                                <LinkTagwithClass name={`Privacy Policy`} to={'/privacy_policy'} className={`hover:text-orange-500`} />
                                {/* <div className="mt-6">Our Products</div> */}
                                {/* <LinkTagwithClass name={`Our Products`} to={'/plan_pricing'} className={`hover:text-orange-500 mt-6`} /> */}
                                {/* <LinkTag className={`mt-6 hover:text-orange-500`} name={`Privacy Policy`} to={'/privacy_policy'}/> */}
                                {/* <div className="mt-6">Payment Policy</div> */}
                                <LinkTagwithClass name={`Payment, R & C Policy`} to={'/refund_and_cancellation'} className={`hover:text-orange-500 mt-6 text-nowrap`} />
                                <LinkTag
                                    className={`mt-6 hover:text-orange-500  whitespace-nowrap`}
                                    name={`Terms & Conditions`}
                                    to={'/terms_and_conditions'} />
                                {/* <div className="mt-6 whitespace-nowrap">
                                        Terms &#38; Conditions
                                    </div> */}
                            </div>
                            <div className="flex flex-col self-stretch my-auto text-base basis-0 text-zinc-800  font-medium">
                            </div>
                            <div
                                className="flex flex-col items-start self-stretch max-md:max-w-full font-medium"
                            >
                                <div className="flex gap-5 items-center">
                                    <div className="flex justify-center items-center px-3 w-12 h-12 aspect-square bg-orange-50 rounded-[152px]">
                                        <img
                                            loading="lazy"
                                            src={Images.header_calling}
                                            alt=''
                                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/3668069021f98cb8d5e71235f6f6107e77e4d3463d0c1a46fceaa96219287843?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            className="w-full aspect-square"
                                        />
                                    </div>
                                    <div
                                    >
                                        <span>{data.mobile}</span>
                                        {/* <Phone className={` my-auto text-lg whitespace-nowrap text-zinc-800`} /> */}
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-4  items-center">
                                    <div className="flex justify-center items-center px-3 w-12 h-12 aspect-square bg-orange-50 rounded-[152px]">
                                        <img
                                            loading="lazy"
                                            src={Images.header_sms}
                                            alt="Images"
                                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/198d0ae146747df5dc9d8f1d30d600d866034cad3307cd87eaa6cef7c5207217?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            className="w-full aspect-square"
                                        />
                                    </div>
                                    <span>{data.email}</span>
                                    {/* <Email className={` my-auto text-lg whitespace-nowrap text-zinc-800`} /> */}
                                </div>

                                <div className="flex gap-5 mt-4  items-center">
                                    <div className="flex justify-center items-center px-3 w-12 h-12 aspect-square bg-orange-50 rounded-[152px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc6c7dfa9550b5cdc1f63de8aae94bc2f6c7b2369a0214f8e162d516120b56e?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            className="w-full aspect-square"
                                            alt=''
                                        />

                                    </div>
                                    <div className={`flex-auto text-lg text-zinc-800`}>
                                        <span>{data.address}</span>
                                        {/* <Address address_no={`305 A-B-C, Supermall, CG Road, Near Lal Bungalow
                                        Navrangpura, Ahmedabad - 380009`} /> */}
                                        {/* <Address address_no={`101-Shree Kashi Parekh Complex, First Floor, Behind Bhagavati Chambers,
                                             Near Swastik Cross Rd, C G Road, Navrangpura, Ahmedabad, Gujarat 380009`} /> */}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default Subfooterone