import React, { useState } from 'react'

const PersonalInfoPage = () => {
    const [selected, setSelected] = useState(null);

    const handleCheckboxChange = (value) => {
        setSelected((prev) => (prev === value ? null : value)); // Toggle if the same checkbox is clicked
    };

    return (
        <>
            <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Personal Information</h2>
                <div className="gap-5 mt-5 px-24">
                    <div className="flex justify-between items-center">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="direct"
                                value="direct"
                                checked={selected === "direct"} // Bind checked state
                                onChange={() => handleCheckboxChange("direct")} // Handle click
                                className="h-4 w-4 text-orange-500 focus:ring-0 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-zinc-800">Direct</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="reference"
                                value="reference"
                                checked={selected === "reference"}
                                onChange={() => handleCheckboxChange("reference")}
                                className="h-4 w-4 text-orange-500 focus:ring-0 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-zinc-800">Reference</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="other"
                                value="other"
                                checked={selected === "other"}
                                onChange={() => handleCheckboxChange("other")}
                                className="h-4 w-4 text-orange-500 focus:ring-0 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-zinc-800">Other</span>
                        </label>
                    </div>
                </div>

                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Full Name <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-10 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Gender (Male/Female) <span className="text-red-700">*</span>
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
                            Date of Birth <span className="text-red-700">*</span>
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
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Qualification <span className="text-red-700">*</span>
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
                            Occupation <span className="text-red-700">*</span>
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
                            Designation <span className="text-red-700">*</span>
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
                            Mobile Number <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="number"
                            name="number"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
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
                            Date Of Anniversary <span className="text-red-700">*</span>
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
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Nationality <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Address for Correspondence <span className="text-red-700">*</span>
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
                            Landline Number
                        </div>
                        <input
                            type="number"
                            name="name"
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
                            type="number"
                            name="name"
                            id="name"
                            // value={userFormData?.name || ''}
                            // onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />

                    </div>
                    {/* <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Mobile Number
                        </div>
                        <input
                            type="number"
                            name="name"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div> */}
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
                            Contact Person Mobile no.
                        </div>
                        <input
                            type="number"
                            name="name"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Contact Person Email  <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
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

export default PersonalInfoPage
