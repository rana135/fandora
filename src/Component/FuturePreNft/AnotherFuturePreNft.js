import React from 'react';
import phone from '../../Asset/features/Phone mockup.png';
import phoneSmall from '../../Asset/features/Phone mockup-mobile.png';
import tablet from '../../Asset/features/Tablet Mockup.png';
import './AnotherFuturePreNft.css'

const AnotherFuturePreNft = () => {
    return (
        <div>
            {/* First Feature */}
            <div className="bg-primary
            bg-gradient-to-r from-[#5E4CB6] to-[#8EC0D7]">
                <div className="flex flex-col justify-center mx-auto lg:flex-row lg:justify-center lg:gap-12 xl:gap-28 2xl:gap-36">
                    <div>
                        {/* For Mobile Content*/}
                        <div className='hidden small-feature-content'>
                            <h6 className="font-bold leading-none">
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>NFT rights Marketplace</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Are you a Creator?</h2>
                        </div>

                        {/* For Desktop IMG*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <div className="flex items-center w-full justify-center sm:mt-0 lg:mt-0">
                                <img src={phone} alt="" className="object-contain h-72 sm:h-full lg:h-full xl:h-full 2xl:h-full w-full sm:w-80 md:w-96 lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                        {/* For Mobile IMG*/}
                        <div className='hidden small-feature-img'>
                            <div className="flex items-center justify-center mt-8 sm:mt-0 lg:mt-0 max-w-full">
                                <img src={phoneSmall} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full sm:w-full lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        {/* for Destok Content*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <h6 className="font-bold leading-none">
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>NFT rights Marketplace</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Are you a Creator?</h2>
                        </div>
                        <p className="mt-3 mb-4 text-lg sm:mb-7">Now sell Pre NFT rights and monetise your existing content for Web3 applications
                        </p>
                        <div className="flex justify-center space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-40 lg:justify-start">
                            <button class="bg-[#52C1B9] text-white px-4 rounded-full py-3 text-xs font-semibold">CHECK IT OUT!</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Feature */}
            <div className="bg-primary lg:pl-12
            bg-gradient-to-r from-[#5E4CB6] to-[#8EC0D7]">
                <div className="flex flex-col justify-center items-center mx-auto  lg:justify-center lg:flex-row-reverse xl:gap-28 2xl:gap-36 ">
                    <div>
                        {/* For Mobile Content*/}
                        <div className='hidden small-feature-content'>
                            <h6 className="font-bold leading-none">
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>NFT rights Marketplace</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Are you a WEB3 Pro?</h2>
                        </div>

                        {/* For Desktop IMG*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <div className="flex items-center w-full justify-center sm:mt-0 lg:mt-0">
                                <img src={tablet} alt="" className="object-contain h-72 sm:h-full lg:h-full xl:h-full 2xl:h-full w-full sm:w-80 md:w-96 lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                        {/* For Mobile IMG*/}
                        <div className='hidden small-feature-img'>
                            <div className="flex items-center justify-center mt-8 sm:mt-0 lg:mt-0 max-w-full">
                                <img src={tablet} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full sm:w-full lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        {/* for Destok Content*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <h6 className="font-bold leading-none">
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>NFT rights Marketplace</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Are you a WEB3 Pro?</h2>
                        </div>
                        <p className="mt-3 mb-4 text-lg sm:mb-7">Access best content for building stronger Web3 assets and package them with our advanced NFT Utilities
                        </p>
                        <div className="flex justify-center space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-40 lg:justify-start">
                            <button class="bg-[#52C1B9] text-white px-4 rounded-full py-3 text-xs font-semibold">CHECK IT OUT!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherFuturePreNft;