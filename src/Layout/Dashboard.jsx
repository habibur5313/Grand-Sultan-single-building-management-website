import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { FaHistory, FaHome } from "react-icons/fa";
import {
  MdApartment,
  MdManageAccounts,
  MdOutlinePayment,
} from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircle, IoIosCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaCodePullRequest } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Grand Sultan ";
  }, []);
  const { role } = useRole();
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <button onClick={toggleDarkMode} className="absolute top-5 right-5">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </button>
     <div className={`
          ${
            darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
          }
        `}>
     <div
        className="container mx-auto"
      >
        {/* admin role */}
        {role === "admin" && (
          <>
            <button
              onClick={() => setMenu(true)}
              className="lg:hidden text-2xl font-medium mt-5 ml-5"
            >
              <IoMenuSharp />
            </button>
            <div className="lg:hidden min-h-screen">
              <div
                className={` ${
                  menu ? "block absolute top-0 left-0 z-50" : "hidden"
                }  w-72  px-4 bg-purple-700 text-white`}
              >
                <button
                  onClick={() => setMenu(false)}
                  className="absolute top-0 text-2xl font-medium right-1"
                >
                  <IoMdCloseCircle />
                </button>
                <h1 className="text-4xl text-center font-bold mt-20">
                  Build Care
                </h1>
                <p className="text-2xl text-center font-medium uppercase">
                  Building Management
                </p>
                <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/adminProfile"}
                    >
                      <CgProfile />
                      Admin Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/manageMembers"}
                    >
                      <MdManageAccounts />
                      Manage Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/makeAnnouncement"}
                    >
                      <IoIosCreate />
                      Make Announcement
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/agreementRequests"}
                    >
                      <FaCodePullRequest />
                      Agreement Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/manageCoupons"}
                    >
                      <RiCoupon2Fill />
                      Manage Coupons
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <NavLink className={"flex items-center gap-1"} to={"/"}>
                      <FaHome />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/apartment"}
                    >
                      <MdApartment />
                      Apartment
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <Outlet></Outlet>
              </div>
            </div>
          </>
        )}
        {/* admin role lg */}
        {role === "admin" && (
          <>
            <div className="flex gap-10 ">
              <div className="  w-96  px-4 bg-purple-700 text-white min-h-screen hidden lg:block ">
                <h1 className="text-4xl text-center font-bold mt-20">
                  Build Care
                </h1>
                <p className="text-2xl text-center font-medium uppercase">
                  Building Management
                </p>
                <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/adminProfile"}
                    >
                      <CgProfile />
                      Admin Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/manageMembers"}
                    >
                      <MdManageAccounts />
                      Manage Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/makeAnnouncement"}
                    >
                      <IoIosCreate />
                      Make Announcement
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/agreementRequests"}
                    >
                      <FaCodePullRequest />
                      Agreement Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/manageCoupons"}
                    >
                      <RiCoupon2Fill />
                      Manage Coupons
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <NavLink className={"flex items-center gap-1"} to={"/"}>
                      <FaHome />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/apartment"}
                    >
                      <MdApartment />
                      Apartment
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="w-full hidden lg:block">
                <Outlet></Outlet>
              </div>
            </div>
          </>
        )}
        {/* member role */}
        {role === "member" && (
          <>
            <button
              onClick={() => setMenu(true)}
              className="lg:hidden text-2xl font-medium mt-5 ml-5"
            >
              <IoMenuSharp />
            </button>
            <div className=" lg:hidden min-h-screen">
              <div
                className={` ${
                  menu ? "block absolute top-0 left-0 z-50" : "hidden"
                } w-72 py-10 px-4 bg-purple-700 text-white `}
              >
                <button
                  onClick={() => setMenu(false)}
                  className="absolute top-0 text-2xl font-medium right-1"
                >
                  <IoMdCloseCircle />
                </button>
                <h1 className="text-4xl text-center font-bold mt-20">
                  Build Care
                </h1>
                <p className="text-2xl text-center font-medium uppercase">
                  Building Management
                </p>
                <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/memberProfile"}
                    >
                      <CgProfile />
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/makePayment"}
                    >
                      <MdOutlinePayment />
                      Make payment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/paymentHistory"}
                    >
                      <FaHistory />
                      Payment history
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/memberAnnouncement"}
                    >
                      <TfiAnnouncement />
                      Announcements
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <NavLink className={"flex items-center gap-1"} to={"/"}>
                      <FaHome />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/apartment"}
                    >
                      <MdApartment />
                      Apartment
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <Outlet></Outlet>
              </div>
            </div>
          </>
        )}
        {/* member role lg */}
        {role === "member" && (
          <div className="flex gap-10">
            <div className="w-96 py-10 px-4 hidden lg:block bg-purple-700 text-white min-h-screen">
              <h1 className="text-4xl text-center font-bold mt-20">
                Build Care
              </h1>
              <p className="text-2xl text-center font-medium uppercase">
                Building Management
              </p>
              <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/dashboard/memberProfile"}
                  >
                    <CgProfile />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/dashboard/makePayment"}
                  >
                    <MdOutlinePayment />
                    Make payment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/dashboard/paymentHistory"}
                  >
                    <FaHistory />
                    Payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/dashboard/memberAnnouncement"}
                  >
                    <TfiAnnouncement />
                    Announcements
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink className={"flex items-center gap-1"} to={"/"}>
                    <FaHome />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/apartment"}
                  >
                    <MdApartment />
                    Apartment
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full hidden lg:block">
              <Outlet></Outlet>
            </div>
          </div>
        )}
        {/* user role */}
        {role === "admin" || role === "member" || (
          <>
            <button
              onClick={() => setMenu(true)}
              className="lg:hidden text-2xl font-medium mt-5 ml-5"
            >
              <IoMenuSharp />
            </button>
            <div className="lg:hidden min-h-screen">
              <div
                className={` ${
                  menu ? "block absolute top-0 left-0 z-50" : "hidden"
                } w-72 py-10 px-4 bg-purple-700 text-white `}
              >
                <button
                  onClick={() => setMenu(false)}
                  className="absolute top-0 text-2xl font-medium right-1"
                >
                  <IoMdCloseCircle />
                </button>
                <h1 className="text-4xl text-center font-bold mt-20">
                  Build Care
                </h1>
                <p className="text-2xl text-center font-medium uppercase">
                  Building Management
                </p>
                <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/userProfile"}
                    >
                      <CgProfile />
                      My profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/dashboard/userAnnouncement"}
                    >
                      <TfiAnnouncement />
                      Announcement
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <NavLink className={"flex items-center gap-1"} to={"/"}>
                      <FaHome />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"flex items-center gap-1"}
                      to={"/apartment"}
                    >
                      <MdApartment />
                      Apartment
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <Outlet></Outlet>
              </div>
            </div>
          </>
        )}
        {/* user role lg */}
        {role === "admin" || role === "member" || (
          <div className="flex gap-10">
            <div className="w-96 py-10 px-4 hidden lg:block bg-purple-700 text-white min-h-screen">
              <h1 className="text-4xl text-center font-bold mt-20">
                Build Care
              </h1>
              <p className="text-2xl text-center font-medium uppercase">
                Building Management
              </p>
              <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/dashboard/userProfile"}
                  >
                    <CgProfile />
                    My profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/dashboard/userAnnouncement"}
                  >
                    <TfiAnnouncement />
                    Announcement
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink className={"flex items-center gap-1"} to={"/"}>
                    <FaHome />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"flex items-center gap-1"}
                    to={"/apartment"}
                  >
                    <MdApartment />
                    Apartment
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full hidden lg:block">
              <Outlet></Outlet>
            </div>
          </div>
        )}
      </div>
     </div>
    </>
  );
};

export default Dashboard;
