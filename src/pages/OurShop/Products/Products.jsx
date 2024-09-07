import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShopMenuContext } from "../../../context/ShopMenuContext";

const Products = ({ product }) => {
  const { _id, name, recipe, image, category, price } = product;
  const { user, setLoading } = useContext(AuthContext);
  const { setOneProductId } = useContext(ShopMenuContext);

  const navigate = useNavigate();

  const handleAddCart = (_id) => {
    if (user) {
      console.log(_id);
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
