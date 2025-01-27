import React, { useEffect } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import AboutBuilding from "./AboutBuilding";
import AllCoupons from "./AllCoupons";
import LowPriceApartments from "./LowPriceApartments";
import LocationMap from "./locationMap";

const Home = () => {
    useEffect(() => {
      document.title = "Home | Grand Sultan ";
    }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
      <AboutBuilding></AboutBuilding>
      <AllCoupons></AllCoupons>
      <LowPriceApartments></LowPriceApartments>
      <LocationMap></LocationMap>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
