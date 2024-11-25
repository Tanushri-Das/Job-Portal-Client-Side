import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Review } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("https://job-portal-server-side-tau.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="pb-14 w-[90%] mx-auto">
      <Heading
        mainHeading="What Our Users Say"
        subHeading="Discover the experiences of our users who found their dream jobs with us!"
      />
      <div className="mt-9">
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: 1 slide per view
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides per view on small screens
            },
            1024: {
              slidesPerView: 3, // 3 slides per view on medium screens
            },
          }}
          autoplay={{
            delay: 2500, // 2.5 seconds delay between slides
            disableOnInteraction: false, // Autoplay continues even after user interaction
          }}
          modules={[Autoplay]} // Include Autoplay module
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div
                key={review._id}
                className="flex flex-col border border-gray-200 rounded-xl p-5 h-[220px] hover:cursor-pointer" // Apply horizontal margin here
              >
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={`${review.name}'s testimonial`}
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="flex flex-col ms-2">
                    <h1 className="text-lg font-semibold mb-2">
                      {review.name}
                    </h1>
                    <div className="flex">
                      {Array.from(
                        { length: Math.floor(review.rating) },
                        (_, index) => (
                          <FaStar
                            key={index}
                            className="text-yellow-300 text-lg me-1"
                          />
                        )
                      )}
                      {review.rating % 1 === 0.5 && (
                        <FaStarHalf className="text-yellow-300 text-lg" />
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-[16px] mt-4">{review.review}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
