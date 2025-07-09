import React from 'react'
import car from '../assets/car1.png'
import { FaCar } from "react-icons/fa";
import CardCard from '../components/CardCard';

const Home = () => {

    return (
        <>
            <div className="flex flex-col p-2 items-center  min-h-screen
         bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-center">
                <div className="flex md:flex-row flex-col  items-center justify-center">
                    <div className="md:w-1/2 w-full mt-20 ">
                        <p className="text-white md:text-[70px] text-lg font-bold">
                            Discover Endless Possibilities with  ShikaRide
                        </p>

                        <p className="text-white md:text-[20px] text-md font-semibold mt-2">
                            Your journey starts here. Book your ride now!
                        </p>
                        {/* <div className="flex flex-col items-center mt-8">
                        <button className="mt-6 flex flex-row cursor-pointer items-center gap-3
                         font-bold px-20 py-3 bg-white text-blue-600 rounded-lg
                     hover:bg-blue-100 transition duration-300">
                            <FaCar />
                            Book Now
                        </button>
                    </div> */}

                    </div>
                    <div className='md:w-1/2 -mt-20 w-full'>
                        <img src={car} alt="Car" className='w-200 h-auto' />
                    </div>
                </div>


                <div className="flex md:flex-row flex-col  border backdrop-blur-3xl bg-black/40
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