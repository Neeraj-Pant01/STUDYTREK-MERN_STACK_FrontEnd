import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiBookOpen, FiCheckCircle } from 'react-icons/fi';

const Buy = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  // Dummy course data since API is not working
  const dummyCourse = {
    name: 'Mastering React with Hooks',
    desc: 'A modern guide to React development using functional components and hooks.',
    price: 999,
    picture: 'https://cdn.shopaccino.com/igmguru/products/react-js-training-igmguru_1474547454_l.jpg?v=531',
    features: [
      '📚 Comprehensive Learning Material',
      '📆 Weekly Test Series',
      '👨‍🏫 Live Recorded Lectures',
      '🚀 Guidance from Experts',
      '🧐 Interview-Ready',
    ],
  };

  useEffect(() => {
    window.scrollTo(0,0)
    const getTheCourse = async () => {
      setLoading(true);
      try {
        // Simulate API call with dummy data
        setTimeout(() => {
          setCourse(dummyCourse);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getTheCourse();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
              </div>
              <p className="text-gray-900 text-lg font-medium">Loading Course Details...</p>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {course?.name}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Course Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={course?.picture}
                  alt={course?.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#f1bb65] to-[#f2884a] p-4 opacity-90">
                  <p className="text-white text-lg font-semibold">
                    Special Offer: ₹{course?.price}.00{' '}
                    <span className="line-through text-gray-300">₹{course?.price + 500}.00</span>
                  </p>
                </div>
              </div>

              {/* Right: Course Details */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-600 mb-6">{course?.desc}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Get</h3>
                  <ul className="space-y-3">
                    {course?.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <FiCheckCircle className="text-green-500" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  Join us today and unlock a world of endless learning opportunities!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                    Pay ₹{course?.price}.00
                  </button>
                  <Link
                    to="/courses"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    <FiBookOpen size={20} />
                    Explore Other Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;