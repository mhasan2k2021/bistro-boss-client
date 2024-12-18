import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../componets/hook/useAxiosSecure";

export const ShopMenuContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("popular");
  const [addCart, setCart] = useState(null);

  // this is for loading all products.

  useEffect(() => {
    const axiosSecure = useAxiosSecure();
    axiosSecure.get(`/products/${category}`).then((res) => {
      setProducts(res.data);
    });
  }, [category]);

  //   this function for get specific data for menu

  //   const targetedProducts = (category) => {
  //     const getData = products.filter((item) => item.category === category);
  //     setProductCategory(getData);
  //   };

  const data = { products, addCart, setCart, setCategory };
  return (
    <ShopMenuContext.Provider value={data}>{children}</ShopMenuContext.Provider>
  );
};

export default DataProvider;
