import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ApartmentCard = ({ apartment }) => {
  const { apartment_image, apartment_no, block_name, floor_no, rent } =
    apartment;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleAddCart = () => {
                    
    }
  return (
    <div className=" bg-base-100 shadow-xl">
      <div className="h-full image-full border">
        <figure className="">
          <img
            className="w-full h-[300px] object-cover"
            src={apartment_image}
            alt=''
          />
        </figure>
        <div className="card-body flex flex-col flex-grow justify-between p-4">
          <div className="">
            <h2 className="text-3xl font-semibold"></h2>
            <p className="text-xl font-medium">
              Apartment No: {apartment_no} 
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">Block Name : {block_name}</p>
            <p className="text-xl font-medium">Floor No: {floor_no} </p>
            <p className="text-xl font-medium">
              Rent: {rent} 
            </p>
          </div>
          <div className="flex justify-end items-end mt-4">
          <button
            onClick={user ? handleAddCart : () => navigate("/login")}
            className="btn border-b-4 border-b-orange-400 text-orange-400 hover:btn-primary"
          >
            Add to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
