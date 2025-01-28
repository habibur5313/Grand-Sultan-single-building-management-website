import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
    useEffect(() => {
      document.title = "Profile  | Grand Sultan ";
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
      <p>Agreement accept date: none</p>
          <p> Rented apartment info: none</p>
      </div>
    </div>
  </div>
  );
};

export default MyProfile;
