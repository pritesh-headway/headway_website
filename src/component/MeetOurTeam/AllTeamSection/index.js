import React, { useEffect, useState } from "react";
import * as Images from '../../../assets';
import { fetchWithFormData } from "../../../apiGeneralFunction";

const AllTeamSection = () => {

    const [data, setData] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {

        // const tokenValue = localStorage.getItem('login api response token');
        // const storedToken = JSON.parse(tokenValue);
        // console.log("plan pricing fgascdgasfghdfshj", storedToken);
        // if (storedToken) {
        //     setToken(storedToken);
        // }
        // console.log("token value", token)

                const formData = new FormData();

        fetchWithFormData('meet_our_team', formData)
            // .then(data => setData(data[0]?.data))
            .then(data => {

                if (data?.status === true) {
                    setData(data?.data);

                }
                else {
                    //   console.error('Status is not true:', data?.status);
                    setData(null);
                }
            })
            .catch(
            // error => console.error('Error fetching data:', error)
        );
    }, []);

    // console.log("meet our team list", data);

    // const teamMembers = [
    //     {
    //         name: "Paresh Rajpara",
    //         role: "Chief Managing Director",
    //         image: `${Images.paresh_sir}`,
    //     },
    //     {
    //         name: "Pooja Rajpara",
    //         role: "Chief Executive Officer",
    //         image: `${Images.pooja_mam}`,
    //     },
    //     {
    //         name: "Prerna Dival",
    //         // role: "Personal Assistant",
    //         role: "CMD Coordinator",
    //         image: `${Images.prerna_mam}`,
    //     },
    //     {
    //         name: "Zarna Patel",
    //         role: "Executive Assistant",
    //         image: `${Images.zarna_mam}`,
    //     },
    //     {
    //         name: "Dipali Sharma",
    //         role: "Business Trainer",
    //         image: `${Images.dipali_mam}`,
    //     },
    //     {
    //         name: "Yagnesh Bhrmbhatt",
    //         role: "Business Trainer",
    //         image: `${Images.yagnesh_sir}`,
    //     },
    //     // {
    //     //     name: "Chhaya Parekh",
    //     //     role: "Business Trainer",
    //     //     image: `${Images.yagnesh_sir}`,
    //     // },
    //     {
    //         name: "Sheetal Modi",
    //         role: "Business Trainer",
    //         image: `${Images.sheetal_mam}`,
    //     },
    //     {
    //         name: "Ami Shah",
    //         role: "Office Assistant",
    //         image: `${Images.ami_mam}`,
    //     },
    //     {
    //         name: "Prashant Mehta",
    //         role: "Stock Manager",
    //         image: `${Images.prashant_sir}`,
    //     },
    //     {
    //         name: "Prashant Mehta",
    //         role: "Stock Manager",
    //         image: `${Images.aashim_sir}`,
    //     },
    //     // {
    //     //     name: "Aakash Yadav",
    //     //     role: "Data Analyst",
    //     //     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7db7e67900d4616f5c504df54dcfa52ed25ef55daceb2f4ae1ee9d9928ce9434?apiKey=8e5983036f284a13866aae97819cdb73&",
    //     // },
    //     {
    //         name: "Namrata Shukla",
    //         role: "Social Media Manager",
    //         image: `${Images.namrata_mam}`,
    //     },
    //     {
    //         name: "Chirag Limbachiya",
    //         role: "Project Manager",
    //         image: `${Images.chirag_sir}`,
    //     },
    //     {
    //         name: "Sandip Patel",
    //         role: "Sr. iOS Developer",
    //         image: `${Images.spiderman}`,
    //     },
    //     {
    //         name: "Jatin Satija",
    //         role: "Sr. Android Developer",
    //         image: `${Images.rocket_rakoon}`,
    //     },
    //     {
    //         name: "Hardik Chudasama",
    //         role: "Sr. UI/UX Designer",
    //         image: `${Images.groot}`,
    //     },
    //     {
    //         name: "Rakesh Singh",
    //         role: "Sr. Laravel Developer",
    //         image: `${Images.superman}`,
    //     },
    //     {
    //         name: "Chirag Bhatt",
    //         role: "Sr. Quality Analyst",
    //         image: `${Images.shaktiman}`,
    //     },

    //     {
    //         name: "Kalpana Rajput",
    //         role: "Sr. ReactJS Developer",
    //         image: `${Images.wakanda}`,
    //     },
    //     // {
    //     //     name: "Palak Zaveri",
    //     //     role: "Graphics Designer",
    //     //     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6025b18b927a3eddb458491fd58a700f89d910544ea7368b51b8ce78b699445f?apiKey=8e5983036f284a13866aae97819cdb73&",
    //     // },
    //     {
    //         name: "Reena Gor",
    //         role: "Receptionist",
    //         image: `${Images.reena_mam}`,
    //     },
    //     {
    //         name: "Kiran Chawada",
    //         role: "Office Boy",
    //         image: `${Images.kiran_sir}`,
    //     },
    // ];

    const TeamMember = ({ member }) => {
        return (
            <div
                // className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                className="flex flex-col max-md:ml-0 max-md:w-full "
            >
                <div className="flex flex-col grow px-5 py-7 w-full text-center  bg-white rounded-2xl max-md:mt-8 ">
                    <img loading="lazy" src={member?.image} alt={`${member?.name} profile picture`} className="w-full aspect-square" />
                    <h3 className="mt-7 text-xl font-medium text-zinc-800">
                        {member?.name}
                    </h3>
                    <p className="mt-2 text-base text-neutral-400">
                        {/* {member.role} */} {member?.position ? member?.position : member?.role}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <section
            className="relative flex flex-col py-20 justify-center items-center max-sm:py-0"
        // className="relative flex flex-col justify-center items-center self-stretch pb-20 orange_vector_clr"
        >

            <div
                className="  "
            // className="top-0 flex overflow-hidden absolute flex-col justify-center items-center self-stretch fill-white  max-md:max-w-full"
            >
                {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fc19cd42fe36d129774d43d9fb33fd89a3e5e457920cd051b592ebfbae47841?apiKey=8e5983036f284a13866aae97819cdb73&"
                    alt=""
                    className="object-cover absolute inset-0 size-full all_team_section"
                /> */}
                {/* <img
                    alt=""
                    loading="lazy"
                    src={Images.about_us_vector}
                    className=""
                /> */}
                <img
                    alt="Images"
                    loading="lazy"
                    src={Images.all_team_section}

                    className="object-cover inset-0 size-full absolute all_team_section"
                />

            </div>
            <div className=" z-10  px-16 pb-16 max-w-full w-[1296px] max-md:px-5">

                <div className="flex relative gap-5 justify-between mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-start flex-1 grow my-auto text-5xl font-medium max-md:text-4xl ">
                        <span className="leading-[58px] text-zinc-800">Meet Our</span>{" "}
                        <span className="font-bold text-orange-500 leading-[58px]"> Team </span>
                    </h2>
                    <div className="flex grow-0 flex-col max-md:max-w-full  md:w-[30%] w-full">
                        <p className="text-lg text-zinc-600 max-md:max-w-full">
                            Say hello to team Headway— where our leader has a vision brighter than a diamond, backed by a
                            squad of experts ready to make your business shine brighter!
                        </p>
                        {/* <button className="justify-center self-start px-8 py-2.5 mt-5 text-base font-medium text-white whitespace-nowrap bg-orange-500 rounded-lg max-md:px-5">
                            Join Our Team
                        </button> */}
                    </div>
                </div>
                <div className=" mt-20 max-md:mt-10 max-w-full w-[1296px]">
                    <div className="flex gap-8 max-md:flex-col max-md:gap-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-3 sm:grid-cols-2">
                        {/* {teamMembers.map((member, index) => (
                            <TeamMember key={index} member={member} />
                        ))} */}
                        {/* {data.map((member, index) => (
                            <TeamMember key={index} member={member} />
                        ))} */}
                        {data &&
                            data.map((member, index) => (
                                <TeamMember key={index} member={member} />
                            ))
                        }
                        {/* {data && data?.length > 0 ? (
                            data.map((member, index) => (
                                <TeamMember key={index} member={member} />
                            ))
                        ) : (
                            teamMembers.map((member, index) => (
                                <TeamMember key={index} member={member} />
                            ))
                        )} */}
                    </div>
                </div>
                {/* <div className="px-5 mt-6 max-w-full w-[1296px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {teamMembers.slice(4, 8).map((member, index) => (
                            <TeamMember key={index} member={member} />
                        ))}
                    </div>
                </div>
                <div className="px-5 mt-6 max-w-full w-[1296px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {teamMembers.slice(8, 12).map((member, index) => (
                            <TeamMember key={index} member={member} />
                        ))}
                    </div>
                </div>
                <div className="px-5 mt-6 max-w-full w-[1296px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {teamMembers.slice(12).map((member, index) => (
                            <TeamMember key={index} member={member} />
                        ))}
                    </div>
                </div> */}
            </div>
        </section>

    );
}

export default AllTeamSection
