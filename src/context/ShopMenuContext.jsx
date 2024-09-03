import { createContext, useEffect, useState } from "react";

export const ShopMenuContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("popular");
  // this is for loading all products.

  useEffect(() => {
    // fetch("../../../../public/products.json")
    fetch(`http://localhost:5000/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [category]);

  //   this function for get specific data for menu

  //   const targetedProducts = (category) => {
  //     const getData = products.filter((item) => item.category === category);
  //     setProductCategory(getData);
  //   };

  const data = { products, setCategory };
  return (
    <ShopMenuContext.Provider value={data}>{children}</ShopMenuContext.Provider>
  );
};

export default DataProvider;
