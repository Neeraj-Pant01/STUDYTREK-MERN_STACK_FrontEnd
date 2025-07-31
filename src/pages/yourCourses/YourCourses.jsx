import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiAlertCircle, FiArrowLeft, FiBookOpen, FiLogIn } from 'react-icons/fi';
import YourCourse from '../../components/YourCourse/YourCourse';

const YourCourses = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [loading, setLoading] = useState(true);
  const [hasCourses, setHasCourses] = useState(false); // Placeholder for course check

  // Simulate loading and course check
  useEffect(() => {
    window.scrollTo(0,0)
    const timer = setTimeout(() => {
      setLoading(false);
      // Simulate checking if user has courses (replace with actual API check)
      setHasCourses(false); // Set to true if YourCourse component returns courses
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-600">
          Your Courses
        </h1>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
              </div>
              <p className="text-gray-900 text-lg font-medium">Loading Your Courses...</p>
            </div>
          </div>
        ) : user ? (
          hasCourses ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <YourCourse />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
              <FiAlertCircle className="text-red-500 text-6xl mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Courses Purchased</h2>
              <p className="text-gray-600 text-center mb-6">
                You haven't purchased any courses yet. Explore our courses to start learning!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  <FiBookOpen size={20} />
                  Explore Courses
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  <FiArrowLeft size={20} />
                  Back to Home
                </Link>
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Please Log In</h2>
            <p className="text-gray-600 text-center mb-6">
              You need to log in to view your purchased courses. Start your learning journey now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FiLogIn size={20} />
                Log In
              </Link>
              <Link
                to="/courses"
                className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FiBookOpen size={20} />
                Explore Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourCourses;