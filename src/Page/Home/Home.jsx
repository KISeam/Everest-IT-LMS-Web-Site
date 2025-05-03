import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import PopularCourse from "./HomeComponents/PopularCourse";
// import bgImage from "../../assets/img/bgg.png";
import bgImage2 from "../../assets/img/bg1.png";
import SuccesHistory from "./HomeComponents/SuccesHistory";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Employe from "./HomeComponents/Employe";
import Concerns from "./HomeComponents/Concerns";
import SeminarAndEvent from "./HomeComponents/SeminarAndEvent";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { MessageCircle } from "lucide-react";
const Home = () => {
  return (
    <div className=" ">
      <div className="min-h-[calc(100vh-26rem)] py-12 md:py-16 lg:py-16 w-full relative bg-[#E6F2FF]">
        <Hero />
      </div>
      <HomeCategory />
      <div className="bg-gray-50 py-16">
        <div
          className="bg-cover w-full sm:w-11/12 lg:w-11/12 2xl:w-12/12 mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl bg-[#E6F2FF] shadow-xl"
          // style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <PopularCourse />
        </div>
      </div>
      <Concerns></Concerns>
      <SeminarAndEvent></SeminarAndEvent>
      {/* <SuccesHistory></SuccesHistory> */}
      <WhatWeProvide></WhatWeProvide>
      <div>
        <Employe></Employe>
      </div>
    </div>
  );
};

export default Home;
