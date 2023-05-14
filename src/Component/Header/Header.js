import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Asset/banner/FANDORA LOGO.svg'
import { BiMenuAltRight } from 'react-icons/bi'
import Banner from '../Banner/Banner';

const Header = () => {
    const menuItems = (
        <>
            <li id="sidebar" className="font-bold navLink">
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li id="sidebar" className="font-bold navLink">
                <NavLink to="/Key-Features">Key Features</NavLink>
            </li>
            <li id="sidebar" className="font-bold navLink">
                <NavLink to="/Pre-NFT-Rights">
                    Pre-NFT Rights
                </NavLink>
            </li>
            <li id="sidebar" className="font-bold navLink">
                <NavLink to="/Marketplace">
                    Marketplace
                </NavLink>
            </li>
            <li id="sidebar" className="font-bold navLink">
                <NavLink to="/Login">
                    Login
                </NavLink>
            </li>
            <li id="sidebar" className="navLink">
                <NavLink to="/Sign-Up">
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Sign Up</button>
                </NavLink>
            </li>
        </>
    );
    return (
        <div className='header-container'>
            <div className="flex justify-center items-center navContainer">
                <div className="navbar">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="" className="navLogo xl:ml-10"></img>
                        </Link>
                    </div>
                    <div>
                        <div className="dropdown dropdown-end flex !ml-auto">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <BiMenuAltRight className='text-primary' size={30} />
                            </label>
                            <ul
                                tabIndex={0}
                                className=" dropdown-content mt-20 p-2 shadow bg-gradient-to-r from-[#15E8BA] to-[#604DBC] rounded-box w-52 "
                            >
                                <>
                                    <li id="sidebar" className="font-bold navLink my-3">
                                        <NavLink to="/" className="my-14">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li id="sidebar" className="font-bold navLink  my-3">
                                        <NavLink to="/Key-Features">Key Features</NavLink>
                                    </li>
                                    <li id="sidebar" className="font-bold navLink my-3">
                                        <NavLink to="/Pre-NFT-Rights">
                                            Pre-NFT Rights
                                        </NavLink>
                                    </li>
                                    <li id="sidebar" className="font-bold navLink my-3">
                                        <NavLink to="/Marketplace" className="">
                                            Marketplace
                                        </NavLink>
                                    </li>
                                    <li id="sidebar" className="font-bold navLink my-3">
                                        <NavLink to="/Login" className="">
                                            Login
                                        </NavLink>
                                    </li>
                                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign Up</button>
                                </>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end mx-auto hidden lg:flex">
                        <ul className=" items-center menu-horizontal px-1">{menuItems}</ul>
                    </div>
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;