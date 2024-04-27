import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import Home from "./Pages/Home.jsx";

import AddTouristSpot from "./Pages/AddTouristSpot.jsx";
import MyList from "./Pages/MyList.jsx";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AllTouristSpot from "./Routes/AllTouristSpot.jsx";
import PrivateRoutes from "./Provider/PrivateRoutes.jsx";
import ViewDetailsPage from "./Pages/ViewDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/addTourist",
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
      {
        path: "/allTourist",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },{
        path:'/viewDetails/:_id',
        element:<ViewDetailsPage></ViewDetailsPage>,
        loader:()=>fetch("http://localhost:5000/touristSpots")
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
