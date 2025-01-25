import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import AboutBuilding from "./AboutBuilding";
import AllCoupons from "./AllCoupons";
import LowPriceApartments from "./LowPriceApartments";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
      <AboutBuilding></AboutBuilding>
      <AllCoupons></AllCoupons>
      <LowPriceApartments></LowPriceApartments>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
