import React from 'react'
import car1 from '../assets/carcard1.png'
import car2 from '../assets/carcard2.png'
import car3 from '../assets/carcard3.png'
import car4 from '../assets/carcard4.png'
import interior from '../assets/bg.png'
import { FaCar, FaUsers, FaShieldAlt, FaGlobe, FaAward, FaPhoneAlt, FaCheckCircle, FaStar, FaHeadset, FaLeaf } from 'react-icons/fa'

const About = () => {
    return (
        <div
            className="flex flex-col  items-center max-md:text-center  justify-between pt-20 p-4 w-full"
            style={{ backgroundImage: `url(${interior})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="flex md:flex-row flex-col  p-4 rounded-md mb-8 items-center md:items-start">
                <div className=" w-full max-w-7xl ">
                <button
                        className="mt-16  mb-6 cursor-pointer flex items-center space-x-2 border border-indigo-600
                         text-white text-xs rounded-full md:px-2 px-5 pr-1.5 py-1.5  transition"
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
                    <p className="mt-4 text-gray-200 max-w-md text-sm sm:text-base leading-relaxed">
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
                <div aria-label="Photos of leaders" className="md:grid grid-cols-3 p-4 hidden  border border-gray-300
                rounded-md bg-gradient-to-bl from-black/50 to-gray-500 gap-6 mt-16 pb-2">
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car1}
                    width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer  hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car2}
                    width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                    src={car3}
                    width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer  hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                        src={car4}
                        width="120" />
                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer border border-indigo-300 hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                        src={car4}
                        width="120" />

                    <img alt="" className="w-50 h-44 rounded-lg cursor-pointer  hover:scale-105 transition duration-300 object-contain flex-shrink-0 shadow-lg" height="140"
                        src={car4}
                        width="120" />
                </div>
            </div>

            {/* Statistics Section */}
            <div className="w-full max-w-6xl mx-auto mmt-5 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white text-center mb-8">ShikaRide by the Numbers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                        <div className="text-gray-200">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">158</div>
                        <div className="text-gray-200">Vehicles Available</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">6</div>
                        <div className="text-gray-200">Locations in Kenya</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                        <div className="text-gray-200">Customer Satisfaction</div>
                    </div>
                </div>
            </div>

            {/* Our Mission & Vision Section */}
            <div className="w-full max-w-6xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                        <FaAward className="text-indigo-400 text-2xl mr-3" />
                        <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                        To revolutionize transportation in Kenya by providing accessible, reliable, and affordable car rental services.
                        We strive to connect every Kenyan with the perfect vehicle for their journey, whether it's a daily commute,
                        weekend adventure, or special occasion.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                        <FaGlobe className="text-green-400 text-2xl mr-3" />
                        <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                        To become East Africa's leading car marketplace, setting the standard for quality, innovation, and customer service.
                        We envision a future where transportation is seamless, sustainable, and accessible to all communities across the region.
                    </p>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="w-full max-w-6xl mt-5 mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                        <FaShieldAlt className="text-indigo-400 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">Trust & Safety</h3>
                        <p className="text-gray-200 text-sm">
                            Every vehicle is thoroughly inspected and insured. Your safety is our top priority.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center
                     hover:bg-white/20 transition-all duration-300">
                        <FaHeadset className="text-green-400 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">Customer First</h3>
                        <p className="text-gray-200 text-sm">
                            24/7 support and personalized service to ensure your experience exceeds expectations.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                        <FaLeaf className="text-green-500 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
                        <p className="text-gray-200 text-sm">
                            Committed to eco-friendly practices and promoting sustainable transportation solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full max-w-6xl mt-5 mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose ShikaRide?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Verified Vehicles</h4>
                                <p className="text-gray-300 text-sm">All cars undergo rigorous safety checks and maintenance</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Flexible Booking</h4>
                                <p className="text-gray-300 text-sm">Book for hours, days, or weeks with easy cancellation</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Competitive Pricing</h4>
                                <p className="text-gray-300 text-sm">Best rates in the market with transparent pricing</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Wide Selection</h4>
                                <p className="text-gray-300 text-sm">From economy to luxury, find the perfect car for any occasion</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                                <p className="text-gray-300 text-sm">Round-the-clock customer service and roadside assistance</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Easy Pickup</h4>
                                <p className="text-gray-300 text-sm">Multiple locations across Kenya for convenient pickup</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Digital Experience</h4>
                                <p className="text-gray-300 text-sm">Book, manage, and pay for your rental entirely online</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Insurance Coverage</h4>
                                <p className="text-gray-300 text-sm">Comprehensive insurance included in all rentals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Journey Section */}
            <div className="w-full max-w-6xl mx-auto mt-5 bg-gradient-to-r
             from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Our Journey</h2>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">2019 - The Beginning</h3>
                            <p className="text-gray-300 text-sm">Started as a small car rental service in Nairobi with just 5 vehicles and a vision to transform transportation in Kenya.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">2020 - Digital Transformation</h3>
                            <p className="text-gray-300 text-sm">Launched our digital platform, making car booking accessible online and expanding to 3 cities across Kenya.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">2022 - Nationwide Expansion</h3>
                            <p className="text-gray-300 text-sm">Reached 6 major cities with over 100 vehicles, becoming one of Kenya's fastest-growing car rental platforms.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">2024 - Innovation & Excellence</h3>
                            <p className="text-gray-300 text-sm">Introduced AI-powered matching, mobile app, and premium services, serving over 10,000 satisfied customers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Testimonials Section */}
            <div className="w-full max-w-6xl mx-auto mt-5">
                <div className="flex flex-col items-center text-white">
                    <h2 className="text-3xl font-bold text-white text-center mb-2">What Our Customers Say</h2>
                    <div className="flex items-center mb-8 -space-x-3">
                        <div className="relative group cursor-pointer flex flex-col items-center">
                            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">Michael</p>
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="image"
                                className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110" />
                        </div>
                        <div className="relative group cursor-pointer flex flex-col items-center">
                            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">James</p>
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="image"
                                className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110" />
                        </div>
                        <div className="relative group cursor-pointer flex flex-col items-center">
                            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">Emily</p>
                            <img src="https://randomuser.me/api/portraits/women/28.jpg"
                                alt="image" className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110" />
                        </div>
                        <div className="relative group cursor-pointer flex flex-col items-center">
                            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">John</p>
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="image"
                                className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                        </div>
                        <p className="text-gray-200 text-sm mb-4">
                            "Excellent service! The car was clean, well-maintained, and the booking process was seamless.
                            ShikaRide made my business trip to Mombasa so much easier."
                        </p>
                        <div className="flex items-center">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Customer" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <div className="text-white font-semibold">Sarah Wanjiku</div>
                                <div className="text-gray-400 text-xs">Business Executive</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                        </div>
                        <p className="text-gray-200 text-sm mb-4">
                            "Amazing experience! The team was professional, the car was perfect for our family vacation,
                            and the customer support was outstanding. Highly recommended!"
                        </p>
                        <div className="flex items-center">
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <div className="text-white font-semibold">David Kipchoge</div>
                                <div className="text-gray-400 text-xs">Family Man</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                            <FaStar className="text-yellow-400 text-lg" />
                        </div>
                        <p className="text-gray-200 text-sm mb-4">
                            "ShikaRide has been my go-to car rental service for over a year. Competitive prices,
                            reliable vehicles, and excellent customer service every time."
                        </p>
                        <div className="flex items-center">
                            <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Customer" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <div className="text-white font-semibold">Grace Muthoni</div>
                                <div className="text-gray-400 text-xs">Entrepreneur</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row mt-5 items-center justify-around text-sm border
             border-gray-300 rounded-md mb-5 max-w-5xl w-full ">

                <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                    <h2 className="md:text-4xl text-2xl font-semibold text-gray-200">Download Shika<span className='text-blue-500'>Ride</span> App</h2>
                    <p className="text-gray-200 mt-2 w-3/4">Mobile Shika<span className='text-blue-500'>Ride</span>  app for iOS & Android to manage your online money.</p>

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

                <img className="max-w-[375px] rounded-md pt-10 md:p-0"
                    src={car1}
                    alt="excitedWomenImage" />
            </div>
        </div>
    )
}

export default About