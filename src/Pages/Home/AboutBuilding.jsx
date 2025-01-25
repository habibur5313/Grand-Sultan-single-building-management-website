import React from "react";

const AboutBuilding = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-4xl text-purple-600 uppercase font-bold text-center">
          About the building
        </h1>
        <p className="text-xl font-medium text-center max-w-xl mx-auto mt-4">
          Welcome to Build Care, a marvel of modern architecture nestled in the
          heart of Dhaka. Our building stands as a testament to innovative
          design, sustainable practices, and community-centric spaces.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 bg-purple-600 text-white py-10 rounded-xl">
        <div className="flex flex-col space-y-3 pr-10 border-r-2">
          <h2 className="text-3xl font-semibold">Building Details</h2>
          <div className="text-xl font-medium">
            <p>
              <span className="text-2xl">Location:</span> Dhaka,Bangladesh
            </p>
            <p>
              <span className="text-2xl">Year Completed:</span> 2020
            </p>
            <p>
              <span className="text-2xl">Architect:</span> SM Nahid Hasan
            </p>
            <p>
              <span className="text-2xl">Floors:</span> 7 floors
            </p>
            <p>
              <span className="text-2xl">Total Area:</span> 14000 sq. ft
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 pr-10 border-r-2">
          <h2 className="text-3xl font-semibold">Architectural Highlights</h2>
          <div className="text-xl font-medium">
            <p>
              <span className="text-2xl"> Glass Facade: </span>Allowing natural light to flood the interiors.
            </p>
            <p>
              <span className="text-2xl">Open Layouts: </span>Promoting flexibility and collaboration.
            </p>
            <p>
              <span className="text-2xl">Art Installations: </span>Showcasing works from local artists.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 pr-10 border-r-2">
          <h2 className="text-3xl font-semibold">Key Features</h2>
          <div className="text-xl font-medium">
            <p>
              <span className="text-2xl">Eco-friendly:</span> Our building
              utilizes state-of-the-art green technology.
            </p>
            <p>
              <span className="text-2xl">Accessibility:</span> Designed to be
              inclusive for everyone.
            </p>
            <p>
              <span className="text-2xl">Amenities:</span> Rooftop garden,
              fitness center, coworking spaces, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
