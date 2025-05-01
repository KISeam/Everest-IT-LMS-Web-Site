import React, { useState } from "react";
import CourseCard from "../../../../Components/CourseCard";

const RightCoursesDetalis = ({ filteredCourses }) => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredByType = filteredCourses.filter((course) => {
    const typeMatch = selectedType === "All" || course.type === selectedType;
    return typeMatch;
  });

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const typeButtons = ["All", "Online", "Offline", "Recorded"];

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <h1 className="text-[#f81515] text-4xl md:text-5xl outfit-semibold ">
          Our <span className="crd">Courses</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
            {typeButtons.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`py-2 px-4 cursor-pointer rounded-md  transition-colors ${
                  selectedType === type
                    ? "bg-[#141F51] text-white font-medium"
                    : " text-black border border-gray-300"
                }`}
              >
                <p className="text-sm md:text-base">{type}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {filteredByType.length > 0 ? (
          filteredByType.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              image={course.image}
              category={course.category}
              rating={course.rating}
              type={course.type}
              fee={course.fee}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-lg text-gray-600">
              No courses found matching your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightCoursesDetalis;
