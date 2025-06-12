/* eslint-disable no-undef */
import React from 'react'

export const ButtonOrange = ({ name, onClick, className }) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`focus:outline-none text-white bg-orange-500 rounded px-6 py-2.5 mt-6 text-base max-md:px-5 hover:bg-white hover:text-orange-500 ${className} `}
            // className="justify-center self-start px-6 py-3.5 mt-6 text-white whitespace-nowrap bg-orange-500 rounded shadow-2xl max-md:px-5 hover:bg-white hover:text-orange-500"
            >
                {name}
            </button>
        </>
    )
}

export const ButtonWithIcon = ({ name, className }) => {
    return (
        <>
            <button
                className={className}
            >
                <div>{name}</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d409c433da9ee3ea4b4fd892a45175413d8bad7a18b953917bbb07ffb655f552?apiKey=8e5983036f284a13866aae97819cdb73&"
                    className="my-auto w-4 aspect-square"
                    alt="Images"
                />
            </button>
        </>
    )
}

export const ButtonWithBGIcon = ({ name, className }) => {
    return (
        <>
            <div
                // className={`${className} exit cursor-pointer  flex flex-1 border`}
                className={`${className} exitHover hover:text-white cursor-pointer  flex flex-1 justify-center items-center`}
            >
                <div>{name}</div>
                <svg 
                className='exitHover w-9 h-9'
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="" height="" 
                // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRrule: 'evenodd', clipRule: 'evenodd' }}
                >
                    <g><path 
                    style={{opacity:0.897}}
                    fill="" d="M 25.5,8.5 C 31.9509,13.1165 37.6176,18.6165 42.5,25C 37.6967,30.9706 32.3634,36.4706 26.5,41.5C 24.5247,40.7248 23.6913,39.3914 24,37.5C 27.1667,34.3333 30.3333,31.1667 33.5,28C 24.1667,27.6667 14.8333,27.3333 5.5,27C 4.16667,25.6667 4.16667,24.3333 5.5,23C 14.8333,22.6667 24.1667,22.3333 33.5,22C 30.3333,18.8333 27.1667,15.6667 24,12.5C 23.7003,10.9343 24.2003,9.60101 25.5,8.5 Z" /></g>
                </svg>
            </div>
        </>
    )
}