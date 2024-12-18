import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./MyCart.css";

const MyCart = () => {
  const style = {
    fontSize: "32px",
    padding: "10px",
  };
  return (
    <div>
      <ShortHeading shortHading={"---My Cart---"} />
      <Heading heading={"WANNA ADD MORE?"} style={style}></Heading>
    </div>
  );
};

export default MyCart;
