import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./ContactComponent/FAQ";
import DropQuestion from "./ContactComponent/DropQuestion";
import Address from "./ContactComponent/Address";

const Contact = () => {
  return (
    <div>
      <div className="">
        <div className=" relative">
          <div className=" absolute z-10 w-full">
            <div className="bg-gradient-to-r from-[#F3F7FB] via-[#F3F7FB] to-transparent flex flex-col justify-center p-10 md:pl-30 lg:pl-83 h-[22vh] lg:h-[30vh] w-full mx-auto ">
              <div className="">
                <h1
                  style={{ fontFamily: "Outfit, sans-serif" }}
                  className="text-4xl font-semibold lg:text-6xl csd"
                >
                  Contact Us
                </h1>
                <div className="breadcrumbs text-sm">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        className="hover:font-semibold hover:text-[#141F51] crd lg:text-2xl outfit"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      style={{ fontFamily: "Outfit, sans-serif" }}
                      className="font-semibold text-[#141F51] lg:text-2xl"
                    >
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative text-end flex justify-end">
            <img
              className="h-[22vh] lg:h-[30vh] lg:mr-0 -mr-15 overflow-hidden"
              src="/src/Page/Contact/image/contact.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-white pb-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:w-8/12 mx-auto">
          <div className="w-full lg:w-1/2">
            <DropQuestion></DropQuestion>
          </div>
          <div className="w-full lg:w-1/2">
            <Address></Address>
          </div>
        </div>
      </div>
      {/* <FAQ></FAQ> */}

      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58418.41790055556!2d90.33285121184828!3d23.777632455732125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1767b6583%3A0x9f5bc202aeaa14e9!2sKalabagan%20East%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1746073795398!5m2!1sen!2sbd"
          height="450"
          className="w-screen"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
