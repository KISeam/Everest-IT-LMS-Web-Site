import React, { useState, useEffect } from "react";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      image:
        "https://media.istockphoto.com/id/184122811/photo/handsome-businessman-wearing-a-name-tag-isolated.jpg?s=612x612&w=0&k=20&c=A9Fsh55o9nqz77UJ-0yqEr1TAzrJ1tWdpCvgMZiXrJk=",
      quote:
        "This course completely transformed my approach to web development. The instructor's clear explanations and practical examples made complex concepts easy to understand. I went from beginner to job-ready in just three months!",
      name: "Michael Johnson",
      role: "Web Developer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      quote:
        "As a senior developer, I was skeptical about taking an online course, but this exceeded all expectations. The advanced modules provided insights I hadn't encountered in 10 years of professional work.",
      name: "David Wilson",
      role: "Senior Software Engineer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      quote:
        "The hands-on projects were exactly what I needed to build my portfolio. After completing this course, I received three job offers. The career support team was incredibly helpful during my job search.",
      name: "Robert Chen",
      role: "Frontend Developer",
    },
  ];

  const totalSlides = reviews.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-center csd text-4xl md:text-5xl lg:text-6xl font-semibold outfit-semibold work">
            What Our <span className="cpr">Students Say</span>
          </h1>
        </div>

        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 text-center"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg transform transition-all hover:scale-105">
                  <img
                    src={review.image}
                    alt={`Reviewer ${review.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                  <p className="italic">"{review.quote}"</p>
                </blockquote>

                <div className="mt-6 md:mt-8">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-gray-500 mt-1">{review.role}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={(e) => {
              prevSlide();
              e.currentTarget.blur();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all focus:outline-none active:ring-2 active:ring-[#EF1414] cursor-pointer"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              nextSlide();
              e.currentTarget.blur();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all focus:outline-none active:ring-2 active:ring-[#EF1414] cursor-pointer"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                  currentSlide === index
                    ? "bg-[#EF1414] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
