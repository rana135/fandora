import React from 'react';
import Slider from 'react-slick';
import games from '../../Asset/features/games.png'
import headphone from '../../Asset/features/headphone.png'
import instagram from '../../Asset/features/instagram.png'
import art from '../../Asset/features/art.png'
import joystick from '../../Asset/features/joystick.png'
import AnotherFuturePreNft from './AnotherFuturePreNft';
import HomeGrounFeature from './HomeGrounFeature';

const FuturePreNft = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div class="flex justify-center flex-col bg-[#E5E5E5] min-h-screen rounded-tl-3xl rounded-tr-3xl p-1">
                <div class="bg-[#EFEDF5] p-5 rounded-xl">
                    {/* headers content */}
                    <div class="flex flex-col justify-center items-center text-center">
                        <div class="font-sans">
                            <h1 className='text-black'>Welcome to the Future</h1>
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-[#604DBC] to-[#15E8BA] leading-none text-2xl'>Pre NFT Rights</h2>
                        </div>
                        <div class="font-light max-w-xl mt-5 text-sm text-[#1B1B1D]">
                            Imagine a real life auction, but everything is an NFT.
                            Fandora is the first platform that enables creators to auction or sell their NFT rights to their audience. These pre NFT rights enable your audience to build content around you, pay you, and also share royalties. With Fandora, creators can do all this easily - without all the tech-speak.
                        </div>
                        <h6 className='text-[#438ABC] font-semibold mt-[30px]'>These are the different types of NFT rights you can sell</h6>
                    </div>

                    {/* Large Device Feature Card Start  */}
                    <div className='hidden sm:block lg:block xl:block 2xl:block'>
                        <div class="lg:px-40 xl:px-40 2xl:px-40 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 gap-y-6 mt-4 w-full">
                            <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                <p class="flex justify-center items-center">
                                    <img className='w-full rounded-[20px]' src={games} alt="" />
                                </p>

                                <div className='mb-3'>
                                    <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                        Future Talent<br /> NFT
                                    </h2>

                                    <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                        Pre-buy rights to your social media content
                                    </p>
                                </div>
                            </div>
                            <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                <p class="flex justify-center items-center">
                                    <img className='w-full rounded-[20px]' src={headphone} alt="" />
                                </p>

                                <div className='mb-3'>
                                    <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                        Product<br /> Placement NFT
                                    </h2>

                                    <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                        Pre-buy rights to your product mentions
                                    </p>
                                </div>
                            </div>
                            <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                <p class="flex justify-center items-center">
                                    <img className='w-full rounded-[20px]' src={instagram} alt="" />
                                </p>

                                <div className='mb-3'>
                                    <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                        Online<br /> Interaction NFT
                                    </h2>

                                    <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                        Pre-buy rights to specific time periods for exclusive interactions
                                    </p>
                                </div>
                            </div>
                            <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                <p class="flex justify-center items-center">
                                    <img className='w-full rounded-[20px]' src={art} alt="" />
                                </p>

                                <div className='mb-3'>
                                    <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                        Digital Art<br /> NFT
                                    </h2>

                                    <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                        Pre-buy rights to create digital art featuring you
                                    </p>
                                </div>
                            </div>
                            <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                <p class="flex justify-center items-center">
                                    <img className='w-full rounded-[20px]' src={joystick} alt="" />
                                </p>

                                <div className='mb-3'>
                                    <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                        Gaming <br /> NFT
                                    </h2>

                                    <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                        Pre-buy rights to incorporate your digital avatar in a game or product
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Device Card Start */}
                    <div className='hidden mobile-slide'>
                        <div class="lg:px-40 xl:px-40 2xl:px-40 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 gap-y-20 mt-4 w-full">
                            <Slider {...settings}>
                                <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                    <p class="flex justify-center items-center">
                                        <img className='w-full rounded-[20px]' src={games} alt="" />
                                    </p>

                                    <div className='mb-3'>
                                        <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                            Future Talent<br /> NFT
                                        </h2>

                                        <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                            Pre-buy rights to your social media content
                                        </p>
                                    </div>
                                </div>
                                <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                    <p class="flex justify-center items-center">
                                        <img className='w-full rounded-[20px]' src={headphone} alt="" />
                                    </p>

                                    <div className='mb-3'>
                                        <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                            Product<br /> Placement NFT
                                        </h2>

                                        <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                            Pre-buy rights to your product mentions
                                        </p>
                                    </div>
                                </div>
                                <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                    <p class="flex justify-center items-center">
                                        <img className='w-full rounded-[20px]' src={instagram} alt="" />
                                    </p>

                                    <div className='mb-3'>
                                        <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                            Online<br /> Interaction NFT
                                        </h2>

                                        <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                            Pre-buy rights to specific time periods for exclusive interactions
                                        </p>
                                    </div>
                                </div>
                                <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                    <p class="flex justify-center items-center">
                                        <img className='w-full rounded-[20px]' src={art} alt="" />
                                    </p>

                                    <div className='mb-3'>
                                        <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                            Digital Art<br /> NFT
                                        </h2>

                                        <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                            Pre-buy rights to create digital art featuring you
                                        </p>
                                    </div>
                                </div>
                                <div class="p-3 bg-[#FFFFFF] rounded-[28px] h-full feature-card">
                                    <p class="flex justify-center items-center">
                                        <img className='w-full rounded-[20px]' src={joystick} alt="" />
                                    </p>

                                    <div className='mb-3'>
                                        <h2 class="font-semibold text-2xl xl:text-4xl 2xl:text-5xl text-center text-[#1B1B1D] mt-2">
                                            Gaming <br /> NFT
                                        </h2>

                                        <p class="mt-2 text-slate-400 text-center text-sm xl:text-2xl 2xl:text-2xl ;lg:text-2xl sm:text-md">
                                            Pre-buy rights to incorporate your digital avatar in a game or product
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-4 rounded-full py-3 text-sm">SEE ALL SUBSCRIPTION</button>
                    </div>
                </div>
            </div>

            {/* Another Feature */}
            <AnotherFuturePreNft></AnotherFuturePreNft>
            <HomeGrounFeature></HomeGrounFeature>
        </div>
    );
};

export default FuturePreNft;