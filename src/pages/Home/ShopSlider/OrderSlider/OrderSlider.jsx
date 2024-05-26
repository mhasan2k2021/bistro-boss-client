import { useEffect, useState } from "react";
import "./OrderSlider.css";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const OrderSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("../../../../../public/imgLink.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {images.map((pic) => (
          <SwiperSlide className="img_container" key={pic.img}>
            <Link className="relative">
              <img src={pic.img} alt="" />
              <p>{pic.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OrderSlider;
