import React from "react";

import PopularCourseCard from "./PopularCourseCard";


const PopularCourse = () => {
  return (
    <div className="">
      <div className="py-16 rounded-2xl">

        <h1 className="text-center csd text-4xl md:text-5xl lg:text-6xl font-semibold outfit-semibold work">
          <span className="cpr">Popular </span>Courses
        </h1>
        <PopularCourseCard></PopularCourseCard>
      </div>
    </div>
  );
};

export default PopularCourse;
