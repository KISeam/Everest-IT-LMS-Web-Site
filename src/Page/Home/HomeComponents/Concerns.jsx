import { useState } from "react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const Concerns = () => {
  const baseImages = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_the_Institute_of_Information_Technology_%28University_of_Dhaka%29.svg",
    },
    {
      id: 2,
      src: "https://images.seeklogo.com/logo-png/23/1/university-of-dhaka-logo-png_seeklogo-237637.png",
    },
    {
      id: 3,
      src: "https://basis.org.bd/public/img/relatedlink/668b673940a1fBasis_logo.jpeg",
    },
    {
      id: 4,
      src: "https://apromis.app/assets/asset_logo.png",
    },
    {
      id: 5,
      src: "https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGQdP6s5V6S30SHSI0eOvIaRJ6t3vONUTsw&s",
    },
  ];

  const images = [];
  for (let i = 0; i < 6; i++) {
    baseImages.forEach((img) => {
      images.push({
        ...img,
        id: img.id + i * 8,
      });
    });
  }

  const [selectedCategory, setSelectedCategory] = useState("Our Concern");
  const [page, setPage] = useState(0);
  const imagesPerPage = 10;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(0);
  };

  const handleNext = () => {
    const totalPages = Math.ceil(images.length / imagesPerPage);
    if (page + 1 < totalPages) {
      setPage((prev) => prev + 1);
    } else {
      setPage(0);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const paginatedImages = images.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );

  return (
    <div className="py-12 md:py-16 relative bg-white">
      <div className="relative w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto py-12 px-6 rounded-2xl bg-gray-50 shadow-md">
        <div
          className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-5"
         
        ></div>

        <div className="relative z-10">
  
          <h1 className="text-center csd text-4xl md:text-5xl lg:text-6xl font-semibold outfit-semibold work">
          Our <span className="cpr"> Working </span>Partner
        </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-10">
            <div className="w-full lg:w-3/4 relative">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 gap-2">
                {paginatedImages.length > 0 ? (
                  paginatedImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="w-44 h-36 flex justify-center items-center object-cover p-4 shadow-sm border border-gray-100 bg-white rounded-xl hover:shadow-md transition duration-300">
                        <img
                          src={image.src}
                          alt={`Image ${image.id}`}
                          className="w-20"
                        />
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p>No images to display</p>
                )}
              </div>

              <button
                onClick={handlePrev}
                className="absolute cursor-pointer md:-left-15 -left-15 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md p-3 rounded-full hover:bg-[#1e3a8a] hover:text-white transition duration-300"
              >
                <FaChevronLeft className="cpr" size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute md:-right-15 -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#1e3a8a] hover:text-white border border-gray-200 transition duration-300 cursor-pointer"
              >
                <FaChevronRight className="cpr" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concerns;
