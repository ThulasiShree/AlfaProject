import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
    '/images/slideImage1.jpg',
    '/images/slideImage2.jpg',
    '/images/slideImage3.jpg',
    '/images/slideImage1.jpg',
    '/images/slideImage2.jpg',
    '/images/slideImage3.jpg',
    '/images/slideImage1.jpg',
];

const sliderImages = [
    '/images/discover1.png',
    '/images/discover2.png',
    '/images/discover3.png',
    '/images/discover4.png',
    '/images/discover5.png',
    '/images/discover3.png',
    '/images/discover7.png',
];

const slideContent = [
    { text: 'Discover the world with us.', buttonLabel: 'Learn More' },
    { text: 'Experience the adventure.', buttonLabel: 'Join Now' },
    { text: 'Unleash your potential.', buttonLabel: 'Get Started' },
    { text: 'Explore new horizons.', buttonLabel: 'See More' },
    { text: 'Embrace the journey.', buttonLabel: 'Sign Up' },
    { text: 'Find your path.', buttonLabel: 'Discover' },
    { text: 'Achieve your dreams.', buttonLabel: 'Start Today' },
];

export default function Discover() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const totalSlides = sliderImages.length;

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '50%' : '-50%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? '-50%' : '50%',
            opacity: 0,
        }),
    };

    const bgVariants = {
        enter: (direction) => ({
            y: direction > 0 ? '50%' : '-50%',
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            y: direction > 0 ? '-50%' : '50%',
            opacity: 0,
        }),
    };

    const textVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) =>
            (prevIndex + newDirection + totalSlides) % totalSlides
        );
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-[90]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={bgVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${backgroundImages[currentIndex]})`,
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Slider Box in Bottom Right */}
            <div className="absolute bottom-40 right-35 w-150 h-100 bg-transparent rounded overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={currentIndex}
                        src={sliderImages[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover rounded"
                    />
                </AnimatePresence>
            </div>

            {/* Text and Button on Left Side */}
            <div className="flex flex-col justify-center items-center relative p-10 my-50 mx-20 w-[500px] h-[300px] overflow-hidden space-y-20">
                <div className="relative transform -translate-y-1/2 text-white">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={textVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h1 className="text-3xl font-normal">
                                {slideContent[currentIndex].text}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="relative transform -translate-y-1/2 text-white">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={textVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <button className="px-6 py-2 bg-transparent border hover:bg-gray-400 rounded">
                                {slideContent[currentIndex].buttonLabel}
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => paginate(-1)}
                className="absolute top-1/2 left-170 transform -translate-y-1/2 text-white p-2"
            >
                <FaChevronLeft className="text-5xl font-thin hover:text-gray-500" />
            </button>

            <button
                onClick={() => paginate(1)}
                className="absolute top-1/2 right-20 transform -translate-y-1/2 text-white p-2"
            >
                <FaChevronRight className="text-5xl font-thin hover:text-gray-500" />
            </button>
        </div>
    );
}