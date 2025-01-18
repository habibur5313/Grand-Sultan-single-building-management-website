import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAgreementsRequest from "../../../Hooks/useAgrementsRequest";
import RequestCard from "./RequestCard";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [requests,refetch] = useAgreementsRequest()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{
                    requests.map(request => <RequestCard key={request._id} request={request}></RequestCard>)
}
    </div>
  );
};

export default AllUsers;