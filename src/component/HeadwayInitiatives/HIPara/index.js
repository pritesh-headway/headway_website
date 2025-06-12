import React, { useEffect, useRef, useState } from 'react';
import *  as Images from '../../../assets';
import { ButtonOrange } from '../../Buttons';

const HIPara = () => {

    const titleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const title = titleRef.current;

        const handleScroll = () => {
            if (title) {
                const top = title.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section >
            <div className="bg-white flex justify-center items-center px-16 py-12 w-full text-5xl font-medium max-md:px-5 max-md:max-w-full max-md:text-4xl max-sm:py-0">
                <div className="flex flex-col my-6 max-w-full w-[1296px] max-md:text-4xl text-center">

                    <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
                    Suvarna Saubhagya Utsav is a prestigious annual event organized by Headway Business Solutions LLP, offering customers an unparalleled opportunity to indulge in exquisite jewellery purchases while standing a chance to win exciting prizes through a lucky draw.
                    </div>
                    <div className="mt-6 text-xl text-zinc-600 max-md:max-w-full  font-medium">
                    As we gear up for the third edition of Suvarna Saubhagya Utsav in 2024, anticipation is running high with an astonishing array of prizes awaiting our esteemed customers. This year, we are proud to announce a staggering 99,999 prizes up for grabs, promising an unforgettable experience for all participants
                    </div>
                    <div className=''>
                        <ButtonOrange
                            name={`Visit Website`}
                            className={`focus:outline-none text-white bg-orange-500 rounded px-6 py-2.5 mt-6 text-base max-md:px-5 hover:bg-white hover:text-orange-500 `}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.headway.guru/', '_blank');
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HIPara