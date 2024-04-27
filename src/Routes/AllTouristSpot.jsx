import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";


const AllTouristSpot = () => {
    const allTouristSpot = useLoaderData();
    
    return (
        <div className="grid lg:grid-cols-2 gap-4 mt-10 p-4">
            {
                allTouristSpot.map(item=><SingleSpot key={item._id} item={item}></SingleSpot>)
            }
        </div>
    );
};

export default AllTouristSpot;