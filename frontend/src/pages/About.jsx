import React from 'react'
import car1 from '../assets/carcard1.png'
import car2 from '../assets/carcard2.png'
import car3 from '../assets/carcard3.png'
import car4 from '../assets/carcard4.png'

const About = () => {
    return (
        <div
            className="flex flex-col  items-center max-md:text-center justify-between pt-20 px-6  w-full">
            <div className="flex md:flex-row flex-col items-center md:items-start">
                <div className=" w-full max-w-7xl ">
                <button
                        className="mt-16  mb-6 cursor-pointer flex items-center space-x-2 border border-indigo-600
                         text-indigo-600 text-xs rounded-full md:px-2 px-5 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
                    type="button">
                    <span>
                        Shika <span className="hidden sm:inline">Ride </span>
                        <span className="hidden sm:inline">The Prefered Car Marketplace</span>
                    </span>
                    <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
                        <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.5h14M9.5 1 15 6.5 9.5 12" stroke="#fff" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </button>
                <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl leading-tight">
                    From comfort to luxury, we have it all for
                    <span className="text-indigo-600"> every journey

                    </span>
                </h1>
                <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
                    We are a leading car marketplace, dedicated to connecting you with the perfect vehicle for your needs.
                    Whether you're looking for a compact car for city driving or a spacious SUV for family adventures,
                    we have a wide range of options to suit every taste and budget. Our platform makes it easy to browse,
                    compare, and find the ideal car that fits your lifestyle.
                    <br />

                    <span className="hidden sm:inline">With Shika, your next adventure is just a click away.</span>
                </p>
                <div className="flex flex-col mb-5 md:flex-row items-center mt-8 gap-3">
                    <button
                        className="bg-indigo-600 cursor-pointer text-white px-6 pr-2.5 py-2.5
                         rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
                        type="button">
                        <span>
                            Learn More
                        </span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="#fff"
                                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <a className="text-indigo-600 flex items-center bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                        href="#">
                        Contact Us
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.821 11.999h13.43m0  0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="#6366F1"
                                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>

            </div>
                <div aria-label="Photos of leaders" className="grid grid-cols-2 gap-6 mt-16 pb-6">
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car1}
                    width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car2}
                    width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car3}
                    width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car4}
                    width="120" />
            </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around text-sm border
             border-gray-300 rounded-md mb-5 max-w-5xl w-full bg-white">

                <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                    <h2 className="md:text-4xl text-2xl font-semibold text-gray-800">Download Shika<span className='text-blue-500'>Ride</span> App</h2>
                    <p className="text-gray-700 mt-2 w-3/4">Mobile Shika<span className='text-blue-500'>Ride</span>  app for iOS & Android to manage your online money.</p>

                    <div className="flex items-center gap-4 mt-6">
                        <button aria-label="googlePlayBtn" class="active:scale-95 transition-all" type="button">
                            <img className="md:w-44 w-28"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                                alt="googlePlayBtn" />
                        </button>
                        <button aria-label="appleStoreBtn" class="active:scale-95 transition-all" type="button">
                            <img className="md:w-44 w-28"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                                alt="appleStoreBtn" />
                        </button>
                    </div>
                </div>

                <img className="max-w-[375px] pt-10 md:p-0"
                    src={car1}
                    alt="excitedWomenImage" />
            </div>
        </div>
    )
}

export default About