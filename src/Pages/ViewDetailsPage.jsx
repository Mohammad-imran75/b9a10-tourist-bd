import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetailsPage = () => {
  const data = useLoaderData();
  const [item, setItem] = useState();
  console.log(item)
  const { _id } = useParams();
  console.log(_id);
  useEffect(() => {
    const findData = data.find((property) => property._id == _id);
    if (findData) {
      setItem(findData);
      console.log(findData);
    }
  }, [data, _id]);
  return (
    <div>
       <Helmet>
        <title>View Details Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        {item && (
            <>
              <div className="card mt-4 card-side font-montserrat font-semibold bg-pink-300 shadow-lg ">
      <figure>
        <img
          className="lg:w-[800px] pl-5 p-8"
          src={item.photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-stone-900 font-bold">
          Country Name : {item.coutryName}
        </h2>
        <h2 className="card-title">{item.touristSpot}</h2>
        <div className="flex justify-between">
          <p>Total Visitor : {item.totalVisitor}</p>
          <p>Seasonality : {item.seasonality}</p>
        </div>
        <p className="text-bold flex items-center gap-4">
          <FaLocationPin className="text-red-500 text-2xl"></FaLocationPin>
          {item.location}
        </p>
        <div className="flex justify-between">
          <p>Average Cost : {item.cost}</p>
          <p>Travel Time: {item.traveltime}</p>
        </div>
        <p>Description:{item.description}</p>
        <h1>Tourist Name : {item.name}</h1>
        <h1>Tourist email : {item.email}</h1>
      </div>
    </div>
            </>
        )

        }
    </div>
  )
};

export default ViewDetailsPage;
