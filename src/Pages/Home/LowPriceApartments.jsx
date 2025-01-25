import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ApartmentCard from "../Apartment/AparmentCard";
import { Link } from "react-router-dom";

const LowPriceApartments = () => {
  const axiosPublic = useAxiosPublic();
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    axiosPublic.get("/lowPriceApartments").then((res) => {
      setApartments(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-4xl mt-20 text-purple-600 uppercase font-bold text-center">
         Low price apartments
      </h1>
      <p className="text-xl font-medium text-center max-w-xl mx-auto mt-4">
        Here are some apartments at lowest rates. You can book from here.
      </p>
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
                    <button className="btn shadow-xl border text-xl font-medium bg-purple-600 text-white px-10"><Link to={'/apartment'}>Show all</Link></button>
      </div>
    </>
  );
};

export default LowPriceApartments;
