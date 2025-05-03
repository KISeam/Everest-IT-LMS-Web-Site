import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/3940/3940120.png",
    title: "Art & Design",
    subtitle: "Fun with Challeng",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/7011/7011353.png",
    title: "Marketing",
    subtitle: "Fun with Challeng",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/3598/3598209.png",
    title: "Networking & Server",
    subtitle: "Fun with Challeng",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/10857/10857083.png",
    title: "Management",
    subtitle: "Code & Confident",
  },
];

const HomeCategory = () => {
  const navigate = useNavigate();

  const handleCategoryNavigate = (title) => {
    navigate(`/courses?category=${encodeURIComponent(title)}`);
  };

  return (
    <div className="bg-white">
      <div className="grid cursor-pointer grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center gap-x-5 gap-y-3 py-6 md:py-10">
        {categories.map((cat, index) => (
          <div key={index}>
            <div
              onClick={() => handleCategoryNavigate(cat.title)}
              className="border border-gray-200 p-2 md:pl-6 md:pr-16 py-4  rounded-md flex justify-center items-end gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"
            >
              <div>
                <img className="w-14 transform" src={cat.img} alt={cat.title} />
              </div>
              <div>
                <h3 className="font-semibold crd outfit-semibold text-xs lg:text-[16px]">
                  {cat.title}
                </h3>
                <p className="work text-xs  lg:text-[16px] dark:text-black text-nowrap">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
