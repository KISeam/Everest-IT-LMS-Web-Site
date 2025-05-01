import React from "react";

const AboutHero = () => {
  return (
    <div className="py-10 bg-gradient-to-br from-[#ffffff] to-[#f0f4f8]">
      <div className="w-full sm:w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden ">
              <div className="h-full w-full">
                <img
                  className="rounded-lg border border-gray-200 h-full w-[700px]"
                  src="https://img.freepik.com/premium-photo/collage-photos-people-with-headphones-woman-wearing-headset_1380714-13798.jpg?semt=ais_hybrid&w=740"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-rows-1 md:grid-rows-2 gap-6 md:gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  className="rounded-lg border-gray-200 "
                  src="https://img.freepik.com/premium-photo/connecting-teams-video-conference-collaboration-modern-office_1088041-64806.jpg?semt=ais_hybrid&w=740"
                  alt=""
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  className="rounded-lg  border-gray-200"
                  src="https://img.freepik.com/premium-photo/technology-helps-teams-collaborate-complete-projects-quickly-cropped-shot-three-designers-having-brainstorming-session-office_590464-14717.jpg?semt=ais_hybrid&w=740"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-gray-700">
              Welcome to <span className="cpr"> Everest IT</span>
            </h2>

            <div className="flex flex-col gap-2.5 text-[#414042]">
              <p>
                Welcome to our esteemed IT training company! We are dedicated to
                empowering individuals and organizations with the skills and
                knowledge needed to thrive in the fast-paced world of
                technology. With a strong commitment to excellence, we provide
                comprehensive training programs designed to equip you with the
                tools to succeed in the ever-evolving IT industry.
              </p>
              <p>
                At our training center, we understand that technology is
                continuously advancing, and staying up-to-date with the latest
                trends and practices is essential. That's why we offer a wide
                range of cutting-edge courses and certifications, carefully
                curated by industry experts and tailored to meet the demands of
                the digital era.
              </p>
              <p>
                Our team of highly qualified instructors brings extensive
                industry experience and expertise to the classroom. They are
                passionate about sharing their knowledge and are committed to
                your success. Through interactive lectures, hands-on exercises,
                and real-world projects, our instructors provide a dynamic
                learning environment that fosters growth and skill development.
                We are excited to embark on this journey with you and help you
                unlock your full potential in the exciting world of technology.
                Together, let's build a future powered by knowledge and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
