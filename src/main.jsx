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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/apartment',
        element: <Apartment></Apartment>
      },
    ]
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
