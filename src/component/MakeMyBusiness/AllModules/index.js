import React from 'react';
import * as Images from '../../../assets';
import { decodeHTML } from '../../ReusableComp/DecodeHtmlData';
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent';

const AllModules = ({ titleRef, isVisible }) => {

    const Data = [
        {
            id: 1,
            title: 'Reality',
            imgUrl: `${Images.mmb_icon_one}`,
            features: [
                {
                    id: 1,
                    feature: 'What is Business?',
                },
                {
                    id: 2,
                    feature: 'Why Do Business Only?',
                },
                {
                    id: 3,
                    feature: 'Features of Business',
                },
                {
                    id: 4,
                    feature: 'Business Psychology',
                },
                {
                    id: 5,
                    feature: 'Power of Thoughts',
                },
                {
                    id: 6,
                    feature: 'Effective Sensory Business',
                },
                {
                    id: 7,
                    feature: `Work &amp; Time Management`,
                },
                {
                    id: 8,
                    feature: `Steps to Start a Business`,
                },
                {
                    id: 9,
                    feature: `Growth Model of Business`,
                },
                {
                    id: 10,
                    feature: 'Product Mastery: Getting It Right',
                },
                {
                    id: 11,
                    feature: 'Review &amp; Audit System',
                },
                {
                    id: 12,
                    feature: 'Vision, Mission, &amp; Values',
                },
                {
                    id: 13,
                    feature: 'Ownerless Business Management',
                },
                {
                    id: 14,
                    feature: 'Daily Follow-ups &amp; Pressure Points',
                },

            ]

        },
        {
            id: 2,
            title: '&amp; People Management',
            imgUrl: `${Images.mmb_icon_two}`,
            features: [
                {
                    id: 1,
                    feature: 'Why Do You Require Workforce Management?',
                },
                {
                    id: 2,
                    feature: 'What is Human Resource Management?',
                },
                {
                    id: 3,
                    feature: 'Interview, Introduction, and Induction',
                },
                {
                    id: 4,
                    feature: 'Recruitment Process and Policy',
                },
                {
                    id: 5,
                    feature: 'Setting up for Success',
                },
                {
                    id: 6,
                    feature: 'Crafting Responsibility &amp; Building Professional Profile',
                },
                {
                    id: 7,
                    feature: 'Review and Reporting System',
                },
                {
                    id: 8,
                    feature: 'KRA-KPI Performance Metrics',
                },
                {
                    id: 9,
                    feature: 'Incentive, Appraisal, and Promotion',
                },
                {
                    id: 10,
                    feature: 'Training &amp; Development',
                },
                {
                    id: 11,
                    feature: 'Work Culture Transformation',
                },
                {
                    id: 12,
                    feature: 'Evaluation of Employees',
                },

            ]
        },
        {
            id: 3,
            title: 'Strategic Planning',
            imgUrl: `${Images.mmb_icon_three}`,
            features: [
                {
                    id: 1,
                    feature: 'What is Strategy?',
                },
                {
                    id: 2,
                    feature: 'Why Strategic Planning is Required?',
                },
                {
                    id: 3,
                    feature: 'How to Create a GOAL',
                },
                {
                    id: 4,
                    feature: 'Strategy v/s Plan',
                },
                {
                    id: 5,
                    feature: 'Proportion in Strategy',
                },
                {
                    id: 6,
                    feature: 'Characteristics of Strategy',
                },
                {
                    id: 7,
                    feature: 'Power of Projection',
                },
                {
                    id: 8,
                    feature: 'Subjective Strategy',
                },
                {
                    id: 9,
                    feature: 'MBSS - My Business Strategy Sheet',
                },
                {
                    id: 10,
                    feature: 'Statistical Fundamentals',
                },
                {
                    id: 11,
                    feature: 'SWOT Analysis',
                },
                {
                    id: 12,
                    feature: 'Data Analysis',
                },
                {
                    id: 13,
                    feature: 'Mystery Audit',
                },
                {
                    id: 14,
                    feature: 'Feedback &amp; Review System',
                },

            ]
        },
        {
            id: 4,
            title: 'Finance Management',
            imgUrl: `${Images.mmb_icon_four}`,
            features: [
                {
                    id: 1,
                    feature: 'What is Business Finance?',
                },
                {
                    id: 2,
                    feature: 'Ways to Make Money',
                },
                {
                    id: 3,
                    feature: 'Budget Planning for Business',
                },
                {
                    id: 4,
                    feature: 'Invisible Cost &amp; Income',
                },
                {
                    id: 5,
                    feature: 'Cost &amp; Income Management',
                },
                {
                    id: 6,
                    feature: 'Alert &amp; Alarm of Finance',
                },
                {
                    id: 7,
                    feature: 'Power of AOP',
                },
                {
                    id: 8,
                    feature: 'Reviewing &amp; Feedback AOP',
                },
                {
                    id: 9,
                    feature: 'Creating Pre-Performing Balance Sheet',
                },
                {
                    id: 10,
                    feature: 'Forecasting P&amp;L',
                },
                {
                    id: 11,
                    feature: 'Different Ways of Arranging Finance',
                },
                {
                    id: 12,
                    feature: 'Communicating &amp; Implementing AOP',
                },
                {
                    id: 13,
                    feature: 'Finance Growth Model',
                },
                {
                    id: 14,
                    feature: 'Review &amp; Audit System',
                },

            ]
        },
        {
            id: 5,
            title: 'Team Building &amp; Management',
            imgUrl: `${Images.mmb_icon_five}`,
            features: [
                {
                    id: 1,
                    feature: 'Importance of a Team',
                },
                {
                    id: 2,
                    feature: 'Create a Leadership in a Team',
                },
                {
                    id: 3,
                    feature: 'Business SOPs',
                },
                {
                    id: 4,
                    feature: 'Implement &amp; Sustain SOPs',
                },
                {
                    id: 5,
                    feature: 'Create 4Ds in Development',
                },
                {
                    id: 6,
                    feature: 'Power of Effective 4Ds',
                },
                {
                    id: 7,
                    feature: '7 Effective Keys of Leadership',
                },
                {
                    id: 8,
                    feature: 'Transformative Leadership',
                },
                {
                    id: 9,
                    feature: 'Create a Work Culture',
                },
                {
                    id: 10,
                    feature: 'Build up a High-Value Team',
                },
                {
                    id: 11,
                    feature: 'Principles of Team Building',
                },
                {
                    id: 12,
                    feature: 'Skills &amp; Management Training',
                },
                {
                    id: 13,
                    feature: 'Responsibility &amp; Reporting System',
                },
                {
                    id: 14,
                    feature: 'Ownerless Process Management',
                },

            ]
        },
        {
            id: 6,
            title: 'Customer Relation Management (CRM)',
            imgUrl: `${Images.mmb_icon_six}`,
            features: [
                {
                    id: 1,
                    feature: 'What is Business CRM?',
                },
                {
                    id: 2,
                    feature: 'Business without CRM',
                },
                {
                    id: 3,
                    feature: 'Parameters of CRM',
                },
                {
                    id: 4,
                    feature: 'Benefits of CRM',
                },
                {
                    id: 5,
                    feature: 'Steps to Start CRM',
                },
                {
                    id: 6,
                    feature: 'Review &amp; Update Data System',
                },
                {
                    id: 7,
                    feature: 'Value of Feedback',
                },
                {
                    id: 8,
                    feature: 'Automation in CRM',
                },
                // {
                //     id: 9,
                //     feature: 'Benefits of CRM',
                // },
                {
                    id: 9,
                    feature: 'Power of Data',
                },
            ]
        },
        {
            id: 7,
            title: 'Customer Satisfaction',
            imgUrl: `${Images.mmb_icon_eight}`,
            features: [
                {
                    id: 1,
                    feature: 'What is Customer Satisfaction?',
                },
                {
                    id: 2,
                    feature: 'Why Must You Achieve Customer Delight?',
                },
                {
                    id: 3,
                    feature: 'How to Create Customer Satisfaction?',
                },
                {
                    id: 4,
                    feature: 'Customer Service &amp; Support',
                },
                {
                    id: 5,
                    feature: 'Customer Service Skill Training',
                },
                {
                    id: 6,
                    feature: 'Creating a Support System',
                },
                {
                    id: 7,
                    feature: 'Create a Brand Promotor',
                },
                {
                    id: 8,
                    feature: 'Steps to Start Customer Service',
                },
                {
                    id: 9,
                    feature: 'Growth Model of Customer Service',
                },
                {
                    id: 10,
                    feature: 'Review &amp; Feedback',
                },
                {
                    id: 11,
                    feature: 'Create Culture in Your Team',
                },
            ]
        },
        {
            id: 8,
            title: 'Product Management',
            imgUrl: `${Images.mmb_icon_ten}`,
            features: [
                {
                    id: 1,
                    feature: 'What is a Product?',
                },
                {
                    id: 2,
                    feature: 'Know Your Product',
                },
                {
                    id: 3,
                    feature: 'Quality &amp; Pricing',
                },
                {
                    id: 4,
                    feature: 'Types of a Product',
                },
                {
                    id: 5,
                    feature: 'Innovation in Product',
                },
                {
                    id: 6,
                    feature: 'Product Psychology',
                },
                {
                    id: 7,
                    feature: 'Power of Product',
                },
                {
                    id: 8,
                    feature: 'Product Strategy',
                },
                {
                    id: 9,
                    feature: 'Product Knowledge',
                },
                {
                    id: 10,
                    feature: 'Product Sales Skill Training',
                },
                {
                    id: 11,
                    feature: 'Product Presentation &amp; Display',
                },
                {
                    id: 12,
                    feature: 'Inventory Management',
                },
                {
                    id: 13,
                    feature: 'Promotion',
                },
                {
                    id: 14,
                    feature: 'Marketing &amp; Branding',
                },
                {
                    id: 15,
                    feature: 'Support &amp; Service',
                },

            ]
        },
        {
            id: 9,
            title: 'Branding &amp; Marketing',
            imgUrl: `${Images.mmb_icon_seven}`,
            features: [
                {
                    id: 1,
                    feature: 'Defining Brand Identity',
                },
                {
                    id: 2,
                    feature: 'Identifying Target Audience',
                },
                {
                    id: 3,
                    feature: 'Craft a Brand Message',
                },
                {
                    id: 4,
                    feature: 'Develop a Visual Identity',
                },
                {
                    id: 5,
                    feature: 'Optimize Online Presence',
                },
                {
                    id: 6,
                    feature: 'Utilize Marketing Techniques',
                },
                {
                    id: 7,
                    feature: 'Implement SEO Strategies',
                },
                {
                    id: 8,
                    feature: 'Leverage Social Media',
                },
                {
                    id: 9,
                    feature: 'Engage in Content Marketing',
                },
                {
                    id: 10,
                    feature: 'Measure and Analyze Performance',
                },


            ]
        },
        {
            id: 10,
            title: 'Skill Development',
            imgUrl: `${Images.mmb_icon_eleven}`,
            features: [
                {
                    id: 1,
                    feature: 'Identifying Key Skill Areas',
                },
                {
                    id: 2,
                    feature: 'Setting Learning Objectives',
                },
                {
                    id: 3,
                    feature: 'Accessing Training Resources',
                },
                {
                    id: 4,
                    feature: 'Hands-On Practical Exercises',
                },
                {
                    id: 5,
                    feature: 'Continuous Feedback and Evaluation',
                },
                {
                    id: 6,
                    feature: 'Adapting to Evolving Industry Trends',
                },
                {
                    id: 7,
                    feature: 'Mentorship and Coaching Programs',
                },
                {
                    id: 8,
                    feature: 'Networking Opportunities',
                },
                {
                    id: 9,
                    feature: 'Certification and Recognition',
                },
                {
                    id: 10,
                    feature: 'Creating a Personalized Learning Plan',
                },


            ]
        },
        {
            id: 11,
            title: 'Professional Meditation',
            imgUrl: `${Images.mmb_icon_twelve}`,
            features: [
                {
                    id: 1,
                    feature: 'Setting Intentional Goals',
                },
                {
                    id: 2,
                    feature: 'Mindful Awareness Practices',
                },
                {
                    id: 3,
                    feature: 'Stress Reduction Techniques',
                },
                {
                    id: 4,
                    feature: 'Focused Breathing Exercises',
                },
                {
                    id: 5,
                    feature: 'Time Management Techniques',
                },
                {
                    id: 6,
                    feature: 'Enhanced Concentration and Focus',
                },
                {
                    id: 7,
                    feature: 'Cultivating Emotional Resilience',
                },
                {
                    id: 8,
                    feature: 'Promoting Decision-Making Clarity',
                },
                {
                    id: 9,
                    feature: 'Building Effective Communication Skills',
                },
                {
                    id: 10,
                    feature: 'Fostering a Positive Work Environment',
                },


            ]
        },
         {
             id: 12,
             title: 'Evolution',
             imgUrl: `${Images.mmb_icon_nine}`,
             features: [
                 {
                     id: 1,
                     feature: 'What is Business Evolution?',
                 },
                 {
                     id: 2,
                     feature: 'Total Business Evolution',
                 },
                 {
                     id: 3,
                     feature: 'Why Business Evolution only?',
                 },
                 {
                     id: 4,
                     feature: 'Review & audit system',
                 },
                 {
                     id: 5,
                     feature: 'Features of Business Evolution',
                 },
                 {
                     id: 6,
                     feature: 'FAQ',
                 },
                 {
                     id: 7,
                     feature: 'Business Psychology',
                 },
                 {
                     id: 8,
                     feature: `4Ps Evolution-People, Processes, Place & Profit`,
                 },
                 {
                     id: 9,
                     feature: `Power of Thought's`,
                    },
                 {
                     id: 10,
                     feature: 'Future Planning',
                 },
                 {
                    id: 11,
                    feature: 'Dream Decide, Declare your Path for next 10 Years',
                },
                {
                    id: 12,
                    feature: 'Business Refreshment Meet',
                },


             ]
         },
    ]
    return (
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5 relative max-xs:px-5 max-sm:py-0">
            <img
                loading="lazy"
                src={Images.user_auth_vector}
                className="object-cover absolute bottom-0 "
                // src={Images.mmb_all_modules_bg}
                    // className=" absolute object-cover size-full bottom-0"
                alt=''
            />
            <div className="text-start flex flex-col items-center pt-12  max-w-full w-[1296px] mx-auto xs:px-5 z-10 max-sm:pt-3 " ref={titleRef}>
                <div
                    // className="mt-6 text-5xl font-medium  max-md:text-4xl  lg:w-full" 
                    className={`mt-6 text-5xl font-medium max-md:text-4xl  ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                >
                    <span className=" leading-[58px]">Blueprints for Excellence: </span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">
                        Discover Our Specialized Modules
                    </span>
                </div>
                <div className="mt-6 text-lg text-center text-zinc-600 max-md:w-full ">
                    Driving Jewellery Business Excellence: Our &quot;Make My Business (MMB)&quot; initiative
                    serves as a comprehensive guide for business expansion, featuring expert modules
                    on Planning, Marketing, Finance, Team Building, CRM, and beyond.
                </div>
                {Data.map((item, index) => (
                    <div key={index} className='pb-12' >
                        {item.id % 2 !== 0 ? (
                            <div className="py-7 pr-8 pl-8 mt-12 max-w-full bg-white shadow-2xl shadow-orange-50 rounded-[32px] w-full  max-lg:pr-5 max-lg:mt-10 "
                                ref={titleRef}
                            >
                                <div className="flex flex-col md:flex-col items-center lg:flex-row gap-3">
                                    <div
                                        // className="flex flex-col w-full md:w-[59%] md:ml-0"
                                        className="flex flex-col w-[59%] md:ml-0 max-lg:w-full max-lg:w-full lg:w-full md:w-full"
                                    >
                                        <div className="flex flex-col grow ">
                                            <div
                                                // className="flex gap-5 items-center font-medium flex-wrap w-full  md:justify-start  items-start"
                                                className={`flex gap-5 items-center border-l-2 font-medium border-orange-500 ${isVisible ? 'animation_fadeInRight1' : ''}`}
                                            >
                                                {/* <div className="flex self-start text-3xl rounded-r-full bg-orange-500 bg-opacity-10 p-5 border-l-2 border-orange-500">
                                                    Business{" "}&nbsp;
                                                    <span className="font-bold text-orange-500">{decodeHTML(item.title)}</span>
                                                </div> */}
                                                <div className="self-start text-3xl text-start rounded-r-full terms_bg_clr bg-opacity-10 p-5 max-sm:text-xl">
                                                    Business{" "}
                                                    <span className="font-bold text-orange-500">{decodeHTML(item?.title)}</span>
                                                </div>
                                                <div className="text-5xl md:text-4xl font-outline-1">
                                                    {/* 0{item.id} */}
                                                    {item.id < 10 ? `0${item.id}` : item.id}
                                                    </div>
                                            </div>
                                            <div className="self-stretch  max-lg:py-2">
                                                <div className="flex flex-wrap gap-5 ">
                                                    <div className="flex flex-wrap grow text-lg text-zinc-600 w-full max-sm:text-xs">
                                                        {item?.features?.map((feature_item, index) => (
                                                            <div className="flex flex-auto w-[50%] justify-between px-4 items-center text-start py-2 max-lg:p-1" key={index}>
                                                                <img
                                                                    src={Images.circle}
                                                                    alt=''
                                                                    className='my-auto rounded-full stroke-[1.9px] w-5 h-5'
                                                                />
                                                                <div className="flex-auto max-lg:text-xs">{decodeHTML(feature_item.feature)}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        // className="flex ml-5 w-full md:w-[41%] md:ml-0 "
                                        className="flex ml-5 w-[41%] md:ml-0 max-lg:w-full max-lg:w-full lg:w-full md:w-full sm:ml-0 xs:ml-0 lg:ml-0 max-lg:ml-0"
                                    >
                                        <img
                                            loading="lazy"
                                            src={item.imgUrl}
                                            alt=''
                                            // className="self-stretch my-auto w-full aspect-[1.56] rounded-2xl"
                                            className="self-stretch my-auto w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                // className="px-8 py-7 mt-12 max-w-full bg-white shadow-2xl rounded-[32px] w-full  max-lg:px-5 max-lg:mt-10"
                                className='py-7 pr-8 pl-8 mt-12 bg-white shadow-2xl rounded-[32px] w-full shadow-orange-50 max-lg:pr-5 max-lg:mt-10 '
                                ref={titleRef}
                            >
                                <div 
                                //className="flex flex-col md:flex-col  lg:items-center lg:flex-row "
                                className='flex flex-col md:flex-col items-center lg:flex-row gap-3'
                                >
                                    <div className=" flex flex-col w-full w-[41%] md:ml-0 max-lg:w-full max-lg:w-full lg:w-full md:w-full  sm:ml-0 xs:ml-0 lg:ml-0 max-lg:ml-0">
                                        <img
                                            loading="lazy"
                                            src={item.imgUrl}
                                            // className="self-stretch my-auto w-full aspect-[1.56]"
                                            className="self-stretch my-auto w-full "
                                            alt="Images"
                                        />
                                    </div>
                                    <div className=" flex flex-col ml-5 w-full w-[59%]  ps-5 max-lg:w-full max-lg:w-full lg:w-full md:w-full md:ml-0 md:ps-0 sm:ml-0 sm:ps-0 xs:ml-0 xs:ps-0 max-md:ml-0 max-sm:ps-0">
                                        <div className="flex flex-col grow text-wrap ml-4">
                                            <div
                                                //className="flex gap-5 items-center border-l-2 font-medium border-orange-500"
                                                className={` flex gap-5 items-center border-l-2 font-medium border-orange-500 ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                                            >
                                                <div className="text-3xl text-start rounded-r-full terms_bg_clr bg-opacity-10 p-5 max-sm:text-xl">
                                                    Business{" "}
                                                    <span className="font-bold text-orange-500">{decodeHTML(item.title)}</span>
                                                    {/* <span className="font-bold text-orange-500">1234561234560</span> */}
                                                </div>
                                                <div className="text-5xl md:text-4xl font-outline-1">
                                                    {/* 0{item.id} */}
                                                    {item.id < 10 ? `0${item.id}` : item.id}
                                                    </div>
                                            </div>
                                            <div className="mt-6 self-stretch">
                                                <div className="flex flex-wrap gap-5">
                                                    <div className="flex flex-wrap grow text-lg text-zinc-600 w-full max-sm:text-xs">
                                                        {item?.features?.map((feature_item, index) => (
                                                            <div className="flex flex-auto w-[50%] justify-between px-4 items-center text-start py-2 max-lg:p-1" key={index}>
                                                                <img

                                                                    src={Images.circle}
                                                                    alt=''
                                                                    className='my-auto rounded-full stroke-[1.9px] w-5 h-5'
                                                                />
                                                                <div className="flex-auto max-lg:text-xs">{decodeHTML(feature_item.feature)}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>

        </div>
    )
}

export default UpdatedAnimatedComponent(AllModules)