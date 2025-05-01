import { useState } from "react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const Concerns = () => {
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
      <div className="relative w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto py-12 px-6 rounded-2xl bg-[#FAF0F0] shadow-xl">
        <div
          className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/491185347_1085730833599336_6679927905642902823_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMxqaiP5Vt0I1t6mXG8XC1dNnDbsVyffx02cNuxXJ9_MPyrTfVZTCx0vCN0yD0Cw46plaADOVLbLgLlZvYSbs_&_nc_ohc=OC5TdUjhyRMQ7kNvwHj744_&_nc_oc=AdlLq8prVk2-PMmbvhvxZ5JJ-svcd-XzkDbsbytax2LOvrG26hQPIxjJa-cd_ZN65Gg&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=cde8rQ94wWzg9tFxRh0r0g&oh=00_AfEXNuJppYlJjdSf1dPIGLW1sTGCxo5vvrocvFLGD1Rt_A&oe=68112840')`,
          }}
        ></div>

        <div className="relative z-10">
          <SectionHeading title={"Our Working Partner"} />
          <div className="flex flex-wrap justify-center gap-3 work pl-6 pb-8 pr-6 mt-12">
            {["Our Concern", "Colaboration With", "Member Of"].map(
              (cat, idx) => (
                <label key={idx} className="fieldset-label dark:text-gray-600">
                  <p
                    onClick={() => handleCategoryChange(cat)}
                    className={`fieldset-label btn rounded-md cursor-pointer shadow-md transition dark:border-gray-300 ${
                      selectedCategory === cat
                        ? "bg-[#141F51] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </p>
                </label>
              )
            )}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
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
