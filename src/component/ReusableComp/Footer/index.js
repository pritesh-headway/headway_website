import React from 'react';
import Subfootertwo from './SubFooterTwo';
import Subfooterone from './SubFooterOne';

const Footer = () => {
  return (
    <>
      <footer className=" flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1296px]">
          <Subfooterone />
          {/* <hr class="my-6 border-black-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
          <hr/>
          <Subfootertwo />
        </div>
      </footer>
    </>
  )
}

export default Footer