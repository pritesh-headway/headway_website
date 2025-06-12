import React from 'react'
import UpdatedAnimatedComponent from '../../AnimationWrapperComponent'

const AboutStartup = ({ titleRef, isVisible, data }) => {

    const startData = [
        {
            id: 1,
            title: 'New Business Set-up',
            desc: `Starting a new jewellery business can be overwhelming and confusing, but with Headway Business Solutions LLP on your side, you can rest assured that you will receive the best possible guidance and advice. From business planning and
            market analysis to sales and marketing strategies, we are
            here to assist you every step of the way. Our experienced
            consultants and advisors are committed to helping you
            achieve your business goals.`
        },
        {
            id: 2,
            title: 'Ambience & Appearance in Store',
            desc: `At our business development consultancy, our team has in-depth knowledge of the role of ambience and 
            appearance in store. We specialize in helping you create an environment that aligns with your brand identity and 
            speaks to your target audience. Our mission is to help you provide the ultimate shopping experience for your customers and 
            boost your sales.`
        },
        {
            id: 3,
            title: 'Brand Etiquette',
            desc: `At Headway Business Solutions LLP, we understand the importance of building a strong brand. 
            That's why we offer customized solutions, including brand etiquette, to help you stand out in today's 
            competitive world. Our expertise and collaborative approach ensure that your brand reflects the values you hold 
            dear and resonates with your target audience.`
        },
        {
            id: 4,
            title: 'Logo & Naming',
            desc: `Headway Business Solutions LLP takes pride in developing strong and effective branding strategies 
            for businesses. As experts in logo design and naming, our team is here to help you establish a brand identity 
            that reflects your core values and resonates with your target audience. With our help, you can establish a strong market 
            position and achieve real growth.`
        },
        {
            id: 5,
            title: 'Environment Energy',
            desc: `Headway Business Solutions LLP specializes in providing businesses with the support and guidance 
            they need to thrive. That's why we offer a range of services, including environment energy solutions, to help you
             achieve your goals. With our help, you can make your business more sustainable and profitable.`
        },
        {
            id: 6,
            title: 'Vastu Balancing',
            desc: `Headway Business Solutions LLP offers a wide range of services that caters to all your business needs. 
            Our Vastu Balancing services help to create an environment that promotes success and growth. Our team of qualified
             business development consultants are here to guide you through the process and help you achieve your business goals.`
        },
        {
            id: 7,
            title: 'Human Resource',
            desc: `Our experienced team at Headway Business Solutions LLP has a proven track record of successfully assisting firms
             to implement effective Human Resource Processes. Through our services, we help our clients achieve their business objectives
              by optimizing their company's workflow. Our unique approach ensures that each client receives a customized solution specific to
               their individual needs.`
        },
        {
            id: 8,
            title: 'Recruitment Processes ',
            desc: `Recruitment is a critical aspect of any business, and at Headway Business Solutions LLP, we offer a range of
             recruitment processes designed to help you get the right people for your team. From screening candidates to interviewing
              and selecting the best fit for your organization, we take care of everything so you can focus on growing your business.`
        },
        {
            id: 9,
            title: 'Staff Training ',
            desc: `Your team is the backbone of your business, and having the right training can make all the difference in your
             company's success. That's where Headway Business Solutions LLP. comes in. Our staff training services are designed to
              equip your team with the knowledge and skills they need to thrive in their roles. From leadership and management to customer
               service and communication, we offer a wide range of training options to meet your needs.`
        },
        {
            id: 10,
            title: 'Security & Safety Solutions',
            desc: `Headway Business Solutions LLP is a leading business development consultancy that specializes in offering
             a range of high-quality services, including business products and payment security solutions. Our expert team of consultants works
              closely with clients to identify areas of opportunity in order to optimize and enhance the overall operations of their business.
               We are dedicated to providing the most innovative and cutting-edge solutions to our clients, ensuring optimal growth and success in
                today’s rapidly evolving business landscape.`
        },
        {
            id: 11,
            title: 'Marketing Strategy ',
            desc: `At Headway Business Solutions LLP, we understand the importance of a strong marketing strategy in today’s 
            competitive business world. That’s why we work with you to create a customized plan that meets your specific needs 
            and objectives. Trust us to help you reach your full potential.`
        },
        {
            id: 12,
            title: 'Customer Engagement ',
            desc: `If you're looking to improve your customer engagement, Headway Business Solutions LLP is here to help. 
            We offer a range of services designed to help you build a strong, loyal customer base that will drive growth for your 
            business. Contact us today to learn how we can help.`
        },
        {
            id: 13,
            title: 'Event Models ',
            desc: `Our consulting services at Headway Business Solutions LLP cover all aspects of business development, from 
            strategy to execution. If you're looking to improve your corporate events or trade shows, our event models are the perfect addition.
             Let us help you create unforgettable events that showcase your brand and leave a lasting impression on your guests and customers.`
        },
        {
            id: 14,
            title: 'Team Building',
            desc: `Welcome to Headway Business Solutions LLP, where we help businesses achieve their goals. Our team building services are 
            designed to foster collaboration among your employees and promote a positive work culture. Let us help you build a strong and unified team today.`
        },
        {
            id: 15,
            title: 'CRM Building',
            desc: `Maximize your customer relationships and improve your business with our CRM building services at Headway Business Solutions LLP. 
            We focus on utilizing our expertise to help you create a personalized approach to managing your customers, streamlining your processes 
            so you can focus on growth.`
        },
        {
            id: 16,
            title: 'Product Management',
            desc: `Headway Business Solutions LLP provides comprehensive product management services to help businesses maximize their potential.
             Our team has the skills and expertise to help you streamline processes, optimize profits and stay ahead of the competition. Contact us
              to find out how we can help your business grow.`
        },
        {
            id: 17,
            title: 'Merchandising ',
            desc: `Effective display merchandising is essential to making your products stand out from the crowd. At my firm, 
            we specialize in creating visually appealing and strategically designed displays that will catch your customer's 
            attention and drive results. Let's work together to enhance your business and take it to the next level!`
        },
        {
            id: 18,
            title: 'Marketing Activity ',
            desc: `At Headway Business Solutions LLP, we offer comprehensive business development consulting services to help
             you grow your business. Our marketing activities range from Above the Line (ATL) marketing campaigns, Photography,
              Below the Line (BTL) marketing collateral development to managing all your digital aspect of Through the Line (TTL) campaigns
               - including website and social media management. Get in touch to learn more and take your business to the next level!`
        },
        {
            id: 19,
            title: 'Stock Handling ',
            desc: `At Headway Business Solutions LLP, we specialize in providing businesses with the tools and
             strategies they need to succeed. Our services range from stock handling to marketing and sales strategies, and our team of experts
              is here to guide you every step of the way. Contact us today to learn more about how we can help your business thrive.`
        },
        {
            id: 20,
            title: 'Company Registration',
            desc: `At Headway Business Solutions LLP, we understand that laying the foundation for a successful business begins with proper registration. 
            Our "Startup" service streamlines the company registration process, guiding entrepreneurs through every step with precision and expertise. 
            Whether you're establishing a sole proprietorship, partnership, or corporation, we ensure that your company registration is executed seamlessly, 
            meeting all legal requirements and regulations. With our comprehensive support, you can 
            navigate the complexities of your jewellery company registration with confidence, setting the stage for a prosperous journey ahead.`
        },
        {
            id: 21,
            title: 'MSME Registration',
            desc: `Our "Startup" service provides a pathway for MSMEs seeking to harness the power of government registration. Recognizing the pivotal 
            role of the MSME (Micro, Small, and Medium Enterprises) in the economy, we facilitate seamless integration into the Udyam portal, ensuring your 
            business is registered efficiently. The MSME registration benefits range from obtaining crucial financial support and enjoying tax advantages to 
            reducing energy costs and simplifying the processes for licensing and approvals. Besides, MSME empowers businesses to participate in government tenders, 
            benefit from reduced interest rates, and leverage both state and central government initiatives. With access to various subsidies and the opportunity to 
            improve your business's rating, MSME can help you in many ways. Let us guide you through every step of the MSME registration process, unlocking a world of 
            opportunities for your business.`
        },
        {
            id: 22,
            title: 'IPR (Intellectual Property Rights) Registration',
            desc: `Our "Startup" service extends its support to jewellers in safeguarding their creations through robust Intellectual 
            Property Rights (IPR) protection. In the dynamic world of jewellery, where innovation and creativity thrive, securing your intellectual 
            property is paramount. Our comprehensive assistance ensures that jewellers navigate the intricacies of IPR seamlessly, safeguarding their designs, 
            trademarks, and other proprietary assets from infringement. By registering your intellectual property, you gain exclusive rights to your creations, providing a 
            competitive edge in the market and enhancing the value of your brand. Our expert team guides you through the process of IPR registration, offering strategic 
            advice tailored to your unique needs. With Headway Business Solutions LLP by your side, you can protect your innovative designs and establish a strong foundation 
            for long-term success in the jewellery industry.`
        }
    ]


    // console.log("startuop about", data);
    return (
        <>
            {/* <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full min-h-[3249px]">
        <div className="flex flex-col pb-10 mt-6 max-w-full w-[1296px]">
          <div className="self-center text-5xl font-medium text-orange-500 whitespace-nowrap max-md:text-4xl">
            <span className=" leading-[58px]">Our</span>{" "}
            <span className="font-bold text-orange-500 leading-[58px]">
              Success Story
            </span>
          </div>
          <div className="mt-6 text-lg text-center text-zinc-600 max-md:max-w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9399851f7493fe2d75e8727acecc2b14dccf9e63376ca209e1122bf25ea038d?apiKey=8e5983036f284a13866aae97819cdb73&"
            className="mt-28 w-full aspect-[3.13] max-md:mt-10 max-md:max-w-full"
          />
          <div className="flex gap-3 self-center mt-6">
            <div className="flex justify-center items-center px-3.5 bg-white aspect-square h-[42px] rounded-[160px] w-[42px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/987aae4ebfe7ea76166750320777bedb30ea2c876cb0d41454d993575e04a76b?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex gap-2.5 p-2 my-auto">
              <div className="flex flex-col justify-center aspect-square">
                <div className="shrink-0 h-3 bg-orange-500 rounded-full" />
              </div>
              <div className="w-3 h-3" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3" />
            </div>
            <div className="flex justify-center items-center px-3.5 bg-orange-500 aspect-square h-[42px] rounded-[160px] w-[42px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/043a2c81d01fea3fa4dd5de1b704656d2d69f81f23e3f538b6bf5160cc207c61?apiKey=8e5983036f284a13866aae97819cdb73&"
                className="w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </div> */}
            <div className="flex flex-col pt-2.5 w-full bg-white max-md:max-w-full"
                ref={titleRef}
            >
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full fill-stone-50  max-md:px-5 max-md:max-w-full max-sm:py-0">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aff26c094246450488438944c33484c0255e678e5061d23b1cb0aa9808eaf0de?apiKey=8e5983036f284a13866aae97819cdb73&"
                        className="object-cover absolute inset-0 size-full"
                        alt=''
                    />
                    <div className="flex relative flex-col mt-3 mb-6 max-w-full w-[1296px]">
                        <div
                            // className="self-center text-5xl font-medium whitespace-nowrap max-md:text-4xl"
                            className={`self-center text-5xl font-medium max-md:text-4xl ${isVisible ? 'about-us_title_animation_fade_in_right' : ''}`}
                        >
                            <span className=" leading-[58px] font-medium">About The</span>{" "}
                            <span className="font-bold text-orange-500 leading-[58px]">
                                Startup
                            </span>
                        </div>
                        <div className="justify-center mt-12 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0 flex-wrap grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                {data?.length > 0 ? (
                                    data?.map((item, index) => (
                                        <div className="flex flex-col  max-md:ml-0 max-md:w-full" key={index}>
                                            <div className="flex flex-col grow justify-start items-start pr-6 pb-6 w-full bg-white rounded-xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:mt-8">
                                                <div className="about_start_up justify-center ps-8 pe-8 py-4 text-4xl font-bold text-center text-white whitespace-nowrap bg-orange-500 rounded-tl-xl max-md:px-5">
                                                    {index + 1}
                                                </div>
                                                <div className='px-6 py-5'>
                                                    <div className="text-3xl font-medium text-start text-zinc-800 max-md:ml-2.5">
                                                        {item?.title}
                                                    </div>
                                                    <p className="text-start self-stretch mt-6 text-lg text-zinc-600" dangerouslySetInnerHTML={{ __html: item?.description }} />
                                                    {/* <div className="self-stretch mt-6 text-lg text-zinc-600">
                    {item.description}
                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    startData?.map((item, index) => (
                                        <div className="flex flex-col  max-md:ml-0 max-md:w-full" key={index}>
                                            <div className="flex flex-col grow justify-start items-start pr-6 pb-6 w-full bg-white rounded-xl border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:mt-8">
                                                <div className="about_start_up justify-center ps-8 pe-8 py-4 text-4xl font-bold text-center text-white whitespace-nowrap bg-orange-500 rounded-tl-xl max-md:px-5">
                                                    {item?.id}
                                                </div>
                                                <div className='px-6 py-5'>
                                                    <div className="text-3xl font-medium text-start  text-zinc-800 max-md:ml-2.5">
                                                        {item?.title}
                                                    </div>
                                                    <p className="self-stretch mt-6 text-lg text-zinc-600" dangerouslySetInnerHTML={{ __html: item?.desc }} />
                                                    {/* <div className="self-stretch mt-6 text-lg text-zinc-600">
                                                        {item.description}
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatedAnimatedComponent(AboutStartup)