import React, { useState, useRef, useEffect } from 'react'
import { GoQuestion } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiUser, FiLogOut, FiEdit, FiMail, FiPhone } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoc.png'; // Assuming you have a logo image
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isActive, setIsActive] = useState('Home');
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const profileModalRef = useRef(null);

    const handleClick = (name) => {
        setIsActive(name);
    };

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        logout();
        setProfileModalOpen(false);
        toast.success('Logged out successfully');
        navigate('/');
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileModalRef.current && !profileModalRef.current.contains(event.target)) {
                setProfileModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                            scrollTo(0, 0);
                        }}
                    >
                        Home
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer hover:text-[#0E7BF8] ${isActive === 'Service' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Service');
                            handleNavigation('/service');
                            scrollTo(0, 0);
                        }}

                    >
                        Service
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer hover:text-[#0E7BF8]  ${isActive === 'Locations' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Locations');
                            handleNavigation('/locations');
                            scrollTo(0, 0);
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
                            scrollTo(0, 0);
                        }}
                    >
                        About Us
                    </button>
                    <button
                        className={`px-3 py-2 font-semibold cursor-pointer  hover:text-[#0E7BF8]  ${isActive === 'Contact' ? 'border-b border-[#0E7BF8] text-[#0E7BF8]' : ''}`}
                        onClick={() => {
                            handleClick('Contact');
                            handleNavigation('/contact');
                            scrollTo(0, 0);
                        }}
                    >
                        Contact Us
                    </button>

                </div>
                <div className='flex items-center space-x-4'>
                    <GoQuestion className='w-6 h-6 cursor-pointer' />
                    <IoIosHeartEmpty className='w-6 h-6 cursor-pointer' />
                    <FiUser className='w-6 h-6 md:hidden block cursor-pointer' />

                    {isAuthenticated ? (
                        <div className="relative" ref={profileModalRef}>
                            {/* Profile Icon for Authenticated Users */}
                            <button
                                onClick={() => setProfileModalOpen(!profileModalOpen)}
                                className="w-10 h-10 md:flex hidden items-center justify-center bg-[#0E7BF8] text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FiUser className="w-5 h-5" />
                            </button>

                            {/* Profile Modal */}
                            {profileModalOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
                                    <div className="p-6">
                                        {/* User Info Header */}
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-12 h-12 bg-[#0E7BF8] rounded-full flex items-center justify-center">
                                                <FiUser className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">{user?.userName}</h3>
                                                <p className="text-sm text-gray-500">Welcome back!</p>
                                            </div>
                                        </div>

                                        {/* User Details */}
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center space-x-3 text-gray-600">
                                                <FiMail className="w-4 h-4" />
                                                <span className="text-sm">{user?.email}</span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-gray-600">
                                                <FiPhone className="w-4 h-4" />
                                                <span className="text-sm">{user?.phoneNumber}</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="space-y-2">
                                            <button className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                                                <FiEdit className="w-4 h-4" />
                                                <span>Edit Profile</span>
                                            </button>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center space-x-3 px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                            >
                                                <FiLogOut className="w-4 h-4" />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Sign In Button for Non-Authenticated Users */
                        <button
                            onClick={() => {
                                handleNavigation('/login');
                                scrollTo(0, 0);
                            }}
                                className='px-5 py-2 md:flex hidden cursor-pointer gap-2 items-center bg-[#0E7BF8] text-white rounded hover:bg-blue-600 transition-colors duration-200'
                            >
                                <FiUser />
                                Sign In
                            </button>
                    )}
                </div>
            </div>



        </nav>
    )
}

export default Navbar