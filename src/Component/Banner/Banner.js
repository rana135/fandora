import React from 'react';
import './Banner.css';
import { RxDotFilled } from 'react-icons/rx'

const Banner = () => {
    return (
        <div>
            <div className="banner lg:mt-5 sm:h-[424px] md:h-[524px] lg:h-[424px] xl:h-[816px] 2xl:h-[816px]">
                <div className='container'>
                    {/* For Desktop */}
                    <h1 className='title uppercase title'>Calling <br /> Creators <br /> of the Future</h1>
                    <span className='text-primary !mt-96 hero-details'>The World’s First Pre-NFT Rights<br />and Content Marketplace</span>
                    <br />
                    <button className="hero-details mt-2 btn btn-xs btn-outline rounded-full btn-primary uppercase"><RxDotFilled size={20} />Now live</button>
                </div>
            </div>
            <div className='text-center bg-[#07060E] hidden nftRight mt-10'>
                <span className='text-primary'>The World’s First Pre-NFT Rights<br />and Content Marketplace</span>
                <br />
                <button className="mt-2 btn btn-sm btn-outline rounded-full btn-primary uppercase"><RxDotFilled size={25} />Now live</button>
            </div>
        </div>
    );
};

export default Banner;