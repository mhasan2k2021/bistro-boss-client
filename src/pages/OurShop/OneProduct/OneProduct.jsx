import React, { useEffect, useState, useTransition } from "react";
import "./OneProduct.css";
import { useParams } from "react-router-dom";

const OneProduct = ({ product }) => {
  const [oneProduct, setOneProduct] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/one-product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOneProduct(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="one_product_page">
      <div className="one_product">
        <img src={oneProduct.image} alt="" />
        <div className="one_product_details">
          <h3>{oneProduct.name}</h3>
          <p>{oneProduct.recipe}</p>
          <p>Price: {oneProduct.price}$</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
