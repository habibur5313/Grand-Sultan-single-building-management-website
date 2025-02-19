import React from "react";

const LocationMap = () => {
  return (
    <>
      <h1 className="text-3xl  font-bold text-center text-purple-600">
        Grand Sultan Tea Resort & Golf
      </h1>
      <p className="text-xl font-semibold text-center max-w-xl mx-auto mt-4">
        Sreemangal, Moulvibazar, Sylhet, Bangladesh
      </p>
      <iframe
        className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] mt-10 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.7346759010536!2d91.76393924946339!3d24.3017908072992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375179ed1539cf29%3A0xdeb2126f074c1faa!2sGrand%20Sultan%20Tea%20Resort%20%26%20Golf!5e0!3m2!1sen!2sbd!4v1737872243148!5m2!1sen!2sbd"
      ></iframe>
    </>
  );
};

export default LocationMap;
