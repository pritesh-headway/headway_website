import React, { useEffect } from "react";
import * as Images from '../../../../assets';
import Layout from "../../../Layout";
import { Link } from "react-router-dom";

const LoginWithEmail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <div className=" bg-white relative flex justify-center items-center px-16 py-12 w-full text-lg bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
          {/* <div className="absolute top-[50%] ">
            <img
              src={Images.user_auth_vector}
              alt=""
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
              // className=" aspect-[4.5]"
            // className="object-fill object-center "
            />
          </div>
          <div
            // className="flex flex-col p-10 text-base bg-white rounded-3xl shadow-2xl max-w-[540px] max-md:px-5"
            className="z-10 flex flex-col p-10 my-6 max-w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 w-[540px] max-md:px-5"
          >
            <div className="flex justify-end items-center ">
              <img
                src={Images.close_icon}
                alt="Images"
                loading="lazy"
                className="w-7 "
              />
            </div>
            <h4 className=" font-medium text-start text-zinc-800 max-md:max-w-full">
              Log in
            </h4>
            <div className="mt-9 text-neutral-400 max-md:max-w-full text-base">
              Email or phone number
            </div>
            <input type="text"
              className="shrink-0 mt-4 h-14 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0"
            />
            {/* <div className="shrink-0 mt-3.5 h-14 rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full" /> */}
            <Link to={'/verification'}>
              <div className="text-lg justify-center items-center px-16 py-4 mt-8 text-lg text-center text-white whitespace-nowrap bg-orange-500 rounded max-md:px-5 max-md:max-w-full">
                Get OTP
              </div>
            </Link>
            <div className="flex gap-2 self-start py-2 mt-2 whitespace-nowrap text-zinc-800 items-center">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ae48373b5e7b02fd943c06ad5bf444beca23272d37e7a249076e748e062da96?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="w-6 aspect-square"
                alt=""
              /> */}

              {/* <div className="grow self-start mt-1">Remember me</div> */}
              {/* <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label> */}
              <input type="checkbox" id="checkbox-1"
                className="w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-0"
              />
              <label for="checkbox-1" className="grow self-start mt-1 text-base"> Remember me</label>
            </div>
            <div className="mt-16 text-orange-500 text-base max-md:mt-10 max-md:max-w-full">
              <span className="text-zinc-800">Don’t have an account? </span>
              <Link to={'/register_with_social_media'}>
                <span className="cursor-pointer font-medium text-orange-500 underline">Register</span>
              </Link>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}

export default LoginWithEmail


