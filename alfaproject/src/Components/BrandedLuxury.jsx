import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandedLuxuryVideo from "../../public/videos/BrandedLuxuryVideo.mp4"

const images = [
    { src: "./images/luxury1.png", title: "THE MERCEDES-BENZ UHLENHAUT COUPÉ PENTHOUSE" },
    { src: "./images/luxury2.png", title: "THE SKY MANSION PENTHOUSE" },
    { src: "./images/luxury3.png", title: "THE RUBY VILLA" },
    { src: "./images/luxury4.png", title: "THE SKY MANSION PENTHOUSE" },
];

const BrandedLuxury = () => {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={BrandedLuxuryVideo}
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-start pt-10 text-white">
                {/* Top Heading */}
                <h1 className="text-4xl font-normal mb-20">BRANDED LUXURY <span className="font-thin">COLLECTION</span></h1>

                {/* Center Slider Box */}
                <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-8 w-[900px] h-[450px] flex flex-col items-center justify-center overflow-hidden">

                    {/* Background Image with Zoom Animation */}
                    <AnimatePresence>
                        <motion.img
                            key={current}
                            src={images[current].src}
                            alt={images[current].title}
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            exit={{ scale: 1 }}
                            transition={{ duration: 5, ease: "easeInOut" }}
                            className="absolute w-[900px] h-[500px] object-cover"
                        />
                    </AnimatePresence>

                    {/* Dots Navigation */}
                    <div className="flex space-x-3">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`absolute bottom-10 w-3 h-3 bg-white rounded-full border ${index === current ? "bg-white border-white" : "bg-gray-500 border-transparent"} cursor-pointer transition-all duration-300`}
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                </div>
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-60 bottom-1/2 text-white text-8xl font-thin hover:text-gray-400"
                >
                    ‹
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-60 bottom-1/2 text-white text-8xl font-thin hover:text-gray-400"
                >
                    ›
                </button>

                <h2 className="text-xl font-bold mt-10">{images[current].title}</h2>

                <h2 className="text-lg font-normal mt-2">MERCEDES-BENZ PLACES | BINGHATTI</h2>

            </div>

        </div>
    );
}

export default BrandedLuxury;
