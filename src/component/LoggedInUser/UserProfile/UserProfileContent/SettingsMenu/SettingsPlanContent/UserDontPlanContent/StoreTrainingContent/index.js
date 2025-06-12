import React from 'react'


const StoreTrainingContent = () => {

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
    
    return (
        <div 
        // className="flex flex-col items-start px-6 py-8 w-full rounded-3xl max-md:px-5 max-md:max-w-full"
        >
            <div className="text-lg font-medium text-center text-zinc-800 max-md:max-w-full">
                Store Training
            </div>
            <div className="mt-2 text-neutral-400 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="flex flex-col justify-center self-stretch mt-4 text-zinc-600 max-md:max-w-full">
                <div className="flex gap-0 max-md:flex-wrap ">
                    <div
                        className="flex flex-col text-orange-500 rounded-xl border border-gray-200 border-solid"

                    >
                        <div className='flex grid grid-cols-6 text-center '>
                            <div
                                // className="justify-center items-center px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5"
                                className=" text-xs font-medium border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5 py-3"
                            >
                                Meetings
                            </div>
                            <div
                                // className="justify-center items-center px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5"
                                className="text-xs font-medium  border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5 py-3"
                            >
                                Trainer Name
                            </div>
                            <div
                                // className="justify-center items-center px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5"
                                className=" text-xs font-medium border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5 py-3"
                            >
                                Date
                            </div>
                            <div
                                // className="justify-center items-center px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5"
                                className="text-xs font-medium border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5 py-3"
                            >
                                Time
                            </div>
                            <div
                                // className="justify-center items-center px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5"
                                className=" text-xs font-medium border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5 py-3"
                            >
                                Status
                            </div>
                            <div
                                // className="justify-center items-center px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5"
                                className="text-xs font-medium border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5 py-3"
                            >
                                Remarks
                            </div>
                        </div>
                        {/* <div className="justify-center items-start px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5">
                    Meetings
                </div>
                <div className="justify-center items-start px-6 py-3 text-xs font-medium bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:pl-5">
                    Trainer Name
                </div> */}
                        <div className='flex  flex-col '>
                            {meetings.map((meeting, index) => (
                                <MeetingRow meeting={meeting} isEvenRow={index % 2 === 0} />
                            ))}
                        </div>
                        {/* {meetings.map((meeting, index) => (
                    <React.Fragment key={index}>
                        <MeetingRow meeting={meeting} isEvenRow={index % 2 === 0} />
                        {index < meetings.length - 1 && (
                            <div className="self-center mt-7">
                                {meetings[index + 1].meetingNumber}
                            </div>
                        )}
                        {index < meetings.length - 1 && (
                            <div className="self-center mt-7">
                                {meetings[index].meetingNumber}
                            </div>
                        )}
                      
                    </React.Fragment>
                ))} */}
                        {/* {meetings.map((meeting, index) => (

                    <div
                        className={`justify-center px-6 py-4 ${index % 2 === 0 ? "terms_bg_clr" : "bg-white"
                            } max-md:px-5`}
                    >
                        {meeting.meetingNumber}
                    </div>

                ))} */}
                    </div>
                    {/* <div className="flex flex-col">
                <div className="justify-center items-start px-6 py-3 text-xs font-medium whitespace-nowrap bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:px-5">
                    Trainer Name
                </div>
                {meetings.map((meeting, index) => (
                    <div
                        className={`justify-center px-6 py-4 flex items-center ${index % 2 === 0 ? "terms_bg_clr" : "bg-white"
                            } max-md:px-5`}
                    >
                        <img
                            src={meeting.trainerImage}
                            alt=''
                            className='w-8'
                        />
                        <div>{meeting.trainerName}</div>

                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="justify-center items-start px-6 py-3 text-xs font-medium whitespace-nowrap bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:px-5">
                    Date
                </div>
                
                {meetings.map((meeting, index) => (

                    <div
                        className={`justify-center px-6 py-4 ${index % 2 === 0 ? "terms_bg_clr" : "bg-white"
                            } max-md:px-5`}
                    >
                        {meeting.date}
                    </div>


                ))}
            </div>
            <div className="flex flex-col">
                <div className="justify-center items-start px-6 py-3 text-xs font-medium whitespace-nowrap bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:px-5">
                    Time
                </div>
             
                {meetings.map((meeting, index) => (

                    <div
                        className={`justify-center px-6 py-4 ${index % 2 === 0 ? "terms_bg_clr" : "bg-white"
                            } max-md:px-5`}
                    >
                        {meeting.time}
                    </div>

                ))}
            </div>
            <div className="flex flex-col text-xs font-medium text-red-500 whitespace-nowrap">
                <div className="justify-center px-6 py-3 bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:px-5">
                    Status
                </div>
              
                {meetings.map((meeting, index) => (

                    <div
                        className={`flex flex-col justify-center px-5 py-4 text-center ${index % 2 === 0 ? "terms_bg_clr" : "bg-white"
                            }`}
                    >
                        <div className="justify-center px-2 py-0.5 rounded-2xl bg-red-500 bg-opacity-10">
                            {meeting.status}
                        </div>
                    </div>


                ))}
            </div>
            <div className="flex flex-col flex-1">
                <div className="justify-center items-start px-6 py-3 text-xs font-medium whitespace-nowrap bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:px-5">
                    Remarks
                </div>
                
                {meetings.map((meeting, index) => (
                    <div
                        className={`justify-center px-6 py-4 ${index % 2 === 0 ? "terms_bg_clr" : "bg-white"
                            } max-md:px-5`}
                        style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}
                    >
                        {meeting.remarks}
                    </div>
                ))}
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default StoreTrainingContent