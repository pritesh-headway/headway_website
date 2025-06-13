import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ButtonWithBGIcon } from '../../Buttons';
import * as Images from '../../../assets'
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';
import { addData, fetchData, fetchWithFormData, fetchWithFormDataToken } from '../../../apiGeneralFunction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import useRazorpay from "react-razorpay";

const BusinessGrowthPlan = ({ titleRef, isVisible, isModalOpen, setIsModalOpen, isSuccessModalOpen, setIsSuccessModalOpen, isFailedModalOpen, setIsFailedModalOpen }) => {

    const [Razorpay] = useRazorpay();


    const navigate = useNavigate();

    const register_number = localStorage.getItem("register api response");

    const userPhoneno = JSON?.parse(register_number)?.phone

    const [activeTab, setActiveTab] = useState('yearly');
    const razorpayButtonRef = useRef(null);
    const [data, setData] = useState([]);
    const [token, setToken] = useState('');
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    // const [isFailedModalOpen, setIsFailedModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [planDetails, setPlanDetails] = useState([]);
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState(userPhoneno || '');
    const [amount, setAmount] = useState('1');
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [paymentDetail, setPaymentDetail] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [apiSuccessResponse, setApiSuccessResponse] = useState('');
    const [apiFailResponse, setApiFailResponse] = useState('');

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };



    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = 'true'
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);

        }
    }, []);


    const handlePayment = async (orderId) => {


        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            //key:'rzp_live_x1nvHB0DL9qbX7',
            amount: 1 * 100,
            currency: process.env.REACT_APP_RAZORPAY_CURRENCY,
            name: process.env.REACT_APP_RAZORPAY_NAME,
            image: Images.logo,
            description: 'Test Transaction',
            email: email,
            order_id: orderId,
            method: {
                netbanking: process.env.REACT_APP_RAZORPAY_NETBANKING_METHOD,
                card: process.env.REACT_APP_RAZORPAY_CARD_METHOD,
                wallet: process.env.REACT_APP_RAZORPAY_WALLET_METHOD,
                upi: process.env.REACT_APP_RAZORPAY_UPI_METHOD,
                paylater: process.env.REACT_APP_RAZORPAY_PAYLATER_METHOD,
            },

            handler: function (response) {

                // alert(response.razorpay_payment_id);

                const fetchPaymentAPI = async () => {
                    const tokenValue = localStorage.getItem('login api response token');
                    const storedToken = JSON.parse(tokenValue);
                    // console.log("plan pricing fgascdgasfghdfshj", storedToken);
                    // if (!storedToken) {
                    //     window.location.href = '/login';
                    //     return;
                    // }
                    if (storedToken) {
                        setToken(storedToken);
                    }

                    // console.log("hadle proceed click", storedToken);
                    try {

                        const formdata = new FormData();

                        formdata.append("amount", amount);
                        // formdata.append("order_id", orderId);
                        formdata.append("payment_id", response?.razorpay_payment_id);
                        formdata.append("member_plan_id", planDetails?.id);

                        const endpoint = `api/member-plan-payment-store`;
                        const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

                        if (result?.status === true) {
                            navigate('/plan_pricing')
                            // setIsSuccessModalOpen(true)
                            //setIsModalOpen(false);
                            setIsSuccessModalOpen(true)
                            setPaymentDetail(result?.data)
                            // toast.dismiss();
                            // toast.success(result?.message, {
                            //     position: 'top-center',
                            //     autoClose: 3000,
                            // });

                            setIsModalOpen(false)

                        }
                        else {
                            setIsFailedModalOpen(true)

                            // fetchCancelPaymentAPI(orderId)
                            const fetchCancelPaymentAPI = async () => {
                                const tokenValue = localStorage.getItem('login api response token');
                                const storedToken = JSON.parse(tokenValue);
                                if (storedToken) {
                                    setToken(storedToken);
                                }
                                try {

                                    const formdata = new FormData();
                                    formdata.append("order_id", orderId);
                                    formdata.append("member_plan_id", planDetails?.id);

                                    const endpoint = `api/member-plan-payment-order-revert`;
                                    const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

                                    if (result?.status === true) {

                                    }
                                    else {
                                        // toast.error(result?.message, {
                                        //     position: 'top-center',
                                        //     autoClose: 5000,
                                        // });
                                    }


                                } catch (error) {

                                }
                            };
                            fetchCancelPaymentAPI();
                        }

                        // console.log('API member plan payment response:', result);
                    } catch (error) {
                        // console.error('Error fetching API: member-plan-payment-store', error);
                    }
                };
                fetchPaymentAPI();
            },
            // razorpay_close: function (response) {

            //     //     fetchCancelPaymentAPI();
            // },
            prefill: {
                email: email,
                // contact: '1234567890',
                contact: phoneNo,
                name: name,
            },
            notes: {
                address: 'Your address',
            },
            theme: {
                color: '#F6821F',
            },
            modal: {
                ondismiss: fetchCancelPaymentAPI(orderId)
            },
            config: {
                display: {
                    hide: [{ method: 'paylater' }] // Hide the Pay Later payment option
                }
            }
            // razorpay_close: function () {
            //     fetchCancelPaymentAPI(orderId)
            // }

        }
        // console.log("handle payment 2", orderId);
        const rzp = new window.Razorpay(options);

        rzp.open();
    }


    const fetchCancelPaymentAPI = async (orderId) => {
        const tokenValue = localStorage.getItem('login api response token');
        const storedToken = JSON.parse(tokenValue);
        if (storedToken) {
            setToken(storedToken);
        }
        try {

            const formdata = new FormData();
            formdata.append("order_id", orderId);
            formdata.append("member_plan_id", planDetails?.id);

            const endpoint = `api/member-plan-payment-order-revert`;
            const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

            if (result?.status === true) {

                // toast.success(result?.message, {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
            }
            else {


            }


        } catch (error) {

        }
    };



    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const mmbPlanData = [
        {
            id: 1,
            price: '2,25,000',
            title1: 'Make My Business',
            title2: 'Personal Level',
            desc: 'Transform Your Business from Idle to Ideal with "Make My Business"',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },
        {
            id: 2,
            price: '3,96,000',
            title1: 'Make My Business',
            title2: 'Business Level',
            desc: 'Transform Your Business from Idle to Ideal with "Make My Business"',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: 'User Dashboard'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },
        {
            id: 3,
            price: '6,93,000',
            title1: 'Make My Business',
            title2: 'Developer Level',
            desc: 'Transform Your Business from Idle to Ideal with "Make My Business"',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
        },
        {
            id: 4,
            price: '9,63,000',
            title1: 'Make My Business',
            title2: 'Smart Level',
            desc: 'Transform Your Business from Idle to Ideal with "Make My Business"',
            onSitePrice: '5,10,000',
            outSitePrice: '5,10,000',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },

    ]

    const startupPlanData = [
        {
            id: 1,
            price: '1,56,900',
            title1: 'Startup',
            title2: 'Small Scale',
            desc: 'Ignite Your Jewellery Business with Headway\'s Startup Program',
            onSitePrice: '1,56,900',
            outSitePrice: '2,07,900',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: 'User Dashboard'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },
        {
            id: 2,
            price: '2,65,500',
            title1: 'Startup',
            title2: 'Medium Level',
            desc: 'Ignite Your Jewellery Business with Headway\'s Startup Program',
            onSitePrice: '2,65,500',
            outSitePrice: '3,42,000',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
        },
        {
            id: 3,
            price: '3,69,000',
            title1: 'Startup',
            title2: 'Large Scale',
            desc: 'Ignite Your Jewellery Business with Headway\'s Startup Program',
            onSitePrice: '3,69,000',
            outSitePrice: '5,13,900',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },
    ]

    const idpPlanData = [
        {
            id: 1,
            price: '15,93,000',
            title1: 'Individual Development Program',
            title2: 'Large Scale',
            desc: 'Shine Brighter, Sell Smarter with Headway\'s Individual Development Program',
            onSitePrice: '15,93,000',
            outSitePrice: '17,86,500',
            outStatePrice: '19,80,000',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        }
    ]

    const revisionBatchData = [
        {
            id: 1,
            price: '49,500',
            title1: 'Revision Batch',
            title2: 'Large Scale',
            desc: 'Shine Brighter, Sell Smarter with Headway\'s Individual Development Program',
            onSitePrice: '15,93,000',
            outSitePrice: '17,86,500',
            outStatePrice: '19,80,000',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        }
    ]

        const refreshRenewalData = [
        {
            id: 1,
            price: '99,000',
            title1: 'Stay Aware & Alive Recharge Renewal Program',
            title2: 'Large Scale',
            desc: 'Shine Brighter, Sell Smarter with Headway\'s Individual Development Program',
            onSitePrice: '15,93,000',
            outSitePrice: '17,86,500',
            outStatePrice: '19,80,000',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        }
    ]

            const oneTimeMeetingData = [
        {
            id: 1,
            price: '9,000',
            title1: 'One Time Meeting With Paresh Sir',
            title2: 'Large Scale',
            desc: 'Shine Brighter, Sell Smarter with Headway\'s Individual Development Program',
            onSitePrice: '15,93,000',
            outSitePrice: '17,86,500',
            outStatePrice: '19,80,000',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        }
    ]



    const openModal = (item) => {
        setIsModalOpen(true);
        setSelectedId(item?.id);
        // console.log("ityems value id", item?.id);
        const tokenValue = localStorage.getItem('login api response token');
        const storedToken = JSON.parse(tokenValue);
        // console.log("plan pricing fgascdgasfghdfshj", storedToken);
        // if (!storedToken) {
        //     window.location.href = '/login';
        //     return;
        // }
        if (storedToken) {
            setToken(storedToken);
        }
        fetchData(`api/member_plan_detail/${item?.id}`, storedToken)
            // .then(data => setPlanDetails(data[0]?.data))
            .then(data => {
                // console.log("plan modal id", data?.data)
                if (data?.status === true) {
                    setPlanDetails(data?.data);

                }
                else {
                    // console.error('Status is not true:', data?.status);
                    setPlanDetails(null);
                }
            })
            .catch(
            // error => console.error('Error fetching data:', error)
        );



    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsFailedModalOpen(false)
        setIsSuccessModalOpen(false)
        setApiFailResponse('')
        setApiSuccessResponse('')
        setPhoneNo('')
        setIsChecked('')

    };



    // useEffect(() => {

    //     const tokenValue = localStorage.getItem('login api response token');
    //     const storedToken = JSON.parse(tokenValue);
    //     // console.log("plan pricing fgascdgasfghdfshj", storedToken);
    //     if (storedToken) {
    //         setToken(storedToken);
    //     }
    //     // console.log("token value", token)

    //     fetchData(`api/member_plan_list`, storedToken)
    //         // .then(data => setData(data[0]?.data?.data))
    //         .then(data => {
    //             // console.log("adghsasd1", data.data.data)
    //             if (data?.status === true) {
    //                 setData(data?.data?.data);
    //                 //setData([])
    //                 // console.log("adghsasd plan", data?.data?.data)
    //             }
    //             else {
    //                 // console.error('Status is not true:', data?.status);
    //                 setData(null);
    //             }
    //         })
    //         .catch(
    //         // error => console.error('Error fetching data:', error)
    //     );
    // }, []);


    const responseFromAPI = planDetails?.description;
    const modalFeatures = responseFromAPI?.split(',');


    const modalFeaturesJSX = modalFeatures?.map((item, index) => (
        <div className="flex gap-3 justify-between mt-5  me-5 h-fit" key={index}>
            <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                <img
                    alt=''
                    loading="lazy"
                    src={Images.pp_green_clr}
                    className="w-full aspect-square"
                />
            </div>
            <div className="grow text-base  max-sm:text-wrap text-zinc-600 w-auto text-left">
                {item?.trim()}
            </div>
        </div>
    ))

    const modalTitleName = planDetails?.name?.replace('Make My Business', '');


    const numberWithIndianRupeeFormatModal = (number) => {
        const numberString = number?.toString();

        // Split the string into groups of three digits from the right
        const groups = [];
        let remainingDigits = numberString?.length % 3;
        if (remainingDigits === 0) remainingDigits = 3;
        groups.push(numberString?.substr(0, remainingDigits));
        for (let i = remainingDigits; i < numberString?.length; i += 3) {
            groups.push(numberString.substr(i, 3));
        }

        // Join the groups with commas and prepend ₹ symbol
        const formattedNumber = '₹' + " " + groups.join(',');

        return formattedNumber;
    };

    const calculateGST = (price) => {
        const gstPercentage = 18; // GST percentage
        const gstAmount = (price * gstPercentage) / 100; // Calculate GST amount
        return gstAmount;
    };


    const handleSubmit = async () => {

        const formdata = new FormData();
        formdata.append("amount", planDetails?.price);
        formdata.append("member_plan_id", planDetails?.id);


        try {
            const result = await fetchWithFormDataToken('api/member-plan-payment', formdata);
            // console.log("response register text ", result[0]?.status);
            if (result[0].status === true) {
                //toast.dismiss();

                toast.success(result[0]?.message, {
                    position: 'top-center',
                    autoClose: 5000,
                });
            }
            else {
                // toast.dismiss();
                toast.error(result[0]?.message, {
                    position: 'top-center',
                    autoClose: 5000,
                });
            }

            //  setResponseText(result);
        } catch (error) {
            // console.log("An error occurred while fetching data.", error);
        }
    };

    const validateEmail = (phoneNo) => {
        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const emailPattern = /^[^\s@]+@([^\s@]+\.)+[a-zA-Z]{2,}$/;
        // return emailPattern.test(phoneNo);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const [, domain] = phoneNo.split('@'); // Extracting the domain part
        return emailPattern.test(phoneNo.toLowerCase()) && domain === domain.toLowerCase();
    };

    const validateName = (name) => {
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);
    };


    const handleProceedClick = async () => {



        const fetchAPI = async () => {
            const tokenValue = localStorage.getItem('login api response token');
            const storedToken = JSON.parse(tokenValue);
            // console.log("plan pricing fgascdgasfghdfshj", storedToken);

            if (!storedToken) {
                // window.location.href = '#/login?from=plan_pricing';
                localStorage.setItem('fromPlanPricing', 'true');
                navigate('/login');

                return;
            }
            if (storedToken) {
                setToken(storedToken);
            }

            // console.log("hadle proceed click", storedToken);

            if (!name && !email && !phoneNo) {
                // toast.dismiss();
                // toast.error('Please fill out all fields.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Please fill out all fields.')
                return;
            }

            else if (!name) {
                //toast.dismiss();
                // toast.error('Please enter the name.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Please enter the name.')

                return;
            } else if (!email) {
                // toast.dismiss();
                // toast.error('Please enter the contact number.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Please enter the contact number.')
                return;
            }
            else if (!phoneNo) {
                // toast.dismiss()
                // toast.error('Please enter the email.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Please enter the email.')
                return;
            }

            else if (!isChecked) {
                //  toast.dismiss();
                // toast.error('Please agree to the terms and conditions.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Please agree to the terms and conditions.')
                return;
            }

            else if (!validateName(name)) {
                // toast.dismiss();
                // toast.error('Name should not contain numbers or special characters.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Name should not contain numbers or special characters.')
                return;
            }
            else if (!validateEmail(phoneNo)) {
                // toast.dismiss();
                // toast.error('Please enter a valid email address.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                setApiFailResponse('Please enter a valid email address.')
                return;
            }
            else {
                // toast.error('Please enter the email.', {
                //     position: 'top-center',
                //     autoClose: 5000,
                // });
                // ;return
                try {

                    const formdata = new FormData();
                    // console.log("plan form data response api 1", `${planDetails?.price}`, `${planDetails?.id}`);
                    // planDetails.price = 200000

                    // formdata.append("amount", planDetails.price);
                    formdata.append("amount", amount);
                    formdata.append("member_plan_id", planDetails?.id);
                    // console.log("plan form data response api 2", planDetails?.price, planDetails?.id);

                    const endpoint = `api/member-plan-payment`;

                    const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);
                    // if (result[0]?.status === true) {
                    //     console.log("result data member plan payment", result[0]?.data?.order_id);
                    //     setOrderId(result[0]?.data?.order_id)
                    //     handlePayment(result[0]?.data?.order_id);
                    // }
                    if (result?.status === true) {
                        setOrderId(result?.data?.order_id)
                        handlePayment(result?.data?.order_id);

                    }

                    // console.log('API member plan payment response:', result);
                } catch (error) {
                    // console.error('Error fetching API:', error);
                }
            }

            // console.log("phone numver", email, name, phoneNo, validateEmail(phoneNo))

        };
        fetchAPI();
    }

    //   useEffect(() => {
    //       if (isModalOpen === true || isSuccessModalOpen === true || isFailedModalOpen === true) {
    //           const modalElement = document.querySelector('.modals');
    //           if (modalElement) {
    //               const modalTop = modalElement.offsetTop;
    //               const screenHeight = window.innerHeight;
    //               const middleOfScreen = screenHeight / 2;
    //               const scrollPosition = modalTop - (screenHeight - modalElement.offsetHeight) / 2;
    //               window.scrollTo(0, scrollPosition);
    //           }
    //       }
    //   }, [isModalOpen, isSuccessModalOpen,isFailedModalOpen]);


    useEffect(() => {

        const navbar = document.querySelector('.navbar');
        const modalElement = document.querySelector('.modals');

        if (isModalOpen || isSuccessModalOpen || isFailedModalOpen) {
            // navbar.style.position = 'absolute';
            // document.body.style.overflow = 'hidden';
            navbar.style.position = 'static';
            //document.body.style.overflow = 'hidden';
            navbar.style.zIndex = 0;
        }
        if (modalElement) {
            const modalTop = modalElement.offsetTop;
            const screenHeight = window.innerHeight;
            const middleOfScreen = screenHeight / 2;
            const scrollPosition = modalTop - (screenHeight - modalElement.offsetHeight) / 2;
            window.scrollTo(0, scrollPosition);
        }
        //  else {
        //      document.body.style.overflow = 'auto';
        //      navbar.style.position = 'fixed';
        //  }

    }, [isModalOpen, isSuccessModalOpen, isFailedModalOpen]);





    return (
        <>

            <div className="flex relative justify-center items-center px-16 py-2 w-full max-md:px-5 max-md:max-w-full max-md:py-6"
                ref={titleRef}
            >
                <div className="flex z-10 flex-col mt-6 max-w-full w-[1296px] max-md:px-0">
                    <div
                        // className="self-center text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`self-center text-5xl font-medium max-md:w-full max-md:text-4xl ${isVisible ? '' : 'animation_fadeInRight1'}`}
                    >
                        <span className=" leading-[58px] text-zinc-800"

                        >Make My Business</span>{" "}

                        <span className="font-bold text-orange-500 leading-[58px]">
                            Growth Plan
                        </span>
                    </div>



                    <div className="justify-center mt-14 max-md:mt-5 max-md:px-5 max-sm:px-0  max-sm:mt-0 ">
                        <div className="flex max-md:flex-col max-md:gap-0 max-md:px-0 max-sm:px-0 ">

                            {/* {(data && data?.length > 0) ? ( */}
                            <>
                                <div className="text-start flex gap-5 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center max-md:mt-6 max-md:gap-5 " >
                                    {mmbPlanData.map((item, index) => {
                                        const numberWithIndianRupeeFormat = (number) => {
                                            const numberString = number.toString();

                                            // Split the string into groups of three digits from the right
                                            const groups = [];
                                            let remainingDigits = numberString.length % 3;
                                            if (remainingDigits === 0) remainingDigits = 3;
                                            groups.push(numberString.substr(0, remainingDigits));
                                            for (let i = remainingDigits; i < numberString.length; i += 3) {
                                                groups.push(numberString.substr(i, 3));
                                            }

                                            // Join the groups with commas and prepend ₹ symbol
                                            const formattedNumber = '₹' + " " + groups.join(',');

                                            return formattedNumber;
                                        };

                                        const itemsJSX = mmbPlanData.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 justify-between mt-5 ">
                                                {/* <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                                                    <img
                                                        alt=''
                                                        loading="lazy"
                                                        src={Images.pp_green_clr}
                                                        className="w-full aspect-square"
                                                    />
                                                </div> */}
                                                <div className="grow text-base text-zinc-600">
                                                    {/* {feature.feature1} */}
                                                    In Ahmedabad :-  {feature.onSitePrice} + GST
                                                    <br />
                                                    In Outside Ahmedabad :- {feature.outSitePrice} + GST
                                                </div>
                                            </div>
                                        ));

                                        const itemName = item?.name?.replace('Make My Business', '');

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                                onClick={() => navigate('/make_my_business')}
                                            >
                                                <div
                                                    className='cursor-pointer rounded-t-3xl border border-t-4 border-x-0 border-b-0 group-hover:border-orange-500 h-full transition-colors duration-300'
                                                    style={{ maxHeight: '-webkit-fill-available !important' }}
                                                >
                                                    <div
                                                        style={{ height: 'inherit ' }}
                                                        className="flex flex-col bg-[#fff9f5] p-8 xl:p-8 lg:p-8 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                                    >
                                                        <div className="flex gap-5 justify-between ">
                                                            <div

                                                                className='flex justify-center items-center w-16 h-16 max-sm:w-10 max-sm:h-10'
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    src={Images.pp_logo}

                                                                    className="w-full h-full aspect-square"
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                                <div className="grow text-4xl font-bold text-orange-500 max-sm:text-4xl">
                                                                    ₹ {" "} {item?.price} {" "}
                                                                    {/* {numberWithIndianRupeeFormat(item?.price)} */}
                                                                </div>
                                                                <div className="self-end mt-7 ml-2 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                    {" "} + GST
                                                                    {/* /{item?.validity} */}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="mt-8 primary_black_clr text-wrap">
                                                            <span className="text-zinc-600 font-semibold text-base">{item?.title1}</span>
                                                            <br />
                                                            <span className="text-orange-500  text-3xl">{item?.title2}</span>
                                                        </div>
                                                        <div className="mt-2 text-lg text-zinc-600  text-wrap">

                                                            {item?.desc}
                                                        </div>
                                                        {/* <div

                                                                onClick={() => openModal(item)}
                                                                className="hover-change cursor-pointer flex px-8 hover:bg-orange-500 hover:text-white exit flex gap-3 justify-center self-start py-2.5 mt-8 text-base font-medium text-orange-500 rounded-lg border border-solid border-[color:var(--primary-orange-f-6821-f,#F6821F)] max-md:px-5"
                                                            >

                                                                <div className="select">Book Now</div>
                                                                <img
                                                                    loading="lazy"
                                                                    data-src-hover={Images.arr_right_white_clr}
                                                                    src={Images.arr_right_orange_clr}
                                                                    className="my-auto w-4 aspect-square"
                                                                    alt=''
                                                                />
                                                            </div> */}
                                                        {/* <hr className='my-5 max-sm:mb-4 border-orange-400' />
                                                        <div className='grow'>
                                                            <div className="flex gap-3 justify-between mt-1">
                                                                <div className="grow text-base text-zinc-600">
                                                                    In Ahmedabad :-  {item?.onSitePrice} + GST
                                                                    <br />
                                                                    In Outside Ahmedabad :- {item?.outSitePrice} + GST
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            {/* ) : (

                                <>
                                    <div className='bg-white p-10  w-full flex items-center justify-center text-orange-500 w-full text-2xl'>
                                        {(!data || data?.length === 0) && "Our Server is on Maintenance Mode. Please Visit After Sometimes ..."}
                                    </div>
                                </>
                            )} */}

                        </div>

                        {/* </div> */}




                        {/* </div> */}


                    </div>



                    <ToastContainer />
                </div>
            </div>

            <div className="flex relative justify-center items-center px-16 py-2 w-full max-md:px-5 max-md:max-w-full max-md:py-6"
                ref={titleRef}
            >
                <div className="flex z-10 flex-col mt-6 max-w-full w-[1296px] max-md:px-0">
                    <div
                        // className="self-center text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`self-center text-5xl font-medium max-md:w-full max-md:text-4xl ${isVisible ? '' : 'animation_fadeInRight1'}`}
                    >
                        <span className=" leading-[58px] text-zinc-800"

                        >Startup</span>{" "}

                        <span className="font-bold text-orange-500 leading-[58px]">
                            Plan
                        </span>
                    </div>



                    <div className="justify-center mt-14 max-md:mt-5 max-md:px-5 max-sm:px-0  max-sm:mt-0 ">
                        <div className="flex max-md:flex-col max-md:gap-0 max-md:px-0 max-sm:px-0 ">

                            {/* {(data && data?.length > 0) ? ( */}
                            <>
                                <div className="text-start flex gap-5 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center max-md:mt-6 max-md:gap-5 " >
                                    {startupPlanData.map((item, index) => {
                                        const numberWithIndianRupeeFormat = (number) => {
                                            const numberString = number.toString();

                                            // Split the string into groups of three digits from the right
                                            const groups = [];
                                            let remainingDigits = numberString.length % 3;
                                            if (remainingDigits === 0) remainingDigits = 3;
                                            groups.push(numberString.substr(0, remainingDigits));
                                            for (let i = remainingDigits; i < numberString.length; i += 3) {
                                                groups.push(numberString.substr(i, 3));
                                            }

                                            // Join the groups with commas and prepend ₹ symbol
                                            const formattedNumber = '₹' + " " + groups.join(',');

                                            return formattedNumber;
                                        };

                                        const itemsJSX = startupPlanData.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 justify-between mt-5 ">
                                                {/* <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                                                    <img
                                                        alt=''
                                                        loading="lazy"
                                                        src={Images.pp_green_clr}
                                                        className="w-full aspect-square"
                                                    />
                                                </div> */}
                                                <div className="grow text-base text-zinc-600">
                                                    {/* {feature.feature1} */}
                                                    In Ahmedabad :-  {feature.onSitePrice} + GST
                                                    <br />
                                                    In Outside Ahmedabad :- {feature.outSitePrice} + GST
                                                </div>
                                            </div>
                                        ));

                                        const itemName = item?.name?.replace('Make My Business', '');

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                                onClick={() => navigate('/start_up')}
                                            >
                                                <div
                                                    className='cursor-pointer rounded-t-3xl border border-t-4 border-x-0 border-b-0 group-hover:border-orange-500 h-full transition-colors duration-300'
                                                    style={{ maxHeight: '-webkit-fill-available !important' }}
                                                >
                                                    <div
                                                        style={{ height: 'inherit ' }}
                                                        className="flex flex-col bg-[#fff9f5] p-8 xl:p-8 lg:p-8 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                                    >
                                                        <div className="flex gap-5 justify-between ">
                                                            <div

                                                                className='flex justify-center items-center w-20 h-9 max-sm:w-20 max-sm:h-10'
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    src={Images.startup_logo}

                                                                    className="w-full h-full aspect-square"
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                                <div className="grow text-4xl font-bold text-orange-500 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl">
                                                                    ₹ {" "} {item?.price} {" "}
                                                                    {/* {numberWithIndianRupeeFormat(item?.price)} */}
                                                                </div>
                                                                <div className="self-end mt-7 ml-2 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                    {" "} + GST
                                                                    {/* /{item?.validity} */}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="mt-8 primary_black_clr text-wrap">
                                                            <span className="text-zinc-600 font-semibold text-base">{item?.title1}</span>
                                                            <br />
                                                            <span className="text-orange-500  text-3xl">{item?.title2}</span>
                                                        </div>
                                                        <div className="mt-2 text-lg text-zinc-600  text-wrap">

                                                            {item?.desc}
                                                        </div>
                                                        {/* <div

                                                                onClick={() => openModal(item)}
                                                                className="hover-change cursor-pointer flex px-8 hover:bg-orange-500 hover:text-white exit flex gap-3 justify-center self-start py-2.5 mt-8 text-base font-medium text-orange-500 rounded-lg border border-solid border-[color:var(--primary-orange-f-6821-f,#F6821F)] max-md:px-5"
                                                            >

                                                                <div className="select">Book Now</div>
                                                                <img
                                                                    loading="lazy"
                                                                    data-src-hover={Images.arr_right_white_clr}
                                                                    src={Images.arr_right_orange_clr}
                                                                    className="my-auto w-4 aspect-square"
                                                                    alt=''
                                                                />
                                                            </div> */}
                                                        <hr className='my-5 max-sm:mb-4 border-orange-400' />
                                                        <div className='grow'>
                                                            <div className="flex gap-3 justify-between mt-1">
                                                                <div className="grow text-base text-zinc-600">
                                                                    In Ahmedabad :-  <span className='text-gray-600 font-bold text-xl'>₹ {" "} {item?.onSitePrice} </span>  <span className="self-end mt-7 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                        {" "} + GST
                                                                    </span>
                                                                    <br />
                                                                    Within Gujarat :- <span className='text-gray-600 font-bold text-xl'>₹ {" "} {item?.outSitePrice} </span> <span className="self-end mt-7 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                        {" "} + GST
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            {/* ) : (

                                <>
                                    <div className='bg-white p-10  w-full flex items-center justify-center text-orange-500 w-full text-2xl'>
                                        {(!data || data?.length === 0) && "Our Server is on Maintenance Mode. Please Visit After Sometimes ..."}
                                    </div>
                                </>
                            )} */}

                        </div>

                        {/* </div> */}




                        {/* </div> */}


                    </div>



                    <ToastContainer />
                </div>
            </div>

            <div className="flex relative justify-center items-center px-16 py-2 w-full max-md:px-5 max-md:max-w-full max-md:py-6"
                ref={titleRef}
            >
                <div className="flex z-10 flex-col mt-6 max-w-full w-[1296px] max-md:px-0">
                    <div
                        // className="self-center text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`self-center text-5xl font-medium max-md:w-full max-md:text-4xl ${isVisible ? '' : 'animation_fadeInRight1'}`}
                    >
                        <span className=" leading-[58px] text-zinc-800"

                        >Individual Development Program</span>{" "}

                        <span className="font-bold text-orange-500 leading-[58px]">
                            Plan
                        </span>
                    </div>



                    <div className="justify-center mt-14 max-md:mt-5 max-md:px-5 max-sm:px-0  max-sm:mt-0 ">
                        <div className="max-md:gap-0 max-md:px-0 max-sm:px-0 ">

                            {/* {(data && data?.length > 0) ? ( */}
                            <>
                                <div className="text-start flex gap-5 grid grid-cols-1 justify-center max-md:mt-6 max-md:gap-5 " >
                                    {idpPlanData.map((item, index) => {
                                        const numberWithIndianRupeeFormat = (number) => {
                                            const numberString = number.toString();

                                            // Split the string into groups of three digits from the right
                                            const groups = [];
                                            let remainingDigits = numberString.length % 3;
                                            if (remainingDigits === 0) remainingDigits = 3;
                                            groups.push(numberString.substr(0, remainingDigits));
                                            for (let i = remainingDigits; i < numberString.length; i += 3) {
                                                groups.push(numberString.substr(i, 3));
                                            }

                                            // Join the groups with commas and prepend ₹ symbol
                                            const formattedNumber = '₹' + " " + groups.join(',');

                                            return formattedNumber;
                                        };

                                        const itemsJSX = idpPlanData.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 justify-between mt-5 ">
                                                {/* <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                                                    <img
                                                        alt=''
                                                        loading="lazy"
                                                        src={Images.pp_green_clr}
                                                        className="w-full aspect-square"
                                                    />
                                                </div> */}
                                                <div className="grow text-base text-zinc-600">
                                                    {/* {feature.feature1} */}
                                                    In Ahmedabad :-  {feature.onSitePrice} + GST
                                                    <br />
                                                    In Outside Ahmedabad :- {feature.outSitePrice} + GST
                                                </div>
                                            </div>
                                        ));

                                        const itemName = item?.name?.replace('Make My Business', '');

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                                onClick={() => navigate('/idb')}
                                            >
                                                <div
                                                    className='cursor-pointer rounded-t-3xl border border-t-4 border-x-0 border-b-0 group-hover:border-orange-500 h-full transition-colors duration-300'
                                                    style={{ maxHeight: '-webkit-fill-available !important' }}
                                                >
                                                    <div
                                                        style={{ height: 'inherit ' }}
                                                        className="flex flex-col bg-[#fff9f5] p-8 xl:p-8 lg:p-8 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                                    >
                                                        <div className="flex gap-5 justify-between ">
                                                            <div

                                                                className='flex justify-center items-center w-24 h-24 max-sm:w-24 max-sm:h-16'
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    src={Images.idp_logo}

                                                                    className="w-full h-full aspect-square"
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                                <div className="grow text-4xl font-bold text-orange-500 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl">
                                                                    ₹ {" "} {item?.price} {" "}
                                                                    {/* {numberWithIndianRupeeFormat(item?.price)} */}
                                                                </div>
                                                                <div className="self-end mt-7 ml-2 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                    {" "} + GST
                                                                    {/* /{item?.validity} */}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between text-wrap">
                                                            {/* Left: Titles */}
                                                            <div>
                                                                <span className="text-orange-500 font-semibold text-2xl">{item?.title1}</span>
                                                                <br />
                                                                <span className="text-zinc-600 text-lg">{item?.desc}</span>
                                                            </div>
                                                            {/* Right: Prices (hidden on small, flex on large) */}
                                                            <div className="hidden lg:flex flex-col text-right gap-1">
                                                                <div className="text-base text-zinc-600">
                                                                    In Ahmedabad: <span className="text-gray-600 font-bold text-xl">₹ {" "}{item?.onSitePrice}</span><span className="self-end mt-7 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                        {" "} + GST
                                                                    </span>
                                                                </div>
                                                                <div className="text-base text-zinc-600">
                                                                    Within Gujarat: <span className="text-gray-600 font-bold text-xl">₹ {" "}{item?.outSitePrice}</span><span className="self-end mt-7 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                        {" "} + GST
                                                                    </span>
                                                                </div>
                                                                <div className="text-base text-zinc-600">
                                                                    Within India: <span className="text-gray-600 font-bold text-xl">₹ {" "}{item?.outStatePrice}</span><span className="self-end mt-7 text-zinc-600 font-semibold text-base lg:mt-1">
                                                                        {" "} + GST
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* For small screens, keep your old price block below (visible only on small screens) */}
                                                        <div className="lg:hidden mt-2">
                                                            <hr className='my-3 max-sm:mb-4 border-orange-400' />
                                                            <div className="text-base text-zinc-600">
                                                                In Ahmedabad: <span className="text-gray-600 font-bold text-xl">{item?.onSitePrice} + GST</span>
                                                                <br />
                                                                Within Gujarat: <span className="text-gray-600 font-bold text-xl">{item?.outSitePrice} + GST</span>
                                                                <br />
                                                                Within India: <span className="text-gray-600 font-bold text-xl">{item?.outStatePrice} + GST</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            {/* ) : (

                                <>
                                    <div className='bg-white p-10  w-full flex items-center justify-center text-orange-500 w-full text-2xl'>
                                        {(!data || data?.length === 0) && "Our Server is on Maintenance Mode. Please Visit After Sometimes ..."}
                                    </div>
                                </>
                            )} */}

                        </div>

                        {/* </div> */}




                        {/* </div> */}


                    </div>



                    <ToastContainer />
                </div>
            </div>

            <div className="flex relative justify-center items-center px-16 py-2 w-full max-md:px-5 max-md:max-w-full max-md:py-6"
                ref={titleRef}
            >
                <div className="flex z-10 flex-col mt-6 max-w-full w-[1296px] max-md:px-0">
                    <div
                        // className="self-center text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`self-center text-5xl font-medium max-md:w-full max-md:text-4xl ${isVisible ? '' : 'animation_fadeInRight1'}`}
                    >
                        <span className=" leading-[58px] text-zinc-800"

                        >Revision</span>{" "}

                        <span className="font-bold text-orange-500 leading-[58px]">
                            Batch
                        </span>
                    </div>



                    <div className="justify-center mt-14 max-md:mt-5 max-md:px-5 max-sm:px-0  max-sm:mt-0 ">
                        <div className="max-md:gap-0 max-md:px-0 max-sm:px-0 ">

                            {/* {(data && data?.length > 0) ? ( */}
                            <>
                                <div className="text-start flex gap-5 grid grid-cols-1 justify-center max-md:mt-6 max-md:gap-5 " >
                                    {revisionBatchData.map((item, index) => {
                                        const numberWithIndianRupeeFormat = (number) => {
                                            const numberString = number.toString();

                                            // Split the string into groups of three digits from the right
                                            const groups = [];
                                            let remainingDigits = numberString.length % 3;
                                            if (remainingDigits === 0) remainingDigits = 3;
                                            groups.push(numberString.substr(0, remainingDigits));
                                            for (let i = remainingDigits; i < numberString.length; i += 3) {
                                                groups.push(numberString.substr(i, 3));
                                            }

                                            // Join the groups with commas and prepend ₹ symbol
                                            const formattedNumber = '₹' + " " + groups.join(',');

                                            return formattedNumber;
                                        };

                                        const itemsJSX = revisionBatchData.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 justify-between mt-5 ">
                                                {/* <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                                                    <img
                                                        alt=''
                                                        loading="lazy"
                                                        src={Images.pp_green_clr}
                                                        className="w-full aspect-square"
                                                    />
                                                </div> */}
                                                <div className="grow text-base text-zinc-600">
                                                    {/* {feature.feature1} */}
                                                    In Ahmedabad :-  {feature.onSitePrice} + GST
                                                    <br />
                                                    In Outside Ahmedabad :- {feature.outSitePrice} + GST
                                                </div>
                                            </div>
                                        ));

                                        const itemName = item?.name?.replace('Make My Business', '');

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                            >
                                                <div
                                                    className='cursor-pointer rounded-t-3xl border border-t-4 border-x-0 border-b-0 group-hover:border-orange-500 h-full transition-colors duration-300'
                                                    style={{ maxHeight: '-webkit-fill-available !important' }}
                                                >
                                                    <div
                                                        style={{ height: 'inherit ' }}
                                                        className="flex bg-[#fff9f5] flex-col p-8 xl:p-8 lg:p-8 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                                    >
                                                        <div className="flex gap-5 justify-between ">
                                                            {/* <div

                                                                className='flex justify-center items-center w-24 h-24 max-sm:w-24 max-sm:h-16'
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    src={Images.idp_logo}

                                                                    className="w-full h-full aspect-square"
                                                                    alt=''
                                                                />
                                                            </div> */}
                                                            {/* <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                               
                                                            </div> */}

                                                        </div>
                                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-wrap">
                                                            {/* Left: Titles */}
                                                            <div>
                                                                <span className="text-orange-500 font-semibold text-2xl">{item?.title1}</span>
                                                                <br />
                                                                <span className="text-zinc-600 text-lg">{item?.desc}</span>
                                                            </div>
                                                            {/* Right: Prices (hidden on small, flex on large) */}
                                                            <div className="lg:flex flex-col text-right gap-1">
                                                                <div className="grow text-4xl font-bold text-orange-500 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl">
                                                                    ₹ {" "} {item?.price} {" "}
                                                                    <span className="self-end text-zinc-600 font-semibold text-base lg:mt-1"> + GST
                                                                        {/* /{item?.validity} */}
                                                                    </span>
                                                                    {/* {numberWithIndianRupeeFormat(item?.price)} */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            {/* ) : (

                                <>
                                    <div className='bg-white p-10  w-full flex items-center justify-center text-orange-500 w-full text-2xl'>
                                        {(!data || data?.length === 0) && "Our Server is on Maintenance Mode. Please Visit After Sometimes ..."}
                                    </div>
                                </>
                            )} */}

                        </div>

                        {/* </div> */}




                        {/* </div> */}


                    </div>



                    <ToastContainer />
                </div>
            </div>

            <div className="flex relative justify-center items-center px-16 py-2 w-full max-md:px-5 max-md:max-w-full max-md:py-6"
                ref={titleRef}
            >
                <div className="flex z-10 flex-col mt-6 max-w-full w-[1296px] max-md:px-0">
                    <div
                        // className="self-center text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`self-center text-5xl font-medium max-md:w-full max-md:text-4xl ${isVisible ? '' : 'animation_fadeInRight1'}`}
                    >
                        <span className=" leading-[58px] text-zinc-800"

                        >Stay Aware & Alive Recharge Renewal</span>{" "}

                        <span className="font-bold text-orange-500 leading-[58px]">
                            Program
                        </span>
                    </div>



                    <div className="justify-center mt-14 max-md:mt-5 max-md:px-5 max-sm:px-0  max-sm:mt-0 ">
                        <div className="max-md:gap-0 max-md:px-0 max-sm:px-0 ">

                            {/* {(data && data?.length > 0) ? ( */}
                            <>
                                <div className="text-start flex gap-5 grid grid-cols-1 justify-center max-md:mt-6 max-md:gap-5 " >
                                    {refreshRenewalData.map((item, index) => {
                                        const numberWithIndianRupeeFormat = (number) => {
                                            const numberString = number.toString();

                                            // Split the string into groups of three digits from the right
                                            const groups = [];
                                            let remainingDigits = numberString.length % 3;
                                            if (remainingDigits === 0) remainingDigits = 3;
                                            groups.push(numberString.substr(0, remainingDigits));
                                            for (let i = remainingDigits; i < numberString.length; i += 3) {
                                                groups.push(numberString.substr(i, 3));
                                            }

                                            // Join the groups with commas and prepend ₹ symbol
                                            const formattedNumber = '₹' + " " + groups.join(',');

                                            return formattedNumber;
                                        };

                                        const itemsJSX = refreshRenewalData.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 justify-between mt-5 ">
                                                {/* <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                                                    <img
                                                        alt=''
                                                        loading="lazy"
                                                        src={Images.pp_green_clr}
                                                        className="w-full aspect-square"
                                                    />
                                                </div> */}
                                                <div className="grow text-base text-zinc-600">
                                                    {/* {feature.feature1} */}
                                                    In Ahmedabad :-  {feature.onSitePrice} + GST
                                                    <br />
                                                    In Outside Ahmedabad :- {feature.outSitePrice} + GST
                                                </div>
                                            </div>
                                        ));

                                        const itemName = item?.name?.replace('Make My Business', '');

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                            >
                                                <div
                                                    className='cursor-pointer rounded-t-3xl border border-t-4 border-x-0 border-b-0 group-hover:border-orange-500 h-full transition-colors duration-300'
                                                    style={{ maxHeight: '-webkit-fill-available !important' }}
                                                >
                                                    <div
                                                        style={{ height: 'inherit ' }}
                                                        className="flex bg-[#fff9f5] flex-col p-8 xl:p-8 lg:p-8 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                                    >
                                                        <div className="flex gap-5 justify-between ">
                                                            {/* <div

                                                                className='flex justify-center items-center w-24 h-24 max-sm:w-24 max-sm:h-16'
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    src={Images.idp_logo}

                                                                    className="w-full h-full aspect-square"
                                                                    alt=''
                                                                />
                                                            </div> */}
                                                            {/* <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                               
                                                            </div> */}

                                                        </div>
                                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-wrap">
                                                            {/* Left: Titles */}
                                                            <div>
                                                                <span className="text-orange-500 font-semibold text-2xl">{item?.title1}</span>
                                                                <br />
                                                                <span className="text-zinc-600 text-lg">{item?.desc}</span>
                                                            </div>
                                                            {/* Right: Prices (hidden on small, flex on large) */}
                                                            <div className="lg:flex flex-col text-right gap-1">
                                                                <div className="grow text-4xl font-bold text-orange-500 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl">
                                                                    ₹ {" "} {item?.price} {" "}
                                                                    <span className="self-end text-zinc-600 font-semibold text-base lg:mt-1"> + GST
                                                                        {/* /{item?.validity} */}
                                                                    </span>
                                                                    {/* {numberWithIndianRupeeFormat(item?.price)} */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            {/* ) : (

                                <>
                                    <div className='bg-white p-10  w-full flex items-center justify-center text-orange-500 w-full text-2xl'>
                                        {(!data || data?.length === 0) && "Our Server is on Maintenance Mode. Please Visit After Sometimes ..."}
                                    </div>
                                </>
                            )} */}

                        </div>

                        {/* </div> */}




                        {/* </div> */}


                    </div>



                    <ToastContainer />
                </div>
            </div>

               <div className="flex relative justify-center items-center px-16 py-2 w-full max-md:px-5 max-md:max-w-full max-md:py-6"
                ref={titleRef}
            >
                <div className="flex z-10 flex-col mt-6 max-w-full w-[1296px] max-md:px-0">
                    <div
                        // className="self-center text-5xl font-medium max-md:max-w-full max-md:text-4xl"
                        className={`self-center text-5xl font-medium max-md:w-full max-md:text-4xl ${isVisible ? '' : 'animation_fadeInRight1'}`}
                    >
                        <span className=" leading-[58px] text-zinc-800"

                        >One Time Meeting With</span>{" "}

                        <span className="font-bold text-orange-500 leading-[58px]">
                            Paresh Sir
                        </span>
                    </div>



                    <div className="justify-center mt-14 max-md:mt-5 max-md:px-5 max-sm:px-0  max-sm:mt-0 ">
                        <div className="max-md:gap-0 max-md:px-0 max-sm:px-0 ">

                            {/* {(data && data?.length > 0) ? ( */}
                            <>
                                <div className="text-start flex gap-5 grid grid-cols-1 justify-center max-md:mt-6 max-md:gap-5 " >
                                    {oneTimeMeetingData.map((item, index) => {
                                        const numberWithIndianRupeeFormat = (number) => {
                                            const numberString = number.toString();

                                            // Split the string into groups of three digits from the right
                                            const groups = [];
                                            let remainingDigits = numberString.length % 3;
                                            if (remainingDigits === 0) remainingDigits = 3;
                                            groups.push(numberString.substr(0, remainingDigits));
                                            for (let i = remainingDigits; i < numberString.length; i += 3) {
                                                groups.push(numberString.substr(i, 3));
                                            }

                                            // Join the groups with commas and prepend ₹ symbol
                                            const formattedNumber = '₹' + " " + groups.join(',');

                                            return formattedNumber;
                                        };

                                        const itemsJSX = oneTimeMeetingData.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 justify-between mt-5 ">
                                                {/* <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-green-100 aspect-square rounded-[100px]">
                                                    <img
                                                        alt=''
                                                        loading="lazy"
                                                        src={Images.pp_green_clr}
                                                        className="w-full aspect-square"
                                                    />
                                                </div> */}
                                                <div className="grow text-base text-zinc-600">
                                                    {/* {feature.feature1} */}
                                                    In Ahmedabad :-  {feature.onSitePrice} + GST
                                                    <br />
                                                    In Outside Ahmedabad :- {feature.outSitePrice} + GST
                                                </div>
                                            </div>
                                        ));

                                        const itemName = item?.name?.replace('Make My Business', '');

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                            >
                                                <div
                                                    className='cursor-pointer rounded-t-3xl border border-t-4 border-x-0 border-b-0 group-hover:border-orange-500 h-full transition-colors duration-300'
                                                    style={{ maxHeight: '-webkit-fill-available !important' }}
                                                >
                                                    <div
                                                        style={{ height: 'inherit ' }}
                                                        className="flex bg-[#fff9f5] flex-col p-8 xl:p-8 lg:p-8 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                                    >
                                                        <div className="flex gap-5 justify-between ">
                                                            {/* <div

                                                                className='flex justify-center items-center w-24 h-24 max-sm:w-24 max-sm:h-16'
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    src={Images.idp_logo}

                                                                    className="w-full h-full aspect-square"
                                                                    alt=''
                                                                />
                                                            </div> */}
                                                            {/* <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                               
                                                            </div> */}

                                                        </div>
                                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-wrap">
                                                            {/* Left: Titles */}
                                                            <div>
                                                                <span className="text-orange-500 font-semibold text-2xl">{item?.title1}</span>
                                                                <br />
                                                                <span className="text-zinc-600 text-lg">{item?.desc}</span>
                                                            </div>
                                                            {/* Right: Prices (hidden on small, flex on large) */}
                                                            <div className="lg:flex flex-col text-right gap-1">
                                                                <div className="grow text-4xl font-bold text-orange-500 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl">
                                                                    ₹ {" "} {item?.price} {" "}
                                                                    <span className="self-end text-zinc-600 font-semibold text-base lg:mt-1"> + GST
                                                                        {/* /{item?.validity} */}
                                                                    </span>
                                                                    {/* {numberWithIndianRupeeFormat(item?.price)} */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            {/* ) : (

                                <>
                                    <div className='bg-white p-10  w-full flex items-center justify-center text-orange-500 w-full text-2xl'>
                                        {(!data || data?.length === 0) && "Our Server is on Maintenance Mode. Please Visit After Sometimes ..."}
                                    </div>
                                </>
                            )} */}

                        </div>

                        {/* </div> */}




                        {/* </div> */}


                    </div>



                    <ToastContainer />
                </div>
            </div>


            {/* {isModalOpen && (
                <div

                    style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
                     className=" backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0"
                    // className="    backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0"
                >

                    <div className=' bg-white rounded-2xl max-md:h-full w-full max-w-5xl zoom_in_pp_modal h-full '>
                    <div className="  w-full max-w-5xl rounded-2xl zoom_in_pp_modal max-h-full h-full ">
                        <div className="modals bg-white rounded-2xl shadow-lg  p-6  max-h-full h-full overflow-y-auto">

                            <div className='flex items-center justify-center pb-5'>
                                <div className=' text-2xl font-semibold w-full text-left'>Order Summary</div>
                                <div className='w-auto text-end '>
                                    <button type="button"
                                        className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center"
                                        onClick={closeModal} data-modal-hide="popup-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full flex flex-row divide-x border p-5 rounded-lg max-lg:flex-col max-lg:divide-y max-lg:divide-x-0 '>
                                <div className="p-4 md:p-5 text-center max-sm:p-1.5  w-full">
                                    <div
                                        className="flex flex-col max-lg:ml-0 max-lg:w-auto justify-end   " >
                                        <div 
                                           
                                        >
                                            <div
                                                style={{ height: 'inherit ' }}
                                                className="items-start flex flex-col grow  w-full bg-white rounded-3xl  max-lg:max-w-full">
                                                <div className="flex gap-5 justify-between ">
                                                    <div
                                                        className='flex justify-center items-center px-3 w-16 h-16 max-sm:w-10 max-sm:h-10 py-3 rounded-lg bg-orange-50'
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src={Images.ppcube_icon}
                                                            className="w-full h-full aspect-square"
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className="flex gap-0 justify-center my-auto text-center whitespace-nowrap items-center">
                                                        <div className="grow text-4xl font-bold text-orange-500 max-sm:text-3xl">
                                                           
                                                            {numberWithIndianRupeeFormatModal(planDetails?.price)}
                                                        </div>
                                                        <div className="self-end mt-7 text-base text-zinc-800 lg:mt-1 max-sm:text-sm">
                                                            /{planDetails?.validity}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-8 text-2xl font-medium primary_black_clr text-wrap">
                                                    <span className="text-orange-500">{modalTitleName}</span>
                                                </div>
                                                <div className="mt-2 text-base text-zinc-600  max-sm:text-wrap text-left">
                                                    {planDetails?.sort_desc}
                                                </div>
                                                <hr className='my-5' />
                                                <div className=' flex flex-wrap grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full items-center'>
                                                  
                                                    {modalFeaturesJSX}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                    <div className="w-auto ps-5 text-center max-sm:ps-0 max-mdlg:mt-5  max-sm:ps-0">
                                        <div
                                            className="flex flex-col max-lg:ml-0 max-md:w-full justify-end h-full  " style={{ maxHeight: '-webkit-fill-available !important' }}>
                                            <div className='flex flex-col justify-between  border-0 h-full divide-y px-4'
                                                style={{ maxHeight: '-webkit-fill-available !important' }}
                                            >
                                                <div

                                                    className=" items-start flex flex-col w-full bg-white  max-lg:max-w-full py-8">
                                                    <div className=" mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-sm:mr-0 max-md:max-w-full font-medium">
                                                        Name
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        className="w-full py-3 pr-4 pl-4 mt-1.5 mr- text-base max-sm:mr-0 shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                                        onChange={(e) => setName(e.target.value)}
                                                    />

                                                    <div className="mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full  font-medium max-sm:mr-0">
                                                        Email
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder=''
                                                        value={phoneNo}
                                                        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
                                                        className="w-full py-3 pr-4 pl-4 mt-1.5  text-base shrink-0 max-sm:mr-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                                        // onChange={(e) => setPhoneNo(e.target.value)}
                                                        onChange={(e) => setPhoneNo(e.target.value.toLowerCase())}
                                                    />


                                                    <div className="mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full  font-medium">
                                                        Phone
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder=""
                                                        required
                                                        value={userPhoneno}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-lg:max-w-full focus:border-gray-200 focus:ring-0"

                                                    />

                                                    <div className="flex gap-2 mt-5 justify-between items-center text-sm text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                                        <input type="checkbox" id="checkbox-1"
                                                            className="w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-0"
                                                            required
                                                            checked={isChecked}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="checkbox-1" className="flex-auto max-md:max-w-full max-w"
                                                            style={{ width: 'max-content' }}
                                                        >
                                                            Agree with terms & conditions
                                                            <span className='text-red-500'>*</span>
                                                        </label>

                                                    </div>

                                                </div>

                                                <div className='divide-y'>
                                                    <div className=' py-6'>
                                                        <div className='flex flex-col flex-wrap'>
                                                            <div className='flex justify-between items-center my-2 '>
                                                                <div className='text-gray-500'> SubTotal</div>
                                                                <div>{numberWithIndianRupeeFormatModal(planDetails?.price)}</div>
                                                            </div>
                                                            <div className='flex justify-between items-center text-left text-sm'>
                                                                <div className='text-gray-500 '> GST (18% of SubTotal)</div>
                                                                <div>₹ {calculateGST(planDetails?.price)}</div>
                                                            </div>
                                                            <div className='flex justify-between items-center mt-2'>
                                                                <div> Total</div>
                                                                <div>{numberWithIndianRupeeFormatModal(planDetails?.price + calculateGST(planDetails?.price))}</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='pt-6 text-center'>
                                                        <button
                                                            onClick={() => handleProceedClick()}
                                                            data-modal-hide="popup-modal" type="button"
                                                            className="justify-center w-full text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:bg-orange-500 text-center font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                        >

                                                            Proceed
                                                        </button>
                                                    </div>
                                                    <div className='text-start'>
                                                        {apiSuccessResponse ? (
                                                            <div className="  text-green-500 text-sm font-medium mt-5">
                                                                {apiSuccessResponse}
                                                            </div>
                                                        )
                                                            :

                                                            <div className=" text-red-500 text-sm font-medium mt-5">
                                                                {apiFailResponse}
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                             

                            </div>

                        </div>


                        </div>
                    </div>
                </div>
            )} */}
            {isModalOpen && (
                <div
                    style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
                    className="backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
                >
                    <div className="modals w-full max-w-5xl rounded-2xl zoom_in_pp_modal">
                        <div className="bg-white rounded-2xl shadow-lg p-6 ">
                            <div className='flex items-center justify-between pb-5'>
                                <div className='text-2xl font-semibold w-full text-left'>Order Summary</div>
                                <div className='w-auto text-end'>
                                    <button type="button"
                                        className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 inline-flex justify-center items-center"
                                        onClick={closeModal} data-modal-hide="popup-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full flex flex-row divide-x border p-5 rounded-lg max-lg:flex-col max-lg:divide-y max-lg:divide-x-0'>
                                <div className="p-4 md:p-5 text-center max-sm:p-1.5 w-full">
                                    <div className="flex flex-col max-lg:ml-0 max-lg:w-auto justify-end">
                                        <div className="items-start flex flex-col grow w-full bg-white rounded-3xl">
                                            <div className="flex gap-5 justify-between">
                                                <div className='flex justify-center items-center px-3 w-16 h-16 max-sm:w-10 max-sm:h-10 py-3 rounded-lg bg-orange-50'>
                                                    <img loading="lazy" src={Images.ppcube_icon} className="w-full h-full aspect-square" alt='' />
                                                </div>
                                                <div className="flex gap-0 justify-center my-auto text-center whitespace-nowrap items-center">
                                                    <div className="grow text-4xl font-bold text-orange-500 max-sm:text-3xl">
                                                        {numberWithIndianRupeeFormatModal(planDetails?.price)}
                                                    </div>
                                                    <div className="self-end mt-7 text-base text-zinc-800 lg:mt-1 max-sm:text-sm">
                                                        /{planDetails?.validity}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8 text-2xl font-medium primary_black_clr text-wrap">
                                                <span className="text-orange-500">{modalTitleName}</span>
                                            </div>
                                            <div className="mt-2 text-base text-zinc-600 max-sm:text-wrap text-left">
                                                {planDetails?.sort_desc}
                                            </div>
                                            <hr className='my-5' />
                                            <div className='flex flex-wrap grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full items-center'>
                                                {modalFeaturesJSX}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-auto ps-5 text-center max-sm:ps-0 max-mdlg:mt-5 max-sm:ps-0">
                                    <div className="flex flex-col max-lg:ml-0 max-md:w-full justify-end h-full" style={{ maxHeight: '-webkit-fill-available !important' }}>
                                        <div className='flex flex-col justify-between border-0 h-full divide-y px-4' style={{ maxHeight: '-webkit-fill-available !important' }}>
                                            <div className="items-start flex flex-col w-full bg-white max-lg:max-w-full py-8">
                                                <div className="mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-sm:mr-0 max-md:max-w-full font-medium">
                                                    Name
                                                </div>
                                                <input type="text" name="name" required className="w-full py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-gray-300 focus:border-gray-200 focus:ring-0" onChange={(e) => setName(e.target.value)} />

                                                <div className="mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full font-medium max-sm:mr-0">
                                                    Email
                                                </div>
                                                <input type="email" name="email" value={phoneNo} pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" className="w-full py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-gray-300 focus:border-gray-200 focus:ring-0" onChange={(e) => setPhoneNo(e.target.value.toLowerCase())} />

                                                <div className="mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full font-medium">
                                                    Phone
                                                </div>
                                                <input

                                                    type="text" name="phone" required value={userPhoneno} onChange={(e) => setEmail(e.target.value)} className="w-full py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-gray-300 focus:border-gray-200 focus:ring-0" />

                                                <div className="flex gap-2 mt-5 justify-between items-center text-sm text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                                    <input type="checkbox" id="checkbox-1" className="w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-0" required checked={isChecked} onChange={handleCheckboxChange} />
                                                    <label htmlFor="checkbox-1" className="flex-auto max-md:max-w-full" style={{ width: 'max-content' }}>
                                                        Agree with terms & conditions
                                                        <span className='text-red-500'>*</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='divide-y'>
                                                <div className='py-6'>
                                                    <div className='flex flex-col flex-wrap'>
                                                        <div className='flex justify-between items-center my-2'>
                                                            <div className='text-gray-500'> SubTotal</div>
                                                            <div>{numberWithIndianRupeeFormatModal(planDetails?.price)}</div>
                                                        </div>
                                                        <div className='flex justify-between items-center text-left text-sm'>
                                                            <div className='text-gray-500'> GST (18% of SubTotal)</div>
                                                            <div>₹ {calculateGST(planDetails?.price)}</div>
                                                        </div>
                                                        <div className='flex justify-between items-center mt-2'>
                                                            <div> Total</div>
                                                            <div>{numberWithIndianRupeeFormatModal(planDetails?.price + calculateGST(planDetails?.price))}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pt-6 text-center'>
                                                    <button onClick={() => handleProceedClick()} data-modal-hide="popup-modal" type="button" className="justify-center w-full text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:bg-orange-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5">
                                                        Proceed
                                                    </button>
                                                </div>
                                                <div className='text-start'>
                                                    {apiSuccessResponse ? (
                                                        <div className="text-green-500 text-sm font-medium mt-5">
                                                            {apiSuccessResponse}
                                                        </div>
                                                    ) : (
                                                        <div className="text-red-500 text-sm font-medium mt-5">
                                                            {apiFailResponse}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {isSuccessModalOpen && (
                <div
                    style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
                    className=" max-h-full  backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
                >

                    {/* <div className=' bg-white rounded-2xl max-md:h-full w-full max-w-lg zoom_in_pp_modal h-auto overflow-y-auto'> */}
                    <div className="modals relative bg-white w-full max-w-xl  rounded-2xl zoom_in_pp_modal ">
                        <div className=" bg-white rounded-2xl shadow-lg  p-6 max-sm:px-3">

                            <div className='flex items-center justify-end'>

                                <div className='w-auto text-end '>
                                    <button type="button" className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center "
                                        // onClick={() => setIsSuccessModalOpen(false)}
                                        onClick={closeModal}
                                        data-modal-hide="popup-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full flex flex-row divide-x px-5 rounded-lg max-lg:flex-col max-lg:divide-y max-lg:divide-x-0 '>
                                <div className="px-4 md:px-5 text-center max-sm:p-1.5  w-full">
                                    <div
                                        className="flex flex-col max-lg:ml-0 max-lg:w-auto justify-end h-full  " style={{ maxHeight: '-webkit-fill-available !important' }}>
                                        <div className='  h-full '
                                            style={{ maxHeight: '-webkit-fill-available !important' }}
                                        >
                                            <div
                                                style={{ height: 'inherit ' }}
                                                className="items-center flex flex-col grow  w-full bg-white rounded-3xl  max-lg:max-w-full">
                                                <div className="flex gap-5 justify-between items-center flex-col">
                                                    <div
                                                        // className='flex justify-center items-center px-3 w-16 h-16 max-sm:w-10 max-sm:h-10 py-3 rounded-lg bg-orange-50'
                                                        className='w-40'
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src={Images.payment_success}
                                                            className="w-full h-full aspect-square"
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className="flex gap-0 flex-col justify-center my-auto text-center whitespace-nowrap items-center">
                                                        <div className="mt-2 text-base text-zinc-600  max-sm:text-wrap text-left">
                                                            Payment Success
                                                        </div>
                                                        <div className="grow text-3xl font-bold text-orange-500 max-sm:text-3xl mt-3">
                                                            INR ₹   {paymentDetail?.price ? paymentDetail?.price : ''}

                                                        </div>

                                                    </div>
                                                </div>


                                                <hr className='my-3' />
                                                <div className=' w-full items-center'>
                                                    <div className=''>
                                                        <div className='border-t py-3'>
                                                            <div className='max-sm:text-sm flex flex-col flex-wrap'>
                                                                <div className='flex justify-between items-center my-2 gap-1'>
                                                                    <div className='text-gray-500'> Service Name</div>
                                                                    <div>
                                                                        {paymentDetail?.Plan_name ? paymentDetail?.Plan_name : ''}
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between items-center text-left gap-1'>
                                                                    <div className='text-gray-500 '> Subscriber Name</div>
                                                                    <div>
                                                                        {paymentDetail?.subscriber_name ? paymentDetail?.subscriber_name : ''}
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between items-center my-2 gap-1'>
                                                                    <div className='text-gray-500'> Order ID</div>
                                                                    <div>
                                                                        {paymentDetail?.order_id ? paymentDetail?.order_id : ''}
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between items-center text-left gap-1'>
                                                                    <div className='text-gray-500 '> Transaction ID</div>
                                                                    <div>
                                                                        {paymentDetail?.transaction_id ? paymentDetail?.transaction_id : ''}
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between items-center text-left gap-1'>
                                                                    <div className='text-gray-500 '> Created Time</div>
                                                                    <div>
                                                                        {paymentDetail?.created_time ? paymentDetail?.created_time : ''}
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between items-center text-left gap-1'>
                                                                    <div className='text-gray-500 '> Payment Method</div>
                                                                    <div>
                                                                        {paymentDetail?.payment_method ? paymentDetail?.payment_method : ''}
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className=' py-3 border-t border-dashed'>
                                                            <div className='max-sm:text-sm flex flex-col flex-wrap'>
                                                                <div className='flex justify-between items-center my-2 '>
                                                                    <div className='text-gray-500'> SubTotal</div>

                                                                    ₹ {paymentDetail?.price ? paymentDetail?.price : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center text-left text-sm'>
                                                                    <div className='text-gray-500 '> GST (18% of SubTotal)</div>
                                                                    ₹ 0
                                                                </div>
                                                                <div className='flex justify-between items-center mt-2'>
                                                                    <div> Total</div>

                                                                    ₹ {paymentDetail?.price ? paymentDetail?.price : ''}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='py-3 text-center terms_bg_clr rounded-lg'>
                                                            <div className='flex flex-row gap-5 ps-5 items-center'>
                                                                <img
                                                                    loading="lazy"
                                                                    src={'https://cdn.builder.io/api/v1/image/assets/TEMP/7651f6f901532d71267593923bc94abdd21a58bf8b2bd94cd3a1db8c04bcfedc?apiKey=8e5983036f284a13866aae97819cdb73&'}
                                                                    alt="Profile"
                                                                    className="self-center w-10 border-white border-solid aspect-square border-[6px] "
                                                                />
                                                                <div className='flex max-sm:text-sm flex-col items-start text-gray-500'>
                                                                    <div >Get PDF Receipt</div>
                                                                    <div>Invoice already sent on mail</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                    {/* </div> */}
                </div>
            )
            }
            {isFailedModalOpen && (
                <div
                    style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
                    className="modals  backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
                >

                    {/* <div className=' bg-white rounded-2xl max-md:h-full w-full max-w-lg zoom_in_pp_modal h-full'> */}
                    <div className="  bg-white w-full max-w-xl  rounded-2xl zoom_in_pp_modal">
                        <div className=" bg-white rounded-2xl shadow-lg  p-6">

                            <div className='flex items-center justify-end'>

                                <div className='w-auto text-end '>
                                    <button type="button" className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center"
                                        // onClick={() => setIsFailedModalOpen(false)}
                                        onClick={closeModal}
                                        data-modal-hide="popup-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full flex flex-row divide-x px-5 rounded-lg max-lg:flex-col max-lg:divide-y max-lg:divide-x-0 '>
                                <div className="px-4 md:px-5 text-center max-sm:p-1.5  w-full">
                                    <div
                                        className="flex flex-col max-lg:ml-0 max-lg:w-auto justify-end h-full  " style={{ maxHeight: '-webkit-fill-available !important' }}>
                                        <div className='  h-full '
                                            style={{ maxHeight: '-webkit-fill-available !important' }}
                                        >
                                            <div
                                                style={{ height: 'inherit ' }}
                                                className="items-center flex flex-col grow  w-full bg-white rounded-3xl  max-lg:max-w-full">
                                                <div className="flex gap-5 justify-between items-center flex-col">
                                                    <div
                                                        // className='flex justify-center items-center px-3 w-16 h-16 max-sm:w-10 max-sm:h-10 py-3 rounded-lg bg-orange-50'
                                                        className='w-40'
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src={Images.payment_success}
                                                            className="w-full h-full aspect-square"
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className="flex gap-0 flex-col justify-center my-auto text-center items-center">

                                                        <div className="grow text-3xl font-bold text-red-500 max-sm:text-3xl mt-3">
                                                            Payment Failed

                                                        </div>
                                                        <div className="mt-2 text-base text-zinc-600  max-sm:text-wrap text-center">
                                                            Your transaction has failed due to some technical error. Please try again later.
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className='pt-6 text-center'>
                                                    <button
                                                        //  onClick={() => handleProceedClick()}
                                                        data-modal-hide="popup-modal" type="button"
                                                        className="justify-center text-lg font-bold w-full text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:bg-orange-500 text-center rounded-lg inline-flex items-center px-5 py-2.5 text-center"
                                                    >

                                                        Make payment

                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                    {/* </div> */}
                </div>
            )
            }

        </>
    )
}

export default UpdatedAnimatedComponent(BusinessGrowthPlan)