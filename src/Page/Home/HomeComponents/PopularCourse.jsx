import React from "react";

import PopularCourseCard from "./PopularCourseCard";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const PopularCourse = () => {
  return (
    <div className="">
      <div className="py-16 w-11/12 mx-auto rounded-2xl">
        <SectionHeading
          title={"Popular Courses"}
        ></SectionHeading>
        <PopularCourseCard></PopularCourseCard>
      </div>
    </div>
  );
};

export default PopularCourse;
