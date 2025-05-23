import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="bg-white py-16">
        <div className="w-full sm:w-11/12 lg:w-11/12 2xl:w-12/12 mx-auto">
          <div className="flex flex-col gap-10">
            <h1 className="text-center csd text-4xl md:text-5xl lg:text-6xl font-semibold outfit-semibold work">
              Frequently Asked <span className="cpr">Questions</span>
            </h1>
            <div className="w-3/4 mx-auto space-y-4">
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    What types of courses do you offer?
                  </div>
                  <div className="collapse-content text-sm crd">
                    We offer a wide range of professional courses including Art
                    & Design, Marketing, Web Development, Networking & Server,
                    and Management. All courses are designed to be both fun and
                    career-oriented.
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    Are your courses suitable for beginners?
                  </div>
                  <div className="collapse-content text-sm crd">
                    Absolutely. Our courses are structured to cater to all skill
                    levels—from complete beginners to advanced learners. Each
                    course clearly states the required prior knowledge (if any).
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    Can I attend a demo or seminar before enrolling?
                  </div>
                  <div className="collapse-content text-sm crd">
                    Yes! We regularly host free seminars to help you decide
                    which course suits your interests and goals. You can check
                    the seminar schedule and register through our website.
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    Is certification provided after completing a course?
                  </div>
                  <div className="collapse-content text-sm crd">
                    Yes, all students receive a professional certificate upon
                    successful completion of their course, which is valuable for
                    freelancing, job applications, and further education.
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    Are the courses online, offline, or both?
                  </div>
                  <div className="collapse-content text-sm crd">
                    We offer both offline and online learning options. You can
                    choose your preferred mode based on convenience and
                    availability.
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    What is the course duration and fee?
                  </div>
                  <div className="collapse-content text-sm crd">
                    Course durations vary from 1 to 3 months, depending on the
                    topic. Fees are listed under each course—typically ranging
                    between 18,000৳ and 24,000৳.
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    Who are your instructors?
                  </div>
                  <div className="collapse-content text-sm crd">
                    Our instructors are industry experts with 5–10+ years of
                    hands-on experience in their fields. You can view their
                    profiles under the "Meet Our Members" section.
                  </div>
                </div>
              </div>
              <div className="join join-vertical bg-gray-50 text-gray-500 w-full">
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold text-lg crd">
                    How do I enroll in a course?
                  </div>
                  <div className="collapse-content text-sm crd">
                    Click on "Get Course" or "Course Details" under your desired
                    course. Follow the instructions to register online or visit
                    our office.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
