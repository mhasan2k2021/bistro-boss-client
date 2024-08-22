import { createContext, useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";

export const ShopMenuContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("popular");
  // this is for loading all products.

  useEffect(() => {
    fetch("../../../../public/products.json")
      .then((res) => res.json())
      .then((data) => {
        const getData = data.filter((item) => item.category === category);
        setProducts(getData);
      });
  }, [category]);

  //   this function for get specific data for menu

  //   const targetedProducts = (category) => {
  //     const getData = products.filter((item) => item.category === category);
  //     setProductCategory(getData);
  //   };
  console.log(category);

  const data = { products, setCategory };
  return (
    <ShopMenuContext.Provider value={data}>{children}</ShopMenuContext.Provider>
  );
};

export default DataProvider;
