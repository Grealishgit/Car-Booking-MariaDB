import React, { useState } from 'react'
import interior from '../assets/bg10.png'
import { carData } from '../../lib/data'
import { IoIosHeartEmpty } from 'react-icons/io'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { FaAngleDown } from 'react-icons/fa';
import { IoHeart } from 'react-icons/io5';
import toast from 'react-hot-toast';


const fields = [
    { placeholder: 'Sort By', options: ['Price', 'Rating', 'Newest'] },
    { placeholder: 'Vehicle Type', options: ['SUV', 'Sedan', 'Truck'] },
    { placeholder: 'Gear Shift', options: ['Automatic', 'Manual'] },
    { placeholder: 'Passengers', options: ['2', '4', '6', '8+'] },
    { placeholder: "Driver's Age", options: ['18+', '21+', '25+'] },
];

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

const pagination = (currentPage, totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button key={i} className={`px-3 py-1 rounded-full ${currentPage === i ? 'bg-blue-500 text-white' :
                'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
                onClick={() => console.log(`Go to page ${i}`)} >
                {i}
            </button>
        );
    }
    return (
        <div className="flex justify-center space-x-2">
            {pages}
        </div>
    );
}

const Service = () => {
    const [favorites, setFavorites] = useState(new Set());
    const [tilts, setTilts] = useState({});

    const toggleFavorite = (carId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(carId)) {
                newFavorites.delete(carId);
                toast.success('Removed from favorites');
            } else {
                newFavorites.add(carId);
                toast.success('Added to favorites');
            }
            return newFavorites;
        });
    };

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e, carId) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilts(prev => ({
            ...prev,
            [carId]: { x: y * -threshold, y: x * threshold }
        }));
    };

    const handleMouseLeave = (carId) => {
        setTilts(prev => ({
            ...prev,
            [carId]: { x: 0, y: 0 }
        }));
    };

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

            <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center mt-4">
                {fields.map((field, idx) => (
                    <div key={idx} className="relative w-60">
                        <select
                            className="appearance-none pl-4 w-full rounded-full text-white border border-white p-2 pr-8 bg-transparent"
                        >
                            <option disabled selected>{field.placeholder}</option>
                            {field.options.map((option, i) => (
                                <option key={i} value={option} className="text-black">
                                    {option}
                                </option>
                            ))}
                        </select>
                        <FaAngleDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-white" />
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-8 md:gap-4  p-4'>
                {carData.map((car) => {
                    const currentTilt = tilts[car.id] || { x: 0, y: 0 };
                    return (
                        <div key={car.id} className="max-w-md border cursor-pointer  border-gray-600 mx-auto my-4
                         bg-black/70 backdrop-blur-3xl rounded-lg shadow-lg overflow-hidden"
                            onMouseMove={(e) => handleMove(e, car.id)}
                            onMouseLeave={() => handleMouseLeave(car.id)}
                            style={{ transform: `perspective(1000px) rotateX(${currentTilt.x}deg) rotateY(${currentTilt.y}deg)` }}
                        >

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
                            {favorites.has(car.id) ? (
                                <IoHeart onClick={() => toggleFavorite(car.id)}
                                    className='w-7 h-6 cursor-pointer text-red-500 hover:text-red-600' />
                            ) : (
                                    <IoIosHeartEmpty onClick={() => toggleFavorite(car.id)}
                                        className='w-7 cursor-pointer h-5 text-white hover:text-red-500' />
                            )}
                        </div>

                        <img src={car.image} alt={car.name} className="w-full h-64 object-contain" />

                            <div className="p-4 flex  mb-4 justify-between items-center">
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
                                            Book 
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

                            </div> */}                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex max-w-md mx-auto justify-between items-center gap-4 mb-8'>
                <button className='flex cursor-pointer items-center text-white'>
                    <FaChevronLeft className='w-4 h-4' />
                    Prev
                </button>
                {pagination(1, Math.ceil(carData.length / 4))}
                <button
                    onClick={() => console.log('Next Page')}
                    className='text-blue-500 cursor-pointer flex items-center'>
                    Next
                    <FaChevronRight className='w-4 h-4' />
                </button>
            </div>

        </div>
    )
}

export default Service