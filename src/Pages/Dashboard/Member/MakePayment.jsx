import React from "react";
import { NavLink } from "react-router-dom";
import useAcceptedRequest from "../../../Hooks/useAcceptedRequest";

const MakePayment = () => {
  const { acceptRequest } = useAcceptedRequest();
  const {
    name,
    email,
    apartment_id,
    apartment_image,
    apartment_no,
    block_name,
    floor_no,
    rent,
    request_id,
    date,
    status,
  } = acceptRequest;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="">
        <h1 className="text-3xl mt-5 font-semibold text-purple-700 text-center">
          Make Payments
        </h1>
        <form onSubmit={handleSubmit}>
          {/* email and name */}
          <div className="px-4 flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                type="text"
                className="input input-bordered h-14 w-full text-black"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                value={name}
                type="text"
                className="input input-bordered w-full h-14 text-black"
              />
            </div>
          </div>
          {/* floor and block name */}
          <div className="px-4 flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Floor No.</span>
              </label>
              <input
                value={floor_no}
                type="text"
                className="input input-bordered h-14 w-full text-black"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Block Name</span>
              </label>
              <input
                value={block_name}
                type="text"
                className="input input-bordered w-full h-14 text-black"
              />
            </div>
          </div>
          {/* apartment no and rent */}
          <div className="px-4 flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Apartment No.</span>
              </label>
              <input
                value={apartment_no}
                type="text"
                className="input input-bordered h-14 w-full text-black"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rent</span>
              </label>
              <input
                value={rent}
                type="text"
                className="input input-bordered w-full h-14 text-black"
              />
            </div>
          </div>
          {/* submit */}
          <div className="px-4 mt-10">
            <NavLink>
              <button className="btn btn-accent">Submit</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
