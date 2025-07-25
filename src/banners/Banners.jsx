import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiVideo, FiUser } from 'react-icons/fi';

const Banners = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Dummy banner data
  const banners = [
    {
      id: 1,
      title: 'Master New Skills with Our Courses',
      description: 'Explore a wide range of courses designed to boost your career, from web development to data science.',
      image: 'https://www.billabonghighschool.com/blogs/wp-content/uploads/2024/02/Primary-Education.jpg',
      ctaText: 'Browse Courses',
      ctaLink: '/courses',
      icon: <FiBookOpen size={24} />,
    },
    {
      id: 2,
      title: 'Learn Anytime with Video Lectures',
      description: 'Access high-quality video lectures on-demand and learn at your own pace.',
      image: 'https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/03/education.png?fit=820%2C820&ssl=1',
      ctaText: 'Watch Now',
      ctaLink: '/video-lectures',
      icon: <FiVideo size={24} />,
    },
    {
      id: 3,
      title: 'Join Our Learning Community',
      description: 'Create your profile, track your progress, and connect with other learners.',
      image: 'https://miro.medium.com/v2/resize:fit:1060/1*YX-M4g7d3mLIzpUf7CSfHA.jpeg',
      ctaText: 'Get Started',
      ctaLink: '/profile',
      icon: <FiUser size={24} />,
    },
  ];

  // Handle carousel navigation
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#e6d1ff] to-[#a3d4ff] py-12">
      <div className="container mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`w-full transition-opacity duration-500 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
            >
              <div className="relative flex flex-col md:flex-row items-center bg-white">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Text and CTA Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg mb-6">{banner.description}</p>
                  <Link
                    to={banner.ctaLink}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    {banner.icon}
                    {banner.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevBanner}
            className="bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white p-2 rounded-full transition duration-200"
          >
            <FiArrowRight className="rotate-180" size={20} />
          </button>
          <button
            onClick={nextBanner}
            className="bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white p-2 rounded-full transition duration-200"
          >
            <FiArrowRight size={20} />
          </button>
        </div>

        {/* Dots for Carousel Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentBanner
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banners;