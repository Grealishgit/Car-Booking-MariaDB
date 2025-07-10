import React from 'react'
import interior from '../assets/bg.png'
import { carData } from '../../lib/data'
import { IoIosHeartEmpty } from 'react-icons/io'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            // Full star
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (i - 0.5 <= rating) {
            // Half star
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            // Empty star
            stars.push(<FaRegStar key={i} className="text-gray-300" />);
        }
    }
    return stars;
}

const Service = () => {
    return (
        <div className="flex flex-col md:p-20 p-2 items-center bg-center bg-cover min-h-screen text-center"
            style={{ backgroundImage: `url(${interior})` }}>
            <div className="flex md:flex-row flex-col items-center justify-center mt-20">
                <div className="w-full">
                    <p className="text-white md:text-[80px] text-3xl font-bold">
                        Which Car  Do You Need To Drive?
                    </p>
                    <p className="text-white md:text-[20px] text-md font-semibold mt-2">
                        Explore our wide range of vehicles and find the perfect ride for your journey!
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-8 md:gap-4  p-4'>
                {carData.map((car) => (
                    <div key={car.id} className="max-w-md border border-gray-600 mx-auto my-4 bg-black/70 backdrop-blur-3xl rounded-lg shadow-lg overflow-hidden">
                        <div className="flex items-center justify-between p-4 text-white">
                            <div className="flex flex-col items-start">
                                <h2 className="text-xl font-bold text-gray-200">{car.name}</h2>
                                <ul className="list-none flex gap-2 text-gray-200">
                                    {car.features.slice(3).map((feature, index) => (
                                        <li className='text-xs' key={index}>{feature.length > 12 ? `${feature.slice(0, 12)}...` : feature
                                        }</li>
                                    ))}
                                </ul>
                            </div>

                            <IoIosHeartEmpty className='w-6 h-5 text-blue-500' />
                        </div>

                        <img src={car.image} alt={car.name} className="w-full h-64 object-contain" />

                        <div className="p-4 flex mb-4 justify-between items-center">
                            <div className="flex flex-col items-start">
                                <div className="flex flex-col items-start gap-2">
                                    <p className='flex gap-2'>{renderStars(car.rating)}</p>
                                    <p className="text-blue-500 font-bold">Ratings
                                        (<span className='text-yellow-500'> {car.rating}</span>
                                        <span className='text-white'> / </span>
                                        5.0)
                                    </p>
                                </div>

                            </div>
                            <div className="flex flex-col gap-2  items-end">
                                <p className="text-blue-600 font-semibold mb-2">Ksh {car.price} per day</p>
                                <button>
                                    <span className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                        Book Now
                                    </span>
                                </button>
                            </div>

                            {/* <div className="mt-4">
                                <h3 className="text-lg font-semibold">Features:</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {car.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service