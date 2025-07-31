import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/home/Homepage";
import SingleCourse from "./pages/singleCourse/SingleCourse";
import TestSeries from "./pages/testseries/TestSeries";
import InterviewQues from "./components/interviewQues/InterviewQues";
import VideoLectures from "./components/videoLectures/VideoLectures";
import Buy from "./pages/buy/Buy";
import Courses from "./components/courses/Courses";
import Blogs from "./pages/blogs/Blogs";
import Notes from "./pages/notes/Notes";
import ApplicationForm from "./pages/applicationform/ApplicationForm";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import Blog from "./pages/blog/Blog";
import YourCourses from "./pages/yourCourses/YourCourses";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResult";

function App() {
  // const user = useSelector((state)=>state.user.currentUser)
  const user = true
  // console.log("user", user)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course/:id" element={<SingleCourse />} />
        <Route path="/testseries" element={<TestSeries />} />
        <Route path="/interview-questions" element={<InterviewQues />} />
        <Route path="/lectures" element={<VideoLectures />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/user/profile/:id" element={<Profile />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/applicationform" element={user ?<ApplicationForm  /> : <Navigate to={'/'} />} />
        <Route path="/yourcourse" element={<YourCourses />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
