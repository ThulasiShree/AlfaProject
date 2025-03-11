import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaSnapchatGhost } from 'react-icons/fa';


const Contactus = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${isLoaded ? 'scale-100' : 'scale-150'
                    }`}
                style={{ backgroundImage: "url('../../public/images/luxury1.png')" }}
            ></div>

            {/* Overlay for darkening the background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Centered Welcome Content */}
            <div
                className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <h1 className="text-4xl font-bold">Welcome to Our Contact Page</h1>
            </div>

            {/* Split Screen Sections */}
            <div className="absolute inset-0 flex">
                {/* Left Section */}
                <div
                    className={`w-1/2 bg-black text-white flex items-start flex-col py-50 px-20 p-8 transition-transform duration-1000 ${isLoaded ? 'slide-in-left' : 'slide-out-left'
                        }`}
                >
                    <h2 className="text-3xl font-normal mb-8">Get in Touch</h2>
                    <ul className="mb-8">
                        <li className="mb-5">
                            <a href="#" className="flex items-center text-lg hover:px-2 hover:text-gray-400">
                                Our Services <span className="ml-2 hover:px-2">&gt;</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-lg hover:px-2 hover:text-gray-400">
                                Support <span className="ml-2 hover:px-2">&gt;</span>
                            </a>
                        </li>
                    </ul>
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-5 mt-6">
                        {[
                            { href: "https://instagram.com", icon: <FaInstagram /> },
                            { href: "https://facebook.com", icon: <FaFacebookF /> },
                            { href: "https://youtube.com", icon: <FaYoutube /> },
                            { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
                            { href: "https://snapchat.com", icon: <FaSnapchatGhost /> },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black border-2 border-white text-white rounded-full p-3 w-12 h-12 flex items-center justify-center text-xl transition-transform duration-300 hover:scale-110 hover:outline hover:outline-4 hover:outline-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className={`w-1/2 bg-transparent text-white flex items-center justify-center p-8 transition-transform duration-1000 ${isLoaded ? 'slide-in-right' : 'slide-out-right'
                        }`}
                >
                    <form className="w-full max-w-md bg-transparent bg-opacity-50 p-8 rounded-lg shadow-lg">
                        <div className="mb-8">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="w-full border-b focus:outline-none px-3 py-2 rounded text-white"
                                type="text"
                                id="name"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="mobile"
                            >
                                Mobile Number
                            </label>
                            <input
                                className="w-full border-b focus:outline-none px-3 py-2 rounded text-white"
                                type="tel"
                                id="mobile"
                                placeholder="Your Mobile Number"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="w-full border-b focus:outline-none px-3 py-2 rounded text-white"
                                type="email"
                                id="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-white">
                                    Accept Terms and Conditions
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-white">Subscribe to Newsletter</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-transparent border text-white py-2 px-4 rounded hover:bg-gray-400 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* CSS for animations */}
            <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .slide-in-left {
          animation: slideInLeft 1s forwards;
        }

        .slide-out-left {
          animation: slideOutLeft 1s forwards;
        }

        .slide-in-right {
          animation: slideInRight 1s forwards;
        }

        .slide-out-right {
          animation: slideOutRight 1s forwards;
        }
      `}</style>
        </div>
    );
};

export default Contactus;

