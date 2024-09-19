import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShopMenuContext } from "../../../context/ShopMenuContext";
import axios, { Axios } from "axios";

const Products = ({ product }) => {
  const { _id, name, recipe, image, price } = product;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddCart = (product) => {
    const oneProduct = {
      name: product.name,
      recipe: product.recipe,
      image: product.image,
      email: user.email,
      price: product.price,
    };
    if (user) {
      console.log(typeof oneProduct);
      axios
        .post("http://localhost:5000/add-cart", oneProduct)
        .then((response) => console.log(response.data));
    } else {
      navigate("/sign-in");
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
