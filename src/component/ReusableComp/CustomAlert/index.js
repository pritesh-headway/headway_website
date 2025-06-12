import React from 'react';
import '../../../style.css';

const CustomAlert = ({ message }) => {
    return (
        <div className="custom-alert-overlay w-full h-full flex fixed items-center justify-center ">
            <div className="custom-alert text-center">
            <i className="fa fa-wifi text-5xl"></i>
                <div className='text-red-500'>{message}</div>
            </div>
        </div>
    );
};

export default CustomAlert;
