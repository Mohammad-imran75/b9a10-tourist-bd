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
                <h2 className="text-5xl text-center mt-7 text-stone-700 font-extrabold">Tourist <span className="text-purple-600">Spot</span> <br /> seciton</h2>
                <div className="grid lg:grid-cols-3 gap-4 mt-10 p-4">
                    {
                        touristSpots.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;