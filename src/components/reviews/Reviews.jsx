import { useRef, useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Review from './Review';
import { revData } from '../../data';

const Reviews = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling] = useState(true);

  // Scroll left or right
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll distance
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Auto-scrolling functionality
  useEffect(() => {
    if (isAutoScrolling) {
      const intervalId = setInterval(() => {
        scroll('right'); // Auto scroll right every 5 seconds
      }, 5000); // 5 seconds interval

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [isAutoScrolling]);

  return (
    <div className="min-h-[50vh] bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className=" md:w-[90%] mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Hear From Our Students
        </h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white p-3 rounded-full shadow-md z-10 hidden md:block"
          >
            <FiArrowLeft size={24} />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-hidden scroll-smooth snap-x snap-mandatory gap-6 pb-4"
          >
            {revData.map((r, i) => (
              <Review key={i} r={r} />
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white p-3 rounded-full shadow-md z-10 hidden md:block"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
