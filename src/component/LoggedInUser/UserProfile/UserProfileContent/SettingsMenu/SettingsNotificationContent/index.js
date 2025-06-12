import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithFormDataToken } from "../../../../../../apiGeneralFunction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdatedAnimatedComponent from "../../../../../AnimationWrapperComponent";
import Switch from "react-switch";

const SettingsNotificationContent = ({ titleRef, isVisible }) => {


    const navigate = useNavigate();

    // const [isActive, setIsActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [userDataEmail, setUserDataEmail] = useState([]);
    const [userDataPush, setUserDataPush] = useState([]);
    const [apiSuccessResponse, setApiSuccessResponse] = useState('');
    const [apiFailResponse, setApiFailResponse] = useState('');
    const [apiSuccessSecondResponse, setApiSuccessSecondResponse] = useState('');
    const [apiFailSecondResponse, setApiFailSecondResponse] = useState('');
    const [notificationData, setNotificationData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        handleSubmit()
    }, [])


    const handleSubmit = async () => {

        const tokenValue = localStorage.getItem('login api response token');
        const storedToken = JSON?.parse(tokenValue);


        const user_id = localStorage?.getItem('user_data');
        const userId = JSON.parse(user_id);



        if (!storedToken) {
            navigate('/login');
            return;
        }

        const formdata = new FormData();
        formdata.append("user_id", userId?.user_id);
        //formdata.append("user_id", 133);


        try {
            const result = await fetchWithFormDataToken(`getNotificationUser`, formdata, storedToken);

            if (result?.status === true) {
                setNotificationData(result?.data);
            } else {
                setNotificationData({});
            }
            // if (result?.status === true) {
            //     setUserDataEmail(result?.data?.email);
            //     setUserDataPush(result?.data?.push);
            // }
            // else {

            //     setUserDataEmail();
            //     setUserDataPush();
            // }
        } catch (error) {

        }


    };


    const NotificationToggle = ({ label, description, key, notification, title }) => {


        const [isActive, setIsActive] = useState(notification?.is_active === "0" ? 'false' : 'true');

        // const toggleSwitch = async (notification, title) => {
        const toggleSwitch = async () => {

            const updatedNotification = {
                key: notification.key, // e.g., "promotional_notification_email"
                is_active: notification.is_active === "1" ? "0" : "1"
            };
            // const updatedNotification = { ...notification, is_active: notification.is_active === "1" ? "0" : "1" };
            try {
                await handleUpdateNotification(updatedNotification);
                // setIsActive(prevState => !prevState);
                // setIsActive(!isActive);
            } catch (err) {

            }

        };

        const handleUpdateNotification = async (updatedNotification) => {
            setApiSuccessResponse('')
            setApiFailResponse('')
            const tokenValue = localStorage.getItem('login api response token');
            const storedToken = JSON?.parse(tokenValue);


            const user_id = localStorage?.getItem('user_data');
            const userId = JSON.parse(user_id);


            if (!storedToken) {
                navigate('/login');
                return;
            }

            const formdata = new FormData();
            formdata.append("user_id", userId?.user_id);
            formdata.append(updatedNotification.key, updatedNotification.is_active);
            //formdata.append("user_id", 133);
            // formdata.append("id", updatedNotification.id);
            // formdata.append("is_active", updatedNotification.is_active);

            // try {
            const result = await fetchWithFormDataToken(`setNotificationUser`, formdata, storedToken);

            if (result?.status === true) {

                handleSubmit()
                setTimeout(() => {
                    setApiSuccessResponse('')
                    setApiFailResponse('')
                }, 4000)
                setApiSuccessResponse(result?.message)

            } else {
                setUserDataEmail();
                setUserDataPush();
                setTimeout(() => {
                    setApiSuccessResponse('')
                    setApiFailResponse('')
                }, 4000)
                setApiFailResponse(result?.message)

            }
            // } catch (error) {

            // }
        };


        return (
            <div className="flex gap-3 mt-6 max-md:flex-wrap max-md:max-w-full items-center" >
                <Switch checked={notification.is_active === "1"} onChange={toggleSwitch} />
                {/* <div

                    className={`w-16 md:w-16 lg:w-16 xl:w-16 2xl:w-16 flex items-center transition-colors duration-300 rounded-full p-1 cursor-pointer ${notification.is_active === "1" ? 'bg-orange-500' : 'bg-neutral-300'}`}
                    // onClick={() => toggleSwitch(notification, title)}
                    onClick={toggleSwitch}
                    style={{ transition: 'background-color 0.3s ease' }}
                >
                    <div
                        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${notification.is_active === "1" ? 'translate-x-full' : ''}`}
                    />


                </div> */}


                <div className="flex flex-col justify-center">

                    <div className="text-base font-medium text-zinc-800">{label}</div>
                    <div className="mt-3 text-sm text-neutral-400">{description}</div>
                </div>
            </div>
        );
    }

    const NotificationSection = ({ title, description, notifications }) => {


        return (
            <>


                <section className="mt-4 max-lg:max-w-full">
                    <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">

                        <div className="flex flex-col w-[45%] max-lg:ml-0 max-lg:w-full">
                            <div className="flex flex-col max-lg:mt-8">
                                <h3 className="text-lg font-medium text-zinc-800">{title}</h3>
                                <p className="mt-2 text-base text-neutral-400">{description}</p>
                            </div>
                        </div> <div className="flex flex-col ml-5 w-[55%] max-lg:ml-0 max-lg:w-full">
                            <div className="flex flex-col grow max-lg:mt-8 max-lg:max-w-full">
                                {notifications?.map((notification, index) => (
                                    <NotificationToggle
                                        key={index}
                                        label={notification.label} description={notification.description}
                                        isActive={notification.is_active}
                                        notification={notification}
                                        title={title}
                                    // label={notification.label} description={notification.description}
                                    // isActive={notification.isActive}
                                    />
                                )
                                )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
    const emailNotifications = [
        { key: "email_notification_email", label: "Event Email", description: "Receive updates and reminders about upcoming events directly to your email." },
        { key: "seminar_notification_email", label: "Seminar Email", description: "Get notified about new seminars, schedules, and important seminar information." },
        { key: "promotional_notification_email", label: "Promotional Email", description: "Stay informed about exclusive offers, discounts, and promotional campaigns." },
        { key: "subscription_notification_email", label: "Subscription Email", description: "Receive notifications about your subscription status, renewals, and related updates." },
        { key: "news_updates_notification_email", label: "News and Update Email", description: "Get the latest news, updates, and announcements delivered to your inbox." },
    ];

    const pushNotifications = [
        { key: "email_notification_push", label: "Event Notification", description: "Get instant push notifications for upcoming events and important event changes." },
        { key: "seminar_notification_push", label: "Seminar Notification", description: "Receive push alerts about seminar schedules, topics, and speakers." },
        { key: "promotional_notification_push", label: "Promotional Notification", description: "Be the first to know about special promotions and limited-time offers via." },
        { key: "subscription_notification_push", label: "Subscription Notification", description: "Get notified about your subscription status, renewals, and payment reminders." },
        { key: "news_updates_notification_push", label: "News and Update Notification", description: "Stay updated with the latest news and important updates through push notifications." },
    ];

    const mergedEmailNotifications = [
        {
            ...emailNotifications[0],
            is_active: notificationData?.email_notification_email ? "1" : "0"
        },
        {
            ...emailNotifications[1],
            is_active: notificationData?.seminar_notification_email ? "1" : "0"
        },
        {
            ...emailNotifications[2],
            is_active: notificationData?.promotional_notification_email ? "1" : "0"
        },
        {
            ...emailNotifications[3],
            is_active: notificationData?.subscription_notification_email ? "1" : "0"
        },
        {
            ...emailNotifications[4],
            is_active: notificationData?.news_updates_notification_email ? "1" : "0"
        }
    ];

    const mergedPushNotifications = [
        {
            ...pushNotifications[0],
            is_active: notificationData?.email_notification_push ? "1" : "0"
        },
        {
            ...pushNotifications[1],
            is_active: notificationData?.seminar_notification_push ? "1" : "0"
        },
        {
            ...pushNotifications[2],
            is_active: notificationData?.promotional_notification_push ? "1" : "0"
        },
        {
            ...pushNotifications[3],
            is_active: notificationData?.subscription_notification_push ? "1" : "0"
        },
        {
            ...pushNotifications[4],
            is_active: notificationData?.news_updates_notification_push ? "1" : "0"
        }
    ];

    return (
        <main className="flex flex-col justify-center rounded-xl max-w-full w-[1296px]" ref={titleRef}>
            {/* <h1 className="w-full text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">
                Settings
            </h1> */}
            {apiSuccessResponse ? (
                <div
                    // className="text-green-500 text-base font-medium mt-5 text-center zoom_in_pp_modal"
                    className={`text-green-500 text-base font-medium mt-5 w-full text-center ${isVisible ? 'animation_fadeInRight1' : ''}`}
                >
                    {apiSuccessResponse}
                </div>
            ) :
                <div
                    // className="text-red-500 text-base font-medium mt-5 text-center zoom_in_pp_modal"
                    className={`text-red-500 text-base font-medium mt-5 w-full ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                >
                    {apiFailResponse}
                </div>
            }
            <section className="flex flex-col p-6 mt-8 w-full rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                <h2 className="self-start text-2xl font-medium text-zinc-800 max-md:max-w-full">
                    Notification Settings
                </h2>
                <p className="self-start mt-2 text-base text-neutral-400 max-md:max-w-full">
                    Select the kinds of notifications you get about your activities and recommendations.
                </p>
                <hr className="shrink-0 mt-6 h-px bg-gray-200 max-md:max-w-full" />

                <NotificationSection
                    title="Email Notifications"
                    description="Get emails to find out what's going on when you're not online. You can turn these off"
                    // notifications={emailNotifications} 
                    notifications={mergedEmailNotifications}
                />
                {/* {apiSuccessResponse ? (
                    <div className="text-green-500 text-base font-medium mt-5 ">
                        {apiSuccessResponse}
                    </div>
                ) :
                    <div className="text-red-500 text-base font-medium mt-5 ">
                        {apiFailResponse}
                    </div>
                } */}
                <hr className="shrink-0 mt-4 h-px bg-gray-200 max-md:max-w-full" />
                <NotificationSection title="Push notifications"
                    description="Get push notifications in-website to find out what's going on when you're online."
                    notifications={mergedPushNotifications}
                // notifications={pushNotifications} 
                />

            </section>
        </main>
    )
}

export default UpdatedAnimatedComponent(SettingsNotificationContent)