import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShopMenuContext } from "../../../context/ShopMenuContext";

const Products = ({ product }) => {
  const { _id, name, recipe, image, category, price } = product;
  const { user } = useContext(AuthContext);
  const { setOneProduct } = useContext(ShopMenuContext);
  const navigate = useNavigate();

  const handleAddCart = (_id) => {
    if (user) {
      console.log(_id);
    } else {
      navigate("/sign-in");
    }
  };

  const showProduct = (product) => {
    navigate(`/dish/${_id}`);
    console.log("hello");
    setOneProduct(_id);
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
            e.stopPropagation();
            handleAddCart(_id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Products;
