import React from "react";

const Review = () => {
  const reviews = [
    {
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "This course helped me transition from a beginner to a confident frontend developer. The hands-on projects and clear instructions made all the difference.",
      name: "Rakib Hossain",
      role: "Frontend Developer",
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Excellent content and well-structured modules. I gained real-world skills and started freelancing right after completing the course.",
      name: "Nusrat Jahan",
      role: "UI/UX Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      quote:
        "The instructors are industry experts. After completing this course, I received multiple job offers. Highly recommended for anyone serious about tech.",
      name: "Hasan Mahmud",
      role: "Software Engineer",
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="csd text-2xl md:text-4xl lg:text-6xl font-semibold outfit-semibold work">
               What Our <span className="cpr">Students Say</span>
              </h1>
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold">
             <span className="text-red-500"></span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center items-stretch">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-1 max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 py-10 px-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-md mb-4">
                <img
                  src={review.image}
                  alt={`Reviewer ${review.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{review.quote}"
              </blockquote>
              <div className="font-bold text-xl text-gray-900">{review.name}</div>
              <div className="text-gray-500">{review.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
