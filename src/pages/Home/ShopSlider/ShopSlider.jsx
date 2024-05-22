import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import OrderSlider from "./OrderSlider/OrderSlider";
import "./ShopSlider.css";

const ShopSlider = () => {
  return (
    <div className="shop_slider_container">
      <ShortHeading shortHading="---From 11:00am to 10:00pm---"></ShortHeading>
      <Heading heading="ORDER ONLINE"></Heading>
      <div className="order_slider">
        <OrderSlider></OrderSlider>
      </div>
    </div>
  );
};

export default ShopSlider;
