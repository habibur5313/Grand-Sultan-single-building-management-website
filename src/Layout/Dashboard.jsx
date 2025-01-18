import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const role = "admin";
  const [menu, setMenu] = useState(false);
  console.log(menu);

  return (
    <div className="container mx-auto">
      {/* admin role */}
      {role === 'admin' && 
      <>
      <h1 onClick={() => setMenu(true)} className="lg:hidden">Home</h1>
        <div className="lg:hidden ">
        <div className={` ${menu ? 'block absolute top-0 left-0' : 'hidden' }  w-72  px-4 bg-purple-700 text-white min-h-screen `}>
          <p onClick={() => setMenu(false)} className="absolute top-0 right-1">close</p>
          <h1 className="text-4xl text-center font-bold mt-20">
          Build Care
          </h1>
          <p className="text-2xl text-center font-medium uppercase">
          Building Management
          </p>
          <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
            <li>
              <NavLink to={'/dashboard/adminProfile'}>Admin Profile</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/manageMembers'}>Manage Members</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/makeAnnouncement'}>Make Announcement</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/agreementRequests'}>Agreement Requests</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/manageCoupons'}>Manage Coupons</NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/apartment'}>Apartment</NavLink>
              </li>
          </ul>
        </div>
        <div className="w-full">
                  <Outlet></Outlet>
        </div>
      </div>
      </>
     }
     {/* admin role lg */}
     {role === 'admin' && 
      <>
        <div className="flex gap-10 ">
        <div className='  w-72  px-4 bg-purple-700 text-white min-h-screen hidden lg:block '>
          <h1 className="text-4xl text-center font-bold mt-20">
          Build Care
          </h1>
          <p className="text-2xl text-center font-medium uppercase">
          Building Management
          </p>
          <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
            <li>
              <NavLink to={'/dashboard/adminProfile'}>Admin Profile</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/manageMembers'}>Manage Members</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/makeAnnouncement'}>Make Announcement</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/agreementRequests'}>Agreement Requests</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/manageCoupons'}>Manage Coupons</NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/apartment'}>Apartment</NavLink>
              </li>
          </ul>
        </div>
        <div className="w-full hidden lg:block">
                  <Outlet></Outlet>
        </div>
      </div>
      </>
     }
      {/* member role */}
      {role === "member" && (
        <div className="flex gap-10">
          <div className="w-72 py-10 px-4 bg-purple-700 text-white min-h-screen">
            <h1 className="text-4xl text-center font-bold mt-20">Build Care</h1>
            <p className="text-2xl text-center font-medium uppercase">
              Building Management
            </p>
            <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
              <li>
                <NavLink to={"/dashboard/memberProfile"}>My Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/makePayment"}>Make payment</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  Payment history
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/memberAnnouncement"}>
                  Announcements
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apartment"}>Apartment</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      )}
      {/* user role */}
      {role === "user" && (
        <div className="flex gap-10">
          <div className="w-72 py-10 px-4 bg-purple-700 text-white min-h-screen">
            <h1 className="text-4xl text-center font-bold mt-20">Build Care</h1>
            <p className="text-2xl text-center font-medium uppercase">
              Building Management
            </p>
            <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
              <li>
                <NavLink to={"/dashboard/userProfile"}>My profile</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/userAnnouncement"}>
                  Announcement
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apartment"}>Apartment</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
