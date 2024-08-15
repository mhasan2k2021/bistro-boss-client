import { useEffect } from "react";
import BistroBoss from "../BistroBoss/BistroBoss";
import CheckItOut from "../CheckItOut/CheckItOut";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import Phone from "../Phone/Phone";
import Recommends from "../Recommends/Recommends";
import ShopSlider from "../ShopSlider/ShopSlider";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  // add dynamic title
  useEffect(() => {
    document.title = "Home | Welcome Home";
  }, []);
  return (
    <div className="home_container">
      <Slider></Slider>
      <ShopSlider></ShopSlider>
      <BistroBoss></BistroBoss>
      <FromOurMenu></FromOurMenu>
      <Phone></Phone>
      <Recommends></Recommends>
      <CheckItOut></CheckItOut>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
