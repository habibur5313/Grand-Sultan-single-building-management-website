import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApartmentCard = ({ apartment }) => {
  const { apartment_image, apartment_no, block_name, floor_no, rent, _id } =
    apartment;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleAddCart = () => {
    const agreementInfo = {
      name: user.displayName,
      email: user.email,
      apartment_id: _id,
      apartment_image,
      apartment_no,
      block_name,
      floor_no,
      rent,
      status: "pending",
    };
    axiosSecure
      .post(`/agreements/${user.email}`, agreementInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Agreement Add to Cart successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "One User One Agreement",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className=" bg-base-100 shadow-xl">
      <div className="h-full image-full border">
        <figure className="">
          <img
            className="w-full h-[300px] object-cover"
            src={apartment_image}
            alt=""
          />
        </figure>
        <div className="card-body flex flex-col flex-grow justify-between p-4">
          <div className="">
            <p className="text-xl font-medium">Floor No: {floor_no} </p>
            <p className="text-xl font-medium">Block Name : {block_name}</p>
            <p className="text-xl font-medium">Apartment No: {apartment_no}</p>
            <p className="text-xl font-medium">Rent: ${rent}</p>
          </div>
          <div className="flex justify-end items-end mt-4">
            <button
              onClick={
                user
                  ? handleAddCart
                  : () => navigate("/login", { state: { pathname } })
              }
              className="btn border-b-4 text-xl font-medium border-b-orange-400 text-orange-400 hover:btn-primary"
            >
              Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
