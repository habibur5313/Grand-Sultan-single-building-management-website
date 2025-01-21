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
import MemberProfile from "./Pages/Dashboard/Member/MemberProfile";
import MakePayment from "./Pages/Dashboard/Member/MakePayment";
import PaymentHistory from "./Pages/Dashboard/Member/PaymentHistory";
import AdminRoute from "./Route/AdminRoute";
import MemberAnnouncement from "./Pages/Dashboard/Member/MemberAnnouncement";
import Payments from "./Pages/Dashboard/Member/Payments";

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
      // admin path
      {
        path: "adminProfile",
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>,
      },
      {
        path: "manageMembers",
        element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute> ,
      },
      {
        path: "makeAnnouncement",
        element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute> ,
      },
      {
        path: "agreementRequests",
        element: <AdminRoute><AgreementRequests></AgreementRequests></AdminRoute> ,
      },
      {
        path: "manageCoupons",
        element: <AdminRoute><ManageCoupons></ManageCoupons></AdminRoute> ,
      },
      // member path
      {
           path: 'memberProfile',
           element: <PrivateRoute><MemberProfile></MemberProfile></PrivateRoute>
      },
      {
           path: 'makePayment',
           element: <PrivateRoute><MakePayment></MakePayment></PrivateRoute>
      },
      {
           path: 'payments',
           element: <PrivateRoute><Payments></Payments></PrivateRoute>
      },
      {
           path: 'paymentHistory',
           element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
           path: 'memberAnnouncement',
           element: <PrivateRoute><MemberAnnouncement></MemberAnnouncement></PrivateRoute>
      },
       // user path
       {
        path: "userProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "userAnnouncement",
        element: (
          <PrivateRoute>
            <Announcement></Announcement>
          </PrivateRoute>
        ),
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
