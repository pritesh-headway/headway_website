import React from 'react';
import { Link } from "react-router-dom";

export const LinkTag = ({ name, className, to }) => {
    return (
        <>
            {/* <Link to={`${href}`} className={className}>{name}</Link> */}
            <Link to={`${to}`}>
                <div
                    className={className}
                    
                >
                    {name}
                </div>
            </Link>
        </>
    )
}

export const LinkTagwithClass = ({ name, className, to }) => {
    return (
        <>
            <Link to={`${to}`} className={className}>   
                {name}
            </Link>
        </>
    )
}