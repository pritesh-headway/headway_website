import React from 'react';
import * as Images from '../../../assets';

const RCContent = () => {
    const officeAddress = () => {
        return "101-Shree Kashi Parekh Complex, First Floor, Behind Bhagavati Chambers, Near Swastik Cross Rd, C G Road, Navrangpura, Ahmedabad, Gujarat 380009.";
    };
    return (
        <div 
        // className="relative flex justify-center items-center bg-white max-lg:px-5" 
        className=' flex justify-center items-center px-16 py-12 bg-white max-md:px-5'
        >
            {/* <div 
            // className="absolute top-[20%] bottom-0"
            className='absolute h-auto'
            > */}
            {/* <img
                // src={Images.user_auth_vector}
                src={Images.user_auth_bg}
                alt="Images"
                loading="lazy"
                className='absolute max-lg:object-cover max-lg:size-full bottom-0'
                // className="aspect-[10.5] absolute h-auto"
                //className=" h-auto"
                // style={{ aspectRatio: '10.5 / 1' }}
            /> */}
            {/* </div> */}
            <div className="text-start mt-6 max-w-full w-[1296px]  z-10  py-12 max-lg:px-0">
                <div className="flex flex-col self-stretch">
                    <div className="my-6 w-full text-lg text-zinc-600 max-lg:max-w-full">
                    Refund & Cancellation Policy Since the website offers & order non-tangible, irrevocable service, 
                    Material and Goods we do not provide cancellation or refunds after the purchased, which you acknowledge prior to 
                    purchasing any service, material and product on the website. <br/> <br/>
                    Please make sure that you've carefully read product description before making a purchase. <br/> <br/> 
                    Contacting us if you would like to contact us concerning any matter relating to this Refund policy, you may do so via the contact us, send an email to
                       {""} <span className='text-orange-500'>info@headway.org.in</span> {""}
                       or write a letter to {officeAddress()}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RCContent