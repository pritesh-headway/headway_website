import React from 'react';
import * as Images from '../../../assets';
import { Link } from 'react-router-dom';


const IHRServices = () => {

    const data = [
        {
            id:1,
            title1:'Salary',
            title2:'Negotiation',
            desc:'Our team negotiates competitive salaries on your behalf, ensuring that you attract and retain top talent in the industry.',
            img: `${Images.ihr_icon_two}`,
        },
        {
            id:2,
            title1:'Staff Training and',
            title2:'Development',
            desc:'We design and implement training programs to enhance the skills and capabilities of your staff, ensuring they stay updated with the latest industry trends and developments.',
            img: `${Images.ihr_icon_three}`,
        },
        {
            id:3,
            title1:'Work Report from',
            title2:'Each Member',
            desc:'We provide detailed work reports from each staff member, giving you insights into their performance and productivity.',
            img: `${Images.ihr_icon_four}`,
        },
        {
            id:4,
            title1:'Preparing and Maintaining',
            title2:'Employment Contracts',
            desc:'Our team takes care of preparing and maintaining employment contracts, ensuring compliance with legal requirements and protecting your interests as an employer.',
            img: `${Images.ihr_icon_five}`,
        },
        {
            id:5,
            title1:'Staff Leave Application',
            title2:'Management',
            desc:'We handle all staff leave applications, ensuring smooth workflow management and minimal disruption to your business operations.',
            img: `${Images.ihr_icon_six}`,
        },
        {
            id:6,
            title1:'Resolving Staff',
            title2:'Queries',
            desc:'Our HR experts are available to resolve any queries or issues that may arise from your staff members, ensuring a positive and productive work environment.',
            img: `${Images.ihr_icon_seven}`,
        },
        {
            id:7,
            title1:'Compensation and',
            title2:'Benefits Management',
            desc:'We manage all aspects of employee compensation and benefits, including payroll processing, insurance coverage, and other employee perks.',
            img: `${Images.ihr_icon_eight}`,
        },
        {
            id:8,
            title1:'Business Performance',
            title2:'Management',
            desc:'We help you track and manage the performance of your staff, setting performance goals and providing feedback to help them excel in their roles.',
            img: `${Images.ihr_icon_nine}`,
        },
        {
            id:9,
            title1:'Other Administrative',
            title2:'Responsibilities',
            desc:'In addition to the above services, we take care of various administrative tasks, such as employee record-keeping, compliance management, and HR policy development.',
            img: `${Images.ihr_icon_ten}`,
        },
    ]
    return (
        <>
        {/* <div className="relative flex flex-col justify-center items-center px-20 pt-20 pb-12 bg-stone-50 max-md:px-5 terms_bg_clr">
            <div className="top-0 flex overflow-hidden absolute flex-col justify-center items-center self-stretch fill-white   max-md:px-5 max-md:max-w-full">

            <img
            alt=""
            loading="lazy"
            src={Images.about_us_vector}
            className=""
            />

            </div>
            <div className="justify-between max-w-full w-[1296px] z-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center p-8 font-medium max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-4xl text-orange-500 max-md:max-w-full">
                            Our <span className="text-orange-500">Intelligent HR </span>
                            Services for Jewellers
                        </div>
                        <div className="mt-6 mr-8 text-lg text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
                            Empowering Your Jewels of Talent: HR Solutions That Shine as
                            Bright as Your Business
                        </div>
                        <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white bg-orange-500 rounded shadow-2xl max-md:px-5">
                            Contact Us
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col justify-center self-stretch p-6 m-auto w-full bg-white rounded-xl shadow-2xl max-md:px-5 max-md:mt-10">
                            <div className="flex gap-4">
                                <div className="flex justify-center items-center px-4 bg-stone-50 h-[58px] rounded-[60.589px] w-[58px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd6a7566c2c1282d20ff5a8e10b89053c74061d1f2471fbfe04aebee742a0385?apiKey=8e5983036f284a13866aae97819cdb73&"
                                    className="w-6 aspect-[0.96]"
                                    alt=''
                                />
                                </div>
                                <div className="text-2xl font-medium text-orange-500">
                                    Staff Recruitment and 
                                    <span className="text-orange-500">Selection</span>
                                </div>
                            </div>
                            <div className="mt-4 text-lg text-zinc-600">
                                We handle the entire recruitment process for you, from sourcing
                                candidates to conducting interviews and selecting the best-fit
                                candidates for your business.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 grid grid-cols-3 mt-8">
                    {data.map((item,index) => (
                        <div className="flex flex-col justify-center self-stretch p-6 m-auto w-full bg-white rounded-xl shadow-2xl max-md:px-5 max-md:mt-10 h-full" key={index}>
                        <div className="flex gap-4">
                            <div className="flex justify-center items-center px-4 terms_bg_clr h-[58px] rounded-[60.589px] w-[58px]">
                            <img
                                loading="lazy"
                                src={Images.value_group}
                                
                                className="w-6 aspect-[0.96]"
                                alt=''
                            />
                            </div>
                            <div className="text-2xl font-medium text-zinc-800 text-wrap">
                                {item.title1}
                                <span className="text-orange-500">&nbsp;{item.title2}</span>
                            </div>
                        </div>
                        <div className="mt-4 text-lg text-zinc-600">
                           {item.desc}
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div> */}

        <div className="relative flex flex-col justify-center items-center  terms_bg_clr max-md:px-5">
          <div className="top-0 flex overflow-hidden absolute flex-col justify-center items-center self-stretch fill-white   max-md:px-5 max-md:max-w-full">

            <img
            alt="Images"
            loading="lazy"
            src={Images.about_us_vector}
            className=""
            />

          </div>
          <div className='z-10  pt-20 pb-12 w-[1296px]  max-md:px-0 justify-between max-w-full max-sm:pt-0'>
           
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 mb-3">
                      <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full xs:w-full">
                        <div className="text-start flex flex-col grow justify-center p-8 font-medium max-md:px-5 max-md:mt-10 max-md:max-w-full">
                          <div className="text-4xl text-zinc-800 max-md:max-w-full">
                            Our <span className="text-orange-500">Intelligent HR </span>
                            Services for Jewellers
                          </div>
                          <div className="mt-6 mr-8 text-lg text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
                            Empowering Your Jewels of Talent: HR Solutions That Shine as
                            Bright as Your Business
                          </div>
                          <Link to={'/get_in_touch'}>
                          <div className="justify-center self-start px-6 py-3.5 mt-6 text-base text-white bg-orange-500 rounded shadow-2xl shadow-orange-100 max-md:px-5 w-fit">
                            Contact Us
                          </div>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                        <div className="text-start flex flex-col justify-center self-stretch p-6 m-auto w-full bg-white rounded-xl shadow-2xl shadow-orange-100 max-md:px-5 max-md:mt-10">
                          <div className="flex gap-4">
                            <div 
                            // className="flex justify-center items-center px-4 terms_bg_clr h-[58px] rounded-[60.589px] w-[58px]"
                            // className="flex justify-center items-center px-4 terms_bg_clr h-[58px] rounded-[60.589px] w-[58px]"
                            >
                              <img
                                loading="lazy"
                                src={Images.ihr_icon_one}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd6a7566c2c1282d20ff5a8e10b89053c74061d1f2471fbfe04aebee742a0385?apiKey=8e5983036f284a13866aae97819cdb73&"
                                // className="w-6 aspect-[0.96]"
                                className="w-20 "
                                alt=''
                              />
                            </div>
                            <div className="text-2xl font-medium text-zinc-800">
                              {`Staff Recruitment and`}
                              <span className="text-orange-500">&nbsp;Selection</span>
                            </div>
                          </div>
                          <div className="mt-4 text-lg text-zinc-600">
                            We handle the entire recruitment process for you, from sourcing
                            candidates to conducting interviews and selecting the best-fit
                            candidates for your business.
                          </div>
                        </div>
                      </div>
                    </div>
                 
                
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap min-xs:grid-cols-1">
                        {data.map((item,index) => (
                            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full " key={index}>
                        <div className="text-start flex flex-col grow self-stretch p-6 mx-auto w-full bg-white rounded-xl shadow-2xl shadow-orange-100 max-md:px-5 max-md:mt-8">
                          <div className="flex gap-4">
                            <div 
                            // className="flex justify-center items-center px-4 terms_bg_clr h-[58px] rounded-[60.589px] w-[58px]"
                            >
                              <img
                                loading="lazy"
                                src={item?.img}
                                // src={Images.value_group}
                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/92ce847bd22fbdeb57423e373e0f8af2cdbf83a15736e8dd00605c0d59d526db?apiKey=8e5983036f284a13866aae97819cdb73&"
                                // className="w-6 aspect-square"
                                className="w-20 aspect-square"
                                alt="Images"
                              />
                            </div>
                            <div className="my-auto text-2xl font-medium text-zinc-800">
                              {item.title1} <span className="text-orange-500">{item.title2}</span>
                            </div>
                          </div>
                          <div className="mt-4 text-lg text-zinc-600">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                        ))}
                      
                      
                      
                    </div>
                  </div>
        
            


        </div>




        </>
    )
}

export default IHRServices