import React, { useRef, useState } from 'react'
import car1 from '../assets/carcard1.png'
import car2 from '../assets/carcard2.png'
import car3 from '../assets/carcard3.png'
import car4 from '../assets/carcard4.png'
import car5 from '../assets/carcard5.png'
import car6 from '../assets/carcard6.png'
import car7 from '../assets/carcard7.png'
import { IoArrowBackCircleOutline, IoHeart } from "react-icons/io5"
import { IoIosHeartEmpty } from "react-icons/io";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import './CardCard.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import toast from 'react-hot-toast'

const carInfo = [
    {
        id: 1,
        name: "Toyota Camry",
        image: car1,
        price: "3000/day",
        description: "A reliable and comfortable sedan perfect for city driving.",
        rating: 4.5

    },
    {
        id: 2,
        name: "Honda Accord",
        image: car2,
        price: "3200/day",
        description: "A spacious sedan with advanced safety features.",
        rating: 4.7
    },
    {
        id: 3,
        name: "Ford Explorer",
        image: car3,
        price: "5000/day",
        description: "A rugged SUV with plenty of space for adventures.",
        rating: 4.6
    },
    {
        id: 4,
        name: "Chevrolet Malibu",
        image: car4,
        price: "2800/day",
        description: "A stylish sedan with a smooth ride and modern tech.",
        rating: 4.4
    },
    {
        id: 5,
        name: "Nissan Altima",
        image: car5,
        price: "2900/day",
        description: "A fuel-efficient sedan with a comfortable interior.",
        rating: 4.3
    },
    {
        id: 6,
        name: "Hyundai Sonata",
        image: car6,
        price: "3100/day",
        description: "A sleek sedan with a spacious cabin and advanced features.",
        rating: 4.5
    },
    {
        id: 7,
        name: "Kia Sorento",
        image: car7,
        price: "2050/day",
        description: "A versatile SUV with ample cargo space and comfort.",
        rating: 4.8
    }
]

//function to render stars
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

const CardCard = () => {
    const scrollContainerRef = useRef(null);
    const [favorites, setFavorites] = useState(new Set());

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -320, // Scroll by one card width
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 320, // Scroll by one card width
                behavior: 'smooth'
            });
        }
    };

    const toggleFavorite = (carId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(carId)) {
                newFavorites.delete(carId);
                toast.success(`Car  ${carId} removed from favorites`);
                // console.log(`Car with ID ${carId} removed from favorites`);
            } else {
                newFavorites.add(carId);
                toast.success(`Car  ${carId} added to favorites`);
                // console.log(`Car with ID ${carId} added to favorites`);
            }
            return newFavorites;
        });
    }

    return (
        <div className="flex flex-col bg-gradient-to-r  from-blue-300 via-black to-black">
            <div className='flex flex-col mt-10 mx-15'>
                <p className='text-2xl text-white font-semibold'>The Trend Vehicle</p>
                <p className='text-lg font-semibold text-gray-200 mt-2'>
                    Modern vehicles are designed with advanced technology and safety features,
                    providing a comfortable and efficient driving experience.
                </p>
            </div>

            <div className='mx-30 mt-12 '>
                <div className="relative">
                    {/* Left scroll button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
                    >
                        <IoChevronBackOutline className="w-6 hover:text-blue-500 cursor-pointer h-6" />
                    </button>

                    {/* Right scroll button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70
                         text-white p-2 rounded-full transition-all duration-300 shadow-lg"
                    >
                        <IoChevronForwardOutline className="w-6 hover:text-blue-500 cursor-pointer h-6" />
                    </button>

                    <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-4 mb-4 w-max">
                            {carInfo.map((car) => (
                                <div key={car.id} className="bg-gray-300/30 backdrop-blur-lg rounded-lg shadow-md p-4 w-80 flex-shrink-0">
                                    <div className='flex items-center justify-between mb-2'>
                                        <p className="text-white font-semibold">{car.name}</p>
                                        {favorites.has(car.id) ?
                                            <IoHeart
                                                onClick={() => toggleFavorite(car.id)}
                                                className='w-7 h-6 cursor-pointer text-blue-500 hover:text-blue-600' />
                                            : <IoIosHeartEmpty
                                                onClick={() => toggleFavorite(car.id)}
                                                className='w-7 h-6 cursor-pointer text-white hover:text-blue-500' />
                                        }
                                    </div>

                                    <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-t-lg" />
                                    <div className="flex  items-center justify-between mt-2">
                                        <div className="flex items-center">
                                            {renderStars(car.rating)}
                                            <span className="ml-2 text-gray-200">({car.rating})</span>
                                        </div>
                                        <p className="text-white font-bold mt-2">Ksh {car.price}</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-2'>
                                        <p className="text-gray-200 text-sm">
                                            {car.description.length ? car.description.length > 30 ? `${car.description.slice(0, 20)}...`
                                                : car.description
                                                : "No description available"
                                            }</p>
                                        <button className=" bg-blue-600 animate-bounce font-semibold px-6 py-1 cursor-pointer rounded-lg 
                                         text-white transition duration-300 hover:bg-blue-700">
                                            Book
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex  mb-5 items-center justify-center mt-10 gap-5'>
                    <div className='md:w-1/2 w-full flex flex-col justify-center items-start'>
                        <p className='text-white text-3xl font-semibold mt-4'>
                            Explore the latest vehicles and find your perfect ride!</p>
                        <p className='text-gray-200 text-md mt-2'>
                            Discover a wide range of modern vehicles designed for comfort, safety, and performance.
                            Whether you're looking for a reliable sedan, a spacious SUV, or a stylish coupe,
                            we have the perfect car for you. Enjoy advanced technology, fuel efficiency,
                            and a smooth driving experience with our top-rated vehicles.
                            <br />
                            <span className='text-blue-500 font-semibold'>Book now</span>
                            and experience the future of driving with our trend vehicles.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full flex justify-center items-center'>
                        <img src={car1} alt="Car" className='w-full h-85 object-cover rounded-lg shadow-lg mt-4' />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardCard