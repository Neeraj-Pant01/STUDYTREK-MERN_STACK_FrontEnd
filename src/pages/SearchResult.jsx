import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiSearch, FiBookOpen, FiVideo, FiAlertCircle } from 'react-icons/fi';
import CustomLoader from '../components/CustomLoader';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  // Dummy search results data
  const dummyResults = [
    {
      id: 1,
      type: 'course',
      title: 'Mastering React with Hooks',
      description: 'Learn React from scratch with modern hooks and state management.',
      thumbnail: 'https://via.placeholder.com/300x200?text=React+Course',
      link: '/course/1',
    },
    {
      id: 2,
      type: 'course',
      title: 'Data Structures & Algorithms',
      description: 'Master DSA concepts with hands-on coding exercises.',
      thumbnail: 'https://via.placeholder.com/300x200?text=DSA+Course',
      link: '/course/2',
    },
    {
      id: 3,
      type: 'video',
      title: 'Lecture: Introduction to React',
      description: 'Learn the fundamentals of React, including components and props.',
      thumbnail: 'https://via.placeholder.com/300x200?text=React+Lecture',
      link: '/video-lectures',
    },
    {
      id: 4,
      type: 'video',
      title: 'Lecture: Advanced JavaScript',
      description: 'Dive into advanced JavaScript concepts like closures and async.',
      thumbnail: 'https://via.placeholder.com/300x200?text=JS+Lecture',
      link: '/video-lectures',
    },
  ];

  // Simulate search filtering and loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      // Filter dummy results based on query
      const filteredResults = dummyResults.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
      setResults(filteredResults);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Update URL with new query
    window.history.pushState({}, '', `/search?q=${encodeURIComponent(searchQuery)}`);
    // Trigger re-render with new query
    window.location.search = `?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e6d1ff] to-[#a3d4ff] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Search Results
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-white rounded-lg shadow-lg p-2">
            <FiSearch className="text-gray-600 ml-2" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for courses, lectures, and more..."
              className="w-full p-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
            >
              Search
            </button>
          </form>
        </div>

        {loading ? (
          <CustomLoader />
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'course' ? (
                      <FiBookOpen className="text-white text-4xl" />
                    ) : (
                      <FiVideo className="text-white text-4xl" />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <Link
                    to={item.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition duration-200"
                  >
                    {item.type === 'course' ? 'View Course' : 'Watch Lecture'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Results Found</h2>
            <p className="text-gray-600 text-center mb-6">
              We couldn’t find anything matching "{query}". Try different keywords or explore our courses.
            </p>
            <Link
              to="/courses"
              className="flex items-center gap-2 bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:from-[#f0a540] hover:to-[#f07a3a] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              <FiBookOpen size={20} />
              Explore Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;