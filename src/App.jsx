import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Root from "./Layout/Root";
import Course from "./Page/Courses/Course";
import Events from "./Page/Events/Events";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import SingleCourse from "./Page/Single Course/SingleCourse";
import OurTeam from "./Page/Our Team/OurTeam";
import Certification from "./Page/Certification/Certification";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Course></Course>}></Route>
          {/* <Route path="events" element={<Events></Events>}></Route> */}
          <Route path="about" element={<About></About>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="/courses/:id" element={<SingleCourse />} />
          {/* <Route path="our-team" element={<OurTeam></OurTeam>}></Route> */}
          {/* <Route path="certification" element={<Certification />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
