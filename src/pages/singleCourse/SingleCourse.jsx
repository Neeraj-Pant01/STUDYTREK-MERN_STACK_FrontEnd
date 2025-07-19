import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SingleCourse = () => {
  const user = true
  const [currentCourse, setCurrentCourse] = useState(null);
  const navigate = useNavigate();
  const token = user?.token;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  // Dummy data since API is not working
  const dummyCourse = {
    name: "Java Programming Masterclass",
    price: 499,
    image: "/assets/edu1.jpg",
    description: "Master Java programming with hands-on projects, expert-led video lectures, and comprehensive resources. Perfect for beginners and advanced learners alike!"
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Simulate API call with dummy data
    const getSingleCourse = async () => {
      setLoading(true);
      try {
        // Replace this with actual API call when available
        setTimeout(() => {
          setCurrentCourse(dummyCourse);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getSingleCourse();
  }, [id, token]);

  const handleNotes = () => {
    if (user) {
      navigate("/notes", { state: currentCourse });
    } else {
      navigate("/", { state: { id: "form" } });
    }
  };

  return (
    <div className="min-h-screen  text-gray-900">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-12">
          {/* Course Header */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {currentCourse?.name}
              </h1>
              <p className="text-gray-700 text-lg mb-6">{currentCourse?.description}</p>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handleNotes}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                  <AiOutlineFilePdf size={24} />
                  Download Notes
                </button>
                <Link
                  to={user ? `/buy/${id}` : "/"}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Buy Premium ₹{currentCourse?.price}
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={currentCourse?.image}
                  alt={currentCourse?.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#f1bb65] to-[#f2884a] p-6">
                  <h2 className="text-2xl font-semibold text-white">Special Offer</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xl line-through text-gray-200">₹1499.00</span>
                    <span className="text-2xl font-bold text-yellow-300">
                      ₹{currentCourse?.price}.00
                    </span>
                    <span className="text-green-300">✓ Save 66%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Options */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 hover:bg-gradient-to-br from-[#f1bb65] to-[#f2884a] transition duration-300 shadow-lg">
                <img
                  src="/assets/test.png"
                  alt="Online Test Series"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Online Test Series</h3>
                <p className="text-gray-600 mb-4">
                  Practice with our comprehensive test series to ace your exams.
                </p>
                <Link
                  to={user ? "/testseries" : "/"}
                  state={{ currentCourse }}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  View Tests
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 hover:bg-gradient-to-br from-[#f1bb65] to-[#f2884a] transition duration-300 shadow-lg">
                <img
                  src="/assets/interview.jpg"
                  alt="Interview Questions"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Interview Questions</h3>
                <p className="text-gray-600 mb-4">
                  Prepare with curated questions to excel in interviews.
                </p>
                <div
                  onClick={() =>
                    navigate(user ? "/interview-questions" : "/", {
                      state: currentCourse,
                    })
                  }
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 cursor-pointer"
                >
                  View Questions
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 hover:bg-gradient-to-br from-[#f1bb65] to-[#f2884a] transition duration-300 shadow-lg">
                <img
                  src="/assets/lecture.jpg"
                  alt="Video Lectures"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Video Lectures</h3>
                <p className="text-gray-600 mb-4">
                  Learn from expert-led video content at your own pace.
                </p>
                <div
                  onClick={() =>
                    navigate(user ? "/lectures" : "/", {
                      state:
                        currentCourse || {
                          message: "Buy the course to view the video lectures",
                        },
                    })
                  }
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 cursor-pointer"
                >
                  Watch Now
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Unlock incredible opportunities and supercharge your skills with our exclusive course!
            </p>
            <Link
              to={user ? `/buy/${id}` : "/"}
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCourse;