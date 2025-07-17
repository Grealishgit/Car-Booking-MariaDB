import React from 'react'
import bg from '../assets/bg.png'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navgate = useNavigate()
    return (
        <div className="flex items-center justify-center bg-cover bg-center min-h-screen bg-black/40"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border border-gray-300
                                    rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300
                                    rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300
                                    rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 
                               rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                    <p className="mt-4 text-sm text-gray-600 text-center">
                        Already have an account? <a href="/login" className="text-blue-600 hover:underline">
                            SLogin</a>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default SignUp