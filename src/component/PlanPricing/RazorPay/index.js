import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchWithFormData } from '../../../../apiGeneralFunction';

const Inquiryform = () => {



    return (
        <>
            
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <form >
                    <div className="flex relative flex-col grow p-12 w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-2xl font-bold text-zinc-800 max-md:max-w-full">
                            Your Inquiry, Our Expertise
                        </div>
                        <div className="mt-4 text-base text-zinc-500 max-md:max-w-full font-medium">
                            Your Questions, Our Solutions: Crafting Success Together
                        </div>
                        <div className="mt-6 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full font-medium">
                            Amount
                        </div>
                        <input
                            type="text"
                            name="name"
                           
                            placeholder='Enter your full name'
                            required
                            className="py-3 pr-16 pl-4 mt-1.5 mr-4 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                        />

                        <div className="mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full  font-medium">
                            Email
                        </div>
                        <input
                            type="email"
                            name="email"
                          value={email}
                            placeholder='Enter your email address'
                            required
                            className="py-3 pr-16 pl-4 mt-1.5 mr-4 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                        />

                        
                    </div>
                </form>

            </div>
        </>
    )
}

export default Inquiryform