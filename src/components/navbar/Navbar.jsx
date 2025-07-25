import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSearch, FiBell, FiMessageSquare, FiMenu, FiX, FiLogOut, FiBookOpen, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logout = () => {
    localStorage.clear();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] shadow-lg">
      <div className=" w-[100%] px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/mainlogo.png" alt="logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
          <span className="text-xl text-purple-600 font-bold hidden md:block">EduTech</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden w-[100px] lg:flex flex-1 mx-8 relative group">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md transition-all duration-300 group-hover:shadow-lg">
            <FiSearch className="text-gray-600 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/courses"
            className="relative text-purple-600 font-bold text-base group"
          >
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
          </Link>
          <button
            onClick={() => navigate('/yourcourse')}
            className="relative text-purple-600 font-bold text-base group"
          >
            Your Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
          </button>
          <Link
            to="/blogs"
            className="relative text-purple-600 font-bold text-base group"
          >
            Blogs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex  ml-5 items-center gap-4">
          <button className="relative text-gray-900 hover:text-blue-600 transition-colors duration-300">
            <FiBell size={22} />
            {user && (
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse" />
            )}
          </button>
          <button className="relative text-gray-900 hover:text-blue-600 transition-colors duration-300">
            <FiMessageSquare size={22} />
          </button>
          <div className="relative group">
            <button className="flex items-center gap-2">
              <img
                src={user?.avatar || '/assets/noavatar.png'}
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover border-2 border-gradient-to-br from-[#f1bb65] to-[#f2884a] transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <div className="py-2">
                <p className="px-4 py-2 text-gray-700 font-medium">{user?.username || 'Guest'}</p>
                {user && (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:text-white transition-colors duration-300"
                    >
                      <FiUser size={18} />
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:text-white transition-colors duration-300 w-full text-left"
                    >
                      <FiLogOut size={18} />
                      Logout
                    </button>
                  </>
                )}
                {!user && (
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#f1bb65] to-[#f2884a] hover:text-white transition-colors duration-300"
                  >
                    <FiUser />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          <button
            className="md:hidden text-gray-900 hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-[#f1bb65] to-[#f2884a] px-6 py-8 shadow-lg animate-slide-down">
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <FiSearch className="text-gray-600 mr-2" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
              />
            </div>
            <Link
              to="/courses"
              className="text-white font-medium text-lg hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <button
              onClick={() => {
                navigate('/yourcourse');
                setIsMenuOpen(false);
              }}
              className="text-white font-medium text-lg hover:text-blue-300 text-left transition-colors duration-300"
            >
              Your Courses
            </button>
            <Link
              to="/blogs"
              className="text-white font-medium text-lg hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-white font-medium text-lg hover:text-blue-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="text-white font-medium text-lg hover:text-red-300 text-left transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white font-medium text-lg hover:text-blue-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;