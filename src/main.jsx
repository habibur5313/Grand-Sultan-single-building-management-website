import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Authentication/Register";
import Login from "./Pages/Authentication/Login";
import Apartment from "./Pages/Apartment/Apartment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./Route/PrivateRoute";
import Dashboard from "./Layout/Dashboard";
import MyProfile from "./Pages/Dashboard/Users/MyProfile";
import Announcement from "./Pages/Dashboard/Users/Announcement";
import AdminProfile from "./Pages/Dashboard/Admin/AdminProfile";
import ManageMembers from "./Pages/Dashboard/Admin/ManageMembers";
import MakeAnnouncement from "./Pages/Dashboard/Admin/MakeAnnouncement";
import AgreementRequests from "./Pages/Dashboard/Admin/AgreementRequests";
import ManageCoupons from "./Pages/Dashboard/Admin/ManageCoupons";
import axios from "axios";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
        loader: () =>
          axios.get(`${import.meta.env.VITE_api}/apartments`),
      
      },
    ],
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user path
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "announcement",
        element: (
          <PrivateRoute>
            <Announcement></Announcement>
          </PrivateRoute>
        ),
      },
      // admin path
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageMembers",
        element: <ManageMembers></ManageMembers> ,
      },
      {
        path: "makeAnnouncement",
        element: <MakeAnnouncement></MakeAnnouncement> ,
      },
      {
        path: "agreementRequests",
        element: <AgreementRequests></AgreementRequests> ,
      },
      {
        path: "manageCoupons",
        element: <ManageCoupons></ManageCoupons> ,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
