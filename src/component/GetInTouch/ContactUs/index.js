import React from 'react'
import ContactGetInTouch from './ContactGetInTouch'
import ContactInquiryform from './ContactInquiryForm';
import * as Images from '../../../assets';

const ContactUs = () => {
    return (
        <>
            {/* <div
                className="flex flex-col justify-center w-full bg-white max-md:max-w-full pt-12"
            > */}
                <div className=" flex relative flex-col justify-center items-center py-12 w-full max-md:px-5 max-md:max-w-full ">
                    <img
                        loading="lazy"
                        src={Images.user_auth_vector}
                        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20f2eed790fe8f2cc0fd397a1eb3442d97c0fb2c732bf37f437505acbea5fdc?apiKey=8e5983036f284a13866aae97819cdb73&"
                        // className="object-cover absolute inset-0 size-full"
                        // className="object-cover absolute size-full "
                        className='absolute bottom-0'
                        alt="Images"
                    />
                    {/* <div className="absolute my-12 max-w-full w-[1296px] max-md:my-10 "> */}
                    <div className="z-10 my-12 max-w-full w-[1296px] max-md:my-10 ">
                        <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0 max-md:">
                            <ContactGetInTouch/>
                           <ContactInquiryform/>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default ContactUs