import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMembers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: members = [] ,refetch} = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
                    const res = await axiosSecure.get('/members')
                  return res.data
                    
    },
  });
  return [members,refetch]
};

export default useMembers;
