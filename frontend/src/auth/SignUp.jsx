import React, { useState } from 'react'
import bg from '../assets/bg.png'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple, FaPhone, FaEnvelope } from 'react-icons/fa'
import LoadingSpinner from '../components/LoadingSpinner'
import { authAPI } from '../services/api'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isEmailMode, setIsEmailMode] = useState(true)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Form validation
        if (!formData.userName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
            toast.error('Please fill in all fields');
            setLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            // Prepare the request payload
            const payload = {
                userName: formData.userName,
                email: formData.email,
                phoneNumber: formData.phone,
                password: formData.password
            };

            // Make API call to signup endpoint
            const response = await authAPI.signup(payload);

            // Handle successful signup
            if (response.data.token) {
                // Use AuthContext login method
                login(response.data.user, response.data.token);

                toast.success('Account created successfully!');

                // Navigate to dashboard or home page
                navigate('/');
            }
        } catch (error) {
            // Handle signup errors
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || 'Signup failed');
            } else {
                toast.error('Network error. Please try again.');
            }
            console.error('Signup error:', error);
        } finally {
            setLoading(false);
        }
    }

    const toggleMode = () => {
        setIsEmailMode(!isEmailMode)
        // Clear the current input when switching modes
        setFormData(prev => ({
            ...prev,
            email: '',
            phone: ''
        }))
    }
    return (
        <div className="flex items-center justify-center bg-cover bg-center min-h-screen bg-black/40"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {loading && (
                <div className='flex items-center absolute w-full z-40 backdrop-blur-sm inset-0 justify-center h-screen'>
                    <LoadingSpinner />
                </div>

            )}
            <div className="bg-black/60 backdrop-blur-3xl mt-20 p-8 rounded-md border border-blue-500 shadow-2xl w-full max-w-md">
                <h2 className="text-2xl text-white font-bold mb-6 text-center">
                    Sign Up
                </h2>
                <p className='text-white text-sm mb-6 text-center'>
                    Create an account to start booking your rides with ShikaRide.
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            required
                        />
                    </div>

                    {/* Email/Phone Toggle */}
                    <div className="mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">
                                    Phone Number
                                </label>
                                <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>

                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 pr-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 pr-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105"
                    >
                        Create Account
                    </button>

                    {/* Divider */}
                    {/* <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-black/60 text-gray-400">Or sign up with</span>
                        </div>
                    </div> */}

                    {/* Social Login Buttons */}
                    {/* <div className="grid grid-cols-3 gap-3 mb-6">
                        <button
                            type="button"
                            className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-200 text-white hover:border-gray-500"
                        >
                            <FaGoogle className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-200 text-white hover:border-gray-500"
                        >
                            <FaFacebook className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-200 text-white hover:border-gray-500"
                        >
                            <FaApple className="w-5 h-5" />
                        </button>
                    </div> */}

                    {/* Sign In Link */}
                    <p className="text-center mt-5 text-sm text-gray-400">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="text-blue-400 hover:text-blue-300 
                            font-medium cursor-pointer transition-colors duration-200"
                        >
                            Sign In
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp