import React, { useEffect } from "react";
import LocationMap from "../Home/locationMap";
import Contact from "../Home/Contact";

const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts | Grand Sultan ";
  }, []);
  return (
    <div>
      <LocationMap></LocationMap>
      <Contact></Contact>
    </div>
  );
};

export default Contacts;
