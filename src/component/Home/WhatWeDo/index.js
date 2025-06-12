import * as React from "react";
import { Link } from "react-router-dom";
import * as Images from '../../../assets';

const WhatWeDo = () => {
    return (
        <div className="flex justify-center items-center px-16 py-20 terms_bg_clr max-md:px-5 max-sm:py-0">
            <div className="max-w-full w-[1296px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                        <div className="text-start flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl  max-md:max-w-full max-md:text-4xl">
                                <span className="text-zinc-800 leading-[58px]">Who</span>{" "}
                                <span className="font-bold text-orange-500 leading-[58px]">
                                    We are {" "}
                                </span>
                                <span className="text-zinc-800 leading-[58px]">& What</span>{" "}
                                <span className="font-bold text-orange-500 leading-[58px]">
                                    We Do?
                                </span>
                            </div>
                            <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full">
                                Headway Business Solutions LLP  with the statement as Solution@100% goes beyond merely
                                &quot;coaching&quot; and &quot;consulting.&quot; We further ensure our commitment towards fostering long-term relationships with our clients & act as their trusted advisors and partners to sail along with them in their journey towards achieving their unique jewellery business aspirations.
                            </div>
                            <Link to={'/meet_our_team'}>
                                <div className="justify-center self-start px-4 max-sm:w-32 w-fit py-2.5 mt-6 text-base text-white bg-orange-500 rounded-lg max-md:px-5 cursor-pointer max-sm:text-xs">
                                    Meet Our Team
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src={Images.home_what_we_do}
                            // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeed9d863966d226ce4166a8aef9a49526f59c87581b84cc9dd9502ef40e5925?apiKey=8e5983036f284a13866aae97819cdb73&"
                            className="grow w-full shadow-2xl aspect-[1.64] max-md:mt-10 max-md:max-w-full rounded-2xl shadow-orange-100"
                            alt="Images"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo


