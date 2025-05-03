import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import PopularCourse from "./HomeComponents/PopularCourse";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Employe from "./HomeComponents/Employe";
import Concerns from "./HomeComponents/Concerns";
import SeminarAndEvent from "./HomeComponents/SeminarAndEvent";

const Home = () => {
  return (
    <div className=" bg-gray-50 ">
      <div
        className="min-h-[calc(100vh-15rem)] py-12 md:py-16 lg:py-16 w-full relative container mx-auto flex items-center"
      >
          <Hero />
      </div>
      <HomeCategory />

        <div
          className="bg-cover w-full sm:w-11/12 lg:w-11/12 2xl:w-12/12 mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl bg-gray-50 shadow-xl"
        >
          <PopularCourse />
        </div>

      <Concerns></Concerns>
      <SeminarAndEvent></SeminarAndEvent>
      <WhatWeProvide></WhatWeProvide>
      <div>
        <Employe></Employe>
      </div>
    </div>
  );
};

export default Home;
