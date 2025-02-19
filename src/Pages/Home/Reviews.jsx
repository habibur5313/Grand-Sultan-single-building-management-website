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
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />

                <p className="max-w-lg text-center mx-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  architecto soluta quos. Non totam assumenda nobis aliquid
                  laborum! Odio neque repudiandae sit tenetur omnis saepe maxime
                  eum nesciunt facilis illo. Nihil, eligendi hic voluptate
                  provident dolor consequuntur culpa tempore voluptatibus
                  blanditiis ad quis obcaecati ratione a iste ipsa quae aut!
                </p>
                <p className="text-2xl font-medium text-yellow-500">
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
