import React, { useContext } from "react";
import { ShopMenuContext } from "../../../../context/ShopMenuContext";
import Products from "../../Products/Products";
import "./ProductsContainers.css";

const ProductsContainer = () => {
  const { products } = useContext(ShopMenuContext);

  return (
    <div className="products_container_page">
      {products.map((product, index) => (
        <Products key={index} product={product}></Products>
      ))}
    </div>
  );
};

export default ProductsContainer;
