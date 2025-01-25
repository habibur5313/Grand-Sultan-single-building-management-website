import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCoupons = () => {
  const axiosPublic = useAxiosPublic();
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["couponCodes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/couponCodes");
      return res.data;
    },
  });
  return [coupons,refetch]
};

export default useCoupons;
