import React from "react";
import img1 from "../../../assets/img/icon (1).png";
import img2 from "../../../assets/img/icon4.png";
import img3 from "../../../assets/img/gd.png";

const statsData = [
  {
    id: 1,
    image: img1,
    count: "50+",
    label: "Courses",
    bg: "bg-[#dff6ff]",
  },
  {
    id: 2,
    image: img2,
    count: "20+",
    label: "Mentors",
    bg: "bg-[#dff6ff]",
  },
  {
    id: 3,
    image: img3,
    count: "150+",
    label: "Associate Employees",
    bg: "bg-[#dff6ff]",
  },
];

const Overview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {statsData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row gap-6 justify-center items-center py-8 px-6 border border-gray-200 rounded-2xl ${item.bg}`}
          >
            <img
              className="w-16 h-auto md:w-20"
              src={item.image}
              alt={item.label}
            />
            <div className="text-center md:text-left crd">
              <p className="text-3xl sm:text-4xl font-semibold">{item.count}</p>
              <p className="font-semibold text-lg sm:text-xl">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
