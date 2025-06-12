import React, { useEffect } from "react";
import Layout from "../../../Layout";
import * as Images from '../../../../assets';
import { Link } from "react-router-dom";

const LoginWithSociallMedia = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Layout>
      <div className=" bg-white relative flex justify-center items-center px-16 py-12 w-full text-lg bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
        {/* <div className="absolute top-[50%] ">
          <img
            src={Images.user_auth_vector}
            alt="Images"
            loading="lazy"
            className="object-fill object-center "
          />
        </div> */}
        <div 
            // className="absolute top-[50%] "
            className="absolute  bottom-0"
            >
              <img
                src={Images.user_auth_vector}
                alt="Images"
                loading="lazy"
                className=" aspect-[4.5]"
                // className="object-fill object-center "
              />
            </div>
        <div className="z-10 flex flex-col p-10 my-6 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[540px] max-md:px-5">
          <div className="flex justify-end items-center ">
            <img
              src={Images.close_icon}
              alt="Images"
              loading="lazy"
              className="w-7 "
            />
          </div>
          <h4 className="font-medium text-start max-md:max-w-full">
            Log in
          </h4>
          <div className="flex justify-center items-center px-16 py-4 mt-8 whitespace-nowrap bg-white rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-4 justify-center">
              <img
                loading="lazy"
                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/a364d5627f5a51afa09a1f3bb833563d65bd83f6b2ed52448d8e992a74e180d0?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="w-7 aspect-square"
                src={Images.google_logo}
                alt="Images"
              />
              <div className="grow text-lg">Log in with Google</div>
            </div>
          </div>
          <div className="flex justify-center items-center px-16 py-3 mt-6 whitespace-nowrap bg-white rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-4 justify-center">
              <img
                loading="lazy"
                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b938d459ab07f076de5460d2a50b950a2c66ae6f777acddb7252066065529b2?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="w-7 aspect-square"
                src={Images.fb_logo}
                alt="Images"
              />
              <div className="grow my-auto text-lg">Log in with Facebook</div>
            </div>
          </div>
          {/* <div className="flex gap-5 justify-between items-center mt-8 text-base whitespace-nowrap text-neutral-400 max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto h-0.5 bg-gray-200 w-[196px]" />
            <div className="self-stretch">OR</div>
            <div className="self-stretch my-auto h-0.5 bg-gray-200 w-[195px]" />
          </div> */}
          <div className="flex flex-row gap-5 items-center mt-8 text-base  text-neutral-400">
            <div className="self-stretch my-auto h-0.5 bg-gray-200 w-full" />
            <div className="self-stretch">OR</div>
            <div className="self-stretch my-auto h-0.5 bg-gray-200 w-full" />
          </div>
          <Link to={`/login_with_email`}>
            <div className="cursor-pointer text-base justify-center items-center px-16 py-4 mt-8 text-center text-white bg-orange-500 rounded max-md:px-5 max-md:max-w-full">
              Log In with Phone no.
            </div>
          </Link>
          <div className="mt-16 text-base text-orange-500 text-base max-md:mt-10 max-md:max-w-full">
            <span className="text-zinc-800">Don’t have an account? </span>
            <Link to={'/register_with_social_media'}>
              <span className="cursor-pointer font-medium text-orange-500 underline">Register</span>
            </Link>

          </div>
        </div>

      </div>
    </Layout>
  );
}

export default LoginWithSociallMedia


