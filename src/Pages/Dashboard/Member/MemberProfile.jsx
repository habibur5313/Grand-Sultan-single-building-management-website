import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MemberProfile = () => {
    useEffect(() => {
      document.title = "Profile | Grand Sultan ";
    }, []);
  const [paymentHistory, setPaymentHistory] = useState();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.get(`/paymentHistory/${user?.email}`).then((res) => {
      setPaymentHistory(res.data);
    });
  }, []);
  return (
    <div className="card card-compact flex flex-col justify-center items-center mt-20 shadow-xl">
      <figure>
        <img className="w-20 rounded-xl" src={user?.photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold">name: {user?.displayName}</h2>
        <div className="text-xl font-medium">
        <p>email: {user.email}</p>
        {/* <p>Agreement accept time: {paymentHistory?.acceptDate.split('T')[1].split('.')[0]}</p> */}
        <p>Agreement accept date: {paymentHistory?.acceptDate?.split("T")[0]}</p>
        <p>Floor No: {paymentHistory?.floorNo}</p>
        <p>Block Name: {paymentHistory?.blockName}</p>
        <p>Room No: {paymentHistory?.apartmentNo}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
