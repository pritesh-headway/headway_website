import React, { useState } from "react";
import { useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { fetchWithFormDataToken } from "../../../apiGeneralFunction";
// import { useNavigate } from "react-router-dom";
// import * as Images from '../../../assets';
// import debounce from 'lodash.debounce';
import { redirect } from 'react-router-dom';
import PersonalInfoPage from "./PersonalInfoPage";
import BusinessInfoPage from "./BusinessInfoPage";
import ProductDetailsPage from "./ProductDetailsPage";

const RegisterPages = ({ userData }) => {

    const [currentStep, setCurrentStep] = useState(1);

    const TimelineForSections = ({ currentStep }) => {
        const steps = [
            { id: 1, name: "Personal Info" },
            { id: 2, name: "Business Info" },
            { id: 3, name: "Product" },
        ];
    
        return (
            <div className="timeline flex mt-10 relative justify-center items-center w-full">
                <div className="flex items-center justify-center space-x-10 relative">
                    {steps.map((step, index) => {
                        const isCompleted = step.id < currentStep;
                        const isCurrent = step.id === currentStep;
    
                        const stepStyle = isCompleted
                            ? "bg-green-600 text-white"
                            : isCurrent
                                ? "bg-orange-500 text-white"
                                : "bg-gray-300 text-gray-700";
    
                        const connectorStyle = isCompleted
                            ? "border-green-600"
                            : "border-gray-300";
    
                        return (
                            <div
                                key={step.id}
                                className="flex flex-col items-center justify-center relative w-[200px]"
                            >
                                {/* Step Circle */}
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${stepStyle}`}
                                >
                                    {isCompleted ? "✓" : "⦿"}
                                </div>
    
                                {/* Title below each circle */}
                                <div className="text-sm font-base text-center mt-2">{step.name}</div>
    
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`absolute top-[20%] left-[110%] w-[210px] h-1 border-t-2 border-dashed ${connectorStyle}`}
                                        style={{
                                            transform: "translateX(-50%)",
                                        }}
                                    ></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
    

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    useEffect(() => {
        if (currentStep === 2) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (currentStep === 3) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [currentStep]);


    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <main className="flex flex-col justify-center rounded-xl max-w-full w-[1296px]">

                    {currentStep === 1 && (
                        <>
                            <TimelineForSections currentStep={1} />
                            <PersonalInfoPage />
                            <div className="flex gap-5 pl-20 mt-6 text-base justify-end font-medium max-md:flex-wrap max-md:pl-5">
                                <button
                                    onClick={handleNextStep}

                                    className="justify-center px-24 py-2.5 mb-16 text-white bg-orange-500 rounded-lg focus:outline-0">Next</button>
                            </div>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <TimelineForSections currentStep={2} />
                            <BusinessInfoPage />
                            <div className="flex gap-5 pl-20 mt-6 text-base justify-end font-medium max-md:flex-wrap max-md:pl-5">

                                <button
                                    onClick={handleNextStep}

                                    className="justify-center px-24 py-2.5 text-white bg-orange-500 rounded-lg focus:outline-0">Next</button>
                            </div>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <TimelineForSections currentStep={3} />
                            <ProductDetailsPage />
                        </>
                    )}
                </main>
            </div>
        </>
    );
}

export default RegisterPages