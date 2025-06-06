import React from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <div className="w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 relative ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 relative crd">
        {/* Left Section */}

        <div className="flex-1 flex flex-col justify-between w-full">
          <div className="font-poppins">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-lg  sm:text-xl md:text-[18px] text-[#141F51] work">
                Welcome To Our Company
              </p>
            </div>

            <h1 className="md:text-6xl uppercase md:my-4  -my-2 text-[40px]  outfit csd">
              The <span className="cpr"> Everest</span> It
            </h1>
            <p className="mt-3 mb-3 text-xs sm:text-sm md:text-[15px] poppins">
              Get ready to embark on a journey of knowledge with our innovative
              learning platform. Explore a wide range of courses and interactive
              lessons designed by industry-expert instructors to help you reach
              your full potential
            </p>

            {/* Stats */}
            <div className="mb-4 w-auto lg:w-12/12 crd">
              <div className="stats shadow md:w-full w-[99%] overflow-hidden py-3 pz-4">
                {/* Total Courses */}
                <div className=" flex items-center gap-1.5 sm:w-auto pl-4 ">
                  <div>
                    <div className="stat-title text-xs sm:text-sm crd">
                      Total Courses
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="stat-value text-[#141F51] text-lg sm:text-xl">
                        50+
                      </div>
                    </div>
                    <div className="stat-desc text-xs md:block hidden crd">
                      21% more than last month
                    </div>
                  </div>
                </div>

                {/* Total Students */}
                <div className=" flex items-center gap-1.5 w-full sm:w-auto">
                  <div>
                    <div className="stat-title text-xs sm:text-sm crd">
                      Total Students
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="stat-value text-[#141F51] text-lg sm:text-xl">
                        4200+
                      </div>
                    </div>
                    <div className="stat-desc text-xs md:block hidden crd">
                      21% more than last month
                    </div>
                  </div>
                </div>

                {/* Job Success */}
                <div className=" flex items-center gap-1.5 w-full sm:w-auto">
                  <div className="stat-figure text-secondary flex-shrink-0 mr-2"></div>
                  <div>
                    <div className="stat-value text-lg sm:text-xl">90%</div>
                    <div className="stat-title text-xs sm:text-sm crd">
                      Job Success
                    </div>
                    <div className="stat-desc text-[#141F51] text-xs md:block hidden">
                      31 tasks remaining
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Course Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <Link className="cursor-pointer">
                <button className="flex gap-1 cursor-pointer text-base sm:text-lg md:text-xl items-center bg-[#f81515] hover:bg-[#141F51] px-3 sm:px-4 py-1 sm:py-2 rounded-md  transition-colors">
                  <LuBookOpenCheck className="text-xl sm:text-2xl text-white font-semibold" />
                  <p className="text-white  work ">Join Seminar & Events</p>
                </button>
              </Link>
              <Link>
                <button className="flex gap-2 text-base sm:text-lg md:text-xl cursor-pointer items-center border border-[#141F51] px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-gray-50 transition-colors">
                  <LuBookOpenCheck className="text-xl sm:text-2xl text-[#141F51] font-semibold" />
                  <p className="text-[#141F51] work font-semibold">
                    Success Story
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="flex-1 flex justify-center items-center mt-6 w-full h-full lg:mt-0 lg:w-[500px] overflow-hidden lg:h-[350px] shadow-2xl border border-gray-200 rounded-xl">
          <DotLottieReact
            className="lg:w-[700px] w-full h-full"
            src="https://lottie.host/34fb9247-ca7e-40ec-9a37-69699d829d0a/LdSredAdCh.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
