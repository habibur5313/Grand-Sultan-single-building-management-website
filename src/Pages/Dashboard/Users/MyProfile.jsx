import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  return (
    <div className="flex flex-col items-center justify-center py-20  mt-20 rounded-xl bg-purple-600 text-white">
      <img className="w-20" src={user?.photoURL} alt="" />
      <div>
                    <h2 className="text-3xl font-bold">Name : {user?.displayName}</h2>
                    <h3 className="text-2xl font-semibold">Email: {user?.email}</h3>
                    <h5 className="text-2xl font-medium">Agreement accept date: </h5>
                    <p className="text-xl font-medium">Rented apartment info: None</p>
      </div>
    </div>
  );
};

export default MyProfile;
