import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountTabContent from "./AccountTabContent";
import * as Images from '../../../../assets';
import SettingsProfileContent from "./SettingsMenu/SettingsProfileContent";
import SettingsNotificationContent from "./SettingsMenu/SettingsNotificationContent";
import SettingsServiceContent from "./SettingsMenu/SettingsServiceContent";
import SettingsPlanContent from "./SettingsMenu/SettingsPlanContent";
import UserDontPlanContent from "./SettingsMenu/SettingsPlanContent/UserDontPlanContent";
import { fetchDataWithToken, fetchWithFormDataToken } from "../../../../apiGeneralFunction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isSafari, isChrome } from 'react-device-detect';
import SettingSafariContent from "./SettingsMenu/SettingsProfileContent/SettingSafariContent";



const UserProfileContent = () => {

    const [activeTab, setActiveTab] = useState('Account Info');
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [settingActiveTab, setSettingActiveTab] = useState('Profile');
    // const [settingActiveTab, setSettingActiveTab] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const user_id = localStorage.getItem('user_data') || '';
    const userId = JSON.parse(user_id) || '';
    //  console.log("userId for profile data", userId);

    // const [userData, setUserData] = useState(userId);
    const [userData, setUserData] = useState([]);
    const [planData, setPlanData] = useState([]);
    const [serviceData, setServiceData] = useState([]);


    useEffect(() => {
        const tokenValue = localStorage.getItem('login api response token') || '';
        const token = JSON.parse(tokenValue);
        if (!token) {
            // fetchData(token);
            navigate('/login');
        }

    }, []);

    const phone = localStorage.getItem('register api response');
    const storedPhone = JSON.parse(phone);

    // const user_id = localStorage?.getItem('user_data');
    // const userId = JSON.parse(user_id);


    useEffect(() => {
        handleSubmit()
    }, [])


    const handleSubmit = async () => {

        const tokenValue = localStorage?.getItem('login api response token');
        const storedToken = JSON?.parse(tokenValue);

        const user_id = localStorage?.getItem('user_data');
        const userId = JSON.parse(user_id);


        if (!storedToken) {
            navigate('/login');
            return;
        }

        const formdata = new FormData();
        formdata.append("user_id", userId?.user_id);
        //formdata.append("user_id", 99);


        try {
            const result = await fetchWithFormDataToken('profile/getProfile', formdata, storedToken);

            if (result?.status === true) {

                setUserData(result?.data)
                // setPlanData(result?.data?.memberPlan)
                // setServiceData(result?.data?.addonservicePlan)

            }
            else {


            }
        } catch (error) {

        }


    };


    const handleTabClick = (tabName) => {

        setActiveTab(tabName);

    };

    const handleSettingTabClick = (tabName) => {
        // console.log("handleSettingTabClick", tabName);
        setSettingActiveTab(tabName);

    };

    const toggleSettingsMenu = () => {
        setShowSettingsMenu(!showSettingsMenu);
    };

    const SubMenuItem = ({ children, className, onClick }) => (
        <div
            onClick={onClick}
            className={`text-base font-medium text-neutral-500 hover:text-orange-500 cursor-pointer ${className}`}>
            {children}
        </div>
    );

    const settingsSubMenuContent = (
        <div className="flex flex-col gap-3 py-3 rounded-b-lg border-t-0 border border-gray-200">
            <SubMenuItem
                className={settingActiveTab === 'Profile' ? "font-medium text-orange-500  " : ""}
                onClick={() => handleSettingTabClick('Profile')}
            >
                Profile
            </SubMenuItem>
            {/* <SubMenuItem
                className={settingActiveTab === 'Plans' ? "font-medium text-orange-500  " : ""}
                onClick={() => handleSettingTabClick('Plans')}
            >
                Plans
            </SubMenuItem>
            <SubMenuItem
                className={settingActiveTab === 'Add on Services' ? "font-medium text-orange-500  " : ""}
                onClick={() => handleSettingTabClick('Add on Services')}
            >
                Add on Services
            </SubMenuItem>
            <SubMenuItem>Billing</SubMenuItem> */}
            <SubMenuItem
                className={settingActiveTab === 'Notification' ? "font-medium text-orange-500  " : ""}
                onClick={() => handleSettingTabClick('Notification')}
            >
                Notification
            </SubMenuItem>
        </div>
    );

    const tabContent = {
        'Account Info': (
            <div>
                <AccountTabContent userData={userData} setUserData={setUserData} planData={planData} serviceData={serviceData} />
                {/* <AccountTabContent /> */}
                {/* <h1>Account Info Content</h1> */}
            </div>
        ),
        // ...(userHasPlan && {
        'Modules': (
            <div className="text-center flex items-center justify-center w-full h-full">
                {/* Content for Modules tab */}
                {/* Replace this with your content */}
                {/* <h1>Modules Content</h1> */}
                <div className="text-5xl">Coming Soon ...</div>
            </div>
        ),
        'YouTube Video': (
            <div className="text-center flex items-center justify-center w-full h-full">
                {/* Content for YouTube Video tab */}
                {/* Replace this with your content */}
                <div className="text-5xl">Coming Soon ...</div>
            </div>
        ),
        'Training Video': (
            <div className="text-center flex items-center justify-center w-full h-full">
                {/* Content for Training Video tab */}
                {/* Replace this with your content */}
                <div className="text-5xl">Coming Soon ...</div>
            </div>
        ),
        'Meetings': (
            <div className="text-center flex items-center justify-center w-full h-full">
                {/* Content for Meetings tab */}
                {/* Replace this with your content */}
                <div className="text-5xl">Coming Soon ...</div>
            </div>
        )
        // })
        ,
        'Plans': (
            <>
                {/* <SettingsPlanContent/> */}
                <div className="text-center flex items-center justify-center w-full h-full">

                    <div className="text-5xl">Coming Soon ...</div>
                </div>
            </>
        ),
        'Add on Services': (
            <>
                {/* <div className="text-center flex items-center justify-center w-full h-full">
                <div className="text-5xl">Coming Soon ...</div>
            </div> */}
                {/* {serviceData.length > 0 ? ( */}
                <SettingsServiceContent />

                {/* ):(
                <></>
            )} */}

            </>
        ),
        'Billing': (
            <div className="text-center flex items-center justify-center w-full h-full">
                {/* Content for Meetings tab */}
                {/* Replace this with your content */}
                <div className="text-5xl">Coming Soon ...</div>
            </div>
        ),
        'Notification Settings': (
            <div>
                <h1 className="w-full text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">
                    Notification Settings
                </h1>
                <SettingsNotificationContent />
                {/* {isSafari() ? (
          <SafariForm userData={userData} />
        ) : isChrome() ? (
          <ChromeForm userData={userData} />
        ) : (
          <DefaultForm userData={userData} />
        )} */}
                {/* <h1 className="w-full text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">Profile Settings</h1>
                {settingActiveTab === 'Profile' &&
                    <>
                        {isSafari ? (
                            <SettingSafariContent userData={userData}/>
                        ) : (
                           <SettingsProfileContent userData={userData}/>
                        )

                        }

                    </>} */}
                {/* {settingActiveTab === 'Plans' && (<SettingsPlanContent />)}
                {settingActiveTab === 'Add on Services' && <SettingsServiceContent />} */}
                {/* {settingActiveTab === 'Notification' && <SettingsNotificationContent />} */}

            </div>
        )
    };


    const AccountInfoLink = ({ children, className, onClick }) => (
        <div className={`justify-center items-start p-4 rounded-lg  max-md:pr-5 cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );



    useEffect(() => {

        toast.dismiss();

        const clearWaitingQueue = () => {
            // Easy, right 😎
            toast.clearWaitingQueue();
        }
        clearWaitingQueue();

        if (location.state && location.state.openAccountInfoTab) {
            handleSubmit();
            setActiveTab('Account Info');
        }

    }, [location]);


    return (
        <div
        //  className=" flex justify-center items-center max-lg:pt-0 max-lg:pb-10 bg-white max-md:px-5 max-h-full"

        >
            <div className="relative flex justify-center items-center max-lg:pt-0 max-lg:pb-10 bg-white max-md:px-5 max-h-full px-16 py-20">
                <img
                    src={Images.user_auth_vector}
                    className="absolute bottom-0"
                    alt="Images"
                />
                <div className="z-50 p-10 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[1296px] max-md:px-5 max-h-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">

                        <aside className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                            <nav className="flex flex-col text-base text-center text-neutral-400 max-lg:mt-10 gap-5">
                                {/* Assuming AccountInfoLink and IconLink handle tab selection */}
                                <AccountInfoLink
                                    className={activeTab === 'Account Info' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                    onClick={() => handleTabClick('Account Info')}
                                >
                                    Account Info
                                </AccountInfoLink>
                                {/* {userHasPlan && ( */}
                                <>
                                    {/* {serviceData?.length > 0 && planData > 0 &&
                                        <>
                                            <AccountInfoLink
                                                className={activeTab === 'Modules' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                                onClick={() => handleTabClick('Modules')}
                                            >
                                                Modules
                                            </AccountInfoLink>
                                            <AccountInfoLink
                                                className={activeTab === 'YouTube Video' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                                onClick={() => handleTabClick('YouTube Video')}
                                            >
                                                YouTube Video
                                            </AccountInfoLink>
                                            <AccountInfoLink
                                                className={activeTab === 'Training Video' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                                onClick={() => handleTabClick('Training Video')}
                                            >
                                                Training Video
                                            </AccountInfoLink>
                                            <AccountInfoLink
                                                className={activeTab === 'Meetings' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                                onClick={() => handleTabClick('Meetings')}
                                            >
                                                Meetings
                                            </AccountInfoLink>
                                        </>
                                    } */}
                                    <AccountInfoLink
                                        className={activeTab === 'Plans' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                        onClick={() => handleTabClick('Plans')}
                                    >
                                        Plans
                                    </AccountInfoLink>

                                    {/* {serviceData?.length > 0 && */}
                                    <AccountInfoLink
                                        className={activeTab === 'Add on Services' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                        onClick={() => handleTabClick('Add on Services')}
                                    >
                                        Add on Services
                                    </AccountInfoLink>
                                    {/* } */}
                                    {/* {serviceData?.length > 0 && planData?.length > 0 &&
                                        <AccountInfoLink
                                            className={activeTab === 'Billing' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                            onClick={() => handleTabClick('Billing')}
                                        >
                                            Billing
                                        </AccountInfoLink>
                                    } */}
                                    {/* Render other tabs similarly */}
                                </>
                                {/* )} */}
                                {/* <AccountInfoLink
                                className={activeTab === 'Settings' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                onClick={() => handleTabClick('Settings')}
                            >
                                Settings
                            </AccountInfoLink> */}
                                {/* <div>
                                    <div
                                        // className={`cursor-pointer justify-center items-start p-4 rounded-lg  max-md:pr-5 ${activeTab === 'Settings' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"
                                        //     }`}
                                        className={`cursor-pointer justify-center items-start p-4 rounded-lg  max-md:pr-5 ${activeTab === 'Profile Settings' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"
                                            }`}
                                        onClick={() => {
                                            handleTabClick('Profile Settings');
                                            toggleSettingsMenu();
                                        }}
                                    >
                                        Profile Settings
                                        {showSettingsMenu &&

                                            <i className="fa fa-angle-up ms-3" onClick={() => setShowSettingsMenu(true)}></i>
                                        }
                                        {!showSettingsMenu &&
                                            <i className="fa fa-angle-down ms-3" onClick={() => setShowSettingsMenu(false)}></i>
                                        }
                                    </div>
                                
                                    {activeTab === 'Profile Settings' && showSettingsMenu && settingsSubMenuContent}
                                </div> */}
                                <AccountInfoLink
                                    className={activeTab === 'Notification Settings' ? "font-medium text-orange-500 terms_bg_clr" : "border border-gray-200 border-solid"}
                                    onClick={() => handleTabClick('Notification Settings')}
                                >
                                    Notification Settings
                                </AccountInfoLink>


                            </nav>
                        </aside>
                        <main className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                            {tabContent[activeTab]}

                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileContent