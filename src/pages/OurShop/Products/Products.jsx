import React, { useContext, useEffect, useState } from "react";
import { ShopMenuContext } from "../../../assets/context/ShopMenuContext";
import "./Products.css";

const Products = ({ product }) => {
  const { _id, name, recipe, image, category, price } = product;

  return (
    <div className="product_container">
      <img src={image} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <p>{recipe}</p>
        <p>Price: {price}$</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;
