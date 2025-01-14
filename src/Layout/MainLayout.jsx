import React from "react";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div className="min-h-[calc(100vh-210px)]">
                    <Outlet></Outlet>
                    </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
