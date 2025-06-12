import React from 'react'
import GetinTouch from './GetInTouch'
import Inquiryform from './Inquiryform';
import * as Images from '../../../assets';

const Contact_us = ({data}) => {
    return (
        <>
            <div
                className="flex flex-col justify-center w-full  max-lg:max-w-full overflow-x-hidden"
            > 
                <div 
                // className=" flex relative flex-col justify-center items-center py-12 w-full min-h-[849px] max-lg:px-5 max-lg:max-w-full"
                className="flex relative flex-col justify-center items-center py-2 w-full max-lg:px-5 max-lg:max-w-full"
                >
                    <img
                    loading="lazy"
                    src={Images.user_auth_vector}
                    className="object-cover absolute w-full size-full"
                    alt=''
                />
                   
                    <div className="z-10 my-12 max-w-full w-[1296px] max-lg:my-10 ">
                        <div className="flex items-start gap-5 justify-between max-lg:flex-col max-lg:gap-0 max-lg:px-5 lg:px-8 md:px-8 max-sm:px-0">
                            <GetinTouch data={data}/>
                            <Inquiryform />
                        </div>
                    </div>
                </div>
            </div>  
      
          
        </>
    )
}

export default Contact_us