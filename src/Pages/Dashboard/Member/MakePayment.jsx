import React from "react";
import { Link, NavLink } from "react-router-dom";
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

  const handleMonth = (e) => {
    e.preventDefault();
    const month = e.target.value;
    console.log(month);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-3xl mt-5 font-semibold text-purple-700 text-center">
          Make Payments
        </h1>
        <form onSubmit={handleSubmit} className="text-black">
          {/* email and name */}
          <div className="px-4 flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                type="text"
                className="input input-bordered h-14 w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                value={name}
                type="text"
                className="input input-bordered w-full h-14 "
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
                className="input input-bordered h-14 w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Block Name</span>
              </label>
              <input
                value={block_name}
                type="text"
                className="input input-bordered w-full h-14 "
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
                className="input input-bordered h-14 w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rent</span>
              </label>
              <input
                value={rent}
                type="text"
                className="input input-bordered w-full h-14 "
              />
            </div>
          </div>
          {/* month and date */}
          <div className="px-4 flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Request Accept Date</span>
              </label>
              <input
                value={date?.split("T")[0]}
                type="text"
                className="input input-bordered h-14 w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Month</span>
              </label>
              <select
                onChange={handleMonth}
                name="month"
                defaultValue={"Select Month"}
                className="select select-bordered w-full h-14"
              >
                <option disabled>Select Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
          </div>
        </form>
        {/* submit */}
        <div className="px-4 mt-10">
          <Link to={'/dashboard/payments'}><button className="btn btn-accent">Submit</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
