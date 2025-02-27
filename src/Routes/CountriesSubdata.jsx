import { Link } from "react-router-dom";

const CountriesSubdata = ({ property }) => {
  console.log(property);
  const { countryName, image, description } = property;
  return (
    <div>
      <div className="card w-96 bg-indigo-300 shadow-xl space-y-3 font-raleway mt-5">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-gray-900">Name : {countryName}</h2>
          <p>Description : {description}</p>
          <div className="card-actions w-full">
            <Link to={`/countriesDetails/${countryName}`}>
              {" "}
              <button className="btn btn-primary bg-lime-900">
                view details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesSubdata;
