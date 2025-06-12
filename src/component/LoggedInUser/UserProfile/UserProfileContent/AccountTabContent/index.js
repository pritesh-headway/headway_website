import React, { useEffect, useState } from 'react';
import * as Images from '../../../../../assets';
import { fetchDataWithToken, fetchWithFormDataToken } from '../../../../../apiGeneralFunction';
import { useLocation, useNavigate } from 'react-router-dom';
import SettingsProfileContent from "../SettingsMenu/SettingsProfileContent/index";

const AccountTabContent = ({ userData, setUserData, planData, serviceData }) => {

    const [isEditMode, setIsEditMode] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const phone = localStorage.getItem('register api response');
    const storedPhone = JSON.parse(phone);


    const InfoItem = ({ label, value }) => {
        const notValue = !value ? "h-12" : "";
        const capitalizeClass = label === "Full Name" ? "capitalize" : "";
        return (
            <div className="flex flex-col justify-center w-full " style={{ overflowWrap: 'break-word' }}>
                <div className="text-sm text-neutral-400 text-start">{label}</div>
                <div
                    className={`text-start mt-2 text-base font-medium text-zinc-800 rounded-lg  py-2.5 border border-gray-300 px-3.5 ${notValue} ${capitalizeClass}`}
                >
                    {value}
                </div>
            </div>
        )

    };



    const personalInfo = [
        { label: "Full Name", value: userData?.name || "" },
        { label: "Email Address", value: userData?.email || "" },
        { label: "Phone Number", value: userData?.phone_number || "" },
        { label: "Alternate Phone Number", value: userData?.alternate_phone || "" },
    ];

    const addressInfo = [
        { label: "City", value: userData?.city || "" },
        { label: "State", value: userData?.state || "" },
        { label: "Pincode", value: userData?.pincode || "" },
    ];

    const accountInfo = [
        { label: "Headway ID", value: userData?.headway_id || " - " },
        { label: "Batch", value: userData?.batch_number || " - " },
    ];

    const ItemsJSX = ({ planData }) => {
        const points = planData?.description?.split(',').map(point => point.trim());

        return (
            <>
                {points?.map((item, index) => (
                    <div className="flex gap-3 justify-between text-start mt-5 w-fit me-5" key={index}>
                        <div className="flex justify-center items-center  bg-white p-1 w-6 h-6 rounded-full">

                            <i className="fa fa-check text-orange-500"></i>
                        </div>
                        <div className="text-start grow text-base text-white">
                            {item.trim()}
                        </div>
                    </div>
                ))}

            </>
        )
    }


    const isSingleData = (serviceData && serviceData.length === 1);
    const gridCols = isSingleData ? "1" : "2";

    // console.log("userData?.address", userData?.address, userData.state, userData.zipcode);

    const addressData = [
        userData?.flat_no,
        userData?.area,
        userData?.landmark,
        userData?.city,
        userData?.state,
        userData?.pincode
    ].filter(Boolean).join(', ');

    // + "," + userData.state + "," + userData.zipcode

    // function cleanUpCommas(input) {
    //     return input.replace(/(?:\s*,\s*)+/g, ',').replace(/,+/g, ',');
    // }
    function cleanUpCommas(input = '') {

        return input
            // .replace(/\s*,\s*/g, ',')
            // .replace(/(^,|,$)/g, '')
            // .replace(/,{2,}/g, ',')
            // .replace(/(^,|,$)/g, '')
            // .replace(/,(\s*,)+/g, ',')
            // .replace(/(^,|,$)/g, '');
            .replace(/\s*,\s*/g, ',')
            .replace(/,{2,}/g, ',')
            .replace(/(^,|,$)/g, '')
            .replace(/,(?!\s)/g, ', ')
    }


    return (
        <>
            <section className="flex flex-col grow justify-center rounded-xl max-md:mt-10 max-md:max-w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">
                        Account Information
                    </h1>
                    {!isEditMode && (
                        <button
                            className="text-orange-500 hover:text-orange-700 font-medium"
                            onClick={() => setIsEditMode(true)}
                        >
                            <i className="fa fa-edit mr-1"></i>Edit
                        </button>
                    )}
                </div>
                <div

                    className="pr-6 mt-8 bg-white rounded-xl border border-gray-200 border-solid max-lg:p-5"
                >

                    {/* <div

                        className="flex flex-row max-lg:flex-col gap-5 text-center items-center"
                    >
                        <div
                            className="flex  border-e-2 border-gray-200 border-solid max-lg:border-0 max-lg:w-full w-[30%] justify-center max-lg:border-0"
                        >

                            {userData?.avatar && /\.(png|webp|jpeg|jpg)$/.test(userData?.avatar) ? (
                                <img
                                    className="w-48 h-48 rounded-full p-2"
                                    loading='lazy'
                                    width=""
                                    height=""
                                    src={userData?.avatar}
                                    alt="user photo"
                                />
                            ) : (
                                <>
                                    <img
                                        className="w-48 h-48 p-2 "
                                        loading='lazy'
                                        width=""
                                        height=""
                                        src={Images.logo}
                                        alt="user photo"
                                    />

                                </>
                            )}
                        </div>
                        <div
                            className="flex flex-row w-full max-lg:w-full gap-5 max-lg:flex-col max-lg:gap-0 max-lg:mt-5  grid lg:grid-cols-2"

                        >
                            <div

                                className="my-auto flex-1 grow w-full text-left"

                            >
                                <div

                                    className={`text-xl font-medium  h-10 py-3 rounded-lg capitalize ${userData?.address ? 'text-zinc-800' : '  text-neutral-400 px-3.5'}`}

                                >
                                    {userData?.name ? userData?.name : 'Full Name'}
                                </div>
                                <div

                                    className="mt-3.5 text-base text-neutral-400 max-md:max-w-full flex-wrap text-wrap h-5"
                                    style={{ overflowWrap: 'break-word' }}

                                >
                                    {userData?.email}
                                </div>
                            </div>
                            <div
                                className="flex w-full gap-5 max-lg:flex-nowrap max-lg:mt-10 my-auto "

                            >
                                {accountInfo.map(({ label, value }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col justify-center p-5 rounded-xl terms_bg_clr w-full max-lg:w-1/2"
                                    >
                                        <div className="text-sm text-center text-neutral-400">{label}</div>
                                        <div className="self-center mt-2 text-base font-medium text-orange-500 h-5">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                    {isEditMode ? (
                        // Render the edit form
                        <SettingsProfileContent
                            userData={userData}
                            onSave={(updatedData) => {
                                setIsEditMode(false);
                                if (updatedData) setUserData(updatedData); // update parent state
                            }}
                            // onSave={() => setIsEditMode(false)}
                            onCancel={() => setIsEditMode(false)}
                        />
                    ) : (
                        // Render the view mode
                        <div className="flex flex-row max-lg:flex-col gap-5 text-center items-center">
                            <div className="flex border-e-2 border-gray-200 border-solid max-lg:border-0 max-lg:w-full w-[30%] justify-center max-lg:border-0">
                                {userData?.avatar && /\.(png|webp|jpeg|jpg)$/.test(userData?.avatar) ? (
                                    <img
                                        className="w-48 h-48 rounded-full p-2"
                                        loading='lazy'
                                        src={userData?.avatar}
                                        alt="user photo"
                                    />
                                ) : (
                                    <img
                                        className="w-48 h-48 p-2"
                                        loading='lazy'
                                        src={Images.logo}
                                        alt="user photo"
                                    />
                                )}
                            </div>
                            <div className="flex flex-row w-full max-lg:w-full gap-5 max-lg:flex-col max-lg:gap-0 max-lg:mt-5 grid lg:grid-cols-2">
                                <div className="my-auto flex-1 grow w-full text-left">
                                    <div className={`text-xl font-medium h-10 py-3 rounded-lg capitalize ${userData?.address ? 'text-zinc-800' : 'text-neutral-400 px-3.5'}`}>
                                        {userData?.name ? userData?.name : 'Full Name'}
                                    </div>
                                    <div className="mt-3.5 text-base text-neutral-400 max-md:max-w-full flex-wrap text-wrap h-5" style={{ overflowWrap: 'break-word' }}>
                                        {userData?.email}
                                    </div>
                                </div>
                                <div className="flex w-full gap-5 max-lg:flex-nowrap max-lg:mt-10 my-auto">
                                    {accountInfo.map(({ label, value }) => (
                                        <InfoItem key={label} label={label} value={value} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {!isEditMode && (
                <>
                    {/* Personal Info */}
                    <section className="flex flex-col justify-center items-start p-5 mt-6 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                        <h2 className="text-2xl font-medium text-center text-zinc-800 max-md:max-w-full">
                            Personal Information
                        </h2>
                        <div className="flex gap-5 justify-between mt-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full">
                            {personalInfo.map(({ label, value }) => (
                                <InfoItem key={label} label={label} value={value} />
                            ))}
                        </div>
                    </section>
                    {/* Address */}
                    <section className="flex flex-col justify-center items-start p-5 mt-6 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                        <h2 className="text-2xl font-medium text-center text-zinc-800 max-md:max-w-full">
                            Address
                        </h2>
                        <div className="mt-8 text-sm text-neutral-400 max-md:max-w-full">Address </div>
                        {cleanUpCommas(addressData) ?
                            <div className={`break-all text-start mt-2 text-base font-medium text-zinc-800 w-full py-2.5 rounded-lg border border-gray-300 px-3.5 ${userData?.address ? 'h-auto' : 'h-12 '}`}>
                                <span>{cleanUpCommas(addressData)}</span>
                            </div>
                            :
                            <div className="break-all text-start mt-2 text-base font-medium text-zinc-800 w-full py-2.5 rounded-lg border border-gray-300 px-3.5 h-12"></div>
                        }
                        <div className="flex gap-5 justify-between mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full">
                            {addressInfo.map(({ label, value }) => (
                                <InfoItem key={label} label={label} value={value} />
                            ))}
                        </div>
                    </section>
                    {/* Plan Info */}
                    {Object.keys(planData)?.length !== 0 && (
                        <section className="flex flex-col items-start p-6 mt-6 bg-orange-500 rounded-3xl max-md:px-5 max-md:max-w-full">
                            <h2 className="justify-center px-3 py-2 text-2xl font-medium text-white rounded bg-white bg-opacity-10 max-md:max-w-full">
                                {planData?.name ? planData?.name : ''}
                            </h2>
                            <div className="self-stretch my-6 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                                        <div className="flex items-center flex-wrap">
                                            <ItemsJSX planData={planData} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full">
                                        <img
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b87370d16369de215b3e884991c7eb4a20efcae2c2997ef32d9e02b3fd8f4?apiKey=8e5983036f284a13866aae97819cdb73&"
                                            alt="Images"
                                            className="self-stretch my-auto w-full aspect-square max-md:mt-0"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="justify-center px-4 py-2.5 text-base font-medium text-white rounded-lg border border-white border-solid">
                                Add on Services
                            </button>
                        </section>
                    )}
                    {/* Services */}
                    {serviceData?.length > 0 && (
                        <div className={`flex flex-wrap gap-5 justify-between grid lg:grid-cols-${gridCols} md:grid-cols-1`}>
                            {serviceData.map((item, index) => (
                                <section className=' ' key={index}>
                                    <div className="flex flex-col items-start mt-6 bg-orange-500 rounded-3xl max-md:px-5 flex-wrap">
                                        <h2 className="justify-center px-3 py-2 text-2xl font-medium text-white rounded bg-white bg-opacity-10 ">
                                            {item?.title ? item?.title : ''}
                                        </h2>
                                        <div className="self-stretch my-6 max-md:max-w-full p-6 max-md:p-0">
                                            <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-between items-center">
                                                <div className="flex gap-3 justify-between w-full items-center max-w-full me-5" >
                                                    <div className="grow text-base text-white" dangerouslySetInnerHTML={{
                                                        __html: item?.description
                                                    }} />
                                                    <div className="flex justify-center items-center bg-white p-1 rounded-full">
                                                        <i className="fa fa-check text-orange-500"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}
                </>
            )}
            {/* <section className="flex flex-col justify-center items-start p-5 mt-6 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-center text-zinc-800 max-md:max-w-full">
                    Personal Information
                </h2>
                <div

                    className="flex gap-5 justify-between mt-8  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full"
                >
                    {personalInfo.map(({ label, value }) => (
                        <InfoItem key={label} label={label} value={value} />
                    ))}
                </div>

            </section>
            <section className="flex flex-col justify-center items-start p-5 mt-6 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-center text-zinc-800 max-md:max-w-full">
                    Address
                </h2>
                <div className="mt-8 text-sm text-neutral-400 max-md:max-w-full">Address </div>
                {cleanUpCommas(addressData) ?
                    <div className={`break-all text-start mt-2 text-base font-medium text-zinc-800 w-full py-2.5 rounded-lg border border-gray-300 px-3.5 ${userData?.address ? 'h-auto' : 'h-12 '}`}>
                        <span className=''> {cleanUpCommas(addressData)}</span>
                    </div>
                    :
                    <div className={`break-all text-start mt-2 text-base font-medium text-zinc-800 w-full py-2.5 rounded-lg border border-gray-300 px-3.5 h-12`}>


                    </div>
                }
                <div

                    className="flex gap-5 justify-between mt-8  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full"
                >
                    {addressInfo.map(({ label, value }) => (
                        <InfoItem key={label} label={label} value={value} />
                    ))}
                </div>
            </section>
            {Object.keys(planData)?.length !== 0 ? (
                <section className="flex flex-col items-start p-6 mt-6 bg-orange-500 rounded-3xl max-md:px-5 max-md:max-w-full">
                    <h2 className="justify-center px-3 py-2 text-2xl font-medium text-white rounded bg-white bg-opacity-10 max-md:max-w-full">

                        {planData?.name ? planData?.name : ''}
                    </h2>
                    <div className="self-stretch my-6 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                                <div className="flex items-center  flex-wrap">
                                    <ItemsJSX planData={planData} />
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b87370d16369de215b3e884991c7eb4a20efcae2c2997ef32d9e02b3fd8f4?apiKey=8e5983036f284a13866aae97819cdb73&"
                                    alt="Images"
                                    className="self-stretch my-auto w-full aspect-square max-md:mt-0"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="justify-center px-4 py-2.5 text-base font-medium text-white rounded-lg border border-white border-solid">
                        Add on Services
                    </button>
                </section>
            )
                :
                ''
            }

            {serviceData?.length > 0 ? (

                <div className={`flex flex-wrap gap-5 justify-between grid lg:grid-cols-${gridCols} md:grid-cols-1`}>
                    {serviceData.map((item, index) => {


                        return (
                            <section className=' ' key={index}>
                                <div className="flex flex-col items-start  mt-6 bg-orange-500 rounded-3xl max-md:px-5 flex-wrap">
                                    <h2 className="justify-center px-3 py-2 text-2xl font-medium text-white rounded bg-white bg-opacity-10 ">

                                        {item?.title ? item?.title : ''}
                                    </h2>
                                    <div className="self-stretch my-6 max-md:max-w-full p-6 max-md:p-0">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-between items-center">

                                            <div className="flex gap-3 justify-between w-full items-center max-w-full me-5" >
                                                <div className="grow text-base text-white" dangerouslySetInnerHTML={{
                                                    __html: item?.description
                                                }} />

                                                <div className="flex justify-center items-center  bg-white p-1  rounded-full">

                                                    <i className="fa fa-check text-orange-500"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </section>
                        )
                    })}
                </div>

            ) : (
                <></>
            )} */}

        </>
    )
}

export default AccountTabContent