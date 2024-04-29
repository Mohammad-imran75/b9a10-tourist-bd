import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaLocationPin } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const CountriesMatchDetails = () => {
  const { countryName } = useParams();
  const [allSpotsCountries, setAllSpotCountries] = useState(null);
  console.log(allSpotsCountries);
  useEffect(() => {
    fetch(
      `https://assignment-ten-serverside.vercel.app/countries/${countryName}`
    )
      .then((res) => res.json())
      .then((data) => setAllSpotCountries(data));
  }, [countryName]);
  if (!allSpotsCountries) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div>
      {allSpotsCountries.map((country) => (
        <>
          <div className="card card-side lg:max-w-5xl mx-auto pl-10 mt-5 mb-5 font-montserrat font-semibold bg-indigo-300 shadow-lg space-y-3">
            <Helmet>
              <title>All view details page</title>
              <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="card-body">
              <h2 className="text-stone-900 font-bold">
                Country Name : {country.coutryName}
              </h2>
              <h2 className="card-title">{country.touristSpot}</h2>
              <div className="flex justify-between">
                <p>Seasonality : {country.seasonality}</p>
              </div>
              <p className="text-bold flex items-center gap-4">
                <FaLocationPin className="text-red-500 text-2xl"></FaLocationPin>
                {country.location}
              </p>
              <div className="flex justify-between">
                <p>Average Cost : {country.cost}</p>
              </div>
              <p>Description:{country.description}</p>
              <div>
                <Link to={`/countryViewDetails/${country._id}`}><button className="btn btn-secondary bg-violet-950 mt-2">View Country property</button></Link>
            </div>
            </div>
           
          </div>
        </>
      ))}
    </div>
  );
};

export default CountriesMatchDetails;
