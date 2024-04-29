import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const CountriesDetails = () => {
    const item = useLoaderData();
    console.log(item);
    const {_id} = useParams();
    console.log(_id)
    const [data,setData]=useState(null);
    console.log(data)
    useEffect(() => {
        const findData = item.find((property) => property._id == _id);
        if (findData) {
          setData(findData);
          console.log(findData);
        }
      }, [_id]);
      if(!data){
        return <span className="loading loading-spinner loading-lg"></span>
      };
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
      } = data;
    return (
        <div className="card lg:max-w-5xl mx-auto pl-10 mt-5 mb-5 font-montserrat font-semibold bg-violet-400 shadow-lg space-y-6">
        <Helmet>
         <title>All view details page</title>
         <meta name="description" content="Helmet application" />
       </Helmet>
       <figure>
         <img
           className="lg:w-[600px] mx-auto h-full rounded-xl p-8"
           src={photo}
           alt="Movie"
         />
       </figure>
       <div className="card-body">
         <h2 className="text-stone-900 text-2xl font-bold">
           Country Name : {coutryName}
         </h2>
         <h2 className="card-title">{touristSpot}</h2>
         <div className="flex justify-between">
           <p>Total Visitor : {totalVisitor}</p>
           <p>Seasonality : {seasonality}</p>
         </div>
         <p className="text-bold flex items-center gap-4">
           <FaLocationPin className="text-red-500 text-2xl"></FaLocationPin>
           loction : {location}
         </p>
         <div className="flex justify-between">
           <p>Average Cost : {cost}</p>
           <p>Travel Time: {traveltime}</p>
         </div>
         <hr className="border-2 m-2" />
         <p>Description : {description}</p>
         <h1>Tourist Name : {name}</h1>
         <hr className="border-2 border-gray-500" />
         <h1>Tourist email : {email}</h1>
       </div>
     </div>
    );
};

export default CountriesDetails;