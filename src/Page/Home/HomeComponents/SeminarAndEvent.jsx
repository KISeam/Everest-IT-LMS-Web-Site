import React from "react";
import { LuBookOpenCheck } from "react-icons/lu";

const SeminarAndEvent = () => {
  return (
    <>
      <div className="bg-white py-12 md:py-16">
        <div className="w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto py-12 px-6 lg:px-12 rounded-2xl bg-gray-50 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="space-y-6 w-full lg:w-1/2">
              <div className="space-y-3">
                <h1 className="csd text-xl md:text-3xl lg:text-5xl font-semibold outfit-semibold work">
                  Join Our <span className="cpr">Free Seminars</span>
                </h1>
                <p className="crd work text-base lg:text-lg">
                  Need guidelines to choose a suitable course? Join our free
                  seminars to consult with our experts, they will guide you to
                  pick the course that matches your interest and discuss the
                  career prospects.
                </p>
              </div>
              <div className="text-xl mt-4 mb-8 border bg-[#141F51] border-[#141F51] px-4 py-2 rounded-md w-fit">
                <p className="work tracking-tight text-[15px] text-white">
                  Free Seminar Schedule
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?t=st=1746097525~exp=1746101125~hmac=d00f7f97e05c93e3c629809989082012840685eed7f05c4cad55c3eddcc706d9&w=996"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeminarAndEvent;
