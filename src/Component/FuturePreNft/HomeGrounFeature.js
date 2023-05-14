import React from 'react';

const HomeGrounFeature = () => {
    return (
        <div>
            <div class="flex items-center justify-center bg-primary
            bg-gradient-to-r from-[#5E4CB6] to-[#8EC0D7]">
                <div class="mx-auto max-w-[43rem] home-grown-margin">
                    <div class="text-center">
                        <p class="text-md lg:text-lg xl:text-2xl 2xl:text-3xl leading-none">HOMEGROWN MARKETPLACE</p>
                        <h1 class="mt-3 text-[1.2rem] font-bold tracking-tight lg:text-2xl xl:text-3xl 2xl:text-4xl sm:text-xl">Explore an NFT Marketplace unlike any other</h1>
                        <p class="mt-3 text-md leading-relaxed">Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs</p>
                    </div>

                    <div class="mt-6 mb-8 flex items-center justify-center gap-4">
                        <button class="bg-[#606060] text-white font-semibold px-6 rounded-full py-4 text-xs">COMING SOON</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeGrounFeature;