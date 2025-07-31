import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeApiRequest } from '../../utils/apiRequest';
import { FiAlertCircle } from 'react-icons/fi';
import Course from '../course/Course';
// import Course from '../course/Course';

const dummyCourses = [
  {
    _id: '1',
    name: 'Mastering React with Hooks',
    desc: 'A modern guide to React development using functional components and hooks.',
    price: 999,
    picture: 'https://cdn.shopaccino.com/igmguru/products/react-js-training-igmguru_1474547454_l.jpg?v=531',
    stars: 4.8,
    totalStars: 150,
    notes: 'PDFs included',
    lectures: '25',
    testSeries: '10 quizzes',
    features: 'Real-world projects, live mentoring',
  },
  {
    _id: '2',
    name: 'Complete Python for Beginners',
    desc: 'From syntax to real-world applications. Perfect for absolute beginners.',
    price: 799,
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLQuW_eo9vdILXV6fxWcG7-EtOrY5C_O1qw&s',
    stars: 4.6,
    totalStars: 120,
    notes: '100+ pages',
    lectures: '40',
    testSeries: '12 challenges',
    features: 'Assignments, Doubt clearing sessions',
  },
  {
    _id: '3',
    name: 'DSA in Java - Crack Interviews',
    desc: 'Covers Arrays, Trees, Graphs, and Recursion with interview problems.',
    price: 1299,
    picture: 'https://media.geeksforgeeks.org/wp-content/uploads/20221216123805/Top-Data-Structures-and-Algorithms-Courses-for-Java-Developers.png',
    stars: 4.9,
    totalStars: 200,
    notes: 'Complete handbook',
    lectures: '60',
    testSeries: '20 tests',
    features: 'Mock interviews, Resume review',
  },
];

const Courses = () => {
  const [err, setErr] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.user?.currentUser?.token);

  useEffect(() => {
    const getAllCourses = async () => {
      setLoading(true);
      const api = makeApiRequest(token);
      try {
        // const response = await api.get(`/api/v1/courses/all`);
        setCourses(dummyCourses);
        setLoading(false);
      } catch (err) {
        setErr(true);
        console.log(err);
        setLoading(false);
      }
    };
    getAllCourses();
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className=" mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center  text-gray-600">
          Explore Our Courses
        </h1>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
              </div>
              <p className="text-gray-900 text-lg font-medium">Loading Courses...</p>
            </div>
          </div>
        ) : err ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Oops! Something Went Wrong</h2>
            <p className="text-gray-600 text-center mb-6">We couldn't load the courses. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                  <Course c={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;