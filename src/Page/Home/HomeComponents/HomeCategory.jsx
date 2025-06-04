import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/3940/3940120.png",
    title: "Art & Design",
    subtitle: "Express your creativity through visuals",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/7011/7011353.png",
    title: "Marketing",
    subtitle: "Master the art of branding and promotion",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/3598/3598209.png",
    title: "Networking & Server",
    subtitle: "Build reliable and secure infrastructures",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/10857/10857083.png",
    title: "Management",
    subtitle: "Drive performance through effective leadership",
  },
];

const HomeCategory = () => {
  const navigate = useNavigate();

  const handleCategoryNavigate = (title) => {
    navigate(`/courses?category=${encodeURIComponent(title)}`);
  };

  return (
    <div className="bg-white py-10">
      <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center gap-x-5 gap-y-3 py-6 md:py-10">
        {categories.map((cat, index) => (
          <div key={index}>
            <div
              onClick={() => handleCategoryNavigate(cat.title)}
              className="cursor-pointer border border-gray-200 rounded-xl p-4 flex items-center gap-4 bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600">{cat.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
