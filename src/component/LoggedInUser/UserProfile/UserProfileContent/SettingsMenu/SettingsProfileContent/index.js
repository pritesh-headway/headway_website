import React, { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchWithFormDataToken } from "../../../../../../apiGeneralFunction";
import { useNavigate } from "react-router-dom";
import * as Images from '../../../../../../assets';
import debounce from 'lodash.debounce';

const SettingsProfileContent = ({ userData, onSave, onCancel }) => {

    const toastContainerRef = useRef(null);

    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [readOnly, setReadOnly] = useState(true);
    const [clearedInputs, setClearedInputs] = useState({});

    // const [clearedInputs, setClearedInputs] = useState({
    //     name: false,
    //     email: false,
    //     phone: false,
    //     home: false,
    //     apartment: false,
    //     landmark: false,
    //     city: false,
    //     state: false,
    //     pincode: false,
    //     address: false
    // });

    const [apiSuccessResponse, setApiSuccessResponse] = useState(false);
    const [apiFailResponse, setApiFailResponse] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');


    // const addressComponents = userData?.address?.split(',')?.map(component => component?.trim());

    // const home = addressComponents[0];
    // const apartment = addressComponents[1];
    // const landmark = addressComponents[2];

    const addressComponents = userData?.address
        ? userData.address.split(',').map(component => component.trim())
        : [];

    const home = addressComponents[0] || '';
    const apartment = addressComponents[1] || '';
    const landmark = addressComponents[2] || '';

    const addressIsEmpty = (address) => {
        return address.replace(/,/g, '').trim() === '';
    };

    const [userFormData, setUserFormData] = useState({
        name: userData.name || '',
        email: userData.email || '',
        mobile: userData.phone_number || '', // main mobile
        alternate_mobile: userData.alternate_phone || '', // alternate mobile
        flat_no: userData.flat_no || '',
        area: userData.area || '',
        landmark: userData.landmark || '',
        city: userData.city || '',
        state: userData.state || '',
        pincode: userData.pincode || '',
        user_id: userData.user_id || userData.id || '', // fallback to id if user_id not present
        profile_pic: userData.avatar || userData.profile_pic || '',
    });

    console.log("userFormData", userFormData.pincode);


    const validateEmail = (phoneNo) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const [, domain] = phoneNo.split('@');
        return emailPattern.test(phoneNo.toLowerCase()) && domain === domain.toLowerCase();
    };

    const validateName = (name) => {
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);
    };


    // const handleFormChange = useCallback((e) => {

    //     // e.preventDefault();

    //     const { name, email, phone, home, apartment, landmark, city, state, pincode, address, value } = e.target;

    //     if (!clearedInputs[name] && value === '') {
    //         setUserFormData((prevFormData) => ({
    //             ...prevFormData,
    //             [name]: '',
    //             [email]: '',
    //             [phone]: '',
    //             [home]: '',
    //             [apartment]: '',
    //             [landmark]: '',
    //             [city]: '',
    //             [state]: '',
    //             [pincode]: '',
    //             [address]: '',

    //         }));
    //         // userData.state = '';
    //         // userData.pincode = '';

    //         setClearedInputs((prevCleared) => ({
    //             ...prevCleared,
    //             [name]: true,
    //             [email]: true,
    //             [phone]: true,
    //             [home]: true,
    //             [apartment]: true,
    //             [landmark]: true,
    //             [city]: true,
    //             [state]: true,
    //             [pincode]: true,
    //             [address]: true,
    //         }));
    //         return;

    //     }
    //     // else {
    //     setUserFormData(prevFormData => ({
    //         ...prevFormData,
    //         [name]: value,
    //         [email]: value,
    //         [phone]: value,
    //         [home]: value,
    //         [apartment]: value,
    //         [landmark]: value,
    //         [city]: value,
    //         [state]: value,
    //         [pincode]: value,
    //         [address]: value,
    //     }));
    //     // };


    //     // if (name === 'name') {
    //     //     if (!validateName(value)) {
    //     //         setNameError('Invalid name. Only letters and spaces are allowed.');
    //     //     } else {
    //     //         setNameError('');
    //     //     }
    //     // }

    //     // if (name === 'email') {
    //     //     if (!validateEmail(value)) {
    //     //         setEmailError('Invalid email address.');
    //     //     } else {
    //     //         setEmailError('');
    //     //     }
    //     // }
    // }, [clearedInputs]);
    // [userFormData, setClearedInputs, setUserFormData]
    //);

    // const handleFormChange = useCallback((e) => {

    //     e.preventDefault();

    //     const { name, email, phone, home, apartment, landmark, city, state, pincode, address, value } = e.target;



    //     // if (!clearedInputs[name] && value === '') {
    //     //     setUserFormData((prevFormData) => ({
    //     //         ...prevFormData,
    //     //         [name]: '',
    //     //         [email]: '',
    //     //         [phone]: '',
    //     //         [home]: '',
    //     //         [apartment]: '',
    //     //         [landmark]: '',
    //     //         [city]: '',
    //     //         [state]: '',
    //     //         [pincode]: '',
    //     //         [address]: '',
    //     //     }));

    //     //     setClearedInputs((prevCleared) => ({
    //     //         ...prevCleared,
    //     //         [name]: true,
    //     //         [email]: true,
    //     //         [phone]: true,
    //     //         [home]: true,
    //     //         [apartment]: true,
    //     //         [landmark]: true,
    //     //         [city]: true,
    //     //         [state]: true,
    //     //         [pincode]: true,
    //     //         [address]: true,
    //     //     }));
    //     // } else {
    //     //     setUserFormData((prevFormData) => ({
    //     //         ...prevFormData,
    //     //         [name]: value,
    //     //         [email]: value,
    //     //         [phone]: value,
    //     //         [home]: value,
    //     //         [apartment]: value,
    //     //         [landmark]: value,
    //     //         [city]: value,
    //     //         [state]: value,
    //     //         [pincode]: value,
    //     //         [address]: value,
    //     //     }));

    //     //     setClearedInputs((prevCleared) => ({
    //     //         ...prevCleared,
    //     //         [name]: false,
    //     //         [email]: false,
    //     //         [phone]: false,
    //     //         [home]: false,
    //     //         [apartment]: false,
    //     //         [landmark]: false,
    //     //         [city]: false,
    //     //         [state]: false,
    //     //         [pincode]: false,
    //     //         [address]: false,
    //     //     }));
    //     // }

    //     setUserFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //         [email]: value,
    //         [phone]: value,
    //         [home]: value,
    //         [apartment]: value,
    //         [landmark]: value,
    //         [city]: value,
    //         [state]: value,
    //         [pincode]: value,
    //         [address]: value,
    //     }));

    //     if (value === '') {
    //         setClearedInputs((prevCleared) => ({
    //             ...prevCleared,
    //             [name]: true,
    //             [email]: true,
    //             [phone]: true,
    //             [home]: true,
    //             [apartment]: true,
    //             [landmark]: true,
    //             [city]: true,
    //             [state]: true,
    //             [pincode]: true,
    //             [address]: true,
    //         }));
    //     } else {
    //         setClearedInputs((prevCleared) => ({
    //             ...prevCleared,
    //             [name]: false,
    //             [email]: false,
    //             [phone]: false,
    //             [home]: false,
    //             [apartment]: false,
    //             [landmark]: false,
    //             [city]: false,
    //             [state]: false,
    //             [pincode]: false,
    //             [address]: false,
    //         }));
    //     }
    // }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUserFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    //   const addressData = userFormData.home + ", " + userFormData.apartment + ", " + userFormData.landmark + ", " + userFormData.city || userData.city + ", " + userFormData.state  + ", " + userFormData.pincode




    const handleFormSubmit = () => {

        console.log("userFormData.state", userFormData.state);

        const addressData = [
            userFormData.home,
            userFormData.apartment,
            userFormData.landmark,
            userFormData.city || userData.city,
            userFormData.state ? userFormData.state : '',
            userFormData.pincode ? userFormData.pincode : ''
        ].filter(Boolean).join(', ');
        console.log("usersfahgdf address", addressData);

        const fetchAPI = async () => {

            if (!validateName(userFormData?.name)) {

                setNameError('Name should not contain numbers or special characters.')

            }
            else if (!validateEmail(userFormData?.email)) {

                setNameError('Please enter a valid email address.')

            }
            else {
                const tokenValue = localStorage?.getItem('login api response token');
                const storedToken = JSON?.parse(tokenValue);

                try {

                    // const fileInput = document.getElementById('file-input');
                    const formdata = new FormData();
                    formdata.append("name", userFormData.name);
                    formdata.append("email", userFormData.email);
                    formdata.append("profile_pic", selectedFile || userFormData.profile_pic);
                    formdata.append("mobile", userFormData.mobile);
                    formdata.append("alternate_mobile", userFormData.alternate_mobile);
                    formdata.append("flat_no", userFormData.flat_no);
                    formdata.append("area", userFormData.area);
                    formdata.append("landmark", userFormData.landmark);
                    formdata.append("state", userFormData.state);
                    formdata.append("city", userFormData.city);
                    formdata.append("pincode", userFormData.pincode);
                    formdata.append("user_id", userFormData.user_id);

                    //const endpoint = `api/user_profile_update`;

                    // const result = await fetchWithFormDataToken(endpoint, formdata, storedToken);
                    const result = await fetchWithFormDataToken('profile/update', formdata, storedToken);
                    // console.log('API post user response:1', result);
                    if (result?.status === true) {
                        // console.log('API post user response:2', result);
                        // localStorage.setItem("user_data",JSON.stringify(result?.data))
                        // toast.dismiss()

                        // toast.success(result?.message, {
                        //     position: 'top-center',
                        //     autoClose: 2000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        //     theme: "light",
                        //     // onMount: (toastObject) => {
                        //     //     toastContainerRef.current = toastObject.id; // <--- Update the toastId
                        //     //   },
                        //     onClose: handleNavigation,

                        //     // onClose: () => {

                        //     //     navigate('/user_profile', { state: { openAccountInfoTab: true } });
                        //     //     toast.done();
                        //     //     //     toast.dismiss();

                        //     // },
                        // });



                        // navigate('/user_profile', { state: { openAccountInfoTab: true } });
                        // toast.dismiss();
                        // toast.removeAll();


                        // navigate('/user_profile', { state: { openAccountInfoTab: true } });

                        // window.location.reload();
                        setApiSuccessResponse(result?.message);
                        setNameError('');
                        setEmailError('');
                        // Call onSave to exit edit mode
                        if (onSave) onSave(result?.data);
                        window.dispatchEvent(new Event('userProfileUpdated'));
                        // setApiSuccessResponse(result?.message)
                        // setTimeout(() => {

                        //     navigate('/user_profile', { state: { openAccountInfoTab: true } });
                        // }, 5000)
                        // setNameError('')
                        // setEmailError('')
                    }
                    else {
                        setApiFailResponse(result?.message)
                        // toast.dismiss()
                        // toast.error(result?.message, {
                        //     position: 'top-center',
                        //     autoClose: 3000,

                        // });
                    }


                } catch (error) {
                    console.error('Error fetching API:', error);
                }
            }

        };
        fetchAPI();
    }


    useEffect(() => {
        const clearWaitingQueue = () => {
            // Easy, right 😎
            toast.clearWaitingQueue();
        }
        clearWaitingQueue();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Use avatar or profile_pic from userData if available and no new image is selected
        if (!image && (userData.avatar || userData.profile_pic)) {
            setImage(userData.avatar || userData.profile_pic);
        }
    }, [userData, image]);

    const phone = localStorage.getItem('register api response');
    const storedPhone = JSON.parse(phone);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        handleFile(file);
        const fileName = file;
        setSelectedFileName(fileName?.name)
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);

        setSelectedFile(file)

    };


    const ProfileImage = useCallback(() => {

        return (
            <div
                className="flex flex-col p-6 mt-8 w-48  rounded-lg border border-orange-500 border-dashed terms_bg_clr max-md:px-5 max-md:max-w-full"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <label htmlFor="file-input" className="cursor-pointer">
                    {image ? (
                        <div className="text-center  mx-auto">
                            <img
                                loading="lazy"
                                src={image}
                                alt="Profile"
                                className="self-center w-28 border-white border-solid aspect-square border-[6px] mx-auto"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="file-input"
                            />
                        </div>
                    ) : (
                        <div className="text-center  mx-auto">
                            <img
                                loading="lazy"
                                srcSet={Images.placeholder_settings_profile}
                                alt="Profile"
                                className=" w-24 mx-auto"
                            />

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="file-input"
                            />
                        </div>
                    )}
                    <div className="w-full text-end">
                        <i className="fa fa-edit text-orange-500"></i>
                    </div>
                    {!image &&
                        <>
                            <div className="mt-1 text-xs text-center text-neutral-400 max-md:max-w-full">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </div>
                        </>
                    }
                </label>
            </div>
        );

    }, [image]);




    return (
        <>
            <main className="flex flex-col justify-center rounded-xl max-w-full w-[1296px]">

                <ProfileImage />

                <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                    <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Personal Information</h2>
                    <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                Full Name  <span className="text-red-700">*</span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={userFormData?.name || ''}
                                onChange={handleFormChange}
                                className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />

                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                Email Address  <span className="text-red-700">*</span>
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={userFormData?.email || ''}
                                onChange={handleFormChange}
                                className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>

                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Phone Number</div>
                            <div className="text-start h-12 px-3.5 py-3 mt-1.5 text-base bg-gray-100 rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full">
                                {storedPhone?.phone_number}
                            </div>
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Alternate Phone Number</div>
                            <input
                                type="number"
                                name="alternate_mobile"
                                value={userFormData?.alternate_mobile || ''}
                                onChange={handleFormChange}
                                className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                    <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Address</h2>
                    <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full" id="home">Home/Flat/Floor no.</div>
                            <input
                                type="text"
                                name="flat_no"
                                id="flat_no"
                                value={userFormData?.flat_no || ''}
                                onChange={handleFormChange}
                                placeholder=''

                                className="text-start py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 focus:outline-0"
                            />

                        </div>

                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full" id="apartment">Apartment/Road/Area</div>
                            <input
                                type="text"
                                name="area"
                                value={userFormData?.area || ''}
                                onChange={handleFormChange}
                                className="text-start h-12 focus:border-gray-200 focus:ring-0 focus:outline-0 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Landmark</div>
                            <input
                                type="text"
                                name="landmark"
                                value={userFormData?.landmark || ''}
                                onChange={handleFormChange}
                                className="text-start focus:ring-0 focus:outline-0 focus:border-gray-200 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">City</div>
                            <input
                                type="text"
                                name="city"
                                value={userFormData?.city || ''}
                                onChange={handleFormChange}
                                className="text-start focus:ring-0 focus:outline-0 focus:border-gray-200 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">State</div>
                            <input
                                type="text"
                                name="state"
                                value={userFormData?.state || ''}
                                onChange={handleFormChange}
                                className="text-start focus:ring-0 focus:outline-0 focus:border-gray-200 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Pincode </div>
                            <input
                                type="number"
                                name="pincode"
                                value={userFormData?.pincode || ''}
                                onChange={handleFormChange}
                                className="text-start focus:ring-0 focus:outline-0 focus:border-gray-200 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                            />
                        </div>
                    </div>

                </section>
                <div className="flex gap-5 pl-20 mt-6 text-base justify-end font-medium max-md:flex-wrap max-md:pl-5">

                    <button
                        onClick={handleFormSubmit}
                        className="justify-center px-4 py-2.5 text-white bg-orange-500 rounded-lg focus:outline-0">Save Changes</button>
                </div>

                {apiSuccessResponse ? (
                    <div className="text-green-500 text-base font-medium mt-5 ">
                        {apiSuccessResponse}
                    </div>
                ) :
                    <div className="text-red-500 text-base font-medium mt-5 ">
                        {apiFailResponse}
                    </div>
                }
                {nameError && <div className="text-red-500 text-sm ">{nameError}</div>}

            </main>
        </>
    );
}

export default SettingsProfileContent