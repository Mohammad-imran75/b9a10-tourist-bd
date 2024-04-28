import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListSingleSpot from "./MyListSingleSpot";

const MyList = () => {
  const { user, loading } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  console.log(spots);
  const url = `http://localhost:5000/touristSpots?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  return (
    <div>
      {
        <div className="gird lg:grid-cols-2 mt-10 bg-blue-300">
          {spots.map((spot) => (
            <MyListSingleSpot key={spot._id} spot={spot}></MyListSingleSpot>
          ))}
        </div>
      }
    </div>
  );
};

export default MyList;
