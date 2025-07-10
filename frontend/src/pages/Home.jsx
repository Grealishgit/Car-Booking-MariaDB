import React, { useState } from 'react'
import car from '../assets/car1.png'
import { FaCar } from "react-icons/fa";
import CardCard from '../components/CardCard';
import interior from '../assets/bg.png'
import logo from '../assets/logoc.png'; 

const Home = () => {
    const [banner, setBanner] = useState(true);

    return (
        <>
            {banner && (<div class="w-full relative top-16 flex items-center justify-between  md:px-14 py-2
                 font-medium text-sm text-white text-center bg-gradient-to-r from-violet-500 via-blue-500 to-[#E0724A]">
                <p>Get 20% OFF on Your First Ride Order!</p>
                <div class="flex items-center space-x-6">
                    <button type="button" class="font-normal text-gray-800 bg-white px-7 py-2 rounded-full">Claim Offer</button>
                    <button className='cursor-pointer' onClick={() => setBanner(!banner)} type="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)" fill="#fff" />
                            <rect x="12.533" y="13.915" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.533 13.915)" fill="#fff" />
                        </svg>
                    </button>
                </div>
            </div>)}
            <div className="flex flex-col p-2 items-center bg-center bg-cover
            
              min-h-screen text-center"
                style={{ backgroundImage: `url(${interior})` }}>


                <div className="flex md:flex-row flex-col  items-center justify-center">
                    <div className="w-full mt-20 ">
                        <p className="text-white md:text-[80px] text-3xl font-bold">
                            Discover Endless <br /> Possibilities with <span className='md:text-blue-500 '>ShikaRide</span> 
                        </p>

                        <p className="text-white md:text-[20px] text-md font-semibold mt-2">
                            Your journey starts here. Book your ride now!
                        </p>
                        {/* <div className="flex flex-col items-center mt-8">
                            <button className="mt-15 flex flex-row cursor-pointer items-center gap-3
                         font-bold px-20 py-3 bg-white text-blue-600 rounded-lg
                     hover:bg-blue-100 transition duration-300">
                            <FaCar />
                                Explore Cars
                        </button>
                        </div> */}

                    </div>
                </div>

                <div className="flex md:flex-row flex-col relative top-40  border backdrop-blur-3xl bg-black/40
             border-gray-300 md:rounded-2xl rounded-lg p-4 justify-center mt-2 mb-4">

                    <div className="flex flex-col items-start space-y-2 p-2  rounded-lg  md:w-1/2 w-full">
                        <p className='text-white font-semibold text-md'>Pick-up Location</p>
                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="pl-4 w-full py-2 rounded-lg text-white border border-gray-300 "
                        />
                    </div>


                    <div className="flex flex-col items-start space-y-2  p-2 rounded-lg  md:w-1/2 w-full md:ml-4">
                        <p className='text-white font-semibold text-md'>Pick-up Date</p>
                        <input
                            type="date"
                            className="pl-4 w-full py-2 rounded-lg text-white border border-gray-300 "
                        />
                    </div>


                    <div className="flex flex-col items-start space-y-2  p-2 rounded-lg  md:w-1/2 w-full md:ml-4">
                        <p className='text-white font-semibold text-md'>Drop-off Location</p>
                        <input
                            type="text"
                            placeholder="Enter your destination"
                            className="pl-4 w-full py-2 rounded-lg text-white border border-gray-300 "
                        />
                    </div>

                    <div className="flex flex-col items-start space-y-2  p-2 rounded-lg  md:w-1/2 w-full md:ml-4">
                        <p className='text-white font-semibold text-md'>Drop-off Date</p>
                        <input
                            type="date"
                            className="pl-4 w-full py-2 rounded-lg text-white border border-gray-300 "
                        />
                    </div>


                    <div className="flex items-center justify-center mt-10 mb-1 rounded-lg  cursor-pointer  bg-white md:w-1/2 w-full gap-2">
                        <FaCar className='w-5 h-5' />
                        <button className="font-bold  text-blue-600  hover:bg-blue-100 transition duration-300">
                            Search
                        </button>
                    </div>
                </div>

            </div>
            <CardCard />
        </>
    )
}

export default Home