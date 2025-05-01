import React from "react";
import Overview from "./Our Team Component/Overview";
import SectionHeading from "../../Components/Shared/SectionHeading";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mushtaque Ahmed",
      position: "Chief Operating Officer",
      image: "https://www.theeverestitbd.com/images/teachers/t-1.jpeg",
    },
    {
      id: 2,
      name: "Titas Sarker",
      position: "System Admin & Trainer",
      image: "https://www.theeverestitbd.com/images/teachers/t-2.png",
    },
    {
      id: 3,
      name: "Tahmina Shampa",
      position: "Trainer (Computer Operation & IT service Provider)",
      image: "https://www.theeverestitbd.com/images/teachers/t-3.jpeg",
    },
    {
      id: 4,
      name: "Md Iftekharul Islam",
      position: "Trainer (Cisco & Juniper)",
      image: "https://www.theeverestitbd.com/images/teachers/t-4.jpeg",
    },
    {
      id: 5,
      name: "Azman Mollah",
      position: "Senior Web Developer",
      image: "https://www.theeverestitbd.com/images/teachers/t-5.png",
    },
    {
      id: 6,
      name: "Sabbir Ul Haider",
      position: "Senior Graphics Designer",
      image: "https://www.theeverestitbd.com/images/teachers/t-6.JPG",
    },
    {
      id: 7,
      name: "Md. Kamrul Islam",
      position: "ACAD Engineer",
      image: "https://www.theeverestitbd.com/images/teachers/t-7.JPG",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="bg-[#dff6ff] ">
          <div className="lg:w-10/12 w-full mx-auto pt-10">
            <SectionHeading
              title={"Our Team"}
              description={"Meet out expert team members."}
            />
          </div>

          <div className="py-10">
            <div className="w-11/12 lg:w-9/12 mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-10 xl:gap-14 text-center">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex flex-col gap-3">
                    <div className="w-[250px] h-[290px] rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-[250px]">
                      <h3 className="font-semibold text-lg text-gray-500 break-words">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 break-words px-2">
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto">
          <Overview />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
