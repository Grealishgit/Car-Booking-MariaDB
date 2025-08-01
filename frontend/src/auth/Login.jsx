import React, { useState } from 'react'
import bg from '../assets/bg.png'
import { FaEnvelope, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { authAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
    const [isInput, setIsInput] = useState('email');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Prepare the request payload based on login type
            const payload = {
                password: formData.password
            };

            if (isInput === 'email') {
                payload.email = formData.email;
            } else {
                payload.phoneNumber = formData.phone;
            }

            // Make API call to login endpoint
            const response = await authAPI.login(payload);

            // Handle successful login
            if (response.data.token) {
                // Use AuthContext login method
                login(response.data.user, response.data.token);

                toast.success('Login successful!');

                // Navigate to dashboard or home page
                navigate('/');
            }
        } catch (error) {
            // Handle login errors
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || 'Login failed');
            } else {
                toast.error('Network error. Please try again.');
            }
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex items-center justify-center bg-center bg-cover min-h-screen "
            style={{ backgroundImage: `url(${bg})` }}
        >
            {loading && (
                <div className='flex items-center absolute w-full z-40 backdrop-blur-sm inset-0 justify-center h-screen'>
                    <LoadingSpinner />
                </div>

            )}
            <div className="bg-black/60 backdrop-blur-3xl mt-20  p-8 rounded-md border border-blue-500 shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Welcome <span className='text-blue-500'>Back</span></h2>
                <p className="text-gray-200 mb-6 text-center">Choose your preferred login method</p>

                {/* Login Method Toggle */}
                <div className='flex gap-1 p-1 rounded-lg border border-gray-300 bg-gray-700 mb-6'>
                    <button
                        type="button"
                        onClick={() => setIsInput('email')}
                        className={`flex-1 px-4 py-2 cursor-pointer rounded-md text-sm font-medium transition-all 
                            duration-200 flex items-center justify-center gap-2 ${isInput === 'email'
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-300 hover:bg-gray-200 hover:text-black'
                            }`}
                    >
                        <FaEnvelope className="text-sm" />
                        Email
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsInput('phone')}
                        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium cursor-pointer
                            transition-all duration-200 flex items-center justify-center gap-2 ${isInput === 'phone'
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-200 hover:bg-gray-200 hover:text-black'
                            }`}
                    >
                        <FaPhone className="text-sm" />
                        Phone
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col max-w-xl'>
                    {/* Email Input */}
                    {isInput === 'email' && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                <FaEnvelope className="inline mr-2 text-blue-500" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                        </div>
                    )}

                    {/* Phone Input */}
                    {isInput === 'phone' && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                <FaPhone className="inline mr-2 text-blue-500" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number (e.g., +254700123456)"
                                className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                        </div>
                    )}

                    {/* Password Input */}
                    <div className="mb-3">
                        <div className='flex justify-between w-full'>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                Password
                            </label>
                            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 pr-12 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 text-right">

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white cursor-pointer px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                    >
                        Login to ShikaRide
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-sm text-gray-200 text-center">
                        Don't have an account?
                        <a onClick={() => navigate('/signup')} className="text-blue-600 hover:underline cursor-pointer font-medium ml-1">
                            Sign Up
                        </a>
                    </p>

                    {/* Alternative Login Methods */}
                    {/* <div className="mt-2">
                        <div className="flex items-center justify-center w-full my-4">
                            <div className="w-full h-px bg-gray-300" />
                            <span className="px-4 text-sm text-gray-500 whitespace-nowrap">Or continue with</span>
                            <div className="w-full h-px bg-gray-300" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="ml-2">Google</span>
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="ml-2">Facebook</span>
                            </button>
                        </div>
                    </div> */}
                </form>
            </div >
        </div >
    )
}

export default Login