import React, { useEffect, useRef, useState } from 'react';
import * as Images from '../../../../assets';
import { fetchData } from '../../../../apiGeneralFunction';
import { decodeHTML } from '../../../ReusableComp/DecodeHtmlData';

const GetinTouch = ({ data }) => {

    const titleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    // const [data, setData] = useState([]);
    // const [token, setToken] = useState('');

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
    const website = data?.website || 'https://headway.org.in';
    const email = data?.email || 'info@headway.org.in';
    const mobile = data?.mobile || '+91 70469 00096';


    const htmlToConvert = [
        {
            "state": true,
            "message": "Page fatch successfully",
            // "data": {
            //     "id": 4,
            //     "name": "Get In Touch",
            //     "description": `<div class="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            //     <div class=" text-5xl font-medium max-md:max-w-full max-md:text-4xl about-us_title_animation_fade_in_right">
            //     <span class=" leading-[58px]">Get in</span> <span class="font-bold text-orange-500 leading-[58px]">Touch</span>
            //     </div><div class="mt-6 text-lg text-zinc-600 max-md:max-w-full font-medium">Ready to unlock your jewellery business potential? Get in touch with us today!</div>
            //     <div class="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            //     <div class="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
            //     <img loading="lazy" src="data:image/png;base64,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" alt="" class="w-8 aspect-square">
            //     </div>
            //     <div class="flex flex-col flex-1 my-auto"><div class="text-sm tracking-[3.5px]  font-medium  text-zinc-600">CALL US</div>
            //     <div class="mt-1.5 text-2xl font-medium">+91 70469 00096</div>
            //     </div>
            //     </div>
            //     <div class="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            //     <div class="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
            //     <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgB7Zpdcts2EMd3QcWNP9KR31ubPkGdE0Q5QeUTWDlBkgtIlN33JCewcgKrJwhzgrgnCOy2z/FMG6mpRWx2ZSoDUJQshZREJfzNeMYAQRN/A4tdLABQUlJSUlJcEDLSD3wflshmoDVkYC7B/wQ/1SqeesSv1QzBIb9chRVAANcK4cIYeksUdXeCvy9mfXcmwbdCvRYR1KCIiHgyr3aaf3bubjqFD4Ff3VB0xo3qsAYQUOd/o9q7U6b9RMEs1v9B0Rv+1Z/QRCOCBiINywTRN2xKyCY1oYX+ZPDxJNGpgmVkWew7SIpFCA3h79sGOhjoa1ghslhGADWlqAXjgyKiH+6m9DFVcO9k7wU/epZo+nyrqV9CAemd+NxXeuHW0sut5tXzZNsxwfFUfm/XGcAnO03dgQLzb+A3eLTP7LrIRI8fBH+Fdp1KvrihTMsuE1G76GKFnUB3iLBt11XQayXbOSMc2+4Hq0pvNS8PYE2Ivcp7Kz64Zls+sG3ZGWHPi2p2GYFCWCNEGM/I11ZV1QM3dnAEK4POw4Exr2HNIFJdu6zQ1JyyXfAU/mKXB1CZOWQrCgMAp8+YcFlq2su7K/a1X8NwWrPtjsoIuG8/r9gFjpV9q6hhBmShuAdR/Qa8cDfjTiavb+Ct4GpccDY4CjIgPltWRaXUmURmH4Ofc4+5+7/5x/Y3RDxkIJNg/q/XLBdQRaXO+6d7LciJ/qnfIkMd+xvJVXdeKpABnmLdDQ7p7H0xO/+gd7J/yP7vydeuATKK9z06ZxdTSzzS9xKL0rxkGmERxK7sIYzbez2efj7MSRzavkvZe2vkXVDWjEcmwYJ04NOt6G7ikT+vXcf2OrZLMxxMbPI3NnNYFDMLFmSkOQQ9SsayMIddp9jrkGEs37pq5LUdzUXwiO2WDgYGj2w/KMR2fZ42xaWuf7r/hoUFzjv8NyKewtutqwByJNOilcaPge7y5vyCxrMlYtd1Fhd+yZJw9kIWJrbXJFqJ2AX49VxHeMTIrhOB/BBZjAiwMfxJSQrmaa9p5D7CI2KX1PjY9jn3RXfasExhDgPZXi8XmlVZyAjbiF2zOzmIR1unNNGy2G1xm2WkkBY2wjbx9GzI78RBxX/xSnxfRnXJG5SlCLaJBa5sF7bwKV00SsHfOqXgb53vWzCh4y5WctidB2T3nVwX6AhGNxKqZs0frQLps73FRDVFsDF0aZcrMDiENYMjKafPkaE/7LIrWLlHK4hqLU7+bZQyx3bZkAqd53YhirzQ3rwrxON1m9a846rZZT40D+2yI1i2dB46DaobaJ7BmiBpIrCSDnwY2ElmTsfc0k2Er+wyIrYkuQYFR/qYTBOxjSZzbOOCHwQ65KyDI1qSa72TvcKOdO/Ufyp9tOtkdNOyJvNdamG3ZcC0b8zizpFmZXjepEzDQ/w1LYctaSKc9VKLILdkaNq1JYSL4aHVkq8tEWIVbq8s+ROaTE3YT72YJqINmoDtuPA2PIQX3M0Ij6ZlUWa6eig3ZNCjp1Mug60WFhpF2Jb15+6mc8DCDxFNXSl8tOrLpcgmRQbfcj/CWYSOWLvrw6tI/JWUlJSULIvPGmstafhP3cwAAAAASUVORK5CYII=" alt="" class="w-8 aspect-square">
            //     </div>
            //     <div class="flex flex-col flex-1 my-auto"><div class="text-sm tracking-[3.5px]   text-zinc-600 font-medium">EMAIL US</div><div class="mt-1.5 text-2xl font-medium">
            //     info@headway.org.in</div></div></div><div class="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            //     <div class="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
            //     <img loading="lazy" src="data:image/png;base64,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" alt="" class="w-8 aspect-square"/>
            //     </div><div class="flex flex-col flex-1 my-auto whitespace-nowrap">
            //     <div class="text-sm tracking-[3.5px] font-medium text-zinc-600">WEBSITE</div>
            //     <div class="mt-1.5 text-2xl font-medium">www.headway.org.in</div></div>
            //     </div>
            //     </div>
            //  `,
            //     "created_at": "2024-03-29T12:50:00.000000Z",
            //     "updated_at": "2024-03-29T12:50:00.000000Z"
            // }
            "data": {
                "id": 4,
                "name": "Get In Touch",
                "description": `
                <div class="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div class=" text-5xl font-medium max-md:max-w-full max-md:text-4xl about-us_title_animation_fade_in_right">
                <span class=" leading-[58px]">Get in</span> <span class="font-bold text-orange-500 leading-[58px]">Touch</span>
                </div><div class="mt-6 text-lg text-zinc-600 max-md:max-w-full font-medium">Ready to unlock your jewellery business potential? Get in touch with us today!</div>
                <div class="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div class="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
                <img loading="lazy" 
                src="data:image/png;base64,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" alt="" class="w-8 aspect-square">
                </div>
                <div class="flex flex-col flex-1 my-auto"><div class="text-sm tracking-[3.5px]  font-medium  text-zinc-600">CALL US</div>
                <div class="mt-1.5 text-2xl font-medium max-sm:text-xl">+91 70469 00096</div>
                </div>
                </div>
                <div class="flex gap-5 justify-between mt-12 max-md:mt-10 max-md:max-w-full">
                <div class="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5 ">
                <img loading="lazy" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgB7Zpdcts2EMd3QcWNP9KR31ubPkGdE0Q5QeUTWDlBkgtIlN33JCewcgKrJwhzgrgnCOy2z/FMG6mpRWx2ZSoDUJQshZREJfzNeMYAQRN/A4tdLABQUlJSUlJcEDLSD3wflshmoDVkYC7B/wQ/1SqeesSv1QzBIb9chRVAANcK4cIYeksUdXeCvy9mfXcmwbdCvRYR1KCIiHgyr3aaf3bubjqFD4Ff3VB0xo3qsAYQUOd/o9q7U6b9RMEs1v9B0Rv+1Z/QRCOCBiINywTRN2xKyCY1oYX+ZPDxJNGpgmVkWew7SIpFCA3h79sGOhjoa1ghslhGADWlqAXjgyKiH+6m9DFVcO9k7wU/epZo+nyrqV9CAemd+NxXeuHW0sut5tXzZNsxwfFUfm/XGcAnO03dgQLzb+A3eLTP7LrIRI8fBH+Fdp1KvrihTMsuE1G76GKFnUB3iLBt11XQayXbOSMc2+4Hq0pvNS8PYE2Ivcp7Kz64Zls+sG3ZGWHPi2p2GYFCWCNEGM/I11ZV1QM3dnAEK4POw4Exr2HNIFJdu6zQ1JyyXfAU/mKXB1CZOWQrCgMAp8+YcFlq2su7K/a1X8NwWrPtjsoIuG8/r9gFjpV9q6hhBmShuAdR/Qa8cDfjTiavb+Ct4GpccDY4CjIgPltWRaXUmURmH4Ofc4+5+7/5x/Y3RDxkIJNg/q/XLBdQRaXO+6d7LciJ/qnfIkMd+xvJVXdeKpABnmLdDQ7p7H0xO/+gd7J/yP7vydeuATKK9z06ZxdTSzzS9xKL0rxkGmERxK7sIYzbez2efj7MSRzavkvZe2vkXVDWjEcmwYJ04NOt6G7ikT+vXcf2OrZLMxxMbPI3NnNYFDMLFmSkOQQ9SsayMIddp9jrkGEs37pq5LUdzUXwiO2WDgYGj2w/KMR2fZ42xaWuf7r/hoUFzjv8NyKewtutqwByJNOilcaPge7y5vyCxrMlYtd1Fhd+yZJw9kIWJrbXJFqJ2AX49VxHeMTIrhOB/BBZjAiwMfxJSQrmaa9p5D7CI2KX1PjY9jn3RXfasExhDgPZXi8XmlVZyAjbiF2zOzmIR1unNNGy2G1xm2WkkBY2wjbx9GzI78RBxX/xSnxfRnXJG5SlCLaJBa5sF7bwKV00SsHfOqXgb53vWzCh4y5WctidB2T3nVwX6AhGNxKqZs0frQLps73FRDVFsDF0aZcrMDiENYMjKafPkaE/7LIrWLlHK4hqLU7+bZQyx3bZkAqd53YhirzQ3rwrxON1m9a846rZZT40D+2yI1i2dB46DaobaJ7BmiBpIrCSDnwY2ElmTsfc0k2Er+wyIrYkuQYFR/qYTBOxjSZzbOOCHwQ65KyDI1qSa72TvcKOdO/Ufyp9tOtkdNOyJvNdamG3ZcC0b8zizpFmZXjepEzDQ/w1LYctaSKc9VKLILdkaNq1JYSL4aHVkq8tEWIVbq8s+ROaTE3YT72YJqINmoDtuPA2PIQX3M0Ij6ZlUWa6eig3ZNCjp1Mug60WFhpF2Jb15+6mc8DCDxFNXSl8tOrLpcgmRQbfcj/CWYSOWLvrw6tI/JWUlJSULIvPGmstafhP3cwAAAAASUVORK5CYII=" alt="" 
                class="w-8 aspect-square ">
                </div>
                <div class="flex flex-col flex-1 my-auto text-wrap">
                <div class="text-sm tracking-[3.5px]   text-zinc-600 font-medium">EMAIL US</div>
                <div class="mt-1.5 text-2xl font-medium max-sm:text-xl">
                info@headway.org.in
                </div>
                </div>
                </div>
                <div class="flex gap-5 justify-between mt-12  max-md:mt-10 max-md:max-w-full">
                <div class="flex justify-center items-center p-4 bg-white rounded-full max-md:pr-5">
                <img loading="lazy" src="data:image/png;base64,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" alt="" class="w-8 aspect-square"/>
                </div><div class="flex flex-col flex-1 my-auto ">
                <div class="text-sm tracking-[3.5px]  font-medium   text-zinc-600">WEBSITE</div>
                <div class="mt-1.5 text-2xl font-medium max-sm:text-xl">www.headway.org.in</div></div>
                </div>
                </div>
             `,
                "created_at": "2024-03-29T12:50:00.000000Z",
                "updated_at": "2024-03-29T12:50:00.000000Z"
            }
        }
    ]

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="text-5xl font-medium about-us_title_animation_fade_in_right">
                    <span className="leading-[58px]">Get in</span>{" "}
                    <span className="font-bold text-orange-500 leading-[58px]">Touch</span>
                </div>
                <div className="mt-6 text-lg text-zinc-600 font-medium">
                    Ready to unlock your jewellery business potential? Get in touch with us today!
                </div>
                <div className="flex flex-col gap-8 mt-12">
                    {/* Call Us */}
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center p-4 bg-white rounded-full">
                            {/* Phone Icon */}
                            <img src={Images.header_calling} alt="Phone" className="w-8 aspect-square" />
                        </div>
                        <div>
                            <div className="text-sm tracking-[3.5px] font-medium text-zinc-600">CALL US</div>
                            <div className="mt-1.5 text-2xl font-medium">{mobile}</div>
                        </div>
                    </div>
                    {/* Email Us */}
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center p-4 bg-white rounded-full">
                            {/* Email Icon */}
                            <img src={Images.email} alt="Email" className="w-8 aspect-square" />
                        </div>
                        <div>
                            <div className="text-sm tracking-[3.5px] font-medium text-zinc-600">EMAIL US</div>
                            <div className="mt-1.5 text-2xl font-medium">{email}</div>
                        </div>
                    </div>
                    {/* Website */}
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center p-4 bg-white rounded-full">
                            {/* Website Icon */}
                            <img src={Images.global} alt="Website" className="w-8 aspect-square" />
                        </div>
                        <div>
                            <div className="text-sm tracking-[3.5px] font-medium text-zinc-600">WEBSITE</div>
                            <div className="mt-1.5 text-2xl font-medium">
                                <a href={website} target="_blank" rel="noopener noreferrer">{website.replace(/^https?:\/\//, '')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {htmlToConvert.map((item, index) => (
                <div className="text-start" dangerouslySetInnerHTML={{ __html: `${item.data.description}` }} key={index}/>
            ))} */}
            {/* {data.map((item,index) => (
                <div className="" dangerouslySetInnerHTML={{ __html: `${item.data.description}` }} key={index}/>
            ))} */}

        </>
    )
}

export default GetinTouch