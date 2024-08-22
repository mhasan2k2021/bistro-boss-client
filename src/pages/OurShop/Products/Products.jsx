import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  // this is for loading all products.

  useEffect(() => {
    fetch("../../../../public/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <h3>{product.name}</h3>
      ))}
    </div>
  );
};

export default Products;
