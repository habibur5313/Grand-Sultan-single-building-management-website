import React, { useEffect, useState } from "react";
import ApartmentCard from "./AparmentCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const Apartment = () => {
  const { data } = useLoaderData();
  const [apartments, setApartments] = useState(data);
  const axiosPublic = useAxiosPublic();

  const handleSearchByRent = (e) => {
    e.preventDefault();
    const search = e.target.value;
    if (search.length === 0) {
      setApartments(data);
    } else {
      axiosPublic.get(`/search?search=${search}`).then((res) => {
        setApartments(res.data);
      });
    }
  };

  return (
    <div>
      <div className="w-11/12 mb-8 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto">
        <input
          type="search"
          name="search"
          onChange={handleSearchByRent}
          placeholder="search by rent (less than or equal"
          className="input text-black input-bordered h-14 w-full"
          id=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
