import React from 'react';
import nftContent from '../../Asset/ntf-content.png'
import './NftContent.css'

const NftContent = () => {
    return (
        <div className='p-4 lg:p-16 xl:p-24 2xl:p-36'>
            <div>
                <div className="hero min-h-full bg-primary rounded-3xl
            bg-gradient-to-r from-[#15E8BA] to-[#604DBC]">
                    <div className="hero-content flex-col xl:flex-row-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row-reverse">
                        <img src={nftContent} className="nftIMg max-w-sm max-h-full rounded-lg mr-7 lg:mt-[-70px] lg:mb-[-70px] 2xl:mt-[-150px] 2xl:mb-[-150px]" alt="/" />
                        <div className='nftCenter'>
                            <div className='ml-7'>
                                <h1 className="nft-title text-4xl xl:text-4xl 2xl:text-5xl font-bold text-black ">Pre-NFT Content and Rights Marketplace </h1>
                                <p className="py-4 text-black font-md text-xl xl:text-3xl 2xl:text-3xl">A first of its kind platform that  discovers and supports global talent across multiple domains, now live! </p>
                                <button type="button" class=" text-white bg-[#1E1E2D] font-bold rounded-full text-sm px-5 py-3.5 text-center mr-2 mb-1 ">CHECK IT OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftContent;