import { useLoaderData } from "react-router-dom";


const AllTouristSpot = () => {
    const allTouristSpot = useLoaderData();
    console.log(allTouristSpot)
    return (
        <div>
            <h1 className="text-5xl">allTourist {allTouristSpot.length}</h1>
        </div>
    );
};

export default AllTouristSpot;