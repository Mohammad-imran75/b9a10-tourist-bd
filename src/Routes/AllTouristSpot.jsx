import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  
  const sortedTouristSpot = [...allTouristSpot].sort((a, b) => {
    const costA = parseFloat(a.cost?.replace(/[^\d.-]/g, ''));
    const costB = parseFloat(b.cost?.replace(/[^\d.-]/g, ''));
    if (sortOrder === "ascending") {
        return costA - costB;
      } else {
        return costB - costA;
      }
    });

  return (
    <div className="font-montserrat">
       <Helmet>
        <title>All Tourst Spot</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="text-center font-bold text mt-10 ">
       <p className="text-3xl text-fuchsia-800"> Sorting :</p>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option className="font-bold text-xl text-teal-900 opacity-70" value="ascending">Ascending</option>
          <option className="font-bold text-xl text-teal-900 opacity-70" value="descending">Descending</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-10 p-4">
        {sortedTouristSpot.map((item) => (
          <SingleSpot key={item._id} item={item}></SingleSpot>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
