import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  RiComputerLine,
  RiExpandLeftRightLine,
  RiLiveLine,
} from "react-icons/ri";
import { MdLiveTv, MdWorkOutline } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import CourseCard from "../../Components/CourseCard";

const SingleCourse = () => {
  const [course, setCourse] = useState(null);
  const [populerCourse, setPopulerCourse] = useState([]);
  const { id } = useParams();

  const iconMap = {
    RiLiveLine: <RiLiveLine />,
    RiExpandLeftRightLine: <RiExpandLeftRightLine />,
    RiComputerLine: <RiComputerLine />,
    MdLiveTv: <MdLiveTv />,
    TfiCup: <TfiCup />,
    MdWorkOutline: <MdWorkOutline />,
  };

  useEffect(() => {
    fetch("/Course-Data/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((course) => course.id == id);
        setCourse(foundCourse);
        setPopulerCourse(data);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <div className="bg-white pb-6">
        <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto relative">
          <div className="w-full lg:w-2/6 lg:absolute top-10 right-0">
            {course && (
              <SingleCourseCard course={course} populerCourse={populerCourse} />
            )}
          </div>
        </div>
        <div>
          {course && (
            <SingleCourseDetails
              course={course}
              populerCourse={populerCourse}
            />
          )}
        </div>
      </div> */}

      <div>
        <div className="bg-white pb-6">
          <div className="space-y-14">
            <div className="py-14">
              <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
                  <div className="space-y-6 w-full lg:w-1/2">
                    <h1 className="text-[#141F51] font-bold outfit text-3xl xl:text-5xl">
                      {course?.title}
                    </h1>
                    <div className="flex gap-3">
                      <div className="py-4 px-6 border border-gray-200 rounded-3xl text-center">
                        <p className="crd text-base lg:text-xl">Duration</p>
                        <p className="text-black font-bold text-lg lg:text-xl">
                          {course?.duration} Month
                        </p>
                      </div>
                      <div className="py-4 px-6 border border-gray-200 rounded-3xl text-center">
                        <p className="crd text-base lg:text-xl">Lectures</p>
                        <p className="text-black font-bold text-lg lg:text-xl">
                          {course?.lectures}
                        </p>
                      </div>
                      <div className="py-4 px-6 border border-gray-200 rounded-3xl text-center">
                        <p className="crd text-base lg:text-xl">Projects</p>
                        <p className="text-black font-bold text-lg lg:text-xl">
                          {course?.totalProject}
                        </p>
                      </div>
                    </div>
                    <p className="crd work text-lg lg:text-2xl leading-8">
                      {course?.details}
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                      <p className="text-xl md:text-3xl text-gray-800 outfit-semibold">
                        Course Fee: {course?.fee}
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 rounded-md py-3 px-7 work tracking-tight text-[21px] text-white cursor-pointer">
                        Enroll Now
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      <div className="cpr flex items-center gap-0.5">
                        <span className="text-lg outfit-semibold">
                          {course?.rating}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) =>
                            i < Math.floor(course?.rating) ? (
                              <FaStar key={i} />
                            ) : i === Math.floor(course?.rating) &&
                              course?.rating % 1 !== 0 ? (
                              <FaStarHalfAlt key={i} />
                            ) : (
                              <FaStar key={i} className="text-gray-300" />
                            )
                          )}
                        </div>
                      </div>
                      <p className="csd text-base lg:text-lg outfit-semibold">
                        (<span className="">{course?.totalRating} </span>
                        ratings)
                      </p>
                      <p className="text-gray-600 text-base lg:text-lg outfit-semibold">
                        {course?.totalStudentsEnroll} students
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 h-full rounded-2xl overflow-hidden">
                    {course ? (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-600">Loading...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 py-14">
              <div className="space-y-10 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
                <h2 className="font-bold csd text-2xl md:text-5xl">
                  Course Overview
                </h2>
                <p className="crd text-lg lg:text-2xl outfit-semibold leading-8">
                  {course?.courseOverview}
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
              <div className="space-y-14 w-full lg:w-2/3">
                <div className="">
                  <div className="">
                    <div className="pb-8 lg:pb-14 space-y-10">
                      <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          What you'll learn
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course?.curriculum.map((item, index) => (
                            <div key={index} className="flex gap-1.5">
                              <FaCheck className="cpr text-base mt-0.5" />
                              <p className="text-md crd">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          This course includes:
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course?.courseIncludes.map((item, index) => (
                            <div key={index} className="flex gap-1.5">
                              {React.cloneElement(iconMap[item.icon], {
                                className: "cpr text-base mt-0.5",
                              })}
                              <p className="text-md crd">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          Software You'll Learn
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {course?.softwareYoullLearn.map((software, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5"
                            >
                              <FaCheck className="cpr text-base" />
                              <p className="text-md crd">{software}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          Open Job Positions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-gray-300 rounded-lg p-6">
                          {course?.jobPositions.map((job, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5"
                            >
                              <div className="w-3 h-3 rounded-full bg-[#f81515]"></div>
                              <p className="crd text-md">{job}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          Description
                        </h2>
                        <p className="text-base md:text-lg crd">
                          {course?.details}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          Instructor
                        </h2>
                        <div className="flex items-center gap-6 rounded-lg">
                          <div className="size-26 rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={course?.instructorImg}
                              alt={course?.instructorName}
                            />
                          </div>
                          <div className="space-y-1 outfit-semibold crd">
                            <h5 className="text-lg md:text-xl">
                              {course?.instructorName}
                            </h5>
                            <p className="text-base md:text-lg">
                              {course?.instructorPosition}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3 lg:sticky lg:top-20 lg:self-start lg:overflow-y-auto">
                <div className="space-y-6">
                  <h3 className="text-[#f81515] text-2xl md:text-5xl outfit-semibold text-center">
                    Popular <span className="crd">Courses</span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    {populerCourse?.slice(0, 2).map((item) => (
                      <CourseCard
                        key={item.id}
                        course={item}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        type={item.type}
                        image={item.image}
                        fee={item.fee}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;

//  className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12"
// className = "w-full lg:w-3/4";
// className = "w-full lg:w-1/4";
