import React, { useEffect, useRef, useState } from "react";
import * as Images from '../../../../assets';
import Layout from "../../../Layout";
import { Link, useLocation } from "react-router-dom";
import { fetchWithFormData } from "../../../../apiGeneralFunction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegisterWithEmail = () => {

  const navigate = useNavigate();
  const topButtonRef = useRef(null);


  const [responseText, setResponseText] = useState([]);
  const [number, setNumber] = useState('');
  const [errText, setErrText] = useState('');
  const [apiSuccessResponse, setApiSuccessResponse] = useState('');
  const [apiFailResponse, setApiFailResponse] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {

  //   const tokenValue = localStorage?.getItem('login api response token') || '';
  //   const storedToken = JSON?.parse(tokenValue) || '';
  //   if (storedToken) {
  //       navigate('/');
  //   }
  // },[]);
  useEffect(() => {

    const tokenValue = localStorage.getItem('login api response token') || '';

    if (tokenValue) {

      try {
        const storedToken = JSON.parse(tokenValue);

        if (storedToken) {
          navigate('/');
        }
      } catch (error) {

        //console.error('Error parsing JSON:', error);
      }
    }
  }, [navigate]);


  // const handleData = async() => {
  //   const formdata = new FormData();
  //   formdata.append("phone", "9510067874");

  //   const requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow"
  //   };

  //   await fetch("http://54.196.234.76/api/register", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log('result register api', result))
  //     .catch((error) => console.error(error));
  // }

  const onChange = (event) => {
    setNumber(event?.target?.value);
  };

  const handleSubmit = async () => {

    if (!number) {
      //toast.dismiss();
      // toast.error('Please enter your phone number', {
      //   position: 'top-center',
      //   autoClose: 5000,
      // });
      setErrText('Please enter your mobile number')
      return; // Stop further execution if phone number is empty
    }


    // if (number?.length !== 10) {
    //   toast.error('Phone number must be exactly 10 digits', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //   });
    //   return;
    // }

    const formdata = new FormData();
    formdata.append("mobile", number);
    formdata.append("country_code", "91");

    try {
      const result = await fetchWithFormData('sendOtp', formdata);
      if (result?.status === true) {
        setErrText(result?.message)
        setResponseText(result?.data?.phone_number);
        localStorage.setItem("register api response", JSON.stringify(result?.data))
        // toast.dismiss();
        // toast.success(result?.message, {
        //   position: 'top-center',
        //   autoClose: 2000,
        //   onClose: () => {
        //     navigate('/verification');

        //   }
        // });
        setApiSuccessResponse(result?.message)
        setApiFailResponse('')
        setTimeout(() => navigate('/verification'), 2000)
        // navigate('/verification');

      }
      else {
        setApiSuccessResponse('')
        setApiFailResponse(result?.message)
        // setErrText(result?.message)
        // //toast.dismiss();
        // toast.error(result?.message, {
        //   position: 'top-center',
        //   autoClose: 3000,
        //   onClose: () => {
        //     navigate('/login');

        //   }
        // });
        setTimeout(() => setNumber(''), 2000)

      }
    } catch (error) {
      setResponseText("An error occurred while fetching data.", error);
      setNumber('')
    }
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };





  return (
    <>
      <Layout>
        <div className="flex flex-col bg-white">
          <div className="relative flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div
              //className="absolute top-[50%] "
              className="absolute  bottom-0"
            >
              <img
                // src={Images.user_auth_vector}
                src={Images.user_auth_bg}
                alt="Images"
                loading="lazy"
                className=""
              // className=" aspect-[5.5] size-full"
              // className="object-fill object-center "
              />
            </div>
            <div className="z-10 flex flex-col p-10 my-6 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[540px] max-md:px-5">
              <Link to={'/'}>
                <div className="flex justify-end items-center ">
                  <img
                    src={Images.close_icon}
                    alt="Images"
                    loading="lazy"
                    className="w-7 "
                  />
                </div>
              </Link>
              {/* <h4 className=" font-medium text-start text-zinc-800 max-md:max-w-full">
                Register
              </h4> */}
              <h4 className=" font-medium text-start text-zinc-800 max-md:max-w-full text-[32px]">
                Log in
              </h4>
              <div className="mt-9 text-base text-neutral-400 max-md:max-w-full text-start">
                Mobile Number <span className="text-red-700">*</span>
              </div>

              {/* <form class="max-w-sm mx-auto">
                <div class="flex">
                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                 
                  </span>
                  <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
                </div>
              </form> */}
              <div
                className="mt-4 flex items-center h-14 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
              >
                <div className="" dir="ltr">
                  <input
                    type="text"
                    placeholder="+91"
                    disabled
                    className="h-14 w-16 rounded-s-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] focus:border-gray-200 focus:ring-0 bg-gray-200"
                  // className="shrink h-14 w-16 rounded-s-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] focus:border-gray-200 focus:ring-0 bg-gray-200"
                  />
                </div>
                <div className="w-full" >
                  <input
                    type="text"
                    value={number}
                    inputMode="numeric"
                    onChange={onChange}
                    required
                    // maxLength={10}
                    onKeyPress={(e) => {
                      const charCode = e.which ? e.which : e.keyCode;
                      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                        e.preventDefault();
                      }
                      handleKeyPress(e);
                    }}
                    className=" h-14 rounded-se-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 w-full"
                  />
                </div>
              </div>

              {/* <div className="shrink-0 mt-4 h-14 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full" /> */}
              {/* <Link to={'/verification'}> */}
              <button
                onClick={handleSubmit}
                ref={topButtonRef}
                // onClick={() => handleData()}
                className="focus:outline-orange-800 user_auth_btn justify-center items-center px-16 py-4 mt-8 text-lg text-center text-white whitespace-nowrap rounded max-md:px-5 max-md:max-w-full">
                Get OTP
              </button>
              {/* <div className="text-lg">{errText}</div> */}
              {/* </Link> */}
              {/* <div className="self-center mt-4 text-sm text-center text-orange-500">
                <span className="text-zinc-800">
                  By signing up, you agree to the{" "}
                </span>
                <span className="text-orange-500">Terms of Service</span>{" "}
                <span className="text-zinc-800">and</span>{" "}
                <span className="text-orange-500">Privacy </span>
                <br />
                <span className="text-orange-500">Policy</span>
                <span className="text-zinc-800">, including </span>
                <span className="text-orange-500">cookie use</span>
                <span className="text-zinc-800">.</span>
              </div> */}
              {/* <div className="flex gap-2 justify-between items-center mt-20 text-base text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <input type="checkbox" id="checkbox-1"
                  className="w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-0"
                />
                <label htmlFor="checkbox-1" className="flex-auto max-md:max-w-full"> Register to this site with a public profile</label>

              </div> */}
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
                {errText && !apiSuccessResponse && !apiFailResponse &&
                  <div className="text-red-500 text-sm font-medium mt-5">
                    {errText}
                  </div>
                }

              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Layout>
    </>
  );
}

export default RegisterWithEmail


