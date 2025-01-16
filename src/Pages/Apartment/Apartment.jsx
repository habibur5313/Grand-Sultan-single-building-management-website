import React from "react";
import useApartments from "../../Hooks/useApartments";
import ApartmentCard from "./AparmentCard";

const Apartment = () => {
  const [apartments] = useApartments();

  return (
    <div>
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
