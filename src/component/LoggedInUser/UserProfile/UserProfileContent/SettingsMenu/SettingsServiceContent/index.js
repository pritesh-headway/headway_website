import React, { useEffect, useState } from 'react'
import { fetchDataWithToken, fetchWithFormDataToken } from '../../../../../../apiGeneralFunction';
import { useNavigate } from 'react-router-dom';
import * as Images from '../../../../../../assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsServiceContent = () => {

    const [userData, setUserData] = useState([]);
    const [planData, setPlanData] = useState();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isFailedModalOpen, setIsFailedModalOpen] = useState(false);
    const [idDetail, setIdDetail] = useState();
    const [paymentDetail, setPaymentDetail] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const tokenValue = localStorage.getItem('login api response token');
        const token = JSON.parse(tokenValue);
        if (!token) {
            // 
            navigate('/login');
        }
        else {
            fetchData(token);
        }

    }, []);

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
            key: 'rzp_test_nqF5dOkbjWufx8',
            // key:'rzp_live_x1nvHB0DL9qbX7',
            // amount: orderId?.total * 100,
            amount: 1 * 100,
            currency: 'INR',
            name: 'Headway Business Solutions LLP',
            image: Images.logo,
            description: 'Test Transaction',
            // email: '',
            order_id: orderId?.order_id,
            handler: function (response) {
                // console.log("response.razorpay_payment_id", response?.razorpay_payment_id, response);
                // alert(response.razorpay_payment_id);

                const fetchPaymentAPI = async () => {
                    const tokenValue = localStorage.getItem('login api response token');
                    const storedToken = JSON.parse(tokenValue);

                    try {

                        const formdata = new FormData();

                        // formdata.append("amount", orderId?.total);
                        formdata.append("amount", 1);
                        formdata.append("add_on_service_id", orderId?.add_on_service_id);
                        formdata.append("payment_id", response?.razorpay_payment_id);

                        const endpoint = `api/add-on-service-payment-store`;
                        const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

                        if (result?.status === true) {
                            navigate('/plan_pricing')
                            setIsSuccessModalOpen(true)
                            setPaymentDetail(result?.data)
                            // toast.dismiss()
                            // toast.success(result?.message, {
                            //     position: 'top-center',
                            //     autoClose: 3000,
                            //   });
                            setIsModalOpen(false)
                        }
                        else {
                            setIsFailedModalOpen(true)
                        }

                        // console.log('API member plan payment response:', result);
                    } catch (error) {
                        // console.error('Error fetching API: member-plan-payment-store', error);
                    }
                };
                fetchPaymentAPI();
            },
            prefill: {

                contact: '1234567890',
                // contact: phoneNo,

            },
            notes: {
                address: 'Your address',
            },
            theme: {
                color: '#F6821F',
            },
            // razorpay_error: function (response) {
            //     console.log("Razorpay Payment failed:", response.error, response);
            //     if (response.error.metadata) {
            //         const paymentId = response.error.metadata.payment_id;
            //         console.log("Razorpay Cancelled or failed payment ID:", paymentId);
            //     }

            //     if (response.error.description) {
            //         console.error("Razorpay error description:", response.error.description);

            //     } else {
            //         console.error("Razorpay error:", response.error);

            //     }
            // }
        }
        // console.log("handle payment 2", orderId);
        const rzp = new window.Razorpay(options);
        // console.log("rzp response options", rzp, options);
        rzp.open();
    }

    const openModal = (id) => {

        setIsModalOpen(true);

        const fetchServiceDetailAPI = async () => {
            const tokenValue = localStorage.getItem('login api response token');
            const storedToken = JSON.parse(tokenValue);
            if (!storedToken) {
                navigate('/login');
                return;
            }
            try {
                const formdata = new FormData();

                formdata.append("id", id);

                const endpoint = `api/add_on_service_detail`;

                const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

                if (result?.status === true) {

                    setIdDetail(result?.data)
                    // setOrderId(result?.data?.order_id)
                    // handlePayment(result?.data?.order_id);
                }
            } catch (error) {

            }
        }

        fetchServiceDetailAPI();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSuccessModalOpen(false);
        setIsFailedModalOpen(false)
        document.body.style.overflow = 'auto';
    };


    const handleBuyNow = async (idDetail) => {



        const fetchAPI = async () => {
            const tokenValue = localStorage.getItem('login api response token');
            const storedToken = JSON.parse(tokenValue);

            if (!storedToken) {
                navigate('/login');
                return;
            }

            try {

                const formdata = new FormData();
                formdata.append("amount", idDetail?.price ? idDetail?.price : '');
                formdata.append("add_on_service_id", idDetail?.id);


                const endpoint = `api/add-on-service-payment`;

                const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

                if (result?.status === true) {
                    // setOrderId(result?.data?.order_id)
                    handlePayment(result?.data);
                }

                // console.log('API member plan payment response:', result);
            } catch (error) {
                // console.error('Error fetching API:', error);
            }
        }




        fetchAPI();
    }




    const fetchData = async (token) => {

        // const tokenValue = localStorage.getItem('login api response token');
        // const token = JSON.parse(tokenValue);

        try {
            const formData = new FormData();
            const data = await fetchWithFormDataToken(`user_add_on_service`, formData, token);
            // const data = await fetchDataWithToken(`user_add_on_service`, token);

            if (data?.status === true) {

                setUserData(data?.data);
                setPlanData(data?.data?.plan?.member_plan)
            } else {
                setUserData(null);
            }

        } catch (error) {

        }
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

        const ItemsJSX = ({ planData }) => {
            const points = planData?.description?.split(',').map(point => point.trim());

            return (
                <>
                    {points?.map((item, index) => (
                        <div className="flex gap-3 justify-between mt-1 w-fit me-5" key={index}>
                            <div className="flex justify-center items-center  bg-white p-1 w-6 h-6 rounded-full">
                                {/* <img
                                    alt=''
                                    loading="lazy"
                                    // src={Images.pp_green_clr}
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb328ee5199ebf2938adde7e5da6dac2915072c1b277e526883d3deef97b032?apiKey=8e5983036f284a13866aae97819cdb73&"
                                    className="w-full aspect-square"
                                /> */}
                                <i className="fa fa-check text-orange-500"></i>
                            </div>
                            <div className="grow text-base text-white">
                                {item.trim()}
                                {/* {item} */}

                            </div>
                        </div>
                    ))}

                </>
            )
        }

        return (
            <>
                {planData &&
                    <section className="flex flex-col items-start p-6 mt-6 bg-orange-500 rounded-3xl max-md:px-5 max-md:max-w-full">
                        <h2 className="justify-center px-3 py-2 text-2xl font-medium text-white rounded bg-white bg-opacity-10 max-md:max-w-full">
                            Current Plan: {planData?.name}
                        </h2>
                        <div className="self-stretch mt-6 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:max-w-full">
                                        <div className="flex flex-wrap gap-3 self-start mt-3">
                                            {/* {planFeatures.map(({ icon, text }) => (
                                                <PlanFeature key={text} icon={icon}>
                                                    {text}
                                                </PlanFeature>
                                            ))} */}
                                            <ItemsJSX planData={planData} />
                                        </div>
                                        {/* <div className="flex gap-3 max-md:flex-wrap">
                                    {planFeatures.slice(0, 2).map(({ icon, text }) => (
                                        <PlanFeature key={text} icon={icon}>
                                            {text}
                                        </PlanFeature>
                                    ))}
                                </div>
                                <div className="flex gap-3 self-start mt-3">
                                    <PlanFeature icon={planFeatures[2].icon}>
                                        {planFeatures[2].text}
                                    </PlanFeature>
                                </div>
                                <div className="flex gap-3 mt-3 max-md:flex-wrap">
                                    {planFeatures.slice(3, 5).map(({ icon, text }) => (
                                        <PlanFeature key={text} icon={icon}>
                                            {text}
                                        </PlanFeature>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-3 max-md:flex-wrap">
                                    {planFeatures.slice(5, 7).map(({ icon, text }) => (
                                        <PlanFeature key={text} icon={icon}>
                                            {text}
                                        </PlanFeature>
                                    ))}
                                </div>
                                <div className="flex gap-3 self-start mt-3">
                                    {planFeatures.slice(7).map(({ icon, text }) => (
                                        <PlanFeature key={text} icon={icon}>
                                            {text}
                                        </PlanFeature>
                                    ))}
                                </div> */}
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
                        {/* <button className="justify-center px-4 py-2.5 text-base font-medium text-white rounded-lg border border-white border-solid">
                    Add on Services
                </button> */}
                    </section>
                }
            </>
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

    const ServiceCard = ({ price, description, name, id }) => (
        <div className="flex flex-col grow justify-start pe-4 pb-4 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:mt-6">
            <div className='flex flex-col gap-5  max-lg:gap-0'>
                <div className='terms_bg_clr w-fit px-5 py-2 text-orange-500 rounded-tl-2xl  rounded-br-2xl font-medium '>{name}</div>
                <div className="text-xl font-medium text-right text-zinc-800 -mt-10 max-lg:-mt-0  max-lg:mt-3">₹ {price}</div>
            </div>
            {/* <div className="mt-4 text-sm text-neutral-400 ps-4">{description}</div> */}
            <div className='flex  flex-col justify-between h-full'>
                <div

                    className="mt-4 text-sm text-neutral-400 ps-4"
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                />
                {/* <div className='ps-4'>
                    <div
                        //onClick={() => handleBuyNow()}
                        onClick={() => openModal(id)}
                        className="text-lg justify-center items-center px-4 py-2 mt-4 text-lg text-center text-white user_auth_btn rounded max-md:px-5 max-md:max-w-full cursor-pointer">
                        Buy Now
                    </div>
                </div> */}
            </div>
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

    useEffect(() => {
        const modalElement = document.querySelector('.modals');
        if (modalElement) {
            const modalTop = modalElement.offsetTop;
            const screenHeight = window.innerHeight;
            const middleOfScreen = screenHeight / 2;
            const scrollPosition = modalTop - (screenHeight - modalElement.offsetHeight) / 2;
            window.scrollTo(0, scrollPosition);
        }
    }, [isModalOpen, isSuccessModalOpen, isFailedModalOpen])

    useEffect(() => {

        const navbar = document.querySelector('.navbar');


        if (isModalOpen || isSuccessModalOpen || isFailedModalOpen) {
            // navbar.style.position = 'absolute';
            // document.body.style.overflow = 'hidden';
            navbar.style.position = 'static';
            //document.body.style.overflow = 'hidden';
            navbar.style.zIndex = 0;
        }

        //  else {
        //      document.body.style.overflow = 'auto';
        //      navbar.style.position = 'fixed';
        //  }

    }, [isModalOpen, isSuccessModalOpen, isFailedModalOpen]);


    return (
        <>
            <main className="flex flex-col justify-center rounded-xl max-w-full w-[1296px] max-md:pt-6">
                <h1 className="w-full text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">
                    Add on Services
                </h1>

                <ServicePlanCard />

                {/* <section className="flex flex-col p-6 mt-8 w-full rounded-lg border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-8">
                            <h3 className="text-lg font-medium text-zinc-800">Additional as on Demand Services</h3>
                            <p className="mt-2 text-base text-neutral-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div> 
                    
                </div>
            </section> */}
                <div className="flex flex-col justify-center self-stretch p-5 bg-white rounded-xl border border-gray-200 border-solid mt-8">
                    <div className="self-start text-2xl font-medium text-zinc-800 max-md:max-w-full">Additional as on Demand Services</div>
                    <div className="self-start mt-2 text-sm text-neutral-400 max-md:max-w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    <section className="mt-8 max-md:max-w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                        {/* {serviceData.map(service => (
                        <ServiceCard key={service.id} price={service.price} description={service.description} name={service.name} />
                    ))} */}
                        {userData?.length > 0 ? (

                            userData.map(service => (
                                <ServiceCard key={service?.id} price={service?.price} description={service?.description} name={service?.title} id={service?.id} />
                            ))
                        ) : (
                            <></>
                        )}
                        {/* {userData.map(service => (
                         <ServiceCard key={service.id} price={service.price} description={service.description} name={service.name} />
                     ))} */}
                    </section>
                </div>


            </main>
            {isModalOpen && (
                <div
                    style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
                    className="max-h-full backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0"
                // className=" backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
                >

                    {/* <div className=' bg-white rounded-2xl max-md:h-full w-full max-w-xl zoom_in_pp_modal'> */}
                    <div className=" modals  w-full max-w-xl rounded-2xl   max-h-full">
                        <div className="w-full bg-white rounded-2xl shadow-lg  p-6   max-h-full">

                            <div className='flex items-center justify-center pb-5'>
                                <div className=' text-2xl font-semibold w-full text-left'>Service Summary</div>
                                <div className='w-auto text-end '>
                                    <button type="button" className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center "
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
                                        className="flex flex-col max-lg:ml-0 max-lg:w-auto justify-end h-full  " style={{ maxHeight: '-webkit-fill-available !important' }}
                                    >
                                        <div className='  h-full '
                                            style={{ maxHeight: '-webkit-fill-available !important' }}
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
                                                            ₹ {idDetail?.price ? idDetail?.price : ''}

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mt-8 text-2xl font-medium primary_black_clr text-wrap">

                                                    {idDetail?.title ? idDetail?.title : ''}
                                                </div>
                                                {/* <div className="mt-2 text-base text-zinc-600  max-sm:text-wrap text-left">
                                                       descritpion
                                                    </div> */}
                                                <div
                                                    className="mt-2 text-base text-zinc-600  max-sm:text-wrap text-left"
                                                    dangerouslySetInnerHTML={{ __html: idDetail?.description ? idDetail?.description : '' }} />
                                                <hr className='my-3' />
                                                <div className=' w-full items-center'>
                                                    <div className=''>
                                                        {/* <div className='border-y py-6'>
                                                                <div className='flex flex-col flex-wrap'>
                                                                    <div className='flex justify-between items-center my-2 '>
                                                                        <div className='text-gray-500'> On Store Visit</div>
                                                                       1
                                                                    </div>
                                                                    <div className='flex justify-between items-center text-left '>
                                                                        <div className='text-gray-500 '> Duration</div>
                                                                     10 hrs
                                                                    </div>

                                                                </div>

                                                            </div> */}
                                                        <div className='border-t py-6'>
                                                            <div className='flex flex-col flex-wrap'>
                                                                <div className='flex justify-between items-center my-2 '>
                                                                    <div className='text-gray-500'> SubTotal</div>
                                                                    ₹ {idDetail?.price ? idDetail?.price : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center text-left text-sm'>
                                                                    <div className='text-gray-500 '> GST (18% of SubTotal)</div>
                                                                    ₹ 0
                                                                </div>
                                                                <div className='flex justify-between items-center mt-2'>
                                                                    <div> Total</div>

                                                                    ₹ {idDetail?.price ? idDetail?.price : ''}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='pt-6 text-center'>
                                                            <button
                                                                onClick={() => handleBuyNow(idDetail)}
                                                                //  onClick={() => handleProceedClick()}
                                                                data-modal-hide="popup-modal" type="button"
                                                                className="justify-center text-lg font-bold w-full text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:bg-orange-500 text-center rounded-lg inline-flex items-center px-5 py-2.5 text-center"
                                                            >

                                                                Proceed to payment
                                                                <i className='fa fa-arrow-right text-base ms-5'></i>
                                                            </button>
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
            )}

            {isSuccessModalOpen && (
                <div
                    style={{ backgroundColor: 'rgb(0 0 0 / 40%)' }}
                    className=" backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
                >

                    {/* <div className=' bg-white rounded-2xl max-md:h-full w-full max-w-lg zoom_in_pp_modal'> */}
                    <div className="modals relative bg-white w-full max-w-xl max-h-full rounded-2xl zoom_in_pp_modal ">
                        <div className="relative bg-white rounded-2xl shadow-lg  p-6">

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
                                                            INR ₹ 20,000

                                                        </div>

                                                    </div>
                                                </div>


                                                <hr className='my-3' />
                                                <div className=' w-full items-center'>
                                                    <div className='max-sm:text-sm'>
                                                        <div className='border-t py-3'>
                                                            <div className='flex flex-col flex-wrap'>
                                                                <div className='flex justify-between items-center my-2 text-base'>
                                                                    <div className='text-gray-500'> Service Name</div>
                                                                    {paymentDetail?.add_on_service_name ? paymentDetail?.add_on_service_name : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center text-left '>
                                                                    <div className='text-gray-500 '> Subscriber Name</div>
                                                                    {paymentDetail?.subscriber_name ? paymentDetail?.subscriber_name : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center my-2 '>
                                                                    <div className='text-gray-500'> Order ID</div>
                                                                    {paymentDetail?.order_id ? paymentDetail?.order_id : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center text-left '>
                                                                    <div className='text-gray-500 '> Transaction ID</div>
                                                                    {paymentDetail?.transaction_id ? paymentDetail?.transaction_id : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center text-left '>
                                                                    <div className='text-gray-500 '> Created Time</div>
                                                                    {paymentDetail?.created_time ? paymentDetail?.created_time : ''}
                                                                </div>
                                                                <div className='flex justify-between items-center text-left '>
                                                                    <div className='text-gray-500 '> Payment Method</div>
                                                                    {paymentDetail?.payment_method ? paymentDetail?.payment_method : ''}
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className=' py-3 border-t border-dashed'>
                                                            <div className='flex flex-col flex-wrap'>
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
                                                                <div className='flex flex-col items-start text-gray-500'>
                                                                    <div>Get PDF Receipt</div>
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
                    className=" backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
                >

                    {/* <div className=' bg-white rounded-2xl max-md:h-full w-full max-w-lg zoom_in_pp_modal'> */}
                    <div className=" relative bg-white w-full max-w-xl max-h-full rounded-2xl zoom_in_pp_modal ">
                        <div className="relative bg-white rounded-2xl shadow-lg  p-6">

                            <div className='flex items-center justify-end'>

                                <div className='w-auto text-end '>
                                    <button type="button" className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center "
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

export default SettingsServiceContent