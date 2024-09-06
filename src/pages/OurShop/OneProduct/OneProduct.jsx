import React, { useContext } from "react";
import "./OneProduct.css";
import { ShopMenuContext } from "../../../context/ShopMenuContext";

const OneProduct = () => {
  const { OneProduct } = useContext(ShopMenuContext);
  console.log(OneProduct);
  return (
    <div className="one_product_page">
      <h3>this is single product page.</h3>
    </div>
  );
};

export default OneProduct;
