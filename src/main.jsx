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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

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
       <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
