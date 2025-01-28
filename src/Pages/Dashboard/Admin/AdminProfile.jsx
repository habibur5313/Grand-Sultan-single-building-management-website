import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useMembers from "../../../Hooks/useMembers";
import useAgreementsRequest from "../../../Hooks/useAgrementsRequest";
import useCoupons from "../../../Hooks/useCoupons";

const AdminProfile = () => {
  useEffect(() => {
    document.title = "Profile | Grand Sultan ";
  }, []);
  const {user} = useContext(AuthContext)
  const [members] = useMembers();
  const [requests] = useAgreementsRequest()
  const [coupons] = useCoupons();
  return (
    <div className="card card-compact flex flex-col justify-center items-center mt-20 shadow-xl">
      <figure>
        <img className="w-20 rounded-xl" src={user?.photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold">name: {user?.displayName}</h2>
        <div className="text-xl font-medium">
          <p>email: {user.email}</p>
          <p>Members: {members.length} </p>
      <p>Agreement Request: {requests.length} </p>
      <p>Coupons: {coupons.length} </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
