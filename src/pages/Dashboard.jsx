import { useState, useEffect } from 'react';
import { FiBookOpen, FiEdit, FiTrash2, FiBarChart2, FiPlus, FiAlertCircle } from 'react-icons/fi';

const SellerDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  // Dummy course data
  const dummyCourses = [
    {
      id: 1,
      title: 'Mastering React with Hooks',
      thumbnail: 'https://via.placeholder.com/300x200?text=React+Course',
      price: 49.99,
      enrollments: 120,
      status: 'Published',
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      thumbnail: 'https://via.placeholder.com/300x200?text=DSA+Course',
      price: 59.99,
      enrollments: 85,
      status: 'Published',
    },
    {
      id: 3,
      title: 'Advanced JavaScript',
      thumbnail: 'https://via.placeholder.com/300x200?text=JS+Course',
      price: 39.99,
      enrollments: 30,
      status: 'Draft',
    },
  ];

  // Simulate fetching courses
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCourses(dummyCourses);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Placeholder functions for actions
  const handleListNewCourse = () => {
    console.log('Navigate to list new course page');
    // Replace with navigation to course creation page, e.g., history.push('/seller/courses/new')
  };

  const handleEditCourse = (courseId) => {
    console.log(`Edit course with ID: ${courseId}`);
    // Replace with navigation to edit page, e.g., history.push(`/seller/courses/edit/${courseId}`)
  };

  const handleDeleteCourse = (courseId) => {
    setCourseToDelete(courseId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCourses((prev) => prev.filter((course) => course.id !== courseToDelete));
    setShowDeleteModal(false);
    setCourseToDelete(null);
    console.log(`Deleted course with ID: ${courseToDelete}`);
  };

  const handleViewAnalytics = () => {
    console.log('Navigate to analytics page');
    // Replace with navigation to analytics page, e.g., history.push('/seller/analytics')
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-600">
          Seller Dashboard
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Courses</h3>
            <p className="text-3xl font-bold text-blue-600">{courses.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Enrollments</h3>
            <p className="text-3xl font-bold text-blue-600">
              {courses.reduce((sum, course) => sum + course.enrollments, 0)}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${courses.reduce((sum, course) => sum + course.price * course.enrollments, 0).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleListNewCourse}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            <FiPlus size={20} />
            List New Course
          </button>
        </div>

        {/* Courses Grid */}
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
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiBookOpen className="text-white text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Price: ${course.price.toFixed(2)}</p>
                  <p className="text-gray-600 text-sm mb-2">Enrollments: {course.enrollments}</p>
                  <p className="text-gray-600 text-sm mb-4">Status: {course.status}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditCourse(course.id)}
                      className="flex-1 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
                    >
                      <FiEdit size={16} className="inline mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
                    >
                      <FiTrash2 size={16} className="inline mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Courses Listed</h2>
            <p className="text-gray-600 text-center mb-6">
              You haven’t listed any courses yet. Start by adding a new course!
            </p>
            <button
              onClick={handleListNewCourse}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              <FiPlus size={20} />
              List New Course
            </button>
          </div>
        )}

        {/* Analytics Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewAnalytics}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            <FiBarChart2 size={20} />
            View Analytics
          </button>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this course? This action cannot be undone.
              </p>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;