import React, { useState } from 'react';
import * as Images from '../../../../../../../assets';
import StoreTrainingContent from './StoreTrainingContent';

const UserDontPlanContent = () => {

    const [activeTab, setActiveTab] = useState('Store Training');

    const handleTabClick = (tabName) => {

        setActiveTab(tabName);

    };

    const tabContent = {
        'Store Training': (
            <div>

                <StoreTrainingContent />
            </div>
        ),

        'Visit at your location': (
            <div>

                <h1>Visit at your location</h1>
            </div>
        ),
        'Store Review': (
            <div>

                <h1>Store Review</h1>
            </div>
        ),
        'Strategies & Graphics': (
            <div>

                <h1>Strategies & Graphics</h1>
            </div>
        ),
        'Marketing Strategy': (
            <div>

                <h1>Marketing Strategy</h1>
            </div>
        ),
        'Web Policy': (
            <div>

                <h1>Web Policy</h1>
            </div>
        ),
        'Website Policy': (
            <div>

                <h1>Website Policy</h1>
            </div>
        )

    };

    const ServicePlanCard = () => {
        const PlanFeature = ({ icon, children }) => (
            <div className="flex gap-3">

                <div className="flex justify-center items-center p-1.5 w-6 h-6 bg-white rounded-[100px]">
                    <i class="fa fa-check text-orange-500 text-xs" ></i>
                </div>
                <div className="my-auto text-base text-white">{children}</div>
            </div>
        );
        const planFeatures = [
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "Organization Plan +" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "+12 on store Trainings" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "4 visit of Mr. Paresh Rajpara at your location" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "Data Processing Support" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "+6 on store Reviews" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "Social media strategies and graphics" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "Social media marketing Strategy" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "Web Policy" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&", text: "Web-Site Policy" },
        ];

        return (
            <section className="flex flex-col items-start p-6 mt-6 bg-orange-500 rounded-3xl max-md:px-5 max-md:max-w-full">
                <h2 className="justify-center px-3 py-2 text-2xl font-medium text-white rounded bg-white bg-opacity-10 max-md:max-w-full">
                    Current Plan: Make My Business Developer Plan
                </h2>
                <div className="self-stretch mt-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:max-w-full">
                                <div className="flex flex-wrap gap-3 self-start mt-3">
                                    {planFeatures.map(({ icon, text }) => (
                                        <PlanFeature key={text} icon={icon}>
                                            {text}
                                        </PlanFeature>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b87370d16369de215b3e884991c7eb4a20efcae2c2997ef32d9e02b3fd8f4?apiKey=8e5983036f284a13866aae97819cdb73&"
                                alt="Images"
                                className="self-stretch my-auto w-full aspect-square max-md:mt-0"
                            />
                        </div>
                    </div>
                </div>
                <button className="justify-center px-4 py-2.5 mt-6 text-base font-medium text-white rounded-lg border border-white border-solid">
                    Add on Services
                </button>
            </section>
        )
    }



    const serviceData = [
        {
            name: 'CMD Visit',
            price: "₹ 20,000",
            description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 1
        },
        { name: 'Review Visit', price: "₹ 10,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 2 },
        { name: 'Store Training', price: "₹ 10,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 3 },
        { name: 'Online Training', price: "₹ 5,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 4 },
        { name: 'Data Processing', price: "₹ 90,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 5 },
        { name: 'Online meeting', price: "₹ 5,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 6 },
        { name: 'Theory & Practical', price: "₹ 25,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 7 },
        { name: 'Format Support', price: "₹ 25,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 8 },
        { name: 'SOP Support', price: "₹ 25,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 9 },
        { name: 'Workshop Revision', price: "₹ 5,000", description: "Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.", id: 10 }
    ];

    const ServiceCard = ({ price, description, name }) => (
        <div className="flex flex-col grow justify-start pe-4 pb-4 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:mt-6">
            <div className='flex flex-col gap-5  max-lg:gap-0'>
                <div className='terms_bg_clr w-fit px-5 py-2 text-orange-500 rounded-tl-2xl  rounded-br-2xl font-medium '>{name}</div>
                <div className="text-xl font-medium text-right text-zinc-800 -mt-10 max-lg:-mt-0  max-lg:mt-3">{price}</div>
            </div>
            <div className="mt-4 text-sm text-neutral-400 ps-4">{description}</div>
        </div>
    );

    const MyComponent = () => {
        return (
            <div className="flex flex-col justify-center self-stretch p-5 bg-white rounded-xl border border-gray-200 border-solid max-w-[924px]">
                <div className="self-start text-2xl font-medium text-zinc-800 max-md:max-w-full">Additional as on Demand Services</div>
                <div className="self-start mt-2 text-sm text-neutral-400 max-md:max-w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <section className="mt-8 max-md:max-w-full">
                    {serviceData.slice(0, 3).map(service => (
                        <ServiceCard key={service.id} price={service.price} description={service.description} />
                    ))}
                </section>
                <section className="mt-6 max-md:max-w-full">
                    {serviceData.slice(3, 6).map(service => (
                        <ServiceCard key={service.id} price={service.price} description={service.description} />
                    ))}
                </section>
                <section className="mt-6 max-md:max-w-full">
                    {serviceData.slice(6, 9).map(service => (
                        <ServiceCard key={service.id} price={service.price} description={service.description} />
                    ))}
                </section>
                <footer className="flex flex-col justify-end px-4 py-4 mt-6 max-w-full bg-white rounded-2xl border border-gray-200 border-solid w-[279px]">
                    <div className="text-xl font-medium text-right text-zinc-800">₹5,000</div>
                    <div className="mt-4 text-sm text-neutral-400">Visit of Mr. Paresh Rajpara at your location for effective business solutions & reviews.</div>
                </footer>
            </div>
        );
    };


    const MeetingRow = ({ meeting, isEvenRow }) => {
        return (
            <div
                // className='border border-red-500 flex items-center justify-center grid grid-cols-6'
                className={` flex items-center py-4 pe-4 justify-center grid grid-cols-6 text-sm ${isEvenRow ? "terms_bg_clr" : ""
                    }`}
            >
                <div
                    // className={`justify-center px-9 py-4  text-center ${isEvenRow ? "terms_bg_clr" : "bg-white"
                    //     } max-md:px-5`}
                    className={`justify-center text-center text-sm ${isEvenRow ? "terms_bg_clr" : ""
                        } max-md:px-5`}
                >


                    {meeting.meetingNumber}


                </div>
                <div
                    // className={`flex gap-3 px-4 py-3.5 text-center ${isEvenRow ? "terms_bg_clr" : "bg-white"
                    //     }`}
                    className={`flex gap-1 text-center  ${isEvenRow ? "terms_bg_clr" : ""
                        }`}
                >
                    <img
                        src={meeting.trainerImage}
                        alt={`${meeting.trainerName} profile picture`}
                        className="shrink-0 w-11 aspect-square"

                    />
                    <div className="my-auto text-zinc-800 text-sm">{meeting.trainerName}</div>
                </div>
                <div
                    // className={`justify-center px-6 py-4 text-center blog_intro ${isEvenRow ? "terms_bg_clr" : "bg-white"
                    //     } max-md:px-5`}
                    className={`justify-center text-center blog_intro text-sm ${isEvenRow ? "terms_bg_clr" : ""
                        } max-md:px-5`}
                >
                    {meeting.date}
                </div>
                <div
                    // className={`justify-center px-6 py-4 text-center blog_intro ${isEvenRow ? "terms_bg_clr" : "bg-white"
                    //     } max-md:px-5`}
                    className={`justify-center text-center blog_intro text-sm ${isEvenRow ? "terms_bg_clr" : ""
                        } max-md:px-5`}
                >
                    {meeting.time}
                </div>
                <div
                    // className={`flex flex-col justify-center px-5 py-4  ${isEvenRow ? "terms_bg_clr" : "bg-white"
                    //     }`}
                    className={`flex flex-col justify-center mx-auto text-sm ${isEvenRow ? "terms_bg_clr" : ""
                        }`}
                >
                    <div
                        className="justify-center px-2 py-0.5  rounded-2xl text-sm bg-red-500 bg-opacity-10 w-fit text-red-500">
                        {meeting.status}
                    </div>
                </div>
                <div
                    // className={`justify-center px-6 py-4 text-center blog_intro ${isEvenRow ? "terms_bg_clr" : "bg-white"
                    //     } max-md:px-5`}
                    className={`justify-center text-center blog_intro ${isEvenRow ? "terms_bg_clr" : ""
                        } max-md:px-5`}
                >
                    {meeting.remarks}
                </div>
            </div>
        );
    }

    const UserPlanData = () => {
        const meetings = [
            {
                meetingNumber: "1st",
                // imgUrl: `${Images.about_journey_one}`,
                trainerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3275381acd8f02a80f4ab20159bdbe4ccc04d74c6850ff6a3fcbbafbe4d63e97?apiKey=8e5983036f284a13866aae97819cdb73&",
                trainerName: "Mr. Paresh Rajpara",
                date: "24 Jan, 2024",
                time: "01:00 PM TO 02:00 PM",
                status: "Pending",
                remarks: "Lorem Ipsum is simply dummy text.",
            },
            {
                meetingNumber: "2nd",
                trainerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3275381acd8f02a80f4ab20159bdbe4ccc04d74c6850ff6a3fcbbafbe4d63e97?apiKey=8e5983036f284a13866aae97819cdb73&",
                trainerName: "Mr. Paresh Rajpara",
                date: "24 Jan, 2024",
                time: "01:00 PM TO 02:00 PM",
                status: "Pending",
                remarks: "Lorem Ipsum is simply dummy text.",
            },
            {
                meetingNumber: "3rd",
                trainerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3275381acd8f02a80f4ab20159bdbe4ccc04d74c6850ff6a3fcbbafbe4d63e97?apiKey=8e5983036f284a13866aae97819cdb73&",
                trainerName: "Mr. Paresh Rajpara",
                date: "24 Jan, 2024",
                time: "01:00 PM TO 02:00 PM",
                status: "Pending",
                remarks: "Lorem Ipsum is simply dummy text.",
            },
            {
                meetingNumber: "4th",
                trainerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3275381acd8f02a80f4ab20159bdbe4ccc04d74c6850ff6a3fcbbafbe4d63e97?apiKey=8e5983036f284a13866aae97819cdb73&",
                trainerName: "Mr. Paresh Rajpara",
                date: "24 Jan, 2024",
                time: "01:00 PM TO 02:00 PM",
                status: "Pending",
                remarks: "Lorem Ipsum is simply dummy text.",
            },
        ];

        return (
            <div className="flex flex-col justify-center self-stretch text-sm bg-white rounded-lg border border-gray-200 border-solid max-w-[924px]">
                {/* <div className="flex gap-0 px-5 w-full text-center border-b border-gray-200 border-solid text-neutral-400 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col p-4 font-medium text-orange-500 bg-stone-50">
                        <div>Store Training</div>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b05ea8b50e890587ed98d1ac50c594dd1ec08f9b6ad7509d70e7f6b2286a8e5?apiKey=8e5983036f284a13866aae97819cdb73&"
                            alt=""
                            className="self-center mt-2.5 aspect-[16.67] fill-orange-500 w-[54px]"
                        />
                    </div>
                    <div className="justify-center p-4 border-r border-gray-200 border-solid">
                        Visit at your location
                    </div>
                    <div className="justify-center p-4 border-r border-gray-200 border-solid">
                        Store Review
                    </div>
                    <div className="justify-center p-4 border-r border-gray-200 border-solid">
                        Strategies & Graphics
                    </div>
                    <div className="justify-center p-4 border-r border-gray-200 border-solid">
                        Marketing Strategy
                    </div>
                    <div className="justify-center p-4 border-r border-gray-200 border-solid">
                        Web Policy
                    </div>
                    <div className="flex-1 justify-center items-start p-4 border-r border-gray-200 border-solid max-md:pr-5">
                        Website Policy
                    </div>
                </div> */}
                <div
                    //  className="flex gap-0 px-5 w-full text-center border-b border-gray-200 border-solid text-neutral-400 max-md:flex-wrap max-md:max-w-full"
                    className="flex gap-0 w-full items-center text-center border-b border-gray-200 border-solid text-neutral-400 max-md:flex-wrap max-md:max-w-full"
                >
                    <div
                        // className="flex flex-col p-4 font-medium text-orange-500 terms_bg_clr "
                        className={`p-4 cursor-pointer ${activeTab === 'Store Training' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                        onClick={() => handleTabClick('Store Training')} 
                    >
                        Store Training

                    </div>
                    <div 
                    // className="justify-center p-4 border-r border-gray-200 border-solid"
                    className={`p-4 cursor-pointer ${activeTab === 'Visit at your location' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                        onClick={() => handleTabClick('Visit at your location')} 
                    >
                        Visit at your location
                    </div>
                    <div 
                    // className="justify-center p-4 border-r border-gray-200 border-solid"
                    className={`p-4 cursor-pointer ${activeTab === 'Store Review' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                    onClick={() => handleTabClick('Store Review')}
                    >
                        Store Review
                    </div>
                    <div 
                    // className="justify-center p-4 border-r border-gray-200 border-solid"
                    className={`p-4 cursor-pointer ${activeTab === 'Strategies & Graphics' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                    onClick={() => handleTabClick('Strategies & Graphics')}
                    >
                        Strategies & Graphics
                    </div>
                    <div 
                    // className="justify-center p-4 border-r border-gray-200 border-solid"
                    className={`p-4 cursor-pointer ${activeTab === 'Marketing Strategy' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                    onClick={() => handleTabClick('Marketing Strategy')}
                    >
                        Marketing Strategy
                    </div>
                    <div 
                    // className="justify-center p-4 border-r border-gray-200 border-solid"
                    className={`p-4 cursor-pointer ${activeTab === 'Web Policy' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                    onClick={() => handleTabClick('Web Policy')}
                    >
                        Web Policy
                    </div>
                    <div 
                    // className="flex-1 justify-center items-start p-4 max-md:pr-5"
                    className={`p-4 cursor-pointer ${activeTab === 'Website Policy' ? "font-medium text-orange-500 terms_bg_clr" : "border-r border-gray-200 border-solid"}`}
                    onClick={() => handleTabClick('Website Policy')}
                    >
                        Website Policy
                    </div>
                </div>
                <div className="flex flex-col items-start px-6 py-8 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
                    {tabContent[activeTab]}
                </div>
            </div>
        );
    }


    return (
        <main className="flex flex-col justify-center rounded-xl max-w-full w-[1296px] max-md:pt-6">
            <h1 className="w-full text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">
                Settings
            </h1>
            <ServicePlanCard />

            <div className="flex flex-col justify-center self-stretch p-5 bg-white rounded-xl border border-gray-200 border-solid mt-8">
                <div className="self-start text-2xl font-medium text-zinc-800 max-md:max-w-full">Additional as on Demand Services</div>
                <div className="self-start mt-2 text-sm text-neutral-400 max-md:max-w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

                <UserPlanData />

            </div>
        </main>
    )
}

export default UserDontPlanContent