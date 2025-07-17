import React, { useState } from 'react'
import interior from '../assets/bg4.png';
import bg from '../assets/bg.png'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaHeadset, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa'
import toast from 'react-hot-toast'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-blue-500" />,
            title: "Phone",
            details: ["+254 700 123 456", "+254 701 234 567"],
            subtitle: "Call us anytime"
        },
        {
            icon: <FaEnvelope className="text-green-500" />,
            title: "Email",
            details: ["info@shikaride.com", "support@shikaride.com"],
            subtitle: "We respond within 24 hours"
        },
        {
            icon: <FaMapMarkerAlt className="text-red-500" />,
            title: "Head Office",
            details: ["Nairobi CBD, Kenya", "Kimathi Street, 5th Floor"],
            subtitle: "Visit us during business hours"
        },
        {
            icon: <FaClock className="text-purple-500" />,
            title: "Business Hours",
            details: ["Mon-Fri: 7:00 AM - 7:00 PM", "Sat-Sun: 8:00 AM - 6:00 PM"],
            subtitle: "24/7 emergency support"
        }
    ];

    const faqItems = [
        {
            question: "How quickly do you respond to inquiries?",
            answer: "We typically respond to all inquiries within 2-4 hours during business hours and within 24 hours on weekends."
        },
        {
            question: "Can I visit your office in person?",
            answer: "Yes! Our head office is located in Nairobi CBD on Kimathi Street. We also have branches in 5 other cities across Kenya."
        },
        {
            question: "Do you offer phone support?",
            answer: "Absolutely! Our phone support is available 24/7 for emergencies and during business hours for general inquiries."
        },
        {
            question: "How can I report an issue with my rental?",
            answer: "You can report issues through our 24/7 hotline, email support, or use the emergency contact feature in our mobile app."
        }
    ];
    return (
        <div
            className="flex flex-col items-center bg-center bg-cover min-h-screen pt-20 p-4 w-full"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Header Section */}
            <div className="text-center mb-12 max-w-4xl">
                <h1 className='text-5xl text-white font-bold mb-6'>Contact <span className='text-blue-500'>Us</span></h1>
                <p className='text-xl text-gray-200 mb-8'>
                    We're here to help! Whether you have questions about our services, need support, or want to share feedback,
                    our team is ready to assist you.
                </p>

                {/* Quick Contact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-400 mb-1">2-4 Hours</div>
                        <div className="text-gray-200 text-sm">Response Time</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                        <div className="text-gray-200 text-sm">Emergency Support</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                        <div className="text-gray-200 text-sm">Customer Satisfaction</div>
                    </div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="w-full max-w-6xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((contact, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="text-2xl mr-3">{contact.icon}</div>
                                <h3 className="text-white font-semibold">{contact.title}</h3>
                            </div>
                            {contact.details.map((detail, i) => (
                                <p key={i} className="text-gray-200 text-sm mb-1">{detail}</p>
                            ))}
                            <p className="text-gray-400 text-xs mt-2">{contact.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Section */}
            <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8'>
                {/* Contact Form */}
                <div className='flex-1 p-6'>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='name'>
                                        Full Name *
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder='Enter your full name'
                                        className='w-full px-4 py-3 bg-white/5 border border-gray-300/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='email'>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className='w-full px-4 py-3 bg-white/5 border border-gray-300/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='phone'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder='+254 700 123 456'
                                        className='w-full px-4 py-3 bg-white/5 border border-gray-300/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='subject'>
                                        Subject *
                                    </label>
                                    <select
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-gray-300/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="booking">Booking Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-200 mb-2' htmlFor='message'>
                                    Message *
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us how we can help you..."
                                    rows={5}
                                    className='w-full px-4 py-3 bg-white/5 border border-gray-300/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaEnvelope className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sidebar with Additional Info */}
                <div className='flex-1 p-6 space-y-8'>
                    {/* Image */}
                    <div className='hidden lg:block'>
                        <img src={interior} alt="Contact Us" className='w-full h-64 rounded-2xl shadow-lg object-cover' />
                    </div>

                    {/* Alternative Contact Methods */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Alternative Ways to Reach Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaWhatsapp className="text-green-500 text-xl" />
                                <div>
                                    <div className="text-white font-medium">WhatsApp</div>
                                    <div className="text-gray-300 text-sm">+254 700 123 456</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaHeadset className="text-blue-500 text-xl" />
                                <div>
                                    <div className="text-white font-medium">Live Chat</div>
                                    <div className="text-gray-300 text-sm">Available on our website</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-red-500 text-xl" />
                                <div>
                                    <div className="text-white font-medium">Emergency Hotline</div>
                                    <div className="text-gray-300 text-sm">+254 711 HELP (4357)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                                <FaFacebook className="text-white text-xl" />
                            </a>
                            <a href="#" className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500 transition-colors">
                                <FaTwitter className="text-white text-xl" />
                            </a>
                            <a href="#" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                                <FaInstagram className="text-white text-xl" />
                            </a>
                            <a href="#" className="bg-blue-700 p-3 rounded-lg hover:bg-blue-800 transition-colors">
                                <FaLinkedin className="text-white text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full max-w-6xl mx-auto mt-16 mb-8">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqItems.map((faq, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="flex items-start space-x-3">
                                <FaQuestionCircle className="text-blue-400 text-lg mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="w-full max-w-4xl mx-auto mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-200 mb-6">
                    Don't wait! Book your perfect ride today and experience the ShikaRide difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Book Now
                    </button>
                    <button className="bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors font-medium">
                        View Our Fleet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact