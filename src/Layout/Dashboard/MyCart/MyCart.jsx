import Swal from "sweetalert2";
import Heading from "../../../componets/Heading/Heading";
import useAddCart from "../../../componets/hook/useAddCart";
import useAxiosSecure from "../../../componets/hook/useAxiosSecure";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./MyCart.css";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart, refetch] = useAddCart();
  const axiosSecure = useAxiosSecure();
  console.log(cart);
  const totalOrders = cart.length;
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );
  // this is delete button handler
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/product/${id}`).then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };
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
                <th>NO</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="image-placeholder">
                      <img src={item.image} alt="" />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => handelDelete(item._id)}
                      className="delete-btn"
                    >
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
