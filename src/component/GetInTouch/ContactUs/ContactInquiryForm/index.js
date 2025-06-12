import React from 'react'

const ContactInquiryform = () => {
    return (
        <>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow p-12 w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl font-bold text-zinc-800 max-md:max-w-full">
                        Your Inquiry, Our Expertise
                    </div>
                    <div className="mt-4 text-base text-zinc-500 max-md:max-w-full font-medium">
                        Your questions; our solutions! Let&#39;s craft your success together.
                    </div>
                    <div className="mt-6 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full font-medium">
                        Name
                    </div>
                    <div className="justify-center items-start py-5 pr-16 pl-4 mt-1.5 mr-4 text-base whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] text-neutral-400 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
                        Enter your full name
                    </div>
                    <div className="mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full  font-medium">
                        Email
                    </div>
                    <div className="justify-center items-start py-5 pr-16 pl-4 mt-1.5 mr-4 text-base whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] text-neutral-400 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
                        Enter your email address
                    </div>
                    <div className="flex gap-4 justify-between mt-4 mr-4 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex flex-col flex-1">
                            <div className="text-sm text-zinc-800  font-medium">Phone</div>
                            <div className="justify-center items-start py-5 pr-16 pl-4 mt-1.5 text-base bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] text-neutral-400 max-md:pr-5">
                                +91
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="text-sm text-zinc-800  font-medium">City</div>
                            <div className="justify-center items-start py-5 pr-16 pl-4 mt-1.5 text-base bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] text-neutral-400 max-md:pr-5">
                                Enter your location
                            </div>
                        </div>
                    </div>
                    <div className=" font-medium mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
                        Message
                    </div>
                    <div className="items-start pt-5 pr-16 pb-20 pl-4 mt-1.5 mr-4 text-base whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] text-neutral-400 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
                        Write your message..
                    </div>
                    <div className="flex gap-3 justify-center self-start px-8 py-2.5 mt-6 text-base font-medium text-white whitespace-nowrap bg-orange-500 rounded-lg max-md:px-5">
                        <div>Submit</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                            className="my-auto w-4 aspect-square"
                            alt="Images"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInquiryform