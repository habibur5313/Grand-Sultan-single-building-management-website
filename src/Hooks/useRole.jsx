import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user } = useContext(AuthContext); 
  const axiosPublic = useAxiosPublic();
  const { data: role = '', isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
                    const res = await axiosPublic.get(`/users/${user?.email}`)
                    return res.data.role || ''
},
    
  });
  return {role,isLoading};
};

export default useRole;
