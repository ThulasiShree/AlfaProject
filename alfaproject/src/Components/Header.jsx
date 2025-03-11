import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBars, FaTimes, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaSnapchatGhost, FaPhone, FaWhatsapp, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeadVideo from "../../public/videos/HeadVideo.mp4";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSidebar = () => {
        if (!isSidebarOpen) setIsSearchOpen(false);
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSearch = () => {
        if (!isSearchOpen) setIsSidebarOpen(false);
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={HeadVideo}
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>

            {/* Navbar */}
            <nav className="w-full fixed top-10 left-0 flex items-center justify-between px-20 py-4 bg-transparent z-50">
                {/* Logo */}
                <div className="xl:text-4xl md:text-2xl sm:text-xl font-normal text-white relative z-100">
                    MyLogo
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-8">
                    <FaSearch onClick={toggleSearch} className={`xl:text-4xl md:text-2xl sm:text-xl font-thin text-white cursor-pointer hover:scale-110 transition-transform`} />

                    {/* Toggle Hamburger and Close Icons */}
                    {isSidebarOpen ? (
                        <FaTimes onClick={toggleSidebar} className="xl:text-4xl md:text-2xl sm:text-xl font-thin text-white cursor-pointer hover:scale-110 transition-transform" />
                    ) : (
                        <FaBars onClick={toggleSidebar} className="xl:text-4xl md:text-2xl sm:text-xl font-thin text-white cursor-pointer hover:scale-110 transition-transform" />
                    )}
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-1/2 bg-transporent text-gray shadow-lg z-50 transform ${isSidebarOpen ? 'backdrop-blur-md translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
                {/* ... (sidebar content remains the same) */}
                <div className="xl:text-4xl md:text-2xl sm:text-xl font-normal text-white mt-14 ml-20">
                    MyLogo
                </div>
                <ul className="flex flex-col mt-5 sm:mt-3 sm:p-2  space-y-4 p-4 text-right">
                    {[
                        { to: "/home", label: "HOME" },
                        { to: "/brand", label: "THE BRAND" },
                        { to: "/residences", label: "BUGATTI RESIDENCES" },
                        { to: "/luxurycollection", label: "BRANDED LUXURY COLLECTION" },
                        { to: "/collections", label: "COLLECTIONS" },
                        { to: "/newreleases", label: "NEW RELEASES" },
                        { to: "/searchproperties", label: "SEARCH PROPERTIES" },
                        { to: "/events", label: "EVENTS" },
                        { to: "/newsmedia", label: "NEWS & MEDIA" },
                        { to: "/findboutique", label: "FIND A BOUTIQUE" },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                className="xl:text-xl md:text-lg sm:text-base font-semibold text-gray-400 hover:text-white"
                                onClick={toggleSidebar}
                            >
                                <motion.span
                                    initial={{ x: '0%' }}
                                    whileHover={{ x: '-2%' }}
                                    transition={{ type: 'tween', stiffness: 300 }}
                                    className="block whitespace"
                                >
                                    {item.label}
                                </motion.span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center space-x-10 mt-6">
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

            {/* Search Box */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5 }}
                        className={`fixed top-0 left-0 w-full h-1/2 bg-transporent space-y-20 pt-20 shadow-lg z-50 flex flex-col items-center justify-center transform ${isSearchOpen ? 'backdrop-blur-md translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
                    >
                        <div className="text-5xl text-white font-bold">Exquisite Development</div>
                        <div className="flex space-x-8 text-2xl text-white font-semibold">
                            <Link to="/branded-luxury" className="hover:text-gray-600">Branded Luxury</Link>
                            <div className="border-l h-9"></div>
                            <Link to="/luxury" className="hover:text-gray-600">Luxury</Link>
                            <div className="border-l h-9"></div>
                            <Link to="/premium" className="hover:text-gray-600">Premium</Link>
                        </div>
                        <FaTimes onClick={toggleSearch} className="absolute xl:text-2xl md:text-xl sm:text-base top-15 right-30 w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Right Bottom Buttons */}
            <div className="fixed bottom-10 right-0 flex flex-col xl:text-2xl md:text-xl sm:text-base space-y-5 z-50 overflow-hidden">
                {[
                    { icon: <FaPhone />, label: "Phone" },
                    { icon: <FaWhatsapp />, label: "WhatsApp" },
                    { icon: <FaVideo />, label: "Video" },
                ].map((btn, index) => (
                    <motion.button
                        key={index}
                        initial={{ scale: 1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center justify-center w-20 h-12 bg-transporent border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-full text-white shadow-md transition-all duration-300"
                    >
                        {btn.icon}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}