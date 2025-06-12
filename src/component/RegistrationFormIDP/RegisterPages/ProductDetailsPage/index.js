import React, { useCallback, useState } from 'react';
import * as Images from '../../../../assets';

const ProductDetailsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [image, setImage] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState();

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAcceptAll = () => {
        setIsCheckboxChecked(true);
        closeModal();
    };

    const handleDeclineAll = () => {
        setIsCheckboxChecked(false);
        closeModal();
    };

    const handleCheckboxClick = () => {
        if (!isCheckboxChecked) {
            setIsModalOpen(true); // Open modal if the checkbox is unchecked
        } else {
            setIsCheckboxChecked(false); // Uncheck if already checked
        }
    };

    const handleSubmit = () => {
        if (isCheckboxChecked) {
            // Perform form submission logic
            alert("Form Submitted!");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };


    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        handleFile(file);
        const fileName = file;
        setSelectedFileName(fileName?.name)
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);

        setSelectedFile(file)

    };

    const handleEditClick = () => {
        // Programmatically click the hidden file input to allow re-upload
        document.getElementById('file-input').click();
    };
    
    const ProfileImage = useCallback(() => {
        return (
            <>
                <div className="flex gap-5">
                    {/* Container */}
                    <div
                        className="flex gap-10 items-center justify-center mt-1 rounded-lg border border-dashed border-orange-500 bg-white max-lg:gap-5 max-md:flex-col max-md:px-5"
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        style={{ width: '50%' }}
                    >
                        {/* Left Section: Drag-and-Drop or Upload */}
                        <div className="flex flex-col items-center justify-center p-4 max-md:w-full">
                            <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full">
                                <i className="fa fa-cloud-upload text-orange-500 text-2xl"></i>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/3 p-4 max-md:w-full">
                            <p className="text-orange-600 text-sm font-medium mt-2">Click to upload</p>
                            <p className="text-gray-500 text-xs mt-2">PNG,JPG or JPEG</p>
                        </div>
    
                        {/* Middle Section: Upload Button */}
                        <button
                            className="bg-orange-500 text-white font-medium py-9 px-10 rounded-lg transition duration-200 max-md:w-full"
                            onClick={() => document.getElementById('file-input').click()}
                        >
                            Upload Payment Receipt
                        </button>
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={handleFileSelect}
                            id="file-input"
                            className="hidden"
                        />
                    </div>
    
                    {/* Right Section: Image Preview */}
                    {image && (
                        <div className="relative">
                            <img
                                src={image}
                                alt="Uploaded"
                                className="w-[200px] h-[100px] mt-8 object-contain rounded-md"
                            />
                            {/* Edit Icon */}
                            <div
                                className="absolute top-5 right-4 flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full cursor-pointer"
                                onClick={handleEditClick}
                            >
                                <i className="fa fa-pencil-square-o text-orange-500 text-lg"></i>
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }, [image]);
    
    
    

    // const ProfileImage = useCallback(() => {
    //     return (
    //         <div
    //         className="flex gap-10 items-center justify-center px-10 py-5 mt-5 rounded-lg border border-dashed border-orange-500 bg-white max-md:flex-col max-md:px-5"
    //         onDrop={handleDrop}
    //         onDragOver={(e) => e.preventDefault()}
    //         style={{ width: '50%' }} // Optional if the parent allows flexibility
    //     >
    //             {/* Image Preview Area */}
    //             <div className="flex flex-col items-center justify-center w-1/2 max-md:w-full">
    //                 {image ? (
    //                     <div className="w-full flex justify-center">
    //                         <img
    //                             loading="lazy"
    //                             src={image}
    //                             alt="Uploaded"
    //                             className="w-54 h-36 rounded border border-solid border-gray-300 object-cover"
    //                         />
    //                     </div>
    //                 ) : (
    //                     <div className="flex flex-col items-center w-full">
    //                         <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full">
    //                             <i className="fa fa-image text-orange-500 text-2xl"></i>
    //                         </div>
    //                         <p className="text-sm text-orange-600 mt-2">No Image Selected</p>
    //                     </div>
    //                 )}
    //             </div>
    
    //             {/* Upload Section */}
    //             <div className="flex flex-col items-start w-1/2 max-md:w-full max-md:mt-5">
    //                 <label
    //                     htmlFor="file-input"
    //                     className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-orange-500 rounded-md bg-orange-100 w-full p-4"
    //                 >
    //                     <i className="fa fa-upload text-orange-500 text-3xl mb-2"></i>
    //                     <span className="text-sm text-orange-600 font-medium">
    //                         Click to Upload
    //                     </span>
    //                     <p className="text-xs text-gray-500">PNG, JPG or JPEG</p>
    //                 </label>
    //                 <input
    //                     type="file"
    //                     accept="image/*,application/pdf"
    //                     onChange={handleFileSelect}
    //                     className="hidden"
    //                     id="file-input"
    //                 />
    //                 {image && (
    //                     <button
    //                         className="mt-3 text-sm text-orange-500 underline"
    //                         onClick={() => setImage(null)}
    //                     >
    //                         Remove Image
    //                     </button>
    //                 )}
    //             </div>
    //         </div>
    //     );
    // }, [image]);
    
    
    


    // const ProfileImage = useCallback(() => {

    //     return (
    //         <div
    //             className="flex p-2 mt-5 w-full rounded-lg border border-orange-500 border-dashed terms_bg_clr max-md:px-5 max-md:max-w-full"
    //             onDrop={handleDrop}
    //             onDragOver={(e) => e.preventDefault()}
    //         >
    //             <label htmlFor="file-input" className="cursor-pointer">
    //                 {image ? (
    //                     <div className="text-center mx-auto">
    //                         <img
    //                             loading="lazy"
    //                             src={image}
    //                             alt="Profile"
    //                             className="self-center w-28 border-white border-solid aspect-square border-[6px] mx-auto"
    //                         />
    //                         <input
    //                             type="file"
    //                             accept="image/*"
    //                             onChange={handleFileSelect}
    //                             className="hidden"
    //                             id="file-input"
    //                         />
    //                     </div>
    //                 ) : (
    //                     <div className="text-center  mx-auto">
    //                         <img
    //                             loading="lazy"
    //                             srcSet={Images.placeholder_settings_profile}
    //                             alt="Profile"
    //                             className=" w-24 mx-auto"
    //                         />

    //                         <input
    //                             type="file"
    //                             accept="image/*"
    //                             onChange={handleFileSelect}
    //                             className="hidden"
    //                             id="file-input"
    //                         />
    //                     </div>
    //                 )}
    //                 <div className="w-full text-end">
    //                     <i className="fa fa-edit text-orange-500"></i>
    //                 </div>
    //                 {!image &&
    //                     <>
    //                         <div className="mt-1 text-xs text-center text-neutral-400 max-md:max-w-full">
    //                             SVG, PNG, JPG or GIF (max. 800x400px)
    //                         </div>
    //                     </>
    //                 }
    //             </label>
    //         </div>
    //     );

    // }, [image]);

    return (
        <>
            <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Product Details</h2>

                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Product <span className="text-red-700">*</span>
                        </div>
                        <select
                            name="productType"
                            id="productType"
                            value={selectedProduct}
                            onChange={handleProductChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        >
                            <option value="" disabled>Select Product</option>
                            <option value="mmb">MMB</option>
                            <option value="idp">IDP</option>
                            <option value="startup">Start Up</option>
                        </select>
                    </div>
                </div>
                {selectedProduct === 'mmb' && (
                    <>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Product Type <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="MMB Personal"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Duration <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="1 Year"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Deliveries <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="12 Workshops"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />

                            </div>
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Month Durations <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="8 hrs / month"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Personal Meeting <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="1 time/month"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />

                            </div>
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Meeting Duration <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="2 hrs"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </>
                )}
                {selectedProduct === 'idp' && (
                    <>
                          <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Product Type <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="idp"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Duration <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="1 Year"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Deliveries <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="12 Workshops"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />

                            </div>
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Durations <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="8 hrs / month"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Personal Meeting <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="1 time/month"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />

                            </div>
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                    Duration <span className="text-red-700">*</span>
                                </div>
                                <input
                                    type="text"
                                    value="2 hrs"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </>
                )}
            </section>
            <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Material Provided</h2>
                {selectedProduct === 'mmb' && (
                    <>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <input
                                    type="text"
                                    value="Headway Business Bag, Note Book, Note Pad, Pen, Boucher, Frist Module Material, 12 month program schedule, Every Month One Business Material"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />

                            </div>
                        </div>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start max-md:max-w-full">
                                    <h5 className='text-2xl font-medium text-left text-zinc-800'>Expectations from This Program</h5>
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
                    </>
                )}
                {selectedProduct === 'idp' && (
                    <>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <input
                                    type="text"
                                    value="Headway Business Bag, Note Book, Note Pad, Pen, Boucher, Frist Module Material, 12 month program schedule, Every Month One Business Material"
                                    readOnly
                                    className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                                />

                            </div>
                        </div>
                        <div className="gap-5 mt-5">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                                <h5 className='text-2xl font-medium text-left text-zinc-800'>Expectations from This Program</h5>
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
                    </>
                )}
            </section>

            <section className="flex flex-col justify-center p-5 mt-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <h2 className="text-2xl font-medium text-left text-zinc-800 max-md:max-w-full">Payment</h2>
                <div className="gap-5 mt-5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            Account Name <span className="text-red-700">*</span>
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
                </div>
                <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap grid lg:grid-cols-2 grid-cols-1">

                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                            IFSC Code <span className="text-red-700">*</span>
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
                            GST <span className="text-red-700">*</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // value={userFormData?.email || ''}
                            //  onChange={handleFormChange}
                            className="text-start focus:border-gray-200 focus:ring-0 focus:outline-0 h-12 px-3.5 py-3 mt-1.5 text-base rounded-lg border border-gray-200 border-solid text-zinc-800 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="gap-5 mt-5">
                <div className="text-start text-sm text-neutral-400 max-md:max-w-full">
                Upload Payment Receipt <span className="text-red-700">*</span>
                </div>
                        <ProfileImage />
                </div>
                <div className="gap-5 mt-5">
            
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={isCheckboxChecked}
                            onChange={handleCheckboxClick}
                            className="mt-1.5 h-4 w-4 border border-gray-300 rounded-sm focus:ring-0 focus:outline-none"
                        />
                        <label htmlFor="terms" className="ml-2 mt-1 text-base text-orange-600">
                            <span
                                className="text-Orange-600 mt-1 hover:underline ml-1 cursor-pointer"
                                onClick={openModal}
                            >
                                Terms and Conditions
                            </span>
                        </label>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[58vh] p-6 overflow-y-auto">
                            <h2 className="text-lg font-base mb-4 underline">Terms and Conditions</h2>
                            <div className="text-sm text-gray-700 [&>p]:mt-4">
                                <p>1. Registration amount should be paid prior to the start of the enrolled program.</p>
                                <p>2. Under no circumstances or ground, the fees amount paid to Headway Business Solutions LLP cannot be refunded or adjusted to the client or to any other client.</p>
                                <p>3. Clients will be allowed lifetime membership with nominal charges.</p>
                                <p>4. Clients are expected to arrive 30 minutes before the actual time of beginning of the program on the scheduled day and date. Late comers shall be fined Rs. 500/- for each default.</p>
                                <p>5. Attendance in all the workshops of the module is mandatory for successful completion and eligibility for the graduate certificates.</p>
                                <p>6. The said participant's enrollment cannot be replaced or exchanged for any other unregistered person. Consequently, failure to attend a program will not relieve them from the program fee obligation and any default in realizing the payment.</p>
                                <p>7. Under unforeseen circumstances, any change in the dates/venue of the program communicated earlier on account of acts of God, war, corona, fire, riot, terrorism, earthquake, actions of state or local governmental authorities, natural calamity/technical difficulties/medical grounds/social-political situations, or accommodation for residential programs will not relieve the client from managing his/her travel for attending the program.</p>
                                <p>8. The client cannot hold Headway Business Solutions LLP or any of its employees liable/responsible for any action/deed pertaining to the wellbeing or interest of the client.</p>
                                <p>9. Headway Business Solutions LLP reserves the right to allow or disallow certain clients from attending the module in case the client is creating a nuisance in the module, disparaging the goodwill of Headway Business Solutions LLP, or on any other reasonable grounds.</p>
                                <p>10. The client understands that he/she has to perform, participate in, and implement all the activities and tasks allotted to him/her in the training.</p>
                                <p>11. Review meetings will be conducted by trained people other than CMD- Headway Business Solutions LLP, Mr. Paresh Rajpara.</p>
                                <p>12. Clients shall not waste or spoil the goods provided to them during the said period nor share, copy, lend, advance, or part with the knowledge provided to them through the training and/or products to any person or persons without prior consent.</p>
                                <p>13. Clients acknowledge that their participation in Headway Business Solutions LLP is entirely voluntary and they undertake to abide by the rules and regulations of the module as amended from time to time.</p>
                                <p>14. Defamation, including libel and slander, is strictly prohibited.</p>
                                <p>15. The client understands that any use of language during the training program is intended to encourage them in their endeavors and not directed at them personally, and they shall not take offense or seek damages in relation to the same.</p>
                                <p>16. Both parties undertake not to post, send, or otherwise transmit through social, print, and internet media any unlawful, infringing, harmful, harassing, defamatory, threatening, vulgar, sexually explicit, hateful, or otherwise objectionable material of any kind in relation to each other.</p>
                                <p>17. Clients undertake to indemnify and pay damages to Headway Business Solutions LLP for all losses or damages to the person or property of Headway Business Solutions LLP and/or its agents arising out of any act or omission on the part of the client.</p>
                                <p>18. The parties hereto shall be governed by intellectual property rights, confidentiality, cyber, and other applicable laws in India.</p>
                                <p>19. Consumption of alcohol is strictly prohibited during the training duration of each training day.</p>
                                <p>20. Procuring and managing resources required to implement the learning is the responsibility of the participant.</p>
                                <p>21. The client shall not solicit, induce, hire, or poach any of Headway Business Solutions LLP employees, agents, customers, and business relations during the subsistence of the year course and two years thereafter.</p>
                                <p>22. These Terms and Conditions are subject to amendment without prior notice.</p>
                                <div className="mt-4">
                                    <div className="flex justify-center">
                                        <button
                                            onClick={handleAcceptAll}
                                            className="w-full px-6 py-2 bg-orange-600 text-white rounded"
                                        >
                                            Accept All
                                        </button>
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <button
                                            onClick={handleDeclineAll}
                                            className="w-full px-6 py-2 bg-white text-orange-600 border-2 border-orange-600 rounded"
                                        >
                                            Decline All
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}


                <div className="flex gap-5 pl-20 mt-6 text-base justify-end font-medium max-md:flex-wrap max-md:pl-5">
                    <button
                        onClick={handleSubmit}
                        disabled={!isCheckboxChecked}
                        className={`justify-center px-24 py-2.5 rounded-lg focus:outline-0 ${isCheckboxChecked
                            ? "bg-orange-500 text-white cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Submit
                    </button>
                </div>
            </section>

        </>
    )
}

export default ProductDetailsPage            