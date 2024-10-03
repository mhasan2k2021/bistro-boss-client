import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import useAuth from "./useAuth";

const useAddCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user?.email);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/added-product?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useAddCart;
