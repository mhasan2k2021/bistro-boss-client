import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const { _id, name, recipe, image, category, price } = product;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddCart = (_id) => {
    if (user) {
      console.log(_id);
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="product_container">
      <img src={image} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <p>{recipe}</p>
        <p>Price: {price}$</p>
        <button onClick={() => handleAddCart(_id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;
