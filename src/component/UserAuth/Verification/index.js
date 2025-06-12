/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import * as Images from '../../../assets';
import Layout from "../../Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchWithFormData, fetchWithFormDataToken } from "../../../apiGeneralFunction";

const Verification = () => {

  const toastVerificationRef = useRef(null);

  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);

  const correctOTP = "123456";
  const numberOfDigits = 4;

  const [number, setNumber] = useState();
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiSuccessResponse, setApiSuccessResponse] = useState(false);
  const [apiFailResponse, setApiFailResponse] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [profilePic, setProfilePic] = useState(null);


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {

    const tokenValue = localStorage.getItem('register api response');
    const storedToken = JSON.parse(tokenValue);
    if (!storedToken) {
      navigate('/login');
    }



    //   if (typeof undefinedObject !== 'undefined') {
    //     undefinedObject.toggle = someValue;
    //   } else {
    //     // navigate('/login')
    //     // localStorage.clear();
    //     // setIsModalOpen(true)
    //     console.error("The object is undefined. Unable to set properties.");
    //   }


  }, []);



  useEffect(() => {

    const navbar = document.querySelector('.navbar');

    const modalElement = document.querySelector('.modals');

    if (isModalOpen) {
      navbar.style.position = 'static';
      // document.body.style.overflow = 'hidden';
      navbar.style.zIndex = 0;
      window.scroll(0, 0)
    }

    // if (modalElement) {
    //   const modalTop = modalElement.offsetTop;
    //   const screenHeight = window.innerHeight;
    //   const middleOfScreen = screenHeight / 2;
    //   const scrollPosition = modalTop - (screenHeight - modalElement.offsetHeight) / 2;
    //   window.scrollTo(0, scrollPosition);
    // }
    // if (modalElement) {
    //   const modalTop = modalElement.offsetTop;
    //   const screenHeight = window.innerHeight;
    //   const fortyPercentOfScreen = screenHeight * 0.4;
    //   const scrollPosition = modalTop - (fortyPercentOfScreen - modalElement.offsetHeight / 2);
    //   window.scrollTo(0, scrollPosition);
    // }
    // if (modalElement) {
    //   const modalTop = modalElement.offsetTop;
    //   const screenHeight = window.innerHeight;
    //   const scrollPosition = modalTop - (screenHeight * 0.7 - modalElement.offsetHeight / 2);
    //   window.scrollTo(0, scrollPosition);
    // }
    if (modalElement) {
      const screenHeight = window.innerHeight;
      const scrollPosition = window.matchMedia('(max-width: 767px)').matches ?
        (modalElement.offsetTop - (screenHeight * 0.7 - modalElement.offsetHeight / 2)) :
        (modalElement.offsetTop - (screenHeight * 0.5 - modalElement.offsetHeight / 2));
      window.scrollTo(0, scrollPosition);
    }
    // else {
    //   document.body.style.overflow = 'auto';
    //   navbar.style.position = 'fixed';
    //   navbar.style.zIndex = 1000;
    // }


  }, [isModalOpen]);

  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    phone: '',
    home: '',
    apartment: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    address: ''
  });

  const handleFormChange = (e) => {
    const { name, email, phone, home, apartment, landmark, city, state, pincode, address, value } = e.target;
    setUserFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      //[name]: name === "email" ? value.toLowerCase() : value,
      [email]: email === "email" ? value.toLowerCase() : value,
      [phone]: value,
      [home]: value,
      [apartment]: value,
      [landmark]: value,
      [city]: value,
      [state]: value,
      [pincode]: value,
      [address]: value,
    }));


    //   if (name === 'name') {
    //     if (!validateName(value)) {
    //         setNameError('Invalid name. Only letters and spaces are allowed.');
    //     } else {
    //         setNameError('');
    //     }
    // }

    // if (name === 'email') {
    //     if (!validateEmail(value)) {
    //         setEmailError('Invalid email address.');
    //     } else {
    //         setEmailError('');
    //     }
    // }


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

  useEffect(() => {

    const tokenValue = localStorage.getItem('login api response token') || '';

    if (tokenValue) {
      try {

        const storedToken = JSON.parse(tokenValue);

        if (storedToken) {
          navigate('/login');
          return;
        }
      } catch (error) {

        console.error('Error parsing JSON:', error);
      }
    }
  }, []);

  const phone = localStorage.getItem('register api response');
  const storedPhone = JSON.parse(phone);


  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        handleNavigation();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleNavigation = () => {
    toast.dismiss(toastVerificationRef.current);
  };


  // const handleFormSubmit = async() => {


  //     // const tokenValue = localStorage?.getItem('login api response token') || '';

  //     // const storedToken = JSON?.parse(tokenValue);

  //     // if (!storedToken) {
  //     //   navigate('/login');
  //     //   return;
  //     // }

  //     if (!userFormData.name && !userFormData.email) {

  //       toast.error('Please enter your full name and email address', {
  //         position: 'top-center',
  //         autoClose: 5000,
  //       });
  //       return;
  //     }
  //     else if (!userFormData?.email) {

  //       toast.error('Please enter your email address', {
  //         position: 'top-center',
  //         autoClose: 5000,
  //       });

  //      return;
  //     }

  //     else if (!validateName(userFormData?.name)) {

  //       toast.error('Name should not contain numbers or special characters.', {
  //         position: 'top-center',
  //         autoClose: 5000,
  //       });
  //       // if (!toast.isActive()) {
  //       //   toast.error('Name should not contain numbers or special characters.', {
  //       //     position: 'top-center',
  //       //     autoClose: 3000,
  //       //     hideProgressBar: false,
  //       //     closeOnClick: true,
  //       //     pauseOnHover: true,
  //       //     draggable: true,
  //       //     progress: undefined,
  //       //     theme: "light",
  //       //     onClose: handleNavigation,
  //       //   });
  //       // }
  //       // setShowToast(true); 
  //        return;
  //     }
  //     else if (!validateEmail(userFormData?.email)) {
  //     //  toast.dismiss()
  //      toast.error('Please enter a valid email address.', {
  //        position: 'top-center',
  //        autoClose: 5000,
  //      });
  //       // if (!toast.isActive()) {
  //       //   toast.error('Please enter a valid email address.', {
  //       //     position: 'top-center',
  //       //     autoClose: 3000,
  //       //     hideProgressBar: false,
  //       //     closeOnClick: true,
  //       //     pauseOnHover: true,
  //       //     draggable: true,
  //       //     progress: undefined,
  //       //     theme: "light",
  //       //     onClose: handleNavigation,
  //       //   });
  //       // }
  //       // setShowToast(true); 
  //       return;
  //     }


  //     try {

  //       const formdata = new FormData();


  //       formdata.append("name", userFormData.name);
  //       formdata.append("email", userFormData.email);
  //       formdata.append("mobile", userFormData.phone);
  //       formdata.append("city", userFormData.city);
  //       formdata.append("state", userFormData.state);
  //       formdata.append("zipcode", userFormData.pincode);
  //       formdata.append("address", userFormData.home + ", " + userFormData.apartment + ", " + userFormData.landmark + ", " + userFormData.city + ", " + userFormData.state + ", " + userFormData.pincode);

  //       const endpoint = `api/user_profile_update`;

  //       const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

  //       if (result?.status === true) {

  //         // localStorage.setItem("user_data",JSON.stringify(result?.data))

  //         toast.success(result?.message, {
  //           position: 'top-center',
  //           autoClose: 1500,

  //           onClose: () => {
  //             const fromPlanPricing = localStorage?.getItem('fromPlanPricing');
  //             if (fromPlanPricing === 'true') {
  //               navigate('/plan_pricing');
  //             } else {
  //               navigate('/');
  //             }

  //           }
  //         });

  //       }
  //       else {
  //         localStorage.clear()
  //         navigate('/login');

  //       }


  //     } catch (error) {

  //     }



  // }

  const handleFormSubmit = () => {
    const fetchAPI = async () => {

      const tokenValue = localStorage?.getItem('login api response token') || '';

      const storedToken = JSON?.parse(tokenValue) || '';

      if (!storedToken) {
        navigate('/login');
        return;
      }

      const phone = localStorage.getItem('register api response');
      const storedPhone = JSON.parse(phone);
      console.log("storedPhone", storedPhone)

      if (!userFormData.name && !userFormData.email) {
        // toast.dismiss()
        // toast.error('Please enter your full name and email address', {
        //   position: 'top-center',
        //   autoClose: 5000,
        // });
        // return;
        setNameError('Please enter your full name and email address')
        // return;
      }
      else if (!userFormData?.email) {
        // toast.dismiss()
        // toast.error('Please enter your email address', {
        //   position: 'top-center',
        //   autoClose: 5000,
        // });
        setNameError('Please enter your email address')
        // return;
      }

      else if (!validateName(userFormData?.name)) {
        // toast.dismiss()
        // toast.error('Name should not contain numbers or special characters.', {
        //   position: 'top-center',
        //   autoClose: 5000,
        // });
        setNameError('Name should not contain numbers or special characters.')
        // return;
      }
      else if (!validateEmail(userFormData?.email)) {
        // toast.dismiss()
        // toast.error('Please enter a valid email address.', {
        //   position: 'top-center',
        //   autoClose: 5000,
        // });
        setNameError('Please enter a valid email address.')
        // return;
      }
      else {

        try {

          const formdata = new FormData();

          formdata.append("name", userFormData.name);
          formdata.append("email", userFormData.email);
          formdata.append("mobile", storedPhone?.phone_number || '');
          formdata.append("alternate_mobile", userFormData.phone);
          formdata.append("city", userFormData.city);
          formdata.append("state", userFormData.state);
          formdata.append("user_id", storedPhone?.user_id || '');
          formdata.append("pincode", userFormData.pincode);
          formdata.append("flat_no", userFormData.home);
          formdata.append("area", userFormData.apartment);
          formdata.append("landmark", userFormData.landmark);
          // formdata.append("address", userFormData.home + ", " + userFormData.apartment + ", " + userFormData.landmark + ", " + userFormData.city + ", " + userFormData.state + ", " + userFormData.pincode);

          if (profilePic) {
            formdata.append("profile_pic", profilePic);
          }

          const endpoint = `profile/update`;

          const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);

          if (result?.status === true) {

            // localStorage.setItem("user_data",JSON.stringify(result?.data))
            // toast.dismiss()
            // toast.success(result?.message, {
            //   position: 'top-center',
            //   autoClose: 1500,

            //   onClose: () => {
            //     const fromPlanPricing = localStorage?.getItem('fromPlanPricing');
            //     if (fromPlanPricing === 'true') {
            //       navigate('/plan_pricing');
            //     } else {
            //       navigate('/');
            //     }

            //   }
            // });
            const fromPlanPricing = localStorage?.getItem('fromPlanPricing');
            if (fromPlanPricing === 'true') {
              navigate('/plan_pricing');
            } else {
              setApiSuccessResponse(result?.message)
              setApiFailResponse('')
              navigate('/');

              setNameError('');
              setEmailError('');
            }


          }
          else {

            // toast.error(result?.message, {
            //   position: 'top-center',
            //   autoClose: 2000,

            //   onClose: () => {
            //     navigate('/login');

            //   }
            // });
            // localStorage.clear()
            setApiFailResponse(result?.message)
            setApiSuccessResponse('')
            setNameError('');
            setEmailError('');
          }

          // navigate('/login');

        } catch (error) {

        }
      }


    };
    fetchAPI();
    document.body.style.overflow = 'auto';

  }

  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);




  function handleChange(value, index) {

    let newArr = [...otp];

    newArr[index] = value;

    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();

    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus()

    }
  }

  function clearOtp() {
    // const numberOfDigits = 4;

    // for (var i = numberOfDigits; i > 0; i--) {
    //   otpBoxReference.current[i - 1].value = ""
    // }
    setOtp(Array(numberOfDigits).fill(''));

  }


  // console.log("otp input values", otp.join(""))

  // useEffect(() => { 
  //   if(otp.join("") !== "" && otp.join("") !== correctOTP){
  //     setOtpError("❌ Wrong OTP Please Check Again")
  //   }else{
  //     setOtpError(null)
  //   } 
  //  }, [otp]);

  const [inputs, setInputs] = useState(['', '', '', '']);

  const onChange = (event) => {
    setNumber(event.target.value);
  };

  const handleData = () => {
    const register_number = localStorage.getItem("register api response");
    // console.log("register_number", JSON.parse(register_number).phone);
  }

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
    }
    // const newInputs = [...inputs];
    // newInputs[index] = value;
    // setInputs(newInputs);
  };



  const handleSubmit = async () => {


    if (otp?.join("").length !== 4) {
      //toast.dismiss()
      // toast.error('Please enter valid  OTP', {
      //   position: 'top-center',
      //   autoClose: 5000,
      // });
      // return;
      setApiFailResponse('Please enter valid  OTP')
      return;
    }

    // if (otp?.join("") === '') {
    //   toast.error('Please enter the  OTP', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //   });
    //    return;
    // }
    // else if (otp?.join("").length !== 4) {
    //   toast.error('Please enter all the digits', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //   });
    // }



    //  if (otp.length !== 4) {
    //    toast.error('Please enter all the digits', {
    //      position: 'top-center',
    //      autoClose: 5000,
    //    });
    //    return;
    //  }


    const register_number = localStorage?.getItem("register api response") || '';


    const user_phone_no = JSON?.parse(register_number)?.phone_number


    const formdata = new FormData();
    formdata.append("country_code", "91");
    formdata.append("device_type", "web");
    formdata.append("mobile", user_phone_no);

    formdata.append("otp", otp.join(""));
    //formdata.append("verification_code", '1111');

    try {
      const result = await fetchWithFormData('login', formdata);

      if (result?.status === true) {

        localStorage.setItem("login api response token", JSON.stringify(result?.data?.token))

        // console.log("verification checking user data1", result?.data?.token && result?.data?.batch && result?.data?.headway_id && result?.data?.user_id && result?.data?.id)
        // if (result?.data?.token && result?.data?.profile_pic && result?.data?.batch && result?.data?.headway_id && result?.data?.user_id && result?.data?.id) {
        // if (result?.data?.token && result?.data?.batch && result?.data?.headway_id && result?.data?.user_id && result?.data?.id ) {


        if (result?.data?.name && result?.data?.email) {

          localStorage.setItem("user_data", JSON.stringify(result?.data))
          setIsModalOpen(false)
          // toast.dismiss()
          // toast.success(result?.message, {
          //   position: 'top-center',
          //   autoClose: 1500,

          // });
          setApiSuccessResponse(result?.message)
          setApiFailResponse('')
          const fromPlanPricing = localStorage.getItem('fromPlanPricing');
          if (fromPlanPricing === 'true') {
            navigate('/plan_pricing');
          }
          else {
            navigate('/')
          }

        } else {
          //debugger
          // localStorage.setItem("user_data", JSON.stringify(result?.data))
          //  console.error("No data received from the API.");

          setApiSuccessResponse('')
          setApiFailResponse('')
          setIsModalOpen(true)

          localStorage.setItem("user_data", JSON.stringify(result?.data))

          // toast.error(result?.message, {
          //   position: 'top-center',
          //   autoClose: 1500,
          // });

          // const fromPlanPricing = localStorage.getItem('fromPlanPricing');
          // if (fromPlanPricing === 'true') {
          //   navigate('/plan_pricing');
          // }
          // else{
          //   navigate('/')
          // }

        }
        document.body.style.overflow = 'auto';

        //console.log("verification checking user data2", result?.data?.token && result?.data?.batch && result?.data?.headway_id && result?.data?.user_id && result?.data?.id)
      }
      else {
        // toast.dismiss()
        // toast.error(result?.message, {
        //   position: 'top-center',
        //   autoClose: 1500,
        // });
        setApiFailResponse(result?.message)
        setApiSuccessResponse('')

        clearOtp();
        await clearCacheAndCookies();
        //localStorage.clear()
        // navigate('/login');
        document.body.style.overflow = 'auto';

      }
    } catch (error) {
      document.body.style.overflow = 'auto';

    }
    document.body.style.overflow = 'auto';

  };

  const clearCacheAndCookies = async () => {
    // Clear cache
    if (caches) {
      const cacheNames = await caches.keys();
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName);
      });
    }

    // Clear cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  };

  const handleKeyPress = (event) => {
    if (event?.key === 'Enter') {
      handleSubmit();
    }
  };

  const closeModal = () => {
    // setIsModalOpen(false);
    const fromPlanPricing = localStorage?.getItem('fromPlanPricing');
    if (fromPlanPricing === 'true') {
      navigate('/plan_pricing');
    }
    else {
      navigate('/');
    }
    document.body.style.overflow = 'auto';

    //navigate('/')
  };


  return (
    <>
      <Layout>
        <div
          //  className=" relative flex justify-center items-center px-16 py-12 w-full text-lg bg-white text-zinc-800 max-md:px-5 max-md:max-w-full"
          className="h-full bg-white relative flex justify-center items-center px-16 py-12 w-full text-lg bg-white text-zinc-800 max-md:px-5 max-md:max-w-full"
        >

          <div

            className="absolute  bottom-0"
          >
            <img

              src={Images.user_auth_bg}
              // src={Images.user_auth_vector}
              alt="Images"
              loading="lazy"

            />
          </div>
          <div
            // className="z-10 flex flex-col p-10 my-6 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[540px] max-md:px-5"
            className=" z-10 flex flex-col p-10 my-10 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[540px] max-md:px-5"
          >
            <Link to={'/login'}>
              <div className="flex justify-end items-center " >
                <img
                  src={Images.close_icon}
                  alt="Images"
                  loading="lazy"
                  className="w-7 "
                />
              </div>
            </Link>
            <h4 className=" font-medium text-start text-zinc-800 max-md:max-w-full text-[32px]">
              OTP Verification
            </h4>
            <div className="flex gap-4 flex-row items-center justify-center w-full px-5 max-sm:px-0 my-10 min-sm:w-fit  max-sm:gap-0">



              <div className='flex items-center gap-4'>
                {otp?.map((digit, index) => (
                  <input
                    type="text" pattern="^[0-9]"
                    key={index}
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                    inputMode="numeric"
                    onKeyPress={(e) => {
                      const charCode = e.which ? e.which : e.keyCode;
                      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                        e.preventDefault();
                      }
                      handleKeyPress(e);
                    }}
                    ref={(reference) => (otpBoxReference.current[index] = reference)}
                    className={`border w-16 h-16 max-sm:w-12 max-sm:h-12 text-center text-black p-3 rounded-md block bg-white focus:border-2 focus:outline-none appearance-none border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] focus:border-gray-200 focus:ring-0`}
                    autoFocus={index === 0}

                  />
                ))}

              </div>

              <p className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}>{otpError}</p>
            </div>
            <button

              onClick={() => handleSubmit()}
              className="focus:outline-orange-800 text-lg justify-center items-center px-16 py-4 text-lg text-center text-white whitespace-nowrap user_auth_btn rounded max-md:px-5 max-md:max-w-full cursor-pointer">
              Verify
            </button>


            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2 items-center  whitespace-nowrap text-zinc-800  ">

                <input type="checkbox"
                  // id="checkbox-1"
                  className=" text-orange-500 bg-white border-gray-300 rounded focus:ring-0 "
                />
                <label htmlFor="checkbox-1" className="grow text-base "> Remember me</label>
              </div>
              <div className="font-medium text-orange-500 text-base cursor-pointer"> Resend</div>
            </div>
            <div>
              {apiSuccessResponse ? (
                <div className="text-green-500 text-sm font-medium mt-5">
                  {apiSuccessResponse}
                </div>
              )
                :

                <div className="text-red-500 text-sm font-medium mt-5">
                  {apiFailResponse}
                </div>
              }
            </div>
          </div>


        </div>



        {isModalOpen && (
          <div

            style={{ backgroundColor: 'rgb(0 0 0 / 40%)', overflowY: 'auto !important' }}
            className="max-md:h-full backdrop-filter backdrop-blur-sm inset-0 flex justify-center items-center bg-gray-200 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0"

          >
            <div className=' modals   rounded-2xl  w-full max-w-5xl zoom_in_pp_modal '
            //  style={{ height:'100% !important',overflowY:'auto !important' }}
            >
              {/* <div className="  w-full max-w-5xl max-h-full rounded-2xl "> */}
              <div className="bg-white rounded-2xl shadow-lg  p-6  "
              // style={{ height:'100% !important',overflowY:'auto !important' }}
              >

                <div className='flex items-center justify-center pb-5'>
                  <div className=' text-2xl font-semibold w-full text-left'>User Profile</div>
                  <div className='w-auto text-end '>
                    <button
                      type="button"
                      className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center"
                      onClick={() => closeModal()}

                    >
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
                <div className="border p-5 rounded-lg "
                // style={{ height:'100% !important',overflowY:'auto !important',maxHeight:'100% !important' }}
                >

                  <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-5 '>
                    <div className="flex flex-col w-full">
                      {/* Row 1: Image preview */}
                      {/* Row 2: File input */}
                      <div className="mt-1 mr-4 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full font-medium text-start">
                        Profile Pic <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="file"
                        name="profile_pic"
                        accept="image/*"
                        onChange={(e) => setProfilePic(e.target.files[0])}
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>
                    <div className='flex flex-col w-full'>
                      <div className="mt-1 mr-4 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full font-medium text-start">
                        Name <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={userFormData?.name}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder='Enter your full name'
                        required
                        // className={`py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0
                        //   ${nameError ? 'border-red-500' : ''
                        //    }`}
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                      {/* {nameError && <div className="text-red-500 text-sm text-start">{nameError}</div>} */}
                    </div>

                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Email <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={userFormData?.email}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder='Enter your email address'
                        // className={`py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0
                        //   ${emailError ? 'border-red-500' : ''
                        //    }`}
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                      {/* {emailError && <div className="text-red-500 text-sm text-start">{emailError}</div>} */}
                    </div>


                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Phone Number
                      </div>
                      <input
                        type="number"
                        name="phone"
                        value={storedPhone?.phone_number}
                        // placeholder='+91'
                        disabled
                        className="py-3 pr-4 pl-4 mt-1.5 text-base bg-gray-100 shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>

                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Alternate Phone Number <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="number"
                        name="phone"
                        value={userFormData?.phone}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder='+91'
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>

                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Home/Flat/Floor no. <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="text"
                        name="home"
                        value={userFormData?.home}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder=''
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>
                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Apartment/Road/Area <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="text"
                        name="apartment"
                        value={userFormData?.apartment}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder=''
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>
                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Landmark <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="text"
                        name="landmark"
                        value={userFormData?.landmark}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder=''
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>
                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        City <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="text"
                        name="city"
                        value={userFormData?.city}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder=''
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>
                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        State <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="text"
                        name="state"
                        value={userFormData?.state}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder=''
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>
                    <div className='flex flex-col w-full'>
                      <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                        Pincode <span className="text-red-500"> *</span>
                      </div>
                      <input
                        type="number"
                        name="pincode"
                        value={userFormData?.pincode}
                        onChange={(e) => handleFormChange(e)}
                        // onChange={handleFormChange}
                        placeholder=''
required
                        className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                      />
                    </div>

                    {/* <div className='flex flex-col w-full lg:col-span-2 md:col-span-2'>
                        <div className="mt-1 text-sm blog_intro max-md:mr-2.5 max-md:max-w-full  font-medium">
                          Address
                        </div>
                        <input
                          type="text"
                          name="address"
                          value={userFormData?.address}
                          onChange={(e) => handleFormChange(e)}
                          placeholder=''

                          className="py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                        />
                      </div> */}

                  </div>
                  <div className="w-full flex ">
                    <button

                      onClick={handleFormSubmit}
                      // className="text-lg justify-center items-center px-16 py-4 mt-5 text-lg text-center text-white whitespace-nowrap user_auth_btn rounded max-md:px-5 max-md:max-w-full cursor-pointer"
                      className=" focus:ring-0  w-fit justify-start ms-auto items-start px-8 py-2.5 mt-5 text-lg text-center text-white  user_auth_btn rounded max-md:px-5 max-md:max-w-full cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>

                  {apiSuccessResponse ? (
                    <div className="text-green-500 text-sm font-medium mt-5">
                      {apiSuccessResponse}
                    </div>
                  )
                    :

                    <div className="text-red-500 text-sm font-medium mt-5">
                      {apiFailResponse}
                    </div>
                  }
                  {/* {apiFailResponse && (
                       <div className="text-red-500 text-sm font-medium mt-5">
                         {apiFailResponse}
                       </div>
                     )} */}
                  {nameError && <div className="text-red-500 text-sm ">{nameError}</div>}

                </div>

              </div>

              {/* </div> */}
            </div>
          </div>
        )}

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={1}
          ref={toastVerificationRef}
        />

      </Layout>

    </>
  );
}

export default Verification


