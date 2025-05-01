import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
const TopHeader = () => {
  return (
    <div className=" bg-[#e6eded] work hidden lg:block">
      <div className="w-full sm:w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto">
        <div className=" flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5 py-2 ">
            <div className="flex gap-1 items-center  pr-4 ">
              <IoMdCall className="text-[20px] text-[#f81515] " />
              <p className="text-[15px] dark:text-black/70">+8801776057078</p>
            </div>
            <div className="flex gap-2  text-[20px] items-center">
              <IoMailOutline className="text-xl  text-[#f81515]" />
              <p className="text-[15px] dark:text-black/70">
                theeverestit@gmail.com
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-12 items-center">
              <div className="flex gap-6 text-[20px] text-gray-700 items-start">
                <SlSocialFacebook />
                <SlSocialLinkedin />
                <FaInstagram className="transform translate-y-[2px]" />
                <FiTwitter className="transform translate-y-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
