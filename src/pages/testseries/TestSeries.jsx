import { Link, useLocation } from 'react-router-dom';
import { FiAlertCircle, FiArrowLeft, FiBookOpen } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const TestSeries = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Simulate loading for test series data
  useEffect(() => {

    window.scrollTo(0,0)
    // Simulate API delay or data processing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Sample test series data if provided in location.state
  const testSeries = location.state?.testSeries
    ? location.state.testSeries.split(', ').map((test, index) => ({
        id: index + 1,
        title: test,
        description: `Practice test ${index + 1} to reinforce your learning.`,
        duration: '60 mins',
        questions: 20 + index * 5,
      }))
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Test Series
        </h1>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
              </div>
              <p className="text-gray-900 text-lg font-medium">Loading Test Series...</p>
            </div>
          </div>
        ) : testSeries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testSeries.map((test) => (
              <div
                key={test.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {test.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{test.description}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Duration:</span> {test.duration}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Questions:</span> {test.questions}
                    </p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300">
                    Start Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Test Series Available</h2>
            <p className="text-gray-600 text-center mb-6">
              It looks like there are no tests available for this course. Explore other courses or return to the course page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/course/${location?.state?._id}`}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FiArrowLeft size={20} />
                Back to Course
              </Link>
              <Link
                to="/courses"
                className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FiBookOpen size={20} />
                View Other Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestSeries;