import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const role = 'admin'
  

  return (
    <div className="container mx-auto">
       {role === 'admin' && 
        <div className="flex gap-10">
        <div className="w-72 py-10 px-4 bg-purple-700 text-white min-h-screen">
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
     }
     {role === 'user' &&  <div className="flex gap-10">
          <div className="w-72 py-10 px-4 bg-purple-700 text-white min-h-screen">
            <h1 className="text-4xl text-center font-bold mt-20">
              Build Care
            </h1>
            <p className="text-2xl text-center font-medium uppercase">
              Building Management
            </p>
            <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
              <li>
                <NavLink to={'/dashboard/myProfile'}>My profile</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/announcement'}>Announcement</NavLink>
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
        </div>}
    </div>
  );
};

export default Dashboard;