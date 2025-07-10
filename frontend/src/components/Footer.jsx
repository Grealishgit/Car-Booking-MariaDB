import React from 'react'
import logo from '../assets/logoc.png'; 

const Footer = () => {
    return (
        <footer className='bg-gray-800 w-full flex flex-col justify-center items-center text-white'>
            <div className='w-full md:justify-between justify-center items-center flex md:flex-row flex-col p-4 text-white'>

                <div className='w-1/2 items-start mt-4'>
                    <div className='flex  items-center gap-2'>
                        <img src={logo} alt="Logo" className='w-16 h-auto' />
                    <p className='text-3xl text-center font-semibold'>Shika<span className='text-blue-500'>Ride</span>
                        </p>   
                    </div>

                    <p className='text-sm mt-2'>
                        Shika<span className='text-blue-500'>Ride</span> is a ride-hailing service that connects
                        you with reliable drivers for a safe and convenient travel experience.
                    </p>

                </div>
                <div className='flex flex-col w-1/2 items-start justify-center mt-4'>
                    <p className='text-3xl'>Contact Us</p>
                    <div className='grid grid-cols-2 gap-4 mt-2'>
                        <a href="">Linkedn</a>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                    </div>

                </div>
                <div className='flex flex-col w-1/2 items-start justify-center mt-4'>
                    <p className='text-3xl'>SERVICE</p>
                    <a href="/service">Rent Car</a>
                    <a href="/locations">Deliver</a>
                    <a href="/contact">Trade</a>
                </div>
                <div className='flex flex-col w-1/2 items-start justify-center mt-4'>
                    <p className='text-3xl'>Suupport</p>
                    <div className='flex flex-col mt-2'>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/cookies">Cookie Policy</a>
                        <a href="/help">Help Center</a>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 items-start justify-center mt-4' >
                    <p>Stay Up To Date</p>
                    <form className='flex flex-col mt-2'>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='p-2 rounded-md bg-gray-700 text-white mb-2'
                        />
                        <button
                            type='submit'
                            className='bg-blue-500 text-white cursor-pointer
                             p-2 rounded-md hover:bg-blue-600 transition duration-300'
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
            <div className='w-full bg-gray-900  border-t border-gray-700 mt-4'>


                <p className='text-md text-white text-center mt-2 mb-4'>
                    Made with ❤️ by the ShikaRide Team <span>© {new Date().getFullYear()} ShikaRide. All rights reserved.</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer