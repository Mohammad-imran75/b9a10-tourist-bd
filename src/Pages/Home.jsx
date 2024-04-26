import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import SpotCard from "./SpotCard";


const Home = () => {
    const touristSpots = useLoaderData().slice(0,6)
    console.log(touristSpots)
    return (
        <div>
            <div>
                <Slider></Slider>
                <div className="grid lg:grid-cols-2 gap-4 mt-10 p-4">
                    {
                        touristSpots.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;