import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    { src: "./images/slideImage1.jpg", title: "Bugatti Residences by Binghatti", buttonText: "Discover the Collection" },
    { src: "./images/slideImage2.jpg", title: "Bugatti Residences by Binghatti", buttonText: "Discover the Collection" },
    { src: "./images/slideImage3.jpg", title: "Bugatti Residences by Binghatti", buttonText: "Discover the Collection" },
];

const SliderImage = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Image Slides */}
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full"
                >
                    <img
                        src={images[current].src}
                        alt={images[current].title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-transparent bg-opacity-30 flex flex-col items-center justify-center text-white">
                        <h2 className="text-4xl font-bold mb-4">{images[current].title}</h2>
                        <button
                            className="bg-transparent backdrop-blur-md bg-white/10 px-6 py-3 rounded text-2xl font-semibold hover:bg-white/40 transition-opacity duration-500 opacity-100 absolute bottom-8"
                        >
                            {images[current].buttonText}
                        </button>

                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Left Arrow - Hidden on First Slide */}
            {current !== 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-30 top-1/2 transform -translate-y-1/2 text-white text-8xl font-thin"
                >
                    ‹
                </button>
            )}

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-30 top-1/2 transform -translate-y-1/2 text-white text-8xl font-thin"
            >
                ›
            </button>
        </div>
    );
};

export default SliderImage;
