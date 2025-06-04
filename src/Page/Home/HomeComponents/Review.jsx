import React from "react";
import reviewImg1 from "../../../assets/img/Review1.jpg";
import reviewImg2 from "../../../assets/img/Review2.jpg";
import reviewImg3 from "../../../assets/img/Review3.jpg";

const Review = () => {
  const reviews = [
    {
      image: reviewImg1,
      quote:
        "This course sharpened my creative skills and taught me how to deliver compelling visuals. It gave me the confidence to work on real client projects.",
      name: "Rakib Hossain",
      role: "Graphic Designer",
    },
    {
      image: reviewImg2,
      quote:
        "The digital marketing strategies I learned were practical and immediately applicable. I successfully launched my first campaign within a week.",
      name: "Nusrat Jahan",
      role: "Digital Marketing Specialist",
    },
    {
      image: reviewImg3,
      quote:
        "From storyboarding to editing, this course covered it all. I now create professional 2D animations and motion graphics for clients worldwide.",
      name: "Hasan Mahmud",
      role: "Video & 2D Animation Artist",
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
              <div className="font-bold text-xl text-gray-900">
                {review.name}
              </div>
              <div className="text-gray-500">{review.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
