import React, { useState } from 'react'
import { GoQuestion } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoc.png'; // Assuming you have a logo image

const Navbar = () => {
    const [isActive, setIsActive] = useState('Home');
    const handleClick = (name) => {
        setIsActive(name);
    };

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav>
            <div className='w-full fixed z-50 h-16 backdrop-blur-3xl shadow shadow-black bg-black/50 
             text-white flex items-center justify-between px-4'>
                <div className='flex items-center space-x-2 cursor-pointer'>
                    <img src={logo} alt="Logo" className='w-17 h-10 rounded-full cursor-pointer' onClick={() => handleNavigation('/')} />
                    <p className='text-2xl font-semibold'>Shika<span className='text-[#0E7BF8]'>Ride</span> </p>
                </div>
                <div className='md:flex rounded-lg p-1.5 border border-gray-300 hidden space-x-4'>
                    <button
                        className={`px-3  py-2 font-semibold hover:text-[#0E7BF8] cursor-pointer  ${isActive === 'Home' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Home');
                            handleNavigation('/');
                        }}
                    >
                        Home
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer hover:text-[#0E7BF8] ${isActive === 'Service' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Service');
                            handleNavigation('/service');
                        }}

                    >
                        Service
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer hover:text-[#0E7BF8]  ${isActive === 'Locations' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Locations');
                            handleNavigation('/locations');
                        }}
                    >
                        Locations
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer  hover:text-[#0E7BF8] 
                             ${isActive === 'About' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('About');
                            handleNavigation('/about');
                        }}
                    >
                        About Us
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer  hover:text-[#0E7BF8]  ${isActive === 'Contact' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Contact');
                            handleNavigation('/contact');
                        }}
                    >
                        Contact Us
                    </button>

                </div>
                <div className='flex items-center space-x-4'>
                    <GoQuestion className='w-6 h-6 cursor-pointer' />
                    <IoIosHeartEmpty className='w-6 h-6 cursor-pointer' />
                    <FiUser className='w-6 h-6 md:hidden block cursor-pointer' />
                    <button onClick={() => handleNavigation('/login')}
                        className='px-5 py-2 md:flex hidden cursor-pointer gap-2 items-center
                     bg-[#0E7BF8] text-white rounded hover:bg-blue-600'>
                        <FiUser />
                        Sign In
                    </button>
                </div>
            </div>


        </nav>
    )
}

export default Navbar