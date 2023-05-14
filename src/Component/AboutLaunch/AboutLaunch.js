import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const AboutLaunch = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mt-8'>
                <div class="">
                    <h1 class="max-w-lg text-lg font-semibold tracking-tight text-primary xl:text-[23px]">Know about the launch before everyone else</h1>

                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input type="text" placeholder="Enter Email Here" className="input input-bordered rounded-full border-primary border-2 input-accent w-full max-w-xs h-10" />

                        <div className='flex'>
                            <button type="button" class="md:mx-4 text-white mx-15 bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-bold rounded-full text-sm px-11 font-Outfit py-2.5 text-center mr-2 mb-2 ">SIGNUP</button>
                            <div class="md:ml-10 hidden sm:block md:block lg-block xl-block 2xl-block border-l-2 border-primary ..."></div>

                            <div className='flex justify-center items-center'>
                                <button type="button" class="md:ml-5 sm:ml-5 text-white mx-15 bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-bold rounded-full text-sm px-2.5 font-Outfit py-2.5 text-center mr-2 mb-2 "><AiOutlineGoogle size={15} /></button>
                                <button type="button" class="text-white mx-15 bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-bold rounded-full text-sm px-2.5 font-Outfit py-2.5 text-center mr-2 mb-2 "><FaLinkedinIn size={15} /></button>
                                <button type="button" class="text-white mx-15 bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-bold rounded-full text-sm px-2.5 font-Outfit py-2.5 text-center mr-2 mb-2 "><FaFacebookF size={15} /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutLaunch;