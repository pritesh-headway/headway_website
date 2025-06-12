import React, { useEffect, useState } from 'react'
import Navbar1 from '../ReusableComp/Navbar1'
import Header from '../ReusableComp/Header'
import Footer from '../ReusableComp/Footer'
import ToastWrapper from '../ReusableComp/ToastWrapper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, isUserProfile, isModalOpen, isSuccessModalOpen, isFailedModalOpen }) => {

    const [paddingTop, setPaddingTop] = useState(0);

    useEffect(() => {
        const updatePadding = () => {
            //   const headerHeight = document.querySelector('.navbar').offsetHeight;
            //   setPaddingTop(headerHeight);
            const headerElement = document.querySelector('.navbar');
            if (headerElement) {
                const headerHeight = headerElement.offsetHeight;
                setPaddingTop(headerHeight);

            }
        }

        updatePadding();

        window.addEventListener('resize', updatePadding);

        return () => {
            window.removeEventListener('resize', updatePadding);
        };

    }, []);


       useEffect(() => {
           const headerElement = document.querySelector('.navbar');
           if (headerElement) {
               const headerHeight = headerElement.offsetHeight;
               if (headerHeight !== paddingTop) {
                   setPaddingTop(headerHeight);
               }
           }
       }, [paddingTop]);
    // useEffect(() => {
    //     if (!isModalOpen) {
    //         const headerElement = document.querySelector('.navbar');
    //         if (headerElement) {
    //             const headerHeight = headerElement.offsetHeight;
    //             setPaddingTop(headerHeight);
    //         }
    //     }
    // }, [isModalOpen]);

    //if (paddingTop === null) {
    //     return null;
    // }

    return (
        <>
            <div className='navbar fixed '>
                {/* <Header /> */}
                <ToastWrapper />
                <Navbar1 />
            </div>

            <main
                // className='overflow-y-auto content'
                // style={{ paddingTop }}
                // style={{ paddingTop: isUserProfile ? 0 : `${paddingTop}px` }}
                // style={{ paddingTop: `${paddingTop}px` }}

                style={{
                    paddingTop: isModalOpen ? 0 : isUserProfile ? 0 : `${paddingTop}px`,
                }}
            >
                {children}
            </main>

            <Footer />
            {/* <ToastContainer /> */}
        </>
    )
}

export default Layout