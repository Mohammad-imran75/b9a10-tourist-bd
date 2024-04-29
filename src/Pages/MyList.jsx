import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListSingleSpot from "./MyListSingleSpot";
import { Helmet } from "react-helmet";

const MyList = () => {
  const { user} = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  console.log(spots);
  const url = `https://assignment-ten-serverside.vercel.app/touristSpot?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  return (
    <div>
         <Helmet>
        <title>My List Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {
        <div className="gird lg:grid-cols-2 mt-10 bg-blue-300">
          {spots.map((spot) => (
            <MyListSingleSpot key={spot._id} setSpots={setSpots} spots={spots} spot={spot}></MyListSingleSpot>
          ))}
        </div>
      }
    </div>
  );
};

export default MyList;
