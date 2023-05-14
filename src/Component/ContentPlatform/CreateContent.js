import React from 'react';
import contentMobile from '../../Asset/content/content-mobile.png'
import subContent from '../../Asset/content/sub-content.png'
import contentIcon from '../../Asset/icon/Vector.png'
import './CreateContent.css';

const CreateContent = () => {
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
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>Tokenised Crowdfunding</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Create content.
                                Make money for everybody.</h2>
                        </div>

                        {/* For Desktop IMG*/}
                        <div>
                            <div className="flex items-center w-full justify-center sm:mt-0 lg:mt-0">
                                <img src={contentMobile} alt="" className="object-contain h-72 sm:h-full lg:h-full xl:h-full 2xl:h-full w-full sm:w-80 md:w-96 lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col mt-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left p-3">
                        {/* for Destok Content*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <h6 className="font-bold leading-none">
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>Tokenised Crowdfunding</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Create content.
                                Make money for everybody.</h2>
                        </div>
                        <p className="mt-3 mb-4 text-lg sm:mb-7">With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.
                        </p>
                        <div className="flex justify-center space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-40 lg:justify-start">
                            <button class="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 rounded-full py-3 text-xs font-semibold">JOIN THE CONVERSATION <img src={contentIcon} className='w-4 h-4 inline ml-2' alt="" /></button>
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
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>Talent content platform</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Build your custom subscription platform</h2>
                        </div>

                        {/* For Desktop IMG*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <div className="flex items-center w-full justify-center sm:mt-0 lg:mt-0">
                                <img src={subContent} alt="" className="object-contain h-72 sm:h-full lg:h-full xl:h-full 2xl:h-full w-full sm:w-80 md:w-96 lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                        {/* For Mobile IMG*/}
                        <div className='hidden small-feature-img'>
                            <div className="flex items-center justify-center mt-8 sm:mt-0 lg:mt-0 max-w-full">
                                <img src={subContent} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full sm:w-full lg:w-full xl:w-full 2xl:w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        {/* for Destok Content*/}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <h6 className="font-bold leading-none">
                                <span className='uppercase text-xs lg:text-lg xl:text-xl 2xl:text-2xl'>Talent content platform</span>
                            </h6>
                            <h2 className='text-3xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-7xl'>Build your custom subscription platform</h2>
                        </div>
                        <p className="mt-3 mb-4 text-lg sm:mb-7">Build your custom subscription platform
                            Create your own content and subscription engine and have direct control of audience revenues. Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs
                        </p>
                        <div className="flex justify-center space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-40 lg:justify-start">
                            <button class="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 rounded-full py-3 text-xs font-semibold">JOIN THE CONVERSATION <img src={contentIcon} className='w-4 h-4 inline ml-2' alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateContent;