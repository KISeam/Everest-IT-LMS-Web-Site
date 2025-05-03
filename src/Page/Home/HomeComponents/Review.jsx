import React from "react";

const Review = () => {
  return (
    <div>
      <div className="py-10 w-full sm:w-11/12 md:w-10/12 mx-auto">
        <div className="relative w-full h-[500px] overflow-hidden slider-container bg-gray-50 rounded-2xl border border-gray-300">
          <div className="absolute inset-0 flex animate-slide">
            <div className="flex-shrink-0 w-full flex flex-col items-center justify-center h-full slides text-white bg-white">
              <div className="border-2 border-gray-300 w-24 h-24 overflow-hidden mb-4 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/184122811/photo/handsome-businessman-wearing-a-name-tag-isolated.jpg?s=612x612&w=0&k=20&c=A9Fsh55o9nqz77UJ-0yqEr1TAzrJ1tWdpCvgMZiXrJk="
                  alt="Male reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-center text-base crd max-w-2xl px-4">
                <p>
                  "This course completely transformed my approach to web
                  development. The instructor's clear explanations and practical
                  examples made complex concepts easy to understand. I went from
                  beginner to job-ready in just three months!"
                </p>
              </blockquote>
              <div className="text-2xl font-bold crd mt-3">
                Michael Johnson
              </div>
              <div className="crd">Web Developer</div>
            </div>

            <div className="flex-shrink-0 w-full flex flex-col items-center justify-center h-full slides text-white bg-white">
              <div className="border-2 border-gray-300 w-24 h-24 overflow-hidden mb-4 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Male reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-center text-base crd max-w-2xl px-4">
                <p>
                  "As a senior developer, I was skeptical about taking an online
                  course, but this exceeded all expectations. The advanced
                  modules provided insights I hadn't encountered in 10 years of
                  professional work."
                </p>
              </blockquote>
              <div className="text-2xl font-bold crd mt-3">
                David Wilson
              </div>
              <div className="crd">Senior Software Engineer</div>
            </div>

            <div className="flex-shrink-0 w-full flex flex-col items-center justify-center h-full slides text-white bg-white">
              <div className="border-2 border-gray-300 w-24 h-24 overflow-hidden mb-4 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Male reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-center text-base crd max-w-2xl px-4">
                <p>
                  "The hands-on projects were exactly what I needed to build my
                  portfolio. After completing this course, I received three job
                  offers. The career support team was incredibly helpful during
                  my job search."
                </p>
              </blockquote>
              <div className="text-2xl font-bold crd mt-3">
                Robert Chen
              </div>
              <div className="crd">Frontend Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
