import React, { useState, useEffect } from 'react';

const BusinessInfoPage = () => {

    const [organizationType, setOrganizationType] = useState("");
    const [otherType, setOtherType] = useState("");


    const handleOrganizationChange = (e) => {
        setOrganizationType(e.target.value);
        if (e.target.value !== "other") {
            setOtherType(""); // Clear the otherType input if not selecting "Other"
        }
    };
    return (
        <>
            <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Business Information</h2>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Name of The Organization (Full) <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Registered Office Address <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            City <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            State <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Pincode <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Landline Number <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Fax No. (with STD code) <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Email <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Contact Person Name  <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                        Contact Person Mobile no. <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="gap-5 mt-5">
            <div className="flex flex-col max-md:max-w-full">
                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                    Organization Type <span className="text-red-700">*</span>
                </div>
                <select
                    name="organizationType"
                    id="organizationType"
                    value={organizationType}
                    onChange={handleOrganizationChange}
                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                >
                    <option value="" disabled>Select organization type</option>
                    <option value="individual">Individual</option>
                    <option value="partnership">Registered Partnership Firm</option>
                    <option value="private">Private Ltd, Co.</option>
                    <option value="huf">HUF</option>
                    <option value="public">Public Ltd Co</option>
                    <option value="institution">Institution</option>
                    <option value="psu">PSU</option>
                    <option value="other">Other</option>
                </select>
                {organizationType === "other" && (
                    <input
                        type="text"
                        name="otherType"
                        id="otherType"
                        value={otherType}
                        onChange={(e) => setOtherType(e.target.value)}
                        placeholder="Please specify"
                        className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-3 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                    />
                )}
            </div>
        </div>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Date of Incorporation/Registration <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="dob"
                            placeholder="DD-MM-YYYY"
                            pattern="\d{2}-\d{2}-\d{4}"
                            maxLength="10"
                            onInput={(e) => {
                                const value = e.target.value
                                    .replace(/[^0-9]/g, "") // Allow only numbers
                                    .replace(/(\d{2})(\d{2})(\d{0,4})/, "$1-$2-$3"); // Format to DD-MM-YYYY
                                e.target.value = value;
                            }}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            GST No. <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            PAN No. <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>


                <h2 className="text-2xl mt-8 font-medium text-left text-zinc-800 max-md:max-w-full">Bank Details</h2>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Bank Name <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Account No. <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="number"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Branch Name <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Bank Address <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Account Operation Since <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessInfoPage
