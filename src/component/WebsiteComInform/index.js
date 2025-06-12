import React from 'react'

export const Phone = ({number,className}) => {
    return (
        <>
            <div className={`${className} grow`}>{`+91 70469 00096`}</div>
        </>
    )
} 

export const Email = ({email_no,className}) => {
    return (
        <>
            <div  className={`${className} grow`}>{`info@headway.org.in`}</div>
        </>
    )
}

export const Address = ({address_no,className}) => {
    return (
        <>
            <div className={`${className}`}>{address_no}</div>
        </>
    )
}