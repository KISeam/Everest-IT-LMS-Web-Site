import { useState } from "react";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Partner = () => {
    const baseImages = [
    {
      id: 1,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-1.png",
    },
    {
      id: 2,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-2.png",
    },
    {
      id: 3,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-3.png",
    },
    {
      id: 4,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-4.png",
    },
    {
      id: 5,
      src: "https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png",
    },
    {
      id: 6,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-5.png",
    },
    {
      id: 7,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-7.png",
    },
    {
      id: 8,
      src: "https://www.theeverestitbd.com/images/patnar-logo/p-8.png",
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
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
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

  const filteredImages = images.filter(
    (image) => image.category === selectedCategory
  );
  const paginatedImages = filteredImages.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );
  const hasMoreImages = filteredImages.length > (page + 1) * imagesPerPage;

  return (
    <div className="  py-4 relative bg-[#ecfcfb] ">
      <div className="w-11/12 lg:w-10/12  shadow-md mx-auto border border-gray-200 p-12 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/4">
            <div className="rounded-md">
              <p className="border-b pl-6 py-3 mb-3 outfit-semibold border-[#d1eae8] text-2xl md:text-[28px] text-[#141F51]">
                We Are Working With
              </p>
              <div className="flex flex-col gap-3 work pl-6 pb-8 pr-6 ">
                {["Our Concern", "Colaboration With", "Member Of"].map(
                  (cat, idx) => (
                    <label key={idx} className="fieldset-label text-gray-700">
                      <input
                        type="radio"
                        name="category"
                        className="checkbox w-5 h-5 rounded-sm checked:bg-[#141F51] border-[#141F51]"
                        checked={selectedCategory === cat}
                        onChange={() => handleCategoryChange(cat)}
                      />
                      {cat}
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 relative">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
              {paginatedImages.length > 0 ? (
                paginatedImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <img
                      src={image.src}
                      alt={`Image ${image.id}`}
                      className="w-20 object-cover"
                    />
                  </motion.div>
                ))
              ) : (
                <p>No images to display. Select a category.</p>
              )}
            </div>

            {/* Pagination Buttons */}
            <div>
              {page > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10  border border-gray-300 shadow-md p-3 rounded-full hover:bg-[#141F51] hover:text-white transition duration-500"
                >
                  <FaChevronLeft className="cpr" size={18} />
                </button>
              )}

              {hasMoreImages && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  shadow-md p-3 rounded-full hover:bg-[#141F51] hover:text-white border border-gray-300 transition duration-500 cursor-pointer"
                >
                  <FaChevronRight className="cpr" size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
