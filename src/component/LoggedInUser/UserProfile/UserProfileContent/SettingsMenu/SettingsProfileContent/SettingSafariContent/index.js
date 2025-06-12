import React, { useCallback, useEffect, useState } from "react";
import { fetchWithFormDataToken } from "../../../../../../../apiGeneralFunction";
import { useNavigate } from "react-router-dom";
import * as Images from '../../../../../../../assets';

const SettingSafariContent = ({ userData }) => {


  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [clearedInputs, setClearedInputs] = useState({});
  const [apiSuccessResponse, setApiSuccessResponse] = useState(false);
  const [apiFailResponse, setApiFailResponse] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const addressComponents = userData?.address?.split(',')?.map(component => component?.trim());

  const home = addressComponents[0];
  const apartment = addressComponents[1];
  const landmark = addressComponents[2];

  const [userFormData, setUserFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    phone: userData.mobile || userData.phone || '',
    home: home || '',
    apartment: apartment || '',
    landmark: landmark || '',
    city: userData?.city || '',
    state: userData?.state || '',
    pincode: userData?.zipcode || '',
    // address: addressIsEmpty(userData?.address) ? '' : userData?.address
    address: userData?.address || '',
});

  console.log("userFormData", userFormData);


  const validateEmail = (phoneNo) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [, domain] = phoneNo.split('@');
    return emailPattern.test(phoneNo.toLowerCase()) && domain === domain.toLowerCase();
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
  };



  const handleFormChange = (e) => {

    e.preventDefault();

    const { name, email, phone, home, apartment, landmark, city, state, pincode, address, value } = e.target;

    setUserFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [email]: value,
      [phone]: value,
      [home]: value,
      [apartment]: value,
      [landmark]: value,
      [city]: value,
      [state]: value,
      [pincode]: value,
      [address]: value,  
    }));
  }

  const handleFormSubmit = () => {

    console.log("userFormData.state", userFormData.state);

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

          const formdata = new FormData();
          if (selectedFile) {
            formdata.append("profile_pic", selectedFile, selectedFileName);
          } else if (userData.profile_pic) {
            formdata.append("profile_pic", userData.profile_pic);
          }
          formdata.append("name", userFormData.name || userData.name);
          formdata.append("email", userFormData.email || userData.email);
          formdata.append("mobile", userFormData.phone || userData.mobile);
          formdata.append("phone", storedPhone?.phone);
          formdata.append("city", userFormData.city || userData.city);
          formdata.append("state", userFormData.state || userData.state);
          formdata.append("zipcode", userFormData.pincode || userData.zipcode);
          formdata.append("address", userFormData.home + ", " + userFormData.apartment + ", " + userFormData.landmark + ", " + userFormData.city || userData.city + ", " + userFormData.state || userData.state + ", " + userFormData.pincode || userData.zipcode);

          const result = await fetchWithFormDataToken('api/user_profile_update', formdata, storedToken);
          if (result?.status === true) {

            setApiSuccessResponse(result?.message)
            setTimeout(() => {
              navigate('/user_profile', { state: { openAccountInfoTab: true } });
            }, 1000)

          }
          else {
            setApiFailResponse(result?.message)

          }


        } catch (error) {
          console.error('Error fetching API:', error);
        }
      }

    };
    fetchAPI();
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                value={userFormData?.name}
                onChange={handleFormChange}
                className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                Email Address  <span className="text-red-700">*</span>
              </div>
              <input
                type="text"
                name="email"
                value={userFormData?.email}
                onChange={handleFormChange}
                className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
              />
            </div>

            <div className="flex flex-col max-md:max-w-full">
              <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Phone Number</div>
              <div className="text-start h-12 px-3.5 py-3 mt-1.5 text-base bg-gray-100 rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full">
                {storedPhone?.phone}
              </div>
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Alternate Phone Number</div>
              <input
                type="number"
                name="phone"
                value={userFormData?.phone}
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
              <div className="text-start text-sm text-neutral-400 max-md:max-w-full" >Home/Flat/Floor no.</div>
              <input
                type="text"
                name="home"
               
                value={userFormData?.home}
                onChange={handleFormChange}
                placeholder=''
                className="text-start py-3 pr-4 pl-4 mt-1.5 text-base shrink-0 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 focus:outline-0"
              />

            </div>

            <div className="flex flex-col max-md:max-w-full">
              <div className="text-start text-sm text-neutral-400 max-md:max-w-full" >Apartment/Road/Area</div>
              <input
                type="text"
                name="apartment"
               
                value={userFormData?.apartment}
                onChange={handleFormChange}
                className="text-start h-12 focus:border-gray-200 focus:ring-0 focus:outline-0 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="text-start text-sm text-neutral-400 max-md:max-w-full">Landmark</div>
              <input
                type="text"
                name="landmark"
              
                value={userFormData?.landmark}
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

export default SettingSafariContent