import React from 'react'
import bg from '../assets/bg6.png'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCar, FaParking, FaWifi, FaTools } from 'react-icons/fa'
const Locations = () => {

    const locations = [
        {
            name: 'ShikaRide Kisumu Central',
            address: '123 Main St, Kisumu Central, Kisumu County',
            phone: '+(254) 456-7890',
            email: 'kisumu@shikaride.com',
            hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat-Sun: 9:00 AM - 5:00 PM',
            manager: 'James Ochieng',
            vehicleCount: 25,
            services: ['Car Rental', 'Maintenance', 'Customer Support'],
            amenities: ['Free WiFi', 'Parking', 'Waiting Area', '24/7 Support'],
            specialFeatures: 'Lake Victoria proximity, Airport shuttle service available'
        },
        {
            name: 'ShikaRide Nairobi Downtown',
            address: '456 Elm St, CBD, Nairobi County',
            phone: '+(254) 456-7891',
            email: 'nairobi@shikaride.com',
            hours: 'Mon-Fri: 7:00 AM - 7:00 PM, Sat-Sun: 8:00 AM - 6:00 PM',
            manager: 'Sarah Wanjiku',
            vehicleCount: 45,
            services: ['Car Rental', 'Luxury Vehicles', 'Corporate Fleet', 'Maintenance'],
            amenities: ['Free WiFi', 'VIP Lounge', 'Covered Parking', 'Concierge Service'],
            specialFeatures: 'Premium vehicle selection, JKIA airport pickup/drop-off'
        },
        {
            name: 'ShikaRide Kiambu Branch',
            address: '789 Oak St, Kiambu Town, Kiambu County',
            phone: '+(254) 456-7892',
            email: 'kiambu@shikaride.com',
            hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat-Sun: 9:00 AM - 4:00 PM',
            manager: 'Peter Kariuki',
            vehicleCount: 18,
            services: ['Car Rental', 'Local Tours', 'Customer Support'],
            amenities: ['Free WiFi', 'Parking', 'Refreshments', 'Kids Play Area'],
            specialFeatures: 'Coffee farm tours, Scenic route specialists'
        },
        {
            name: 'ShikaRide Kakamega Hub',
            address: '321 Pine St, Kakamega Town, Kakamega County',
            phone: '+(254) 456-7893',
            email: 'kakamega@shikaride.com',
            hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat-Sun: 9:00 AM - 5:00 PM',
            manager: 'Mary Nekesa',
            vehicleCount: 15,
            services: ['Car Rental', 'Rural Transport', 'Agricultural Support'],
            amenities: ['Free WiFi', 'Parking', 'Waiting Area', 'Local Guides'],
            specialFeatures: 'Forest exploration vehicles, Agricultural transport solutions'
        },
        {
            name: 'ShikaRide Mombasa Coastal',
            address: '654 Maple St, Mombasa Island, Mombasa County',
            phone: '+(254) 456-7894',
            email: 'mombasa@shikaride.com',
            hours: 'Mon-Sun: 7:00 AM - 8:00 PM',
            manager: 'Ahmed Hassan',
            vehicleCount: 35,
            services: ['Car Rental', 'Beach Transfers', 'Port Services', 'Tourism Support'],
            amenities: ['Free WiFi', 'Beach Equipment', 'Covered Parking', 'Tourist Information'],
            specialFeatures: 'Beach-ready vehicles, Sgr station transfers, Port connectivity'
        },
        {
            name: 'ShikaRide Meru Gateway',
            address: '987 Cedar St, Meru Town, Meru County',
            phone: '+(254) 456-7895',
            email: 'meru@shikaride.com',
            hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat-Sun: 9:00 AM - 5:00 PM',
            manager: 'Grace Muthoni',
            vehicleCount: 20,
            services: ['Car Rental', 'Mountain Tours', 'Agricultural Transport'],
            amenities: ['Free WiFi', 'Parking', 'Mountain Gear', 'Local Cuisine'],
            specialFeatures: 'Mt. Kenya access, Tea plantation tours, 4WD specialists'
        },
    ]

    if (!Array.isArray(locations) || locations.length === 0) {
        return (
            <div className='flex flex-col items-center bg-gray-100 min-h-screen pt-20 p-4 w-full'
                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-4xl text-gray-800 font-bold mb-6 text-center'>No Locations Available</h1>
                <p className='text-lg text-gray-600 mb-4 text-center'>Currently, we do not have any locations to display. Please check back later.</p>
            </div>

        )
    }

    return (
        <div className='flex flex-col items-center bg-gray-100 min-h-screen pt-20 p-4 w-full'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            {/* Header Section */}
            <div className='text-center mb-8'>
                <h1 className='text-5xl text-gray-100 font-bold mb-4'>Our <span className='text-blue-500'>Locations</span></h1>
                <p className='text-xl text-gray-200 mb-6 max-w-3xl mx-auto'>
                    Discover ShikaRide locations across Kenya. Each branch offers premium vehicle rental services,
                    expert support, and local expertise to make your journey unforgettable.
                </p>
                <div className='flex justify-center gap-8 mb-8'>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-500'>6</div>
                        <div className='text-gray-200'>Locations</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-500'>158</div>
                        <div className='text-gray-200'>Total Vehicles</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-500'>24/7</div>
                        <div className='text-gray-200'>Support</div>
                    </div>
                </div>
            </div>

            {/* Locations Grid */}
            <div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {locations.map((location, index) => (
                    <div key={index} className='bg-white/90 backdrop-blur-sm cursor-pointer shadow-xl rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105'>

                        {/* Location Header */}
                        <div className='border-b border-gray-200 pb-4 mb-4'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-2'>{location.name}</h2>
                            <div className='flex items-center text-gray-600 mb-2'>
                                <FaMapMarkerAlt className='text-blue-500 mr-2' />
                                <p className='text-sm'>{location.address}</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className='mb-4'>
                            <div className='flex items-center text-gray-600 mb-2'>
                                <FaPhone className='text-green-500 mr-2' />
                                <p className='text-sm'>{location.phone}</p>
                            </div>
                            <div className='flex items-center text-gray-600 mb-2'>
                                <FaEnvelope className='text-red-500 mr-2' />
                                <p className='text-sm'>{location.email}</p>
                            </div>
                            <div className='flex items-center text-gray-600 mb-2'>
                                <FaClock className='text-yellow-500 mr-2' />
                                <p className='text-sm'>{location.hours}</p>
                            </div>
                        </div>

                        {/* Manager & Vehicle Count */}
                        <div className='flex justify-between items-center mb-4 bg-gray-50 p-3 rounded-lg'>
                            <div>
                                <p className='text-sm text-gray-500'>Manager</p>
                                <p className='font-semibold text-gray-800'>{location.manager}</p>
                            </div>
                            <div className='text-right'>
                                <p className='text-sm text-gray-500'>Vehicles</p>
                                <div className='flex items-center'>
                                    <FaCar className='text-blue-500 mr-1' />
                                    <p className='font-semibold text-gray-800'>{location.vehicleCount}</p>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className='mb-4'>
                            <h3 className='font-semibold text-gray-800 mb-2'>Services</h3>
                            <div className='flex flex-wrap gap-2'>
                                {location.services.map((service, i) => (
                                    <span key={i} className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className='mb-4'>
                            <h3 className='font-semibold text-gray-800 mb-2'>Amenities</h3>
                            <div className='grid grid-cols-2 gap-2'>
                                {location.amenities.map((amenity, i) => (
                                    <div key={i} className='flex items-center text-sm text-gray-600'>
                                        {amenity.includes('WiFi') && <FaWifi className='text-green-500 mr-1' />}
                                        {amenity.includes('Parking') && <FaParking className='text-blue-500 mr-1' />}
                                        {amenity.includes('Support') && <FaTools className='text-red-500 mr-1' />}
                                        {!amenity.includes('WiFi') && !amenity.includes('Parking') && !amenity.includes('Support') &&
                                            <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>}
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Special Features */}
                        <div className='bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg'>
                            <h3 className='font-semibold text-gray-800 mb-1'>Special Features</h3>
                            <p className='text-sm text-gray-600'>{location.specialFeatures}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className='mt-4 flex gap-2'>
                            <button className='flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium'>
                                Book Now
                            </button>
                            <button className='flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium'>
                                Get Directions
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Information Section */}
            <div className='mt-12 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Why Choose ShikaRide?</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='text-center'>
                        <div className='bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                            <FaCar className='text-blue-500 text-2xl' />
                        </div>
                        <h3 className='font-semibold text-gray-800 mb-2'>Premium Fleet</h3>
                        <p className='text-gray-600 text-sm'>Modern, well-maintained vehicles across all our locations</p>
                    </div>
                    <div className='text-center'>
                        <div className='bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                            <FaTools className='text-green-500 text-2xl' />
                        </div>
                        <h3 className='font-semibold text-gray-800 mb-2'>Expert Support</h3>
                        <p className='text-gray-600 text-sm'>24/7 customer support and maintenance services</p>
                    </div>
                    <div className='text-center'>
                        <div className='bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                            <FaMapMarkerAlt className='text-purple-500 text-2xl' />
                        </div>
                        <h3 className='font-semibold text-gray-800 mb-2'>Local Expertise</h3>
                        <p className='text-gray-600 text-sm'>Local knowledge and specialized services in each region</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className='mt-8 text-center bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto'>
                <h3 className='text-2xl font-bold text-gray-100 mb-4'>Need More Information?</h3>
                <p className='text-gray-200 mb-4'>
                    For detailed inquiries, custom bookings, or corporate partnerships, our team is here to help.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <button className='bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium'>
                        Contact Support
                    </button>
                    <button className='bg-white text-blue-500 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium'>
                        Visit Contact Page
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Locations