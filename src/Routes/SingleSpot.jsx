import React from "react";
import { FaLocationPin } from "react-icons/fa6";

const SingleSpot = ({ item }) => {
  const {
    touristSpot,
    name,
    email,
    totalVisitor,
    traveltime,
    seasonality,
    cost,
    description,
    location,
    coutryName,
    photo,
  } = item;
  return (
    <div className="card font-montserrat font-semibold bg-pink-300 shadow-lg space-y-3">
      <figure>
        <img
          className="lg:w-[600px] h-full rounded-xl p-8"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-stone-900 font-bold">
          Country Name : {coutryName}
        </h2>
        <h2 className="card-title">{touristSpot}</h2>
        <div className="flex justify-between">
          <p>Total Visitor : {totalVisitor}</p>
          <p>Seasonality : {seasonality}</p>
        </div>
        <p className="text-bold flex items-center gap-4">
          <FaLocationPin className="text-red-500 text-2xl"></FaLocationPin>
          {location}
        </p>
        <div className="flex justify-between">
          <p>Average Cost : {cost}</p>
          <p>Travel Time: {traveltime}</p>
        </div>
        <p>Description:{description}</p>
        <h1>Tourist Name : {name}</h1>
        <h1>Tourist email : {email}</h1>
      </div>
    </div>
  );
};

export default SingleSpot;
