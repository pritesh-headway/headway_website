
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastWrapper = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    toast.onChange((toastState) => {
      setIsToastVisible(toastState.visible);
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      {isToastVisible && (
        <style>
          {`
            .navbar {
              display: none;
            }
          `}
        </style>
      )}
    </div>
  );
};

export default ToastWrapper;