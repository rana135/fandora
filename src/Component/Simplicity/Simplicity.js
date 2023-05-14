import React from 'react';
import { BiChevronRight } from 'react-icons/bi'
import './Simplicity.css'
import like from '../../Asset/simplicity/Like.svg';
import medal from '../../Asset/simplicity/Medal.svg';
import token from '../../Asset/simplicity/Token.svg';
import wallet from '../../Asset/simplicity/Wallet.svg';
import Slider from 'react-slick';

const Simplicity = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='mb-12'>
                <div className='flex justify-center items-center'>
                    <h2 className='uppercase flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-[#604DBC] to-[#15E8BA] font-bold'>Simplicity
                        <span className='inline-flex gap-0'>
                            <BiChevronRight className='text-primary' size={55} />
                            <BiChevronRight className='text-primary' size={55} />
                            <BiChevronRight className='text-primary' size={55} />
                        </span> Jargon
                    </h2>
                </div>
                <h6 className='text-center text-xl lg:leading-3 leading-6 pl-2 pr-2'>
                    We take care of everything so the artists can focus on what they do best. Create art.
                </h6>
            </div>


            {/* large Device Card Start */}
            <div className='hidden sm:block lg:block xl:block 2xl:block'>
                <div class="lg:px-40 xl:px-40 2xl:px-40 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 gap-y-20 mt-4 w-full">
                    <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                        <p class="flex justify-center items-center mt-[-65px]">
                            <img className='object-scale-down h-20 w-52' src={medal} alt="" />
                        </p>

                        <div className='mb-20'>
                            <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                Pre-NFT Rights
                            </h2>

                            <p class="mt-2 text-slate-400 text-center text-sm">
                                NFT rights enable your audience to build content around you and pay you as well as share royalties.
                            </p>
                        </div>
                        <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-primary capitalize fixed-button">Coming Soon</button>
                    </div>
                    <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                        <p class="flex justify-center items-center mt-[-65px]">
                            <img className='object-scale-down h-20 w-52' src={token} alt="" />
                        </p>

                        <div className='mb-20'>
                            <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                Talent Tokens
                            </h2>

                            <p class="mt-2 text-slate-400 text-center text-sm">
                                Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.
                            </p>
                        </div>
                        <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-[#8E79F3] capitalize fixed-button">Coming Soon</button>
                    </div>
                    <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                        <p class="flex justify-center items-center mt-[-65px]">
                            <img className='object-scale-down h-20 w-52' src={wallet} alt="" />
                        </p>

                        <div className='mb-20'>
                            <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                Tokenised Crowdfunding
                            </h2>

                            <p class="mt-2 text-slate-400 text-center text-sm">
                                Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.
                            </p>
                        </div>
                        <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-[#8E79F3] capitalize fixed-button">Coming Soon</button>
                    </div>
                    <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                        <p class="flex justify-center items-center mt-[-65px]">
                            <img className='object-scale-down h-20 w-52' src={like} alt="" />
                        </p>

                        <div className='mb-20'>
                            <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                Talent Content Platform
                            </h2>

                            <p class="mt-2 text-slate-400 text-center text-sm">
                                A platform that allows creators to create and have direct control of audience revenues.
                            </p>
                        </div>
                        <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-[#8E79F3] capitalize fixed-button">Coming Soon</button>
                    </div>
                    <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                        <div className='mb-20'>
                            <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                NFT Marketplace
                            </h2>

                            <p class="mt-2 text-slate-400 text-center text-sm">
                                Native NFT marketplace that
                                allows creators and pre-NFT
                                right holders to create and sell
                                licensed NFTs.
                            </p>
                        </div>
                        <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-primary capitalize fixed-button">Beta Launch Dec 13</button>
                    </div>
                </div>
            </div>

            {/* Small Device Card Start */}
            <div className='hidden mobile-slide'>
                <div class="lg:px-40 xl:px-40 2xl:px-40 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 gap-y-20 mt-4 w-full">
                    <Slider {...settings}>
                        <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                            <p class="flex justify-center items-center mt-[-65px]">
                                <img className='object-scale-down h-20 w-52' src={medal} alt="" />
                            </p>

                            <div className='mb-20'>
                                <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                    Pre-NFT Rights
                                </h2>

                                <p class="mt-2 text-slate-400 text-center text-sm">
                                    NFT rights enable your audience to build content around you and pay you as well as share royalties.
                                </p>
                            </div>
                            <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-primary capitalize fixed-button">Coming Soon</button>
                        </div>
                        <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                            <p class="flex justify-center items-center mt-[-65px]">
                                <img className='object-scale-down h-20 w-52' src={token} alt="" />
                            </p>

                            <div className='mb-20'>
                                <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                    Talent Tokens
                                </h2>

                                <p class="mt-2 text-slate-400 text-center text-sm">
                                    Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.
                                </p>
                            </div>
                            <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-[#8E79F3] capitalize fixed-button">Coming Soon</button>
                        </div>
                        <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                            <p class="flex justify-center items-center mt-[-65px]">
                                <img className='object-scale-down h-20 w-52' src={wallet} alt="" />
                            </p>

                            <div className='mb-20'>
                                <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                    Tokenised Crowdfunding
                                </h2>

                                <p class="mt-2 text-slate-400 text-center text-sm">
                                    Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.
                                </p>
                            </div>
                            <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-[#8E79F3] capitalize fixed-button">Coming Soon</button>
                        </div>
                        <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                            <p class="flex justify-center items-center mt-[-65px]">
                                <img className='object-scale-down h-20 w-52' src={like} alt="" />
                            </p>

                            <div className='mb-20'>
                                <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                    Talent Content Platform
                                </h2>

                                <p class="mt-2 text-slate-400 text-center text-sm">
                                    A platform that allows creators to create and have direct control of audience revenues.
                                </p>
                            </div>
                            <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-[#8E79F3] capitalize fixed-button">Coming Soon</button>
                        </div>
                        <div class="p-6 bg-[#222125] rounded-[40px] h-full feature-card">
                            <div className='mb-20'>
                                <h2 class="font-semibold text-2xl text-center text-white mt-2">
                                    NFT Marketplace
                                </h2>

                                <p class="mt-2 text-slate-400 text-center text-sm">
                                    Native NFT marketplace that
                                    allows creators and pre-NFT
                                    right holders to create and sell
                                    licensed NFTs.
                                </p>
                            </div>
                            <button className="btn btn-active bg-[#2E2D32] border-none btn-sm w-40 rounded-full text-xs text-primary capitalize fixed-button">Beta Launch Dec 13</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default Simplicity;