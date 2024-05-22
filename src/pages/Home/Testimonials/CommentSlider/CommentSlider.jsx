// import css sheet
import "./CommentSlider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import react icons
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Rating from "../../../../componets/Rating/Rating";

const CommentSlider = () => {
  // useSate for all the comment
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("../../../../../public/comment.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // this is for render 5 stars from here

  return (
    <>
      <Swiper pagination={false} modules={[Pagination]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {comments.map((comment) => (
          <SwiperSlide key={comment.name}>
            {/* this import from components folder to show rating */}
            <Rating></Rating>
            <div className="comment">
              <FaQuoteLeft size={80}></FaQuoteLeft>
              <p>{comment.comment}</p>
              <h6>{comment.name}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CommentSlider;
