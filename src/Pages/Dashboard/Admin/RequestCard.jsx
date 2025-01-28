import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAgreementsRequest from "../../../Hooks/useAgrementsRequest";
import Swal from "sweetalert2";

const RequestCard = ({ request }) => {
  const [, refetch] = useAgreementsRequest();
  const {
    name,
    email,
    apartment_id,
    apartment_image,
    apartment_no,
    block_name,
    floor_no,
    rent,
    _id,
    date,
  } = request;
  const axiosSecure = useAxiosSecure();
  const handleStatus = (button) => {
    const RequestInfo = {
      name,
      email,
      apartment_id,
      apartment_image,
      apartment_no,
      block_name,
      floor_no,
      rent,
      request_id : _id,
      date: new Date(),
      status: 'checked'
    };
    axiosSecure
      .patch(
        `/agreementsRequest/${_id}?button=${button}&email=${email}`,
        RequestInfo
      )
      .then((res) => {
        if(res.data.insertedId === null){
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: `This user agreements already one accepted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else{
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${button} successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
        console.log(res.data);
      });
  };
  return (
    <div className="shadow-xl ">
      <div className="h-full image-full border rounded-xl">
        <figure className="">
          <img
            className="w-full h-[300px] rounded-xl object-cover"
            src={apartment_image}
            alt=""
          />
        </figure>
        <div className="card-body flex flex-col flex-grow justify-between p-4">
          <p className="text-xl font-medium">User Name: {name} </p>
          <p className="text-xl font-medium">User Email: {email} </p>
          <p className="text-xl font-medium">Floor No: {floor_no} </p>
          <p className="text-xl font-medium">Block Name : {block_name}</p>
          <p className="text-xl font-medium">Apartment No: {apartment_no}</p>
          <p className="text-xl font-medium">Rent: ${rent}</p>
          <p className="text-xl font-medium">
            Request date: {date.split("T")[0]}{" "}
          </p>
          <div className="flex justify-end items-end mt-4 gap-5">
            <button
              onClick={() => handleStatus("accept")}
              className="btn border-b-4 text-xl font-medium border-b-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Accept
            </button>
            <button
              onClick={() => handleStatus("reject")}
              className="btn border-b-4 text-xl font-medium border-b-red-700 text-red-700 hover:bg-red-700 hover:text-white"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
