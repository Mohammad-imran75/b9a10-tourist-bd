import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";
import { useState } from "react";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  
  const sortedTouristSpot = [...allTouristSpot].sort((a, b) => {
    const costA = parseFloat(a.cost.replace(/[^\d.-]/g, ''));
    const costB = parseFloat(b.cost.replace(/[^\d.-]/g, ''));
    if (sortOrder === "ascending") {
        return costA - costB;
      } else {
        return costB - costA;
      }
    });

  return (
    <div>
      <div className="text-center mt-10 ">
        Sorting :
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option className="font-bold" value="ascending">Ascending</option>
          <option className="font-bold" value="descending">Descending</option>
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
