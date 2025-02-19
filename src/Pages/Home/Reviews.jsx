import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("http://localhost:5000/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-4xl mt-20 font-bold text-center uppercase text-purple-600">
        Reviews
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="flex flex-col items-center justify-center space-y-5 mt-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />

                <p className="max-w-lg text-center mx-auto">
                  {review?.details}
                </p>
                <p className="text-2xl font-medium text-orange-500">
                  {review?.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
