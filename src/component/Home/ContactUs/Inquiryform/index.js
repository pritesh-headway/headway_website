import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchWithFormData } from '../../../../apiGeneralFunction';
import Countries from '../../../../countries.json';
import { useNavigate } from 'react-router-dom';

const Inquiryform = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const contentEditableRef = useRef(null);

    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [apiSuccessResponse, setApiSuccessResponse] = useState(false);
    const [apiFailResponse, setApiFailResponse] = useState(false);


    const countries = [
        { code: '+91', name: 'India', flag: '🇮🇳' },
        { code: '+1', name: 'United States', flag: '🇺🇸' },
        // Add more countries as needed
    ];

    // useEffect(() => {
    //     if (contentEditableRef.current && !formSubmitted) {
    //         const range = document.createRange();
    //         const selection = window.getSelection();
    //         range.selectNodeContents(contentEditableRef.current);
    //         range.collapse(false);
    //         selection.removeAllRanges();
    //         selection.addRange(range);
    //     }
    // }, [formSubmitted]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });

    const [selectedCountry, setSelectedCountry] = useState(Countries[0]);

    const validateEmail = (email) => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const [, domain] = email.split('@'); // Extracting the domain part
        return emailPattern.test(email.toLowerCase()) && domain === domain.toLowerCase();
    };

    const validateName = (name) => {
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);
    };

    const notify = () => toast("Wow so easy!");


    const handleChange = (e) => {

        e.preventDefault();

        const { name, email, value, phone, city, message } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
            [email]: value,
            [phone]: value,
            [city]: value,
            [message]: value,
        }));
        // setFormSubmitted(false);
    };

    let currentToastId = null;

    const handleSubmit = async (e) => {

        e.preventDefault();



        const login_token = localStorage.getItem("login api response token");
        // console.log("register_number", JSON?.parse(login_token))
        const token_value = JSON?.parse(login_token)

        const formdata = new FormData();
        formdata.append("name", formData.name);
        formdata.append("email", formData.email);
        formdata.append("country_code", '91');
        formdata.append("phone", formData.phone);
        formdata.append("city", formData.city);
        formdata.append("message", formData.message);

        try {
            const result = await fetchWithFormData('contactUs', formdata, token_value);
            // console.log("response register text ", result.status);
            if (result.status === true) {

                setTimeout(() => {
                    setApiSuccessResponse('')
                    setApiFailResponse('')
                }, 4000)
                setApiSuccessResponse(result?.message)
                //  setFormData({
                //      name: '',
                //      email: '',
                //      phone: '',
                //      city: '',
                //      message: ''
                //  });
                setFormData(prevFormData => ({
                    ...prevFormData,
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    message: ''
                }));
                // setFormData({})
                setFormSubmitted(false)
                // const editableDiv = document.querySelector('[contentEditable="true"]');
                // if (editableDiv) {
                //     editableDiv.innerText = '';
                // }
            }
            else {
                // toast.dismiss()
                setTimeout(() => {
                    setApiSuccessResponse('')
                    setApiFailResponse('')
                }, 4000)
                setApiFailResponse(result?.message)
                //  toast.error(result?.message, {
                //      position: 'top-center',
                //      autoClose: 2000,
                //  });
                //  return;
            }
        } catch (error) {
            // toast.dismiss();
            // toast.error('An error occurred. Please try again.', {
            //     position: 'top-center',
            //     autoClose: 3000,
            // });
        }


    };

    const errorMessages = {
        name: 'Please enter your name',
        email: 'Please enter a valid email address',
        phone: 'Please enter your phone number',
        city: 'Please enter your city',
        message: 'Please enter a message',
    };

    let selectionRange;

    const handleInput = (e) => {
        setFormData({ ...formData, message: e.target.value });
        //     const text = e.target.innerText;
        // setFormData({ ...formData, message: text });
        //  const target = e.target;
        //  const text = target.innerText;
        //  setFormData({ ...formData, message: text });
        // // target.focus();
        // const selection = window.getSelection();
        // const range = document.createRange();
        // range.selectNodeContents(target);
        // range.collapse(false);
        // selection.removeAllRanges();
        // selection.addRange(range);
    };


    // const handleFocus = () => {
    //     const selection = window.getSelection();
    //     const range = document.createRange();
    //     range.selectNodeContents(contentEditableRef.current);
    //     range.collapse(false); 
    //     selection.removeAllRanges();
    //     selection.addRange(range);
    //   };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const nextNode = range.endContainer.nextSibling;
            if (nextNode && nextNode.nodeName === 'BR') {
                range.setStartAfter(nextNode);
                range.setEndAfter(nextNode);
            } else {
                const br = document.createElement('br');
                range.insertNode(br);
                range.setStartAfter(br);
                range.setEndAfter(br);
            }
            selection.removeAllRanges();
            selection.addRange(range);
        }
        // if (e.key === 'Enter') {
        //     e.preventDefault();
        //     // document.execCommand('insertHTML', false, '<br>');
        //     document.execCommand('insertLineBreak');
        //     const selection = window.getSelection();
        //     selection.collapseToEnd();
        // }
    };

    return (
        <>

            <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full max-lg:mt-7  overflow-x-hidden">
                <form
                    // onSubmit={handleSubmit}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true)
                        const errors = {};
                        if (!formData.name) {
                            errors.name = 'Please enter your name';
                        } else if (!validateName(formData.name)) {
                            errors.name = 'Invalid name format';
                        }
                        if (!formData.email) {
                            errors.email = 'Please enter a valid email address';
                        } else if (!validateEmail(formData.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!formData.phone) {
                            errors.phone = 'Please enter your phone number';
                        }
                        if (!formData.city) {
                            errors.city = 'Please enter your city';
                        }
                        if (!formData.message) {
                            errors.message = 'Please enter a message';
                        }
                        if (Object.keys(errors).length > 0) {

                            Object.keys(errors).forEach((key) => {
                                console.error(errors[key]);
                                // You can also display the error messages in the UI
                                // For example:
                                // <div className="text-red-500 text-sm font-medium">{errors[key]}</div>
                            });
                        } else {
                            // Submit the form
                            handleSubmit(e);
                        }

                    }}
                >
                    <div className="flex relative flex-col grow p-12 w-full bg-white rounded-3xl border-2 border-[#f58320] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-2xl font-bold text-zinc-800 max-md:max-w-full">
                            Your Inquiry, Our Expertise
                        </div>
                        <div className="mt-4 text-base text-zinc-500 max-md:max-w-full font-medium">
                            Your Questions, Our Solutions: Crafting Success Together
                        </div>
                        <div className='flex flex-col w-full '>
                            {formSubmitted && Object.keys(formData).some((key) => !formData[key]) && (
                                <div className="text-red-500 text-sm font-medium mb-4">
                                    Please fill in all required fields!
                                </div>
                            )}
                            <div className=" mt-6 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full font-medium text-start">
                                Name
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Full Name'

                                // className="py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                className={`py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full 
                                focus:border-gray-200 focus:ring-0 ${formSubmitted && !formData.name ? 'border-red-500' : ''
                                    }`}
                            />
                            {formSubmitted && !formData.name && (
                                <div className="text-red-500 text-sm font-medium text-start">
                                    {errorMessages.name}
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col w-full'>
                            <div className="mt-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full  font-medium text-start">
                                Email
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email ID'

                                //className="py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                className={`py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] 
                                max-md:max-w-full focus:border-gray-200 focus:ring-0 ${formSubmitted && !formData.email ? 'border-red-500' : ''
                                    }`}
                            />
                            {formSubmitted && !formData.email && (
                                <div className="text-red-500 text-sm font-medium text-start">
                                    {errorMessages.email}
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 justify-between mt-4 max-md:max-w-full max-md:flex-row grid lg:grid-cols-2 grid-cols-1">
                            {/* <div className="flex flex-col w-full">
                                <div className="text-sm text-zinc-800  font-medium">Phone</div>
                                <div className='flex'>

                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='+91'

                                        className="grow py-3 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                    />
                                </div>

                            </div> */}

                            <div className="flex flex-col w-full">
                                <div className="text-sm text-zinc-800 font-medium text-start text-start">Phone</div>
                                <div

                                    // className=' flex items-center py-1 pl-4 pe-1 mt-1.5 text-base rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0'
                                    className={`flex items-center py-1 pl-4 pe-1 mt-1.5 text-base rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 ${formSubmitted && !formData.phone ? 'border-red-500' : ''
                                        }`}
                                >
                                    {/* <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            {selectedCountry.flag}
                                        </div>
                                        <select
                                            name="country"
                                            value={selectedCountry.code}
                                            onChange={(e) => {
                                                const selectedCode = e.target.value;
                                                const selectedCountry = countries.find(country => country.code === selectedCode);
                                                setSelectedCountry(selectedCountry);
                                            }}
                                            className="bg-transparent appearance-none py-3 pl-10 pr-4 mt-1.5 text-base border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-lg max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                        >
                                            {countries.map((country, index) => (
                                                <option key={index} value={country.code}>{country.code}</option>
                                            ))}
                                        </select>
                                    </div> */}
                                    {/* <div
                                    //  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                    >
                                        {selectedCountry?.emoji}
                                    </div> */}
                                    {/* <select
                                        className='border-0 focus:outline-0 active:outline-0 focus:ring-0'
                                        name="country"
                                        value={selectedCountry?.dial_code}
                                        onChange={(e) => {
                                            const selectedCode = e.target.value;
                                            const selectedCountry = Countries.find(country => country?.dial_code === selectedCode);
                                            setSelectedCountry(selectedCountry);
                                        }}
                                        // style={{maxHeight:'500px'}}
                                       
                                    // className="bg-transparent appearance-none py-3 pl-10 pr-4 mt-1.5 text-base border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-lg max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                    >
                                
                                        {Countries?.map((country, index) => (
                                            <option key={index}
                                                className='border-0  '
                                                value={country?.dial_code}>{country?.emoji} {country?.dial_code} </option>
                                        ))}
                             
                                    </select> */}
                                    <div
                                        className='text-gray-400'
                                    //className="justify-center items-start py-3 pr-16 pl-4 mt-1.5 text-base bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] text-neutral-400 max-md:pr-5"
                                    >
                                        +91
                                    </div>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='Mobile No.'
                                        className='focus:outline-0 focus:ring-0 text-base border-0  w-full'


                                    />

                                </div>
                                {formSubmitted && !formData.phone && (
                                    <div className="text-red-500 text-sm font-medium text-start">
                                        {errorMessages.phone}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="text-sm text-zinc-800 text-start font-medium">City</div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder='City'

                                    //className="py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
                                    className={`py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 ${formSubmitted && !formData.city ? 'border-red-500' : ''
                                        }`}
                                />
                                {formSubmitted && !formData.city && (
                                    <div className="text-red-500 text-sm font-medium text-start">
                                        {errorMessages.city}
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className="text-start font-medium mt-4 mr-4 text-sm text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
                                Message
                            </div>
                            {/* <div
                                // ref={contentEditableRef}
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                                onInput={handleInput}
                                onKeyDown={handleKeyDown}
                                // onFocus={handleFocus}
                                // onInput={(e) => setFormData({ ...formData, message: e.target.innerText })}
                                // onChange={handleChange}

                                //  className="focus:outline-0 focus:border focus:ring-slate-200 items-start py-5 px-4 mt-1.5 text-base h-32 bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:pr-5 max-md:max-w-full"
                                className={`text-start py-3 pr-16 pl-4 mt-1.5 text-base shrink-0 h-32  rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 focus:outline-gray-200 ${formSubmitted && !formData.message ? 'border-red-500' : 'border-gray-200'
                                    }`}
                            >
                                {formData.message}
                            </div>



                            {formSubmitted && !formData.message && (
                                <div className="text-red-500 text-sm font-medium text-start">
                                    {errorMessages.message}
                                </div>
                            )} */}
                            <textarea
                               // contentEditable="true"
                                rows={5}
                                value={formData.message}
                                name="message"
                                onInput={handleChange}
                                // className="focus:outline-0 focus:border-0 focus:ring-slate-200 items-start py-5 px-4 mt-1.5 text-base bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:pr-5 max-md:max-w-full"
                                placeholder="Message..."
                                // onChange={handleChange}
                                // placeholder='Message...'
                                // className="focus:outline-0 focus:border-0 focus:ring-slate-200 items-start pt-5 pr-16 pb-20 pl-4 mt-1.5 text-base whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:pr-5 max-md:max-w-full"
                                // className="focus:outline-0 focus:border-0 focus:ring-slate-200 items-start py-5 px-4 mt-1.5 text-base bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:pr-5 max-md:max-w-full"
                                className={`focus:outline-0 focus:border-0 focus:ring-slate-200 items-start py-5 px-4 mt-1.5 text-base bg-white rounded-md border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:pr-5 max-md:max-w-full ${formSubmitted && !formData.message ? 'border-red-500' : 'border-gray-200'
                                    }`}
                            >
                              
                            </textarea>
                            {/* Message
                            </textarea> */}
                        </div>
                        <button type="submit" className="focus:outline-0 flex gap-3 justify-center self-start px-8 py-2.5 mt-6 text-base font-medium text-white whitespace-nowrap bg-orange-500 rounded-lg max-md:px-5">
                            <div
                            // onClick={(e) => handleSubmit(e)}
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     setFormSubmitted(true)
                            //     const errors = {};
                            //     if (!formData.name) {
                            //         errors.name = 'Please enter your name';
                            //     } else if (!validateName(formData.name)) {
                            //         errors.name = 'Invalid name format';
                            //     }
                            //     if (!formData.email) {
                            //         errors.email = 'Please enter a valid email address';
                            //     } else if (!validateEmail(formData.email)) {
                            //         errors.email = 'Invalid email address';
                            //     }
                            //     if (!formData.phone) {
                            //         errors.phone = 'Please enter your phone number';
                            //     }
                            //     if (!formData.city) {
                            //         errors.city = 'Please enter your city';
                            //     }
                            //      if (!formData.message) {
                            //        errors.message = 'Please enter a message';
                            //      }
                            //     if (Object.keys(errors).length > 0) {

                            //         Object.keys(errors).forEach((key) => {
                            //             console.error(errors[key]);
                            //             // You can also display the error messages in the UI
                            //             // For example:
                            //             // <div className="text-red-500 text-sm font-medium">{errors[key]}</div>
                            //         });
                            //     } else {
                            //         // Submit the form
                            //         handleSubmit(e);
                            //     }

                            // }}
                            //   disabled={Object.keys(errorMessages).length > 0}
                            >Submit</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                                className="my-auto w-4 aspect-square"
                                alt="Images"
                            />
                        </button>
                        {apiSuccessResponse ? (
                            <div className="text-green-500 text-sm font-medium mt-5">
                                {apiSuccessResponse}
                            </div>
                        ) :
                            <div className="text-red-500 text-sm font-medium mt-5">
                                {apiFailResponse}
                            </div>
                        }
                        {/* {apiFailResponse && (
                            <div className="text-red-500 text-sm font-medium mt-5">
                                {apiFailResponse}
                            </div>
                        )} */}
                    </div>
                </form>

            </div>

        </>
    )
}

export default Inquiryform