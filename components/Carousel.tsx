import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const images = [
    '/images/carousel-1.png',
    '/images/carousel-2.png',
    '/images/carousel-3.png',
    '/images/carousel-4.png',
    '/images/carousel-5.png',
    '/images/carousel-6.jpg',
    '/images/carousel-7.jpg',
    '/images/carousel-8.jpg',
    '/images/carousel-9.jpg',
    '/images/carousel-10.png',
    '/images/carousel-11.jpg',
    '/images/carousel-12.jpg',
    '/images/carousel-13.jpg',
    '/images/carousel-14.jpg',
    '/images/carousel-15.jpg',
    '/images/carousel-16.jpg',
    '/images/carousel-17.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Rotate every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className='w-full h-screen pt-52'>
            <div className='h-[172px] w-[350px] md:h-[350px] md:w-[700px] lg:h-[600px] lg:w-[1200px] m-auto relative group'>
                <div
                    style={{backgroundImage: `url(${images[currentIndex]})`}}
                    className='w-full h-full rounded bg-cover bg-center shadow-lg hover:scale-95 ease-in duration-500'
                >
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-8 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/30 text-white hover:scale-110 ease-in duration-300 cursor-pointer'>
                        <BsChevronCompactLeft
                            size={30}
                            onClick={prevSlide} />
                    </div>
                    <div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-[-32px] text-2xl rounded-full p-2 bg-black/30 text-white hover:scale-110 ease-in duration-300 cursor-pointer'>
                        <BsChevronCompactRight
                            size={30}
                            onClick={nextSlide} />
                    </div>
                </div>
                <div className=' flex top-4 justify-center py-2'>
                    {images.map((slide, slideIndex) => {
                        return <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-xs md:text-xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    })}
                </div>
            </div>
        </div>
        // <div className="relative max-w-screen w-full mt-8 bg-red-500">
        //     <div className="overflow-hidden">
        //         <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        //             {images.map((image, index) => (
        //                 <div key={index} className="w-full flex-shrink-0">
        //                     <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Carousel;