import React, { useEffect } from "react";
import Layout from "../../../Layout";
import * as Images from '../../../../assets';
import { Link } from "react-router-dom";

const RegisterWithSocialMedia = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col bg-white">
          <div className="relative flex justify-center items-center px-16 py-12 w-full text-lg bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
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
                className=" aspect-[4.5] "
                // className="object-fill object-center "
              />
            </div>
            <div className="z-10 flex flex-col px-10 py-11 my-6 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[540px] max-md:px-5">
              <div className="flex justify-end items-center ">
                <img
                  src={Images.close_icon}
                  alt="Images"
                  loading="lazy"
                  className="w-7 "
                />
              </div>
              <h4 className=" font-medium text-start max-md:max-w-full">
              Login
              </h4>
              <div className="flex justify-center items-center px-16 py-4 mt-8 whitespace-nowrap bg-white rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-4 justify-center">
                  <img
                    loading="lazy"
                    src={Images.google_logo}
                    className="w-7 aspect-square"
                    alt="Images"
                  />
                  <div className="grow text-lg">Continue with Google</div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-3 mt-6 whitespace-nowrap bg-white rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-4 justify-center">
                  <img
                    loading="lazy"
                    src={Images.fb_logo}
                    className="w-7 aspect-square"
                    alt="Images"
                  />
                  <div className="grow my-auto text-lg">Continue with Facebook</div>
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
              <Link to={`/register_with_email`}>
                <div className="cursor-pointer text-lg justify-center items-center px-16 py-4 mt-8 text-center text-white whitespace-nowrap user_auth_btn rounded max-md:px-5 max-md:max-w-full">
                Login with Mobile number
                </div>
              </Link>

              <div className="self-center mt-4 text-sm text-center text-orange-500">
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default RegisterWithSocialMedia


