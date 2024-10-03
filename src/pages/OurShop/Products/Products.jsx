import React, { useContext } from "react";
import "./Products.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import useAddCart from "../../../componets/hook/useAddCart";
import { useAxiosSecure } from "../../../componets/hook/useAxiosSecure";

const Products = ({ product }) => {
  const { _id, name, recipe, image, price } = product;
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useAddCart();

  const handleAddCart = (product) => {
    if (user) {
      const oneProduct = {
        id: product._id,
        email: user.email,
      };
      console.log(oneProduct);
      axiosSecure.post("/add-cart", oneProduct).then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Add to Cart",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      });
    } else {
      navigate("/sign-in", { state: { from: location } });
    }
  };

  return (
    <Link className="product_container" to={`/dish/${_id}`}>
      <img src={image} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <p>{recipe}</p>
        <p>Price: {price}$</p>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Products;
