import React, { useState } from 'react';
import * as Images from '../../../assets';

const VerificationPending = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex mt-5 justify-center items-center">
      <div className="w-[70%] flex gap-5 cursor-pointer px-3 py-3 bg-orange-100 rounded-lg justify-center items-center border-2 border-orange-500" onClick={openModal}>
        <div className="w-full">
          {/* Centered Text */}
          <div className="text-lg text-zinc-700">
            Please Wait We are Verifying Your Identity
          </div>
        </div>
        <button className="mr-2 hover:text-orange-500 focus:outline-none" >
          <i className="fa fa-chevron-circle-right text-2xl"></i>
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[90%] sm:w-[60%] max-w-4xl mt-20 rounded-lg shadow-lg p-6 text-center relative overflow-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeModal}
            >
              <i className="fa fa-times text-lg"></i>
            </button>
            <div className="flex flex-col items-center">
              <img
                src={Images.verification_pending_img}
                alt="Waiting For Approval"
                className="w-[50%] h-auto mb-4"
              />
              <h2 className="text-3xl font-semibold text-orange-500 mb-2">
                Waiting For Approval
              </h2>
              <p className="text-md mb-2 text-gray-600">
                We are Checking your Details and Verifying them. Afterward, We will update you.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default VerificationPending;

