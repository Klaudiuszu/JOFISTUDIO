import { useState } from 'react';
import slideDot from '../../public/images/slideDot.png';
import slideDotActive from '../../public/images/slideDotActive.png';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        "/images/slide1.jpg",
        "/images/slide2.jpg",
        "/images/slide3.jpg",
        "/images/slide4.jpg",
        "/images/slide5.jpg",
        "/images/slide6.jpg",
    ];

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="gallery" className="relative w-full h-screen xl:h-[1080px]" data-carousel="slide">
            <div className="relative h-full overflow-hidden">
                {items.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute transition-opacity duration-700 h-full w-full ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        data-carousel-item={index === activeIndex ? "active" : undefined}
                    >
                        <img
                            src={src}
                            className="w-full h-full object-cover object-center"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-[24px] relative bottom-[32px]">
                    {items.map((_, i) => (
                        <img
                            key={i}
                            src={i === activeIndex ? slideDotActive.src : slideDot.src}
                            alt={`Dot ${i + 1}`}
                            className="cursor-pointer "
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            </div>
            <div className='relative bottom-1/2 max-w-[1715px] left-1/2 pt-4 translate-x-[-50%]'>
                <button
                    type="button"
                    className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                >
                    <span className="inline-flex items-center justify-center md:w-[58px] w-10 h-10 md:h-[58px] rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1020 1020"
                            className="md:w-[45px] w-6 h-6 md:h-[45px]"
                            fill="currentColor"
                        >
                            <path d="m657.61,952.82L67.18,510,657.61,67.18l221.41,221.41S214.78,362.39,214.78,510s656.48,217.04,664.24,221.41c7.76,4.37-221.41,221.41-221.41,221.41Z" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>

                </button>
                <button
                    type="button"
                    className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                >
                    <span className="inline-flex items-center justify-center md:w-[58px] w-10 h-10 md:h-[58px] rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1020 1020"
                            className="md:w-[45px] w-6 h-6 md:h-[45px]"
                            fill="currentColor"
                            style={{ transform: 'rotate(180deg)' }}
                        >
                            <path d="m657.61,952.82L67.18,510,657.61,67.18l221.41,221.41S214.78,362.39,214.78,510s656.48,217.04,664.24,221.41c7.76,4.37-221.41,221.41-221.41,221.41Z" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>

                </button>
            </div>
        </div>
    );
};

export default Carousel;
