import Heading from "../../../componets/Heading/Heading";
import useAddCart from "../../../componets/hook/useAddCart";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./MyCart.css";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useAddCart();

  const totalOrders = cart.length;
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );
  const style = {
    fontSize: "32px",
    padding: "10px",
  };
  return (
    <div>
      <ShortHeading shortHading={"---My Cart---"} />
      <Heading heading={"WANNA ADD MORE?"} style={style}></Heading>
      <div className="item_list_container">
        <div className="cart-container">
          <div className="cart-header">
            <h3>
              TOTAL ORDERS: <span>{totalOrders}</span>
            </h3>
            <h3>
              TOTAL PRICE: <span>${totalPrice.toFixed(2)}</span>
            </h3>
            <button className="pay-btn">PAY</button>
          </div>

          <table className="cart-table">
            <thead>
              <tr>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="image-placeholder">
                      <img src={item.image} alt="" />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button className="delete-btn">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
