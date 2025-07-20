import { useLocation, Link } from 'react-router-dom';
import { FiAlertCircle, FiArrowLeft, FiBookOpen, FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const InterviewQues = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Simulate loading for interview questions data
  useEffect(() => {
    window.scrollTo(0,0)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Interview Questions
        </h1>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] opacity-30"></div>
              </div>
              <p className="text-gray-900 text-lg font-medium">Loading Interview Questions...</p>
            </div>
          </div>
        ) : location.state?.interviewQuestions ? (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <img
              src={location.state.picture}
              alt={location.state.name || 'Interview Questions'}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {location.state.name || 'Interview Questions'}
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Prepare for your next interview with our curated set of questions designed to help you succeed.
              </p>
              <a
                href={location.state.interviewQuestions}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FiExternalLink size={20} />
                Visit Interview Questions
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Interview Questions Available</h2>
            <p className="text-gray-600 text-center mb-6">
              It looks like there are no interview questions available for this course. Return to the course or explore other courses.
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

export default InterviewQues;