import React, { useEffect, useState } from "react";
import "./AddCart.css";

const AddCart = () => {
  const [addedProduct, setAddedProduct] = useState([]);
  useEffect(() => {
    console.log(addedProduct);
  }, []);
  return (
    <div className="add_cart_page">
      <h3>this is cart page.</h3>
    </div>
  );
};

export default AddCart;
