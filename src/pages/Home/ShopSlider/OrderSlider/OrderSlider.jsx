import { useEffect, useState } from "react";
import "./OrderSlider.css";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../componets/hook/useAxiosSecure";

const OrderSlider = () => {
  const [images, setImages] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/top-menu")
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => {
        console.error("Error fetching top-menu:", err);
      });
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
        {images?.map((pic) => (
          <SwiperSlide className="img_container" key={pic.img}>
            <Link className="relative">
              <img src={pic.image} alt="" />
              <p>{pic.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OrderSlider;
