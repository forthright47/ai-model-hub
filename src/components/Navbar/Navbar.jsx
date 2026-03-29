import React from 'react';
import navLogo from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='navbar p-3 max-w-11/12 mx-auto'>
            <div className='navbar-start'>
                <div className='flex items-center gap-2 font-bold text-xl md:text-2xl'>
                    <img className='w-15' src={navLogo} alt="" />
                    AI Hub
                </div>
            </div>
            <div className='navbar-center hidden md:flex'>
                <ul className='menu menu-horizontal gap-10 px-1 text-lg'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className='navbar-end items-center'>
                <div className='flex items-center gap-3'>
                    <div className='btn btn-ghost text-red-500 rounded-full text-xl'>
                        <FaShoppingCart />
                    </div>
                    <a className="btn bg-red-500 rounded-full text-white text-lg font-medium py-6 px-5">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;