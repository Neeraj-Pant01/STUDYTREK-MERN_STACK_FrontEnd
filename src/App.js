import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/home/Homepage";
import SingleCourse from "./pages/singleCourse/SingleCourse";
import TestSeries from "./pages/testseries/TestSeries";
import InterviewQues from "./components/interviewQues/InterviewQues";
import VideoLectures from "./components/videoLectures/VideoLectures";
import Buy from "./pages/buy/Buy";
import Courses from "./components/courses/Courses";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
