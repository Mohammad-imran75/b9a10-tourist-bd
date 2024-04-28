import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-raleway bg-pink-300 border lg: max-w-5xl p-6 rounded-lg mx-auto mt-10">
       <Helmet>
        <title>Not Found Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h2 className="text-7xl text-center font-bold text-red-600">!!Sorry</h2>
      <h1 className="text-center text-4xl font-poppins font-semibold mt-4">
        We Could not find that page{" "}
      </h1>
      <p className="text-center">
        Try searching or Go To{" "}
        <Link className="text-blue-600 font-bold text-3xl" to="/">
          Home
        </Link>
      </p>
      <img
        src="https://i.ibb.co/n3ncG5V/cute-spitz.jpg"
        className="lg:w-[300px] mt-4 rounded-xl mx-auto"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
