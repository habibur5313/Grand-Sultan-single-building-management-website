import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthProvider";

const useAcceptedRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  const { data: acceptRequest = {}, refetch } = useQuery({
    queryKey: ["acceptRequests"],
    queryFn: async () => {
                    const res = await axiosSecure.get(`acceptRequests/${user?.email}`)
                    return res.data
                    
    },
  });
  return {acceptRequest,refetch}
};

export default useAcceptedRequest;
