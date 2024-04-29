import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import SpotCard from "./SpotCard";
import Feedback from "./Feedback";
import Countries from "../Routes/Countries";
import { Helmet } from "react-helmet";
import LocalCuisine from "./LocalCuisine";

const Home = () => {
  const touristSpots = useLoaderData().slice(0, 6);
  console.log(touristSpots);
  return (
    <div>
      <Helmet>
        <title>Tourist Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div>
        <Slider></Slider>
        <h2 className="text-5xl text-center mt-7 text-violet-500 font-extrabold">
          Tourist Spot in Different <br /> Country <span className="text-purple-600"></span> 
        </h2>
        <div className="grid lg:grid-cols-3 gap-4 mt-10 p-4">
          {touristSpots.map((spot) => (
            <SpotCard key={spot._id} spot={spot}></SpotCard>
          ))}
        </div>
        <Feedback></Feedback>
        <Countries></Countries>
        <LocalCuisine></LocalCuisine>
      </div>
    </div>
  );
};

export default Home;
