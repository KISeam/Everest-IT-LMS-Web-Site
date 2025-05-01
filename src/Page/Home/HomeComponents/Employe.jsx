import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import ButtonPrimary from "../../../Components/Shared/ButtonPrimary";

const Employe = () => {
  return (
    <div className="bg-white pb-12 md:pb-20">
      <div className="bg-[#FAF0F0] shadow-xl border border-gray-200 w-11/12 md:w-10/12 mx-auto rounded-2xl py-16 px-4">
        <div className="mb-8 md:mb-12">
          <SectionHeading title={""}></SectionHeading>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 px-6 lg:px-12">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/group-people-are-sitting-around-table-with-screen-that-says-training_1115474-136830.jpg?semt=ais_hybrid&w=740"
              alt=""
            />
          </div>

          <div className="space-y-6 w-full lg:w-1/2">
            <div className="space-y-3">
              <p className="crd work text-lg md:text-xl">9 Years Expert </p>
              <h1 className="csd text-2xl md:text-4xl lg:text-6xl font-semibold outfit-semibold work">
                Meet Our Members
              </h1>
              <p className="crd work text-base lg:text-lg">
                At the heart of our organization lies an exceptional team of
                industry veterans and accomplished professionals who are
                passionate about nurturing talent. Our mentorship program
                connects you with seasoned experts who have walked the path
                you're embarking on, having accumulated 15-30 years of hands-on
                experience across diverse sectors including technology,
                business, healthcare, and creative industries. These mentors
                don't just offer generic advice—they provide tailored guidance
                that aligns with your unique career aspirations, learning style,
                and personal circumstances.
              </p>
            </div>
            <div className="text-xl mt-4 mb-8 border bg-[#141F51] border-[#141F51] px-4 py-2 rounded-md w-fit">
              <p className="work tracking-tight text-[15px] text-white">
                Mentor Profiles
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <ButtonPrimary title={"View All Members"}></ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Employe;
