import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiBookOpen, FiLogOut, FiEdit, FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for profile data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150?text=Profile',
    enrolledCourses: [
      {
        id: 1,
        title: 'Mastering React with Hooks',
        description: 'Learn React from scratch with modern hooks and state management.',
        thumbnail: 'https://via.placeholder.com/300x200?text=React+Course',
      },
      {
        id: 2,
        title: 'Data Structures & Algorithms',
        description: 'Master DSA concepts with hands-on coding exercises.',
        thumbnail: 'https://via.placeholder.com/300x200?text=DSA+Course',
      },
    ],
  };

  // Placeholder logout handler
  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement actual logout logic (e.g., clear auth token, redirect to login)
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e6d1ff] to-[#a3d4ff] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Your Profile
        </h1>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
              </div>
              <p className="text-gray-900 text-lg font-medium">Loading Profile...</p>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* User Info Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{user.name}</h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <FiMail className="text-gray-600" size={20} />
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      <FiEdit size={20} />
                      Edit Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      <FiLogOut size={20} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Enrolled Courses</h3>
              {user.enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {user.enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="group bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {course.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                        <Link
                          to={`/course/${course.id}`}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 text-center"
                        >
                          View Course
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <FiAlertCircle className="text-red-500 text-6xl mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No Enrolled Courses</h4>
                  <p className="text-gray-600 text-center mb-6">
                    You haven’t enrolled in any courses yet. Explore our courses to get started!
                  </p>
                  <Link
                    to="/courses"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    <FiBookOpen size={20} />
                    Explore Courses
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;