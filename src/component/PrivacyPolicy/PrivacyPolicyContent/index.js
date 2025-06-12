import React, { useEffect } from 'react';
import * as Images from '../../../assets';

const PrivacyPolicyContent = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

    }, []);

    const informationSharing = [
        {
            id: 1,
            title: 'Third Party Service Providers:',
            desc: `We may share your information with trusted third-party
            service providers for purposes such as analytics, payment processing, and marketing
            while ensuring they adhere to similar privacy standards.`
        },
        {
            id: 2,
            title: 'Legal Compliance:',
            desc: `We may disclose your information if required by law or to protect
            our rights, property, safety, or that of others.`
        },
        {
            id: 3,
            title: 'Business Transfers:',
            desc: `In the event of a business transfer, such as a merger, acquisition,
            or asset sale, your information may be transferred to the new owner.`
        },
        {
            id: 4,
            title: 'Security Precautions:',
            desc: `We implement strong security measures to safeguard your
            information against unauthorized access, alteration, disclosure, or destruction. This
            includes encryption, access controls, and regular security audits.`
        },
        {
            id: 5,
            title: 'Advertisements on Platform:',
            desc: `We may display advertisements from third parties on our
            platform. These advertisers may use cookies and similar technologies to collect data
            about your interactions with their ads. We do not control or endorse these practices and
            encourage you to review their respective privacy policies.`
        },
        {
            id: 6,
            title: 'Children Information:',
            desc: `Our services are not directed towards individuals under the age
            of 18. We do not knowingly collect or request personal information from minors. If we
            become aware that a minor has provided us with personal information, we will take steps
            to promptly delete such data.`
        },
        {
            id: 7,
            title: 'Data Retention:',
            desc: `We retain your information only for as long as necessary to fulfil the
            purposes outlined in this Privacy Policy unless a longer retention period is required by
            law.`
        },
        {
            id: 8,
            title: 'Protection of Rights:',
            desc: `In circumstances where we believe it is necessary to protect the
            rights, property, or safety of Headway Business Solutions LLP, our users, or others, we
            may share information. It may involve disclosing data to investigate potential violations of
            our terms of service, fraudulent activities, or security threats.`
        }
    ]

    const yourRights = [
        {
            id: 1,
            title: 'Access:',
            desc: `You have the right to access and request a copy of your personal information.`
        },
        {
            id: 2,
            title: 'Correction:',
            desc: `You have the right to request that we correct inaccurate or incomplete personal information.`
        },
        {
            id: 3,
            title: 'Erasure:',
            desc: `You have the right to request that we erase your personal information.`
        },
        {
            id: 4,
            title: 'Restriction of Processing:',
            desc: `You have the right to restrict or object to the processing of
            your personal information.`
        },
        {
            id: 5,
            title: 'Withdrawal of Consent:',
            desc: `You can withdraw your consent to our processing of your
            personal information at any time.`
        },
    ]
    return (
        <div className=" flex justify-center items-center px-16 py-12 bg-white max-md:px-5" >
            {/* <div className="absolute  bottom-0">
                <img
                    // src={Images.blog_into_bg}
                    src={Images.user_auth_vector}
                    //src={Images.privacy_policy_bg}
                    alt="Images"
                    loading="lazy"
                    className="object-fill full-size"
                />
            </div> */}
            
            <div className="text-start z-10 mt-6 max-w-full w-[1296px]">
                <div className="flex flex-col self-stretch">
                    <div className="mt-6 w-full text-lg text-zinc-600 max-md:max-w-full">
                        At <span className="text-orange-500">Headway Business Solutions LLP</span>,
                        your privacy is important to us. This Privacy Policy summarizes
                        how we collect, use, share, and protect your information when you interact with our platform as a jewellery
                        business coach and consultant company. By accessing our services, you agree to the terms outlined in this policy.
                    </div>
                </div>

               
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-[32px] font-bold text-zinc-800 max-md:max-w-full">
                        Applicability of Privacy Policy for <span className="text-orange-500">Headway Business Solutions LLP</span>
                    </div>
                    <div className="mt-6 self-stretch text-lg blog_intro">
                        This Privacy Policy applies to all users of the services provided by&nbsp;
                        <span className="text-orange-500">Headway Business Solutions LLP</span>,
                        a jewellery business coach and consultant company. By using our services, you agree to the terms mentioned
                        in this policy. This policy applies to the collection, use, and disclosure of personal information by&nbsp;
                        <span className="text-orange-500">Headway Business Solutions LLP</span>
                        &nbsp;and its affiliated entities.
                    </div>
                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-2xl font-bold text-zinc-800 max-md:max-w-full">
                        Individual Users
                       
                    </div>
                    <div className=" mt-6 self-stretch text-lg blog_intro">
                        Individual users who access our platform are subject to this Privacy Policy. It includes website browsers,
                        entrepreneurs, business owners, and all other individuals seeking guidance and support from this website (headway.org.in).
                    </div>
                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-2xl font-bold text-zinc-800 max-md:max-w-full">
                        Business Entities
                      
                    </div>
                    <div className=" mt-6 self-stretch text-lg blog_intro">
                        Business entities, including jewellery companies, retailers, wholesalers,
                        showroom owners, jewellery makers, and other related businesses, that engage with&nbsp;
                        <span className="text-orange-500">Headway Business Solutions LLP</span>
                        &nbsp;for consulting services are also covered under this Privacy Policy.
                    </div>
                </div>
                <div className="flex flex-col self-stretch  mt-8">
                    <div className="w-full text-2xl font-bold text-zinc-800 max-md:max-w-full">
                        Employees and Representatives
                      
                    </div>
                    <div className="mt-6 w-full text-lg max-md:max-w-full blog_intro">
                        Employees, representatives, contractors, and agents of&nbsp;
                        <span className="text-orange-500">Headway Business Solutions LLP</span>&nbsp;
                        who handle personal information as part of their duties are required to adhere to the provisions outlined in this Privacy Policy.
                    </div>
                </div>
                <div className="flex flex-col self-stretch  mt-8">
                    <div className="w-full text-2xl font-bold text-zinc-800 max-md:max-w-full">
                        Third Parties
                     
                    </div>
                    <div className="mt-6 w-full text-lg max-md:max-w-full blog_intro">
                        Third-party service providers, partners, and vendors engaged by&nbsp;
                        <span className="text-orange-500">Headway Business Solutions LLP</span>&nbsp;
                        to deliver services or support operations are expected to comply with similar privacy standards and obligations.
                    </div>
                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-2xl font-bold max-md:max-w-full text-zinc-800">
                        Website Visitors
                    </div>
                    <div className="mt-6 w-full text-lg max-md:max-w-full blog_intro">
                        Visitors to our website, including individuals browsing our content,
                        accessing resources, or seeking information about our services, are subject to the terms of this Privacy Policy.
                    </div>
                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-2xl font-bold max-md:max-w-full  text-zinc-800">
                        Applicability Beyond Geographical Boundaries
                    </div>
                    <div className="mt-6 w-full text-lg max-md:max-w-full blog_intro">
                        This Privacy Policy applies to users and interactions regardless of their geographical location.
                        Whether you access our services from within or outside the territories where&nbsp;
                        <span className="text-orange-500">Headway Business Solutions LLP</span>
                        &nbsp;operates, this policy governs the handling of your information.
                    </div>
                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-2xl font-bold text-zinc-800 max-md:max-w-full">
                        Consent and Acceptance
                    
                    </div>
                    <div className="mt-6 w-full text-lg blog_intro max-md:max-w-full">
                        By accessing or using our services, you acknowledge that you have read, understood, and agreed to
                        the terms outlined in this Privacy Policy. If you do not agree with any aspect of this policy, you
                        should refrain from using our services.
                    </div>
                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-[32px] font-bold max-md:max-w-full text-zinc-800">
                        Information
                        <span className="text-orange-500"> We Collect</span>
                    </div>

                  
                    <div className="mt-6  text-lg blog_intro flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full ">
                            <div className="flex  flex-col items-start grow self-stretch px-6 pt-6 pb-16 w-full text-lg rounded-xl terms_bg_clr max-md:px-5 max-md:mt-4 max-md:max-w-full">
                                <div className='flex  items-start gap-3'>
                                    <div className=''>
                                        <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                    </div>

                                    <div>
                                        <div className="flex justify-start items-center font-bold text-zinc-800">

                                            <span className=''>Personal Information:</span>
                                        </div>
                                        <div className="mt-3 text-zinc-600">
                                            We may collect personal information such as your name, email
                                            address, contact number, and other personal or business details
                                            when you sign up for our services or communicate with us.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                            <div className="flex flex-col grow items-start self-stretch px-6 pt-6 pb-20 w-full text-lg rounded-xl terms_bg_clr max-md:px-5 max-md:mt-4 max-md:max-w-full">
                                <div className='flex items-start gap-3'>
                                    <div className=''>
                                        <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                    </div>
                                    <div>
                                        <div className="flex justify-start items-center font-bold text-zinc-800">
                                         
                                            <span className=''>Payment Information:</span>
                                        </div>

                                        <div className="mt-3 text-zinc-600">
                                            In case of transactions, we may collect payment information,
                                            including credit/debit card details, for processing payments
                                            securely.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                            <div className="flex flex-col grow p-6 w-full text-lg rounded-xl terms_bg_clr max-md:px-5 max-md:mt-4 max-md:max-w-full">
                                <div className='flex items-start gap-3'>
                                    <div className=''>
                                        <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                    </div>
                                    <div>
                                        <div className="flex justify-start items-center font-bold text-zinc-800">
                                           
                                            <span className=''>Cookies and Other Tracking Technologies:</span>
                                        </div>
                                        <div className="mt-3 text-zinc-600">
                                            We may use cookies and other tracking technologies to collect
                                            information about your browsing activity. (Cookies are small data
                                            files that are stored on your device when you visit a website.)
                                            They allow us to remember your preferences and track your activity
                                            on our platform.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  



                </div>
                <div className="flex flex-col self-stretch mt-8">
                    <div className="w-full text-[32px] font-bold max-md:max-w-full text-zinc-800">
                        How We Use  <span className="text-orange-500">Your Information</span>
                    </div>
                    <div className="mt-6 w-full text-lg blog_intro max-md:max-w-full">

                        <div className="flex flex-col self-stretch text-lg font-medium text-zinc-800">
                            <div className='flex items-start gap-3 mt-4'>
                                <div className=''>
                                    <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                </div>
                                <div>
                                    <div className="flex justify-start items-center font-bold text-zinc-800">
                                   
                                        <span className=''> Service Provision:</span>
                                    </div>
                                    <div className=" w-full text-zinc-600 max-md:max-w-full">
                                        We utilize your information to deliver our coaching and consulting
                                        services, customize content, and provide personalized recommendations.
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-3 mt-4'>
                                <div className=''>
                                    <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                </div>
                                <div>
                                    <div className="flex justify-start items-center font-bold text-zinc-800">
                                    
                                        <span className=''>  Communication:</span>
                                    </div>
                                    <div className=" w-full text-zinc-600 max-md:max-w-full">
                                        We may contact you via email or other means for administrative purposes,
                                        updates, marketing communications, or responding to inquiries.
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-3 mt-4'>
                                <div className=''>
                                    <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                </div>
                                <div>
                                    <div className="flex justify-start items-center font-bold text-zinc-800">
                                      
                                        <span className=''> Improvement:</span>
                                    </div>
                                    <div className=" w-full text-zinc-600 max-md:max-w-full">
                                        Your feedback and usage data help us analyze trends, enhance our
                                        services, and develop new features.
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </div>
                </div>
            
                <div className="mt-8 w-full text-lg blog_intro max-md:max-w-full">

                    <div className="flex flex-col self-stretch">
                        <div className="w-full text-[32px] font-bold text-zinc-800 max-md:max-w-full">
                            Information <span className="text-orange-500">Sharing</span>
                        </div>
                        <div className=" mt-6 w-full max-md:max-w-full">
                            <div className="flex max-md:flex-col max-md:gap-0 flex-wrap ">
                                {informationSharing.map((item, index) => (
                                    <div className='p-2 flex flex-col xl:w-3/12 max-md:w-full md:w-6/12' key={index}>
                                        <div className=" max-md:ml-0 max-md:w-full h-full max-h-full">
                                            <div className="h-full flex flex-col grow self-stretch p-6 w-full text-lg bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:mt-4">
                                                <div className="font-bold text-zinc-800 text-lg">
                                                    {item.title}
                                                </div>
                                                <div className="mt-3 text-zinc-600 text-lg">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>




                </div>
            

                <div className="mt-8 flex flex-col self-stretch">
                    <div className="self-start text-[32px] font-bold text-zinc-800 max-md:max-w-full">
                        Your <span className="text-orange-500">Rights</span>
                    </div>
                    <div className="self-start mt-4 text-lg text-zinc-600 max-md:max-w-full">
                        You have certain rights regarding your personal information, including:
                    </div>
                    <div className="mt-6 w-full max-md:max-w-full">
                        <div className="flex max-md:flex-col max-md:gap-0 flex-wrap">
                            {yourRights.map((item, index) => (
                                <div className='p-2 flex flex-col  w-[33%] max-md:w-full' key={index}>
                                    <div className=" max-md:ml-0 max-md:w-full" key={index}>
                                        <div className="flex flex-col grow px-6 pt-6 pb-12 w-full text-lg bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:mt-4 max-md:max-w-full">
                                          
                                            <div className='flex  items-start gap-3'>
                                                <div className=''>
                                                    <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                                                </div>

                                                <div>
                                                    <div className="flex justify-start items-center font-bold text-zinc-800">

                                                        <span className=''> {item.title}</span>
                                                    </div>
                                                    <div className="mt-3 text-zinc-600">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="mt-6 w-full text-lg text-zinc-800 max-md:max-w-full">
                        To access any of these rights, please contact us at{" "}
                        <span className="text-orange-500">info@headway.org.in</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-col self-stretch text-lg ">
                    <div className="w-full text-[32px] text-zinc-800 max-md:max-w-full font-bold">
                        Your <span className="text-orange-500">Consent</span>
                    </div>
                    <div className="mt-6 w-full text-lg text-zinc-800 max-md:max-w-full">
                        By using our services, you consent to the collection, processing,  and sharing of your information as described in this Privacy Policy.
                    </div>
                    <div className='flex  items-start gap-3 mt-6'>
                        <div className=''>
                            <i className="fa fa-circle-o text-orange-500 text-xs" ></i>
                        </div>

                        <div>
                            <div className="flex justify-start items-center font-bold text-zinc-800">

                                <span className=''> Changes to this Privacy Policy</span>
                            </div>
                            <div className="mt-2 text-zinc-600">
                                We reserve the right to update or modify this Privacy Policy at any
                                time. Any changes will be reflected on this page, and we encourage you
                                to review it occasionally. Your continued use of our services after any
                                modifications indicates your acceptance of the updated Privacy Policy.
                            </div>
                        </div>
                    </div>

               
                </div>


                <div className="mt-8 font-medium flex flex-col self-stretch">
                    <div className="w-full text-[32px] font-bold text-zinc-800 max-md:max-w-full">
                        Grievance <span className="text-orange-500">Manager</span>
                    </div>
                    <div className="mt-6 w-full text-lg text-zinc-600 max-md:max-w-full">
                        For any concerns or grievances regarding your privacy or this policy,
                        please contact our designated Grievance Manager. In compliance with the
                        Information Technology Act 2000, our Grievance Officer is:
                    </div>
               
                    <div className="max-w-full w-[589px] max-md:pr-5 mt-3">
                        <div className="flex max-md:flex-row max-md:gap-0 items-center">
                            <div
                                // className="flex flex-col w-[66%] max-md:ml-0  "
                                className="flex flex-col w-auto max-md:ml-0  "
                            >
                                <div className="flex flex-col justify-center max-md:mt-10">
                                    <div
                                        style={{ backgroundColor: '#FEEADA' }}
                                        className="rounded-r-full w-fit text-xl font-medium text-start text-zinc-800 border border-2 border-orange-400 border-y-0 border-r-0">
                                        <div className='px-6 py-2'>CMD{" "}</div>
                                    </div>
                                    <div className="mt-7 text-base font-medium text-start text-zinc-800 ">
                                        Mr. Paresh Rajapara
                                        <img
                                            loading="lazy"
                                            src={Images.privacypolicy_gm}
                                            alt='Images'
                                            className='w-48'
                                            width=""
                                            height=""
                                            fetchPriority='high'
                                        />
                                    </div>

                                    <div className="mt-2 text-base text-zinc-800">
                                        Chief Managing Director of
                                        <div className="font-bold text-orange-500">
                                            Headway Business Solutions LLP
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-1">
                                        <div className="flex justify-center items-center px-1.5 w-6 h-6 bg-white rounded-full">
                                            <img
                                                loading="lazy"
                                                src={Images.header_sms}
                                                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/794a9536f4e65cff4578316308a92a6d3a2327262a64be13181809e0acbde99d?apiKey=8e5983036f284a13866aae97819cdb73&"
                                                className="w-3 aspect-square"
                                                alt="Images"
                                                width=""
                                                height=""
                                                fetchPriority='high'
                                            />
                                        </div>
                                        <div className="flex-auto my-auto text-xs text-start text-zinc-800">
                                            info@headway.org.in
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                // className="flex flex-col ml-5 w-[54%] max-md:ml-0 "
                                className="flex flex-col w-[54%] max-md:ml-0 "
                            >
                                <img
                                    loading="lazy"
                                    src={Images.privacypolicy_gmside}
                                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34eba22e4d25de5d9126630976576794f1b46a0d1a1c7e6f75fa2ee90e2ea119?apiKey=8e5983036f284a13866aae97819cdb73&"
                                    // className="shrink-0 max-w-full aspect-square w-[165px] max-md:mt-10"
                                    alt="Images"
                                    width=""
                                    height=""
                                    fetchPriority='high'
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col self-stretch text-lg text-zinc-600 mt-8">
                    <div className="w-full text-[32px] font-bold max-md:max-w-full text-zinc-800">
                        Customer <span className="text-orange-500">Support</span>
                    </div>
                    <div className="mt-6 w-full max-md:max-w-full ">
                        If you have any questions, or feedback, or need assistance, please reach
                        out to our Customer Support team at{" "}
                        <span className="text-orange-500">info@headway.org.in.</span>
                    </div>
                    <div className="mt-4 w-full max-md:max-w-full">
                        <span className="text-zinc-800">
                            This Privacy Policy is effective as of 18th March 2024 and governs the
                            collection, use, and disclosure of information by
                        </span>{" "}
                        Headway Business Solutions LLP.
                    </div>
                </div>




            </div>
        </div>

    )
}

export default PrivacyPolicyContent