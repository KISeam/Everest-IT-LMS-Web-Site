import React, { useEffect } from "react";
import { FaCheck, FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdLanguage, MdLiveTv, MdWorkOutline } from "react-icons/md";
import {
  RiComputerLine,
  RiExpandLeftRightLine,
  RiLiveLine,
} from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import CourseCard from "../../../Components/CourseCard";
import { GiLevelEndFlag } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import { BiCategory } from "react-icons/bi";

// Icon mapping for dynamic rendering
const iconMap = {
  RiLiveLine: <RiLiveLine />,
  RiExpandLeftRightLine: <RiExpandLeftRightLine />,
  RiComputerLine: <RiComputerLine />,
  MdLiveTv: <MdLiveTv />,
  TfiCup: <TfiCup />,
  MdWorkOutline: <MdWorkOutline />,
};

const SingleCourseDetails = ({ course, populerCourse }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div>
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="bg-[#ecfcfb] py-8 lg:py-14 lg:pt-16 lg:pr-10 2xl:pr-4">
            <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
              <div className="w-full lg:w-4/6">
                <div className="space-y-4">
                  <h1 className="text-[#141F51] font-bold outfit text-3xl xl:text-5xl">
                    {course.title}
                  </h1>
                  <h4 className="crd font-medium text-base md:text-lg">
                    {course.technology}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    <div className="cpr flex items-center gap-0.5">
                      <span className="text-lg outfit-semibold">
                        {course.rating}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) =>
                          i < Math.floor(course.rating) ? (
                            <FaStar key={i} />
                          ) : i === Math.floor(course.rating) &&
                            course.rating % 1 !== 0 ? (
                            <FaStarHalfAlt key={i} />
                          ) : (
                            <FaStar key={i} className="text-gray-300" />
                          )
                        )}
                      </div>
                    </div>
                    <p className="csd text-base lg:text-lg outfit-semibold">
                      (<span className="">{course.totalRating} </span>ratings)
                    </p>
                    <p className="text-gray-600 text-base lg:text-lg outfit-semibold">
                      {course.totalStudentsEnroll} students
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <FaRegClock className="cpr text-lg" />
                      <p className="crd outfit-semibold">
                        {course.courseStart}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MdLanguage className="cpr text-lg" />
                      <p className="crd outfit-semibold">Bangla</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GiLevelEndFlag className="cpr text-lg" />
                      <p className="crd outfit-semibold">
                        Skill Level: Basic to Advanced
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto lg:pr-10 2xl:pr-4">
            <div className="w-full lg:w-4/6">
              <div className="pb-8 lg:pb-14 space-y-10">
                <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    What you'll learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.whatYoullLearn.map((item, index) => (
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
                    {course.courseIncludes.map((item, index) => (
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
                    {course.softwareYoullLearn.map((software, index) => (
                      <div key={index} className="flex items-center gap-1.5">
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
                    {course.jobPositions.map((job, index) => (
                      <div key={index} className="flex items-center gap-1.5">
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
                  <p className="text-base md:text-lg crd">{course.details}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    Instructor
                  </h2>
                  <div className="flex items-center gap-6 rounded-lg">
                    <div className="size-26 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={course.instructorImg}
                        alt={course.instructorName}
                      />
                    </div>
                    <div className="space-y-1 outfit-semibold crd">
                      <h5 className="text-lg md:text-xl">
                        {course.instructorName}
                      </h5>
                      <p className="text-base md:text-lg">
                        {course.instructorPosition}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block lg:hidden space-y-6">
              <h3 className="text-[#f81515] text-2xl md:text-3xl outfit-semibold text-center">
                Popular <span className="crd">Courses</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {populerCourse?.slice(0, 2).map((item) => (
                  <CourseCard key={item.id} course={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourseDetails;
