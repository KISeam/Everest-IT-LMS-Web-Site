import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { FcCollaboration } from "react-icons/fc";

const WhatWeProvide = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={"Our Unique Learning Approach "}
        ></SectionHeading>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 md:my-12">
          <div className="pl-6 py-8 md:pl-8 md:py-10 lg:pl-12 lg:py-12 bg-[#f0fdfc] rounded-2xl">
            <h2 className="outfit-semibold my-4 text-xl md:text-3xl font-bold text-black">
              Why Choose us
            </h2>
            <p className="work crd text-sm md:text-lg">
              1. Expertise and Industry Relevance <br />
              2. Comprehensive Course Offerings <br />
              3. Hands-on Learning Experience <br />
              4. Flexible Learning Options <br />
              5. Supportive Learning Environment <br />
              6. Career Guidance and Placement Assistance
            </p>
          </div>

          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#fafaee] rounded-2xl">
            <h2 className="outfit-semibold my-4 text-xl md:text-3xl font-bold text-black">
              Our Mission
            </h2>
            <p className="work crd text-sm md:text-lg">
              1. Quality Education <br />
              2. Accessible Learning <br />
              3. Industry Relevance <br />
              4. Practical Application <br />
              5. Continuous Support <br />
              6. Collaboration and Community
            </p>
          </div>

          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#ecfcfb] rounded-2xl">
            <h2 className="outfit-semibold my-4 text-xl md:text-3xl font-bold text-black">
              Our vission
            </h2>
            <p className="work crd text-sm md:text-lg">
              1. Global Reach and Impact <br />
              2. Industry Leadership <br />
              3. Lifelong Learning <br />
              4. Strong Industry Partnerships <br />
              5. Social Impact <br />
              6. Continuous Innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
