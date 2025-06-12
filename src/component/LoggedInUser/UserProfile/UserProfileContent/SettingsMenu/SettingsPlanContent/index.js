import React, { useEffect } from 'react';
import * as Images from '../../../../../../assets';
import UserDontPlanContent from './UserDontPlanContent';

const SettingsPlanContent = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    const planData = [
        {
            id: 1,
            price: '5,10,000',
            title1: 'Make My Business',
            title2: 'Developer Level',
            desc: 'One Year Business Growth Development Programe',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },
        {
            id: 2,
            price: '5,10,000',
            title1: 'Make My Business',
            title2: 'Developer Level',
            desc: 'One Year Business Growth Development Programe',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
        },
        {
            id: 3,
            price: '5,10,000',
            title1: 'Make My Business',
            title2: 'Developer Level',
            desc: 'One Year Business Growth Development Programe',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: 'User Dashboard'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        },
        {
            id: 4,
            price: '5,10,000',
            title1: 'Make My Business',
            title2: 'Developer Level',
            desc: 'One Year Business Growth Development Programe',
            features: [
                {
                    id: 1,
                    feature1: '12 MMB Workshop'
                },
                {
                    id: 2,
                    feature1: '12 One Hrs One to One Business Mentoring Meetings'
                },
                {
                    id: 3,
                    feature1: 'More'
                },
            ],
            bestValue: 'Best Value'
        }
    ]

    return (
        <>
            <main className="flex flex-col justify-center rounded-xl max-w-full w-[1296px] max-md:pt-6">
                <h1 className="w-full text-3xl font-medium text-left text-zinc-800 max-md:max-w-full">
                    Settings
                </h1>

                <div className="flex flex-col justify-center self-stretch p-5 bg-white rounded-xl border border-gray-200 border-solid mt-8">
                    <div className="self-start text-2xl font-medium text-zinc-800 max-md:max-w-full">Plans</div>
                    <div className="self-start mt-2 text-sm text-neutral-400 max-md:max-w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    <hr className="shrink-0 mt-6 h-px bg-gray-200 max-md:max-w-full" />
                    <section className="mt-8 max-md:max-w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">

                        {planData?.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col max-md:ml-0 max-md:w-full justify-end ">
                                {item.bestValue ?
                                    <div className="justify-center self-center px-4 py-2.5 text-sm font-medium tracking-normal leading-4 text-right text-white uppercase whitespace-nowrap bg-orange-500 rounded-xl">
                                        Best Value
                                    </div>
                                    :
                                    <div></div>
                                }

                                <div
                                    key={index}
                                    className="flex flex-col max-md:ml-0 justify-end h-full " style={{ maxHeight: '-webkit-fill-available !important' }}
                                >
                                    <div
                                        className=' rounded-t-3xl border border-t-4 border-orange-500 border-0 h-full '
                                        style={{ maxHeight: '-webkit-fill-available !important' }}
                                    >
                                        <div
                                            style={{ height: 'inherit ' }}
                                            className="flex flex-col p-4 xl:p-4 lg:p-4 md:p-3 max-sm:p-3 bg-white border border-t-0 border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] rounded-3xl"
                                        >
                                            <div className="flex gap-5 justify-between ">
                                                <div

                                                    className='flex justify-center items-center px-2 w-14 h-14 max-sm:w-10 max-sm:h-10 py-3 rounded-lg bg-orange-50'
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={Images.pp_logo}

                                                        className="w-full h-full aspect-square"
                                                        alt=''
                                                    />
                                                </div>
                                                <div className="flex gap-0 justify-center my-auto text-center  items-center">
                                                    <div className="grow text-2xl font-bold text-orange-500 max-sm:text-2xl whitespace-nowrap">

                                                        {item?.price}
                                                    </div>
                                                    <div className="self-end mt-7 text-base text-zinc-800 lg:mt-1">

                                                        /Per Year
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="mt-8 text-2xl font-medium primary_black_clr text-wrap">

                                                <span className="text-orange-500">{item.title2}</span>
                                            </div>
                                            <div className="mt-2 text-base text-zinc-600  text-wrap">

                                                {item?.desc}
                                            </div>
                                            <div


                                                className="hover-change cursor-pointer flex px-8 hover:bg-orange-500 hover:text-white exit flex gap-3 justify-center self-start py-2.5 mt-8 text-base font-medium text-orange-500 rounded-lg border border-solid border-[color:var(--primary-orange-f-6821-f,#F6821F)] max-md:px-5"
                                            >

                                                <div className="select">Book Now</div>
                                                <img
                                                    loading="lazy"
                                                    data-src-hover={Images.arr_right_white_clr}
                                                    src={Images.arr_right_orange_clr}
                                                    className="my-auto w-4 aspect-square"
                                                    alt=''
                                                />
                                            </div>
                                            <hr className='my-8 max-sm:mb-4' />
                                            <div className='grow'>
                                                {item.features?.map((item, index) => (

                                                    <div key={index} className="flex gap-3 justify-between mt-5 ">
                                                        <div className="flex justify-center items-center px-1.5 w-7 h-7 bg-green-100 aspect-square rounded-[100px]">
                                                            <img
                                                                alt=''
                                                                loading="lazy"
                                                                src={Images.pp_green_clr}
                                                                className="w-full aspect-square"
                                                            />
                                                        </div>
                                                        <div className="grow text-base text-zinc-600">
                                                            {item.feature1}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            <UserDontPlanContent/>
        </>

    )
}

export default SettingsPlanContent