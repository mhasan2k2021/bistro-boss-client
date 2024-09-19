import React, { useContext } from "react";
import "./Products.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Products = ({ product }) => {
  const { _id, name, recipe, image, price } = product;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCart = (product) => {
    const oneProduct = {
      name: product.name,
      recipe: product.recipe,
      image: product.image,
      email: user.email,
      price: product.price,
    };
    if (user) {
      axios
        .post("http://localhost:5000/add-cart", oneProduct)
        .then((response) => console.log(response.data));
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
