import React from 'react'
import interior from '../assets/bg4.png';
import bg from '../assets/bg.png'

const Contact = () => {
    return (
        <div
            className="flex flex-col  items-center  bg-center bg-cover min-h-screen  pt-20 p-4 w-full"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h1 className='text-4xl text-white font-bold mb-6 text-center'>Contact <span className='text-blue-500'>Us</span> </h1>
            <p className='text-lg text-white mb-4 text-center'>We would love to hear from you! Please fill out the form below to get in touch.</p>
            <div className='w-full flex '>
                <div className='flex-1 p-6 hidden md:block'>
                    <img src={interior} alt="Contact Us" className='w-190 shaow-blue-500 h-110 rounded-lg shadow-lg  md:mt-0' />
                </div>
                <div className='flex-1  p-6'>
                    <form className='bg-black/50 shadow-blue-500 backdrop-blur-lg p-6 rounded-md shadow-md w-full max-w-xl'>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='name'>Your Name</label>
                            <div className='flex flex-col space-y-4'>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Your Name'
                                    className='w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                                <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='name'>Your Email</label>
                                <input type="email"
                                    placeholder="Email Address"
                                    className='w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                                <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='name'>Your Message</label>
                                <textarea name="" id=""
                                    placeholder="Your Message"
                                    className='w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'
                                    required
                                />

                                <button type='submit'
                                    className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer
                             hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact