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

import ViewDetailsPage from "./Pages/ViewDetailsPage.jsx";
import PrivateRoutes from "./Provider/PrivateRoutes.jsx";
import Update from "./Pages/Update.jsx";
import AllTouristViewDetails from "./Routes/AllTouristViewDetails.jsx";
import CountriesMatchDetails from "./Routes/CountriesMatchDetails.jsx";
import CountriesDetails from "./Routes/CountriesDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment-ten-serverside.vercel.app/touristSpots"),
        
      },
      {
        path: "/addTourist",
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: `/mylist`,
        element: <MyList></MyList>,
        
      },
      {
        path: "/allTourist",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("https://assignment-ten-serverside.vercel.app/touristSpots"),
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
        element:<PrivateRoutes><ViewDetailsPage></ViewDetailsPage></PrivateRoutes>,
        loader:()=>fetch("https://assignment-ten-serverside.vercel.app/touristSpots")
      },{
        path:"*",
        element:<ErrorPage></ErrorPage>
      },{
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assignment-ten-serverside.vercel.app/touristSpots/${params.id}`)
      },{
        path:'/allTouristViewdetails/:_id',
        element:<PrivateRoutes><AllTouristViewDetails></AllTouristViewDetails></PrivateRoutes>,
        loader:()=>fetch('https://assignment-ten-serverside.vercel.app/touristSpots')
      },{
        path:'/countriesDetails/:countryName',
        element:<CountriesMatchDetails></CountriesMatchDetails>
      },{
        path:'/countryViewDetails/:_id',
        element:<CountriesDetails></CountriesDetails>,
        loader:()=>fetch('https://assignment-ten-serverside.vercel.app/touristSpots')
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
