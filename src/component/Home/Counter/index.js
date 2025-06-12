import React from 'react';
import * as Images from '../../../assets';

const Counter = ({data}) => {

    const counterData = [
        {
            id: 1,
            counter_no: data?.happy_client + "+",
            title: 'Happy Clients',
            img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cbfd0d47d27059e6bd3cc91bf2293fa5db6f7acc09e1c8ee5c6b3ed40d41c68e?apiKey=8e5983036f284a13866aae97819cdb73&'
        },
        {
            id: 2,
            // counter_no: '15',
            counter_no: data?.years_of_experience + "+",
            title: 'Years of experience',
            img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eca605743019680e4669bf62d6b9cacd1f45b78468858dad5a80d1e40cce469d?apiKey=8e5983036f284a13866aae97819cdb73&'
        },
        {
            id: 3,
            counter_no: data?.our_location,
            title: 'Our Location',
            img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/172188ebf71191851dadf33e403565458ed98365bd032331cb9065ecad25c089?apiKey=8e5983036f284a13866aae97819cdb73&'
        },
        {
            id: 4,
            counter_no: data?.awards + "+",
            title: 'Awards',
            img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/777a4321b00be339801356d87286163211cf570b577e662cbf977970db480cfa?apiKey=8e5983036f284a13866aae97819cdb73&'
        }
    ]
    return (
        <section>
            <div className="flex overflow-hidden relative flex-col items-center px-16 pt-12 pb-6 w-full fill-stone-50 min-h-[304px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3ff303f32b720d222d4d36823394558c005d5f681cbf2f17af6dd2e3967450?apiKey=8e5983036f284a13866aae97819cdb73&"
        // src={Images.about_us_vector}
          className="object-cover absolute inset-0 size-full"
          alt=''
        />
            <div className="relative mt-6 max-w-full w-[1296px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-2 grid xl:rid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    {counterData.map((item, index) => {
                        return (
                            <div className="flex flex-col max-md:ml-0 max-md:w-full " key={index}>
                                <div className="flex relative grow justify-center items-center px-16 max-md:px-5 ">
                                    <div className="flex flex-col max-w-full  items-center">
                                        <div className=" flex justify-center  w-[100px] items-center p-6 bg-orange-500 rounded-full max-md:px-5 hover:shadow-xl">
                                            <img
                                                loading="lazy"
                                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfd0d47d27059e6bd3cc91bf2293fa5db6f7acc09e1c8ee5c6b3ed40d41c68e?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="aspect-square"
                                                src={item.img}
                                                alt="Images"
                                            />
                                        </div>
                                        <div className="mt-6 text-4xl text-center text-zinc-800 font-semibold">
                                           {item.counter_no}
                                        </div>
                                        <div className="mt-3 text-lg text-center whitespace-nowrap text-zinc-800 font-medium">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Counter