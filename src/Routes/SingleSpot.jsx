import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SingleSpot = ({ item }) => {
  const {
    touristSpot,
    _id,

    totalVisitor,
    traveltime,
    seasonality,
    cost,

    photo,
  } = item;
  return (
    <div className="card card-side font-montserrat font-semibold bg-violet-400 shadow-lg space-y-3">
      <Helmet>
        <title>SingleSpot page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <figure>
        <img
          className="lg:w-[300px] h-full rounded-xl p-8"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{touristSpot}</h2>
        <div className="flex justify-between">
          <p>Total Visitor : {totalVisitor}</p>
          <p>Seasonality : {seasonality}</p>
        </div>
        <div className="flex justify-between">
          <p>Average Cost : {cost}</p>
          <p>Travel Time: {traveltime}</p>
        </div>
        <div>
          <Link to={`/allTouristViewdetails/${_id}`}>
            <button className="btn btn-primary bg-emerald-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSpot;
