import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <AboutUs></AboutUs>
        <Contact></Contact>{" "}
      </div>
    </div>
  );
};

export default Home;
