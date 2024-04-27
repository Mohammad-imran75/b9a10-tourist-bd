import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  console.log(spot);
  const {
    _id,
    touristSpot,
    totalVisitor,
    traveltime,
    seasonality,
    cost,
    location,
    coutryName,
    photo,
  } = spot;
  return (
    <div className="card font-montserrat font-semibold bg-stone-400 shadow-lg space-y-3">
      <figure>
        <img
        className="lg:w-[600px] h-full rounded-xl p-8"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-stone-900 font-bold">Country Name : {coutryName}</h2>
        <h2 className="card-title">{touristSpot
        }</h2>
        <div className="flex justify-between">
            <p>Total Visitor : {totalVisitor}</p>
            <p>Seasonality : {seasonality}</p>
        </div>
        <p className="text-bold flex items-center gap-4"><FaLocationPin className="text-red-500 text-2xl"></FaLocationPin>{location}</p>
        <div className="flex justify-between">
        <p>Average Cost : {cost}</p>
        <p>Travel Time: {traveltime}</p>
        </div>
        <div className="btn-end">
            <Link to={`/viewDetails/${_id}`}><button className="btn btn-secondary bg-purple-500 w-full mt-2">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
