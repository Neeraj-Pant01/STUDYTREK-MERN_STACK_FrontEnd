import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiAlertCircle, FiBookOpen } from 'react-icons/fi';
import CustomLoader from '../../components/CustomLoader';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const token = useSelector((state) => state?.user?.currentUser?.token);

  // Dummy blog data with empty picture field
  const dummyBlog = {
    _id: id,
    title: 'Mastering JavaScript in 2025',
    desc: 'JavaScript continues to evolve, and 2025 is set to bring exciting new features and best practices. In this blog, we dive deep into the latest updates, including advanced ES modules, enhanced async/await patterns, and modern frameworks like React and Vue. Learn how to leverage these tools to build scalable, high-performance web applications. Whether you’re a beginner or a seasoned developer, this guide offers practical tips, code examples, and resources to elevate your JavaScript skills.',
    picture: 'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=',
  };

  useEffect(() => {
    const getTheSingleBlog = async () => {
      setLoading(true);
      try {
        // Simulate API call with dummy data
        setTimeout(() => {
          setBlog(dummyBlog);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getTheSingleBlog();
  }, [id, token]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f6f2fa] to-[#dceefe] py-12">
      <div className="container mx-auto px-4">
        {loading ? (
          <CustomLoader loading='Loading blog...' />
        ) : blog ? (
          <div className=" mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={blog.picture || 'https://via.placeholder.com/800x400?text=Blog+Image'}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">{blog.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/blogs"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  <FiBookOpen size={20} />
                  Back to Blogs
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
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-xl shadow-lg p-8">
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Blog Not Found</h2>
            <p className="text-gray-600 text-center mb-6">
              It looks like this blog is not available. Check out our other blogs or explore our courses!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blogs"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FiBookOpen size={20} />
                Back to Blogs
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

export default Blog;